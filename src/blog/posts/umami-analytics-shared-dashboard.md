---
title: "Umami Analytics: A Shared Dashboard for Every Client"
date: 2026-05-11
label: "Analytics & Privacy"
description: "Umami is open-source, privacy-first analytics with a clean dashboard. Here is how I run it, how clients access it, and why I pair it with Cloudflare."
ctaLabel: "Open dashboard, no banner"
ctaHeading: "I share an Umami dashboard with every client."
ctaText: "Cookie-free, GDPR-compliant by default, with the same operational reports the typical small business owner actually uses. Part of the standard plan."
layout: layouts/post.njk
tags: [post]
---

<p>Umami is the second analytics tool I install on every site I build. It runs alongside <a href="/blog/cloudflare-web-analytics/" class="inline-link">Cloudflare Web Analytics</a> and serves a slightly different purpose: where Cloudflare gives me edge-level traffic and Core Web Vitals data, Umami gives the client a clean, self-hosted dashboard they can log into directly and learn from at their own pace.</p>

<p>This post walks through what Umami is, how I share access with clients, what the dashboard shows, and why running both tools together is more useful than running either alone.</p>

<h2>What Umami is</h2>

<p>Umami is an open-source web analytics product designed as a privacy-respecting alternative to Google Analytics. It runs on a self-hosted server (or on the company's hosted plan), uses no cookies, does not fingerprint visitors, and produces a dashboard with the standard analytics reports any small business owner would recognize: page views, top pages, top referrers, country and device breakdowns, real-time visitors, and event tracking when needed.</p>

<p>The crucial difference from Google Analytics is that Umami collects only the data the dashboard actually needs. There is no behavioral profile built about individual visitors, no cross-site tracking, no data sold to third parties, no surveillance economy attached. The data is yours; the privacy posture is intentional; the consent banner that Google Analytics requires in most jurisdictions is not needed because Umami does not do the things consent is supposed to gate.</p>

<p>Umami also has a shorter learning curve than Google Analytics. The dashboard is visually clean, the reports are named what they actually are, and a small business owner who has never touched analytics can find the answer to their question within five minutes of logging in.</p>

<h2>How I run it</h2>

<p>I host one shared Umami instance for all client sites. Each client site gets a separate "website" inside that instance, and the client's data is isolated from other clients'. The shared instance keeps the operational cost low (one VPS or Cloudflare Worker, depending on traffic) without any compromise to client privacy or data ownership.</p>

<p>Setup per client looks like:</p>

<ol>
  <li>Create a new website entry in Umami with the client's domain.</li>
  <li>Copy the small JavaScript snippet Umami generates (about 1 KB).</li>
  <li>Add the snippet to the client's site's base layout in the <code>&lt;head&gt;</code>.</li>
  <li>Wait for the first events to show up (usually within minutes of the next visit).</li>
  <li>Create a client-only user account on the Umami instance with read-only access to that site's reports.</li>
  <li>Send the client their login link, username, and a temporary password they will reset on first login.</li>
</ol>

<p>The client now has a working analytics dashboard at their own URL (usually <code>analytics.theirdomain.com</code> via a CNAME I set up at launch), accessible from any browser, on any device, with no app to install.</p>

<h2>What the shared dashboard shows</h2>

<p>The Umami dashboard has six main reports. None require any expertise to interpret.</p>

<p><strong>Visitors and views over time.</strong> The default view: a line chart showing daily visitors and total page views for any date range. Useful for tracking whether the site is growing month over month.</p>

<p><strong>Top pages.</strong> The most-viewed URLs on the site, sorted descending. Particularly useful when paired with the date filter; what was the top page in your busy season vs. your slow season.</p>

<p><strong>Referrers.</strong> Where visitors came from. Direct, search engines, other sites linking to you, social platforms. Filterable by source and by URL pattern.</p>

<p><strong>Browsers, OS, devices.</strong> The technical breakdown of who is visiting. Useful for confirming that the mobile-first design is actually serving the bulk of your visitors (it almost always is on a service-business site).</p>

<p><strong>Countries, regions, cities.</strong> Geographic breakdown. For local service businesses, this confirms whether your local-pack work is producing local traffic vs. drive-by traffic from elsewhere.</p>

<p><strong>Events.</strong> Custom events I can wire into the site for specific tracking ("contact form submitted," "phone number tapped," "audit form completed"). Most clients do not need event tracking; for those who do, it is a few minutes of setup per event.</p>

<p>Real-time visitor count is shown at the top of the dashboard at all times. A client can refresh the page during a marketing push and watch the visitor count tick up live.</p>

<h2>Why I share access</h2>

<p>The data on the dashboard is the client's, not mine. The client paid for the site, the site is bringing them traffic, the analytics are about their business. They get full access to the dashboard from launch day forward.</p>

<p>Concretely, this means three things:</p>

<p><strong>The client can log in any time.</strong> No request to me, no waiting for a quarterly report. A client who wants to know how their Black Friday landing page performed can check the moment the campaign ends.</p>

<p><strong>The client owns the historical data.</strong> Three years of analytics data accumulates in Umami. If the engagement ever ends, I export the client's website data as JSON and hand it over. They can self-host their own Umami instance, import the data, and continue without any gap.</p>

<p><strong>The client can take a full data export at any time.</strong> Not just a CSV of last week's visits, but the entire raw event log. This is the kind of data ownership that traditional analytics agreements never offer.</p>

<p>The client portal page on this site has the dashboard link wired in, so any of my clients can bookmark the portal and reach their analytics in one click.</p>

<h2>How Umami complements Cloudflare</h2>

<p>I run Cloudflare Web Analytics and Umami together for every client. The two tools serve different purposes:</p>

<p><strong>Cloudflare runs at the edge.</strong> The data comes from Cloudflare's network as visitors hit it. This makes the Core Web Vitals (LCP, INP, CLS) reports particularly accurate, since they measure on real visitor devices.</p>

<p><strong>Umami runs from a script in the browser.</strong> The data comes from the visitor's browser executing a small piece of JavaScript. This means it can capture custom events and page-level details Cloudflare cannot. It also means ad-blockers can sometimes block the script, which Cloudflare's edge measurement avoids.</p>

<p>Together, the two reports cross-check each other. If they agree, both are working. If they disagree, the disagreement is informative; usually one tool is being blocked by some segment of visitors, and the other catches what was missed.</p>

<p>For most clients, the practical use is: open Umami when you want to look at traffic and pages; open Cloudflare when you want to look at performance and country breakdowns. Both dashboards are bookmarkable.</p>

<h2>What it costs the client</h2>

<p>Nothing extra. The shared Umami instance is part of the standard plan. There is no per-site analytics fee, no traffic-based pricing, no upsell to a paid version. The same instance hosts every client's analytics on the same infrastructure I run for the rest of the engagement.</p>

<p>If a client wanted to take their data to a separate Umami instance (because they want full control, or because they prefer to host it themselves), the export-and-migrate path is straightforward. Most clients do not, but the option is there.</p>

<h2>What clients should do with it</h2>

<p>The honest answer is "log in once a quarter and look at three things":</p>

<ol>
  <li><strong>Total visitors trend.</strong> Up year-over-year is the goal.</li>
  <li><strong>Top pages.</strong> Are visitors finding the pages you want them to find?</li>
  <li><strong>Referrers.</strong> Is search bringing meaningful traffic?</li>
</ol>

<p>That is it. Three numbers, ten minutes a quarter. The dashboard supports much more elaborate analysis if a client wants it; most do not need to do any of that.</p>

<p>For clients running specific campaigns (a Google Ads run, a podcast appearance, a press placement), opening Umami during the campaign window and watching the daily visitor count is the simplest possible measurement of whether the campaign moved anything. No funnel-building, no event configuration, just a glance at the line chart.</p>

<h2>If your current site has Google Analytics</h2>

<p>The migration from GA4 to Umami is straightforward and worth doing for most small businesses. The privacy posture improves, the consent banner becomes optional in most cases, the dashboard becomes simpler, and the data ownership becomes yours.</p>

<p>For sites I build, the migration is part of the launch process. The old GA4 property is left in place for anyone who wants to keep it, but Umami becomes the primary dashboard and the cookie banner usually goes away.</p>

<p>For sites I do not build, Umami can run on any platform that supports a JavaScript snippet in the head: WordPress, Wix, Squarespace, Shopify, Webflow, custom-coded. The work is one paste, no plugins required.</p>
