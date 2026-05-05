---
title: "PurgeCSS: How I Keep the CSS Bundle Under 80 KB"
date: 2026-05-21
label: "The Stack"
description: "Most websites ship hundreds of KB of unused CSS. PurgeCSS removes the dead weight at build time. Here is how I run it on every site."
ctaLabel: "Lean by construction"
ctaHeading: "I ship only the CSS each page actually uses."
ctaText: "PurgeCSS runs on every build and drops 60 to 80 percent of the CSS the original framework would have shipped. Smaller bundles, faster pages, no manual cleanup."
layout: layouts/post.njk
tags: [post]
---

<p>If you open the developer tools on most small-business websites and look at the loaded resources, the largest single file is almost always a CSS bundle, somewhere between 250 KB and 1.2 MB. The site uses maybe 15 percent of that bundle. The rest is style rules for layouts, components, and patterns that exist on other pages of the same site, or in some cases on no page at all.</p>

<p>That dead weight is the cost of using a CSS framework or a templated theme. Bootstrap ships 250 KB. Tailwind's full output ships about 3.2 MB compressed (yes, megabytes). The themes available for WordPress, Wix, and Squarespace ship enough CSS to cover every possible variation a customer might choose, and the customer typically uses one variation.</p>

<p>The fix is a small build-time tool called PurgeCSS, which scans the actual rendered HTML of the site and removes any CSS rules that are not referenced. The result is a bundle that contains only the styles the site actually uses. On the typical service-business site I build, the CSS bundle ends up around 60 to 80 KB after PurgeCSS, down from the 400 to 500 KB the source might otherwise produce.</p>

<h2>What PurgeCSS does</h2>

<p>PurgeCSS reads two inputs:</p>

<ol>
  <li>The full CSS bundle (whatever the build produced before optimization).</li>
  <li>The full set of rendered HTML files (every page on the site).</li>
</ol>

<p>It walks through every CSS rule and checks whether the selector appears in any of the HTML files. If the selector appears, the rule is kept. If the selector does not appear anywhere, the rule is dropped.</p>

<p>The output is a smaller CSS bundle that produces visually identical pages. Every style that the site actually uses is preserved. Every style that exists in the source but is never applied gets removed.</p>

<p>The technical piece worth knowing: PurgeCSS uses string matching, not a full DOM parse. It is fast (runs in seconds even on large sites) and conservative by default (it errs on the side of keeping a rule if it cannot tell). For dynamic class names that are constructed at runtime in JavaScript, PurgeCSS supports a "safelist" of selectors to always keep.</p>

<h2>Why this matters</h2>

<p>The CSS bundle is render-blocking. The browser cannot paint the page until the CSS has loaded and parsed. A 600 KB bundle on a phone connection takes 3 to 6 seconds to download and another 100 to 300 ms to parse. During that time, the page is invisible to the visitor.</p>

<p>An 80 KB bundle takes 200 to 400 ms to download and 30 to 60 ms to parse. The first paint happens within half a second of the request, and the visitor sees the page before they have time to lose interest.</p>

<p>The Largest Contentful Paint metric (Google's core ranking signal) depends directly on this. Sites with bloated CSS bundles routinely fail LCP on phones. Sites that have been purged routinely pass it.</p>

<h2>How I integrate it on every build</h2>

<p>PurgeCSS runs at the end of the Eleventy build, after all pages have been generated and after the CSS has been concatenated. The flow:</p>

<ol>
  <li>The build generates all the HTML pages from templates and content.</li>
  <li>The build generates the full CSS bundle by concatenating all the CSS partials.</li>
  <li>PurgeCSS reads the HTML and the CSS, removes unused rules, and writes the cleaned CSS back.</li>
  <li>The cleaned CSS is what gets shipped to the CDN.</li>
</ol>

<p>The whole step adds about a second to the build time and produces a 60 to 80 percent reduction in the CSS bundle size. The first time a site is built with PurgeCSS, the byte savings are usually shocking. After that, every deploy automatically maintains the lean bundle.</p>

<h2>What the visitor experiences</h2>

<p>The practical visitor-side impact:</p>

<p><strong>Faster first paint.</strong> The CSS bundle is the most common render-blocker on a typical site. Cutting it from 600 KB to 80 KB is a 7-to-1 reduction in render-blocking bytes, and the visitor sees the page proportionally faster.</p>

<p><strong>Better Lighthouse score.</strong> The "Reduce unused CSS" line item on a Lighthouse report is a direct measurement of what PurgeCSS solves. A site without PurgeCSS typically loses 5 to 15 PageSpeed points to this single line. A site with PurgeCSS clears it.</p>

<p><strong>Cheaper bandwidth on the CDN side.</strong> Smaller files cost less to serve at scale. For a small-business site this is rounding error, but the principle compounds.</p>

<h2>Why most websites don't run it</h2>

<p>PurgeCSS has been around since 2017 and is well understood by professional developers. The reason it is not running on most small-business websites is structural:</p>

<p><strong>Platform sites do not give you build-time access.</strong> Wix, Squarespace, and Shopify build the CSS at the platform level. The customer never sees the bundle, never controls the build pipeline, and cannot insert a step like PurgeCSS even if they wanted to. The platforms have their own internal optimizations that may or may not be as aggressive; in my experience they are not.</p>

<p><strong>WordPress themes ship pre-built CSS.</strong> The theme designer compiled the CSS once and shipped it. The site builder can install plugins like "Asset CleanUp" or "WP Rocket" that approximate PurgeCSS at runtime, but they are not as effective and they add their own performance cost.</p>

<p><strong>Custom-coded sites without build pipelines are rare.</strong> The kind of site that ships hand-written CSS without any optimization is increasingly unusual. Most custom-coded sites in 2026 have a build step, and adding PurgeCSS to a build step is straightforward.</p>

<p>The combination is that platform sites cannot run PurgeCSS, WordPress sites approximate it poorly, and only properly-built custom-coded sites run it cleanly. This is one of the reasons custom-coded sites have a measurable performance edge.</p>

<h2>The honest limits</h2>

<p>PurgeCSS is conservative by design, which means a few situations need explicit configuration:</p>

<p><strong>Dynamic class names.</strong> If JavaScript adds a class to an element at runtime (a "is-active" class on a dropdown, for example), PurgeCSS may not see the class in the static HTML and may drop the rule. The fix is to add the class to the safelist. I do this for the small set of dynamic classes my sites use.</p>

<p><strong>Third-party widgets.</strong> If a site embeds a third-party widget that injects its own HTML at runtime, PurgeCSS will not see the widget's content during the static analysis. The fix is either to safelist the widget's classes or to keep the third-party CSS in a separate file that PurgeCSS does not touch.</p>

<p><strong>Aggressive class-name patterns.</strong> Some libraries (Tailwind in particular) generate class names dynamically based on configuration. PurgeCSS supports custom extractors for these patterns; configuring them takes some care.</p>

<p>For the typical service-business site I build, the configuration is straightforward and the savings are large. The whole optimization is set up once during the initial build and runs automatically thereafter.</p>

<h2>If your current site has a heavy CSS bundle</h2>

<p>The diagnostic is one Lighthouse run. Open <a href="https://pagespeed.web.dev" rel="noopener" class="inline-link">pagespeed.web.dev</a>, paste your URL, look for "Reduce unused CSS" in the Opportunities section. If Lighthouse names a savings of 100 KB or more, you have a real opportunity.</p>

<p>For sites I build, this opportunity is closed by default. For sites I do not build, the fix path depends on the platform: Tailwind users can configure JIT mode (effectively built-in PurgeCSS); WordPress users can install Asset CleanUp; Wix and Squarespace users have the platform's built-in optimization and not much else. Each step takes effort proportional to the platform's flexibility.</p>

<p>The investment is small relative to the impact, and the optimization keeps paying out for the lifetime of the site.</p>
