// Aggregate stats for the /results/ page. Auto-derived where possible
// (days-since-launch, sample count) and hand-set for the rest. Update
// any time real client numbers can replace the self-cited ones.
//
// The /results/ page is the public-facing surface for these numbers.
// They are the same metrics the homepage proof strip and about-page
// proof grid lean on, with more depth.
import fs from "node:fs";
import path from "node:path";

const launchISO = "2026-04-16";
const launch = new Date(launchISO);
const now = new Date();
const msPerDay = 1000 * 60 * 60 * 24;
const daysLive = Math.max(1, Math.ceil((now - launch) / msPerDay));

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

// Count area pages (one .njk per metro under src/areas, plus the
// pagination data file). Areas come from src/_data/areas.js entries,
// not separate files; count entries.
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

export default {
  launchDate: "April 16, 2026",
  daysLive,
  demoCount,
  blogPostCount,
  areaCount,
  glossaryEntryCount,
  // Self-cited performance + accessibility targets (verifiable by
  // running pagespeed.web.dev / Lighthouse / WAVE on any demo).
  pageSpeedRange: "95–100",
  loadTimeTarget: "< 1s",
  uptimeTarget: "99.99%",
  wcagLevel: "WCAG 2.2 AA",
  // Operational: real client outcomes will land here once published
  // case studies exist. Until then leave empty; /results/ leans on
  // the verifiable architectural numbers above.
  clientCallouts: [],
};
