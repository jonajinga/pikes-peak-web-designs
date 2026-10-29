---
title: "Cloudflare Web Analytics: Privacy-First Site Performance"
date: 2026-05-10
label: "Analytics & Privacy"
description: "Cloudflare Web Analytics is free, respects privacy, and adds almost no weight. Here's how I set it up on every client site and what it tells you."
ctaLabel: "Privacy-friendly by default"
ctaHeading: "I set up privacy-friendly analytics on every site"
ctaText: "I use visitor statistics that work without cookies, such as Cloudflare Web Analytics and Umami, so your site needs no cookie banner and carries no outside trackers. It's part of the standard plan."
layout: layouts/post.njk
tags: [post]
---

<p>For most of the last decade, website analytics, the statistics on who visits and what they view, meant Google Analytics. It came with cookie banners, tracking pixels, and paragraphs in the privacy policy. Most owners didn't realize the trade they were making. The code ran in visitors' browsers and sent their behavior to Google, in exchange for a dashboard most owners opened twice a year.</p>

<p>You don't have to make that trade. Cloudflare Web Analytics is a free, privacy-friendly choice I use on every site I build. It uses no cookies, tracks no individuals, and needs no consent banner, yet it gives the everyday reports a small-business owner uses.</p>

<h2>What Cloudflare Web Analytics is</h2>

<p>Cloudflare offers Web Analytics free to any site, whether or not Cloudflare hosts it. It tracks page views, top pages, top referrers (the sites that send you visitors), countries, browsers, and devices. It also tracks Core Web Vitals, the speed scores Google uses in search ranking.</p>

<p>The key difference from Google Analytics is where the measuring happens: on Cloudflare's network, not in the visitor's browser. It sets no cookie, takes no device fingerprint, stores no IP address (the device's internet address), and builds no profile. So its numbers are combined and anonymous, and it can't tell you which visitor went to which page or what they did before or after.</p>

<p>For most service-business websites, that limit costs nothing. Owners ask how many people visited this month, where they came from, what they looked at, and whether the pages load fast enough, and Cloudflare answers all of it. It can't show how one group of visitors moves through a series of pages toward a sale (a funnel), but most small businesses don't need that.</p>

<h2>What it costs</h2>

<p>It's free, with no catch. Cloudflare charges nothing for Web Analytics at any traffic level, on any plan, whether or not your site is on its network. The free version is the only version, with no paid upgrade.</p>

<p>Cloudflare can afford this because it earns money from hosting, DNS, security, and computing on its network. Web Analytics helps it compete with Google, and it costs Cloudflare little on top of the systems it already runs.</p>

<h2>How I set it up</h2>

<p>Setup takes about 10 minutes per site:</p>

<ol>
  <li><strong>Create a Cloudflare account or use the existing one.</strong> Most of my clients' sites are hosted on Cloudflare Pages, so the account already exists. Sites hosted elsewhere still work; they just need a Cloudflare account.</li>
  <li><strong>Add the site to Cloudflare Web Analytics.</strong> The dashboard creates a small piece of JavaScript code (a snippet) for the site's <code>&lt;head&gt;</code> section. It's about 1 KB and is the only outside request on the page.</li>
  <li><strong>Add the snippet to the base layout.</strong> On every site I build, the snippet lives in the main template and runs on every page automatically, with nothing to set per page.</li>
  <li><strong>Wait for data.</strong> Cloudflare starts logging visits within minutes, and the reports become useful after a few days.</li>
  <li><strong>Share the dashboard with the client.</strong> Cloudflare lets me give the client read-only access to the analytics for their domain. They get the full reports without learning the rest of Cloudflare.</li>
</ol>

<p>Step 5 matters most day to day. The data belongs to the client, and I see it because I'm helping. If we ever stop working together, the client keeps everything by removing me from the account.</p>

<h2>What the dashboard shows</h2>

<p>The dashboard has five main reports, and none of them take expertise to read.</p>

<p><strong>Page views over time.</strong> A line chart of total page views per day or per hour. It shows whether traffic is rising, falling, or following the seasons, for any period from the past day to the past year.</p>

<p><strong>Top pages.</strong> The most-visited pages on the site, sorted by views. This is the most useful report for seeing what visitors read, and it often surprises people. After the first few months, the home page is rarely the top page on a service-business site; service pages, blog posts, and service-area pages usually lead.</p>

<p><strong>Top referrers.</strong> Where visitors came from: direct visits (a typed address or a bookmark), search engines such as Google, Bing, and DuckDuckGo, and other sites that link to yours. It shows whether your search work (SEO) is paying off and whether any single source sends a meaningful number of visitors.</p>

<p><strong>Geography.</strong> The countries, regions, and cities your visitors come from. For a service business, it confirms that work on Google's map results (the "local pack") brings in local visitors.</p>

<p><strong>Core Web Vitals.</strong> Google's three speed scores, measured on real visitors' devices rather than in a lab. Largest Contentful Paint (LCP) is how fast the main content appears. Interaction to Next Paint (INP) is how fast the page responds to a tap, and Cumulative Layout Shift (CLS) is how much it jumps while loading. This report tells me whether the speed I built in is holding up on the live site.</p>

<p>I check the Core Web Vitals report most often. A site that loaded fast at launch can slow down as content is added, and this report catches the slide early.</p>

<h2>What it does not show</h2>

<p>The tool has limits, and you should know them.</p>

<p>It can't tell you which visitor went to which page, because it doesn't track individuals. It reports totals, such as "15 percent of visits are return visits," but never "this visitor came back three times."</p>

<p>It can't map a funnel or run A/B tests, which compare two versions of a page. For that you'd need a tool that tracks individuals, such as Google Analytics, Plausible Pro, or Fathom Pro, and you'd accept the cookies and privacy costs that come with it.</p>

<p>It can't follow sales from the server into a CRM, the software that tracks your customers. That needs a different set of tools entirely, with bigger privacy questions.</p>

<p>For most service-business sites, these gaps don't matter. The questions are whether the site brings in traffic and whether it loads fast enough, and Cloudflare answers both well.</p>

<h2>Why I pair it with Umami</h2>

<p>For most clients, Cloudflare Web Analytics is the only analytics I install. Some clients want a second view of the same data, laid out a little differently. For them, I add <a href="/blog/umami-analytics-shared-dashboard/" class="inline-link">Umami</a>, an open-source, privacy-friendly analytics tool with nearly identical reports. The two agree on the big picture, and when they differ, the gap tells you something. It usually means an ad blocker affects one tool but not the other.</p>

<p>Both work without cookies, and neither needs a consent banner. Together they cover the same everyday ground as Google Analytics without the extra privacy-policy work.</p>

<h2>What clients should do with the dashboard</h2>

<p>For most clients, the answer is to look at it once a quarter. The dashboards don't need daily attention, because they show the site's general health rather than sales figures.</p>

<p>Three numbers are worth checking each quarter:</p>

<p><strong>Total visits.</strong> Is the trend over the past 12 months moving the right way? A site that had 800 visits a month at launch and now has 1,800 is winning. A site stuck at 800 for two years isn't.</p>

<p><strong>Top pages.</strong> Are your most-visited pages the ones you want people to see? If your top page is the privacy policy, something is wrong. If it's your highest-margin service page, that's the right pattern.</p>

<p><strong>Core Web Vitals.</strong> Are all three green? A site that started green and slipped to amber needs attention, and the slip is usually fixable.</p>

<p>That's a 10-minute review each quarter. If anything in the dashboard points to a problem, I'm the one who digs into it.</p>

<h2>If your current site does not have analytics set up</h2>

<p>Cloudflare Web Analytics is the cheapest, fastest, and most ethical way to start. Setup is one snippet in the page's head section, the reports become useful within a few days, and there's no upkeep.</p>

<p>On sites I build, it's part of the standard plan: I set up the analytics before launch and share it with the client. On other sites, the same setup works on any platform, whether WordPress, Wix, Squarespace, Shopify, Webflow, or custom code, since all of them accept a snippet in the head. The work is small next to the value of the data.</p>
