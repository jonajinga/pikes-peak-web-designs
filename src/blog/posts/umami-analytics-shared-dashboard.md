---
title: "Umami Analytics: A Shared Dashboard for Every Client"
date: 2026-05-11
label: "Analytics & Privacy"
description: "Umami is open-source, privacy-friendly analytics with a clean dashboard. Here's how I run it, how clients reach it, and why I pair it with Cloudflare."
ctaLabel: "Open dashboard, no banner"
ctaHeading: "I share an Umami dashboard with every client"
ctaText: "It uses no cookies, meets Europe's GDPR privacy law from the start, and covers the reports a small business owner uses most. Part of the standard plan."
layout: layouts/post.njk
tags: [post]
---

<p>Umami is the second analytics tool I install on every site I build. It runs alongside <a href="/blog/cloudflare-web-analytics/" class="inline-link">Cloudflare Web Analytics</a> and does a different job. Cloudflare gives me traffic and speed data from its network. Umami gives you a clean dashboard you can log into yourself and explore at your own pace.</p>

<h2>What Umami is</h2>

<p>Umami is open-source analytics (its code is public and free to use), built as a privacy-friendly alternative to Google Analytics. It runs on your own server or on Umami's paid hosting. It uses no cookies and doesn't fingerprint visitors (identify them from their device settings). Its reports are the ones any owner would recognize: page views, top pages, where visitors came from, countries and devices, who's on the site right now, and custom events when needed.</p>

<p>Umami collects only what the dashboard needs. It builds no profile of individual visitors, tracks no one across sites, and sells no data. The data is yours. And because Umami doesn't do the things consent banners exist to control, you don't need the banner that Google Analytics requires in most places.</p>

<p>It's also easier to learn than Google Analytics. An owner who has never used analytics can find an answer within five minutes of logging in.</p>

<h2>How I run it</h2>

<p>I host one shared copy of Umami for all my client sites. Each site gets its own entry, and each client's data stays separate from everyone else's. Sharing one copy keeps the running cost low (one small rented server or one Cloudflare Worker, depending on traffic) without giving up any privacy or data ownership.</p>

<p>Setup for each client:</p>

<ol>
  <li>Create a new website entry in Umami with the client's domain.</li>
  <li>Copy the small JavaScript snippet Umami creates (about 1 KB).</li>
  <li>Add the snippet to the site's main layout, in the <code>&lt;head&gt;</code>.</li>
  <li>Wait for the first visits to show up, usually within minutes.</li>
  <li>Create a client login with read-only access to that site's reports.</li>
  <li>Send the client their login link, username, and a temporary password to change on first sign-in.</li>
</ol>

<p>The client then has a working dashboard at their own address, usually <code>analytics.theirdomain.com</code>, through a DNS record (a CNAME) I set up at launch. It works in any browser, on any device, with no app to install.</p>

<h2>What the shared dashboard shows</h2>

<p>The dashboard has six main reports, and none takes expertise to read.</p>

<p><strong>Visitors and views over time.</strong> A line chart of daily visitors and page views for any date range, which shows whether the site is growing.</p>

<p><strong>Top pages.</strong> Your most-viewed pages, highest first. Use it with the date filter to compare your busy season with your slow one.</p>

<p><strong>Referrers.</strong> Where visitors came from: typing your address, search engines, links on other sites, or social media.</p>

<p><strong>Browsers, operating systems, and devices.</strong> It confirms that the phone-first design serves most of your visitors, as it almost always does on a service-business site.</p>

<p><strong>Countries, regions, and cities.</strong> Where visitors are. For a local business, this shows whether your local search work brings in local visitors or passing traffic from elsewhere.</p>

<p><strong>Events.</strong> Actions I can track for you, such as "contact form sent," "phone number tapped," or "quote request sent." Most clients don't need them. Each one takes a few minutes to set up.</p>

<p>A live visitor count sits at the top of the dashboard. During a promotion, you can refresh the page and watch it rise.</p>

<h2>Why I share access</h2>

<p>The data is about your business and your visitors, so it's yours, not mine. You get full access from launch day on, which means three things:</p>

<p><strong>You can log in any time.</strong> There's no report to wait for. You can see how a Black Friday landing page did the moment the campaign ends.</p>

<p><strong>You keep the history.</strong> If you ever leave, I export your analytics data as a file (in a format called JSON) and hand it over. You can import it into your own copy of Umami and carry on without a gap.</p>

<p><strong>You can take a full export at any time.</strong> Not just a spreadsheet of last week's visits, but the complete record of every visit and event.</p>

<p>The client portal on this site links to the dashboard, so clients can bookmark the portal and reach their analytics in one click.</p>

<h2>How Umami complements Cloudflare</h2>

<p>I run both tools for every client, because each one measures differently.</p>

<p><strong>Cloudflare measures from its network.</strong> Its data comes from Cloudflare's servers as visitors reach the site. That makes its Core Web Vitals reports especially accurate, since they're measured on visitors' own devices. (Core Web Vitals are Google's measures of loading speed, responsiveness, and layout stability, known as LCP, INP, and CLS.)</p>

<p><strong>Umami measures from the browser.</strong> Its data comes from a small script that runs in the visitor's browser, so it can record custom events and page details Cloudflare can't. It also means ad blockers sometimes block it, which Cloudflare's measurement avoids.</p>

<p>Together, the two reports check each other. If they agree, both are working. If they don't, the gap tells you something: usually some visitors are blocking one tool, and the other catches what it missed. Most clients open Umami for traffic and pages and Cloudflare for speed and country breakdowns.</p>

<h2>What it costs the client</h2>

<p>Nothing extra. Umami is part of the standard plan, with no per-site fee, no traffic-based pricing, and no paid upgrade. It runs on the same setup I use for the rest of your site.</p>

<p>If you'd rather run your own copy of Umami for full control, moving your data is straightforward. Most clients don't, but the option is there.</p>

<h2>What clients should do with it</h2>

<p>Log in once a quarter and look at three things:</p>

<ol>
  <li><strong>Total visitors.</strong> The goal is growth from one year to the next.</li>
  <li><strong>Top pages.</strong> Are visitors finding the pages you want them to find?</li>
  <li><strong>Referrers.</strong> Is search bringing in meaningful traffic?</li>
</ol>

<p>That's three numbers and 10 minutes a quarter. The dashboard supports far more detailed analysis, but most clients don't need it.</p>

<p>If you run a campaign, such as Google Ads, a podcast appearance, or a press mention, watch the daily visitor count while it runs. It's the simplest way to tell whether the campaign moved anything.</p>

<h2>If your current site has Google Analytics</h2>

<p>Moving from Google Analytics 4 (GA4) to Umami is worth doing for most small businesses. Visitors get more privacy, the consent banner usually becomes optional, the dashboard gets simpler, and the data becomes yours.</p>

<p>On sites I build, the switch is part of launch. I leave the old GA4 account in place for anyone who wants it, but Umami becomes the main dashboard, and the cookie banner usually goes away.</p>

<p>On other sites, Umami works on any platform that lets you add a snippet of JavaScript to the page head: WordPress, Wix, Squarespace, Shopify, Webflow, or a custom-coded site. It takes one paste and no plugins.</p>
