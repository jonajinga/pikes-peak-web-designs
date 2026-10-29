---
title: "Image Optimization: Why Your Photos Slow the Site"
date: 2026-05-18
label: "The Stack"
description: "Oversized photos are the most common reason a service-business site loads slowly. Here's how I handle images on every site I build."
ctaLabel: "Photos prepared for you"
ctaHeading: "Every photo you send becomes AVIF, WebP, and JPEG"
ctaText: "When I build your site, a tool resizes every photo, saves it in modern formats, and holds back photos lower on the page until a visitor scrolls to them. It's part of the standard plan, with no extra fee."
layout: layouts/post.njk
tags: [post]
---

<p>The most common reason a small-business site loads slowly is oversized photos. The owner uploads a 4 MB photo from a phone, and every visitor downloads four megabytes before the homepage appears. On a slow phone connection that one image can take eight seconds, and the rest of the page waits behind it.</p>

<p>The fix is well known, but most sites skip it. Here's what image optimization (preparing photos so they load fast) involves, and why I do it while building the site instead of asking clients to do it.</p>

<h2>What "optimized" means</h2>

<p>An optimized image is several files in different formats and sizes, and the site sends each visitor the one that fits. For the large photo at the top of a homepage (the "hero" image), that means roughly:</p>

<ul>
  <li><strong>AVIF format, three sizes</strong> (480px wide, 800px wide, 1200px wide). The most efficient modern format, supported by all current browsers, and typically 50 to 70 percent smaller than JPEG.</li>
  <li><strong>WebP format, the same three sizes</strong>. A slightly older format, the backup for browsers without AVIF.</li>
  <li><strong>JPEG format, the same three sizes</strong>. The traditional format, the last backup for browsers with neither.</li>
</ul>

<p>That's nine files for one image. A piece of page code called the <code>&lt;picture&gt;</code> element lists them, and the browser picks one. A phone gets the 480px version and a desktop the 1200px. A current Chrome user gets AVIF, a current Safari user gets WebP, and an obscure built-in browser gets JPEG. The visitor downloads one file of typically 20 to 60 KB instead of the original 4 MB.</p>

<h2>Why this matters</h2>

<p>On a typical 4G phone connection, a 4 MB hero image takes about 8 seconds to load. Google measures how long the largest item on screen takes to appear (Largest Contentful Paint, its core ranking measure) and wants under 2.5 seconds, so the page fails. Its PageSpeed score, Google's 0-to-100 speed rating, drops below 50. Phone visitors leave before the page appears, and more leave the longer it takes, roughly in step.</p>

<p>Optimized, the same image weighs 60 KB and loads in 0.2 seconds. The page passes, the score stays between 95 and 100, and visitors see the headline before they lose interest. For most small-business sites, no other change raises the score as much.</p>

<h2>How I do it on every build</h2>

<p>The work runs automatically each time I build the site. You don't have to do anything.</p>

<ol>
  <li>You send me photos at any size, in any format, including 4 MB phone photos and raw camera files.</li>
  <li>I put the photos in the site's source folder.</li>
  <li>The build script (using the <a href="https://www.11ty.dev/docs/plugins/image/" rel="noopener" class="inline-link">@11ty/eleventy-img</a> plugin) runs each image through Sharp, an image-processing library, and makes the AVIF, WebP, and JPEG versions at three sizes.</li>
  <li>The plugin writes the <code>&lt;picture&gt;</code> code, with the <code>srcset</code>, <code>sizes</code>, and <code>type</code> settings that match each file to a screen.</li>
  <li>Cloudflare Pages serves the finished files from servers around the world.</li>
</ol>

<p>Each image is processed once and saved for reuse. A site with 200 images takes maybe 30 seconds longer to build the first time, and almost no extra time after that.</p>

<h2>Lazy loading: the second optimization</h2>

<p>A typical page also has a few photos mid-page, a headshot, and a footer logo. Most sit below the first screen (below "the fold"), and the visitor may never scroll to them, so loading them all at once wastes time.</p>

<p>The <code>loading="lazy"</code> setting, supported by every browser since 2020, holds an image back until the visitor scrolls near it. I add <code>loading="lazy"</code> to every image except the hero, on every site, automatically.</p>

<h2>What the visitor experiences</h2>

<p>A visitor on a phone, opening the page for the first time:</p>

<ul>
  <li>The page's code and styles load (about 30 KB total) in roughly 200 ms.</li>
  <li>Text and layout appear before any images.</li>
  <li>The hero loads (about 50 KB, AVIF, 480px wide) in another 100 ms.</li>
  <li>Lower images wait until the visitor scrolls.</li>
  <li>The largest item (usually the hero) appears in about 0.5 seconds.</li>
</ul>

<p>The same visit with an unoptimized 4 MB hero:</p>

<ul>
  <li>The code and styles load in 200 ms.</li>
  <li>Text and layout appear.</li>
  <li>The hero starts downloading, and the progress bar climbs.</li>
  <li>Eight seconds later, the hero finishes.</li>
  <li>The largest item takes 8 seconds, and the page fails Google's ranking threshold.</li>
</ul>

<p>The difference shows on every visit, on every device, for the life of the site.</p>

<h2>What clients can do</h2>

<p>For sites I build, send me whatever you have. You don't need Photoshop or any preparation.</p>

<p>Some sites don't optimize photos on their own: most older WordPress sites, Wix sites with the setting turned off, and custom-coded sites without an automatic build step. For those, I recommend Google's free <a href="https://squoosh.app" rel="noopener" class="inline-link">Squoosh</a>. Drag a photo in, pick the format and quality, and save. At typical settings it matches professional tools.</p>

<p>For hundreds of old images, a bulk tool handles them in one pass: ImageOptim on Mac, Caesium on Windows, or the ShortPixel plugin for WordPress. It's worth doing once if the site is slow.</p>

<h2>If your current site is slow because of images</h2>

<p>Open <a href="https://pagespeed.web.dev" rel="noopener" class="inline-link">pagespeed.web.dev</a>, paste your address, and run the test. If images are the problem, the "Opportunities" section lists "Properly size images" or "Serve images in next-gen formats". The report, from Google's Lighthouse testing tool, names each oversized image and how much you'd save.</p>

<p>On sites I build, image optimization is part of the standard plan. Elsewhere, the fix depends on the platform. WordPress sites can install ShortPixel or EWWW Image Optimizer, and Wix and Squarespace have built-in optimization that may be switched off. Custom-coded sites need an automatic step like mine.</p>

<p>The effort is small, and for most small-business sites it's the biggest speed gain available.</p>
