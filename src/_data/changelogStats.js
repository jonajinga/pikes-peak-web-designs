// Auto-derived stats for the /changelog/ trust strip. Computed at build
// time so the page never goes stale.
//
// No launch dates or "days live" — the user does not surface absolute
// dates on the changelog. Counts and category coverage tell the cadence
// story without dating the entries.
import fs from "node:fs";
import path from "node:path";

let shipEvents = 0;
let categoryCount = 6;
try {
  const tpl = fs.readFileSync(
    path.resolve("src/changelog.njk"),
    "utf8"
  );
  const matches = tpl.match(/class="changelog-entry"/g);
  shipEvents = matches ? matches.length : 0;

  // Distinct category tags actually used in entries (e.g. "Major",
  // "Performance", "A11y", "Mobile", "Voice", "Infrastructure"). Read
  // from the legend block so the stat tracks the documented set.
  const legend = tpl.match(/changelog-tag(?:--major)?">[^<]+/g);
  if (legend) {
    const tags = new Set(legend.map((m) => m.replace(/.*>/, "").trim()));
    categoryCount = tags.size;
  }
} catch {
  shipEvents = 0;
}

export default {
  shipEvents,
  categoryCount,
};
