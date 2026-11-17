/**
 * Data + AI-parser sanity check. Run: npm run validate
 * 1. Every stance references real options; every question has a stance.
 * 2. Each tradition, answering with its own top options, ranks itself #1.
 * 3. The AI prompt builds and the reply parser survives junk (no network).
 */
import { denominations } from '../src/data/denominations';
import { questions } from '../src/data/questions';
import { rankAll, idealAnswers } from '../src/lib/scoring';
import { buildPrompt, extractJson, sanitize } from '../src/lib/ai';

let failures = 0;

for (const d of denominations) {
  for (const q of questions) {
    const st = d.stances[q.id];
    if (!st) { console.log(`MISSING ${d.id}.${q.id}`); failures++; continue; }
    for (const k of Object.keys(st)) {
      if (!q.options.some((o) => o.id === k)) { console.log(`BAD OPTION ${d.id}.${q.id}.${k}`); failures++; }
    }
  }
  const r = rankAll(denominations, questions, idealAnswers(d, questions));
  const self = r.find((x) => x.id === d.id)!;
  const rank = r.indexOf(self) + 1;
  const next = r.find((x) => x.id !== d.id)!;
  const ok = rank === 1;
  if (!ok) failures++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${d.id.padEnd(15)} self ${String(self.percent).padStart(3)}%  rank ${rank}  next: ${next.id} ${next.percent}%`);
}

// ---- AI prompt + parser (no network) ----
{
  const ideal = idealAnswers(denominations[0], questions);
  const ranking = rankAll(denominations, questions, ideal).map((r) => ({ id: r.id, percent: r.percent }));
  const { system, prompt } = buildPrompt(questions, denominations, ideal, { _general: 'I love liturgy.', eucharist: 'Real presence.' }, ranking);
  console.log(`ai   prompt ≈ ${Math.round((system.length + prompt.length) / 4)} tokens`);

  const fence = '```';
  const reply = `Sure!\n${fence}json\n${JSON.stringify({
    summary: 'You are sacramental.',
    matches: [{ id: 'lutheran', fit: 140, why: 'x' }, { id: 'martian', fit: 50, why: 'bad id' }, { id: 'anglican', fit: '80', why: 'y' }],
    nuances: [
      { questionId: 'eucharist', suggested: 'union', reading: 'r' },
      { questionId: 'eucharist', suggested: 'nope', reading: 'bad option' },
      { questionId: 'zzz', reading: 'bad question' },
    ],
    tensions: ['t1', 2],
    followups: ['f1', 'f2', 'f3'],
  })}\n${fence}`;
  const r = sanitize(extractJson(reply), questions, new Set(denominations.map((d) => d.id)));
  let threw = false;
  try { sanitize(extractJson('no json here'), questions, new Set()); } catch { threw = true; }

  const checks: [string, boolean][] = [
    ['fenced JSON parsed', r.summary === 'You are sacramental.'],
    ['unknown tradition dropped', r.matches.length === 2 && r.matches.every((m) => m.id !== 'martian')],
    ['fit clamped / coerced', r.matches[0].fit === 100 && r.matches[1].fit === 80],
    ['invalid option → null', r.nuances[0].suggested === 'union' && r.nuances[1].suggested === null],
    ['unknown question dropped', r.nuances.length === 2],
    ['non-strings dropped, lists capped', r.tensions.length === 1 && r.followups.length === 2],
    ['garbage reply throws', threw],
  ];
  for (const [name, ok] of checks) {
    if (!ok) failures++;
    console.log(`${ok ? 'ok  ' : 'FAIL'} ai: ${name}`);
  }
}

process.exit(failures ? 1 : 0);
