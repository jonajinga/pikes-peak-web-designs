#!/usr/bin/env node
/**
 * Restore HTML entities that were mangled by the semicolon cleanup:
 *   &amp (word)     -> &amp; word
 *   &middot (word)  -> &middot; word
 *   &ndash (word)   -> &ndash; word
 * Plus one manual fix on the privacy link in contact.njk.
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

let changes = 0;

for (const file of walk(root)) {
  const src = fs.readFileSync(file, 'utf8');
  let out = src;

  // Restore HTML entities that lost their semicolon
  out = out.replace(/&amp \(([^)]+)\)/g, '&amp; $1');
  out = out.replace(/&middot \(([^)]+)\)/g, '&middot; $1');
  out = out.replace(/&ndash \(([^)]+)\)/g, '&ndash; $1');
  out = out.replace(/&mdash \(([^)]+)\)/g, '&mdash; $1'); // shouldn't exist, safety
  out = out.replace(/&rarr \(([^)]+)\)/g, '&rarr; $1');
  out = out.replace(/&larr \(([^)]+)\)/g, '&larr; $1');

  // Also: sometimes the pattern is "&amp " followed by word without parens if regex skipped
  out = out.replace(/&amp(\s+)([a-zA-Z])/g, '&amp;$1$2');
  out = out.replace(/&middot(\s+)([a-zA-Z])/g, '&middot;$1$2');
  out = out.replace(/&ndash(\s+)([a-zA-Z0-9])/g, '&ndash;$1$2');

  // Contact.njk specific: "privacy (see our)<a>privacy policy</a>" -> "privacy. See our <a>privacy policy</a>"
  out = out.replace(/privacy \(see our\)<a/g, 'privacy. See our <a');

  // Guard against any lingering "&amp;& " double
  out = out.replace(/&amp;;/g, '&amp;');
  out = out.replace(/&middot;;/g, '&middot;');
  out = out.replace(/&ndash;;/g, '&ndash;');

  if (out !== src) {
    changes++;
    fs.writeFileSync(file, out);
    console.log(path.relative(root, file));
  }
}

console.log(`\nRestored entities in ${changes} files.`);
