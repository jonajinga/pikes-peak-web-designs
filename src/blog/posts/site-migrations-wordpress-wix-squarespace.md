---
title: "Site Migrations: Moving from WordPress, Wix, or Squarespace"
date: 2026-05-27
label: "Process & Operations"
description: "Most platform migrations are not about exporting data; they are about preserving what matters. Here is how I move clients off each major platform."
ctaLabel: "Migration in the standard plan"
ctaHeading: "I handle every migration as part of the rebuild."
ctaText: "URLs preserved with 301 redirects. Content audited and cleaned. Search ranking transferred. Old platform decommissioned cleanly. No surprise bills."
layout: layouts/post.njk
tags: [post]
---

<p>Most small-business website migrations end with the new site being a brand-new domain in the eyes of Google, the old URLs returning 404, and the search ranking that took years to build resetting overnight. The migration was technically successful (the new site exists, the content is on it) and operationally a disaster (the leads stopped coming).</p>

<p>This is preventable. The work is not glamorous; it involves careful URL mapping, redirect planning, content auditing, DNS coordination, and a few hours of post-launch verification. None of those steps is hard on its own; missing any of them is what produces the disasters.</p>

<p>This post explains what a clean migration off WordPress, Wix, and Squarespace looks like, what gets preserved, what gets rebuilt, and the platform-specific gotchas to watch for.</p>

<h2>What "migration" actually means</h2>

<p>A site migration is moving a website from one platform to another while preserving as much of the existing site's value as possible. The values worth preserving:</p>

<ul>
  <li><strong>Content.</strong> The text, images, and structure of every page. Rebuilding from scratch is rarely worth the time.</li>
  <li><strong>SEO.</strong> The search rankings, backlinks, and Google's accumulated knowledge of the site. Lost ranking takes 6 to 18 months to rebuild.</li>
  <li><strong>Domain.</strong> The actual URL the business has been using. Domain changes during migration multiply the SEO cost.</li>
  <li><strong>Email.</strong> The MX records pointing at the email provider. Often forgotten in migration planning; visible to the client only when email stops arriving.</li>
  <li><strong>Contact-form continuity.</strong> Inbound leads should continue to arrive without interruption.</li>
  <li><strong>Analytics history.</strong> The last few years of traffic data, kept for trend comparison.</li>
</ul>

<p>The migration plan addresses each of these explicitly. Skipping any one of them is how the disaster scenarios happen.</p>

<h2>How I migrate from WordPress</h2>

<p>WordPress is the most common source platform and the one with the most variability between sites. Some WordPress sites are clean, well-structured, and pleasant to migrate; others are tangled webs of plugin-generated URLs, custom-post-type content, and theme-locked layouts. The work scales with the source-site complexity.</p>

<p>The standard flow:</p>

<ol>
  <li><strong>Pull the URL list.</strong> WordPress publishes a sitemap.xml (often via Yoast or Rank Math) with every public URL. I pull this and use it as the canonical list of pages to migrate.</li>
  <li><strong>Export the content.</strong> The WordPress XML export includes posts and pages with their text content, but excludes media files. I download the media library separately and re-import the relevant images during the rebuild.</li>
  <li><strong>Map old URLs to new.</strong> Most WordPress sites have either pretty permalinks (e.g. /services/roof-repair/) or default ones (e.g. /?p=247). I map each one to its new-site equivalent. The default-permalink case is the slightly harder migration because the URL structure changes for almost every page.</li>
  <li><strong>Build the new site.</strong> Eleventy + the standard stack. The content from the WordPress export becomes the source for new pages; I rewrite the copy where needed (most older WordPress sites have salesy or thin content that benefits from rework).</li>
  <li><strong>Plan and implement 301 redirects.</strong> Every old URL that no longer exists on the new site (or has changed paths) gets a 301 redirect to its new equivalent. The redirects live in the new site's _redirects file.</li>
  <li><strong>Coordinate DNS.</strong> The new site is built and tested at a preview URL while the old WordPress site is still live. On launch day, I switch the DNS to point at the new host. The old WordPress site is taken offline a few days later, after the new one is verified working.</li>
  <li><strong>Decommission WordPress.</strong> The WordPress site, hosting, and database are kept for 30 days as a safety net, then archived. The hosting subscription is canceled.</li>
</ol>

<h2>How I migrate from Wix</h2>

<p>Wix is harder than WordPress because it does not export content cleanly. The platform locks customer content to its own builder; there is no XML export of pages, no API for bulk content extraction.</p>

<p>The practical migration path:</p>

<ol>
  <li>I copy the content from each Wix page manually, paying attention to text, image alt text, and metadata.</li>
  <li>I save the images by right-clicking and downloading from each Wix page (or by using a tool like Wix Site Downloader for bulk extraction; the tools work but are imperfect).</li>
  <li>I rebuild the content in Eleventy with cleaner markup, better structure, and updated copy.</li>
  <li>The URL structure usually changes from Wix's default to a cleaner pattern; the redirect plan captures every old URL.</li>
  <li>DNS coordination is the same as WordPress migration.</li>
  <li>The Wix subscription is canceled after the new site has been verified for 30 days.</li>
</ol>

<p>Wix migrations take meaningfully longer than WordPress migrations because the content extraction is manual. Build that into the timeline.</p>

<h2>How I migrate from Squarespace</h2>

<p>Squarespace is between WordPress and Wix in difficulty. Squarespace 7.1 has improved content export over earlier versions, but the export is still partial: pages, blog posts, and metadata come through cleanly; images and custom layouts do not.</p>

<p>The flow is similar to WordPress: export what is exportable, manually pull what is not, rebuild in Eleventy, plan redirects, coordinate DNS, decommission Squarespace after a 30-day safety window. The total time is closer to a WordPress migration than to a Wix migration.</p>

<p>One Squarespace-specific gotcha: the platform's URL structure for blog posts includes a date prefix in some configurations (<code>/blog/2024/05/post-title</code>). The redirect plan needs to handle every variation, including prefixed and non-prefixed versions.</p>

<h2>What gets preserved</h2>

<p>For every migration I run, the following are preserved without negotiation:</p>

<p><strong>The domain.</strong> Visitors keep typing the same URL; the only thing that changes is what they see.</p>

<p><strong>Email continuity.</strong> The MX records stay pointed at whichever email provider the client uses. Email never stops working, even briefly.</p>

<p><strong>Search ranking.</strong> The 301 redirect plan transfers ranking from old URLs to new ones. Within a few weeks of launch, search-engine traffic is at or above pre-migration levels.</p>

<p><strong>The published content.</strong> The actual words, images, and pages from the old site appear on the new site, refined where appropriate but not lost.</p>

<p><strong>Analytics history.</strong> The Google Analytics or other analytics data from before the migration is preserved by keeping the same property/profile and pointing the new site's tracking at it.</p>

<h2>What gets rebuilt</h2>

<p>The list of things that get genuinely rebuilt rather than migrated:</p>

<p><strong>The visual design.</strong> The new site has a new look, a new layout, and new typography. The old design was tied to the old platform; bringing it forward verbatim defeats the point of the migration.</p>

<p><strong>The contact form backend.</strong> WordPress sites usually have a Contact Form 7 or WPForms plugin; Wix and Squarespace have built-in forms. The new site uses Web3Forms with a clean redirect to a thank-you page.</p>

<p><strong>The performance characteristics.</strong> The new site is on Cloudflare's edge, with optimized images and a purged CSS bundle. Page load times typically drop from 3 to 6 seconds on the old platform to under 1 second on the new one.</p>

<p><strong>The SEO infrastructure.</strong> robots.txt, sitemap.xml, schema markup, meta tags, OG cards. All authored fresh against the new site rather than carried forward.</p>

<h2>The 30-day safety window</h2>

<p>For every migration I run, the old platform stays alive for 30 days after launch. The reasoning:</p>

<ol>
  <li>If something on the new site turns out to be broken in a way that did not show up during testing, falling back to the old site is one DNS change away.</li>
  <li>If a search engine has been slow to crawl the redirects, there is still a working site at the old URL until the redirects propagate.</li>
  <li>If a customer has the old URL bookmarked from a year ago, the redirect catches them.</li>
</ol>

<p>After 30 days of clean operation, the old platform gets decommissioned: hosting subscription canceled, content archived, billing stopped. The cost of the safety window is one extra month of platform fees, which is rarely more than $50 to $200 total.</p>

<h2>What it costs</h2>

<p>For sites I rebuild, the migration is part of the rebuild itself; there is no separate migration fee. The standard plan covers the rebuild, the migration, the new hosting, and the new analytics, all in one engagement, at one flat rate.</p>

<p>For platforms with particularly difficult migrations (a deep Wix site with hundreds of pages, a custom-coded site with no documentation), the work may push into the hourly rate if it goes beyond the standard plan's scope. I quote the additional hours up front and never invoice for surprise overages.</p>

<h2>If your current site is on a platform you want to leave</h2>

<p>The conversation starts with the discovery call. I ask which platform you are on, how many pages the site has, what content you want to preserve, and what timeline matters. From there I quote the rebuild + migration as a single engagement and estimate the timeline.</p>

<p>For most service-business sites, the migration is a known shape and the timeline is two to four weeks from discovery call to launch. Larger or more complex sites take proportionally longer; I tell you up front rather than discovering the scope mid-engagement.</p>
