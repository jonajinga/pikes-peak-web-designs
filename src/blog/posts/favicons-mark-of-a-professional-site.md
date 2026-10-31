---
title: "Favicons: The Quiet Tell of a Professional Website"
date: 2026-05-07
label: "Branding & Polish"
description: "The tiny icon in the browser tab is the first thing every returning visitor sees. Here's what a complete favicon set looks like and how I check it."
ctaLabel: "Standard on every build"
ctaHeading: "I include a complete favicon set with every site"
ctaText: "A branded SVG icon, every image size browsers ask for, the Apple home-screen icon, and the web app manifest, generated once when the site is built. It's $175 a month, flat."
layout: layouts/post.njk
tags: [post]
---

<p>The favicon is the small icon that stands for your site. It's 16 by 16 pixels in the browser tab, and a little larger on a phone's home screen and in the bookmarks bar. Few visitors look at it on purpose, yet a missing one is a clear sign of a careless website. The browser fills the gap with a generic page icon, and the visitor reads it as a business that didn't finish the job.</p>

<p>Here's what a complete set looks like in 2026, why one old icon file is no longer enough, and how I make the set for every site. You can check your own with a free tool I recommend, <a href="https://favicraft.com/check" rel="noopener" class="inline-link">Favicraft</a>.</p>

<h2>Why the favicon matters</h2>

<p>A working favicon does three small jobs, and they add up:</p>

<p><strong>It marks your tab.</strong> Most people keep five to 20 tabs open, and the icon lets a visitor find yours at a glance without reading the shortened titles.</p>

<p><strong>It labels your bookmark.</strong> When someone bookmarks your site or pins it to a home screen, the icon is what they see. A polished icon suggests a polished business, and a blank square suggests one still working out the basics.</p>

<p><strong>It shows care.</strong> Nobody praises a clean favicon, but a missing one makes visitors sense that something is off.</p>

<p>Getting it right takes one afternoon, once. Getting it wrong costs you a little on every visit after that.</p>

<h2>What "complete" looks like in 2026</h2>

<p>A modern set is six image files plus a manifest, each with its own job:</p>

<ul>
  <li><strong><code>favicon.svg</code>:</strong> the master icon, drawn as a vector (shapes instead of pixels, so it's sharp at any size). Chrome, Edge, Safari, Firefox, Brave, and Arc all prefer it, and every other size is made from it.</li>
  <li><strong><code>favicon.ico</code>:</strong> the older Windows format, holding 16x16 and 32x32 versions, for older browsers and office networks that still ask for <code>/favicon.ico</code> out of habit.</li>
  <li><strong><code>favicon-32.png</code>:</strong> a 32x32 image for browsers that can't use the SVG.</li>
  <li><strong><code>apple-touch-icon.png</code>:</strong> the 180x180 image iPhones and iPads use when someone adds your site to the home screen. iOS ignores the SVG, so without this file the icon is a screenshot of your page header.</li>
  <li><strong><code>favicon-192.png</code></strong> and <strong><code>favicon-512.png</code>:</strong> the Android home-screen icons, named in the manifest below.</li>
  <li><strong><code>site.webmanifest</code></strong> (or <code>manifest.json</code>): a small file that gives the browser your site's name, theme color, and home-screen icons. Without it, Android home-screen icons look clumsy.</li>
</ul>

<p>Together they cover tabs, bookmarks, browsing history, iPhone and Android home screens, link previews in Slack and Discord, feed readers, and the small icon Google sometimes shows beside your site in its results.</p>

<h2>The most common ways favicons go wrong</h2>

<p>I've looked at enough small-business websites to see the same five problems again and again.</p>

<p><strong>Missing entirely.</strong> The most common problem: every browser draws its default page icon. It often happens on a new site built with a website platform, when nobody finished the favicon step during setup.</p>

<p><strong>One 32x32 image used everywhere.</strong> A common platform shortcut is one small "site icon" reused for everything. It works in tabs but looks blurry on Apple devices, which expect 180x180, and on Android home screens, which expect 192x192 or 512x512.</p>

<p><strong>Wrong colors.</strong> The icon copies the logo's dark-on-light colors and vanishes on a dark-mode tab. The fix is an SVG with its own background tile, or a separate dark-mode icon chosen with the <code>media</code> attribute on the <code>&lt;link&gt;</code> tags.</p>

<p><strong>Stuck in the cache.</strong> After an update, often a rebrand, browsers keep showing the copy they saved earlier (their cache), sometimes for weeks. The fix is a new file name or a version number in its address.</p>

<p><strong>A default letter tile.</strong> Some platforms make a plain letter on a colored square, such as a "P," from the page title. It fills the slot, but it doesn't match the brand and looks the same on every site that kept the default.</p>

<h2>How I produce the set</h2>

<p>On every site I build, the favicon set is part of the standard plan:</p>

<ol>
  <li>I draw the master icon as an SVG at <code>src/assets/img/favicon.svg</code> and tune it by hand to read clearly at 16 pixels. If it doesn't read at 16, it doesn't go live.</li>
  <li>A small script runs when the site is built. It opens the SVG in headless Chrome (a browser without a screen) and saves it at 32, 180, 192, and 512 pixels. It also writes the older <code>favicon.ico</code> and a <code>site.webmanifest</code> with the brand name and theme color.</li>
  <li>The page template's <code>&lt;head&gt;</code> section lists all six files with the right <code>rel</code> and <code>sizes</code> labels, so each browser picks the right icon.</li>
  <li>A plugin for Eleventy (the tool that builds my sites) adds a fingerprint of each file's contents to its address. When the icon changes, browsers fetch the new one at once.</li>
</ol>

<p>It's all one command (<code>npm run favicons</code>), run at the start and again only if you rebrand. After that, the favicon goes out with every update without anyone thinking about it.</p>

<h2>How you can check your own site</h2>

<p>The best free tool I've found is <a href="https://favicraft.com/check" rel="noopener" class="inline-link">Favicraft</a>. The small team behind it also sells a favicon generator, but the check is free and doesn't ask for your email.</p>

<p>It takes three steps:</p>

<ol>
  <li>Go to <a href="https://favicraft.com/check" rel="noopener" class="inline-link">favicraft.com/check</a>.</li>
  <li>Paste in your site's address.</li>
  <li>Wait a few seconds for the report.</li>
</ol>

<p>The report shows which files you have and which are missing, the sizes your site sends, whether the manifest works, and where browsers will fall back to the default icon. It's the most thorough free checker I know, and it finds far more than a glance at your tab.</p>

<h3>What to look for in the report</h3>

<p>A clean result shows green checks for the SVG, the ICO, the apple-touch-icon, both Android sizes, and the manifest. Anything red or missing is a gap. The two I see most often:</p>

<p><strong>Missing apple-touch-icon.</strong> iPhone users who add your site to their home screen get a screenshot instead of your icon. Save your SVG as a 180x180 PNG and add a <code>&lt;link rel="apple-touch-icon"&gt;</code> tag.</p>

<p><strong>Missing or broken manifest.</strong> Android home-screen icons look unfinished without it. The fix is a 10-line file naming your two PNG sizes, your site name, and a theme color.</p>

<p>Neither fix is expensive, and the difference shows on the next device that visits.</p>

<h2>Why one afternoon is worth it</h2>

<p>On its own, a complete favicon set won't measurably raise your calls. But it's part of what makes a site look professional instead of thrown together, on every tab, home screen, and bookmark, for as long as the site runs.</p>

<p>Run the check on your site. The result usually tells you what to do next.</p>
