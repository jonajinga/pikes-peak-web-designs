---
title: "Core Web Vitals: The Three Numbers Google Ranks On"
date: 2026-05-22
label: "Performance & SEO"
description: "LCP, INP, and CLS are Google's core speed and stability scores. Here's what each one measures, what passing looks like, and how to read your own."
ctaLabel: "Built to pass from day one"
ctaHeading: "Every site I build clears all three thresholds"
ctaText: "On my sites, the main content appears in under 2.5 seconds, taps get a response in under 200 milliseconds, and the layout stays steady (CLS under 0.1), all measured on real visitors. It's part of the standard plan, and I keep watching the numbers."
layout: layouts/post.njk
tags: [post]
---

<p>Google measures three numbers on every page it indexes, and they help decide which sites rank above others in search results. Together they're called Core Web Vitals: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). Each one measures part of how a visitor experiences a page on their own device.</p>

<p>For a small-business owner, the practical question is whether yours are green.</p>

<h2>Why these three</h2>

<p>Google studied billions of pages to find which technical measurements tracked most closely with visitor satisfaction. It settled on three: how fast the visible content loads (LCP), how quickly the page responds to a tap or click (INP), and how steady the layout stays while loading (CLS). Each catches a different problem that visitors notice and complain about.</p>

<p>These aren't lab tests. Chrome collects the numbers from visitors' own devices and pools them in the Chrome User Experience Report (CrUX), which Google's ranking system uses. A site can pass lab tests and still fail Core Web Vitals if this field data shows visitors having a bad time.</p>

<h2>1. Largest Contentful Paint (LCP)</h2>

<p><strong>What it measures:</strong> the time from the visitor's click to the moment the largest visible element on the page finishes appearing. That's usually the top image (the hero image) or the headline.</p>

<p><strong>Threshold:</strong> under 2.5 seconds is green, and over 4 seconds is red.</p>

<p><strong>Why it matters:</strong> visitors leave pages that look broken or slow in the first few seconds. The largest element stands in for "the page has loaded." If it takes 5 seconds, the visitor is probably gone.</p>

<p><strong>What causes failures:</strong> oversized hero images, the most common cause by far. Style files that hold up the page (render-blocking CSS), slow servers, and images that aren't cached on a content delivery network (CDN) cause it too. The fix is almost always smaller images plus a fast CDN, and I cover both in separate posts.</p>

<p><strong>What passing looks like on my builds:</strong> 0.4 to 0.9 seconds, well under 2.5. The hero image uses AVIF, a compact image format, the style file is trimmed and small, and the site is hosted on Cloudflare's worldwide network.</p>

<h2>2. Interaction to Next Paint (INP)</h2>

<p><strong>What it measures:</strong> how long the page takes to respond on screen when a visitor clicks a button, taps a link, or interacts in any other way. INP replaced First Input Delay (FID) in March 2024. It's stricter, because it measures responsiveness across the whole visit instead of only the first interaction.</p>

<p><strong>Threshold:</strong> under 200 milliseconds is green, and over 500 is red.</p>

<p><strong>Why it matters:</strong> a page that loads fast but responds slowly is as frustrating as one that loads slowly. Visitors who tap a button and see nothing happen within 300 milliseconds usually tap again, then tap somewhere else, and then leave.</p>

<p><strong>What causes failures:</strong> heavy JavaScript, the code that makes pages interactive, which ties up the browser. Outside scripts such as ad trackers, chat widgets, and analytics platforms can take hundreds of milliseconds per interaction. Animations that force the browser to redraw the layout add to it. WordPress sites with many plugins fail INP routinely.</p>

<p><strong>What passing looks like on my builds:</strong> usually 30 to 80 milliseconds, well under 200. My sites run almost no JavaScript: a small menu script, the search box, and a few tap handlers. Nothing is left to slow the page down.</p>

<h2>3. Cumulative Layout Shift (CLS)</h2>

<p><strong>What it measures:</strong> how much the layout jumps while the page loads. If a page shows the headline first and then pushes everything down when the hero image arrives, that's a layout shift. The score adds up every shift during the visit.</p>

<p><strong>Threshold:</strong> under 0.1 is green, and over 0.25 is red.</p>

<p><strong>Why it matters:</strong> a visitor reaching for a button can have it slide away and tap the wrong thing. Most visitors don't put this into words, but they leave sites that do it more often.</p>

<p><strong>What causes failures:</strong> images without a set width and height, so the browser can't save room and the layout shifts when they arrive. Late-loading embeds push content around, as do ads that load after the rest of the page. Web fonts can cause it too, when they replace a stand-in font of a different size.</p>

<p><strong>What passing looks like on my builds:</strong> 0.00 to 0.03, which is close to perfect. Every image has set dimensions, and nothing embedded loads late. The web fonts are adjusted (with size-adjust) to match the stand-in font, and there are no ads.</p>

<h2>How to check your own</h2>

<p>Three free tools, from simplest to most detailed.</p>

<p><strong>Google PageSpeed Insights.</strong> Go to <a href="https://pagespeed.web.dev" rel="noopener" class="inline-link">pagespeed.web.dev</a>, paste in your web address, and run the test. The top of the report shows your Core Web Vitals from real visitors, or "not enough data" if too few Chrome users have visited. The bottom shows a Lighthouse lab test of the same page.</p>

<p><strong>Search Console "Core Web Vitals" report.</strong> Google Search Console, Google's free tool for site owners, has a report showing which pages pass all three scores, which fail, and which lack data. This page-by-page view is more useful than a single test, because it reveals problems shared across a type of page.</p>

<p><strong>Chrome DevTools "Performance" tab.</strong> For the deepest detail, the Performance tab in Chrome's built-in developer tools can record a full page load and show every event behind the scores. I use it when I'm tracking down a specific failure, and for most owners it's more than they need.</p>

<h2>What "passing" means for ranking</h2>

<p>Google has been deliberately vague about how much Core Web Vitals affect ranking. Based on what search specialists have measured, passing all three is a small but measurable boost, and failing them is a slightly larger penalty. The effect is strongest when two pages are otherwise tied, and then the one with better scores wins.</p>

<p>For a small service business up against a few local rivals with average sites, passing Core Web Vitals can be enough on its own to move from page two to page one. In a competitive national market, the scores matter, but they can't make up for thin content or few links from other sites (backlinks).</p>

<p>So passing should be the minimum, not the goal. A site that fails is leaving ranking points for competitors to pick up, and a site that passes is level with the technical baseline of professional websites.</p>

<h2>What I do at build time</h2>

<p>On every site I build, the Core Web Vitals targets are a set step in the build:</p>

<ul>
  <li><strong>LCP target: in the green band (under 2.5 seconds).</strong> I get there with smaller images, trimmed style files, fonts loaded early, and hosting on a worldwide network.</li>
  <li><strong>INP target: under 100 milliseconds.</strong> I get there with very little JavaScript and no outside trackers slowing the page.</li>
  <li><strong>CLS target: under 0.05.</strong> I get there with set image dimensions, adjusted font sizes, and no late-loading embeds.</li>
</ul>

<p>My targets are stricter than Google's thresholds because speed slips over time as content is added. A site that launches with a 0.6-second LCP stays in the green for years. A site that launches at 2.4 seconds slips into amber the first time a slightly heavier hero image goes up.</p>

<h2>If your current site is failing Core Web Vitals</h2>

<p>The most common failure on small-business sites is one oversized hero image dragging LCP into the red. The fix is a smaller, better-compressed image, which I cover in detail in <a href="/blog/image-optimization-photos-slow-site/" class="inline-link">a separate post</a>. Fixing that one issue often moves a site from failing all three scores to passing all three, with nothing else touched.</p>

<p>For sites with deeper speed problems, such as heavy JavaScript, many outside trackers, or slow hosting, the fix is broader.</p>
