/** Writes English text-only overlays to src/data/<lang>/*.ts as a starting point for translation. Usage: tsx scripts/i18n-skeleton.ts pl [--force] */
import { writeFileSync, existsSync } from 'node:fs';
import { questions } from '../src/data/questions';
import { profiles } from '../src/data/profiles';
import { topics } from '../src/data/topics';
import { councils, schisms } from '../src/data/councils';
import { councilDetails } from '../src/data/councilDetails';
import { creeds, confessions } from '../src/data/creeds';

const lang = process.argv[2] ?? 'pl';
const force = process.argv.includes('--force');
const strip = <T extends object>(o: T, keys: string[]) => Object.fromEntries(Object.entries(o).filter(([k]) => !keys.includes(k)));

const files: Record<string, [string, unknown]> = {
  questions: ['QuestionsOverlay', Object.fromEntries(questions.map((q) => [q.id, {
    text: q.text, ...(q.hint ? { hint: q.hint } : {}), explain: q.explain,
    options: Object.fromEntries(q.options.map((o) => [o.id, strip(o, ['id', 'axes'])])),
  }]))],
  profiles: ['ProfilesOverlay', Object.fromEntries(profiles.map((p) => [p.id, {
    name: p.name, short: p.short, tagline: p.tagline, summary: p.summary,
    ...(p.notice ? { notice: { title: p.notice.title, text: p.notice.text } } : {}),
    origin: p.origin, adherents: p.adherents, documents: p.documents, councilsNote: p.councilsNote,
    sacraments: p.sacraments, governance: p.governance, worship: p.worship,
    doctrines: p.doctrines, distinctives: p.distinctives, branches: p.branches,
  }]))],
  topics: ['TopicsOverlay', Object.fromEntries(topics.map((t) => [t.id, strip(t, ['id'])]))],
  councils: ['CouncilsOverlay', {
    councils: Object.fromEntries(councils.map((c) => [c.n, strip(c, ['n'])])),
    schisms: schisms.map((s) => strip(s, ['ids'])),
  }],
  councilDetails: ['CouncilDetailsOverlay', Object.fromEntries(Object.entries(councilDetails).map(([n, d]) => [n, strip(d, ['topics', 'creeds'])]))],
  creeds: ['CreedsOverlay', {
    creeds: Object.fromEntries(creeds.map((c) => [c.id, {
      name: c.name, date: c.date, tagline: c.tagline, origin: c.origin, text: c.text,
      ...(c.fullTextNote ? { fullTextNote: c.fullTextNote } : {}),
      usedBy: Object.fromEntries(c.usedBy.filter((u) => u.note).map((u) => [u.id, u.note])),
      rejectedBy: Object.fromEntries((c.rejectedBy ?? []).filter((u) => u.note).map((u) => [u.id, u.note])),
      keyPoints: c.keyPoints,
    }])),
    confessions: confessions.map((c) => strip(c, ['ids'])),
  }],
};

for (const [name, [type, data]] of Object.entries(files)) {
  const path = `src/data/${lang}/${name}.ts`;
  if (existsSync(path) && !force) { console.log(`skip ${path}`); continue; }
  writeFileSync(path, `import type { ${type} } from '../localized';\n\nconst data: ${type} = ${JSON.stringify(data, null, 2)};\n\nexport default data;\n`);
  console.log(`wrote ${path}`);
}
