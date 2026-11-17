export type OptionId = string;

export interface QuestionOption {
  id: OptionId;
  label: string;
  /** Short label for compact tables */
  short?: string;
  /** One-line clarification shown in the option's tooltip */
  detail?: string;
  /** Established technical name, shown at the end of the tooltip, e.g. "soul sleep" (src/data/optionTerms.ts) */
  term?: string;
  /** Compass contribution: x = symbolic(-1) ↔ sacramental(+1), y = sovereign grace(-1) ↔ cooperative grace(+1) */
  axes?: { x?: number; y?: number };
}

export interface Question {
  id: string;
  /** topic slug used on /doctrines */
  topic: string;
  /** yesno = two big tiles (Y/N keys); choice = lettered cards */
  kind: 'yesno' | 'choice';
  text: string;
  /** one-line helper under the question */
  hint?: string;
  /** 2–4 sentence plain-language explanation shown in the "What does this mean?" popover */
  explain: string;
  weight: number;
  options: QuestionOption[];
}

/** score 0..1 per option for a denomination */
export type Stance = Record<OptionId, number>;

export interface Notice {
  tone: 'info' | 'caution';
  title: string;
  text: string;
}

export interface Denomination {
  id: string;
  name: string;
  short: string;
  family: 'Catholic' | 'Orthodox' | 'Church of the East' | 'Protestant' | 'Restorationist' | 'Nontrinitarian';
  color: string;
  accent: string;
  tagline: string;
  summary: string;
  /** Disclosure shown on profile + results (e.g. outside Nicene Christianity) */
  notice?: Notice;
  origin: { year: string; event: string; figures: string[] };
  adherents: string;
  documents: string[];
  /** ecumenical councils accepted (Catholic numbering 1..21) */
  councils: number[];
  councilsNote: string;
  sacraments: string;
  governance: string;
  worship: string;
  doctrines: string[];
  distinctives: string[];
  branches: string[];
  stances: Record<string, Stance>;
}

export interface Council {
  n: number;
  name: string;
  year: string;
  place: string;
  summary: string;
  decisions: string[];
}

/** Extra "at a glance" facts for a council's detail page (raw/council-details.md). */
export interface CouncilDetail {
  convokedBy: string;
  presided?: string;
  attendance: string;
  context: string;
  issue: { name: string; view: string };
  figures: string[];
  term?: { word: string; gloss: string } | null;
  outcome: string;
  dissent: { who: string; why: string }[];
  /** Related doctrine topics (/doctrines#id) and creeds (/creeds/id). */
  topics?: string[];
  creeds?: string[];
}

export type Answers = Record<string, OptionId | 'skip'>;
/** Free-text notes per question id, plus `_general` for the overall reflection. */
export type Notes = Record<string, string>;
