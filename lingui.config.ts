import { defineConfig } from '@lingui/conf';
import { formatter } from '@lingui/format-po';
import { tExtractor } from './src/i18n/extractor';

/**
 * UI strings: English source text is the message id (`t('Next')`), extracted from
 * .astro/.svelte/.ts by a small custom extractor (Lingui has no Astro/Svelte one),
 * compiled on import by @lingui/vite-plugin. Data content (questions, profiles…)
 * is translated in src/data/<lang>/ overlays instead — see wiki/i18n.md.
 */
export default defineConfig({
  sourceLocale: 'en',
  locales: ['en', 'pl'],
  fallbackLocales: { default: 'en' },
  catalogs: [{ path: '<rootDir>/src/locales/{locale}', include: ['<rootDir>/src'], exclude: ['**/node_modules/**', '<rootDir>/src/data/**'] }],
  format: formatter({ lineNumbers: false }),
  extractors: [tExtractor],
  orderBy: 'messageId',
});
