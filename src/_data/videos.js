// Video metadata, keyed by slug. Pages that embed a video reference it
// by slug via the partials/video-embed.njk partial — the iframe URL,
// title, transcript path, and SRT path all live here so every video
// has one source of truth.
//
// `youtubeId` is the YouTube video ID (last segment of the URL, e.g.
// "dQw4w9WgXcQ"). Empty string = video not yet recorded; partial will
// render a placeholder block instead of the iframe.
//
// `mp4Fallback` (optional) is a self-hosted MP4 path on Cloudflare R2;
// only set for the homepage-tier videos that should not depend on a
// third-party domain for the LCP path.
export default {
  walkthrough: {
    slug: "walkthrough",
    title: "5-minute walk-through of a finished site",
    description: "Page-by-page tour of a real custom-coded service-business site: hero, service page, area page, contact form, pricing, blog, dark mode, Lighthouse run.",
    duration: "5 min",
    youtubeId: "",
    transcript: "/transcripts/walkthrough/",
    placeholderEyebrow: "Video walk-through",
    placeholderTitle: "Coming soon — in the meantime, click through the live demos.",
  },
  methodOverview: {
    slug: "method-overview",
    title: "The Service Site Standard in 90 seconds",
    description: "The seven-principle methodology, stated plainly. Hero of the methodology page.",
    duration: "90 sec",
    youtubeId: "",
    transcript: "/transcripts/method-overview/",
    placeholderEyebrow: "The 90-second tour",
    placeholderTitle: "Coming soon — read the full methodology below.",
  },
  whyNotWordpress: {
    slug: "why-not-wordpress",
    title: "Why I will not put your site on WordPress",
    description: "Three minutes on the structural reasons WordPress is the wrong shape for a small service-business website.",
    duration: "3 min",
    youtubeId: "",
    transcript: "/transcripts/why-not-wordpress/",
    placeholderEyebrow: "Founder commentary",
    placeholderTitle: "Coming soon — read the full comparison below.",
  },
  livePagespeed: {
    slug: "live-pagespeed",
    title: "Live PageSpeed run on a real client site",
    description: "Watch a Lighthouse audit run on a deployed client site, in real time, with explanations of every metric.",
    duration: "4 min",
    youtubeId: "",
    transcript: "/transcripts/live-pagespeed/",
    placeholderEyebrow: "Performance proof",
    placeholderTitle: "Coming soon — for now, run any demo through pagespeed.web.dev.",
  },
  formIntake: {
    slug: "form-intake",
    title: "How the contact form actually filters bad leads",
    description: "Walk-through of a trade-specific intake form — what each field does, how the urgency-routing works, why generic Name/Email/Message forms convert worse.",
    duration: "3 min",
    youtubeId: "",
    transcript: "/transcripts/form-intake/",
    placeholderEyebrow: "Conversion mechanics",
    placeholderTitle: "Coming soon — see the eight sample forms in the meantime.",
  },
  launchDay: {
    slug: "launch-day",
    title: "What happens on launch day",
    description: "Step-by-step of a real client launch: DNS migration, schema validation, sitemap submission, monitoring setup, post-launch checks.",
    duration: "4 min",
    youtubeId: "",
    transcript: "/transcripts/launch-day/",
    placeholderEyebrow: "Behind the scenes",
    placeholderTitle: "Coming soon — read the launch process below.",
  },
  auditWalkedThrough: {
    slug: "audit-walked-through",
    title: "The free 5-point audit, walked through live",
    description: "Six minutes auditing a real volunteer's site on camera: speed, mobile, local SEO, accessibility, conversion path.",
    duration: "6 min",
    youtubeId: "",
    transcript: "/transcripts/audit-walked-through/",
    placeholderEyebrow: "Live audit",
    placeholderTitle: "Coming soon — request a written audit on your URL.",
  },
  pageSpeedFeel: {
    slug: "pagespeed-feel",
    title: "What 95–100 PageSpeed actually feels like",
    description: "Two-minute side-by-side mobile screen-record of a Wix site and a custom-coded site loading at the same moment.",
    duration: "2 min",
    youtubeId: "",
    transcript: "/transcripts/pagespeed-feel/",
    placeholderEyebrow: "Side by side",
    placeholderTitle: "Coming soon.",
  },
  changelogFriday: {
    slug: "changelog-friday",
    title: "I open my changelog every Friday — here is why",
    description: "Two-minute talking-head on the discipline of a public ship cadence, what it costs, and what it teaches a sole-prop agency.",
    duration: "2 min",
    youtubeId: "",
    transcript: "/transcripts/changelog-friday/",
    placeholderEyebrow: "Founder commentary",
    placeholderTitle: "Coming soon.",
  },
  continuity: {
    slug: "continuity",
    title: "What if I disappear?",
    description: "Four-minute talking-head on succession, code escrow, the named backup developer, and the public runbook. The honest answer to the buyer concern nobody else addresses.",
    duration: "4 min",
    youtubeId: "",
    transcript: "/transcripts/continuity/",
    placeholderEyebrow: "Continuity",
    placeholderTitle: "Coming soon — read the continuity story below.",
  },
};
