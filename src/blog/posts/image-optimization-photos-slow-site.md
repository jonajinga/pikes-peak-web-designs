---
title: "Image Optimization: Why Your Photos Slow the Site"
date: 2026-05-18
label: "The Stack"
description: "An unoptimized photo is the single most common reason a service-business site loads slowly. Here is how I handle images on every build."
ctaLabel: "Optimization handled at build time"
ctaHeading: "Every photo you send becomes AVIF, WebP, and JPEG."
ctaText: "I run every image through eleventy-img at build, generating multiple sizes and modern formats with proper lazy loading. Part of the standard plan, no extra fee."
layout: layouts/post.njk
tags: [post]
---

<p>The single most common reason I see a small-business website loading slowly is unoptimized photographs. The owner uploads a 4 MB JPEG straight from a phone camera, the site displays it on the homepage, and every visitor downloads four megabytes of image data on the first page they hit. On a slow phone connection that single image can take eight seconds to load, and the rest of the page waits behind it.</p>

<p>The fix is well understood, but most websites do not do it. This post explains what image optimization actually involves, how I handle it on every site I build, and why the work happens at build time rather than asking the client to optimize their photos before uploading.</p>

<h2>What "optimized" actually means</h2>

<p>An optimized image on a modern website is not one file. It is several files, in different formats, at different resolutions, served conditionally based on what the visitor's browser can handle.</p>

<p>For a single hero photo on a service-business homepage, the right output is roughly:</p>

<ul>
  <li><strong>AVIF format, three sizes</strong> (480px wide, 800px wide, 1200px wide) — the most efficient modern format, supported by all current browsers, typically 50 to 70 percent smaller than JPEG.</li>
  <li><strong>WebP format, the same three sizes</strong> — the slightly older modern format, used as a fallback for browsers that do not support AVIF.</li>
  <li><strong>JPEG format, the same three sizes</strong> — the legacy format, used as a final fallback for browsers that support neither AVIF nor WebP.</li>
</ul>

<p>That is nine files for one image. The browser's <code>&lt;picture&gt;</code> element selects the appropriate one based on the visitor's device width and browser support. A phone gets the 480px version; a desktop gets the 1200px. A current Chrome user gets AVIF; a current Safari user gets WebP; an obscure embedded browser gets JPEG.</p>

<p>The visitor downloads exactly one file, sized appropriately for their device, in the most efficient format their browser supports. The total bytes shipped are typically 20 to 60 KB rather than the 4 MB the original photo represented.</p>

<h2>Why this matters</h2>

<p>The math on a typical service-business site:</p>

<p>A hero image at 4 MB takes about 8 seconds to load on a typical 4G phone connection. During those 8 seconds, the page's Largest Contentful Paint (Google's core ranking metric) is failing the threshold of 2.5 seconds. The site's PageSpeed score drops below 50. Mobile visitors begin abandoning the page before it renders, and the abandonment rate scales with load time roughly linearly.</p>

<p>The same image, optimized properly, weighs 60 KB. Loads in 0.2 seconds. The Largest Contentful Paint is well under the threshold. The PageSpeed score stays in the 95 to 100 range. Mobile visitors reach the headline before they have time to lose interest.</p>

<p>This is the single highest-leverage technical change that can be made to most small-business websites. Nothing else moves PageSpeed numbers as much as image optimization.</p>

<h2>How I do it on every build</h2>

<p>The whole optimization pipeline runs at build time, automatically, with zero client involvement. The pipeline:</p>

<ol>
  <li>The client uploads photos to me at any size, in any format. Phone photos at 4 MB are fine; raw camera files are fine.</li>
  <li>I drop the photos into the site's source directory.</li>
  <li>The build script (using the <a href="https://www.11ty.dev/docs/plugins/image/" rel="noopener" class="inline-link">@11ty/eleventy-img</a> plugin) runs each image through Sharp (a fast image-processing library), generating the AVIF/WebP/JPEG triple at three sizes per image.</li>
  <li>The plugin auto-writes the <code>&lt;picture&gt;</code> markup with the correct <code>srcset</code>, <code>sizes</code>, and <code>type</code> attributes.</li>
  <li>The output is committed to the build artifacts, which Cloudflare Pages serves from its global edge network.</li>
</ol>

<p>The whole pipeline happens once per image, at build time, and the optimized files cache permanently. A site with 200 images takes maybe 30 seconds longer to build the first time, then near-zero on subsequent builds because cached versions are reused.</p>

<h2>Lazy loading: the second optimization</h2>

<p>Even after format and size optimization, a typical service-business page has multiple images. The hero, a couple of mid-page photos, an "about" headshot, a footer logo. Loading all of them at once is wasteful because most are below the fold and the visitor may never scroll to them.</p>

<p>The fix is the <code>loading="lazy"</code> attribute, supported natively by every browser since 2020. An image with this attribute does not download until the visitor scrolls close enough to need it. The hero (which is above the fold) loads immediately; the photo three sections down loads only if the visitor scrolls.</p>

<p>I add <code>loading="lazy"</code> to every image except the hero on every site I build. The decision is automatic; I never have to think about it per page.</p>

<h2>What the visitor experiences</h2>

<p>Visitor on a phone, fresh visit, no cache:</p>

<ul>
  <li>HTML and CSS load (about 30 KB total) in roughly 200 ms.</li>
  <li>The page renders text and layout before any images.</li>
  <li>The hero image loads (about 50 KB, AVIF format, 480px wide) in another 100 ms.</li>
  <li>Below-fold images stay unfetched until the visitor scrolls.</li>
  <li>The Largest Contentful Paint (typically the hero) clocks in around 0.5 seconds.</li>
</ul>

<p>The same visit on the same phone with an unoptimized 4 MB hero:</p>

<ul>
  <li>HTML and CSS load in 200 ms.</li>
  <li>The page renders text and layout.</li>
  <li>The hero image starts downloading. Progress bar climbs.</li>
  <li>Eight seconds later, the hero finishes loading.</li>
  <li>The Largest Contentful Paint clocks at 8 seconds. Page fails Google's ranking threshold.</li>
</ul>

<p>The difference is real and measurable on every visit, on every device, for the lifetime of the site.</p>

<h2>What clients can do</h2>

<p>For sites I build, the answer is "send me whatever you have, in whatever size or format." The optimization happens at the build, not at the client's end. There is no need to learn Photoshop, install image-compression software, or pre-process anything before uploading.</p>

<p>For sites on platforms that do not auto-optimize (most older WordPress installs, Wix sites with the optimization toggle disabled, custom-coded sites without a build pipeline), the right answer is to use a one-shot tool before uploading. I recommend <a href="https://squoosh.app" rel="noopener" class="inline-link">Squoosh</a> from Google: drag and drop, pick the output format and quality, save the result. It is free, runs in the browser, and produces output comparable to professional tools at the typical settings.</p>

<p>For larger sites with hundreds of legacy images, the bulk-optimization tools (ImageOptim on Mac, Caesium on Windows, ShortPixel as a WordPress plugin) handle the back-catalog in one pass. Worth doing once when a site is performing poorly.</p>

<h2>If your current site is slow because of images</h2>

<p>The diagnostic is fast: open <a href="https://pagespeed.web.dev" rel="noopener" class="inline-link">pagespeed.web.dev</a>, paste your URL, run the test. The "Opportunities" section names "Properly size images" and "Serve images in next-gen formats" if either is failing. The Lighthouse report tells you exactly which images are oversized and how many bytes you would save by fixing them.</p>

<p>For sites I build, this conversation never comes up because the optimization pipeline is part of the standard plan. For sites I do not build, the fix path depends on the platform. WordPress sites can install ShortPixel or EWWW Image Optimizer. Wix and Squarespace sites have built-in optimization that may be toggled off. Custom-coded sites need a build-time step like the one I run.</p>

<p>The investment is small relative to the impact. Image optimization is the single most consequential PageSpeed lift available to most small-business websites.</p>
