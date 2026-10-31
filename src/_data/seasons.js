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
    h1Em: "January is the right month to start",
    metaTitle: "Building a New Website in January | Pikes Peak Web Designs",
    metaDescription: "January is often the slowest month for service businesses, and it's the month I most often recommend for a website rebuild. This page explains why.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "If you've been meaning to do something about your website, January is usually the right month to start. The reason is the calendar: it's quieter now than it will be in a few weeks, and a build that takes me two to three weeks is much easier to think through now than once the spring rush starts.",
    argumentTitle: "Why I often recommend January",
    argumentBody: [
      "Most of my clients work in service trades, and most trades follow the same rhythm. There's the busy season, when the phone rings and there's no time to think past the next job, and there's the quieter stretch, when the schedule has some room. For many trades, January is that quieter stretch.",
      "I need little from you during the build: about 20 minutes on a self-serve <a href=\"/onboarding/\" class=\"inline-link\">onboarding form</a> and an hour of review time spread over two weeks. I handle the rest. Every one of those minutes is easier to find in January than in May, and the new site is live and indexed before the busy stretch starts.",
      "If your slow stretch isn't in January, that's fine too. Pick whichever quiet month you have. Most of this page holds true whenever you read it.",
    ],
    pitchTitle: "Two to three weeks to build, then I keep it running",
    pitchBody: "I charge $175 a month, flat, with no design deposit. Your first month's payment starts the build, and you fill in the onboarding form on your own time. You sign the agreement before I start work, and the site is usually live in two to three weeks.",
    pitchCta: "Start now",
    pitchCtaUrl: "/subscribe/",
    objections: [
      {
        q: "I'm not sure what I want yet.",
        a: "That's what the free call is for. It takes 20 to 30 minutes on Google Meet, and we work out together whether a rebuild makes sense for you. If it doesn't, I'll tell you, and the call costs nothing either way. You can book it on the <a href=\"/contact/\" class=\"inline-link\">contact page</a>."
      },
      {
        q: "Is replacing my current site worth it?",
        a: "Sometimes it is, and sometimes it isn't. Bring your URL to a free <a href=\"/contact/\" class=\"inline-link\">discovery call</a>, and I'll tell you plainly what's wrong with your current site. If it can be saved, I'll say so. If a rebuild would pay for itself in leads, I'll explain why."
      },
      {
        q: "What if I need to start in February or March instead?",
        a: "Same plan, same rate, same approach. This page works year-round on purpose, so whenever you're ready, a <a href=\"/contact/\" class=\"inline-link\">discovery call</a> is the next step."
      },
    ],
  },
  {
    slug: "tax-season",
    season: "January to April",
    occasionShort: "Tax Season",
    eyebrow: "Tax season",
    h1: "Your monthly website fee is",
    h1Em: "a deductible business expense",
    metaTitle: "Your Website Subscription Is a Deductible Expense | Pikes Peak Web Designs",
    metaDescription: "Ask your accountant about your situation, but for most U.S. and Canadian small businesses, a monthly website fee is an ordinary, deductible expense.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "I'm not your accountant, so please ask yours about your situation. But for almost every small service business I've worked with, the monthly website fee sits on the books alongside the phone bill, the scheduling software, and the office internet: an ordinary, deductible operating expense.",
    argumentTitle: "Why monthly billing keeps the tax side simple",
    argumentBody: [
      "The plan is $175 a month, flat, which comes to $2,100 a year on a line item almost any accountant has handled a thousand times. There's no software-classification question, no depreciation form, and no large one-time cost to fit into a single quarter. It's a website-and-hosting subscription, and that's the whole accounting story.",
      "If the up-front cost has held you back, this part matters: I don't charge a design deposit. Your first $175 starts the build, and that first payment goes on the books the same month the work begins.",
      "Again, please check with your accountant. I'm glad to send a clean monthly invoice if that makes their bookkeeping easier.",
    ],
    pitchTitle: "$175 a month, on the books like the phone bill",
    pitchBody: "I handle the build, the hosting, the security, and the ongoing updates. You get one line item a month and a working website you don't have to watch over.",
    pitchCta: "Start now",
    pitchCtaUrl: "/subscribe/",
    objections: [
      {
        q: "Can I prepay the year?",
        a: "Yes. Most clients don't, but if your accountant prefers a single annual invoice, I can issue one for $2,100 instead of 12 monthly charges of $175. Send me a note through the <a href=\"/contact/\" class=\"inline-link\">contact page</a>, and I'll set it up."
      },
      {
        q: "Card or ACH?",
        a: "Both. My payment processor handles either one, and I never see or store your card number. ACH works the same way on the processor's end."
      },
      {
        q: "Will I get a proper invoice?",
        a: "Yes. The payment system emails a receipt automatically, and I can send a formatted invoice with your business name and address if your accountant prefers that."
      },
    ],
  },
  {
    slug: "spring-cleaning",
    season: "March to May",
    occasionShort: "Spring Cleaning",
    eyebrow: "Spring",
    h1: "The truck gets washed every spring,",
    h1Em: "and your website should get a once-over too",
    metaTitle: "A Spring Once-Over for Your Service Business Website | Pikes Peak Web Designs",
    metaDescription: "Most small business websites need a once-over every couple of years. Here's what I usually find when I look, and what I do about it.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "This is the time of year when the office gets cleaned out, the trucks get washed, and the equipment gets a once-over. Most small business websites never get the same care, yet the site is the piece of equipment that runs every hour of every day, meets every potential customer first, and either earns the call or loses it.",
    argumentTitle: "What I usually find on an older site",
    argumentBody: [
      "The fonts and colors are usually fine. The problems are almost always one of three things. The site loads too slowly on a phone, so half the visitors give up before it appears. The contact form is broken or sends messages to a folder nobody checks. Or the site is missing the basics that Google's map results (the \"local pack\") depend on: your address on the page, structured data, and service-area pages.",
      "A free <a href=\"/contact/\" class=\"inline-link\">discovery call</a> is the quickest way to find out which of those three is happening on your site. Bring the URL, and I'll tell you plainly. If your site is in good shape, I'll say so.",
      "If the call turns up problems, a rebuild takes two to three weeks, and the next 12 months of leads run on a site you don't have to watch over.",
    ],
    pitchTitle: "Start with a conversation, and rebuild only if it's needed",
    pitchBody: "A free <a href=\"/contact/\" class=\"inline-link\">discovery call</a> settles whether your site needs a rebuild. If it does, the plan is $175 a month, flat, with no design deposit.",
    pitchCta: "Start now",
    pitchCtaUrl: "/subscribe/",
    objections: [
      {
        q: "I don't even know if my site can be saved.",
        a: "That's what the free <a href=\"/contact/\" class=\"inline-link\">discovery call</a> is for. Bring the URL, and we'll look together at speed, how the site works on a phone, the contact form, the local-search basics, and basic accessibility. If the site is in better shape than you thought, I'll tell you."
      },
      {
        q: "Can I keep my current domain?",
        a: "Yes. A domain can move with you. I handle the DNS move as part of every launch, and with good planning there's no downtime."
      },
      {
        q: "Will I lose my Google rankings if I rebuild?",
        a: "Almost never, when the move is handled properly. Keeping your URLs, setting up redirects, and submitting the sitemap are all on the launch checklist. In most cases, rankings improve afterward, because page speed and Core Web Vitals improve."
      },
    ],
  },
  {
    slug: "slow-season",
    season: "Trade-specific",
    occasionShort: "Slow Season",
    eyebrow: "Your slow stretch",
    h1: "Whichever quiet stretch your trade has,",
    h1Em: "it's the right time to rebuild",
    metaTitle: "The Slow Stretch Is the Right Time to Rebuild | Pikes Peak Web Designs",
    metaDescription: "Different trades have different quiet months. Whichever yours is, it's the window for a rebuild you can think through and finish on time.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "Every trade I work with has a quiet stretch somewhere in the year. For HVAC, it's the shoulder weeks of spring and fall. For roofers in most of the country, it's deep winter. For landscapers, it's the height of summer or the depth of winter, depending on the climate. The months change, but the principle holds: the slow stretch is when long-term work gets done, and your website is that work.",
    argumentTitle: "Why I recommend slow-season builds",
    argumentBody: [
      "The build takes me two to three weeks, and your part is small: a self-serve <a href=\"/onboarding/\" class=\"inline-link\">onboarding form</a>, an hour of review during the build, and the agreement signed before I start. None of it is hard, but all of it is easier to schedule and think through in a quiet week than in a busy one.",
      "A slow-season build has another benefit: the new site is live and indexed by Google before your next busy stretch. Giving search engines two or three months to settle is the difference between launching in time for next year's busy season and launching two months too late.",
      "Whatever your quiet stretch is, that's the window I'd aim for.",
    ],
    pitchTitle: "Use the quiet weeks, and have a working website by the busy ones",
    pitchBody: "$175 a month, flat, and two to three weeks to build. Your first month's payment starts the build, onboarding is self-serve, and you sign the agreement before I start work.",
    pitchCta: "Start now",
    pitchCtaUrl: "/subscribe/",
    objections: [
      {
        q: "Can the build move faster than two to three weeks?",
        a: "It can if it has to, but I'd rather not rush. Two weeks is the minimum for a careful build, and I'd rather quote three than promise two and miss. If your slow window is unusually tight, a <a href=\"/contact/\" class=\"inline-link\">discovery call</a> is the place to work out the schedule."
      },
      {
        q: "What if my slow season starts before you can start the build?",
        a: "The wait to start is usually short, often one to two weeks. Booking a call ahead of time is the easiest way to hold a slot. The <a href=\"/onboarding/\" class=\"inline-link\">onboarding form</a> is open and self-serve, so you can finish it before the build starts."
      },
      {
        q: "Will my old site stay up while you build the new one?",
        a: "Yes. I build the new site at a private preview address. Your old site stays exactly where it is, untouched, until launch day, when the DNS switch takes about 30 minutes."
      },
    ],
  },
  {
    slug: "back-to-business",
    season: "September",
    occasionShort: "September",
    eyebrow: "September",
    h1: "After Labor Day, the inbox fills back up,",
    h1Em: "so have your new site live before it does",
    metaTitle: "Q4 Run-Up: Building Before the Rush | Pikes Peak Web Designs",
    metaDescription: "Labor Day to the holidays is a short stretch, and a big part of the year for most service businesses. A website built now is live before the rush.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "Summer ends, the kids go back to school, homeowners are back from vacation, and the part of the year that pays the bills gets going. Most of the service businesses I work with feel the September turn the same way every year. A site that greets September visitors with a fast page that works well on a phone and turns them into calls is the site that wins the fall rush.",
    argumentTitle: "The fourth quarter is short, so timing matters",
    argumentBody: [
      "Labor Day to the holidays is about 14 weeks. For roofers, inspectors, HVAC companies, painters, and landscapers, that stretch is often a quarter or more of the year's revenue. A website that loads in one second on a phone and ranks in Google's map results (the \"local pack\") is the difference between a quiet fourth quarter and a profitable one.",
      "I can have a build live and indexed in two to three weeks. Start in late August or early September, and the new site is working before the rush is in full swing. Even a September start is working for the second half of the quarter.",
      "The window is small, and the payoff over the rest of the year is large.",
    ],
    pitchTitle: "Start the build now, and be live before the rush",
    pitchBody: "$175 a month, flat. Your first payment starts the build, onboarding is self-serve, you sign the agreement before I start, and most builds are live in two to three weeks.",
    pitchCta: "Start now",
    pitchCtaUrl: "/subscribe/",
    objections: [
      {
        q: "I'm already getting busy. Can the build wait until October?",
        a: "Yes. October starts are common, and your part of the build is small either way. The earlier you start, the sooner the site is working for the fourth quarter."
      },
      {
        q: "What if the fourth quarter isn't busy for my trade?",
        a: "Then the <a href=\"/seasons/slow-season/\" class=\"inline-link\">slow-season page</a> is a better fit: pick whichever quiet month your trade has. It's the same plan at the same rate."
      },
      {
        q: "Should I patch my current site for the season instead?",
        a: "Maybe. Bring the URL to a free <a href=\"/contact/\" class=\"inline-link\">discovery call</a>, and I'll tell you whether your current site can carry you through the season or a rebuild is the better choice."
      },
    ],
  },
  {
    slug: "small-business-saturday",
    season: "Saturday after Thanksgiving",
    occasionShort: "Small Business Saturday",
    eyebrow: "Small Business Saturday",
    h1: "I'm a small business too,",
    h1Em: "so you work with one person from start to finish",
    metaTitle: "Small Business Saturday: Built by a Small Business | Pikes Peak Web Designs",
    metaDescription: "I'm one person. The person who answers the phone is the same one who designs your home page and writes the deployment script.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "Small Business Saturday is the one day of the year when the marketing world remembers that most American businesses aren't in the Fortune 500. They're a roofing crew of three, a two-person inspection firm, a husband-and-wife landscape design shop, or a solo HVAC operator. I'm the same shape: one person, with no layers and no outsourcing. The email address that answers your first question is the one that handles your support request two years from now.",
    argumentTitle: "What changes when there's no handoff",
    argumentBody: [
      "At a larger firm, a project often passes through five or six people: sales, an account manager, a designer, a junior developer, a senior developer, and quality testing. Each handoff is a chance for the brief to drift.",
      "I work differently. The person who answers the phone designs the home page, writes the deployment script, and handles the change you send two years after launch. Nothing gets lost in translation, because no one stands in between.",
      "The standards are the same ones larger firms aim for: WCAG 2.2 AA accessibility as the minimum, 95 to 100 on Google's speed test, and custom code throughout. What's different is who does the work.",
    ],
    pitchTitle: "One person, one rate, and one site you never have to worry about",
    pitchBody: "$175 a month, flat, and two to three weeks to build. The same person answers every email for as long as you're with me.",
    pitchCta: "Start now",
    pitchCtaUrl: "/subscribe/",
    objections: [
      {
        q: "What if you're too busy to take on my project?",
        a: "Sometimes my schedule is full. When it is, I'll tell you up front and give you a firm start date instead of an open-ended wait. A <a href=\"/contact/\" class=\"inline-link\">discovery call</a> is the easiest way to find out."
      },
      {
        q: "What happens if you're sick or on vacation?",
        a: "Hosting and uptime run on a global network, so the site doesn't depend on me being awake. For project work, I give notice ahead of any planned time off. Emergencies are rare, and I have a written plan for the common ones."
      },
      {
        q: "What happens if you stop running the business?",
        a: "Your domain is registered in your name, and you control it, so it never depends on me. Your photos, text, and brand assets stay yours. On the monthly plan, I own the code and host it while the agreement is active, and the <a href=\"/agreement/\" class=\"inline-link\">service agreement</a> sets out what happens when it ends."
      },
    ],
  },
  {
    slug: "black-friday",
    season: "Late November",
    occasionShort: "Black Friday",
    eyebrow: "Black Friday",
    h1: "I skip Black Friday pricing,",
    h1Em: "and keep one fair rate all year",
    metaTitle: "Black Friday for Service Businesses | Pikes Peak Web Designs",
    metaDescription: "I keep one rate all year. On a $175 monthly plan, the fairest Black Friday deal is a price that was never inflated in the first place.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "I don't cut prices for Black Friday, and I don't bundle the plan with limited-time bonuses. On a $175 monthly plan, the fairest holiday deal is a price that was never inflated in the first place. The rate is $175 in November, the same as in March, and the same for as long as we work together.",
    argumentTitle: "What I'd suggest instead, if Black Friday is on your mind",
    argumentBody: [
      "If you've been thinking about a new website for a while, the right week to start is the week you're ready. That might be this week, or it might be January. Either is fine.",
      "What does change is the calendar. With a call in the second half of November and a build that starts the same week, your site is comfortably live before the New Year. A December start is usually live by mid-January. If you want the new site working before the first quarter, the next two or three weeks are the window.",
      "And if you're not ready, that's fine too. The price on this page is the same in November, March, July, or any other month you come back.",
    ],
    pitchTitle: "The same flat rate, all 12 months of the year",
    pitchBody: "$175 a month, flat, for as long as we work together. No design deposit, no creeping retainer, and no surprise add-on fees.",
    pitchCta: "Start now",
    pitchCtaUrl: "/subscribe/",
    objections: [
      {
        q: "Can I get a discount for signing up on Black Friday?",
        a: "No, and here's why. A discount on a $175 monthly plan would be symbolic. The promise worth more is a rate that stays flat all year, and I keep it."
      },
      {
        q: "If I sign up in mid-November, will I be live before the New Year?",
        a: "Almost always. A two-to-three-week build that starts in mid-November has you live by mid-to-late December. A <a href=\"/contact/\" class=\"inline-link\">discovery call</a> is the easiest way to confirm a date."
      },
    ],
  },
  {
    slug: "year-end",
    season: "December",
    occasionShort: "Year End",
    eyebrow: "Year-end",
    h1: "If you have unspent operating budget,",
    h1Em: "put it where it keeps earning",
    metaTitle: "Year-End Spend: A Website That Earns It Back | Pikes Peak Web Designs",
    metaDescription: "In December, many service businesses still have operating budget on the books. A website is one of the few line items that brings in leads for 10 years.",
    shareCard: "/assets/img/og-default.jpg",
    heroLead: "Many of the service businesses I work with end December with some operating budget unspent. The usual choices are to leave it on the books and pay tax on it, spend it on something that's gone by January, or spend it on something that brings in leads every week for the next 10 years. A website is one of the few line items where the third choice is open to you.",
    argumentTitle: "How I think about year-end spending",
    argumentBody: [
      "$175 a month for 12 months is $2,100. As a budget line for next year, that's a small fraction of what most service businesses already spend on Google Ads, Facebook Ads, or paid lead services. It's also the only one of those that builds an asset: the site keeps bringing in leads whether or not you spend more on advertising.",
      "Year-end spending has clear tax treatment for almost every U.S. and Canadian small business, and your accountant can give you the specifics. The bigger story is what the site does for you next year and the year after.",
      "Start the two-to-three-week build in December, and the new site is live and bringing in leads in January.",
    ],
    pitchTitle: "Spend it now, and earn it back over the next decade",
    pitchBody: "$175 a month, flat. Your first month's payment starts the build, and most builds are live in two to three weeks.",
    pitchCta: "Start now",
    pitchCtaUrl: "/subscribe/",
    objections: [
      {
        q: "Can I prepay the entire year?",
        a: "Yes. Send me a note through the <a href=\"/contact/\" class=\"inline-link\">contact page</a>, and I can issue a single annual invoice for $2,100 instead of 12 monthly charges. The rate is the same either way."
      },
      {
        q: "Can the build start in December but launch in January?",
        a: "Yes. Most December starts launch in mid-to-late January, which is normal. A <a href=\"/contact/\" class=\"inline-link\">discovery call</a> sets the schedule clearly, so neither of us gets a surprise."
      },
      {
        q: "What if I'm traveling for the holidays?",
        a: "Most of the build doesn't need us working at the same time. The <a href=\"/onboarding/\" class=\"inline-link\">onboarding form</a> is self-serve, and you can fill it in a bit at a time. The review calls are short, and many December clients spend less than two hours of their own time on the whole build."
      },
    ],
  },
];
