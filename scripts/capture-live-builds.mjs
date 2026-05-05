// Capture above-the-fold screenshots of the four real-world live builds.
// Run with `node scripts/capture-live-builds.mjs` after `npm install --no-save puppeteer`.
// Output PNGs land in src/assets/img/samples/ (live-* prefix).

import puppeteer from "puppeteer";
import path from "node:path";
import fs from "node:fs";

const OUT_DIR = path.resolve("./src/assets/img/samples");
const VIEWPORT = { width: 1280, height: 800, deviceScaleFactor: 2 };

const builds = [
  { url: "https://projectbroadsheet.com",     file: "live-project-broadsheet.png" },
  { url: "https://thefreethinkingtimes.com",  file: "live-freethinking-times.png" },
  { url: "https://thegreatagnostic.com",      file: "live-great-agnostic.png" },
  { url: "https://titansofhistory.com",       file: "live-titans-of-history.png" },
];

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

try {
  for (const b of builds) {
    const page = await browser.newPage();
    await page.setViewport(VIEWPORT);
    try {
      await page.goto(b.url, { waitUntil: "networkidle2", timeout: 45000 });
    } catch (e) {
      console.warn(`navigation slow for ${b.url}: ${e.message} — continuing anyway`);
    }
    // Give late-bound fonts and lazy images a beat to settle.
    await new Promise(r => setTimeout(r, 1500));
    const out = path.join(OUT_DIR, b.file);
    await page.screenshot({ path: out, type: "png", clip: { x: 0, y: 0, width: 1280, height: 800 } });
    const bytes = fs.statSync(out).size;
    console.log(`captured ${b.url} -> ${out} (${(bytes / 1024).toFixed(1)} KB)`);
    await page.close();
  }
} finally {
  await browser.close();
}
