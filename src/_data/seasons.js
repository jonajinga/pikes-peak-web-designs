// Evergreen "share on this occasion" landing pages.
// Each page lives at /seasons/{slug}/ and is meant to be reusable year after year:
// the URL stays the same; share it every January, every Q4, every Black Friday, etc.
// The detail page is generated from this data file via src/seasons-detail.njk;
// the hub at /seasons/ lists all entries.

export default [
  {
    slug: "new-year",
    season: "January · New Year",
    occasionShort: "New Year",
    eyebrow: "January starts here",
    h1: "Make this the year your website",
    h1Em: "actually works.",
    metaTitle: "New Year, New Website — for Service Businesses | Pikes Peak Web Designs",
    metaDescription: "Resolutions are usually personal. The one that pays you back is fixing the website. Custom-coded, fast, and live in two to three weeks for one flat monthly rate.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "Most New Year resolutions are personal: lose ten pounds, read more, drink less coffee. The one that actually pays you back is the one nobody talks about — fix the website. The phone rings more, the inbox fills with the right kind of messages, and the business runs lighter all year.",
    argumentTitle: "Why January is the right month to start.",
    argumentBody: [
      "Service businesses split the year into two phases. There is the season when the phone rings and there is no time to think about anything but the next job. And there is the season when the phone is quiet, the schedule is open, and the work that compounds quietly is finally possible. January is almost always the second one.",
      "A website is the artifact that earns leads while you sleep. It is on call at 11pm when a roof leak shows up. It is on call at 6am when somebody is searching for an inspector before they list their house. It is on call at 2pm on a Sunday when the homeowner is frustrated with the previous landscaper and wants a new one. The site that answers those moments is the site that gets the call.",
      "Three weeks of work in January, finished before the spring rush. That is the entire pitch.",
    ],
    pitchTitle: "Two to three weeks. Then it runs all year.",
    pitchBody: "One flat monthly rate, $175. No design deposit. Custom-coded, fast, accessible, and built for the trade you are actually in. The build kicks off the same week the first payment clears.",
    pitchCta: "Start a discovery call",
    pitchCtaUrl: "/contact/",
    objections: [
      {
        q: "I am too busy to think about this in January.",
        a: "January is the slowest month for most service trades. The build itself takes two to three weeks of small inputs from your side: a logo if you have one, photos of your work, your services and rough pricing. Most clients spend twenty minutes on the onboarding form and an hour total on review calls. The agency does the rest."
      },
      {
        q: "I already have a website. Is it worth replacing?",
        a: "If your current site is on WordPress, Wix, or Squarespace and it loads slowly on mobile, has form spam in the inbox, or has not been updated in a year, the answer is almost always yes. A free five-point audit at /audit/ will tell you in writing whether it is worth replacing or worth keeping."
      },
      {
        q: "Can I start in February or March instead?",
        a: "Of course. The page you are on is evergreen. The discovery call is the right starting point either way; calendar's at /contact/."
      },
    ],
  },
  {
    slug: "tax-season",
    season: "January – April · Tax Season",
    occasionShort: "Tax Season",
    eyebrow: "Tax season",
    h1: "A new website is a",
    h1Em: "tax write-off.",
    metaTitle: "Your New Website is a Tax Write-Off | Pikes Peak Web Designs",
    metaDescription: "Website costs are an ordinary, deductible business expense. Build now, write it off this year, and put the rest of the year on a phone that finally rings.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "Every dollar paid to a vendor that runs the business is, for most service businesses, an ordinary and necessary expense. Website monthly fees are no exception. The ROI is leads. The tax treatment is operating expense. The two together are the closest thing to a free upgrade a small business gets.",
    argumentTitle: "Pay it monthly. Deduct it monthly.",
    argumentBody: [
      "The standard plan here is $175 a month, flat. That is $2,100 a year on a line item your accountant has already seen a thousand times. No software classification, no asset depreciation, no capital-expense forms. It is simply a website-hosting and design subscription, the same accounting category as your phone or your scheduling tool.",
      "If you have been holding off on the website because the up-front cost felt steep, the monthly model removes that friction entirely. There is no design deposit, no kick-off fee, and no surprise project-cost line item that has to land in a single quarter. The first $175 hits the books the same month the build starts.",
      "Talk to your accountant about your specific situation; this is not tax advice. But for almost every U.S. and Canadian small service business, monthly website costs are an ordinary, deductible business expense.",
    ],
    pitchTitle: "$175 a month. Deductible. The phone starts ringing inside thirty days.",
    pitchBody: "Custom-coded, fast, accessible, and built for the trade you are actually in. The build kicks off the same week the first payment clears, and the site goes live in two to three weeks.",
    pitchCta: "Start a discovery call",
    pitchCtaUrl: "/contact/",
    objections: [
      {
        q: "Is this actually deductible? I do not want to mess up my return.",
        a: "Talk to your accountant for your specific situation. For the majority of U.S. and Canadian service businesses, website monthly fees are an ordinary, deductible operating expense — the same category as phone, scheduling, or software subscriptions. The agency can send a clean monthly invoice if your accountant prefers paper."
      },
      {
        q: "Can I prepay the year and deduct it all at once?",
        a: "Most clients do not, but a yearly prepayment can be arranged. The math works out the same. Send a note to /contact/ and the agency can quote a single annual invoice."
      },
      {
        q: "Do you take card or ACH?",
        a: "Both. Stripe handles the transaction directly, and the agency never stores a card number. Card and ACH are equally welcome."
      },
    ],
  },
  {
    slug: "spring-cleaning",
    season: "March – May · Spring",
    occasionShort: "Spring Cleaning",
    eyebrow: "Spring cleaning",
    h1: "Spring cleaning for the part of your business that",
    h1Em: "earns you leads at midnight.",
    metaTitle: "Spring Cleaning for Your Service Business Website | Pikes Peak Web Designs",
    metaDescription: "The shop floor gets swept every spring. The website almost never does. Three weeks of work and the next twelve months of leads run cleaner.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "Every spring, the truck gets washed, the office gets a clean-out, and the tools get a once-over. The website almost never does. And yet it is the one piece of equipment in the business that runs at all hours, sees every potential customer first, and either earns the call or loses it before the phone has a chance to ring.",
    argumentTitle: "What \"spring cleaning\" actually means here.",
    argumentBody: [
      "It is not a coat of paint. The fonts are not the problem. The problem is almost always one of three things: the site loads too slowly on a phone (so half of visitors give up before it renders), the contact form is broken or unmonitored (so leads disappear into a spam folder somewhere), or the site is missing the basics that local-pack ranking depends on (NAP consistency, schema, service-area pages).",
      "A real spring cleaning addresses those three things, in that order. The visual refresh comes last, after the engineering is fixed. That is what \"a website you never have to worry about\" means.",
      "Two to three weeks of work, kicked off in spring, and the next twelve months of leads run on a system that does not need babysitting.",
    ],
    pitchTitle: "Free five-point audit. Then a clean rebuild if it is needed.",
    pitchBody: "Start with a written five-point audit at /audit/. If the site is salvageable, the agency will say so. If it is not, the rebuild is two to three weeks at the standard $175 a month flat.",
    pitchCta: "Get the free five-point audit",
    pitchCtaUrl: "/audit/",
    objections: [
      {
        q: "I do not even know if my site is salvageable. Where do I start?",
        a: "Start with the free five-point audit at /audit/. It returns a written report on speed, mobile usability, the contact form, the local-SEO surface, and the basic accessibility floor. If the report says the site is fine, the report is free. If the report says it is not, the rebuild is on offer at the standard rate."
      },
      {
        q: "Can I keep my current domain?",
        a: "Yes. Domains move with you. The agency handles the DNS migration as part of every launch, and there is no downtime if it is planned right."
      },
      {
        q: "Do I lose my SEO rankings?",
        a: "No, when the migration is handled correctly. URL parity, redirects, and sitemap submission are all part of the launch checklist. In most cases, rankings improve after launch because page speed and Core Web Vitals improve."
      },
    ],
  },
  {
    slug: "slow-season",
    season: "Trade-specific · The Quiet Stretch",
    occasionShort: "Slow Season",
    eyebrow: "Slow season",
    h1: "Use the slow season to rebuild the part of the business",
    h1Em: "that runs at 3 a.m.",
    metaTitle: "Use the Slow Season to Rebuild Your Website | Pikes Peak Web Designs",
    metaDescription: "Every trade has a quiet stretch. The crew is rested, the schedule is open, and the work that compounds quietly is finally possible. The website is that work.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "Every trade has its quiet stretch. For HVAC it is the shoulder weeks of spring and fall. For roofers it is the deep winter. For landscapers it is the dead of summer or the dead of winter, depending on the climate. For inspectors it is the first weeks of January and the last weeks of December. The work changes; the pattern does not. Slow seasons are when the rebuild happens.",
    argumentTitle: "Why the quiet stretch is the right window.",
    argumentBody: [
      "The build itself takes two to three weeks. Most of that time is the agency's; the client side is a twenty-minute onboarding form and a couple of one-hour review calls. But every one of those hours is easier to schedule, easier to think clearly through, and easier to actually attend during the slow stretch than it is during the busy one.",
      "Slow-season builds also mean the new site is live and indexed before the next busy season starts. Two to three months of search-engine settling time is the difference between launching a site for next year's busy season and launching a site that is two months too late.",
      "Whatever the trade, the quiet stretch is when the work that compounds gets done. The website is that work.",
    ],
    pitchTitle: "Quiet weeks now. Busy phone next quarter.",
    pitchBody: "One flat $175 a month. The build takes two to three weeks. Indexed and ranking by the time the next busy season starts.",
    pitchCta: "Book a discovery call",
    pitchCtaUrl: "/contact/",
    objections: [
      {
        q: "My slow season is short. Can the build move faster?",
        a: "Two weeks is the floor for a careful build. The agency does not run two-week builds in parallel; quality over speed is the trade-off here. If the slow window is genuinely tight, scheduling the discovery call now and starting the build the moment a slot opens is usually the right move."
      },
      {
        q: "What if my slow season starts before the build can start?",
        a: "Most clients book the discovery call a few weeks ahead. The build queue is short — usually one to two weeks out. Send a note to /contact/ and the agency can quote a start date."
      },
      {
        q: "Will my old site stay up while the new one is being built?",
        a: "Yes. The new site is built on a private preview URL. The old site stays live and unchanged until the launch day, when the DNS swap takes about thirty minutes."
      },
    ],
  },
  {
    slug: "back-to-business",
    season: "September · Q4 Run-up",
    occasionShort: "Back to Business",
    eyebrow: "September",
    h1: "September is when the work picks back up.",
    h1Em: "Get the website ready first.",
    metaTitle: "Back to Business: Get Your Website Ready for Q4 | Pikes Peak Web Designs",
    metaDescription: "After Labor Day the inbox fills, the phone rings, and the year's last quarter starts running. A new website built now is live before the rush.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "Summer ends, the kids go back to school, the homeowners return from vacation, and the part of the year that pays the bills starts running. Service businesses know the September turn — every trade feels it. The website that meets a September visitor with a fast, mobile-clean, conversion-ready page is the website that captures the Q4 rush.",
    argumentTitle: "Q4 is short. The site has to be ready.",
    argumentBody: [
      "From Labor Day to the holidays is roughly fourteen weeks. Roofers, inspectors, HVAC operators, painters, landscapers — most service businesses do twenty to thirty percent of their year in that window. A site that loads in one second on mobile, ranks in the local pack, and turns the contact form into actual qualified leads is the difference between a quiet Q4 and a profitable one.",
      "A two-to-three-week build started in late August or early September is live and indexed before the rush begins. Even if the build kicks off in September itself, the site is in service for the back half of the quarter.",
      "The window is small. The compounding effect over the rest of the year is large.",
    ],
    pitchTitle: "Start now. Live before the rush.",
    pitchBody: "$175 a month, flat. No deposit. The build kicks off the same week the first payment clears.",
    pitchCta: "Start a discovery call",
    pitchCtaUrl: "/contact/",
    objections: [
      {
        q: "I am already busy. Can the build wait until October?",
        a: "It can. October starts are common. The build itself only requires a few hours of client time, scheduled around the work week. The earlier the start, the earlier the site is in service."
      },
      {
        q: "What if Q4 is not actually busy for my trade?",
        a: "Then the slow-season page (/seasons/slow-season/) is the better fit. Use whichever quiet stretch applies to the specific business."
      },
      {
        q: "Can I just patch my existing site for the season?",
        a: "Sometimes. The free five-point audit at /audit/ will tell you in writing whether the existing site is salvageable for the season or whether a rebuild is the better call."
      },
    ],
  },
  {
    slug: "small-business-saturday",
    season: "Saturday after Thanksgiving",
    occasionShort: "Small Business Saturday",
    eyebrow: "Small Business Saturday",
    h1: "Built by a small business.",
    h1Em: "For small businesses.",
    metaTitle: "Small Business Saturday — Built for Service Businesses | Pikes Peak Web Designs",
    metaDescription: "One operator. No agency layer. No outsourcing. The website is built and run by one person who picks up the phone. That is the entire pitch.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "Small Business Saturday is the one day of the year the marketing world remembers that most American businesses are not Fortune 500. They are a roofing crew of three. A two-person inspection firm. A husband-and-wife landscape design shop. A solo HVAC operator. The agency you are reading is the same shape: one operator, no layer, no outsourcing, the same person who answers the phone is the person who builds the site.",
    argumentTitle: "Why a small operator is the right partner.",
    argumentBody: [
      "Most agencies run a relay race. Sales handles the call. A producer hands it off. A junior designer starts the file. A senior designer reviews. A developer codes. A QA tester clicks through. Six people, and the brief gets quietly distorted at every hand-off.",
      "The agency you are reading runs a different shape. The person who answers the phone is the same person who designs the homepage and the same person who writes the deployment script. The brief never crosses a hand-off because there is no hand-off. A small business hires a small business and the result reads like it.",
      "Same engineering bar, same accessibility floor, same performance numbers as the larger shops. Different shape behind the scenes.",
    ],
    pitchTitle: "One operator. One flat rate. One reliable site.",
    pitchBody: "$175 a month. The build is two to three weeks. The site is on call all year.",
    pitchCta: "Start a discovery call",
    pitchCtaUrl: "/contact/",
    objections: [
      {
        q: "What if you are too busy to take on my project?",
        a: "Sometimes the build queue is full. When it is, the agency says so up front and gives you a real start date — never an indefinite wait. The discovery call at /contact/ is the right way to find out."
      },
      {
        q: "What happens if you are sick or on vacation?",
        a: "Hosting and uptime are run on Cloudflare; they do not depend on the agency being awake. For project work, the agency communicates schedule clearly and any extended absence is announced ahead of time. Emergency hosting failures are exceedingly rare and have a documented runbook."
      },
      {
        q: "What happens if you stop running the agency?",
        a: "Continuity is a real concern. The hosting account is in your name (or transferable to it), the source code is yours, and the contractual right to receive a copy of the build is in the standard agreement. The agency does not hold any client hostage to its own continued existence."
      },
    ],
  },
  {
    slug: "black-friday",
    season: "Late November · Black Friday",
    occasionShort: "Black Friday",
    eyebrow: "Black Friday",
    h1: "The only Black Friday upgrade",
    h1Em: "that compounds.",
    metaTitle: "Black Friday for Service Businesses | Pikes Peak Web Designs",
    metaDescription: "Most Black Friday deals end on Monday. A new website earns leads every week of the next ten years. One flat rate, no deposit, two to three weeks to launch.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "Most Black Friday deals are a marginal discount on a thing you forget you bought by Tuesday. A new website is different. It runs every minute of every day for the next ten years. The lead it earns next month is just the first one. The hundreds it earns over its lifetime are why the math actually works.",
    argumentTitle: "There is no Black Friday discount here. There is something better.",
    argumentBody: [
      "The standard plan is already $175 a month, flat, no deposit, with the same rate locked for the entire engagement. That is a permanent posture, not a holiday-week sale. There is nothing to slash because nothing was inflated to begin with.",
      "What Black Friday actually means here: it is the right week to make the decision. The work that pays you back over the next decade is the work you start now, not the work you keep meaning to start.",
      "The build is two to three weeks. The first month's payment kicks it off. The rest of your decade rides on what the site does once it is live.",
    ],
    pitchTitle: "Same flat rate, twelve months of the year.",
    pitchBody: "$175 a month. No deposit. Two to three weeks to launch. The agency does not run holiday-week pricing games.",
    pitchCta: "Start a discovery call",
    pitchCtaUrl: "/contact/",
    objections: [
      {
        q: "Will you discount it for Black Friday?",
        a: "No. The pricing is the same in November as it is in March. The honest answer is that a discount on a $175 monthly subscription is symbolic; the better answer is to not inflate the price the rest of the year."
      },
      {
        q: "What about the audit or the rebuild — any seasonal pricing?",
        a: "The free five-point audit is free year-round. The standard plan is the standard plan year-round. The agency does not run seasonal pricing on either."
      },
      {
        q: "Will the build be done before the New Year?",
        a: "If the discovery call happens in mid-November and the first payment clears the same week, yes — comfortably. December starts can also be live by mid-January. The discovery call at /contact/ is the right way to confirm."
      },
    ],
  },
  {
    slug: "year-end",
    season: "December · Year End",
    occasionShort: "Year End",
    eyebrow: "Year-end",
    h1: "Spend down the rest of the budget on something",
    h1Em: "that earns it back.",
    metaTitle: "Year-End: Spend the Budget on a Real Website | Pikes Peak Web Designs",
    metaDescription: "December is the month most service businesses still have unspent operating budget. A website is the rare expense that earns back every month for the next ten years.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "Most service businesses end December with some unspent operating budget. The choices are: leave it on the books (and pay tax on it), spend it on a one-time expense that is gone by January, or spend it on something that earns leads every week of the next ten years. The website is that third choice.",
    argumentTitle: "The math on year-end spend.",
    argumentBody: [
      "$175 a month for twelve months is $2,100. As a budget line for next year, it is a small fraction of what most service businesses already spend on Google Ads, Facebook Ads, or Yelp lead-buy. It is the only one of those line items that builds a permanent asset.",
      "Year-end spend has a clean tax treatment for almost every U.S. and Canadian small business. (Talk to your accountant about the specifics.) But the more interesting story is not the deduction. It is what the asset does next year and the year after that.",
      "Two to three weeks of build, kicked off this month, and the new website is live and earning leads in January.",
    ],
    pitchTitle: "Spend it now. Earn it back over the next decade.",
    pitchBody: "$175 a month. Deductible operating expense for most small businesses. The build kicks off the same week the first payment clears.",
    pitchCta: "Start a discovery call",
    pitchCtaUrl: "/contact/",
    objections: [
      {
        q: "Can the entire year be prepaid?",
        a: "Yes. Send a note to /contact/ and the agency can issue a single annual invoice instead of monthly billing. The price is the same."
      },
      {
        q: "Can the build start in December but actually launch in January?",
        a: "Most December starts launch in mid-to-late January. The discovery call sets the schedule explicitly, so there are no surprises."
      },
      {
        q: "What if I am traveling for the holidays?",
        a: "Most of the build is asynchronous. The onboarding form and the review calls can be scheduled around any travel. Many December clients spend an hour on a Tuesday and a half-hour the following week — that is the entire client-side work for the build."
      },
    ],
  },
];
