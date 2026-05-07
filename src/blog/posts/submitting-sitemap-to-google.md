---
title: "Submitting Your Sitemap to Google Search Console"
date: 2026-05-08
label: "SEO Operations"
description: "The exact flow for verifying ownership of a new domain in Google Search Console and submitting a sitemap so the indexing clock starts on day one."
ctaLabel: "Search Console handled on launch day"
ctaHeading: "I do the Search Console setup for every site I build."
ctaText: "Domain verification, sitemap submission, and the first round of URL inspection happen on launch day. You get the dashboard fully wired up, with the indexing report already populated, before you ever log in. Part of the standard plan."
layout: layouts/post.njk
tags: [post]
---

<p>This is part two of a three-part series on sitemap submission. The <a href="/blog/sitemap-submission-overview/" class="inline-link">overview post</a> covers why this matters and the broader plan. This post is the specific Google flow.</p>

<p>Google Search Console is the dashboard Google provides to every site owner who wants visibility into how Google sees their site: which pages are indexed, which are not and why, what queries trigger impressions, what the click-through rate looks like, and where crawl errors are showing up. The dashboard is free, the verification is permanent, and the submission flow takes about ten minutes if it is your first time. Here is the exact sequence I run for every site I launch.</p>

<h2>The two property types and why I always pick Domain</h2>

<p>Google Search Console offers two ways to register a property: <strong>Domain</strong> and <strong>URL prefix</strong>. The difference matters and the cleaner choice is almost always Domain.</p>

<p>A <strong>URL prefix</strong> property is scoped to one specific protocol-and-host combination, like <code>https://pikespeakwebdesigns.com</code>. If your site has both <code>http://</code> and <code>https://</code> versions, or both <code>www.</code> and apex versions, you would need a separate property for each. Each property has its own verification, its own reports, and its own sitemap submission. Three properties for one site is awkward.</p>

<p>A <strong>Domain</strong> property covers every protocol and every subdomain under the same root domain. <code>http://pikespeakwebdesigns.com</code>, <code>https://pikespeakwebdesigns.com</code>, <code>https://www.pikespeakwebdesigns.com</code>, and <code>https://blog.pikespeakwebdesigns.com</code> all roll up to one property. One verification, one set of reports, one place to submit sitemaps. It is the better default in every case I can think of, with one exception: if your DNS provider does not let you add TXT records (rare, but some legacy registrars are restrictive), then URL prefix is the fallback.</p>

<h2>Verifying ownership with a DNS TXT record</h2>

<p>Domain properties verify exclusively through DNS. You add a single TXT record to your domain's DNS configuration, Google reads it within a few minutes, and ownership is permanently verified. The exact flow:</p>

<ol>
  <li>Sign into <a href="https://search.google.com/search-console" rel="noopener" class="inline-link">Search Console</a> with the Google account you want to own the property. (For a client engagement I always use a dedicated account, not the owner's personal Gmail.)</li>
  <li>Click "Add Property" and choose <strong>Domain</strong>. Enter the apex domain (<code>pikespeakwebdesigns.com</code>, no <code>www</code>, no <code>https://</code>).</li>
  <li>Google generates a TXT record that looks like <code>google-site-verification=AbC123XyZ...</code>. Copy the value.</li>
  <li>Open your DNS provider's control panel (Cloudflare, Namecheap, GoDaddy, whoever). Find the DNS records section for the domain. Add a new TXT record: name is <code>@</code> or the apex domain, value is the string you copied. TTL can be the default (usually 3600 or "Auto").</li>
  <li>Save the DNS change. Most providers propagate in under a minute. Google's verification check usually finds it within a few minutes after that, sometimes immediately.</li>
  <li>Back in Search Console, click "Verify". If it fails the first time, wait two minutes and try again. If it fails after fifteen minutes, the most common cause is the TXT record being scoped to a subdomain instead of the apex.</li>
</ol>

<p>The TXT record stays in DNS permanently. Don't remove it after verification or Google may re-check ownership and fail to find it.</p>

<h2>Submitting the sitemap</h2>

<p>Once the property is verified, the sitemap submission is one screen and one field.</p>

<ol>
  <li>In the left nav, click <strong>Sitemaps</strong>.</li>
  <li>The "Add a new sitemap" field appears at the top. The path prefix (<code>https://pikespeakwebdesigns.com/</code>) is already filled in for you. You only enter the path: typically <code>sitemap.xml</code>.</li>
  <li>Click <strong>Submit</strong>.</li>
</ol>

<p>That is the entire sitemap submission. Google fetches the file within seconds, parses it, and reports back: number of URLs discovered, last-read date, status. The "Submitted URLs" count populates immediately. The "Indexed URLs" count starts at zero or one (the homepage is usually already indexed by this point) and climbs over the next few weeks.</p>

<h2>What "Page indexing" actually tells you</h2>

<p>The Page Indexing report is where you watch the index build out. The report categorizes every URL Google has discovered into two buckets:</p>

<ul>
  <li><strong>Indexed.</strong> Google has crawled the page and added it to the search index. It can appear in search results.</li>
  <li><strong>Not indexed.</strong> Google has either not yet crawled the page, or crawled it and decided not to index. Each "not indexed" reason is listed: "Discovered – currently not indexed" (queued, hasn't been crawled yet), "Crawled – currently not indexed" (crawled, decided to not index, often because the page is thin or duplicate), "Page with redirect" (the URL redirects somewhere else, the destination is the canonical), "Excluded by 'noindex' tag" (the page asks not to be indexed, intentional in most cases), and a handful of others.</li>
</ul>

<p>For a freshly-submitted sitemap, expect the indexed count to start small and climb steadily. By six weeks, a typical small business site lands somewhere between 60% and 90% of its sitemap URLs indexed. The 10-40% that does not get indexed is usually pages Google has judged thin, or duplicate-content concerns, or pages that should be excluded from the sitemap in the first place.</p>

<h2>Requesting indexing for high-value pages</h2>

<p>The URL Inspection tool, accessible from the search bar at the top of Search Console or the left-nav, lets you request priority crawling for individual URLs. The flow:</p>

<ol>
  <li>Paste the URL into the inspection bar.</li>
  <li>If the URL is not yet indexed, click <strong>Request Indexing</strong>.</li>
  <li>Google queues the URL for priority crawl. The crawl usually happens within a few hours, indexing within 24 to 48 hours.</li>
</ol>

<p>The feature is rate-limited (around ten requests per day) so use it on the pages that matter most: pricing, contact, the homepage's main service hub pages. For everything else, the sitemap-driven background crawl is sufficient.</p>

<h2>Performance report: the long-term feedback loop</h2>

<p>Once pages are indexed, the Performance report is where you see what queries are actually triggering impressions. By default it shows "Web search" performance over the last three months. The four numbers that matter:</p>

<ul>
  <li><strong>Total clicks.</strong> Visitors who clicked from a Google search result.</li>
  <li><strong>Total impressions.</strong> Times a page from your site appeared on a search results page, regardless of whether it was clicked.</li>
  <li><strong>Average click-through rate (CTR).</strong> Clicks divided by impressions.</li>
  <li><strong>Average position.</strong> The mean rank position of the impressions.</li>
</ul>

<p>For a brand-new property, all four numbers will be zero or near-zero for the first several weeks. The first impressions typically appear within 14 to 21 days; the first clicks within 30 to 45 days. By 90 days you have a baseline for what queries the site is showing up for and where the click-through rates are.</p>

<p>This is the report I check monthly for every site I host. The patterns worth watching are: queries with high impressions but low CTR (the title and meta description are not compelling enough), queries where the page's average position is between 7 and 12 (one rank improvement away from the top of page two), and queries the client never expected to rank for (genuine free traffic from related search intents).</p>

<p>The next post in the series covers the same flow for <a href="/blog/submitting-sitemap-to-bing/" class="inline-link">Bing Webmaster Tools</a>, where the dashboard is different but the indexing economics matter more than most small-business owners assume.</p>
