---
title: "The Owner's Guide: What Every Client Gets at Launch"
date: 2026-05-31
label: "Process & Operations"
description: "The Owner's Guide is the seventeen-section reference document every client receives the day their site goes live. A walkthrough of what is in it."
ctaLabel: "Reference doc included"
ctaHeading: "The Owner's Guide ships with every site."
ctaText: "Seventeen sections covering everything that happens after launch. Open at any time, no login needed. Part of the standard plan, included with the build."
layout: layouts/post.njk
tags: [post]
---

<p>The day a site I built goes live, the client receives an Owner's Guide: a written reference document that covers everything that happens after launch. Who maintains what. How to ask for changes. What counts as an emergency. What your monthly invoice looks like. How to recover the domain if the renewal lapses. What the SOPs cover. Where the search index lives. The contact card.</p>

<p>The guide is not glamorous and most clients only read parts of it on the day they receive it. But over the years that follow, it gets opened periodically, and having it as a written reference rather than as a series of "I forgot — what did Jon say about X?" emails saves real time on both sides.</p>

<p>This post walks through what is in the guide, why each section is there, and what makes a good post-launch reference document.</p>

<h2>Why a written guide rather than email follow-ups</h2>

<p>Three years into a typical engagement, the average client has accumulated 100+ emails with me about their site. Searching that thread for the answer to "what was the renewal date for my domain again" is a 5-minute exercise of false starts. Searching the Owner's Guide for the same question is 30 seconds.</p>

<p>The guide is also the reference the client's bookkeeper uses, the reference a future developer would use if I retired, and the reference the client's adult kid uses when they take over running the business. None of those people read the email thread.</p>

<p>The investment in writing the guide once is small relative to the cumulative value of having the answers in writing. Every client receives the same template, customized to their specific configuration.</p>

<h2>The seventeen sections</h2>

<p>The current version of the Owner's Guide template covers seventeen sections, each addressing a specific question that comes up over the lifetime of an engagement.</p>

<p><strong>1. Who handles what.</strong> The clean split between what I handle (build, hosting, security, content updates, monitoring) and what the client handles (domain renewal, email account, business operations). Names the boundary so neither side accidentally drops a ball on the other side.</p>

<p><strong>2. How to ask for changes.</strong> The four ways: the content-update form (preferred, structured), email (works fine, less structured), phone or text (for urgent), and direct in-person (rare, but possible for local clients). Each one ends in the same inbox; the form just pre-structures the request.</p>

<p><strong>3. What counts as an emergency.</strong> Site fully down, wrong contact info live, security concern, defacement, wrong price published. These skip the queue and get same-day or next-business-day handling.</p>

<p><strong>4. What does NOT count as an emergency.</strong> "I want to change the photo on the homepage" is a routine update, not an emergency, even if the client wants it done today. Setting expectations up front avoids frustration.</p>

<p><strong>5. How form submissions work.</strong> Submissions arrive at the client's business email via Web3Forms. The submissions are not stored on my side or on Web3Forms' side; they are forwarded to the client's inbox immediately and the only copy is in the inbox.</p>

<p><strong>6. Your domain.</strong> The domain registrar, the registered name, the renewal date, what happens if the domain lapses, and how I monitor it independent of the registrar's email reminders.</p>

<p><strong>7. Email setup.</strong> Whichever email provider the client uses (Google Workspace, Microsoft 365, etc.), the MX records I configured, and how to add additional users to the email account.</p>

<p><strong>8. Hosting and uptime.</strong> Where the site is hosted (Cloudflare Pages on my account), the practical implications of that arrangement, and what happens during the rare hosting incidents.</p>

<p><strong>9. Security.</strong> Why the static-site architecture has minimal attack surface (no database, no admin panel, no PHP runtime), the SSL certificate auto-renewal, and what the residual risks are.</p>

<p><strong>10. SEO foundation.</strong> The technical SEO work shipped with the site (sitemap, robots.txt, schema markup, meta tags, OG cards), what is monitored on an ongoing basis, and what the client can do directly in Google Search Console.</p>

<p><strong>11. Analytics.</strong> Cloudflare Web Analytics and Umami, what each one measures, where to log in, and how to read the dashboards.</p>

<p><strong>12. Your Google Business Profile.</strong> The integration between the website and the GBP, recommendations for the four-times-a-year GBP maintenance, and how to handle review responses.</p>

<p><strong>13. Adding new content.</strong> The flow for adding a new service page, a new blog post, a new service area, or a new piece of content to an existing page. Most are routine updates; some are larger lifts that count as new pages and may bill at the standard add-page rate.</p>

<p><strong>14. Seasonal updates.</strong> The trade-specific changes that happen at predictable points in the year: the storm-season page going live in spring, the holiday-hours announcement in November, the year-in-review post in January. The guide names which the client wants done and on what cadence.</p>

<p><strong>15. Your monthly invoice.</strong> What the $175 covers, what is excluded, when invoices arrive, what happens if a payment fails, how to update the payment method.</p>

<p><strong>16. Leaving the relationship.</strong> The exit terms in plain language: 30 days notice, the static export of the site, the domain transfer, the analytics export. None of it is expensive or complicated; the guide names the steps.</p>

<p><strong>17. Quick contact card.</strong> Phone, email, the link to the client portal, the four channels for getting in touch. The page that gets bookmarked and used most.</p>

<h2>Why each section earns its keep</h2>

<p>Every section in the guide is there because a client question prompted it. Section 6 (your domain) was added after a client's domain expired during a year-long absence and we both scrambled to recover it. Section 14 (seasonal updates) was added when I realized I was sending three different clients the same "want me to add the storm-season page back?" email each May.</p>

<p>The guide grows over time as new patterns emerge. Sections that have not been useful in two years get removed. The version a client receives in 2026 is a different shape from the one a client received in 2022, but the through-line is "every routine question has a written answer."</p>

<h2>Where the guide lives</h2>

<p>The Owner's Guide for clients I work with lives at <a href="/owners-guide/" class="inline-link">a public URL</a> on this site. There is no login, no per-client customization, no separate version per client. The guide is the same template for everyone, and the small client-specific details (specific domain, specific email provider, specific GBP URL) are kept separately in a per-client document I send by email at launch.</p>

<p>The argument for keeping the main guide public: clients can reference it before, during, and after their engagement. Prospects can read it and see what the post-launch experience actually looks like. The transparency is part of the trust.</p>

<p>The argument against having it as a per-client locked document: every locked client document I have ever seen on a small business engagement has gotten lost (the client's email account was migrated, the document host was cancelled, the share link expired). A public reference document never gets lost.</p>

<h2>How clients use it</h2>

<p>The honest pattern: most clients open it once at launch, skim it, and bookmark it. They reach back to it three to five times per year, usually to answer a specific question that came up. The guide is more reference manual than reading material; that is the right shape.</p>

<p>The clients who do read the whole thing at launch tend to ask better questions during the engagement. They know the boundaries, they know the cadences, they know what is included and what is hourly. The first 90 days run more smoothly when the guide has been read.</p>

<h2>If your current relationship with a web vendor has no equivalent document</h2>

<p>That is a real signal. The vendor either does not have a documented post-launch operation, or has one but does not share it. Either is a yellow flag worth investigating. The right question is "what does the post-launch reference look like?" — and a vendor without a real answer is one whose ongoing engagement is undocumented.</p>

<p>For sites I build, the Owner's Guide is part of the standard plan; the build is not complete until the guide is sent. For sites I do not build, the same approach can be applied to any platform: a written reference document, kept current as the engagement evolves, available at a stable URL the client can find.</p>
