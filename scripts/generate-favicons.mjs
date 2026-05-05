// One-off script to generate favicon raster sizes from the source SVG.
// Run via `npm run favicons` after editing src/assets/img/favicon.svg.
// Writes 32x32, 180x180 (apple-touch-icon), and 512x512 PNGs plus the
// site.webmanifest, all into src/ so they ship through passthrough copy.

import puppeteer from "puppeteer";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(".");
const SRC_SVG = path.join(ROOT, "src/assets/img/favicon.svg");

if (!fs.existsSync(SRC_SVG)) {
  console.error(`Missing source: ${SRC_SVG}`);
  process.exit(1);
}

const svg = fs.readFileSync(SRC_SVG, "utf8");

const sizes = [
  { name: "favicon.svg",        bytes: svg }, // pass through, already SVG
  { name: "favicon-32.png",     px: 32 },
  { name: "favicon-192.png",    px: 192 },
  { name: "favicon-512.png",    px: 512 },
  { name: "apple-touch-icon.png", px: 180 },
];

const html = (px) => `<!doctype html>
<html><head><style>
  *,*::before,*::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: ${px}px; height: ${px}px; background: transparent; }
  svg { width: 100%; height: 100%; display: block; }
</style></head>
<body>${svg}</body></html>`;

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
    await page.setContent(html(s.px), { waitUntil: "networkidle0" });
    await page.screenshot({ path: out, type: "png", omitBackground: false, clip: { x: 0, y: 0, width: s.px, height: s.px } });
    await page.close();
    console.log(`wrote ${s.name} (${s.px}x${s.px})`);
  }

  // site.webmanifest for installable PWA / Android home-screen support.
  const manifest = {
    name: "Pikes Peak Web Designs",
    short_name: "Pikes Peak",
    icons: [
      { src: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/favicon-512.png", sizes: "512x512", type: "image/png" },
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
