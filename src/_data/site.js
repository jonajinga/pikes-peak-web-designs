export default {
  name: "Pikes Peak Web Designs",
  shortName: "Pikes Peak",
  tagline: "A website you never have to worry about.",
  // Brand voice constants. Used across templates so the signature line,
  // sign-off, and forbidden-word list are pulled programmatically rather
  // than copy-pasted (and drifting) page-to-page.
  voice: {
    signature: "A website you never have to worry about.",
    markline: "Custom-coded. Custom-cared-for.",
    signoff: "Boring is the feature.",
    methodology: "The Service Site Standard",
    forbiddenWords: [
      "synergy",
      "leverage",
      "solutions",
      "robust",
      "passionate",
      "world-class",
      "best-in-class",
      "cutting-edge",
      "next-generation",
    ],
  },
  url: "https://pikespeakwebdesigns.com",
  description: "Custom-coded websites for small service businesses across the U.S. and Canada. I handle the design, the hosting, the updates, and everything else. $0 down, $175 a month flat.",
  // Optional social handles. Render twitter:site only if the handle is set;
  // empty strings cause platforms to ignore (or warn about) the meta tag.
  twitterHandle: "",
  locale: "en_US",
  phone: "9283159094",
  phoneDisplay: "(928) 315-9094",
  email: "hello@pikespeakwebdesigns.com",
  founderSite: "https://jonajinga.com",
  meetingTool: "Google Meet",
  hours: "Mon–Fri, 8am–6pm MT · Weekend response within one business day",
  responseTime: "one business day",
  ogImage: "/assets/img/og/default.png",
  address: {
    city: "Colorado Springs",
    state: "CO",
    country: "US",
  },
  pricing: {
    monthly: 175,
    extraHourly: 100,
    minTerm: 12,
    deposit: 0,
    pagesIncluded: 10,
  },
  // Signup workflow:
  //   1. Prospect lands on /subscribe/ (entry point).
  //   2. Click "Sign the agreement" → Documenso. Configure Documenso's
  //      post-sign redirect to /subscribe/payment/.
  //   3. /subscribe/payment/ has the Stripe Checkout button. Configure
  //      Stripe's success_url to /onboarding/.
  //   4. /onboarding/ collects the build inputs.
  agreementSignUrl: "https://app.documenso.com/d/BA0T0nJ5mxGayQhTOIZny",
  subscribeUrl: "https://buy.stripe.com/",
  hourlyUrl: "https://buy.stripe.com/",
  utilityPages: [
    "Privacy Policy",
    "Accessibility Statement",
    "Terms of Use",
    "Contact page with Web3Forms",
    "Thank-You page (form submission redirect)",
    "Testimonials page",
    "Style Guide (your brand system, documented)",
    "Sitemap (HTML + XML)",
  ],
  standardFeatures: [
    "Light and dark mode with system-preference detection",
    "Responsive header and navigation",
    "Mobile hamburger panel with accessible controls",
    "Mobile-first design from 320px up to 4K",
    "Keyboard navigation throughout",
    "Skip-to-content link for screen-reader users",
    "Built-in site search (Pagefind)",
    "Privacy-focused analytics (Umami + Cloudflare)",
  ],
  stats: {
    pageSpeed: "95–100",
    coreWebVitals: "Green",
    areasServed: "50 states + Canada",
    buildTime: "2–3 weeks",
  },
};
