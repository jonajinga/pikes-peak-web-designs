---
title: "Submitting Your Sitemap: A Three-Engine Plan"
date: 2026-05-07
label: "SEO Operations"
description: "The first 90% of a small business's search visibility comes from two search engines. This is the practical, non-mystical playbook for telling them your site exists."
ctaLabel: "Sitemap submission included"
ctaHeading: "I submit your sitemap to Google and Bing on launch day."
ctaText: "Every site I build ships with a clean sitemap and a robots.txt that points to it. On launch day I personally submit the sitemap to Google Search Console and Bing Webmaster Tools so the indexing clock starts on day one. Part of the standard plan."
layout: layouts/post.njk
tags: [post]
---

<p>A small business owner whose new site has been live for three weeks asks the question every week: "I haven't shown up on Google yet, is something wrong?" The answer is almost always the same: nothing is wrong, the site has just not been formally introduced to the search engines yet. Submitting a sitemap is the formal introduction. It is the fastest way to take a new site from "exists somewhere on the internet" to "indexed and ranking" without waiting weeks for the discovery crawl to find every page on its own.</p>

<p>This post is the overview. The follow-up posts in this series go into the specifics for <a href="/blog/submitting-sitemap-to-google/" class="inline-link">Google Search Console</a> and <a href="/blog/submitting-sitemap-to-bing/" class="inline-link">Bing Webmaster Tools</a> respectively. The pattern is the same in both, but the dashboards are different and the indexing economics are different, and a real launch plan handles both.</p>

<h2>What a sitemap actually is</h2>

<p>A sitemap is an XML file that lists every page on your website that you want a search engine to index. The file lives at a predictable URL (typically <code>/sitemap.xml</code>) and contains the URL of each page, optionally the date it was last modified, and a few other metadata fields that most engines ignore in 2026.</p>

<p>The point of the file is discovery. Search engines find pages two ways: by following links from pages they already know about, and by reading sitemaps. The first method is slow and depends on the site's internal linking and external backlinks. The second method is instant: hand the search engine the file and it knows the full inventory of pages within a few seconds.</p>

<p>For a brand-new site with no external backlinks, the difference is meaningful. Without a sitemap, Google will eventually find the homepage (because it monitors DNS and certificate transparency logs and follows up with a discovery crawl), but it might be a month before it has crawled the rest of the site. With a sitemap submitted on launch day, the discovery happens in hours and the indexing happens in days.</p>

<h2>The three engines that matter</h2>

<p>Search-engine market share in 2026 in the United States breaks down roughly as follows:</p>

<ul>
  <li><strong>Google.</strong> Around 88% of US search traffic. Indexing here is non-negotiable.</li>
  <li><strong>Bing.</strong> Around 7% of US search traffic directly, but Bing's index also powers DuckDuckGo, Yahoo, ChatGPT search, Perplexity, and a growing fraction of AI-assistant search. The effective reach of a Bing-indexed site is closer to 12%.</li>
  <li><strong>Everything else.</strong> Yandex (Russia), Baidu (China), Naver (Korea), Brave Search (small but growing). For a US small business serving local customers, none of these meaningfully move the needle.</li>
</ul>

<p>The three-engine plan is therefore: Google, Bing, and IndexNow. The first two cover the search engines proper. IndexNow is a free push protocol that Bing and Yandex both accept and that turns a one-shot sitemap submission into ongoing real-time updates whenever a page changes.</p>

<h2>What the submission flow looks like end to end</h2>

<p>A complete sitemap submission for a new small business website is a one-time setup task that takes about thirty minutes if you have not done it before, and about five minutes if you have. The high-level flow is the same in both Search Console and Bing Webmaster Tools:</p>

<ol>
  <li><strong>Verify ownership.</strong> The search engine needs to confirm you actually control the domain. The easiest method is the DNS TXT record: you add a small text record to your DNS provider, the search engine reads it within a few minutes, ownership is verified. The TXT record stays in DNS forever, which means you can re-verify on any browser without going through the flow again.</li>
  <li><strong>Add the property.</strong> Once verified, you have a "property" inside the dashboard. This is the search engine's view of your site, where the indexing reports, search queries, and crawl errors live.</li>
  <li><strong>Submit the sitemap URL.</strong> The submission itself is a single field. You enter the path to your sitemap file (typically <code>sitemap.xml</code>) and the search engine fetches it, parses it, and queues every URL inside for crawling.</li>
  <li><strong>Wait for the crawl.</strong> The first sitemap-driven crawl typically completes within 24 to 72 hours. Google reports the URLs in the Indexing report; Bing in the Sitemaps report. Both will show "discovered: yes, indexed: not yet" for some pages, "discovered and indexed" for others, and a small number of "discovered but not indexed for quality reasons" — which is normal.</li>
  <li><strong>Monitor.</strong> A new property normally goes from one indexed page (the homepage, found before the sitemap submission) to between 60% and 90% of the sitemap's URLs within four to six weeks. Coverage settles after that point. Pages that never index are usually thin (low word count, light internal linking) and benefit from being either improved or excluded from the sitemap.</li>
</ol>

<h2>Why the order matters</h2>

<p>Submit Google first, Bing second. The two engines crawl independently and there is no SEO reason to favor one with the first submission, but the practical reason is simpler: Bing Webmaster Tools has an "Import from Google Search Console" button that copies your verification, your sitemaps, and most of your settings over with a single click. If you have done the Google work first, the Bing setup is two minutes instead of fifteen.</p>

<p>The IndexNow step comes after both. Once both engines have your sitemap, IndexNow becomes the ongoing automation: every time a page changes, the protocol pings Bing and Yandex to re-crawl that specific URL within minutes rather than days. Cloudflare offers IndexNow as a one-toggle feature in their dashboard if your site is on Cloudflare Pages or is fronted by their CDN. The toggle takes about ten seconds and replaces a manual workflow you would otherwise have to remember.</p>

<h2>What does not need to be submitted anywhere</h2>

<p>For completeness: there are several places people sometimes try to submit sitemaps that are no longer worth the time.</p>

<p><strong>Web directories.</strong> The DMOZ-style directory submission flow is dead. The directories that still exist either no longer accept submissions or no longer pass any authority. Skip.</p>

<p><strong>RSS aggregators.</strong> Modern aggregators discover RSS feeds automatically as soon as a feed link appears in the page <code>&lt;head&gt;</code>. No submission needed.</p>

<p><strong>AI search engines.</strong> Perplexity, ChatGPT search, and Claude search all use either Bing's index or their own crawlers that discover pages independently. As soon as you are indexed in Google and Bing, the AI assistants find you. There is no separate AI submission flow worth doing.</p>

<p>The plan is, intentionally, narrow. Three steps, all free, all permanent. The follow-up posts in this series cover Google and Bing in detail.</p>
