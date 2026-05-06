import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { DateTime } from "luxon";
import { minify } from "html-minifier-terser";
import { minify as terserMinify } from "terser";
import CleanCSS from "clean-css";
import { PurgeCSS } from "purgecss";
import Image from "@11ty/eleventy-img";
import metagen from "eleventy-plugin-metagen";
import faviconsPlugin from "eleventy-plugin-gen-favicons";
import autoCacheBuster from "eleventy-auto-cache-buster";
import { execSync } from "child_process";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

export default function (eleventyConfig) {
  // Passthrough
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy({ "src/_headers": "_headers" });
  // Root-level favicon files emitted by `npm run favicons`. Live in src/
  // root so they pass through to /favicon.svg, /apple-touch-icon.png, etc.
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });
  eleventyConfig.addPassthroughCopy({ "src/favicon-32.png": "favicon-32.png" });
  eleventyConfig.addPassthroughCopy({ "src/favicon-192.png": "favicon-192.png" });
  eleventyConfig.addPassthroughCopy({ "src/favicon-512.png": "favicon-512.png" });
  eleventyConfig.addPassthroughCopy({ "src/apple-touch-icon.png": "apple-touch-icon.png" });
  eleventyConfig.addPassthroughCopy({ "src/site.webmanifest": "site.webmanifest" });

  // Plugins
  eleventyConfig.addPlugin(metagen);
  // Disabled: the plugin races on Windows when invoked from base.njk via
  // shortcode (per-page copy collides). Icons are generated once via
  // `npm run favicons` (scripts/generate-favicons.mjs) and committed.
  // eleventyConfig.addPlugin(faviconsPlugin, { outputDir: "./_site" });
  eleventyConfig.addPlugin(autoCacheBuster);
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: {
      name: "posts",
      limit: 20,
    },
    metadata: {
      language: "en",
      title: "Pikes Peak Web Designs Blog",
      subtitle: "Web design, SEO, and business tips for service businesses.",
      base: "https://pikespeakwebdesigns.com/",
      author: {
        name: "Pikes Peak Web Designs",
        email: "hello@pikespeakwebdesigns.com",
      },
    },
  });

  // Wrap every <a href="mailto:..."> in <!--email_off--> ... <!--/email_off-->
  // so Cloudflare's "Email Address Obfuscation" feature stops auto-injecting
  // /cdn-cgi/scripts/.../email-decode.min.js. The injected script was
  // showing up as a chained dependency on every page; wrapping kills it.
  // Runs in every environment, before HTML minification.
  eleventyConfig.addTransform("emailOff", (content, outputPath) => {
    if (!outputPath || !outputPath.endsWith(".html")) return content;
    return content.replace(
      /(<a\b[^>]*\bhref=["']mailto:[^"']*["'][^>]*>[\s\S]*?<\/a>)/gi,
      "<!--email_off-->$1<!--/email_off-->"
    );
  });

  // HTML minification (production only)
  if (process.env.NODE_ENV === "production") {
    eleventyConfig.addTransform("htmlmin", async (content, outputPath) => {
      if (outputPath && outputPath.endsWith(".html")) {
        return minify(content, {
          removeComments: true,
          ignoreCustomComments: [/^email_off$/, /^\/email_off$/],
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
        });
      }
      return content;
    });
  }

  // Image shortcode using @11ty/eleventy-img.
  // Pass priority="eager" for above-the-fold / LCP images so the browser
  // downloads them immediately (no lazy-load delay, fetchpriority high).
  // Quality: eleventy-img's defaults (AVIF 50 / WebP 75) were producing
  // visibly soft photos on portrait subjects; bumped to 70 / 85 / 88
  // which is roughly transparent at typical phone-zoom distances.
  eleventyConfig.addAsyncShortcode("image", async (src, alt, sizes = "100vw", widths = [400, 800, 1200], priority = "lazy") => {
    const fullSrc = src.startsWith("/") ? `./src${src}` : src;
    let metadata = await Image(fullSrc, {
      widths,
      formats: ["avif", "webp", "jpeg"],
      outputDir: "./_site/assets/img/",
      urlPath: "/assets/img/",
      sharpAvifOptions: { quality: 80, effort: 6 },
      sharpWebpOptions: { quality: 88, effort: 5 },
      sharpJpegOptions: { quality: 90, mozjpeg: true },
    });
    const isEager = priority === "eager";
    const imageAttributes = {
      alt,
      sizes,
      loading: isEager ? "eager" : "lazy",
      decoding: isEager ? "sync" : "async",
      ...(isEager ? { fetchpriority: "high" } : {}),
    };
    return Image.generateHTML(metadata, imageAttributes);
  });

  // Filters
  eleventyConfig.addFilter("dateFormat", (date) =>
    DateTime.fromJSDate(new Date(date)).toFormat("LLL d, yyyy")
  );
  eleventyConfig.addFilter("dateISO", (date) =>
    DateTime.fromJSDate(new Date(date)).toISO()
  );
  eleventyConfig.addFilter("readingTime", (content) => {
    const words = content.split(/\s+/).length;
    return `${Math.ceil(words / 200)} min read`;
  });
  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));
  eleventyConfig.addFilter("skip", (arr, n) => arr.slice(n));
  eleventyConfig.addFilter("currentYear", () => new Date().getFullYear());
  eleventyConfig.addFilter("startsWith", (str, val) => str && str.startsWith(val));

  // Collections
  eleventyConfig.addCollection("posts", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/blog/posts/*.md").reverse()
  );

  // Post-build CSS pipeline:
  //   1. Extract each DEMO SITE block into its own per-demo CSS bundle so
  //      demo pages don't ship the full site stylesheet (~75% smaller
  //      payload for /demo/* routes).
  //   2. PurgeCSS the main style.css against the rendered non-demo HTML to
  //      drop selectors that aren't used on any main-site page. Lighthouse
  //      flagged ~37 KB of unused rules; this typically removes 60-70%.
  //   3. Minify the main + each demo bundle with clean-css.
  eleventyConfig.on("eleventy.after", async () => {
    const cssFile = path.resolve("./_site/assets/css/style.css");
    const demoFile = path.resolve("./_site/assets/css/demo.css");
    if (!fs.existsSync(cssFile)) return;

    try {
      const src = fs.readFileSync(cssFile, "utf8");

      // Tiny reset shared by every per-demo stylesheet. Each demo defines its
      // own palette under its root body class, so we don't need the full Pikes
      // Peak design token system in these extracted files.
      const demoReset = `
*,*::before,*::after { box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; }
html, body { margin: 0; padding: 0; }
body { min-height: 100vh; }
img, svg { display: block; max-width: 100%; }
a { text-decoration: none; color: inherit; }
button { font: inherit; cursor: pointer; border: 0; background: none; color: inherit; }
:focus-visible { outline: 3px solid currentColor; outline-offset: 2px; }
`;

      // Each entry is a demo CSS block bounded by its opening comment and the
      // next block's opening comment (or the MOBILE-FIRST sentinel for the
      // last one). Extracting each into its own file so a /demo/<slug>/ page
      // only ships its own tokens + components, not the full site stylesheet.
      const demos = [
        { file: "demo.css",       start: "DEMO SITE — REDCAP ROOFING",    end: "DEMO SITE — ALPINE INSPECTORS" },
        { file: "alpine.css",     start: "DEMO SITE — ALPINE INSPECTORS", end: "DEMO SITE — MEADOW & STONE" },
        { file: "meadow.css",     start: "DEMO SITE — MEADOW & STONE",    end: "DEMO SITE — SUMMIT HVAC" },
        { file: "summit.css",     start: "DEMO SITE — SUMMIT HVAC",       end: "DEMO SITE — LUMEN ELECTRIC" },
        { file: "lumen.css",      start: "DEMO SITE — LUMEN ELECTRIC",    end: "DEMO SITE — CLEARWATER PLUMBING" },
        { file: "clearwater.css", start: "DEMO SITE — CLEARWATER PLUMBING", end: "MOBILE-FIRST OPTIMIZATIONS" },
      ];

      const minifier = new CleanCSS({ returnPromise: false, level: 1 });

      // Extract + minify each demo stylesheet first. We do this BEFORE
      // purging the main bundle so demo extraction reads from the full
      // source (each demo's selectors only appear on demo pages, which
      // are excluded from the main-purge content set).
      for (const d of demos) {
        const openMarker = `/* =============================================================\n   ${d.start}`;
        const closeMarker = `/* =============================================================\n   ${d.end}`;
        const s = src.indexOf(openMarker);
        const e = src.indexOf(closeMarker);
        if (s === -1 || e === -1) continue; // demo not yet written
        const block = demoReset + src.slice(s, e);
        const result = new CleanCSS({ returnPromise: false, level: 1 }).minify(block);
        if (!result.errors.length) {
          fs.writeFileSync(path.resolve("./_site/assets/css/", d.file), result.styles);
        } else {
          console.warn(`${d.file} minify errors:`, result.errors);
        }
      }

      // Purge main style.css against rendered main-site HTML. Demo pages
      // are excluded because they ship their own bundle. The sample-forms
      // hub is included (linked from the main nav) but each individual
      // sample-form template uses the main stylesheet too.
      const purged = await new PurgeCSS().purge({
        content: [
          "_site/**/*.html",
          "!_site/demo/**/*.html",
          // Include partials with inline class names so the inlined critical CSS
          // selectors aren't mistaken for unused.
          "src/_includes/partials/*.njk",
          "src/_includes/layouts/base.njk",
          "src/assets/js/main.js",
        ],
        css: [{ raw: src }],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9_:/-]+/g) || [],
        safelist: {
          standard: [
            // Stateful classes toggled by JS that may not appear in static HTML.
            "open", "is-open", "active", "is-active", "is-loading", "is-scrolled",
            "show", "scrolled", "expanded", "collapsed", "is-fixed", "is-hidden",
          ],
          deep: [
            // Theme attribute selector — must be kept on every :root rule.
            /\[data-theme/,
            // Runtime-injected libraries: leaflet maps + tippy tooltips.
            /leaflet/,
            /tippy/,
            // Mark element added by Pagefind result highlighting (the only
            // pagefind-related selector we still need; the legacy
            // .pagefind-ui__* classes are gone with the custom search UI).
            /^mark/,
            // Custom search UI — markup is injected by main.js so the result
            // cards / type badges / filter chips never appear in static HTML.
            /^ppwd-/,
            // Site grader report card — JS-rendered after a successful API
            // call; selectors won't appear in the static /grader/ HTML.
            /^grader-/,
          ],
          keyframes: true,
          variables: false,
        },
      });

      let mainCss = src;
      if (purged && purged[0] && purged[0].css) {
        mainCss = purged[0].css;
        console.log(`[purge] style.css ${src.length} -> ${mainCss.length} bytes (${Math.round(100 - (mainCss.length / src.length) * 100)}% reduction)`);
      } else {
        console.warn("[purge] no result; shipping unpurged");
      }

      // Minify the (purged) main stylesheet in place.
      const minStyle = minifier.minify(mainCss);
      if (!minStyle.errors.length) fs.writeFileSync(cssFile, minStyle.styles);
      else console.warn("style.css minify errors:", minStyle.errors);

      // Per-page inlined CSS. The site-wide purge above keeps any rule
      // used on at least one page; we now run a second purge per HTML
      // file and inline the page-specific result directly into the HTML
      // <head>, replacing the <link rel="stylesheet"> reference. Two
      // wins: (1) drops the render-blocking network request entirely,
      // (2) eliminates the FOUC the preload+onload pattern produced on
      // every navigation. Cost: HTML grows by ~10-15 KB brotli per
      // page, but most marketing visitors are first-time so the
      // first-paint win dominates.
      try {
        const purgedSiteCss = fs.readFileSync(cssFile, "utf8");
        const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true })
          .flatMap(d => d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)]);
        const htmlFiles = walk(path.resolve("./_site"))
          .filter(p => p.endsWith(".html") && !p.includes(`${path.sep}demo${path.sep}`));

        let totalBytesBefore = 0;
        let totalBytesAfter = 0;

        for (const htmlPath of htmlFiles) {
          const html = fs.readFileSync(htmlPath, "utf8");
          totalBytesBefore += purgedSiteCss.length;
          const pagePurge = await new PurgeCSS().purge({
            content: [{ raw: html, extension: "html" }],
            css: [{ raw: purgedSiteCss }],
            defaultExtractor: (content) => content.match(/[A-Za-z0-9_:/-]+/g) || [],
            safelist: {
              standard: [
                "open", "is-open", "active", "is-active", "is-loading", "is-scrolled",
                "show", "scrolled", "expanded", "collapsed", "is-fixed", "is-hidden",
              ],
              deep: [
                /\[data-theme/, /leaflet/, /tippy/, /^mark/, /^ppwd-/, /^grader-/,
              ],
              keyframes: true,
              variables: false,
            },
          });
          const pageCss = pagePurge?.[0]?.css || purgedSiteCss;
          totalBytesAfter += pageCss.length;
          // Replace the per-build stylesheet <link> with an inline
          // <style> block. Match either the cache-buster-suffixed form
          // or the bare /assets/css/style.css reference; both forms can
          // appear depending on plugin run order.
          const escapedCss = pageCss.replace(/<\/style/gi, "<\\/style");
          const inlineBlock = `<style>${escapedCss}</style>`;
          const updated = html
            .replace(
              /<link\s+rel="stylesheet"\s+href="\/assets\/css\/style\.css(?:\?v=[A-Za-z0-9]+)?"\s*\/?>/i,
              inlineBlock
            );
          if (updated !== html) fs.writeFileSync(htmlPath, updated);
        }
        const beforeKb = Math.round(totalBytesBefore / 1024);
        const afterKb = Math.round(totalBytesAfter / 1024);
        console.log(`[per-page-css] inlined into ${htmlFiles.length} pages; ${beforeKb} KB -> ${afterKb} KB shipped (${Math.round(100 - afterKb/beforeKb*100)}% reduction)`);
      } catch (e) {
        console.warn("[per-page-css] failed:", e.message);
      }
    } catch (e) {
      console.warn("CSS build failed:", e.message);
    }
  });

  // Minify every shipped JS asset with terser. Lighthouse flagged main.js
  // (~7.8 KiB unminified) as an "Est savings of 2 KiB"; running terser
  // takes it down to roughly 5 KiB and also strips comments + whitespace
  // from any other JS we copy through (e.g. grader.js).
  eleventyConfig.on("eleventy.after", async () => {
    const jsDir = path.resolve("./_site/assets/js");
    if (!fs.existsSync(jsDir)) return;
    const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true })
      .flatMap(d => d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)]);
    const jsFiles = walk(jsDir).filter(p => p.endsWith(".js"));
    let savedTotal = 0;
    for (const file of jsFiles) {
      try {
        const src = fs.readFileSync(file, "utf8");
        const result = await terserMinify(src, {
          compress: { passes: 2 },
          mangle: true,
          format: { comments: false },
        });
        if (result.code && result.code.length < src.length) {
          savedTotal += src.length - result.code.length;
          fs.writeFileSync(file, result.code);
        }
      } catch (e) {
        console.warn(`[js-min] ${path.basename(file)} skipped:`, e.message);
      }
    }
    if (savedTotal > 0) console.log(`[js-min] saved ${(savedTotal / 1024).toFixed(1)} KiB across ${jsFiles.length} files`);
  });

  // Pagefind search index — run after every build (works with Cloudflare Pages)
  eleventyConfig.on("eleventy.after", () => {
    try {
      execSync("npx pagefind --site _site --output-path _site/pagefind", {
        stdio: "inherit",
      });
    } catch (e) {
      console.warn("Pagefind indexing failed:", e.message);
    }
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
