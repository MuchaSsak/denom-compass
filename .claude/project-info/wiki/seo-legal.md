# SEO, accessibility & legal

## Metadata (`src/layouts/Base.astro`)
- Title `"{page} · {siteName}"`; site name "Denomination Compass" / "Kompas denominacji".
- `metaDesc()` trims every description to ≤160 chars at a sentence end (else a word + "…"). Council and creed pages build richer descriptions (name, year, place + summary + a translated "what's on this page" tail).
- Canonical (no trailing slash), `hreflang` en / pl / x-default, Open Graph + Twitter (`/og-en.png`, `/og-pl.png`, 1200×630, rendered by `npm run og` = `scripts/og.ts`), `og:locale` + alternate, keywords, author, `rel=me` to the author's profiles.
- JSON-LD `@graph`: WebSite + Person (author, `sameAs` = `SAME_AS` list) only on the locale home; WebPage + BreadcrumbList elsewhere.
- Sitemap: `@astrojs/sitemap` with i18n alternates, filtered to `/en|/pl` pages, no `lastmod`. `public/robots.txt` disallows `/api/` and links the sitemap.

## Accessibility & mobile rules
- Exactly one `<h1>` per page; long Polish compounds ("Konstantynopolitański") wrap via the global `h1-h4 { overflow-wrap: break-word; hyphens: auto; min-width: 0 }` and title-page h1s use `text-[clamp(1.5rem,6.8vw,2.25rem)]` on phones.
- Grid/flex cards that contain long titles need `min-w-0`.
- Icon-only links/buttons need `aria-label` (logo link uses the site name). If an `aria-label` is set on a link with visible text, the label must start with that text (council-number tiles: "2. Constantinople I (381) - accepted").
- Badges on Astro pages use a shared SVG sprite (`<symbol id="ic-{id}">` emitted once in Base, `<use href="#ic-{id}">` in `Badge.astro`) to keep the DOM small; Svelte islands still inline icons.

## QA scripts (scratchpad, not in the repo)
A Playwright crawl of every sitemap URL at 390 px checks: horizontal overflow, console/page errors, HTTP ≥400, broken internal links, `img` without alt, h1 count, description length, `html lang`, and English leftovers on `/pl` pages (proper names like "Book of Common Prayer" are expected). Last run 2026-11-17: 102 pages, 0 issues.

Lighthouse mobile (gzip server, 2026-11-17, after fixes): /pl/quiz 95, /en/results 97, /pl/councils/chalcedon 90, /en/doctrines 98 performance; Accessibility, Best Practices and SEO 100 on all four. Fonts are the main remaining cost: Fraunces uses the Fontsource `soft` cut (wght + SOFT axes, ~62 KB latin, half of `full`), plus Inter latin-ext for Polish diacritics.
