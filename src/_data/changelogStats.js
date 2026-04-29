// Auto-derived stats for the /changelog/ trust strip. Computed at build
// time so the page never goes stale.
//   - daysLive: days between launch and the current build
//   - shipEvents: count of <div class="changelog-entry"> blocks in the
//     changelog template (so adding an entry updates the stat for free)
//   - launchDate: kept as a constant; corresponds to the bottom-most
//     "Initial site live" entry on the changelog
import fs from "node:fs";
import path from "node:path";

const launchISO = "2026-04-16";

const launch = new Date(launchISO);
const now = new Date();
const msPerDay = 1000 * 60 * 60 * 24;
// Round up so a same-day build still reads "1 day" rather than "0 days".
const daysLive = Math.max(1, Math.ceil((now - launch) / msPerDay));

let shipEvents = 0;
try {
  const tpl = fs.readFileSync(
    path.resolve("src/changelog.njk"),
    "utf8"
  );
  const matches = tpl.match(/class="changelog-entry"/g);
  shipEvents = matches ? matches.length : 0;
} catch {
  // If we can't read the file (shouldn't happen), fall back to a sane
  // floor rather than rendering "0".
  shipEvents = 0;
}

export default {
  launchDate: "April 16, 2026",
  daysLive,
  shipEvents,
};
