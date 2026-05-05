---
title: "XML Sitemaps: What They Do and How I Run Them"
date: 2026-05-09
label: "SEO Operations"
description: "The sitemap.xml file is one of the smallest pieces of a website and one of the most consequential for SEO. Here is what it does, how I keep it correct, and what to check."
ctaLabel: "Sitemap on every build"
ctaHeading: "Auto-generated, submitted to Google, kept current."
ctaText: "Every site I build ships with a clean sitemap.xml that auto-updates on every deploy and is submitted to Google Search Console at launch. Part of the standard plan."
layout: layouts/post.njk
tags: [post]
---

<p>The XML sitemap is the file at <code>/sitemap.xml</code> on most websites, and it is the single piece of SEO infrastructure that goes wrong most often without anyone noticing. Sitemaps are not glamorous. They are not visible to visitors. They contain no copy worth reading. They are also one of the highest-leverage technical-SEO assets a site has, and a broken or missing one is a quiet drag on every page's discoverability.</p>

<p>This post is the version of the sitemap conversation I want my clients to have read. What it is, what it does, what I do with it on every build, and what to check on your own site.</p>

<h2>What an XML sitemap actually is</h2>

<p>An XML sitemap is a single file that lists every public URL on a website, along with optional metadata about each one (last modified date, change frequency, relative priority). The format is a small XML schema published by sitemaps.org and supported by every major search engine.</p>

<p>A minimal sitemap entry looks like this:</p>

<pre><code>&lt;url&gt;
  &lt;loc&gt;https://example.com/services/roof-repair/&lt;/loc&gt;
  &lt;lastmod&gt;2026-04-22&lt;/lastmod&gt;
&lt;/url&gt;</code></pre>

<p>A complete sitemap is a wrapper around as many of those entries as the site has pages, up to a per-file limit of 50,000 URLs (large sites split into multiple files indexed by a sitemap index file). For a typical service-business site of fifteen to fifty pages, the whole file is a few kilobytes.</p>

<h2>What it actually does</h2>

<p>The sitemap is a hint to search engines about which URLs the site considers canonical and worth indexing. It is not a directive: search engines crawl pages they discover through links regardless of whether those pages are in the sitemap, and they may decline to index pages that are in the sitemap. The sitemap accelerates discovery and helps the crawler prioritize, but it does not override the crawler's judgment.</p>

<p>For new sites, the sitemap is how Google finds pages quickly that would otherwise take weeks to discover through link-following. For established sites, the sitemap is how Google notices when an existing page has been updated, since the <code>&lt;lastmod&gt;</code> timestamp tells the crawler the page is worth a fresh visit.</p>

<p>For sites with internal pages that are not linked from the homepage (deep service-area pages, individual blog posts, pagination tail pages), the sitemap is how those pages get indexed at all.</p>

<h2>What I do with sitemaps on every build</h2>

<p>Every site I build ships with a sitemap.xml. The file is generated automatically at build time, not maintained by hand, and it stays current through every content update without anyone having to remember to update it.</p>

<p>Concretely, the build pipeline does five things:</p>

<ol>
  <li><strong>Auto-generate the sitemap from the page index.</strong> Every published page in the build's collection is included by default. Pages marked as <code>noindex</code> in their front matter (thank-you pages, private dashboards, hidden landing pages) are excluded. The script handles the canonical-URL logic.</li>
  <li><strong>Set the <code>lastmod</code> from each page's front matter date.</strong> When a page is updated, its date can be bumped or left as the original publish date depending on whether the change is meaningful. Trivial typo fixes do not bump the date; substantive edits do.</li>
  <li><strong>Reference the sitemap from <code>robots.txt</code>.</strong> Search engine crawlers check <code>/robots.txt</code> on every visit, and the <code>Sitemap:</code> directive in robots tells them where to find the sitemap without needing manual submission.</li>
  <li><strong>Submit the sitemap to Google Search Console at launch.</strong> Manual one-time step, takes thirty seconds, makes the difference between a sitemap Google notices in a day versus a week.</li>
  <li><strong>Add a human-readable sitemap at <code>/sitemap/</code>.</strong> Same content, formatted for visitors who want to navigate the site by index. The XML is for crawlers; the HTML version is for the small number of humans who genuinely use sitemaps to find pages.</li>
</ol>

<p>The whole pipeline runs on every deploy. There is no manual maintenance burden, and the sitemap stays correct as long as the build is correct.</p>

<h2>The most common ways sitemaps go wrong</h2>

<p>I have audited enough small-business sites to see the same five sitemap failures repeat.</p>

<p><strong>The sitemap is missing.</strong> The site has no <code>/sitemap.xml</code> at all. Search engines have to discover every page through link-following, which on a deep site can take weeks. Particularly common on Wix and older Squarespace sites that disable the sitemap by default.</p>

<p><strong>The sitemap exists but is not in robots.txt.</strong> The file is there but the crawler does not know where to find it. Adding the <code>Sitemap:</code> line to robots.txt takes thirty seconds and meaningfully accelerates discovery.</p>

<p><strong>The sitemap lists URLs that no longer exist.</strong> Pages were renamed or deleted but the sitemap still references the old paths. Crawlers hit 404s every time they try to index those URLs, which wastes crawl budget and signals an unhealthy site.</p>

<p><strong>The sitemap omits half the site.</strong> A WordPress plugin generated the sitemap once at install time and never updated it. New blog posts, new service pages, new service-area pages all live outside the sitemap and take much longer to be discovered.</p>

<p><strong>The sitemap includes URLs that should be private.</strong> Login pages, admin paths, search-result pages, paginated archive pages, thank-you pages, and other operational URLs that should not appear in search results all end up in the sitemap because the generator was not configured to exclude them. Google sometimes indexes them anyway.</p>

<h2>What to check on your own site</h2>

<p>Three quick checks any site owner can run in five minutes:</p>

<p><strong>1. Does the sitemap exist?</strong> Visit <code>https://yoursite.com/sitemap.xml</code> in a browser. You should see a structured XML response, not a 404 or a redirect. If the file does not exist, that is the first thing to fix.</p>

<p><strong>2. Is the sitemap referenced from robots.txt?</strong> Visit <code>https://yoursite.com/robots.txt</code> and look for a line that says <code>Sitemap: https://yoursite.com/sitemap.xml</code>. If the line is missing, search engines have to find the sitemap through Search Console submission rather than through the standard discovery mechanism.</p>

<p><strong>3. Is the sitemap up to date?</strong> Open the sitemap in a browser and look at the dates. If the most recent <code>&lt;lastmod&gt;</code> is from years ago, the sitemap is stale. If the URLs in the sitemap do not match the URLs actually on the site, the generator is broken.</p>

<p>For deeper inspection, Google Search Console's Sitemaps report shows exactly which URLs Google has indexed, which it has discovered but not indexed, and which it has rejected. The report names the rejection reason for each URL, which is the diagnostic data I work with most often when investigating indexing issues.</p>

<h2>What to do with the findings</h2>

<p>If the sitemap is missing entirely, the fix depends on the platform.</p>

<p><strong>Custom-coded sites:</strong> The sitemap is part of the build pipeline. If it is missing, the pipeline is missing a step. (For sites I build, this never happens; the sitemap is a build artifact tested on every deploy.)</p>

<p><strong>WordPress:</strong> Yoast SEO and Rank Math both generate sitemaps automatically. The fix is usually installing one or the other and confirming the sitemap renders. Avoid relying on multiple SEO plugins simultaneously; they sometimes conflict and produce broken sitemaps.</p>

<p><strong>Wix and Squarespace:</strong> Both platforms generate sitemaps automatically. If yours is missing or broken, the platform's settings panel has a toggle. Older Squarespace versions had genuine bugs here; Squarespace 7.1 is reliable.</p>

<p><strong>Shopify:</strong> Built-in, no configuration needed. If a Shopify sitemap is broken, that is a platform-level bug worth a support ticket.</p>

<p>If the sitemap exists but is stale or contains broken URLs, the regeneration mechanism needs investigating. On WordPress, that usually means clearing the SEO plugin's cache. On a custom-coded site, that means checking whether the build is actually running on every deploy.</p>

<h2>What a working sitemap should look like</h2>

<p>For reference, the sitemap on this site (<a href="/sitemap.xml" class="inline-link">pikespeakwebdesigns.com/sitemap.xml</a>) is the standard pattern: every published page included with a current <code>lastmod</code>, all noindex pages excluded, all blog posts present, all service-area pages present, all season landing pages present. It is regenerated on every build and currently lists about 200 URLs depending on the latest content.</p>

<p>If your site's sitemap looks meaningfully different from that pattern (much shorter than your actual page count, much longer because of stale URLs, missing entirely), that is a real opportunity for improvement.</p>

<p>If you want me to look at your specific site, the <a href="/audit/" class="inline-link">free five-point audit</a> covers sitemap configuration as part of the standard pass. The audit returns a written report with the specific issues and recommended fixes; if the issues are minor, you can address them on whatever platform you are on. If they are not, the rebuild conversation is the next step.</p>
