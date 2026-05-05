---
title: "Core Web Vitals: The Three Numbers Google Ranks On"
date: 2026-05-22
label: "Performance & SEO"
description: "LCP, INP, and CLS are Google's core ranking metrics. Here is what each one measures, what passing actually looks like, and how to read your own."
ctaLabel: "Built to pass by construction"
ctaHeading: "Every site I build clears all three thresholds."
ctaText: "LCP under 2.5s, INP under 200ms, CLS under 0.1, measured against real visitors. Part of the standard plan, monitored continuously."
layout: layouts/post.njk
tags: [post]
---

<p>Google measures three numbers on every page of every website it indexes, and those three numbers are part of how it decides which sites rank above which others in search results. The umbrella term is Core Web Vitals. The three numbers are Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). Each measures a specific aspect of how a real visitor experiences a real page on a real device.</p>

<p>For a small business owner, the practical question is "are mine green?" This post explains what each one is, why it matters, what passing looks like, and how to read your own.</p>

<h2>Why these three</h2>

<p>Google studied billions of pages and asked which technical measurements correlated most strongly with user satisfaction. They landed on three categories: how fast does the visible content load (LCP), how responsive is the page to interaction (INP), and how stable is the layout while the page is loading (CLS). Each measures a different failure mode that real visitors notice and complain about.</p>

<p>These are not synthetic lab tests. The metrics are collected from real visitors on real devices through Chrome's built-in telemetry, aggregated into the Chrome User Experience Report (CrUX) database, and used by Google's ranking algorithm. A site can pass synthetic tests and still fail Core Web Vitals if the field data shows real visitors having a bad time.</p>

<h2>1. Largest Contentful Paint (LCP)</h2>

<p><strong>What it measures:</strong> the time from when the visitor clicks the link to when the largest visible element on the page (usually the hero image or the headline text) finishes rendering.</p>

<p><strong>Threshold:</strong> 2.5 seconds is the green-zone ceiling. Above 4 seconds is red.</p>

<p><strong>Why it matters:</strong> visitors abandon pages that look broken or slow during the first few seconds. The "largest visible element" is the proxy for "the visitor can tell the page has loaded." If that takes 5 seconds, the visitor probably is not still there when it finishes.</p>

<p><strong>What causes failures:</strong> oversized hero images (the most common cause by a wide margin), render-blocking CSS, slow servers, and uncached images on a site without a CDN. The fix is almost always image optimization plus a fast CDN, both of which I cover in separate posts.</p>

<p><strong>What passing looks like on my builds:</strong> 0.4 to 0.9 seconds, comfortably below the 2.5-second threshold. The hero image is AVIF, the CSS is purged and small, the host is Cloudflare's global edge.</p>

<h2>2. Interaction to Next Paint (INP)</h2>

<p><strong>What it measures:</strong> when a visitor clicks a button, taps a link, or interacts with the page in any way, how long does it take for the page to visually respond. This metric replaced First Input Delay (FID) in March 2024; it is stricter and measures responsiveness throughout the visit, not just the first interaction.</p>

<p><strong>Threshold:</strong> 200 milliseconds is the green ceiling. Above 500 ms is red.</p>

<p><strong>Why it matters:</strong> a page that loads fast but feels sluggish under interaction is just as frustrating as one that loads slowly. Visitors who tap a button and see no response within 300 ms tend to tap again, then tap somewhere else, then leave.</p>

<p><strong>What causes failures:</strong> heavy JavaScript that hogs the main thread, third-party scripts (advertising trackers, chat widgets, analytics platforms) that take hundreds of milliseconds to process each interaction, and CSS animations that trigger expensive reflows. WordPress sites with many plugins routinely fail INP.</p>

<p><strong>What passing looks like on my builds:</strong> typically 30 to 80 ms, well below the 200 ms threshold. The sites I build run almost no JavaScript on the front end (a small navigation script, the search modal, a few interaction handlers); there is nothing on the main thread to block.</p>

<h2>3. Cumulative Layout Shift (CLS)</h2>

<p><strong>What it measures:</strong> how much the page's layout jumps around while it is loading. A page that loads the headline first and then pushes everything down when the hero image arrives has a CLS event. The metric sums all such shifts across the visit.</p>

<p><strong>Threshold:</strong> 0.1 is the green ceiling. Above 0.25 is red.</p>

<p><strong>Why it matters:</strong> the visitor who is about to tap a button and has the button move out from under them taps the wrong thing instead. Most visitors do not articulate this as a "bad" experience, but they bounce more from sites that do it.</p>

<p><strong>What causes failures:</strong> images without explicit width and height attributes (the browser does not know how much space to reserve, so the layout shifts when the image arrives), third-party embeds that load late and push content around, web fonts that swap from a fallback to the loaded version with different metrics, and ads that load after the rest of the page.</p>

<p><strong>What passing looks like on my builds:</strong> 0.00 to 0.03, essentially perfect. Every image has explicit dimensions. There are no late-loading embeds. Web fonts are configured with size-adjust to match the fallback metrics. There are no ads.</p>

<h2>How to check your own</h2>

<p>Three free tools, in increasing order of depth.</p>

<p><strong>Google PageSpeed Insights.</strong> Visit <a href="https://pagespeed.web.dev" rel="noopener" class="inline-link">pagespeed.web.dev</a>, paste your URL, run the test. The top of the report shows your Core Web Vitals from real visitor data (or "not enough data" if your site does not have enough Chrome users). The bottom shows a synthetic Lighthouse test of the same URL.</p>

<p><strong>Search Console "Core Web Vitals" report.</strong> Inside Google Search Console, the dedicated report shows which URLs on your site are passing all three metrics, which are failing, and which have insufficient data. The breakdown by URL is more useful than the page-level test because it surfaces consistent failures across page types.</p>

<p><strong>Chrome DevTools "Performance" tab.</strong> For diagnostic depth, the Performance tab can record a full page load and show every event that contributed to the metrics. This is the tool I use when investigating a specific failure; for most clients it is overkill.</p>

<h2>What "passing" actually means for ranking</h2>

<p>Google has been deliberately vague about how much Core Web Vitals affect ranking. The honest summary based on what the search community has measured: passing all three thresholds is a small but real ranking signal, and failing them is a slightly larger negative signal. The effect is most pronounced when two pages are otherwise tied; the one with better Core Web Vitals wins the tiebreak.</p>

<p>For a small service business competing with a few local rivals, all of whom have mediocre sites, passing Core Web Vitals can be enough on its own to move from page two to page one. For a business in a competitive national category, Core Web Vitals matter but cannot make up for thin content or weak backlinks.</p>

<p>The practical implication: passing should be the floor, not the goal. A site that fails Core Web Vitals is leaving ranking points on the table that competitors can pick up; a site that passes is at parity with the technical floor of professional websites.</p>

<h2>What I do at build time</h2>

<p>For every site I build, the Core Web Vitals targets are part of the build pipeline:</p>

<ul>
  <li><strong>LCP target: under 1 second.</strong> Achieved through image optimization, CSS purging, font preloading, and edge hosting.</li>
  <li><strong>INP target: under 100 ms.</strong> Achieved through minimal front-end JavaScript and no third-party trackers on the main thread.</li>
  <li><strong>CLS target: under 0.05.</strong> Achieved through explicit image dimensions, font-size-adjust, and no late-loading embeds.</li>
</ul>

<p>The targets are tighter than Google's pass thresholds because performance degrades over time as content is added. A site that launches at 0.6s LCP is comfortably in the green for years; a site that launches at 2.4s LCP slips into the amber zone the first time a slightly heavier hero image lands.</p>

<h2>If your current site is failing Core Web Vitals</h2>

<p>The most common failure pattern across small-business sites is a single oversized hero image dragging LCP into the red. The fix is image optimization, which I cover in detail in <a href="/blog/image-optimization-photos-slow-site/" class="inline-link">a separate post</a>. Closing that one issue often moves a site from "failing all three" to "passing all three" without touching anything else.</p>

<p>For sites with deeper performance issues (heavy JavaScript, many third-party trackers, slow hosting), the fix path is broader. The free <a href="/audit/" class="inline-link">five-point audit</a> covers Core Web Vitals as part of the standard pass; the report names the specific causes and what each fix would involve.</p>
