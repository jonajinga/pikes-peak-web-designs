// Generates OG share-card images for the site.
//
// - Default site card  -> src/assets/img/og/default.png
// - Per-blog-post     -> src/assets/img/og/blog/<slug>.png
// - Per-season page   -> src/assets/img/og/seasons/<slug>.png
//
// Run via `npm run og` (or directly: `node scripts/generate-og-images.mjs`).
// The PNGs are committed to the repo so they survive any deploy. Re-run
// only when the brand visual or page metadata changes.

import puppeteer from "puppeteer";
import path from "node:path";
import fs from "node:fs";
import matter from "gray-matter";

const ROOT = path.resolve(".");
const OUT_BASE = path.join(ROOT, "src/assets/img/og");
const POSTS_DIR = path.join(ROOT, "src/blog/posts");

// IMPORTANT: deviceScaleFactor must be 1. The og:image:width / og:image:height
// meta declares 1200x630, and platforms (Facebook, LinkedIn, X) reject or
// re-scale images that don't match. A factor of 2 produces a 2400x1260 PNG
// that fails preview-tool validation.
const VIEWPORT = { width: 1200, height: 630, deviceScaleFactor: 1 };

// --- Brand template (inlined HTML + CSS, no fonts loaded over network) ---
function template({ eyebrow, title, badge, cta }) {
  cta = cta || "Get the free 5-point audit";
  // Escape for safe HTML interpolation.
  const esc = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: 1200px; height: 630px; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #0A1F44;
    color: #E8ECF4;
    position: relative;
    overflow: hidden;
  }
  /* Peak gradient strip across the top */
  .peak-bar {
    position: absolute; top: 0; left: 0; right: 0;
    height: 8px;
    background: linear-gradient(95deg, #FBF4DE 0%, #DDB13D 40%, #0A1F44 100%);
  }
  /* Soft mountain silhouette in the bottom-right corner */
  .ridge {
    position: absolute;
    bottom: -2px; right: -40px;
    width: 720px; height: 360px;
    opacity: 0.16;
  }
  .frame {
    position: absolute; inset: 56px 64px 64px 64px;
    display: flex; flex-direction: column;
    justify-content: space-between;
  }
  .head {
    display: flex; align-items: center; justify-content: space-between;
  }
  .wordmark {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 30px; font-weight: 700; letter-spacing: 0.01em;
    color: #FFFFFF;
  }
  .wordmark .accent { color: #DDB13D; font-weight: 600; }
  .badge {
    display: inline-block;
    padding: 8px 16px;
    border: 1.5px solid #DDB13D;
    border-radius: 999px;
    font-size: 14px; font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #DDB13D;
  }
  .body { display: flex; flex-direction: column; gap: 18px; max-width: 980px; }
  .eyebrow {
    font-size: 16px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    color: #DDB13D;
  }
  h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-weight: 600;
    font-size: ${title.length > 70 ? 56 : title.length > 40 ? 64 : 76}px;
    line-height: 1.08;
    color: #FFFFFF;
    letter-spacing: -0.01em;
  }
  .foot {
    display: flex; align-items: center; justify-content: space-between;
    gap: 24px;
  }
  .cta {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 14px 22px;
    background: #DDB13D;
    color: #0A1F44;
    font-weight: 700;
    font-size: 17px;
    letter-spacing: 0.02em;
    border-radius: 4px;
    box-shadow: 0 6px 18px rgba(221, 177, 61, 0.32);
  }
  .cta::after { content: '\\2192'; font-size: 19px; }
  .url {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 16px; color: rgba(232, 236, 244, 0.62);
    letter-spacing: 0.02em;
  }
</style>
</head>
<body>
  <div class="peak-bar"></div>
  <svg class="ridge" viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M0 360 L120 200 L200 280 L320 100 L420 240 L520 60 L620 220 L720 140 L720 360 Z" fill="#DDB13D"/>
  </svg>
  <div class="frame">
    <div class="head">
      <div class="wordmark">Pikes Peak <span class="accent">Web Designs</span></div>
      ${badge ? `<div class="badge">${esc(badge)}</div>` : ""}
    </div>
    <div class="body">
      ${eyebrow ? `<div class="eyebrow">${esc(eyebrow)}</div>` : ""}
      <h1>${esc(title)}</h1>
    </div>
    <div class="foot">
      <span class="cta">${esc(cta)}</span>
      <span class="url">pikespeakwebdesigns.com</span>
    </div>
  </div>
</body>
</html>`;
}

async function renderTo(browser, html, outPath) {
  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);
  await page.setContent(html, { waitUntil: "networkidle0", timeout: 15000 });
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  await page.screenshot({ path: outPath, type: "png", omitBackground: false });
  await page.close();
}

function loadBlogPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, f), "utf8");
      const { data } = matter(raw);
      return { slug, title: data.title || slug, label: data.label || "Article" };
    });
}

async function loadSeasons() {
  // The seasons data file is ESM. Import it dynamically.
  const url = "file:///" + path.join(ROOT, "src/_data/seasons.js").replace(/\\/g, "/");
  const mod = await import(url);
  return mod.default || [];
}

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

try {
  // 1. Default site card
  await renderTo(
    browser,
    template({
      eyebrow: "Pikes Peak Web Designs",
      title: "A website you never have to worry about.",
      badge: "$175 / month flat",
      cta: "Start with a free 5-point audit",
    }),
    path.join(OUT_BASE, "default.png")
  );
  console.log(`generated og/default.png`);

  // 2. Per-blog-post cards
  const posts = loadBlogPosts();
  for (const p of posts) {
    const out = path.join(OUT_BASE, "blog", `${p.slug}.png`);
    await renderTo(
      browser,
      template({
        eyebrow: p.label,
        title: p.title,
        badge: "Blog",
        cta: "Get the free 5-point audit",
      }),
      out
    );
    console.log(`generated og/blog/${p.slug}.png`);
  }

  // 3. Per-season cards
  const seasons = await loadSeasons();
  for (const s of seasons) {
    const out = path.join(OUT_BASE, "seasons", `${s.slug}.png`);
    await renderTo(
      browser,
      template({
        eyebrow: s.season || s.eyebrow,
        title: `${s.h1} ${s.h1Em}`.replace(/\s+/g, " ").trim(),
        badge: s.occasionShort || "Season",
        cta: "Sign up for the standard plan",
      }),
      out
    );
    console.log(`generated og/seasons/${s.slug}.png`);
  }
} finally {
  await browser.close();
}

console.log(`\nAll OG cards rendered to ${OUT_BASE}`);
