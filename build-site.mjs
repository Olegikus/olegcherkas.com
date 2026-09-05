import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)));

for (const script of ['build-blog.mjs', 'inject-google-analytics.mjs']) {
  const result = spawnSync(process.execPath, [path.join(root, script)], {
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
