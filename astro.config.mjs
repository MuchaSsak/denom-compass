// @ts-check
import { defineConfig, envField } from 'astro/config';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { lingui } from '@lingui/vite-plugin';

// Vercel sets VERCEL=1 during its build → serverless functions there.
// Everywhere else (npm run preview / dev) → standalone Node server.
const onVercel = !!process.env.VERCEL;

// Absolute URLs for canonical, hreflang, sitemap and Open Graph tags.
const site = process.env.SITE_URL || 'https://denoms.muszarski.com';

export default defineConfig({
  site,
  // Canonical URLs have no trailing slash (/en/councils); sitemap and Vercel follow suit.
  trailingSlash: 'never',
  // Pre-i18n URLs (shared links) → English. The Vercel adapter turns these into 308 routes.
  redirects: Object.fromEntries(
    ['quiz', 'results', 'doctrines', 'councils', 'creeds', 'privacy', 'terms'].map((p) => [`/${p}`, { status: 308, destination: `/en/${p}` }]),
  ),
  // Pages are prerendered (static); only /api/* runs on the server.
  adapter: onVercel
    ? vercel({ maxDuration: 60 }) // free models can take ~20–90 s
    : node({ mode: 'standalone' }),
  integrations: [
    svelte(),
    // One sitemap with xhtml:link hreflang alternates for /en and /pl; the "/" redirect and 404 are excluded.
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', pl: 'pl' } },
      filter: (page) => /\/(en|pl)(\/|$)/.test(new URL(page).pathname),
    }),
  ],
  vite: { plugins: [tailwindcss(), lingui()] },
  env: {
    schema: {
      OPENROUTER_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      OPENROUTER_MODEL: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
});
