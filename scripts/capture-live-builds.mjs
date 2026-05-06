// Capture above-the-fold screenshots of all live builds, including the
// agency's own homepage.
// Run with `node scripts/capture-live-builds.mjs`.
// Output PNGs land in src/assets/img/samples/ (live-* prefix).
//
// Quality notes: 2x device scale factor, 4-second settle so late-bound
// fonts + lazy images render before the screenshot fires, JS animations
// disabled via prefers-reduced-motion CSS injection.

import puppeteer from "puppeteer";
import path from "node:path";
import fs from "node:fs";

const OUT_DIR = path.resolve("./src/assets/img/samples");
const VIEWPORT = { width: 1280, height: 800, deviceScaleFactor: 2 };

const builds = [
  { url: "https://pikespeakwebdesigns.com",   file: "live-pikes-peak.png" },
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
    // Pretend prefers-reduced-motion so any auto-rotating banners /
    // homepage animations land in their stable rest state by the time
    // we shoot.
    await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
    try {
      await page.goto(b.url, { waitUntil: "networkidle0", timeout: 60000 });
    } catch (e) {
      console.warn(`navigation slow for ${b.url}: ${e.message} — continuing anyway`);
    }
    // Force-load any web fonts that didn't trigger via natural rendering,
    // and ensure all <img> in the viewport have decoded.
    try {
      await page.evaluate(async () => {
        if (document.fonts && document.fonts.ready) await document.fonts.ready;
        const imgs = Array.from(document.images).filter(i => !i.complete);
        await Promise.all(imgs.map(i => i.decode().catch(() => null)));
      });
    } catch {}
    // Settle late-bound fonts, lazy images, IO-triggered hydration.
    await new Promise(r => setTimeout(r, 4000));
    const out = path.join(OUT_DIR, b.file);
    await page.screenshot({
      path: out,
      type: "png",
      clip: { x: 0, y: 0, width: 1280, height: 800 },
      omitBackground: false,
      captureBeyondViewport: false,
    });
    const bytes = fs.statSync(out).size;
    console.log(`captured ${b.url} -> ${out} (${(bytes / 1024).toFixed(1)} KB)`);
    await page.close();
  }
} finally {
  await browser.close();
}
