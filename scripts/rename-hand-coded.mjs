#!/usr/bin/env node
// Replace "hand-*" variants with "custom coded" / "custom-coded" / "custom code"
// across the src/ tree. Context-aware substitutions.
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

// Order matters: longest/most-specific first so we don't over-replace short forms.
const rules = [
  // Adjective/noun phrases
  [/\bhand[- ]?coded\b/gi, 'custom-coded'],
  [/\bhand[- ]?written\b/gi, 'custom-coded'],
  [/\bhand[- ]?crafted\b/gi, 'custom-coded'],

  // Verb forms ("we hand-write every line" / "we hand-code every site")
  [/\bhand[- ]?writes?\b/gi, 'custom-codes'],
  [/\bhand[- ]?writing\b/gi, 'custom coding'],
  [/\bhand[- ]?codes?\b/gi, 'custom-codes'],
  [/\bhand[- ]?coding\b/gi, 'custom coding'],

  // "by hand" phrases (common idiom — change to "from scratch" or "by us")
  [/\bwritten by hand\b/gi, 'written from scratch'],
  [/\bwrite every line by hand\b/gi, 'write every line of code ourselves'],
  [/\bby hand\b/gi, 'from scratch'],
];

let totalFiles = 0;
let totalReplacements = 0;

for (const file of walk(root)) {
  const src = fs.readFileSync(file, 'utf8');
  let out = src;
  let fileReplacements = 0;
  for (const [pattern, replacement] of rules) {
    out = out.replace(pattern, (match) => {
      fileReplacements++;
      // Preserve capitalization when match starts with a capital
      if (match[0] === match[0].toUpperCase() && replacement[0] !== replacement[0].toUpperCase()) {
        return replacement[0].toUpperCase() + replacement.slice(1);
      }
      return replacement;
    });
  }
  if (fileReplacements > 0) {
    fs.writeFileSync(file, out);
    totalFiles++;
    totalReplacements += fileReplacements;
    console.log(`${path.relative(root, file)}  (${fileReplacements})`);
  }
}
console.log(`\nReplaced ${totalReplacements} mentions across ${totalFiles} files.`);
