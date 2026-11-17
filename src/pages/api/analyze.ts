import type { APIRoute } from 'astro';
import { OPENROUTER_API_KEY, OPENROUTER_MODEL } from 'astro:env/server';
import { questions } from '../../data/questions';
import { denominations } from '../../data/denominations';
import { rankAll } from '../../lib/scoring';
import { buildPrompt, extractJson, sanitize, DEFAULT_MODELS, type AiResponse } from '../../lib/ai';
import { NOTE_MAX, GENERAL_MAX } from '../../lib/storage';
import type { Answers, Notes } from '../../data/types';

export const prerender = false;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

function apiKey() {
  if (OPENROUTER_API_KEY) return OPENROUTER_API_KEY;
  // `astro preview` doesn't always inject .env into the server process — load it ourselves.
  try { process.loadEnvFile?.(); } catch { /* no .env */ }
  return process.env.OPENROUTER_API_KEY || '';
}
function models() {
  const m = OPENROUTER_MODEL || process.env.OPENROUTER_MODEL;
  return m ? m.split(',').map((s) => s.trim()).filter(Boolean) : DEFAULT_MODELS;
}

// tiny in-memory rate limit: 8 requests / minute / IP
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  list.push(now);
  hits.set(ip, list);
  return list.length > 8;
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const key = apiKey();
  if (!key) return json({ error: 'missing_key', message: 'Add OPENROUTER_API_KEY to .env and restart the server.' }, 503);
  if (limited(clientAddress ?? 'local')) return json({ error: 'rate_limited', message: 'Too many requests — wait a minute.' }, 429);

  let body: { answers?: Answers; notes?: Notes };
  try { body = await request.json(); } catch { return json({ error: 'bad_request', message: 'Invalid JSON.' }, 400); }

  // sanitise input against known ids & limits
  const answers: Answers = {};
  for (const q of questions) {
    const a = body.answers?.[q.id];
    answers[q.id] = typeof a === 'string' && (a === 'skip' || q.options.some((o) => o.id === a)) ? a : 'skip';
  }
  const notes: Notes = {};
  for (const [k, v] of Object.entries(body.notes ?? {})) {
    if (typeof v !== 'string' || !v.trim()) continue;
    if (k === '_general') notes[k] = v.slice(0, GENERAL_MAX);
    else if (questions.some((q) => q.id === k)) notes[k] = v.slice(0, NOTE_MAX);
  }
  if (!Object.values(answers).some((a) => a !== 'skip') && !Object.keys(notes).length) {
    return json({ error: 'empty', message: 'Answer some questions or write a few words first.' }, 400);
  }

  const ranking = rankAll(denominations, questions, answers).map((r) => ({ id: r.id, percent: r.percent }));
  const { system, prompt } = buildPrompt(questions, denominations, answers, notes, ranking);
  const chain = models();

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 90_000);
  try {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      signal: ctrl.signal,
      headers: {
        authorization: `Bearer ${key}`,
        'content-type': 'application/json',
        'HTTP-Referer': new URL(request.url).origin,
        'X-Title': 'Denomination Compass',
      },
      body: JSON.stringify({
        model: chain[0],
        models: chain, // OpenRouter falls back down this list on errors / rate limits
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: prompt },
        ],
        temperature: 0.3,
        max_tokens: 6000,
        reasoning: { effort: 'low', exclude: true },
      }),
    });
    const data = await res.json().catch(() => null);
    if (!res.ok) {
      const msg = data?.error?.message ?? `OpenRouter error ${res.status}`;
      return json({ error: 'upstream', message: msg }, res.status === 429 ? 429 : 502);
    }
    const text: string = data?.choices?.[0]?.message?.content ?? '';
    const reading = sanitize(extractJson(text), questions, new Set(denominations.map((d) => d.id)), new Set(Object.keys(notes)));
    return json({ reading, model: data?.model ?? chain[0] } satisfies AiResponse);
  } catch (e) {
    const aborted = (e as Error).name === 'AbortError';
    return json({ error: aborted ? 'timeout' : 'parse', message: aborted ? 'The model took too long. Try again.' : 'The model returned an unreadable answer. Try again.' }, 502);
  } finally {
    clearTimeout(timer);
  }
};
