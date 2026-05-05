// Evergreen "share on this occasion" landing pages.
// Each page lives at /seasons/{slug}/ and is meant to be reusable year after year:
// the URL stays the same; share it every January, every Q4, every Black Friday, etc.
// The detail page is generated from this data file via src/seasons-detail.njk.
// Prose fields support inline HTML (rendered with the `safe` filter on the layout side),
// so use named anchor links rather than bare URLs.

export default [
  {
    slug: "new-year",
    season: "January",
    occasionShort: "New Year",
    eyebrow: "January",
    h1: "If a new website is on the list this year,",
    h1Em: "January is the right month to start.",
    metaTitle: "Building a New Website in January | Pikes Peak Web Designs",
    metaDescription: "January tends to be the slowest month for most service businesses. It is the month I recommend most often for a website rebuild, and this page explains why.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "If you have been meaning to do something about the website for a while, January is usually the right month to actually start. Not because it is January, but because the calendar is quieter than it will be in a few weeks, and a build that takes me two to three weeks is much easier to think clearly about now than it will be once the spring rush starts.",
    argumentTitle: "Why I tend to recommend January.",
    argumentBody: [
      "Most of my clients are in service trades, and most service trades follow the same rhythm. There is the busy season, where the phone rings and there is no time to think about anything but the next job, and there is the quieter stretch, where the schedule has a little air in it. For a lot of trades, January is that quieter stretch.",
      "I do not need much from you during the build itself, twenty minutes on a self-serve <a href=\"/onboarding/\" class=\"inline-link\">onboarding form</a>, an hour of total review time across two weeks, and the rest is on me. But every one of those minutes is easier to spend in January than in May, and the new site is live and indexed before the busy stretch even starts.",
      "If your slow stretch is not in January, that is fine too. Pick whichever quiet month you actually have. The rest of this page is mostly true regardless of when you read it.",
    ],
    pitchTitle: "Two to three weeks of build. Then it just runs.",
    pitchBody: "I charge $175 a month, flat. There is no design deposit. The first month's payment kicks off the build, and you fill out the onboarding form on your own time. The agreement gets signed before I start the work, and the site is usually live in two to three weeks.",
    pitchCta: "Sign up for the standard plan",
    pitchCtaUrl: "/subscribe/",
    objections: [
      {
        q: "I am not even sure what I want yet.",
        a: "That is what the discovery call is for. It is a twenty-minute conversation, not a pitch, and the goal is to figure out together whether a rebuild makes sense for your situation. If it does not, I will tell you that, and the call costs nothing either way. The <a href=\"/contact/\" class=\"inline-link\">contact page</a> is where you book it."
      },
      {
        q: "Is replacing my current site really worth it?",
        a: "Sometimes yes, sometimes no. The <a href=\"/audit/\" class=\"inline-link\">free five-point audit</a> gives you a written diagnostic of what is actually wrong with the existing site. If it is salvageable, I will say so. If a rebuild would pay for itself in leads, the audit will explain why."
      },
      {
        q: "What if I need to start in February or March instead?",
        a: "Same plan, same rate, same approach. The page you are reading is evergreen on purpose; whenever you are ready, the <a href=\"/contact/\" class=\"inline-link\">discovery call</a> is the right next step."
      },
    ],
  },
  {
    slug: "tax-season",
    season: "January – April",
    occasionShort: "Tax Season",
    eyebrow: "Tax season",
    h1: "Your monthly website fee is",
    h1Em: "a deductible business expense.",
    metaTitle: "Your Website Subscription is a Deductible Expense | Pikes Peak Web Designs",
    metaDescription: "Talk to your accountant for your specific situation, but for most U.S. and Canadian small businesses, monthly website fees fall into the same category as phone or scheduling software.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "I am not your accountant, so please talk to yours about your specific situation. But for almost every small service business I have worked with, the monthly website fee sits on the books in the same place as the phone bill, the scheduling software, or the office internet, an ordinary, deductible operating expense.",
    argumentTitle: "Why monthly billing makes the tax conversation simple.",
    argumentBody: [
      "The plan is $175 a month, flat. That is $2,100 over a year, on a line item that almost any accountant has handled a thousand times. There is no software-classification question, no asset-depreciation form, no large one-time cost that has to land in a single quarter. It is a website-and-hosting subscription, and that is the entire accounting story.",
      "If the up-front cost has been the thing holding you back, this is the part that matters: I do not charge a design deposit. The first $175 is what kicks off the build, and that first payment hits the books the same month the work starts.",
      "Again, please talk to your accountant. I am happy to send a clean monthly invoice if that is easier for their bookkeeping.",
    ],
    pitchTitle: "$175 a month. Same on the books as the phone bill.",
    pitchBody: "I run the build, the hosting, the security, and the ongoing updates. You get a single line item per month and a working website that does not need babysitting.",
    pitchCta: "Sign up for the standard plan",
    pitchCtaUrl: "/subscribe/",
    objections: [
      {
        q: "Can I prepay the year?",
        a: "Sure. Most clients do not, but if your accountant prefers a single annual invoice, I can issue one for $2,100 instead of twelve $175 charges. Send me a note via the <a href=\"/contact/\" class=\"inline-link\">contact page</a> and I will set it up."
      },
      {
        q: "Card or ACH?",
        a: "Both. Stripe handles both, and I never see or store your card number. ACH is the same flow on Stripe's end."
      },
      {
        q: "Will I get a real invoice?",
        a: "Yes. Stripe sends a receipt automatically, and I can send a formatted invoice with your business name and address on it if your accountant prefers that format."
      },
    ],
  },
  {
    slug: "spring-cleaning",
    season: "March – May",
    occasionShort: "Spring Cleaning",
    eyebrow: "Spring",
    h1: "The truck gets washed every spring.",
    h1Em: "The website almost never does.",
    metaTitle: "A Spring Once-Over for Your Service Business Website | Pikes Peak Web Designs",
    metaDescription: "Most small business websites need a once-over every couple of years. Here is what I usually find when I run one, and what I do about it.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "It is the time of year when the office gets cleaned out, the trucks get washed, and the equipment gets a once-over. Most small business websites never get the same treatment, and yet the site is the piece of equipment that runs at every hour of every day, sees every potential customer first, and either earns the call or quietly loses it.",
    argumentTitle: "What I usually find when I look at an older site.",
    argumentBody: [
      "The fonts are usually fine. The colors are usually fine. The real problems are almost always one of three things: the site loads too slowly on a phone, so half the visitors give up before it even renders. The contact form is broken or routing to a folder nobody monitors. Or the site is missing the basics that local-pack ranking depends on, the address on the page, the schema, the service-area pages.",
      "The <a href=\"/audit/\" class=\"inline-link\">free five-point audit</a> is the cheapest way to find out which of those three is happening on your site. It takes me a few hours to run, you get a written report, and there is no sales call attached. If your site is in good shape, the report says so.",
      "If the report turns up real issues, a rebuild is two to three weeks of work, and the next twelve months of leads run on a system that does not need babysitting.",
    ],
    pitchTitle: "Start with the audit. The rebuild only happens if it is actually warranted.",
    pitchBody: "The <a href=\"/audit/\" class=\"inline-link\">free five-point audit</a> returns a written report within about a week. If the rebuild is the right call, the standard plan is $175 a month flat with no design deposit.",
    pitchCta: "Sign up for the standard plan",
    pitchCtaUrl: "/subscribe/",
    objections: [
      {
        q: "I do not even know if my site is salvageable.",
        a: "The <a href=\"/audit/\" class=\"inline-link\">free five-point audit</a> is built for exactly that question. The written report covers speed, mobile usability, the contact form, the local-SEO surface, and the basic accessibility floor. If the site is in better shape than you thought, the report will tell you that."
      },
      {
        q: "Can I keep my current domain?",
        a: "Yes. Domains are portable. I handle the DNS migration as part of every launch, and there is no downtime if it is planned right."
      },
      {
        q: "Will I lose my Google rankings if I rebuild?",
        a: "Almost never, when the migration is handled properly. URL parity, redirects, and sitemap submission are part of the launch checklist. In most cases rankings improve afterward, because page speed and Core Web Vitals improve."
      },
    ],
  },
  {
    slug: "slow-season",
    season: "Trade-specific",
    occasionShort: "Slow Season",
    eyebrow: "Your slow stretch",
    h1: "Whichever quiet stretch your trade has,",
    h1Em: "it is the right time to rebuild.",
    metaTitle: "The Slow Stretch is the Right Time to Rebuild | Pikes Peak Web Designs",
    metaDescription: "Different trades have different quiet months. Whichever yours is, that is the window that makes a rebuild easy to think clearly about and easy to actually finish.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "Every trade I work with has a quiet stretch somewhere in the calendar. For HVAC it is the shoulder weeks of spring and fall. For roofers in most of the country, deep winter. For landscapers, the dead of summer or the dead of winter, depending on the climate. The pattern moves; the principle does not. The slow stretch is when the work that compounds quietly actually gets done, and the website is that work.",
    argumentTitle: "Why I push for slow-season builds.",
    argumentBody: [
      "The build itself takes me two to three weeks. From your side, the time commitment is small: a self-serve <a href=\"/onboarding/\" class=\"inline-link\">onboarding form</a>, an hour of review across the build, and the agreement signed before I start. None of those tasks are hard, but every one of them is easier to schedule and think clearly through during a quiet week than during a busy one.",
      "Slow-season builds also have a side benefit: the new site is live and indexed by Google before the next busy stretch. Two or three months of search-engine settling time is the difference between launching a site for next year's busy season and launching a site that is two months too late.",
      "Whatever your quiet stretch is, that is the window I would aim for.",
    ],
    pitchTitle: "Use the quiet weeks. Have a working website by the next busy one.",
    pitchBody: "$175 a month, flat. Two to three weeks of build. The first month's payment kicks it off, the onboarding is self-serve, and the agreement is signed before I start the work.",
    pitchCta: "Sign up for the standard plan",
    pitchCtaUrl: "/subscribe/",
    objections: [
      {
        q: "Can the build move faster than two to three weeks?",
        a: "It can if it has to, but I do not love rushing. Two weeks is the floor for a careful build, and I would rather quote three than promise two and miss. If your slow window is unusually tight, the <a href=\"/contact/\" class=\"inline-link\">discovery call</a> is the right place to talk through the actual schedule."
      },
      {
        q: "What if my slow season starts before you can start the build?",
        a: "The build queue is usually short, often one to two weeks out. Booking the discovery call ahead of time is the easiest way to lock a slot. The <a href=\"/onboarding/\" class=\"inline-link\">onboarding form</a> is open and self-serve, so you can have it done before the build even starts."
      },
      {
        q: "Will my old site stay up while you build the new one?",
        a: "Yes. The new site is built on a private preview URL. Your old site stays exactly where it is, untouched, until launch day, when the DNS swap takes about thirty minutes."
      },
    ],
  },
  {
    slug: "back-to-business",
    season: "September",
    occasionShort: "September",
    eyebrow: "September",
    h1: "After Labor Day the inbox fills back up.",
    h1Em: "It helps to be ready first.",
    metaTitle: "Q4 Run-Up: Building Before the Rush | Pikes Peak Web Designs",
    metaDescription: "From Labor Day through the holidays is a short stretch, and a real chunk of the year for most service businesses. A website built now is live before the rush.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "Summer ends, the kids head back to school, the homeowners are home from vacation, and the part of the year that pays the bills starts running. Most of the service businesses I work with feel the September turn the same way every year. A site that meets a September visitor with a fast, mobile-clean, conversion-ready page is the site that captures the Q4 run.",
    argumentTitle: "Q4 is short, so the timing matters.",
    argumentBody: [
      "From Labor Day to the holidays is roughly fourteen weeks. For roofers, inspectors, HVAC, painters, landscapers, that stretch is often a quarter or more of the entire year's revenue. A website that loads in one second on mobile and ranks in the local pack is the difference between a quiet Q4 and a profitable one.",
      "I can have a build live and indexed in two to three weeks. A late-August or early-September start has the new site in service before the rush is in full swing. Even a September start is in service for the back half of the quarter.",
      "The window is small. The compounding effect over the rest of the year is large.",
    ],
    pitchTitle: "Start the build now. Be live before the rush.",
    pitchBody: "$175 a month, flat. The first payment kicks the build off. Onboarding is self-serve, the agreement is signed before I start, and most builds are live in two to three weeks.",
    pitchCta: "Sign up for the standard plan",
    pitchCtaUrl: "/subscribe/",
    objections: [
      {
        q: "I am already getting busy. Can the build wait until October?",
        a: "Yes. October starts are common, and your time commitment to the build is small either way. The earlier the start, the earlier the site is in service for Q4."
      },
      {
        q: "What if Q4 is not actually busy for my trade?",
        a: "Then the <a href=\"/seasons/slow-season/\" class=\"inline-link\">slow-season page</a> is the better fit; pick whichever quiet month your trade has. Same plan, same rate."
      },
      {
        q: "Should I patch my existing site for the season instead?",
        a: "Maybe. The <a href=\"/audit/\" class=\"inline-link\">free five-point audit</a> will tell you in writing whether the existing site is salvageable for the season or whether a rebuild is the better call. The audit is free regardless."
      },
    ],
  },
  {
    slug: "small-business-saturday",
    season: "Saturday after Thanksgiving",
    occasionShort: "Small Business Saturday",
    eyebrow: "Small Business Saturday",
    h1: "I am a small business too.",
    h1Em: "That shapes how I work.",
    metaTitle: "Small Business Saturday — Built by a Small Business | Pikes Peak Web Designs",
    metaDescription: "I am one operator. The person who answers the phone here is the same person who designs your homepage and writes the deployment script. Different shape than an agency.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "Small Business Saturday is the one day of the year the marketing world remembers that most American businesses are not Fortune 500. They are a roofing crew of three, a two-person inspection firm, a husband-and-wife landscape design shop, a solo HVAC operator. I am the same shape: one person, no layer, no outsourcing, the same email address that handles your first inquiry handles your support ticket two years from now.",
    argumentTitle: "What changes when there is no relay race.",
    argumentBody: [
      "Most agencies hand a project through five or six people: sales, account, designer, junior dev, senior dev, QA. The brief gets quietly distorted at every step, and the final code is something nobody on the team can fully explain.",
      "I work the other way. The person who answers the phone is the same person who designs the homepage, writes the deployment script, and handles the change request you send two years after launch. The brief never gets mistranslated because there is nobody to mistranslate it to.",
      "The engineering bar is the same as the larger shops, the same WCAG 2.2 AA floor, the same 95 to 100 PageSpeed targets, the same custom-coded posture. The shape behind the scenes is the part that is different.",
    ],
    pitchTitle: "One operator, one rate, one site you do not have to worry about.",
    pitchBody: "$175 a month, flat. Two to three weeks of build. The same person on every email for as long as you are with me.",
    pitchCta: "Sign up for the standard plan",
    pitchCtaUrl: "/subscribe/",
    objections: [
      {
        q: "What if you are too busy to take on my project?",
        a: "Sometimes the build queue is full. When it is, I will tell you so up front and give you a real start date rather than an open-ended wait. The <a href=\"/contact/\" class=\"inline-link\">discovery call</a> is the easiest way to find out."
      },
      {
        q: "What happens if you are sick or on vacation?",
        a: "Hosting and uptime run on Cloudflare, so the site does not depend on me being awake. For project work, I communicate scheduled time off ahead of any extended absence. Routine emergencies are rare and have a documented runbook."
      },
      {
        q: "What happens if you stop running the agency?",
        a: "The hosting account is in your name (or transferable to it), the source code is yours, and the contractual right to receive a copy of the build is in the standard <a href=\"/agreement/\" class=\"inline-link\">service agreement</a>. I have no incentive to hold any client hostage to my own continued existence, and the paperwork reflects that."
      },
    ],
  },
  {
    slug: "black-friday",
    season: "Late November",
    occasionShort: "Black Friday",
    eyebrow: "Black Friday",
    h1: "I do not run Black Friday pricing.",
    h1Em: "Here is why.",
    metaTitle: "Black Friday for Service Businesses | Pikes Peak Web Designs",
    metaDescription: "I keep one rate, year-round. The honest version of Black Friday pricing on a $175 monthly subscription is to not inflate the rest of the year to begin with.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "I do not slash prices for Black Friday, and I do not bundle the standard plan with limited-time bonuses. The honest version of holiday-week pricing on a $175 monthly subscription is to not inflate the rest of the year to begin with. The rate is $175 in November, the same as it is in March, the same as it is for the entire engagement.",
    argumentTitle: "What I would do instead, if Black Friday is on your mind.",
    argumentBody: [
      "If you have been thinking about a new website for a while, the right week to start is the week you are actually ready to start. That might be this week. It might be January. Either is fine.",
      "What does change is the calendar. A discovery call in the second half of November and a build kicked off the same week is comfortably live before the New Year. A December start is usually live by mid-January. If you want the new site working before Q1, the next two or three weeks are the window.",
      "And if you are not ready, that is fine too. The pricing on this page is the same in November, March, July, or any other month you want to come back to it.",
    ],
    pitchTitle: "Same flat rate, twelve months of the year.",
    pitchBody: "$175 a month, flat, for the entire engagement. No design deposit. No retainer creep. No surprise add-on fees.",
    pitchCta: "Sign up for the standard plan",
    pitchCtaUrl: "/subscribe/",
    objections: [
      {
        q: "Can I get a discount for signing up on Black Friday?",
        a: "No, and I would rather be honest about why. A discount on a $175 monthly subscription is symbolic. The version of that promise that is actually worth something is to keep the rate flat year-round, which I do."
      },
      {
        q: "What about the audit, or any other thing — anything seasonal?",
        a: "The <a href=\"/audit/\" class=\"inline-link\">free five-point audit</a> is free year-round. The standard plan rate is the standard plan rate year-round. I do not run seasonal pricing on either."
      },
      {
        q: "If I sign up in mid-November, will I be live before the New Year?",
        a: "Almost always yes. Two to three weeks of build, kicked off in mid-November, lands you live by mid-to-late December. The <a href=\"/contact/\" class=\"inline-link\">discovery call</a> is the easiest way to confirm a date."
      },
    ],
  },
  {
    slug: "year-end",
    season: "December",
    occasionShort: "Year End",
    eyebrow: "Year-end",
    h1: "If you have unspent operating budget,",
    h1Em: "this is one place to put it.",
    metaTitle: "Year-End Spend: A Website That Earns Back | Pikes Peak Web Designs",
    metaDescription: "December is the month a lot of service businesses still have some operating budget on the books. A website is one of the few line items that earns leads every month for the next ten years.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "A lot of the service businesses I work with end December with some operating budget unspent. The choices, generally, are to leave it on the books and pay tax on it, spend it on something one-time that is gone by January, or spend it on something that earns leads every week for the next ten years. A website is one of the few line items where the third option is genuinely available.",
    argumentTitle: "How I think about year-end spend.",
    argumentBody: [
      "$175 a month for twelve months is $2,100. As a budget line for next year, that is a small fraction of what most service businesses already spend on Google Ads, Facebook Ads, or paid lead-buy services. It is the only one of those line items that actually builds an asset, the site keeps earning whether or not you spend any more on advertising.",
      "Year-end spend has clean tax treatment for almost every U.S. and Canadian small business; please talk to your accountant for the specifics. But the more interesting story is not the deduction. It is what the asset does next year and the year after that.",
      "Two to three weeks of build, kicked off in December, and the new site is live and earning leads in January.",
    ],
    pitchTitle: "Spend it now. Earn it back over the next decade.",
    pitchBody: "$175 a month, flat. The first month's payment kicks off the build, and most builds are live in two to three weeks.",
    pitchCta: "Sign up for the standard plan",
    pitchCtaUrl: "/subscribe/",
    objections: [
      {
        q: "Can I prepay the entire year?",
        a: "Yes. Send me a note via the <a href=\"/contact/\" class=\"inline-link\">contact page</a> and I can issue a single annual invoice for $2,100 instead of twelve monthly charges. Same rate either way."
      },
      {
        q: "Can the build start in December but launch in January?",
        a: "Most December starts launch in mid-to-late January, which is normal. The <a href=\"/contact/\" class=\"inline-link\">discovery call</a> sets the schedule explicitly, so there are no surprises on either side."
      },
      {
        q: "What if I am traveling for the holidays?",
        a: "Most of the build is asynchronous. The <a href=\"/onboarding/\" class=\"inline-link\">onboarding form</a> is self-serve and you can fill it out in pieces, the review calls are short, and many December clients spend less than two hours of their own time on the entire build."
      },
    ],
  },
];
