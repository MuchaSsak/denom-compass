// @ts-check
import { defineConfig, envField } from 'astro/config';
import svelte from '@astrojs/svelte';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// Vercel sets VERCEL=1 during its build → serverless functions there.
// Everywhere else (npm run preview / dev) → standalone Node server.
const onVercel = !!process.env.VERCEL;

export default defineConfig({
  // Pages are prerendered (static); only /api/* runs on the server.
  adapter: onVercel
    ? vercel({ maxDuration: 120 }) // free models can take ~20–90 s
    : node({ mode: 'standalone' }),
  integrations: [svelte()],
  vite: { plugins: [tailwindcss()] },
  env: {
    schema: {
      OPENROUTER_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      OPENROUTER_MODEL: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
});
