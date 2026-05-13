// One-off script to generate favicon raster sizes from the source SVG.
// Run via `npm run favicons` after editing src/assets/img/favicon.svg.
// Writes 32x32, 180x180 (apple-touch-icon), and 512x512 PNGs plus the
// site.webmanifest, all into src/ so they ship through passthrough copy.

import puppeteer from "puppeteer";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(".");
const SRC_SVG = path.join(ROOT, "src/assets/img/favicon.svg");
const SRC_FONT = path.join(ROOT, "src/assets/fonts/playfair-display-latin-700.woff2");

if (!fs.existsSync(SRC_SVG)) {
  console.error(`Missing source: ${SRC_SVG}`);
  process.exit(1);
}
if (!fs.existsSync(SRC_FONT)) {
  console.error(`Missing font: ${SRC_FONT}`);
  process.exit(1);
}

const svg = fs.readFileSync(SRC_SVG, "utf8");

// The favicon SVG uses Playfair Display 700 via <text>. Puppeteer loads the
// SVG inside an HTML wrapper, so referencing the woff2 by URL doesn't work
// (no HTTP server is running during generation). We inline the font as a
// base64 data-URL @font-face so the wrapper has the exact same typeface the
// site ships, ensuring PNG renders match the rendered web wordmark.
const fontB64 = fs.readFileSync(SRC_FONT).toString("base64");
const playfairFontFace = `@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  font-display: block;
  src: url(data:font/woff2;base64,${fontB64}) format('woff2');
}`;

const sizes = [
  { name: "favicon.svg",        bytes: svg }, // pass through, already SVG
  { name: "favicon-16.png",     px: 16 },
  { name: "favicon-32.png",     px: 32 },
  { name: "favicon-48.png",     px: 48 },
  { name: "favicon-192.png",    px: 192 },
  { name: "favicon-512.png",    px: 512 },
  { name: "apple-touch-icon.png", px: 180 },
  // Android maskable: the OS clips the icon to a shape (circle, squircle,
  // etc.) so the brand mark must live inside a center 80% safe zone with
  // the tile color extending full-bleed. Wrapper below adds the navy
  // background and shrinks the rounded-tile SVG to 80% of the canvas so
  // every clip shape lands on solid navy with the wordmark intact.
  { name: "favicon-512-maskable.png", px: 512, maskable: true },
];

const html = (px) => `<!doctype html>
<html><head><style>
  ${playfairFontFace}
  *,*::before,*::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: ${px}px; height: ${px}px; background: transparent; }
  svg { width: 100%; height: 100%; display: block; }
</style></head>
<body>${svg}</body></html>`;

const maskableHtml = (px) => `<!doctype html>
<html><head><style>
  ${playfairFontFace}
  *,*::before,*::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: ${px}px; height: ${px}px; background: #0A1F44; }
  .stage { width: 80%; height: 80%; margin: 10%; }
  svg { width: 100%; height: 100%; display: block; }
</style></head>
<body><div class="stage">${svg}</div></body></html>`;

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

try {
  for (const s of sizes) {
    const out = path.join(ROOT, "src", s.name);
    if (s.bytes) {
      fs.writeFileSync(out, s.bytes);
      console.log(`wrote ${s.name} (svg passthrough)`);
      continue;
    }
    const page = await browser.newPage();
    await page.setViewport({ width: s.px, height: s.px, deviceScaleFactor: 1 });
    const wrapper = s.maskable ? maskableHtml(s.px) : html(s.px);
    await page.setContent(wrapper, { waitUntil: "networkidle0" });
    // Wait for the data-URL @font-face to finish parsing/loading before
    // screenshotting. Without this, Puppeteer can snap the screenshot
    // mid-FOUT and the PNG ships with Georgia instead of Playfair Display.
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: out, type: "png", omitBackground: false, clip: { x: 0, y: 0, width: s.px, height: s.px } });
    await page.close();
    console.log(`wrote ${s.name} (${s.px}x${s.px})`);
  }

  // site.webmanifest for installable PWA / Android home-screen support.
  // The maskable variant is what Android Chrome uses when the OS clips
  // the icon to its own shape mask (circle, squircle, rounded square);
  // the "any" variants are the rounded-tile design used everywhere else.
  const manifest = {
    name: "Pikes Peak Web Designs",
    short_name: "Pikes Peak",
    icons: [
      { src: "/favicon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/favicon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/favicon-512-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    theme_color: "#0A1F44",
    background_color: "#0A1F44",
    display: "standalone",
    start_url: "/",
  };
  fs.writeFileSync(
    path.join(ROOT, "src/site.webmanifest"),
    JSON.stringify(manifest, null, 2)
  );
  console.log("wrote site.webmanifest");
} finally {
  await browser.close();
}

console.log("\nFavicons generated. Each file lives at src/ root and ships via passthrough.");
