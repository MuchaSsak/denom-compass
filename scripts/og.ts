/**
 * Renders the Open Graph images public/og-en.png and public/og-pl.png (1200×630)
 * with headless Chrome. Run: npx tsx scripts/og.ts  (needs playwright-core + Chrome).
 */
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { profiles } from '../src/data/profiles';
import { icons, boldIcons } from '../src/data/icons';

const CHROME = process.env.CHROME_PATH ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const font = (p: string) => pathToFileURL(resolve('node_modules/@fontsource-variable', p)).href;

const copy = {
  en: { title: 'Which Christian tradition shares your beliefs?', sub: '24 short questions · 18 traditions · councils, creeds and doctrines', brand: 'Denomination Compass' },
  pl: { title: 'Która tradycja chrześcijańska podziela Twoje przekonania?', sub: '24 krótkie pytania · 18 tradycji · sobory, wyznania wiary i doktryny', brand: 'Kompas wyznań' },
};

const badge = (id: string, color: string, size: number) => {
  const bold = boldIcons[id];
  const inner = bold ? `<g transform="translate(3.84 3.84) scale(.84)">${bold}</g>` : `<g transform="translate(9.6 9.6) scale(.6)" style="color:#fff">${icons[id]}</g>`;
  return `<svg viewBox="0 0 48 48" width="${size}" height="${size}" style="color:#fff;--icon-bg:${color}"><circle cx="24" cy="24" r="22.6" fill="${color}" stroke="#1c1712" stroke-width="2.6"/>${inner}</svg>`;
};

function html(lang: 'en' | 'pl') {
  const c = copy[lang];
  const grid = profiles.map((p) => badge(p.id, p.color, 92)).join('');
  return `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="${font('fraunces/full.css')}"><link rel="stylesheet" href="${font('inter/index.css')}"><style>
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; background: #f5efe4; font-family: 'Inter Variable', sans-serif; color: #1c1712; display: grid; grid-template-columns: 560px 1fr; overflow: hidden; }
  .l { padding: 64px 0 56px 72px; display: flex; flex-direction: column; }
  .brand { display: flex; align-items: center; gap: 14px; font: 600 30px 'Fraunces Variable', serif; }
  h1 { margin-top: auto; font: 600 58px/1.05 'Fraunces Variable', serif; letter-spacing: -.01em; }
  p { margin-top: 22px; font-size: 22px; color: #6b6359; line-height: 1.4; }
  .g { display: grid; grid-template-columns: repeat(4, 92px); gap: 18px 22px; align-content: center; justify-content: center; transform: rotate(-6deg); margin-right: -40px; }
  .g svg { filter: drop-shadow(0 6px 10px rgba(0,0,0,.18)); }
  </style></head><body>
  <div class="l"><div class="brand"><svg viewBox="0 0 32 32" width="48" height="48"><circle cx="16" cy="16" r="15" fill="#1c1712"/><path d="M16 4.5l2.4 9.1L27.5 16l-9.1 2.4L16 27.5l-2.4-9.1L4.5 16l9.1-2.4z" fill="#f5efe4"/><circle cx="16" cy="16" r="2.2" fill="#c8963e"/></svg>${c.brand}</div>
  <h1>${c.title}</h1><p>${c.sub}</p></div>
  <div class="g">${grid}</div></body></html>`;
}

const { chromium } = await import('playwright-core');
const browser = await chromium.launch({ executablePath: CHROME });
const dir = mkdtempSync(join(tmpdir(), 'og-'));
for (const lang of ['en', 'pl'] as const) {
  const file = join(dir, `${lang}.html`);
  writeFileSync(file, html(lang));
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.goto(pathToFileURL(file).href);
  await page.waitForTimeout(400);
  await page.screenshot({ path: `public/og-${lang}.png` });
  console.log(`public/og-${lang}.png`);
}
await browser.close();
