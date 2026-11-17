# Deploy & runtime

## Adapters (`astro.config.mjs`)
- `process.env.VERCEL` set (Vercel build) → `@astrojs/vercel` with `maxDuration: 120`. Output: `.vercel/output` (Build Output API v3), one Node 22 function `_render` for `/api/analyze`; everything else prerendered static.
- Otherwise → `@astrojs/node` standalone. `npm run preview` = `astro build && astro preview --force` (`--force` replaces a stale preview server - Astro 7 tracks them).

## Vercel
- `vercel.json`: framework astro, `npm ci`, `npm run build`, security headers (`nosniff`, referrer policy). No `outputDirectory` - the adapter's `.vercel/output` is used.
- `package.json › engines.node >=22.12` (function runtime nodejs22.x).
- Set `OPENROUTER_API_KEY` (and optionally `OPENROUTER_MODEL`) in Vercel env vars, all environments. See [[ai]].
- Verified locally: `VERCEL=1 npx astro build` produces `.vercel/output/config.json` routing `/api/analyze` → `_render`, `.vc-config.json` `runtime nodejs22.x, maxDuration 120`. Not yet deployed.

## Gitignored
`dist/`, `.astro/`, `.vercel/`, `node_modules/`, `.env`, `.env.local`, `.env.*.local`, `CLAUDE.local.md`.
