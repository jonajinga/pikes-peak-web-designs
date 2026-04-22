#!/usr/bin/env node
// One-off: strip the inline style="text-align:center;margin-top:0.75rem"
// from every .form-hint (now in the CSS class itself).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..', 'src');

const files = [
  'contact.njk', 'content-update.njk', 'design-feedback.njk',
  'emergency.njk', 'onboarding.njk', 'refer.njk', 'testimonial.njk',
];

let changed = 0;
for (const rel of files) {
  const full = path.join(root, rel);
  const src = fs.readFileSync(full, 'utf8');
  const out = src.replace(
    /<p class="form-hint" style="text-align:center;margin-top:0\.75rem">/g,
    '<p class="form-hint">'
  );
  if (out !== src) {
    fs.writeFileSync(full, out);
    console.log(`cleaned ${rel}`);
    changed++;
  }
}
console.log(`\n${changed} files cleaned.`);
