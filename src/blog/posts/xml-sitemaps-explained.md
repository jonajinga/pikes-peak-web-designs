---
title: "XML Sitemaps: What They Do and How I Run Them"
date: 2026-05-09
label: "SEO Operations"
description: "The sitemap.xml file is one of the smallest parts of a website and one of the most important for search. Here's what it does, how I keep it correct, and what to check."
ctaLabel: "Sitemap on every build"
ctaHeading: "Generated automatically, submitted to Google, and kept current"
ctaText: "Every site I build comes with a clean sitemap.xml that updates itself each time I publish a change, and I submit it to Google Search Console at launch. Part of the standard plan."
layout: layouts/post.njk
tags: [post]
---

<p>The XML sitemap is the file at <code>/sitemap.xml</code> on most websites, and it's the piece of search setup that most often breaks without anyone noticing. Visitors never see it, yet it matters a great deal for search, and a broken or missing one makes every page on the site harder to find.</p>

<p>Here's what a sitemap is, what it does, what I do with it on every site, and what to check on yours.</p>

<h2>What an XML sitemap is</h2>

<p>An XML sitemap is one file that lists every public page on a website, with optional details for each: when it last changed, how often it changes, and how important it is compared with other pages. The format is a small standard from sitemaps.org that every major search engine supports.</p>

<p>A minimal entry looks like this:</p>

<pre><code>&lt;url&gt;
  &lt;loc&gt;https://example.com/services/roof-repair/&lt;/loc&gt;
  &lt;lastmod&gt;2026-04-22&lt;/lastmod&gt;
&lt;/url&gt;</code></pre>

<p>A complete sitemap holds as many entries as the site has pages, up to 50,000 per file. Larger sites split it into several files listed in a sitemap index file. For a typical service-business site of 15 to 50 pages, the whole file is a few kilobytes.</p>

<h2>What it does</h2>

<p>The sitemap tells search engines which pages are canonical (the main version of each page) and worth indexing. It's a hint, not a command. Search engines still visit pages they find through links, and they may decline to index pages the sitemap lists. The sitemap speeds up discovery and helps the search engine decide what to visit first, but the search engine makes the final call.</p>

<p>For a new site, the sitemap is how Google quickly finds pages that would otherwise take weeks to discover by following links. For an established site, it's how Google notices that a page has changed, since the <code>&lt;lastmod&gt;</code> date tells it the page is worth another visit.</p>

<p>Some pages aren't linked from the home page, such as deep service-area pages, individual blog posts, and the later pages of a long list. For those, the sitemap is how they get indexed at all.</p>

<h2>What I do with sitemaps on every build</h2>

<p>Every site I build has a sitemap.xml that's generated each time the site is built, not kept by hand, so it stays current without anyone having to remember it. The build does five things:</p>

<ol>
  <li><strong>Generate the sitemap from the list of pages.</strong> Every published page is included. Pages marked <code>noindex</code> in their settings (thank-you pages, private dashboards, and hidden landing pages) are left out, and the script handles the canonical addresses.</li>
  <li><strong>Set each page's <code>lastmod</code> from its date.</strong> Typo fixes leave a page's date alone, and substantial changes move it forward.</li>
  <li><strong>List the sitemap in <code>robots.txt</code>.</strong> Search engines check <code>/robots.txt</code> on every visit, and its <code>Sitemap:</code> line tells them where the sitemap is without a manual submission.</li>
  <li><strong>Submit the sitemap to Google Search Console at launch.</strong> It's a one-time, 30-second step, and it gets the sitemap noticed in a day instead of a week.</li>
  <li><strong>Add a readable sitemap at <code>/sitemap/</code>.</strong> It's the same list, laid out for the few visitors who like to browse a site by index. The XML version is for search engines.</li>
</ol>

<p>All of this runs each time I publish a change, so the sitemap stays correct as long as the build does.</p>

<h2>The most common ways sitemaps go wrong</h2>

<p>I've reviewed enough small-business sites to see the same five failures again and again.</p>

<p><strong>The sitemap is missing.</strong> With no <code>/sitemap.xml</code>, search engines have to find every page by following links, which can take weeks on a large site. It's especially common on Wix and older Squarespace sites that turn the sitemap off by default.</p>

<p><strong>The sitemap exists but isn't in robots.txt.</strong> The file is there, but search engines don't know where to look. Adding the <code>Sitemap:</code> line takes 30 seconds and noticeably speeds up discovery.</p>

<p><strong>The sitemap lists pages that no longer exist.</strong> Pages were renamed or deleted, but the sitemap still lists the old addresses. Search engines hit "page not found" errors each time, which wastes their limited visits to your site (your crawl budget) and makes the site look poorly kept.</p>

<p><strong>The sitemap leaves out half the site.</strong> A WordPress plugin made the sitemap once at install and never updated it, so new blog posts, service pages, and service-area pages take much longer to be found.</p>

<p><strong>The sitemap includes pages that should be private.</strong> Login pages, admin pages, search-result pages, archive pages, and thank-you pages end up in the sitemap because the generator wasn't set to leave them out. Google sometimes indexes them anyway.</p>

<h2>What to check on your own site</h2>

<p>Here are three quick checks any owner can do in five minutes:</p>

<p><strong>1. Does the sitemap exist?</strong> Visit <code>https://yoursite.com/sitemap.xml</code> in a browser. You should see a structured page of code, not a "page not found" error or a redirect. If the file doesn't exist, fix that first.</p>

<p><strong>2. Is the sitemap listed in robots.txt?</strong> Visit <code>https://yoursite.com/robots.txt</code> and look for a line that says <code>Sitemap: https://yoursite.com/sitemap.xml</code>. Without it, search engines can find your sitemap only through a Search Console submission.</p>

<p><strong>3. Is the sitemap up to date?</strong> Open the sitemap and look at the dates. If the newest <code>&lt;lastmod&gt;</code> is years old, the sitemap is stale. If its addresses don't match the pages on your site, the generator is broken.</p>

<p>For a closer look, Google Search Console's Sitemaps report shows which pages Google has indexed, found but not indexed, or rejected, with the reason for each. Those reasons are what I work from most when I look into indexing problems.</p>

<h2>What to do with the findings</h2>

<p>If the sitemap is missing, the fix depends on the platform.</p>

<p><strong>Custom-coded sites:</strong> The sitemap is part of the build, so if it's missing, the build is missing a step. On sites I build, that never happens, because the sitemap is checked every time I publish.</p>

<p><strong>WordPress:</strong> Yoast SEO and Rank Math both create sitemaps automatically, so the fix is usually to install one and confirm the sitemap appears. Don't run two SEO plugins at once, because they sometimes conflict and break the sitemap.</p>

<p><strong>Wix and Squarespace:</strong> Both create sitemaps automatically. If yours is missing or broken, look for the switch in the platform's settings. Older Squarespace versions had bugs here, but Squarespace 7.1 is reliable.</p>

<p><strong>Shopify:</strong> The sitemap is built in and needs no setup. If a Shopify sitemap is broken, that's a platform bug worth a support ticket.</p>

<p>If the sitemap exists but is stale or lists broken addresses, find out why it isn't updating. On WordPress, that usually means clearing the SEO plugin's cache. On a custom-coded site, it means checking that the build runs every time a change is published.</p>

<h2>What a working sitemap should look like</h2>

<p>For reference, the sitemap on this site (<a href="/sitemap.xml" class="inline-link">pikespeakwebdesigns.com/sitemap.xml</a>) follows the standard pattern. Every published page is listed with a current <code>lastmod</code>, every noindex page is left out, and every blog post, service-area page, and seasonal landing page is included. It's rebuilt each time the site is, and it lists about 200 addresses, depending on the latest content.</p>

<p>If your sitemap looks very different (much shorter than your page count, much longer because of old addresses, or missing entirely), you have a clear chance to improve.</p>

<p>If you'd like me to look at your site, <a href="/contact/" class="inline-link">book a free call</a> (20 to 30 minutes on Google Meet). If the problems are minor, you can fix them on whatever platform you use. If they aren't, we can talk about a rebuild.</p>
