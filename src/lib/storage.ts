import type { Answers, Notes } from '../data/types';

const KEY_PROGRESS = 'dc:progress:v1';
const KEY_HISTORY = 'dc:history:v1';
const KEY_NOTES = 'dc:notes:v1';
const KEY_AI = 'dc:ai:v1';

export interface Progress {
  answers: Answers;
  index: number;
  updatedAt: number;
}

export interface HistoryEntry {
  answers: Answers;
  topId: string;
  topPercent: number;
  finishedAt: number;
}

function read<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function write(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable - app still works for this session */
  }
}

export const loadProgress = () => read<Progress>(KEY_PROGRESS);
export const saveProgress = (p: Progress) => write(KEY_PROGRESS, p);
export const clearProgress = () => {
  try { localStorage.removeItem(KEY_PROGRESS); } catch { /* noop */ }
};

export const loadHistory = () => read<HistoryEntry[]>(KEY_HISTORY) ?? [];
export function pushHistory(entry: HistoryEntry) {
  const list = loadHistory();
  list.unshift(entry);
  write(KEY_HISTORY, list.slice(0, 10));
}
export const latestResult = () => loadHistory()[0] ?? null;
export function clearHistory() {
  try { localStorage.removeItem(KEY_HISTORY); } catch { /* noop */ }
}

/** Encode answers into a compact, shareable URL hash: one char per question. */
export function encodeAnswers(answers: Answers, order: { id: string; options: { id: string }[] }[]) {
  return order
    .map((q) => {
      const a = answers[q.id];
      if (!a || a === 'skip') return '_';
      const i = q.options.findIndex((o) => o.id === a);
      return i < 0 ? '_' : String(i);
    })
    .join('');
}

export function decodeAnswers(code: string, order: { id: string; options: { id: string }[] }[]): Answers | null {
  // Older links may be shorter (questions are only ever appended): missing answers count as skipped.
  if (!code || code.length > order.length || !/^[0-9_]+$/.test(code)) return null;
  code = code.padEnd(order.length, '_');
  const out: Answers = {};
  order.forEach((q, i) => {
    const c = code[i];
    if (c === '_') { out[q.id] = 'skip'; return; }
    const opt = q.options[Number(c)];
    out[q.id] = opt ? opt.id : 'skip';
  });
  return out;
}

/* ---------- free-text notes (per question + `_general`) ---------- */
export const NOTE_MAX = 600;
export const GENERAL_MAX = 2000;
export const loadNotes = (): Notes => read<Notes>(KEY_NOTES) ?? {};
export function saveNote(id: string, text: string) {
  const notes = loadNotes();
  const t = text.slice(0, id === '_general' ? GENERAL_MAX : NOTE_MAX);
  if (t.trim()) notes[id] = t;
  else delete notes[id];
  write(KEY_NOTES, notes);
  return notes;
}

/* ---------- cached AI reading ---------- */
export interface AiCache<T> { key: string; result: T; model: string; at: number }
export const loadAi = <T>() => read<AiCache<T>>(KEY_AI);
export const saveAi = <T>(c: AiCache<T>) => write(KEY_AI, c);
export const clearAi = () => { try { localStorage.removeItem(KEY_AI); } catch { /* noop */ } };

/** Stable cache key for a set of answers + notes. */
export function inputKey(answers: Answers, notes: Notes) {
  const s = JSON.stringify([Object.entries(answers).sort(), Object.entries(notes).sort()]);
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

/** Replace the answers of the latest finished result (e.g. after applying an AI suggestion). */
export function updateLatest(answers: Answers, topId: string, topPercent: number) {
  const list = loadHistory();
  if (!list.length) return;
  list[0] = { ...list[0], answers, topId, topPercent };
  write(KEY_HISTORY, list);
}
