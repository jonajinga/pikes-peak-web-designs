---
title: "Favicons: The Quiet Tell of a Professional Website"
date: 2026-05-07
label: "Branding & Polish"
description: "The 16-pixel icon in the browser tab is the first thing every returning visitor sees. Here is what a complete favicon set looks like and how I check it."
ctaLabel: "Standard on every build"
ctaHeading: "I ship a complete favicon set with every site."
ctaText: "Branded SVG, every required raster size, the apple-touch-icon, the web app manifest. Generated once at build time and committed. $175 a month, flat."
layout: layouts/post.njk
tags: [post]
---

<p>The favicon is the smallest piece of branding on a website. Sixteen by sixteen pixels in the browser tab, slightly larger on a phone home screen, slightly larger still on the bookmarks bar. Most visitors never consciously look at it. And yet a missing or broken favicon is one of the clearest tells that a website was put together carelessly. The browser fills the gap with a generic page-icon glyph; the visitor reads that as a vendor that did not finish.</p>

<p>This post walks through what a complete favicon set actually looks like in 2026, why the modern requirements are different from the favicon.ico-only era, how I produce the set on every build, and how you can check your own site with a free tool I have started recommending called <a href="https://favicraft.com/check" rel="noopener" class="inline-link">Favicraft</a>.</p>

<h2>Why the favicon matters</h2>

<p>A working favicon does three small things that compound:</p>

<p><strong>It distinguishes your tab in a stack of open tabs.</strong> Most people have somewhere between five and twenty tabs open at any given moment. The favicon is what lets a visitor flick back to your site without reading the truncated tab title. A missing favicon means your tab looks like every other generic tab; the visitor has to read the title and search for it.</p>

<p><strong>It identifies your bookmark.</strong> When a visitor bookmarks a page or pins your site to their home screen, the icon is what they see. A polished icon reads as a polished business. A blank rectangle or a cropped screenshot reads as a vendor still figuring out the basics.</p>

<p><strong>It signals craftsmanship.</strong> The visitor who notices a clean favicon does not consciously think "that company sweats the details." The visitor who notices a missing one consciously thinks something is off. The asymmetry is real.</p>

<p>The cost of getting it right is one afternoon of work, once. The cost of getting it wrong is a small but constant drag on every visit thereafter.</p>

<h2>What "complete" looks like in 2026</h2>

<p>The modern favicon set is six files plus a manifest. Each one serves a specific surface:</p>

<ul>
  <li><strong><code>favicon.svg</code></strong> — the master vector. Modern browsers (Chrome, Edge, Safari, Firefox, Brave, Arc) all prefer the SVG when it is available. It scales infinitely and stays crisp at every size. It is also the source you regenerate the rasters from.</li>
  <li><strong><code>favicon.ico</code></strong> — the legacy multi-resolution Windows icon, embedding 16x16 and 32x32 PNGs. Required for older browsers and a few corporate environments that still request <code>/favicon.ico</code> at the root by reflex.</li>
  <li><strong><code>favicon-32.png</code></strong> — the 32x32 raster, used by some browsers when SVG is unavailable.</li>
  <li><strong><code>apple-touch-icon.png</code></strong> — 180x180 PNG used by iOS and iPadOS when a visitor adds your site to the home screen. iOS does not use the SVG; without this, the home-screen icon is a screenshot of the page header, which looks unintentional.</li>
  <li><strong><code>favicon-192.png</code></strong> and <strong><code>favicon-512.png</code></strong> — Android home-screen icons, referenced from the manifest below.</li>
  <li><strong><code>site.webmanifest</code></strong> (or <code>manifest.json</code>) — the small JSON file that tells the browser the site name, theme color, and which icons to use for the home-screen install. Without this, Android's home-screen install looks janky.</li>
</ul>

<p>Six files, one manifest. Each one has a specific job. Together they cover every place a favicon shows up: browser tabs, bookmark menus, history lists, recently-closed-tab menus, iOS home screen, Android home screen, Slack and Discord link unfurls, RSS readers that pull a site icon, and the tiny icon next to your site in Google search results when Google's crawler decides to render one.</p>

<h2>The most common ways favicons go wrong</h2>

<p>I have audited enough small-business websites to see the same five patterns over and over.</p>

<p><strong>Missing entirely.</strong> The single most common pattern. The site has no favicon at all; every browser draws the default page icon. Often happens on freshly-launched WordPress or Wix sites where the favicon upload step was skipped during setup.</p>

<p><strong>A 32x32 PNG used everywhere.</strong> A common WordPress shortcut: one PNG uploaded as the "site icon" and reused for every favicon surface. It works in browser tabs but looks pixelated on Apple devices (which expect 180x180) and on Android home screens (which expect 192x192 or 512x512).</p>

<p><strong>Wrong colors.</strong> The favicon was designed with the same dark text on a light background as the logo. On a dark-mode browser tab, the dark icon disappears. The fix is either an SVG with a tile-style background or a separate icon optimized for both modes via the <code>media</code> attribute on the <code>&lt;link&gt;</code> tags.</p>

<p><strong>Broken cache.</strong> The favicon was updated on the server but the browser is still serving the old one from cache. The visitor sees the old icon for weeks. Common after a rebrand. The fix is a versioned filename or a cache-bust query string.</p>

<p><strong>The "P" letter mark from a default generator.</strong> A platform's default icon-generator creates a generic letter-on-color tile from the page title. The result is technically a favicon, but it does not match the brand and shows up identically on every site that started with the same default. Looks unfinished even though the slot is filled.</p>

<h2>How I produce the set</h2>

<p>For every site I build, the favicon set is part of the standard plan. The flow:</p>

<ol>
  <li>The brand designer (which is also me, on most builds) draws the master icon in SVG. The icon lives at <code>src/assets/img/favicon.svg</code> and is hand-tuned for legibility at 16 pixels. That last constraint is non-negotiable; if the icon does not read at 16, it does not get shipped.</li>
  <li>A small Node script runs at build time, takes the SVG, and renders it at 32, 180, 192, and 512 pixels via headless Chrome. The rasters are saved alongside the SVG and the legacy <code>favicon.ico</code>, plus a <code>site.webmanifest</code> with the brand name and theme color.</li>
  <li>The site's <code>&lt;head&gt;</code> template references all six files with the appropriate <code>rel</code> and <code>sizes</code> attributes so the right browser picks the right icon. No fallback or guessing.</li>
  <li>Cache-busting is handled by an Eleventy plugin that hashes the file contents into the URL, so when the icon changes the browser fetches the new one immediately.</li>
</ol>

<p>The whole pipeline is one command (<code>npm run favicons</code>) and it runs whenever the brand changes. Once at the start of an engagement, occasionally during a rebrand, never as ongoing maintenance. After that the favicon ships with every deploy without anyone thinking about it.</p>

<h2>How you can check your own site</h2>

<p>The cleanest free tool I have found is <a href="https://favicraft.com/check" rel="noopener" class="inline-link">Favicraft</a>. It is run by a small team that also makes a paid favicon generator, but the check tool itself is free and has no email gate.</p>

<p>The flow is the same as most inspection tools:</p>

<ol>
  <li>Visit <a href="https://favicraft.com/check" rel="noopener" class="inline-link">favicraft.com/check</a>.</li>
  <li>Paste your site's URL.</li>
  <li>Wait a few seconds for the report.</li>
</ol>

<p>The report tells you which favicon files are present, which are missing, what the actual served sizes are, whether the manifest is wired up correctly, and which browser surfaces are likely to fall back to the default page icon. It is the most thorough free favicon inspector I have found, and it tells you more than the standard browser-tab visual check.</p>

<h3>What to look for in the report</h3>

<p>A clean pass shows green checks across the SVG icon, the legacy ICO, the apple-touch-icon, both Android sizes, and the manifest. If any of those are red or missing, you have a real gap.</p>

<p>The two reds I see most often:</p>

<p><strong>Missing apple-touch-icon.</strong> iOS users adding the site to their home screen will see a screenshot rather than your branded icon. Easy fix; render a 180x180 PNG from your SVG and add a <code>&lt;link rel="apple-touch-icon"&gt;</code> tag.</p>

<p><strong>Missing or invalid manifest.</strong> Android home-screen installs look unfinished without it. Easy fix too; the manifest is a 10-line JSON file referencing your two PNG sizes plus a name and a theme color.</p>

<p>The fixes are not expensive and the difference shows up immediately on every device that visits next.</p>

<h2>The thirty-day argument</h2>

<p>If your site is missing favicons or only has a partial set, the lift from completing it is small but compounds over time. Every browser tab looks more polished. Every iOS home-screen install reads as intentional. Every Android install behaves like a real site rather than a half-built one. Every bookmark in someone's bookmarks bar identifies your business.</p>

<p>None of this drives a measurable conversion lift in isolation. But favicons are part of the broader pattern that separates a site that reads as professional from a site that reads as cobbled together. The cost of fixing it is one afternoon. The cost of leaving it broken is a small constant drag on every visitor for the lifetime of the site.</p>

<p>Run the check on your site. The result usually tells you what to do next.</p>
