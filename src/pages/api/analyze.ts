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

  let body: { answers?: Answers; notes?: Notes; lang?: string };
  try { body = await request.json(); } catch { return json({ error: 'bad_request', message: 'Invalid JSON.' }, 400); }
  const lang = body.lang === 'pl' ? 'pl' : 'en';

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
  const { system, prompt } = buildPrompt(questions, denominations, answers, notes, ranking, lang);
  const denomIds = new Set(denominations.map((d) => d.id));
  const noteIds = new Set(Object.keys(notes));

  // Try each model in turn until one returns usable JSON, within the function's time budget
  // (Vercel maxDuration is 120 s). A slow or garbled reply moves on to the next model.
  const deadline = Date.now() + 110_000;
  let last: { error: string; message: string; status: number } = { error: 'parse', message: 'The model returned an unreadable answer. Try again.', status: 502 };
  for (const model of models()) {
    const remaining = deadline - Date.now();
    if (remaining < 10_000) break;
    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        signal: AbortSignal.timeout(Math.min(remaining, 75_000)),
        headers: {
          authorization: `Bearer ${key}`,
          'content-type': 'application/json',
          'HTTP-Referer': new URL(request.url).origin,
          'X-Title': 'Denomination Compass',
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: 'system', content: system },
            { role: 'user', content: prompt },
          ],
          temperature: 0.3,
          max_tokens: 8000,
          reasoning: { effort: 'low', exclude: true },
          response_format: { type: 'json_object' },
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) {
        const msg = data?.error?.message ?? `OpenRouter error ${res.status}`;
        console.warn(`[analyze] ${model}: HTTP ${res.status} ${String(msg).slice(0, 200)}`);
        last = res.status === 429
          ? { error: 'rate_limited', message: 'The free AI quota is used up for now. Try again later.', status: 429 }
          : { error: 'upstream', message: msg, status: 502 };
        continue;
      }
      const choice = data?.choices?.[0];
      const text: string = choice?.message?.content ?? '';
      try {
        const reading = sanitize(extractJson(text), questions, denomIds, noteIds);
        return json({ reading, model: data?.model ?? model } satisfies AiResponse);
      } catch (e) {
        console.warn(`[analyze] ${model}: unusable reply (${(e as Error).message}); finish=${choice?.finish_reason}; chars=${text.length}; head=${JSON.stringify(text.slice(0, 160))}`);
        last = { error: 'parse', message: 'The model returned an unreadable answer. Try again.', status: 502 };
      }
    } catch (e) {
      const timedOut = (e as Error).name === 'TimeoutError' || (e as Error).name === 'AbortError';
      console.warn(`[analyze] ${model}: ${timedOut ? 'timed out' : (e as Error).message}`);
      last = timedOut
        ? { error: 'timeout', message: 'The model took too long. Try again.', status: 504 }
        : { error: 'upstream', message: 'Could not reach the AI service.', status: 502 };
    }
  }
  return json({ error: last.error, message: last.message }, last.status);
};
