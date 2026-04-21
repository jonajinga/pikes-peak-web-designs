#!/usr/bin/env node
/**
 * Pass 2: replace the semicolons that the em-dash pass left behind in
 * contexts where a semicolon reads awkwardly (attributes, subject lines,
 * glossary definitions, "X; and Y" conjunctions, and headings).
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

  // 1. Attribute-value context: aria-label="A; B", value="A; B" → replace with ", "
  out = out.replace(/((?:aria-label|alt|title|value|placeholder)\s*=\s*"[^"]*?);\s+([^"]*?")/g, '$1, $2');

  // 2. "X; and Y", "X; but Y", "X; so Y", "X; or Y", "X; which Y" → "X, and Y"
  out = out.replace(/;\s+(and|but|or|so|which|that|where|when|while)\b/g, ', $1');

  // 3. Heading or title-case single-word-after: "Outline; dark" → "Outline (dark)"
  //    Only inside >...<h2/h3/title> variants. Narrow: before closing tag, lowercase word after ;
  out = out.replace(/(>[^<>;]{2,40});\s+([a-z][a-z ]{1,30})(<)/g, (m, a, b, c) => `${a} (${b.trim()})${c}`);

  // 4. Glossary / description pattern "<dd>Term; def." → "<dd>Term: def."
  out = out.replace(/(<dd>[^<]*?);\s+/g, '$1: ');
  // And the opening <span class="mega-item-desc">...text starting with a capital;... pattern:
  out = out.replace(/(mega-item-desc">[^<]*);\s+/g, '$1. ');

  // 5. Subject lines / fetch headers: value with "; " at the END before closing quote isn't addressed by #1 already.
  //    Target email subject lines specifically: value="... ; X" → ": X"
  out = out.replace(/(value="New [^"]*?);\s+/g, '$1: ');

  // 6. "X; no Y" (lowercase) pattern - change to "X. No Y" for readability
  out = out.replace(/;\s+no\s/g, '. No ');
  out = out.replace(/;\s+No\s/g, '. No ');

  // 7. "X; just Y" / "X; usually Y" / "X; typically Y" → period + capital
  out = out.replace(/;\s+(just|usually|typically|often|sometimes|always|never)\s/g, '. $1 '.replace('. j', '. J').replace('. u', '. U').replace('. t', '. T').replace('. o', '. O').replace('. s', '. S').replace('. a', '. A').replace('. n', '. N'));

  // 8. Fix double punctuation artifacts
  out = out.replace(/\.\s+\./g, '.');
  out = out.replace(/,\s+,/g, ',');
  out = out.replace(/:\s+:/g, ':');
  out = out.replace(/;\s+;/g, ';');

  if (out !== src) {
    changes++;
    fs.writeFileSync(file, out);
    console.log(path.relative(root, file));
  }
}

console.log(`\nCleaned ${changes} files.`);
