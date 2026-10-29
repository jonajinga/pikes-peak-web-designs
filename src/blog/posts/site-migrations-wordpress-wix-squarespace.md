---
title: "Site Migrations: Moving from WordPress, Wix, or Squarespace"
date: 2026-05-27
label: "Process & Operations"
description: "A platform move is less about exporting data and more about keeping what matters. Here's how I move clients off WordPress, Wix, and Squarespace."
ctaLabel: "Migration in the standard plan"
ctaHeading: "I handle the move as part of the rebuild"
ctaText: "I keep your old web addresses working with permanent redirects, clean up your content, carry your search ranking over, and close the old platform down cleanly. No surprise bills."
layout: layouts/post.njk
tags: [post]
---

<p>Many small-business site moves go wrong the same way. The old addresses show "page not found" errors, Google treats the new site as a stranger, and rankings that took years to build reset overnight. The new site exists, but the leads stop coming.</p>

<p>That's preventable. The work is careful rather than hard: mapping old addresses to new ones, setting up redirects, reviewing content, switching the DNS, and checking everything after launch. DNS is the set of settings that point your domain at your site and your email.</p>

<p>Here's how I handle a move off WordPress, Wix, or Squarespace: what carries over, what I rebuild, and what to watch for on each platform.</p>

<h2>What a migration means</h2>

<p>A migration moves a site to a new platform while keeping as much of its value as possible. Here's what's worth keeping:</p>

<ul>
  <li><strong>Content.</strong> The text, images, and structure of every page. Starting from nothing is rarely worth the time.</li>
  <li><strong>Search ranking.</strong> Your rankings, the links from other sites, and what Google knows about you. Lost ranking takes six to 18 months to rebuild.</li>
  <li><strong>Domain.</strong> Your web address. Changing it during a move multiplies the damage to your ranking.</li>
  <li><strong>Email.</strong> The MX records (the DNS settings that route your email). They're easy to forget until email stops arriving.</li>
  <li><strong>Contact forms.</strong> New leads keep arriving without a break.</li>
  <li><strong>Analytics history.</strong> The last few years of traffic data, kept so you can compare trends.</li>
</ul>

<p>Skipping any one of these is how a move goes wrong.</p>

<h2>How I migrate from WordPress</h2>

<p>WordPress sites vary the most. Some are clean and easy to move. Others are tangles of plugin-made addresses, custom content types, and layouts tied to one theme, and the work grows with the tangle. The steps:</p>

<ol>
  <li><strong>Pull the address list.</strong> The site's sitemap.xml file (often made by Yoast or Rank Math) lists every public page, and it becomes my master list.</li>
  <li><strong>Export the content.</strong> The WordPress export holds the text of posts and pages but not the images, so I download the media library separately.</li>
  <li><strong>Map old addresses to new ones.</strong> Readable addresses (such as /services/roof-repair/) are easy to match. Default numbered ones (such as /?p=247) take more work, since almost all of them change.</li>
  <li><strong>Build the new site.</strong> I build it in Eleventy, the tool that turns my templates into finished pages. Most older WordPress sites have thin or pushy copy, so I rewrite it where it helps.</li>
  <li><strong>Set up 301 redirects.</strong> A 301 redirect permanently forwards an old address to its new page. Every old address that moved or disappeared gets one, listed in the new site's _redirects file.</li>
  <li><strong>Switch the DNS.</strong> I test the new site at a preview address while the old one stays live, then point the DNS at the new host on launch day. The old site goes offline a few days later, once the new one checks out.</li>
  <li><strong>Close down WordPress.</strong> I keep the old site, hosting, and database for 30 days as a safety net. Then I archive them and cancel the hosting.</li>
</ol>

<h2>How I migrate from Wix</h2>

<p>Wix is harder, because it has no export of pages and no way to pull content out in bulk. The move goes like this:</p>

<ol>
  <li>I copy each page's text, image descriptions (alt text), and page details by hand.</li>
  <li>I save the images one by one, or with a bulk tool such as Wix Site Downloader, which works but isn't perfect.</li>
  <li>I rebuild the content in Eleventy with cleaner code, better structure, and updated copy.</li>
  <li>The addresses usually change to a cleaner pattern, and the redirect plan covers every old one.</li>
  <li>The DNS switch works the same way as it does for WordPress.</li>
  <li>I cancel the Wix subscription after the new site has run cleanly for 30 days.</li>
</ol>

<p>The hand copying makes a Wix move take noticeably longer, so plan for that in your schedule.</p>

<h2>How I migrate from Squarespace</h2>

<p>Squarespace sits in between. Version 7.1 exports pages, blog posts, and page details, but not images or custom layouts. I export what I can, copy the rest, rebuild in Eleventy, set up redirects, switch the DNS, and close the account after a 30-day safety window. It takes about as long as a WordPress move.</p>

<p>One catch: some setups put the date in blog addresses (<code>/blog/2024/05/post-title</code>), so the redirects have to cover each version, with and without the date.</p>

<h2>What gets preserved</h2>

<p><strong>The domain.</strong> Visitors type the same address and see the new site.</p>

<p><strong>Email.</strong> The MX records stay pointed at your email provider, so your email never stops, even briefly.</p>

<p><strong>Search ranking.</strong> The redirects carry your ranking to the new addresses. Within a few weeks of launch, search traffic is at or above its old level.</p>

<p><strong>The published content.</strong> Every page's words and images come across, improved where it helps.</p>

<p><strong>Analytics history.</strong> The new site reports to your existing Google Analytics (or other) account, so the history carries on.</p>

<h2>What gets rebuilt</h2>

<p><strong>The design.</strong> A new look, layout, and typography. The old design was tied to the old platform, and copying it would defeat the purpose of the move.</p>

<p><strong>The contact forms.</strong> Plugins such as Contact Form 7 or WPForms, and the built-in Wix and Squarespace forms, give way to Web3Forms. It sends each message to your inbox and shows the visitor a thank-you page.</p>

<p><strong>The speed.</strong> The new site runs on Cloudflare's network, with compressed images and trimmed style code. Scores on Google's speed test (PageSpeed) usually rise from the 40s and 50s to 95 to 100. Every page also lands in the green on Core Web Vitals, Google's measures of how fast a page loads, responds, and settles.</p>

<p><strong>The search setup.</strong> The robots.txt file, sitemap, structured data, page titles and descriptions, and social sharing cards are all written fresh for the new site.</p>

<h2>The 30-day safety window</h2>

<p>The old platform stays live for 30 days after launch, for three reasons:</p>

<ol>
  <li>If the new site has a problem that testing missed, going back is one DNS change away.</li>
  <li>If a search engine is slow to pick up the redirects, the old address still works in the meantime.</li>
  <li>If a customer bookmarked an old page a year ago, the redirect catches them.</li>
</ol>

<p>After 30 clean days, I cancel the old hosting, archive the content, and stop the billing. The extra month of platform fees rarely comes to more than $50 to $200.</p>

<h2>What it costs</h2>

<p>When I rebuild your site, the move is part of the rebuild, with no separate migration fee. The standard plan covers the rebuild, the move, the hosting, and the analytics for $175 a month.</p>

<p>Some moves are harder, such as a Wix site with hundreds of pages or a custom-coded site with no documentation. Work beyond the plan costs $100 an hour, and I send a written estimate before I start, so there are no surprise bills.</p>

<h2>If your current site is on a platform you want to leave</h2>

<p>If you'd like to talk first, book a free call (20 to 30 minutes on Google Meet). I'll ask about your platform, how many pages you have, what content you want to keep, and your timing. Then I'll tell you what the plan covers and whether anything falls outside it.</p>

<p>Most moves follow a familiar pattern, and the build takes two to three weeks from the day your first payment clears. Larger or more complex sites take longer, and I tell you so at the start.</p>
