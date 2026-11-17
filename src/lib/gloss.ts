import { glossary } from '../data/glossary';
import type { Part } from '../data/creeds';
import type { Lang } from '../i18n';

/**
 * Returns a function that splits text into plain strings and { t, note } glossary
 * hits. Each term is annotated only the first time it appears on the page.
 */
export function makeGlosser(lang: Lang, skip: string[] = []) {
  const entries = glossary.map((g) => g[lang]);
  const re = new RegExp(`(?<!\\p{L})(?:${entries.map(([p]) => `(${p.join('|')})`).join('|')})(?!\\p{L})`, 'giu');
  const seen = new Set<number>();
  const skipRe = skip.map((s) => s.toLowerCase());
  return (text: string): Part[] => {
    const out: Part[] = [];
    let last = 0;
    for (const m of text.matchAll(re)) {
      const i = m.slice(1).findIndex((x) => x !== undefined);
      if (i < 0 || seen.has(i) || skipRe.includes(m[0].toLowerCase())) continue;
      seen.add(i);
      if (m.index! > last) out.push(text.slice(last, m.index));
      out.push({ t: m[0], note: entries[i][1] });
      last = m.index! + m[0].length;
    }
    if (last < text.length) out.push(text.slice(last));
    return out;
  };
}
