---
title: "PurgeCSS: How I Keep the CSS Bundle Under 80 KB"
date: 2026-05-21
label: "The Stack"
description: "Most websites send hundreds of KB of style code they never use. PurgeCSS removes it when the site is built. Here's how I run it on every site."
ctaLabel: "Lean from the start"
ctaHeading: "Each page loads only the styles it uses"
ctaText: "PurgeCSS runs on every build and removes 60 to 80 percent of the style code a framework would have sent. You get smaller files, faster pages, and no manual cleanup."
layout: layouts/post.njk
tags: [post]
---

<p>CSS is the code that controls how a website looks: colors, fonts, spacing, and layout. On most small-business sites, the largest file a visitor downloads is the CSS bundle, the single file that holds all of it, at 250 KB to 1.2 MB. The site uses maybe 15 percent of it. The rest styles parts that appear on other pages, or on no page at all.</p>

<p>That extra weight comes from using a CSS framework (a ready-made style kit) or a template theme. Bootstrap sends 250 KB. An untrimmed build from older versions of Tailwind runs to several megabytes. Themes for WordPress, Wix, and Squarespace carry styles for every variation a customer might pick, and each customer uses one.</p>

<p>The fix is PurgeCSS, a small tool that runs when the site is built. It reads the finished pages and removes every style rule they don't use. On a typical service-business site I build, the CSS ends up at 60 to 80 KB instead of the 400 to 500 KB it would otherwise be.</p>

<h2>What PurgeCSS does</h2>

<p>PurgeCSS reads two inputs:</p>

<ol>
  <li>The full CSS bundle, as the build produced it.</li>
  <li>Every finished HTML page on the site.</li>
</ol>

<p>Each CSS rule starts with a selector, the name that says which part of the page it styles. PurgeCSS checks each selector against the pages. If it appears, the rule stays; if it appears nowhere, the rule goes. The pages look exactly the same, with only the unused styles removed.</p>

<p>It works by matching text rather than fully analyzing each page, so it runs in seconds even on large sites. It's cautious by default and keeps a rule when it can't tell. For class names that JavaScript creates while the page runs, PurgeCSS accepts a "safelist" of selectors to always keep.</p>

<h2>Why this matters</h2>

<p>The browser can't show the page until the CSS has downloaded and been read, so CSS "blocks" the page. On a phone connection, a 600 KB bundle takes 3 to 6 seconds to download and another 100 to 300 ms to read, and the visitor sees nothing until then. An 80 KB bundle downloads in 200 to 400 ms and is read in 30 to 60 ms, so the page appears within half a second.</p>

<p>Google's core ranking measure, Largest Contentful Paint (how long the largest item on screen takes to appear), depends on this. Sites with bloated CSS often fail it on phones, and trimmed sites usually pass.</p>

<h2>How I integrate it on every build</h2>

<p>PurgeCSS runs at the end of each build with Eleventy, the tool I build sites with, once the pages and the CSS are complete:</p>

<ol>
  <li>The build creates all the HTML pages from templates and content.</li>
  <li>The build joins all the CSS files into one bundle.</li>
  <li>PurgeCSS reads the HTML and the CSS, removes unused rules, and saves the trimmed CSS.</li>
  <li>The trimmed CSS goes to the CDN, the network of servers that delivers the site.</li>
</ol>

<p>The step adds about a second to the build and shrinks the CSS by 60 to 80 percent. The first savings are usually startling, and every later publish keeps the file small.</p>

<h2>What the visitor experiences</h2>

<p>For visitors, it means:</p>

<p><strong>The page appears sooner.</strong> CSS is the most common thing that holds a page back. Cutting it from 600 KB to 80 KB is a 7-to-1 reduction, and the page appears that much faster.</p>

<p><strong>A better Lighthouse score.</strong> Lighthouse, Google's testing tool, has a "Reduce unused CSS" item that measures exactly what PurgeCSS fixes. Without it, a site typically loses 5 to 15 points on PageSpeed, Google's 0-to-100 speed score, on this item alone. With it, the item passes.</p>

<p><strong>Less data to serve.</strong> Smaller files cost less to deliver in large numbers. For a small-business site the savings are tiny, but they add up.</p>

<h2>Why most websites don't run it</h2>

<p>PurgeCSS has been around since 2017, and professional developers know it well. Most small-business sites don't run it because of how they're built:</p>

<p><strong>Platform sites don't let you change the build.</strong> Wix, Squarespace, and Shopify build the CSS themselves. The customer never sees or controls that process and can't add a step like PurgeCSS. The platforms have their own optimizations, which in my experience trim less.</p>

<p><strong>WordPress themes come with finished CSS.</strong> The theme's designer built the CSS once and packaged it. Site owners can install plugins such as "Asset CleanUp" or "WP Rocket" that imitate PurgeCSS while the page loads, but they're less effective and add their own slowdown.</p>

<p><strong>Custom-coded sites without a build step are rare.</strong> Few sites today send hand-written CSS with no optimization. Most custom-coded sites in 2026 have a build step, and adding PurgeCSS to one is straightforward.</p>

<p>Only well-built custom-coded sites run it cleanly, which is one reason they're measurably faster.</p>

<h2>Where PurgeCSS needs help</h2>

<p>Because PurgeCSS is cautious, a few situations need setup:</p>

<p><strong>Class names added by JavaScript.</strong> If code adds a class while the page runs (an "is-active" class on a dropdown, for example), PurgeCSS may not see it in the finished HTML and may drop its rule. The fix is to safelist the class, and I do that for the few such classes my sites use.</p>

<p><strong>Outside widgets.</strong> A widget from another company that adds its own HTML while the page runs is invisible to PurgeCSS. Either safelist its classes or keep its CSS in a separate file that PurgeCSS doesn't touch.</p>

<p><strong>Generated class names.</strong> Some libraries, Tailwind in particular, create class names from their settings. PurgeCSS supports custom "extractors" to find them, which take some care to set up.</p>

<p>On a typical service-business site, the setup is simple and the savings are large. I set it up once, and it runs automatically after that.</p>

<h2>If your current site has a heavy CSS bundle</h2>

<p>One Lighthouse test tells you. Open <a href="https://pagespeed.web.dev" rel="noopener" class="inline-link">pagespeed.web.dev</a>, paste your address, and look for "Reduce unused CSS" under Opportunities. If it shows savings of 100 KB or more, there's room to improve.</p>

<p>On sites I build, this is handled from the start. Elsewhere, it depends on the platform. Tailwind users can turn on JIT mode, which works like built-in PurgeCSS. WordPress users can install Asset CleanUp. Wix and Squarespace users have the platform's own optimization and little else. The more flexible the platform, the more you can do.</p>

<p>The effort is small for the gain, and the gain lasts for the life of the site.</p>
