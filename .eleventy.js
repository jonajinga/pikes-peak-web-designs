import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { DateTime } from "luxon";
import { minify } from "html-minifier-terser";
import CleanCSS from "clean-css";
import Image from "@11ty/eleventy-img";
import metagen from "eleventy-plugin-metagen";
import faviconsPlugin from "eleventy-plugin-gen-favicons";
import autoCacheBuster from "eleventy-auto-cache-buster";
import { execSync } from "child_process";
import fs from "node:fs";
import path from "node:path";

export default function (eleventyConfig) {
  // Passthrough
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Plugins
  eleventyConfig.addPlugin(metagen);
  eleventyConfig.addPlugin(faviconsPlugin, { outputDir: "./_site" });
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

  // HTML minification (production only)
  if (process.env.NODE_ENV === "production") {
    eleventyConfig.addTransform("htmlmin", async (content, outputPath) => {
      if (outputPath && outputPath.endsWith(".html")) {
        return minify(content, {
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
        });
      }
      return content;
    });
  }

  // Image shortcode using @11ty/eleventy-img
  eleventyConfig.addAsyncShortcode("image", async (src, alt, sizes = "100vw", widths = [400, 800, 1200]) => {
    const fullSrc = src.startsWith("/") ? `./src${src}` : src;
    let metadata = await Image(fullSrc, {
      widths,
      formats: ["avif", "webp", "jpeg"],
      outputDir: "./_site/assets/img/",
      urlPath: "/assets/img/",
    });
    const imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
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
  //   1. Extract the DEMO SITE block into its own demo.css so demo pages
  //      don't ship the full site stylesheet (~75% smaller payload for
  //      /demo/* routes, big LCP + main-thread win).
  //   2. Minify both style.css and demo.css with clean-css.
  eleventyConfig.on("eleventy.after", () => {
    const cssFile = path.resolve("./_site/assets/css/style.css");
    const demoFile = path.resolve("./_site/assets/css/demo.css");
    if (!fs.existsSync(cssFile)) return;

    try {
      const src = fs.readFileSync(cssFile, "utf8");

      // Extract the .demo-site block into its own stylesheet. The demo defines
      // its own palette under .demo-site so we only need a tiny shared reset,
      // not the full Pikes Peak design token system.
      const demoStart = src.indexOf("/* =============================================================\n   DEMO SITE — REDCAP ROOFING");
      const demoEnd = src.indexOf("/* =============================================================\n   MOBILE-FIRST OPTIMIZATIONS");
      let demoCSS = "";
      if (demoStart !== -1 && demoEnd !== -1) {
        const demoReset = `
*,*::before,*::after { box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; }
html, body { margin: 0; padding: 0; }
body { min-height: 100vh; }
img, svg { display: block; max-width: 100%; }
a { text-decoration: none; color: inherit; }
button { font: inherit; cursor: pointer; border: 0; background: none; color: inherit; }
:focus-visible { outline: 3px solid #F7D046; outline-offset: 2px; }
`;
        demoCSS = demoReset + src.slice(demoStart, demoEnd);
      }

      const minifier = new CleanCSS({ returnPromise: false, level: 1 });

      // Minify the full site stylesheet in place
      const minStyle = minifier.minify(src);
      if (!minStyle.errors.length) fs.writeFileSync(cssFile, minStyle.styles);
      else console.warn("style.css minify errors:", minStyle.errors);

      // Write minified demo.css (if extraction succeeded)
      if (demoCSS) {
        const minDemo = new CleanCSS({ returnPromise: false, level: 1 }).minify(demoCSS);
        if (!minDemo.errors.length) fs.writeFileSync(demoFile, minDemo.styles);
        else console.warn("demo.css minify errors:", minDemo.errors);
      }
    } catch (e) {
      console.warn("CSS build failed:", e.message);
    }
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
