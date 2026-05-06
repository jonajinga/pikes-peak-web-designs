// Aggregate stats for the /results/ page. Auto-derived where possible
// (sample count, blog post count, area count, glossary count) and
// hand-set for performance / accessibility targets.
//
// No launch dates or "days live" counters — those create vanity-metric
// drift and the user does not want absolute dates on this surface.
import fs from "node:fs";
import path from "node:path";

// Count demo sites by reading the directory listing. Demo sites live
// at src/demo/<slug>/ as separate Eleventy sub-projects.
let demoCount = 0;
try {
  const demoDir = path.resolve("src/demo");
  if (fs.existsSync(demoDir)) {
    demoCount = fs
      .readdirSync(demoDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .length;
  }
} catch {
  demoCount = 6;
}

// Count blog posts.
let blogPostCount = 0;
try {
  const blogDir = path.resolve("src/blog/posts");
  if (fs.existsSync(blogDir)) {
    blogPostCount = fs
      .readdirSync(blogDir)
      .filter((f) => f.endsWith(".md"))
      .length;
  }
} catch {
  blogPostCount = 18;
}

// Count area pages from src/_data/areas.js entries.
let areaCount = 30;
try {
  const areasJs = fs.readFileSync(
    path.resolve("src/_data/areas.js"),
    "utf8"
  );
  const matches = areasJs.match(/slug:/g);
  if (matches) areaCount = matches.length;
} catch {
  areaCount = 30;
}

// Count glossary entries.
let glossaryEntryCount = 165;
try {
  const glossary = fs.readFileSync(
    path.resolve("src/glossary.njk"),
    "utf8"
  );
  const matches = glossary.match(/class="glossary-entry"/g);
  if (matches) glossaryEntryCount = matches.length;
} catch {
  // keep fallback
}

// Count comparison pages (vs-*.njk at the root).
let comparisonCount = 4;
try {
  const srcDir = path.resolve("src");
  if (fs.existsSync(srcDir)) {
    comparisonCount = fs
      .readdirSync(srcDir)
      .filter((f) => /^vs-.+\.njk$/.test(f))
      .length;
  }
} catch {
  // keep fallback
}

export default {
  demoCount,
  blogPostCount,
  areaCount,
  glossaryEntryCount,
  comparisonCount,
  // Self-cited performance + accessibility targets (verifiable by
  // running pagespeed.web.dev / Lighthouse / WAVE on any demo).
  pageSpeedRange: "95–100",
  webVitalsBand: "Green",
  uptimeTarget: "99.99%",
  wcagLevel: "WCAG 2.2 AA",
  // Operational: real client outcomes will land here once published
  // case studies exist. Until then leave empty; /results/ leans on
  // the verifiable architectural numbers above.
  clientCallouts: [],
};
