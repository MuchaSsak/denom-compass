// @ts-check
import { defineConfig, envField } from 'astro/config';
import svelte from '@astrojs/svelte';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { lingui } from '@lingui/vite-plugin';

// Vercel sets VERCEL=1 during its build → serverless functions there.
// Everywhere else (npm run preview / dev) → standalone Node server.
const onVercel = !!process.env.VERCEL;

// Absolute URLs for canonical / Open Graph tags. Vercel provides the production domain.
const site = process.env.SITE_URL
  || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'https://denomination-compass.vercel.app');

export default defineConfig({
  site,
  // Pages are prerendered (static); only /api/* runs on the server.
  adapter: onVercel
    ? vercel({ maxDuration: 120 }) // free models can take ~20–90 s
    : node({ mode: 'standalone' }),
  integrations: [svelte()],
  vite: { plugins: [tailwindcss(), lingui()] },
  env: {
    schema: {
      OPENROUTER_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      OPENROUTER_MODEL: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
});
