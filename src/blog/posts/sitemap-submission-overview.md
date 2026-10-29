---
title: "Submitting Your Sitemap: A Three-Engine Plan"
date: 2026-05-07
label: "SEO Operations"
description: "About 90% of a small business's search visibility comes from two search engines. Here's a plain, practical plan for telling them your site exists."
ctaLabel: "Sitemap submission included"
ctaHeading: "I submit your sitemap to Google and Bing on launch day"
ctaText: "Every site I build comes with a clean sitemap and a robots.txt file that points to it. On launch day, I submit the sitemap to Google Search Console and Bing Webmaster Tools myself, so indexing starts on day one. Part of the standard plan."
layout: layouts/post.njk
tags: [post]
---

<p>I hear the same question every week, usually from an owner whose new site went live three weeks ago: "I haven't shown up on Google yet. Is something wrong?" Almost always, nothing is wrong. The search engines just haven't been introduced to the site, and a sitemap is that introduction. It gets a new site indexed (added to a search engine's records) far sooner than waiting for the engine to find every page on its own.</p>

<p>This post is the overview. The follow-up posts cover <a href="/blog/submitting-sitemap-to-google/" class="inline-link">Google Search Console</a> and <a href="/blog/submitting-sitemap-to-bing/" class="inline-link">Bing Webmaster Tools</a> in detail. The dashboards differ, and so does what each engine is worth to you, so a good launch plan covers both.</p>

<h2>What a sitemap is</h2>

<p>A sitemap is a file, in a format called XML, that lists every page you want search engines to index. It usually sits at <code>/sitemap.xml</code> and gives each page's address, sometimes with the date it last changed, plus a few details most engines now ignore.</p>

<p>Search engines find pages in two ways: by following links, and by reading sitemaps. Following links is slow, and it depends on how well your pages link to each other and how many other sites link to you. A sitemap is instant: the engine reads the file and knows every page within seconds.</p>

<p>For a brand-new site, that matters. Without a sitemap, Google finds the home page eventually, because it watches public records of new domains and security certificates. But reaching the rest of the site might take a month. With a sitemap submitted on launch day, Google finds the pages in hours and indexes them in days.</p>

<h2>The three engines that matter</h2>

<p>Here's roughly how U.S. search traffic splits in 2026:</p>

<ul>
  <li><strong>Google.</strong> About 88% of U.S. search traffic. Being indexed here is essential.</li>
  <li><strong>Bing.</strong> About 7% directly. Bing's index also feeds DuckDuckGo, Yahoo, ChatGPT search, Perplexity, and a growing share of AI-assistant search, so its total reach is closer to 12%.</li>
  <li><strong>Everything else.</strong> Yandex (Russia), Baidu (China), Naver (Korea), and Brave Search (small but growing). For a U.S. small business with local customers, none of these makes a noticeable difference.</li>
</ul>

<p>So the plan covers Google, Bing, and IndexNow, a free service that Bing and Yandex both accept. Instead of relying on a one-time submission, IndexNow tells them about each page as soon as it changes.</p>

<h2>The submission, step by step</h2>

<p>It's a one-time setup: about 30 minutes the first time and five after that. The steps are the same for Google and Bing:</p>

<ol>
  <li><strong>Verify ownership.</strong> The easiest proof that you control the domain is a DNS TXT record, a short line of text you add in your domain's settings. The search engine reads it within minutes. Leave it in place for good, and you won't need to verify again.</li>
  <li><strong>Add the property.</strong> Your site then appears in the dashboard as a "property," with reports on indexing, searches, and crawl errors (problems the engine hit while reading your pages).</li>
  <li><strong>Submit the sitemap address.</strong> Enter the path, usually <code>sitemap.xml</code>, in a single field. The search engine reads the file and lines up every page for a visit.</li>
  <li><strong>Wait for the crawl.</strong> The first round of visits usually finishes within 24 to 72 hours, and the results show in Google's Indexing report and Bing's Sitemaps report. Some pages will be indexed, some found but not yet indexed, and a few left out for quality reasons. That's normal.</li>
  <li><strong>Keep an eye on it.</strong> A new site usually goes from one indexed page (the home page) to 60% to 90% of the sitemap within four to six weeks, then levels off. Pages that never get indexed are usually thin, with few words and few links from other pages. Improve them or drop them from the sitemap.</li>
</ol>

<h2>Why the order matters</h2>

<p>Do Google first. Neither engine ranks you higher for going first. But Bing Webmaster Tools has an "Import from Google Search Console" button that copies your verification, your sitemaps, and most of your settings in one click. With Google done, the Bing setup takes two minutes instead of 15.</p>

<p>IndexNow comes last. Each time a page changes, it asks Bing and Yandex to revisit that page within minutes rather than days. If your site is hosted on Cloudflare Pages or runs through Cloudflare's network, IndexNow is one switch in the Cloudflare dashboard. It takes about 10 seconds and replaces a task you'd otherwise have to remember.</p>

<h2>Places you can skip</h2>

<p>A few other places are no longer worth the time.</p>

<p><strong>Web directories.</strong> Directory submissions in the style of the old DMOZ are dead. The directories that remain either don't take submissions or don't help your ranking.</p>

<p><strong>RSS readers.</strong> Feed readers find your RSS feed (the list of your latest posts) on their own once a link to it sits in your page code (the <code>&lt;head&gt;</code>).</p>

<p><strong>AI search engines.</strong> Perplexity, ChatGPT search, and Claude search use Bing's index or their own crawlers. Once Google and Bing have you, the AI assistants find you too, with no separate submission.</p>

<p>The plan is narrow on purpose: three steps, all free and all permanent. The next two posts in this series cover Google and Bing in detail.</p>
