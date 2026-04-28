// One-off: capture full-page screenshots of every demo home page for the /samples/ cards.
// Run with `node scripts/capture-demo-screenshots.mjs` after `npm run build` and a static
// server running on http://localhost:8989. Output PNGs land in src/assets/img/samples/.
// Puppeteer is installed via `npm install --no-save puppeteer`; not a permanent dep.

import puppeteer from "puppeteer";
import path from "node:path";
import fs from "node:fs";

const BASE = "http://localhost:8989";
const OUT_DIR = path.resolve("./src/assets/img/samples");
const VIEWPORT = { width: 1280, height: 800, deviceScaleFactor: 2 };

const demos = [
  { slug: "redcap-roofing",      file: "redcap-roofing.png" },
  { slug: "alpine-inspectors",   file: "alpine-inspectors.png" },
  { slug: "meadow-stone",        file: "meadow-stone.png" },
  { slug: "summit-hvac",         file: "summit-hvac.png" },
  { slug: "lumen-electric",      file: "lumen-electric.png" },
  { slug: "clearwater-plumbing", file: "clearwater-plumbing.png" },
];

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

try {
  for (const d of demos) {
    const url = `${BASE}/demo/${d.slug}/`;
    const page = await browser.newPage();
    await page.setViewport(VIEWPORT);
    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
    // Capture only the above-the-fold portion (1280x800 @ 2x = 2560x1600 PNG)
    const out = path.join(OUT_DIR, d.file);
    await page.screenshot({ path: out, type: "png", clip: { x: 0, y: 0, width: 1280, height: 800 } });
    const bytes = fs.statSync(out).size;
    console.log(`captured ${d.slug} -> ${out} (${(bytes / 1024).toFixed(1)} KB)`);
    await page.close();
  }
} finally {
  await browser.close();
}
