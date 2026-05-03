// Promotional events / campaign landing pages.
// Each entry drives:
//   1. The card on /events/ (only entries with active: true show).
//   2. The optional /events/<slug>/ landing page (created separately as
//      a regular .njk file under src/events/; this data file just
//      describes the campaign metadata for the index).
// To start a campaign: set active: true and ship the corresponding
// landing page file. To end one: flip active to false (the page can
// stay published indefinitely as evergreen content if useful, but it
// drops off the index).
export default {
  campaigns: [
    {
      slug: "spring-launch",
      title: "Spring Launch Sprint",
      eyebrow: "March – April",
      summary:
        "Get on Google before peak season. Two-week launch sprint for spring trades (HVAC, landscaping, roofing). $0 down plus a free Google Business Profile sync at launch.",
      cta: "See the spring launch offer",
      target: "HVAC, landscapers, roofers",
      window: "Mar 1 – Apr 30",
      active: false,
    },
    {
      slug: "storm-season",
      title: "Storm Season Readiness",
      eyebrow: "June – September",
      summary:
        "Roofers: every storm is a missed opportunity if your site is slow. Storm-season readiness check: emergency-call landing page, banner system, schema audit. Built to convert surge traffic.",
      cta: "Prepare your site for storm season",
      target: "Roofers, restoration",
      window: "Jun 1 – Sep 30",
      active: false,
    },
    {
      slug: "fall-tune-up",
      title: "Fall Tune-Up Campaign Kit",
      eyebrow: "September – October",
      summary:
        "HVAC fall tune-up campaign: landing page template for tune-up promos, seasonal banner, content update workflow. Built for the trades that triple their booking volume in October.",
      cta: "Run a fall tune-up campaign",
      target: "HVAC",
      window: "Sep 1 – Oct 31",
      active: false,
    },
    {
      slug: "winter-emergency",
      title: "Winter Emergency-Call Setup",
      eyebrow: "November – February",
      summary:
        "Are you the plumber a frozen pipe finds at 2am? Emergency-form, click-to-call landing page, after-hours messaging. Set up before the first cold snap, not after.",
      cta: "Set up emergency-call capture",
      target: "Plumbers, restoration",
      window: "Nov 1 – Feb 28",
      active: false,
    },
    {
      slug: "black-friday",
      title: "Black Friday: Lump-Sum Discount",
      eyebrow: "Late November",
      summary:
        "Once a year I run a small Black Friday discount on the lump-sum plan. Ten percent off the $4,000 fee, or a free blog add-on, your choice. One week only.",
      cta: "See the Black Friday terms",
      target: "All trades",
      window: "Nov 24 – Dec 1",
      active: false,
    },
    {
      slug: "refer-a-friend",
      title: "Refer a Friend",
      eyebrow: "Always-on",
      summary:
        "Refer another small-business owner who signs on, and a month of hosting (or a cash thank-you) lands in your account. Distinct from the formal Partner Program; this is for existing clients.",
      cta: "How the referral works",
      target: "Existing clients",
      window: "Year-round",
      active: false,
    },
  ],
};
