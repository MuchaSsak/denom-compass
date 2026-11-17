/**
 * Locale-aware data. English lives in the base data files; other locales are
 * text-only overlays in `src/data/<lang>/*.ts`, merged by id. Scoring data
 * (stances, weights, axes, council numbers) is never translated.
 */
import type { Council, CouncilDetail, Denomination, Question } from './types';
import type { Creed, Part } from './creeds';
import type { Topic } from './topics';
import { questions as enQuestions } from './questions';
import { denominations as enDenominations } from './denominations';
import { topics as enTopics } from './topics';
import { councils as enCouncils, schisms as enSchisms } from './councils';
import { councilDetails as enCouncilDetails } from './councilDetails';
import { creeds as enCreeds, confessions as enConfessions } from './creeds';
import plQuestions from './pl/questions';
import plProfiles from './pl/profiles';
import plTopics from './pl/topics';
import plCouncils from './pl/councils';
import plCouncilDetails from './pl/councilDetails';
import plCreeds from './pl/creeds';
import { optionTerms } from './optionTerms';
import type { Lang } from '../i18n';

const withTerms = (qs: Question[], lang: Lang): Question[] =>
  qs.map((q) => ({ ...q, options: q.options.map((o) => ({ ...o, term: optionTerms[q.id]?.[o.id]?.[lang] })) }));

/* ---------- overlay shapes (text only) ---------- */
export type QuestionsOverlay = Record<string, {
  text: string; hint?: string; explain: string;
  options: Record<string, { label: string; short?: string; detail?: string }>;
}>;
export type ProfilesOverlay = Record<string, {
  name: string; short: string; tagline: string; summary: string;
  notice?: { title: string; text: string };
  origin: { year: string; event: string; figures: string[] };
  adherents: string; documents: string[]; councilsNote: string;
  sacraments: string; governance: string; worship: string;
  doctrines: string[]; distinctives: string[]; branches: string[];
}>;
export type TopicsOverlay = Record<string, { title: string; summary: string; scripture: string[]; milestone: string }>;
export type CouncilsOverlay = {
  councils: Record<string, { name: string; year: string; place: string; summary: string; decisions: string[] }>;
  schisms: { year: string; title: string; text: string }[];
};
export type CouncilDetailsOverlay = Record<string, Omit<CouncilDetail, 'topics' | 'creeds'>>;
export type CreedsOverlay = {
  creeds: Record<string, {
    name: string; date: string; tagline: string; origin: string; text: Part[][]; fullTextNote?: string;
    usedBy?: Record<string, string>; rejectedBy?: Record<string, string>; keyPoints: string[];
  }>;
  confessions: { name: string; year: string; text: string }[];
};

export interface LocalData {
  questions: Question[];
  denominations: Denomination[];
  denominationById: Record<string, Denomination>;
  topics: Topic[];
  topicTitles: Record<string, string>;
  councils: Council[];
  schisms: typeof enSchisms;
  councilDetails: Record<number, CouncilDetail>;
  creeds: Creed[];
  confessions: typeof enConfessions;
}

/** Use the overlay array only when it lines up with the base one. */
const arr = <T,>(base: T[], over?: T[]) => (over && over.length === base.length ? over : base);

function build(q: QuestionsOverlay, p: ProfilesOverlay, t: TopicsOverlay, c: CouncilsOverlay, cd: CouncilDetailsOverlay, cr: CreedsOverlay): LocalData {
  const questions = enQuestions.map((x) => {
    const o = q[x.id];
    if (!o) return x;
    return {
      ...x, text: o.text, hint: o.hint ?? x.hint, explain: o.explain,
      options: x.options.map((op) => ({ ...op, ...(o.options[op.id] ?? {}) })),
    };
  });
  const denominations = enDenominations.map((d) => {
    const o = p[d.id];
    if (!o) return d;
    return {
      ...d, ...o,
      notice: d.notice && o.notice ? { ...d.notice, ...o.notice } : d.notice,
      origin: { year: o.origin.year, event: o.origin.event, figures: arr(d.origin.figures, o.origin.figures) },
      documents: o.documents, doctrines: o.doctrines, distinctives: o.distinctives, branches: o.branches,
    };
  });
  const topics = enTopics.map((x) => ({ ...x, ...(t[x.id] ?? {}) }));
  const councils = enCouncils.map((x) => {
    const o = c.councils[x.n];
    return o ? { ...x, ...o, decisions: arr(x.decisions, o.decisions) } : x;
  });
  const schisms = enSchisms.map((x, i) => ({ ...x, ...(c.schisms[i] ?? {}) }));
  const councilDetails = Object.fromEntries(
    Object.entries(enCouncilDetails).map(([n, x]) => {
      const o = cd[n];
      return [n, o ? { ...x, ...o, figures: arr(x.figures, o.figures), dissent: arr(x.dissent, o.dissent) } : x];
    }),
  ) as Record<number, CouncilDetail>;
  const creeds = enCreeds.map((x) => {
    const o = cr.creeds[x.id];
    if (!o) return x;
    return {
      ...x, name: o.name, date: o.date, tagline: o.tagline, origin: o.origin, text: o.text,
      fullTextNote: o.fullTextNote ?? x.fullTextNote, keyPoints: o.keyPoints,
      usedBy: x.usedBy.map((u) => ({ ...u, note: u.note && (o.usedBy?.[u.id] ?? u.note) })),
      rejectedBy: x.rejectedBy?.map((u) => ({ ...u, note: u.note && (o.rejectedBy?.[u.id] ?? u.note) })),
    };
  });
  const confessions = enConfessions.map((x, i) => ({ ...x, ...(cr.confessions[i] ?? {}) }));
  return {
    questions: withTerms(questions, 'pl'), denominations,
    denominationById: Object.fromEntries(denominations.map((d) => [d.id, d])),
    topics, topicTitles: Object.fromEntries(topics.map((x) => [x.id, x.title])),
    councils, schisms, councilDetails, creeds, confessions,
  };
}

const en: LocalData = {
  questions: withTerms(enQuestions, 'en'), denominations: enDenominations,
  denominationById: Object.fromEntries(enDenominations.map((d) => [d.id, d])),
  topics: enTopics, topicTitles: Object.fromEntries(enTopics.map((x) => [x.id, x.title])),
  councils: enCouncils, schisms: enSchisms, councilDetails: enCouncilDetails, creeds: enCreeds, confessions: enConfessions,
};
let pl: LocalData | null = null;

export function dataFor(lang: Lang): LocalData {
  if (lang === 'pl') return (pl ??= build(plQuestions, plProfiles, plTopics, plCouncils, plCouncilDetails, plCreeds));
  return en;
}
