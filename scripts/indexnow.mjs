// Reports new, changed and removed pages to IndexNow (Bing and the other engines that
// share it) after Netlify publishes a push to main. The committed sitemap.xml is the list
// of pages: the script compares it with the sitemap of the previous push, waits until the
// new one is live, then submits the difference. `--all` submits every page.
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const HOST = 'olegcherkas.com';
const KEY = 'd98885f41602ac12a1f9e8eca292da3d';
const SITEMAP = 'sitemap.xml';

const pages = (xml) => new Map([...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)]
  .map(([, entry]) => [entry.match(/<loc>([^<]+)<\/loc>/)?.[1].trim(), entry.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1].trim() || ''])
  .filter(([loc]) => loc));

const current = readFileSync(SITEMAP, 'utf8');
const now = pages(current);
let previous = new Map();
if (!process.argv.includes('--all') && process.env.BEFORE_SHA) {
  try {
    previous = pages(execFileSync('git', ['show', `${process.env.BEFORE_SHA}:${SITEMAP}`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }));
  } catch { /* the previous push had no sitemap: every page is new */ }
}
const urls = [...now].filter(([loc, lastmod]) => previous.get(loc) !== lastmod).map(([loc]) => loc)
  .concat([...previous.keys()].filter((loc) => !now.has(loc)));
if (!urls.length) {
  console.log('No page in the sitemap changed, so there is nothing to report.');
  process.exit(0);
}

// Netlify is done when the live sitemap matches the committed one.
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const live = (path) => fetch(`https://${HOST}/${path}${path.includes('?') ? '&' : '?'}check=${Date.now()}`, { signal: AbortSignal.timeout(20000) })
  .then((response) => (response.ok ? response.text() : ''))
  .catch(() => '');
for (let attempt = 1; (await live('sitemap.xml')).trim() !== current.trim(); attempt++) {
  if (attempt === 20) { console.log('The live sitemap still differs after 10 minutes; submitting anyway.'); break; }
  await sleep(30000);
}
if ((await live(`${KEY}.txt`)).trim() !== KEY) throw new Error(`The IndexNow key file is not live at https://${HOST}/${KEY}.txt`);

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
  signal: AbortSignal.timeout(30000),
});
if (![200, 202].includes(response.status)) throw new Error(`IndexNow returned HTTP ${response.status}: ${await response.text()}`);
console.log(`IndexNow accepted ${urls.length} URL(s) with HTTP ${response.status}. This asks for a recrawl; it does not guarantee indexing.`);
console.log(urls.join('\n'));
