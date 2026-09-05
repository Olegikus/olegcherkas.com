import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)));
const measurementId = 'G-2VJJ7TQFX6';
const tag = `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${measurementId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${measurementId}');
</script>`;

function collectHtmlFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      const filePath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        if (entry.name === '.git' || entry.name === 'admin') return [];
        return collectHtmlFiles(filePath);
      }

      return entry.name.endsWith('.html') ? [filePath] : [];
    });
}

let added = 0;
const missingHead = [];

for (const filePath of collectHtmlFiles(root)) {
  const html = fs.readFileSync(filePath, 'utf8');

  if (html.includes(measurementId)) continue;
  if (!/<head\b[^>]*>/i.test(html)) {
    missingHead.push(path.relative(root, filePath));
    continue;
  }

  fs.writeFileSync(filePath, html.replace(/<head\b[^>]*>/i, (head) => `${head}\n${tag}`));
  added += 1;
}

if (missingHead.length) {
  throw new Error(`Google tag was not added because <head> is missing: ${missingHead.join(', ')}`);
}

console.log(`Google Analytics tag present on ${collectHtmlFiles(root).length} public HTML pages; added to ${added}.`);
