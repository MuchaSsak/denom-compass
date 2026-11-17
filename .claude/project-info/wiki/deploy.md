# Deploy & runtime

Live: **https://denoms.muszarski.com** (Vercel, region `fra1`). Sitemap: `/sitemap-index.xml` → `/sitemap-0.xml`.

## Adapters (`astro.config.mjs`)
- `process.env.VERCEL` set (Vercel build) → `@astrojs/vercel` with `maxDuration: 60` (Hobby plan limit). Output: `.vercel/output` (Build Output API v3), one Node 22 function `_render` for `/api/analyze`; every page is prerendered static.
- Otherwise → `@astrojs/node` standalone. `npm run preview` = `astro build && astro preview --force`.
- `site` = env `SITE_URL` or `https://denoms.muszarski.com` (canonical, hreflang, sitemap, OG URLs).
- `trailingSlash: 'never'` with the default directory build format. `build.format: 'file'` was tried and broke the Node preview (404 on `/en`) - keep directory format.

## Routing / redirects
- `/` → `/pl` or `/en`: Vercel redirect in `vercel.json` on `Accept-Language` (`^\s*pl…` → `/pl`, else `/en`, 307). Fallback `src/pages/index.astro` redirects in JS by `dc:lang` or `navigator.language`, with noscript meta refresh and visible EN/PL links.
- Old un-prefixed URLs (`/quiz`, `/results`, `/doctrines`, `/councils`, `/creeds`, `/privacy`, `/terms`) → `/en/...` 308 via Astro `redirects` (compiled into Vercel routes). Deeper old paths are handled by `src/pages/404.astro` (JS redirect to the preferred language).
- Trailing slash `/x/` → `/x` 308 (adapter route).

## Headers
- `vercel.json`: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: SAMEORIGIN`, `Permissions-Policy` (camera/microphone/geolocation off). Vercel adds HSTS. Verified on the live site that `vercel.json` headers and redirects apply alongside the adapter output.
- `/_astro/*` gets `public, max-age=31536000, immutable` from the adapter.

## Env
`OPENROUTER_API_KEY` (and optionally `OPENROUTER_MODEL`) in Vercel env vars, all environments. See [[ai]].

## Local QA tooling (not in the repo)
- Lighthouse: serve `dist/client` with gzip (`npx serve dist/client`) - `astro preview` does not compress, so it under-reports performance by 10-20 points.
- On Windows, stop preview/serve processes before `astro build`, or the asset move fails with `EPERM`.

## Gitignored
`dist/`, `.astro/`, `.vercel/`, `node_modules/`, `.env`, `.env.local`, `.env.*.local`, `CLAUDE.local.md`.
