---
title: "Submitting Your Sitemap to Google Search Console"
date: 2026-05-08
label: "SEO Operations"
description: "The exact steps for verifying a new domain in Google Search Console and submitting your sitemap, so indexing starts on day one."
ctaLabel: "Search Console handled on launch day"
ctaHeading: "I set up Search Console for every site I build"
ctaText: "On launch day, I verify the domain, submit the sitemap, and run the first page checks. Your dashboard is set up, with the indexing report already filling in, before you ever log in. Part of the standard plan."
layout: layouts/post.njk
tags: [post]
---

<p>This is part two of a three-part series on sitemap submission. The <a href="/blog/sitemap-submission-overview/" class="inline-link">overview post</a> explains why it matters and lays out the plan. This post covers the Google steps.</p>

<p>Google Search Console is Google's free dashboard for site owners. It shows which pages Google has indexed, why others aren't, which searches bring up your site, how often people click, and where Google ran into errors. Verification is permanent, and the first submission takes about 10 minutes. Here are the steps I follow for every site I launch.</p>

<h2>The two property types and why I always pick Domain</h2>

<p>Search Console offers two property types, <strong>Domain</strong> and <strong>URL prefix</strong>, and Domain is almost always the better choice.</p>

<p>A <strong>URL prefix</strong> property covers one exact version of your address, such as <code>https://pikespeakwebdesigns.com</code>. Versions with <code>http://</code> instead of <code>https://</code>, or with and without <code>www.</code>, each need their own property, verification, reports, and sitemap.</p>

<p>A <strong>Domain</strong> property covers every version and subdomain at once. <code>http://pikespeakwebdesigns.com</code>, <code>https://pikespeakwebdesigns.com</code>, <code>https://www.pikespeakwebdesigns.com</code>, and <code>https://blog.pikespeakwebdesigns.com</code> all share one verification, one set of reports, and one place to submit sitemaps. The only reason to fall back to URL prefix is a DNS provider that won't let you add TXT records, which is rare but happens with some older registrars.</p>

<h2>Verifying ownership with a DNS TXT record</h2>

<p>A Domain property is verified through DNS, the settings that point your domain to the right places. You add one TXT record (a short line of text), Google reads it within minutes, and the domain stays verified. The steps:</p>

<ol>
  <li>Sign in to <a href="https://search.google.com/search-console" rel="noopener" class="inline-link">Search Console</a> with the Google account that should own the property. For client sites, I always use a dedicated account, not the owner's personal Gmail.</li>
  <li>Click "Add Property," choose <strong>Domain</strong>, and enter the bare domain (<code>pikespeakwebdesigns.com</code>, with no <code>www</code> and no <code>https://</code>).</li>
  <li>Copy the TXT record Google gives you. It looks like <code>google-site-verification=AbC123XyZ...</code>.</li>
  <li>In your DNS provider's control panel (Cloudflare, Namecheap, GoDaddy, or another), add a TXT record named <code>@</code> (or the bare domain) with that text as its value. Leave the TTL, which sets how long other computers remember the record, at its default (usually 3600 or "Auto").</li>
  <li>Save the change. Most providers update in under a minute, and Google usually sees the record a few minutes later.</li>
  <li>Click "Verify" in Search Console. If it fails, try again in two minutes. If it still fails after 15 minutes, the TXT record was probably added to a subdomain instead of the bare domain.</li>
</ol>

<p>Leave the record in place. If you remove it, Google may check again, fail to find it, and drop your verification.</p>

<h2>Submitting the sitemap</h2>

<p>Once the property is verified, the submission takes one screen and one field:</p>

<ol>
  <li>In the left menu, click <strong>Sitemaps</strong>.</li>
  <li>The "Add a new sitemap" field already shows the start of your address (<code>https://pikespeakwebdesigns.com/</code>). Enter the rest, usually <code>sitemap.xml</code>.</li>
  <li>Click <strong>Submit</strong>.</li>
</ol>

<p>Google reads the file within seconds and reports how many pages it found. The "Submitted URLs" count fills in right away. The "Indexed URLs" count starts at zero or one (often the home page) and climbs over the next few weeks.</p>

<h2>What "Page indexing" tells you</h2>

<p>The Page Indexing report sorts every page Google has found into two groups:</p>

<ul>
  <li><strong>Indexed.</strong> Google has read the page and added it to the index, so it can appear in search results.</li>
  <li><strong>Not indexed.</strong> Google hasn't read the page yet, or read it and left it out. The report lists the reason for each. "Discovered – currently not indexed" means the page is waiting for a visit. "Crawled – currently not indexed" means Google read it but left it out, often because it's thin or repeats another page. "Page with redirect" means the address forwards to another page, which is the one that counts. "Excluded by 'noindex' tag" means the page asks to stay out of search, usually on purpose. There are a handful of others.</li>
</ul>

<p>Expect the indexed count to start small and climb steadily. By six weeks, a typical small-business site has 60% to 90% of its sitemap pages indexed. The rest are usually thin, too similar to other pages, or pages that shouldn't be in the sitemap at all.</p>

<h2>Requesting indexing for high-value pages</h2>

<p>The URL Inspection tool, in the search bar at the top or in the left menu, asks Google to visit one page sooner:</p>

<ol>
  <li>Paste the page's address into the inspection bar.</li>
  <li>If the page isn't indexed yet, click <strong>Request Indexing</strong>.</li>
  <li>Google moves the page up its list. The visit usually comes within a few hours, and indexing within 24 to 48 hours.</li>
</ol>

<p>You get about 10 requests a day, so save them for pricing, contact, and the main service pages linked from your home page. The sitemap covers everything else.</p>

<h2>Performance report: the long-term feedback loop</h2>

<p>Once pages are indexed, the Performance report shows which searches bring up your site, by default over the last three months. Four numbers matter:</p>

<ul>
  <li><strong>Total clicks.</strong> Visitors who clicked through from a Google search result.</li>
  <li><strong>Total impressions.</strong> Times a page from your site appeared in search results, whether or not anyone clicked.</li>
  <li><strong>Average click-through rate (CTR).</strong> Clicks divided by impressions.</li>
  <li><strong>Average position.</strong> Your average place in the results.</li>
</ul>

<p>For a new site, all four sit near zero for several weeks. The first impressions usually appear within 14 to 21 days and the first clicks within 30 to 45 days. By 90 days, you have a baseline of which searches show your site and how often people click.</p>

<p>I check this report monthly for every site I host. Searches with many impressions but few clicks mean the page title and description need to be more inviting. Searches where a page averages position 7 to 12 sit near the line between page one and page two, where one small improvement can move the page up. Searches the client never expected to rank for bring free traffic from related topics.</p>

<p>The next post in the series covers <a href="/blog/submitting-sitemap-to-bing/" class="inline-link">Bing Webmaster Tools</a>. The dashboard is different, and Bing is worth more to a small business than most owners assume.</p>
