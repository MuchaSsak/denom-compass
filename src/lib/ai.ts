import type { Answers, Denomination, Notes, Question } from '../data/types';
import { dominantStance } from './scoring';

/** What the model returns (after server-side validation). */
export interface AiReading {
  summary: string;
  matches: { id: string; fit: number; why: string }[];
  nuances: { questionId: string; suggested: string | null; reading: string }[];
  tensions: string[];
  followups: string[];
}

export interface AiResponse {
  reading: AiReading;
  model: string;
}

export const DEFAULT_MODELS = [
  'nvidia/nemotron-3-ultra-550b-a55b:free',
  'google/gemma-4-31b-it:free',
  'openrouter/free',
];

export function buildPrompt(
  questions: Question[],
  denoms: Denomination[],
  answers: Answers,
  notes: Notes,
  ranking: { id: string; percent: number }[],
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
  "followups": [string]         // 0-2 questions they could reflect on to clarify their position
}`;

  const prompt = `TRADITIONS (id | name; their key doctrines; their dominant position per question id):
${traditions}

THE PERSON'S ANSWERS:
${user}

${general ? `THE PERSON'S OWN DESCRIPTION OF THEIR FAITH:\n"""${general}"""\n` : ''}
ALGORITHMIC RANKING (weighted agreement on the clicked answers only): ${ranking.slice(0, 6).map((r) => `${r.id} ${r.percent}%`).join(', ')}

Weigh their own words most heavily where given; they may reveal nuance a click cannot. You may disagree with the algorithmic ranking if their words justify it. Return the JSON object now.`;

  return { system, prompt };
}

/** Pull the first JSON object out of a model reply (handles ```json fences and stray prose). */
export function extractJson(text: string): unknown {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const body = fenced ? fenced[1] : text;
  const start = body.indexOf('{');
  const end = body.lastIndexOf('}');
  if (start < 0 || end <= start) throw new Error('No JSON object in model reply');
  return JSON.parse(body.slice(start, end + 1));
}

/** Validate & sanitise model output against known ids. */
export function sanitize(raw: unknown, questions: Question[], denomIds: Set<string>): AiReading {
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
  };
}
