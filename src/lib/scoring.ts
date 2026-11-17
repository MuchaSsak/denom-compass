import type { Answers, Denomination, Question, Stance } from '../data/types';

export interface QuestionBreakdown {
  questionId: string;
  answer: string;
  score: number; // 0..1 agreement
  weight: number;
}

export interface MatchResult {
  id: string;
  percent: number; // 0..100, rounded
  raw: number; // 0..1 unrounded
  breakdown: QuestionBreakdown[];
}

/** Agreement of one denomination with a user's answers. Skipped questions are ignored. */
export function scoreDenomination(d: Denomination, questions: Question[], answers: Answers): MatchResult {
  let got = 0;
  let max = 0;
  const breakdown: QuestionBreakdown[] = [];
  for (const q of questions) {
    const a = answers[q.id];
    if (!a || a === 'skip') continue;
    const stance: Stance = d.stances[q.id] ?? {};
    // Normalise so the tradition's dominant position counts as full agreement:
    // a genuine 0.5/0.5 split stays partial (0.67) for either answer.
    const top = Math.max(0, ...Object.values(stance));
    const s = top > 0 ? clamp((stance[a] ?? 0) / Math.max(top, 0.75)) : 0;
    got += s * q.weight;
    max += q.weight;
    breakdown.push({ questionId: q.id, answer: a, score: s, weight: q.weight });
  }
  const raw = max === 0 ? 0 : got / max;
  return { id: d.id, raw, percent: Math.round(raw * 100), breakdown };
}

export function rankAll(denoms: Denomination[], questions: Question[], answers: Answers): MatchResult[] {
  return denoms
    .map((d) => scoreDenomination(d, questions, answers))
    .sort((a, b) => b.raw - a.raw);
}

/** Position on the 2D compass, -1..1 on each axis. */
export function compassFromAnswers(questions: Question[], answers: Answers) {
  return compass(questions, (q) => {
    const a = answers[q.id];
    return a && a !== 'skip' ? { [a]: 1 } : null;
  });
}

export function compassForDenomination(d: Denomination, questions: Question[]) {
  return compass(questions, (q) => d.stances[q.id] ?? null);
}

function compass(questions: Question[], pick: (q: Question) => Stance | null) {
  let x = 0, xw = 0, y = 0, yw = 0;
  for (const q of questions) {
    const st = pick(q);
    if (!st) continue;
    // expected axis value over the stance distribution
    let total = 0, ex = 0, ey = 0, hasX = false, hasY = false;
    for (const o of q.options) {
      const s = st[o.id] ?? 0;
      if (s <= 0) continue;
      total += s;
      if (o.axes?.x !== undefined) { ex += s * o.axes.x; hasX = true; }
      if (o.axes?.y !== undefined) { ey += s * o.axes.y; hasY = true; }
    }
    if (total === 0) continue;
    if (hasX) { x += (ex / total) * q.weight; xw += q.weight; }
    if (hasY) { y += (ey / total) * q.weight; yw += q.weight; }
  }
  return { x: xw ? x / xw : 0, y: yw ? y / yw : 0 };
}

const clamp = (n: number) => Math.max(0, Math.min(1, n));

/** A tradition's own answers: its highest-scored option on every question. */
export function idealAnswers(d: Denomination, questions: Question[]): Answers {
  const out: Answers = {};
  for (const q of questions) {
    const st = d.stances[q.id] ?? {};
    const best = Object.entries(st).sort((a, b) => b[1] - a[1])[0];
    out[q.id] = best ? best[0] : 'skip';
  }
  return out;
}

/** Labels of the option(s) a tradition holds most strongly, plus how firmly (0..1). */
export function dominantStance(d: Denomination, q: Question) {
  const st = d.stances[q.id] ?? {};
  const max = Math.max(0, ...Object.values(st));
  const opts = q.options.filter((o) => max > 0 && (st[o.id] ?? 0) === max);
  return { options: opts, strength: max, label: opts.map((o) => o.short ?? o.label).join(' / ') || '—' };
}
