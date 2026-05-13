// Compose the source favicon SVG with Playfair Display 700 embedded as
// base64-encoded woff2 so it renders identically through Puppeteer (used
// by scripts/generate-favicons.mjs to rasterize the PNG sizes) and in any
// browser that fetches the SVG favicon directly. The font is the same
// Playfair Display weight used by the site-title logo.
//
// Run: node scripts/compose-favicon-svg.mjs
// Output: src/assets/img/favicon.svg

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(".");
const FONT_PATH = path.join(ROOT, "src/assets/fonts/playfair-display-latin-700.woff2");
const OUT_PATH = path.join(ROOT, "src/assets/img/favicon.svg");

const fontB64 = fs.readFileSync(FONT_PATH).toString("base64");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="Pikes Peak Web Designs">
  <defs>
    <style>
      @font-face {
        font-family: "PPWDFavicon";
        font-style: normal;
        font-weight: 700;
        src: url(data:font/woff2;base64,${fontB64}) format("woff2");
      }
      .fav-text {
        font-family: "PPWDFavicon", "Playfair Display", Georgia, "Times New Roman", serif;
        font-weight: 700;
        font-size: 220px;
        letter-spacing: -8px;
      }
    </style>
  </defs>
  <rect width="512" height="512" rx="80" ry="80" fill="#0A1F44"/>
  <text class="fav-text" x="256" y="170" text-anchor="middle" dominant-baseline="central" fill="#FFFFFF">PP</text>
  <text class="fav-text" x="256" y="370" text-anchor="middle" dominant-baseline="central" fill="#DDB13D">WD</text>
</svg>
`;

fs.writeFileSync(OUT_PATH, svg);
console.log(`wrote ${OUT_PATH} (${(svg.length / 1024).toFixed(1)} KB)`);
