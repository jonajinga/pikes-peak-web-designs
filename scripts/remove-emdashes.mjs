#!/usr/bin/env node
/**
 * Remove em-dashes across the src/ tree.
 * Replacement rules:
 *   " &mdash; " / " — "  -> "; "  (sentence-level pause)
 *   "word&mdash;word"          -> "word, word"
 *   "&mdash;" at line start    -> ""  (fallback)
 * Preserves &ndash; / – (en-dashes used in ranges like 2–3).
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..', 'src');
const exts = new Set(['.njk', '.md', '.js', '.mjs', '.css']);

const walk = (dir) => {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (exts.has(path.extname(entry.name).toLowerCase())) out.push(full);
  }
  return out;
};

let totalFiles = 0;
let totalChanges = 0;

for (const file of walk(root)) {
  const src = fs.readFileSync(file, 'utf8');
  let out = src;

  // Case 1: space-surrounded em-dash becomes semicolon + space
  out = out.replace(/\s+&mdash;\s+/g, '; ');
  out = out.replace(/\s+—\s+/g, '; ');

  // Case 2: word-joined (no space) em-dash becomes comma + space
  out = out.replace(/&mdash;/g, ', ');
  out = out.replace(/—/g, ', ');

  // Clean up artifacts:
  // "; and" -> "; and" (fine), but "; ," -> ","
  out = out.replace(/; ,\s+/g, '; ');
  out = out.replace(/,\s+,\s+/g, ', ');
  // double semicolons / semicolon + period
  out = out.replace(/;\s*\./g, '.');
  out = out.replace(/;\s*;\s*/g, '; ');

  if (out !== src) {
    const changes = (src.match(/&mdash;|—/g) || []).length;
    totalChanges += changes;
    totalFiles++;
    fs.writeFileSync(file, out);
    console.log(`${path.relative(root, file)}  (${changes} replacements)`);
  }
}

console.log(`\nDone: ${totalChanges} em-dashes replaced across ${totalFiles} files.`);
