import type { Answers, Denomination, Notes, Question } from '../data/types';
import { dominantStance } from './scoring';

/** What the model returns (after server-side validation). */
export interface AiReading {
  summary: string;
  matches: { id: string; fit: number; why: string }[];
  nuances: { questionId: string; suggested: string | null; reading: string }[];
  tensions: string[];
  followups: string[];
  /** Short reply to each note the person wrote ("general" = their own description). */
  replies: { about: string; reply: string }[];
}

export interface AiResponse {
  reading: AiReading;
  model: string;
}

/** Tried in order until one returns parseable JSON. `openrouter/free` routes to any available free model. */
export const DEFAULT_MODELS = [
  'nvidia/nemotron-3-ultra-550b-a55b:free',
  'openrouter/free',
];

export function buildPrompt(
  questions: Question[],
  denoms: Denomination[],
  answers: Answers,
  notes: Notes,
  ranking: { id: string; percent: number }[],
  lang: 'en' | 'pl' = 'en',
) {
  const traditions = denoms
    .map((d) => {
      const pos = questions.map((q) => `${q.id}=${dominantStance(d, q).label}`).join('; ');
      return `- ${d.id} | ${d.name} (${d.family})${d.notice ? ' [nontrinitarian]' : ''}\n  doctrines: ${d.doctrines.join('; ')}\n  positions: ${pos}`;
    })
    .join('\n');

  const user = questions
    .map((q) => {
      const a = answers[q.id];
      const opt = q.options.find((o) => o.id === a);
      const ans = !a || a === 'skip' ? 'SKIPPED (unsure)' : `"${opt?.label ?? a}"`;
      const note = notes[q.id]?.trim();
      return `[${q.id}] ${q.text}\n  options: ${q.options.map((o) => `${o.id}="${o.short ?? o.label}"`).join(', ')}\n  answer: ${ans}${note ? `\n  their words: """${note}"""` : ''}`;
    })
    .join('\n');

  const general = notes._general?.trim();

  const system = `You are a careful, even-handed guide to Christian theology. You compare a person's beliefs with the official teaching of Christian traditions. You never mock or proselytise, and you never tell anyone which church they "should" join. Be concise and concrete. Write in second person ("you").

Respond with ONLY a JSON object (no markdown, no prose outside JSON) of this exact shape:
{
  "summary": string,            // 2-4 sentences: the shape of this person's theology in plain words
  "matches": [                  // exactly 3, best first, ids from the TRADITIONS list
    { "id": string, "fit": number /* 0-100 */, "why": string /* 1-2 sentences citing specific beliefs */ }
  ],
  "nuances": [                  // 0-6 items, ONLY where their own words add information beyond the click answer
    { "questionId": string, "suggested": string | null /* an option id from that question if their words fit a different option better, else null */, "reading": string /* 1 sentence */ }
  ],
  "tensions": [string],         // 0-3 short notes on answers that pull in different directions (be gentle)
  "followups": [string],        // 0-2 questions they could reflect on to clarify their position
  "replies": [                  // one per piece of "their words" (general description + each question note), in the order given; [] if they wrote nothing
    { "about": string /* "general" or the question id */, "reply": string /* 1-3 short sentences replying to what they wrote: answer any question they ask, briefly explain any term, idea or history they seem unsure or mistaken about, otherwise note how their view fits the traditions. Plain words, friendly, no lecturing */ }
  ]
}`;

  const prompt = `TRADITIONS (id | name; their key doctrines; their dominant position per question id):
${traditions}

THE PERSON'S ANSWERS:
${user}

${general ? `THE PERSON'S OWN DESCRIPTION OF THEIR FAITH:\n"""${general}"""\n` : ''}
ALGORITHMIC RANKING (weighted agreement on the clicked answers only): ${ranking.slice(0, 6).map((r) => `${r.id} ${r.percent}%`).join(', ')}

${lang === 'pl' ? 'LANGUAGE: Write every string value in Polish (pl-PL), addressing the person informally ("ty"), using standard Polish theological terms (e.g. Trójca Święta, usprawiedliwienie, przeistoczenie, sukcesja apostolska). Keep JSON keys and ids in English.\n\n' : ''}Weigh their own words most heavily where given (their notes may also contain questions or uncertainty — answer those in "replies"); they may reveal nuance a click cannot. You may disagree with the algorithmic ranking if their words justify it. Return the JSON object now.`;

  return { system, prompt };
}

/**
 * Pull the first JSON object out of a model reply. Handles ```json fences, stray prose,
 * <think> blocks, trailing commas and replies cut off mid-object (closes open brackets).
 */
export function extractJson(text: string): unknown {
  const clean = text.replace(/<think>[\s\S]*?<\/think>/g, '');
  const fenced = clean.match(/```(?:json)?\s*([\s\S]*?)(?:```|$)/);
  const body = fenced && fenced[1].includes('{') ? fenced[1] : clean;
  const start = body.indexOf('{');
  if (start < 0) throw new Error('No JSON object in model reply');
  const end = body.lastIndexOf('}');
  const candidate = end > start ? body.slice(start, end + 1) : body.slice(start);
  try {
    return JSON.parse(candidate);
  } catch {
    return JSON.parse(repairJson(body.slice(start)));
  }
}

/** Best-effort fix for truncated / sloppy JSON: drop a dangling partial value, close strings and brackets. */
export function repairJson(src: string): string {
  let out = '';
  const stack: string[] = [];
  let inStr = false, esc = false;
  for (const ch of src) {
    out += ch;
    if (inStr) {
      if (esc) esc = false;
      else if (ch === '\\') esc = true;
      else if (ch === '"') inStr = false;
      continue;
    }
    if (ch === '"') inStr = true;
    else if (ch === '{' || ch === '[') stack.push(ch === '{' ? '}' : ']');
    else if (ch === '}' || ch === ']') {
      stack.pop();
      if (!stack.length) break;
    }
  }
  if (inStr) out += '"';
  // remove a trailing key without value / dangling comma or colon
  out = out.replace(/,\s*"[^"]*"\s*:?\s*"?$/, '').replace(/[,:]\s*$/, '');
  out += stack.reverse().join('');
  return out.replace(/,(\s*[}\]])/g, '$1');
}

/** Validate & sanitise model output against known ids. */
export function sanitize(raw: unknown, questions: Question[], denomIds: Set<string>, noteIds?: Set<string>): AiReading {
  const o = (raw ?? {}) as Record<string, unknown>;
  const str = (v: unknown, max = 600) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
  const arr = (v: unknown) => (Array.isArray(v) ? v : []);
  const qById = new Map(questions.map((q) => [q.id, q]));

  const matches = arr(o.matches)
    .map((m) => m as Record<string, unknown>)
    .filter((m) => typeof m.id === 'string' && denomIds.has(m.id))
    .slice(0, 3)
    .map((m) => ({ id: m.id as string, fit: Math.max(0, Math.min(100, Math.round(Number(m.fit) || 0))), why: str(m.why, 400) }));

  const nuances = arr(o.nuances)
    .map((n) => n as Record<string, unknown>)
    .filter((n) => typeof n.questionId === 'string' && qById.has(n.questionId))
    .slice(0, 6)
    .map((n) => {
      const q = qById.get(n.questionId as string)!;
      const sug = typeof n.suggested === 'string' && q.options.some((op) => op.id === n.suggested) ? (n.suggested as string) : null;
      return { questionId: q.id, suggested: sug, reading: str(n.reading, 300) };
    });

  const summary = str(o.summary, 900);
  if (!summary || matches.length === 0) throw new Error('Model reply missing summary or matches');
  return {
    summary,
    matches,
    nuances,
    tensions: arr(o.tensions).map((t) => str(t, 300)).filter(Boolean).slice(0, 3),
    followups: arr(o.followups).map((t) => str(t, 300)).filter(Boolean).slice(0, 2),
    replies: arr(o.replies)
      .map((r) => r as Record<string, unknown>)
      .map((r) => ({ about: r.about === '_general' ? 'general' : str(r.about, 40), reply: str(r.reply, 700) }))
      .filter((r) => r.reply && (r.about === 'general' ? !noteIds || noteIds.has('_general') : qById.has(r.about) && (!noteIds || noteIds.has(r.about))))
      .filter((r, i, all) => all.findIndex((x) => x.about === r.about) === i)
      .slice(0, questions.length + 1),
  };
}
