import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)));
const outputDir = root;
const minimumBytes = 4096;
const extensionByMime = {
  'image/gif': 'gif',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  'image/png': 'png',
  'image/svg+xml': 'svg',
  'image/webp': 'webp',
};

fs.mkdirSync(outputDir, { recursive: true });

const htmlFiles = fs.readdirSync(root)
  .filter((name) => name.endsWith('.html'))
  .map((name) => path.join(root, name));

let extractedReferences = 0;
let extractedBytes = 0;

for (const htmlPath of htmlFiles) {
  const original = fs.readFileSync(htmlPath, 'utf8');
  const updated = original.replace(
    /data:(image\/(?:gif|jpe?g|png|svg\+xml|webp));base64,([A-Za-z0-9+/=\r\n]+)/gi,
    (dataUri, mime, encoded) => {
      const buffer = Buffer.from(encoded.replace(/\s+/g, ''), 'base64');
      if (buffer.length < minimumBytes) return dataUri;

      const normalizedMime = mime.toLowerCase();
      const extension = extensionByMime[normalizedMime];
      if (!extension) return dataUri;

      const hash = crypto.createHash('sha256').update(buffer).digest('hex').slice(0, 16);
      const filename = `media-${hash}.${extension}`;
      const destination = path.join(outputDir, filename);
      if (!fs.existsSync(destination)) fs.writeFileSync(destination, buffer);

      extractedReferences += 1;
      extractedBytes += dataUri.length;
      return `/${filename}`;
    },
  );

  if (updated !== original) fs.writeFileSync(htmlPath, updated);
}

console.log(`Extracted ${extractedReferences} inline image references (${extractedBytes} HTML bytes) into cacheable files.`);
