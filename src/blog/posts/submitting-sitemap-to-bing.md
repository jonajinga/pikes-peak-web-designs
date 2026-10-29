---
title: "Submitting Your Sitemap to Bing Webmaster Tools"
date: 2026-05-09
label: "SEO Operations"
description: "Bing's index now feeds DuckDuckGo, Yahoo, ChatGPT search, and Perplexity, so submitting your sitemap to Bing in 2026 reaches more people than it used to."
ctaLabel: "Bing handled on launch day"
ctaHeading: "I set up Bing the same week as Google"
ctaText: "Once Google is verified, the Bing setup takes about three minutes, because Bing imports the verification. It's worth it for the 12% of search traffic Bing now feeds, including the AI assistants. Part of the standard plan."
layout: layouts/post.njk
tags: [post]
---

<p>This is part three of a three-part series, after the <a href="/blog/sitemap-submission-overview/" class="inline-link">overview post</a> and the <a href="/blog/submitting-sitemap-to-google/" class="inline-link">Google post</a>. This one covers Bing Webmaster Tools, which is worth your time in 2026 because Bing reaches further than its 7% share of searches suggests.</p>

<h2>What Bing's index covers</h2>

<p>On its own, Bing.com handles about 7% of U.S. searches. On that number alone, a busy owner could skip it. But many other services draw on Bing's index (its records of web pages):</p>

<ul>
  <li><strong>Bing.com</strong> itself, about 7% of U.S. search.</li>
  <li><strong>DuckDuckGo</strong>, which uses Bing as its main source. It has about 3% of U.S. search and is growing among privacy-minded people.</li>
  <li><strong>Yahoo</strong> Search, which has run on Bing for years. Its share is small but not zero.</li>
  <li><strong>ChatGPT search</strong>, which uses Bing as one of its sources, a share that grows as ChatGPT leans more on search.</li>
  <li><strong>Perplexity</strong>, the AI search assistant, which counts Bing among its sources.</li>
  <li><strong>Microsoft Copilot</strong> in Edge, Office, and Windows.</li>
  <li><strong>Ecosia</strong> and several smaller engines.</li>
</ul>

<p>All told, Bing reaches closer to 12% of U.S. search, and more than that in AI-assistant search. To be the answer when someone asks ChatGPT for "a good roofer in Colorado Springs," you need to be in Bing's index.</p>

<h2>The "Import from Google Search Console" trick</h2>

<p>If you've already verified your domain with Google and submitted your sitemap there, Bing can copy all of it:</p>

<ol>
  <li>Sign in to <a href="https://www.bing.com/webmasters" rel="noopener" class="inline-link">Bing Webmaster Tools</a> with any Microsoft account.</li>
  <li>On the welcome screen, choose <strong>Import sites from Google Search Console</strong>.</li>
  <li>Give Bing read-only access to your list of Search Console sites and their verification status. It asks for nothing else.</li>
  <li>Pick the sites to import. For a single site, that's one checkbox.</li>
  <li>Click <strong>Import</strong>. Bing copies the verification, your submitted sitemaps, and the basic settings.</li>
</ol>

<p>The import takes about 30 seconds, and your Bing property is then fully set up, with no DNS records to add and no separate verification.</p>

<h2>Manual setup if you skip the import</h2>

<p>You might set up Bing by hand on a client's site, for example, so Bing doesn't get access to their Search Console. The steps mirror Google's:</p>

<ol>
  <li>Click <strong>Add Site</strong> and enter the main domain, without "www."</li>
  <li>Verify ownership with an XML file uploaded to the site, a meta tag in the home page's code (the <code>&lt;head&gt;</code>), or a DNS CNAME record. The DNS record is the cleanest, since it works like Google's TXT method and leaves your site's code alone.</li>
  <li>Open <strong>Sitemaps</strong> in the left menu.</li>
  <li>Click <strong>Submit Sitemap</strong> and enter the sitemap's full address. Unlike Google, Bing doesn't fill in the first part for you.</li>
  <li>Click <strong>Submit</strong>, and Bing lines up every page in the sitemap for a visit.</li>
</ol>

<p>By hand, the setup takes about 10 minutes.</p>

<h2>The Bing dashboard, in plain language</h2>

<p>The layout and names differ from Search Console. These reports are worth checking after you submit:</p>

<ul>
  <li><strong>Site Explorer.</strong> A map of your site as Bing sees it, showing whether each page is indexed, waiting, or blocked, how many links point to it, and when Bing last visited. Use it to spot drafts or internal pages that shouldn't be in search.</li>
  <li><strong>Search Performance.</strong> The same four numbers as Google's Performance report: clicks, impressions (times you appeared in results), click-through rate, and average position. The numbers are smaller, but the searches sometimes differ from Google's, which is worth knowing.</li>
  <li><strong>Sitemaps.</strong> When Bing last read each sitemap, how many pages it lists, and how many are indexed. A typical small site reaches 60% to 90% indexed on Bing within four weeks.</li>
  <li><strong>SEO Reports.</strong> A useful scan that only Bing offers. It flags technical problems such as missing page descriptions, repeated titles, pages that work poorly on phones, and slow pages. The advice is accurate and practical, and I've caught problems here that Google Search Console missed.</li>
  <li><strong>URL Inspection.</strong> Paste a page address to see whether it's indexed, and ask for a priority visit if it isn't, just as on Google.</li>
</ul>

<h2>IndexNow: keeping Bing up to date</h2>

<p>Bing supports IndexNow, a free service that keeps your submission current. Each time a page changes, your host sends IndexNow a short message with that page's address. Bing then revisits the page within minutes, often seconds, instead of waiting for its regular visit.</p>

<p>If your site runs on Cloudflare, setup is one switch:</p>

<ol>
  <li>In the Cloudflare dashboard, open your site's <strong>Cache</strong> settings.</li>
  <li>Find <strong>Configure IndexNow</strong>.</li>
  <li>Turn it on.</li>
</ol>

<p>Cloudflare then alerts IndexNow whenever a page changes, such as when a new version of the site goes live. Bing and Yandex both use these alerts. Google doesn't yet, though Microsoft has been pressing it to.</p>

<p>A new blog post on a site hosted through Cloudflare shows up in Bing within five to 15 minutes, instead of one to three days. If you post often, that adds up over a year.</p>

<h2>What I check after the Bing setup</h2>

<p>About a week after setup, I check four things for every client site:</p>

<ol>
  <li><strong>Sitemap status.</strong> Did Bing read the sitemap, and is the indexed count climbing?</li>
  <li><strong>SEO Reports.</strong> Is anything flagged? Bing often catches what Google ignores: a missing image description (alt text), a page title that runs too long, or a repeated main heading.</li>
  <li><strong>Search Performance.</strong> Brand-new sites won't have impressions yet. Sites already showing up on Google often do, because Bing can pick up established sites faster than you'd expect.</li>
  <li><strong>IndexNow status.</strong> The dashboard lists the latest alerts, which confirms the switch is working.</li>
</ol>

<p>That's all the upkeep Bing needs: one visit to set it up and one a week later to check it. After that, indexing runs on its own and IndexNow handles updates. It takes little effort, and the reach it brings in AI-assistant search matters more every year.</p>
