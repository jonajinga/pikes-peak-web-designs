#!/usr/bin/env node
// Layout check: loads every built page at phone, tablet, and desktop widths
// and fails if any visible element reaches past the left or right edge of
// the screen.
//
//   npm run build && npm run check:layout
//   node scripts/check-layout.mjs --only /,/pricing/        (some pages)
//   node scripts/check-layout.mjs --base https://pikespeakwebdesigns.com
//                                       (the live site, same page list)
//
// Needs Playwright and its Chromium (npx playwright install chromium).
//
// Why measure elements and not the page's scroll width: a section with
// overflow: hidden (the home hero, for one) clips whatever spills out of
// it, so the page never scrolls sideways; the visitor simply loses the
// clipped text. This check looks at every element's box instead.
//
// Exempt by design: anything inside a fixed-position element (the slide-out
// menu, the phone action bar), anything inside a horizontal scroller
// (overflow-x: auto or scroll), absolutely positioned elements parked fully
// off screen (skip links), and anything inside an element marked
// data-allow-overflow, for a deliberate exception.

import { createRequire } from "node:module";
import { createServer } from "node:http";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const args = process.argv.slice(2);
const opt = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};
const DIR = path.resolve(opt("--dir") || "_site");
const ONLY = opt("--only")?.split(",");
const BASE = opt("--base");

// Phones from the iPhone SE (320) to the large iPhones (430), then tablets
// and the desktop widths where the full menu bar appears.
const PHONE_WIDTHS = [320, 360, 375, 390, 412, 430];
const WIDE_WIDTHS = [768, 1024, 1280, 1440];

const TYPES = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript",
  ".mjs": "text/javascript", ".json": "application/json", ".svg": "image/svg+xml",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".avif": "image/avif", ".gif": "image/gif", ".ico": "image/x-icon", ".woff2": "font/woff2",
  ".woff": "font/woff", ".xml": "application/xml", ".txt": "text/plain", ".webmanifest": "application/manifest+json",
};

async function listPages(dir) {
  const out = [];
  async function walk(d) {
    for (const name of await readdir(d)) {
      const full = path.join(d, name);
      if ((await stat(full)).isDirectory()) await walk(full);
      else if (name.endsWith(".html")) {
        let url = "/" + path.relative(dir, full).split(path.sep).join("/");
        if (url.endsWith("/index.html")) url = url.slice(0, -"index.html".length);
        out.push(url);
      }
    }
  }
  await walk(dir);
  return out.sort();
}

function serve(dir) {
  const server = createServer(async (req, res) => {
    let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    let file = path.join(dir, p);
    if (!file.startsWith(dir)) { res.writeHead(403).end(); return; }
    try {
      if ((await stat(file)).isDirectory()) file = path.join(file, "index.html");
      const body = await readFile(file);
      res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" }).end(body);
    } catch {
      res.writeHead(404).end();
    }
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve(server)));
}

// Runs inside the page. Returns the outermost offending elements.
function findOverflow() {
  const vw = document.documentElement.clientWidth;
  const exempt = new Map();
  const isExempt = (el) => {
    if (exempt.has(el)) return exempt.get(el);
    let result = false;
    if (el !== document.body && el.parentElement) {
      const cs = getComputedStyle(el);
      if (cs.position === "fixed" || cs.display === "none" || cs.visibility === "hidden" ||
          el.hasAttribute("data-allow-overflow")) result = true;
      else {
        const parent = el.parentElement;
        const pcs = getComputedStyle(parent);
        if (/(auto|scroll)/.test(pcs.overflowX) && parent !== document.documentElement && parent !== document.body) result = true;
        else result = isExempt(parent);
      }
    }
    exempt.set(el, result);
    return result;
  };
  const describe = (el) => {
    const parts = [];
    for (let e = el; e && e !== document.body && parts.length < 4; e = e.parentElement) {
      let s = e.tagName.toLowerCase();
      if (e.id) { parts.unshift(`${s}#${e.id}`); break; }
      if (e.classList.length) s += "." + [...e.classList].slice(0, 3).join(".");
      parts.unshift(s);
    }
    return parts.join(" > ");
  };
  const found = [];
  for (const el of document.body.querySelectorAll("*")) {
    const r = el.getBoundingClientRect();
    if (r.width < 1 || r.height < 1) continue;
    const over = r.right > vw + 1 || r.left < -1;
    if (!over || isExempt(el)) continue;
    const cs = getComputedStyle(el);
    // Absolutely positioned and parked fully off screen: a skip link or similar.
    if (cs.position === "absolute" && (r.right <= 0 || r.left >= vw)) continue;
    if (found.some((f) => f.el.contains(el))) continue;
    found.push({ el, text: `${describe(el)}  [left ${Math.round(r.left)}, right ${Math.round(r.right)}, screen ${vw}]` });
  }
  const pageScroll = document.documentElement.scrollWidth > vw + 1;
  return { pageScroll, items: found.map((f) => f.text) };
}

async function run() {
  const pages = ONLY || (await listPages(DIR));
  let server, base = BASE;
  if (!base) {
    server = await serve(DIR);
    base = `http://127.0.0.1:${server.address().port}`;
  }
  const origin = new URL(base).origin;
  const browser = await chromium.launch();
  const phone = await browser.newContext({
    viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true,
    reducedMotion: "reduce",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
  });
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
  for (const ctx of [phone, desktop]) {
    // Only the site itself loads; analytics, maps, and embeds are skipped.
    await ctx.route("**/*", (route) => (route.request().url().startsWith(origin) ? route.continue() : route.abort()));
  }

  const problems = [];
  const queue = [...pages];
  let done = 0;
  async function worker(ctx, widths) {
    const page = await ctx.newPage();
    while (queue.length) {
      const url = queue.shift();
      try {
        await page.goto(base + url, { waitUntil: "load", timeout: 30000 });
        await page.evaluate(() => document.fonts.ready);
        for (const width of widths) {
          await page.setViewportSize({ width, height: width < 768 ? 844 : 900 });
          await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
          const res = await page.evaluate(findOverflow);
          if (res.items.length || res.pageScroll) problems.push({ url, width, ...res });
        }
      } catch (err) {
        problems.push({ url, width: "-", pageScroll: false, items: [`could not load: ${err.message.split("\n")[0]}`] });
      }
      done++;
      if (done % 25 === 0) process.stderr.write(`  ${done} checks of ${pages.length * 2} done\n`);
    }
    await page.close();
  }
  // Two passes over the page list: phones, then tablets and desktops.
  await Promise.all([1, 2, 3, 4].map(() => worker(phone, PHONE_WIDTHS)));
  queue.push(...pages);
  await Promise.all([1, 2, 3, 4].map(() => worker(desktop, WIDE_WIDTHS)));
  await browser.close();
  server?.close();

  if (!problems.length) {
    console.log(`Layout check passed: ${pages.length} pages at ${[...PHONE_WIDTHS, ...WIDE_WIDTHS].join(", ")} pixels wide.`);
    return;
  }
  // Group by page, then by the element description, listing the widths.
  const byPage = new Map();
  for (const p of problems) {
    const lines = byPage.get(p.url) || new Map();
    const items = p.pageScroll && !p.items.length ? ["(the page scrolls sideways)"] : p.items;
    for (const item of items) {
      const key = item.replace(/\s+\[left.*$/, "");
      const entry = lines.get(key) || { widths: [], sample: item };
      entry.widths.push(p.width);
      lines.set(key, entry);
    }
    byPage.set(p.url, lines);
  }
  console.log(`Layout check FAILED on ${byPage.size} of ${pages.length} pages:\n`);
  for (const [url, lines] of byPage) {
    console.log(url);
    for (const [, e] of lines) console.log(`   at ${e.widths.join(", ")}: ${e.sample}`);
  }
  process.exitCode = 1;
}

run().catch((err) => { console.error(err); process.exitCode = 2; });
