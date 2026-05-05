---
title: "Cloudflare Web Analytics: Privacy-First Site Performance"
date: 2026-05-10
label: "Analytics & Privacy"
description: "Cloudflare Web Analytics is free, privacy-respecting, and lightweight. Here is how I wire it into every client site and what it actually tells you."
ctaLabel: "Privacy-first by default"
ctaHeading: "I ship privacy-respecting analytics on every build."
ctaText: "Cloudflare Web Analytics plus Umami, both cookie-free, no banner required, no third-party tracker tax. Part of the standard plan."
layout: layouts/post.njk
tags: [post]
---

<p>For most of the last decade, "analytics on a website" has meant Google Analytics, with all the cookie banners, tracker pixels, and privacy-policy paragraphs that come with it. The trade most small business owners did not realize they were making was that the analytics was running on visitors' browsers, sending their behavior to Google, in exchange for a dashboard most owners only opened twice a year.</p>

<p>That trade does not have to happen. Cloudflare Web Analytics is a free, privacy-respecting alternative I run on every site I build. It does not use cookies, does not track individuals, does not require a consent banner, and produces the same operational reports the typical small business owner actually uses. This post walks through what it is, what it shows, how I set it up for clients, and how it complements the other parts of the analytics stack.</p>

<h2>What Cloudflare Web Analytics is</h2>

<p>Cloudflare Web Analytics is a privacy-first traffic-analytics product that Cloudflare offers for free to any site, whether the site is hosted on Cloudflare's network or not. It tracks page views, top pages, top referrers, top countries, browser and device breakdowns, and Core Web Vitals (the performance metrics Google uses for search ranking).</p>

<p>The crucial distinction from Google Analytics: Cloudflare does the measurement at the edge of its network, not in the visitor's browser. There is no cookie set, no fingerprinting, no IP storage, no behavioral profile built. The data Cloudflare can produce is therefore aggregated and anonymous; it cannot tell you which specific visitor went to which specific page or what they did before or after.</p>

<p>For most service-business websites, that limitation is not a limitation. The questions a small business owner actually asks of analytics ("how many people visited my site this month, where did they come from, what did they look at, are my pages loading fast enough") are exactly what Cloudflare reports. The questions Cloudflare cannot answer ("what is the conversion rate of visitor segment X across funnel Y") are questions most small businesses do not actually need to answer.</p>

<h2>What it costs</h2>

<p>Free, with no asterisks. Cloudflare offers Web Analytics at no charge regardless of traffic volume, plan tier, or whether your site is on their network. The free tier is the only tier; there is no upsell to a paid version with extra features.</p>

<p>The reason Cloudflare can offer this for free is that they make money on hosting, DNS, security, and edge compute. Web Analytics is a strategic feature designed to compete with Google's ecosystem, and the cost to Cloudflare is incremental compared to the infrastructure they already run.</p>

<h2>How I set it up</h2>

<p>The setup runs about ten minutes per site:</p>

<ol>
  <li><strong>Create a Cloudflare account or use the existing one.</strong> Most of my clients' sites are hosted on Cloudflare Pages, so the account already exists. For clients hosted elsewhere, the analytics still works; the Cloudflare account just needs to exist.</li>
  <li><strong>Add the site to Cloudflare Web Analytics.</strong> The dashboard generates a small JavaScript snippet that goes in the site's <code>&lt;head&gt;</code>. The snippet is around 1 KB and is the only third-party request on the page.</li>
  <li><strong>Add the snippet to the base layout.</strong> For every site I build, the snippet lives in the base template and runs on every page automatically. No per-page configuration.</li>
  <li><strong>Wait for data.</strong> Cloudflare starts logging visits within minutes. The dashboard reports become useful after a few days of accumulated data.</li>
  <li><strong>Share the dashboard with the client.</strong> Cloudflare lets me grant the client read-only access to the analytics dashboard for their domain. They get the full reports without needing to learn Cloudflare's broader product.</li>
</ol>

<p>Step 5 is the one that matters most operationally. The client owns the data; I just see it because I'm helping. If the engagement ever ends, the client retains everything by removing me from the account.</p>

<h2>What the dashboard shows</h2>

<p>The Cloudflare Web Analytics dashboard has five main reports. None of them require any expertise to read.</p>

<p><strong>Page views over time.</strong> A line chart of total page views per day or per hour. Useful for seeing whether traffic is trending up, down, or seasonal. Filterable by date range from the past day to the past year.</p>

<p><strong>Top pages.</strong> A list of the most-visited URLs on the site, sorted by views. The single most useful report for understanding what visitors are actually reading. Often surprising; the homepage is rarely the top page on a service-business site after the first few months. Service pages, individual blog posts, and service-area pages tend to dominate.</p>

<p><strong>Top referrers.</strong> Where visitors came from. Direct (typed URL or bookmark), search engines (Google, Bing, DuckDuckGo), and other websites that link to the site. Useful for seeing whether SEO is working (high search volume) or whether a specific referral source is driving meaningful traffic.</p>

<p><strong>Geography.</strong> Which countries, regions, and cities visitors are from. Particularly useful for service businesses to confirm the local-pack work is producing local traffic.</p>

<p><strong>Core Web Vitals.</strong> The three performance metrics Google uses for search ranking: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). All measured against real visitors' devices, not synthetic lab tests. This is the report that tells me whether the speed work I did at build time is holding up in production.</p>

<p>The Core Web Vitals report is the one I check most often. A site that loaded fast at launch can degrade over time as content is added; the CWV dashboard catches the degradation early.</p>

<h2>What it does not show</h2>

<p>Worth being honest about the limits.</p>

<p>Cloudflare Web Analytics cannot tell you which individual visitor went to which page, because it does not track individuals. A return-visit rate of "fifteen percent of sessions are returning" is the kind of aggregate it reports; "this specific visitor came back three times" is not.</p>

<p>It cannot run conversion-funnel analysis or A/B tests. For that you would need a tool that does track individuals (Google Analytics, Plausible Pro, Fathom Pro), which means accepting the cookies and the privacy posture that come with them.</p>

<p>It cannot do server-side tracking of conversions through to a CRM. For that you would need a different stack entirely, and the privacy implications scale up accordingly.</p>

<p>For most service-business sites, none of these gaps matter. The analytics question being answered is "is the site bringing in traffic and is it loading fast enough." Cloudflare answers both well.</p>

<h2>Why I pair it with Umami</h2>

<p>For most clients, Cloudflare Web Analytics is the only analytics I install. For clients who want a second view of the same data with a slightly different shape, I pair it with <a href="/blog/umami-analytics-shared-dashboard/" class="inline-link">Umami</a>, an open-source privacy-first analytics tool that produces nearly identical reports. The two tools agree on the broad strokes; if they ever diverge, the divergence itself is informative (it usually points to a tracker-blocker or ad-blocker pattern affecting one but not the other).</p>

<p>Both are cookie-free. Neither needs a consent banner. The combined stack covers the same operational ground as Google Analytics with none of the privacy-policy overhead.</p>

<h2>What clients should do with the dashboard</h2>

<p>For most clients, the answer is "look at it once a quarter." The dashboards do not need daily attention; they are operational health metrics, not performance dashboards in the sales sense.</p>

<p>The three numbers worth checking quarterly:</p>

<p><strong>Total visits.</strong> Is the trend moving in the right direction over the past 12 months? A site that was getting 800 visits per month at launch and is now at 1,800 is winning. A site that has been flat at 800 for two years is not.</p>

<p><strong>Top pages.</strong> Are the pages getting traffic the pages you actually want to be getting traffic? If your top-traffic page is the privacy policy, something is off. If it is your highest-margin service page, that is the right pattern.</p>

<p><strong>Core Web Vitals.</strong> Are all three green? A site that started green and has slipped to amber needs attention. The slippage is usually fixable.</p>

<p>That is a 10-minute review per quarter, not a daily ritual. If anything in the dashboard suggests a real issue, that is when I dig deeper, not when the client does.</p>

<h2>If your current site does not have analytics set up</h2>

<p>Cloudflare Web Analytics is the cheapest, fastest, and most ethical way to start. Setup is one snippet in the head of the page. The reports become useful within a few days. There is no ongoing maintenance.</p>

<p>For sites I build, this is part of the standard plan; the analytics is wired in before launch and shared with the client. For sites I do not build, the same setup applies regardless of platform: WordPress, Wix, Squarespace, Shopify, Webflow, custom-coded, all support a single JavaScript snippet in the head. The work is small relative to the value of the data.</p>
