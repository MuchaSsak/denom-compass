# Design

**Direction:** warm "illuminated manuscript meets modern app". Parchment background, ink text, gold accent, serif display. Calm, not gamey. References: [raw/mobbin-refs.md](../raw/mobbin-refs.md).

## Tokens (`src/styles/global.css`)
| Token | Light | Dark |
|---|---|---|
| `--bg` | `#f5efe4` | `#13110e` |
| `--surface` | `#fffcf6` | `#1c1915` |
| `--surface-2` | `#efe7d8` | `#26221c` |
| `--ink` | `#1f1b16` | `#f2ebdf` |
| `--muted` | `#6d6458` | `#a69b8b` |
| `--line` | `#e3d8c5` | `#322d26` |
| `--gold` | `#a8812f` | `#d2aa55` |

Exposed to Tailwind via `@theme` (`bg-surface`, `text-muted`, `border-line`, `text-gold`…). Dark mode = `.dark` on `<html>` (`@custom-variant dark`), set pre-paint from `dc:theme` or `prefers-color-scheme`.

Component classes (`.card .btn .btn-primary .btn-ghost .chip .eyebrow .badge`) live in `@layer components` — **must stay layered** or they override Tailwind utilities like `hidden`.

Fonts: Fraunces (display, `font-display`), Inter (UI).

## Tradition badges
Circle in the tradition's colour + white symbol (`icons.ts`, 48×48, `currentColor` + `var(--icon-bg)` for cut-outs):
catholic crossed keys · orthodox three-bar cross · oriental Coptic cross · assyrian cross pattée on lotus · anglican compass rose · lutheran Luther rose · reformed heart in hand (Calvin's seal) · methodist cross & flame · baptist water drop · pentecostal descending dove + flames · nondenom open Bible · anabaptist wheat · quaker 8-point star · restorationist chalice · adventist sunrise · lds beehive · jw watchtower · oneness flame with "1".

## Patterns
- Quiz: one question/screen, thin gold progress, circular back, Yes/No = 2 tall tiles, choices = lettered cards, selected = inverted ink fill, 260 ms auto-advance, fly-in transition by direction.
- Results: hero card tinted with match colour, donut with centred %, ranked bars, expandable ✓/~/✕ breakdown, quadrant compass.
- Profile pages: compact — quick-facts strip, 21 council tiles (7 | 14 split), short bullet lists, collapsible positions.
