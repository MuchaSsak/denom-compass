/** Debug: send one analysis prompt to each model and report finish reason / timing / parse. Never prints the key. */
import { questions } from '../src/data/questions';
import { denominations } from '../src/data/denominations';
import { rankAll, idealAnswers } from '../src/lib/scoring';
import { buildPrompt, extractJson, sanitize, DEFAULT_MODELS } from '../src/lib/ai';

try { process.loadEnvFile(); } catch { /* none */ }
const key = process.env.OPENROUTER_API_KEY;
if (!key) { console.log('no key in env'); process.exit(1); }
const models = process.argv.slice(2).length ? process.argv.slice(2) : DEFAULT_MODELS;
const answers = idealAnswers(denominations.find((d) => d.id === 'lutheran')!, questions);
const notes = { _general: 'I grew up Catholic but now go to a Lutheran church. Not sure what "sacramental union" means.', eucharist: 'Is it really his body?' };
const ranking = rankAll(denominations, questions, answers).map((r) => ({ id: r.id, percent: r.percent }));
const { system, prompt } = buildPrompt(questions, denominations, answers, notes, ranking);

for (const model of models) {
  const t0 = Date.now();
  try {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
      body: JSON.stringify({ model, messages: [{ role: 'system', content: system }, { role: 'user', content: prompt }], temperature: 0.3, max_tokens: 6000, reasoning: process.env.REASONING === 'off' ? { enabled: false } : { effort: 'low', exclude: true }, response_format: { type: 'json_object' } }),
      signal: AbortSignal.timeout(120_000),
    });
    const data: any = await res.json();
    const c = data?.choices?.[0];
    const text: string = c?.message?.content ?? '';
    let ok = 'n/a';
    try { const r = sanitize(extractJson(text), questions, new Set(denominations.map((d) => d.id)), new Set(Object.keys(notes))); ok = `OK (${r.matches.map((m) => m.id).join(',')}, replies ${r.replies.length})`; } catch (e) { ok = 'PARSE FAIL: ' + (e as Error).message; }
    console.log(`\n== ${model} → ${data?.model ?? '?'} | ${res.status} | ${((Date.now() - t0) / 1000).toFixed(1)}s | finish=${c?.finish_reason} | chars=${text.length} | usage=${JSON.stringify(data?.usage ?? {})}`);
    if (!res.ok) console.log('error:', JSON.stringify(data?.error).slice(0, 300));
    console.log(ok);
    if (!ok.startsWith('OK')) console.log('head:', JSON.stringify(text.slice(0, 300)), '\ntail:', JSON.stringify(text.slice(-200)));
  } catch (e) { console.log(`\n== ${model} threw after ${((Date.now() - t0) / 1000).toFixed(1)}s: ${(e as Error).message}`); }
}
