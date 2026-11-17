import type { ExtractorType } from '@lingui/conf';

/**
 * Finds `t('…')`, `t("…")` and t(`…`) calls (no interpolation inside the literal) in
 * .astro / .svelte / .ts files. Placeholders use ICU syntax: t('{n} of {total}', { n, total }).
 */
const CALL = /(?<![\w$.])t\(\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"|`((?:[^`\\$]|\\.)*)`)/g;

export const tExtractor: ExtractorType = {
  match: (filename) => /\.(astro|svelte|ts)$/.test(filename) && !filename.includes('node_modules') && !/[\\/]src[\\/]data[\\/]/.test(filename),
  extract(filename, code, onMessageExtracted) {
    for (const m of code.matchAll(CALL)) {
      const raw = m[1] ?? m[2] ?? m[3];
      const id = raw.replace(/\\(.)/g, '$1');
      const line = code.slice(0, m.index).split('\n').length;
      onMessageExtracted({ id, message: id, origin: [filename, line] });
    }
  },
};
