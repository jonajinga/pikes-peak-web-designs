// Site-wide promotional banner. Driven by date windows, not a flag —
// set start + end ISO dates and the banner shows itself only between
// those dates. Multiple banners can be defined; the first whose window
// covers the current build time wins.
//
// To turn off: set every banner's window in the past, or set show=false
// on whichever one is current.
const now = new Date();

const banners = [
  {
    id: "default-spring-launch-placeholder",
    show: false, // flip true when a campaign is live
    start: "2026-03-01",
    end: "2026-04-30",
    text: "Spring Launch Sprint: $0 down + free Google Business Profile sync. Two-week build window for HVAC, landscapers, and roofers.",
    cta: "See the offer",
    href: "/events/spring-launch/",
    tone: "gold", // gold | navy | cream
  },
];

const active = banners.find((b) => {
  if (!b.show) return false;
  const start = new Date(b.start);
  const end = new Date(b.end);
  end.setHours(23, 59, 59, 999); // include the entire end day
  return now >= start && now <= end;
});

export default {
  active: active || null,
};
