---
title: "robots.txt: The Small File That Controls Crawlers"
date: 2026-05-26
label: "SEO Operations"
description: "robots.txt tells search engines and bots what they may read on your site. Here's what it does, what mine looks like, and when to use it."
ctaLabel: "Set up at every launch"
ctaHeading: "Crawler access set up from the start"
ctaText: "Every site I build comes with a clean robots.txt that points to the sitemap, blocks the right pages, and welcomes legitimate search engines. It's part of the standard plan."
layout: layouts/post.njk
tags: [post]
---

<p>Of all the small technical files on a website, robots.txt is the most often misunderstood and slightly wrong. It's a plain-text file at the top level of your domain (<code>yoursite.com/robots.txt</code>) that tells crawlers, the programs search engines send to read websites, what they may and may not visit. The format is simple, but the effects aren't.</p>

<h2>What robots.txt is</h2>

<p>robots.txt follows the Robots Exclusion Protocol, an informal standard in use since 1994. The file is a polite request. It tells well-behaved crawlers (Googlebot, Bingbot, Yandex, DuckDuckBot, and others) which parts of the site to visit and which to skip.</p>

<p>It's plain text, one rule per line. A typical entry reads:</p>

<pre><code>User-agent: *
Disallow: /admin/

Sitemap: https://example.com/sitemap.xml</code></pre>

<p>That says "all crawlers, skip the /admin/ section, and the official sitemap (the list of the site's pages) is at this address." The crawler reads the file, applies the rules, and carries on.</p>

<h2>What it does NOT do</h2>

<p>Three common misunderstandings are worth clearing up first.</p>

<p><strong>robots.txt does not provide security.</strong> Anyone can read the file. A "Disallow: /private-customer-data/" line tells search engines to skip that section, but it also tells every reader where the private data is. Anything private needs a login on the server, not a robots.txt line.</p>

<p><strong>robots.txt does not guarantee compliance.</strong> Well-behaved crawlers from Google, Bing, Yandex, and the like respect it. Some scrapers, some AI training bots, and other bad actors ignore it. The file is a request that nothing enforces.</p>

<p><strong>robots.txt does not remove pages from search results.</strong> If Google has already listed a page and you then block it, the page may stay listed for a while, because the crawler no longer visits to learn it should go. To remove a page from search, use the noindex tag (a hidden label on the page, or a matching server setting) instead.</p>

<h2>What mine looks like for a typical small-business site</h2>

<p>The robots.txt on every site I build is short and cautious, usually about a dozen lines:</p>

<pre><code>User-agent: *
Allow: /

Disallow: /thank-you/
Disallow: /client-portal/
Disallow: /onboarding/
Disallow: /404.html

Sitemap: https://yoursite.com/sitemap.xml</code></pre>

<p>Line by line:</p>

<p><strong>Allow: /</strong> welcomes all crawlers to the whole site by default. Some templates start with <code>Disallow: /</code> (block everything) and then open specific sections, which is the wrong default for a public business site.</p>

<p><strong>Disallow: /thank-you/</strong> keeps the page people see after sending a form out of search results, where it would only confuse.</p>

<p><strong>Disallow: /client-portal/</strong> blocks the page for existing clients. It holds no private data, only links and forms for clients, but there's no reason for search engines to list it.</p>

<p><strong>Disallow: /onboarding/</strong> blocks the sign-up details form, which would mislead anyone who found it in search.</p>

<p><strong>Disallow: /404.html</strong> keeps the "page not found" page from showing up in search as if it were a real page.</p>

<p><strong>Sitemap: ...</strong> tells crawlers where the official sitemap is. This one line helps search engines find new pages much sooner, because they check the sitemap instead of waiting to find pages by following links.</p>

<h2>What I do not include</h2>

<p>I usually remove a few patterns I find in robots.txt files on sites I take over:</p>

<p><strong>Crawl-delay rules.</strong> Some templates include "Crawl-delay: 10" or similar, asking crawlers to space out their visits. Googlebot ignores the rule, and only Bing follows it. A small site served from a CDN, a network of fast servers, never has trouble with crawler traffic, so the rule doesn't earn its place.</p>

<p><strong>Blocks for named bots.</strong> Some old sites list specific crawlers to block (BadBotName, ScraperBot, and so on). These lists are always out of date, and bad actors ignore them anyway. Limiting traffic at the CDN works better.</p>

<p><strong>AI-training bot blocks.</strong> Whether to block GPTBot, Claude-Web, ChatGPT-User, and similar AI-training crawlers is a policy choice worth making on purpose. For most service-business sites, allowing them is fine: the training is unlikely to hurt the business, and it may help by getting you into AI-powered search tools. Sites that object to AI training can add well-documented rules easily.</p>

<p>My own site allows all reasonable crawlers, including AI-training bots, and I review that choice each year.</p>

<h2>How to check your own robots.txt</h2>

<p>Go to <code>https://yoursite.com/robots.txt</code> in a browser. If you see a plain-text file, you have one. If you see a "not found" (404) page or get sent elsewhere, you don't.</p>

<p>Then look for three things:</p>

<p><strong>Is there a Sitemap line?</strong> Without one, crawlers find the sitemap mainly when you submit it in Search Console, Google's free site-report tool. Adding the line helps new pages get found much sooner.</p>

<p><strong>Are private paths blocked?</strong> Thank-you pages, admin sections, and internal-only folders that aren't blocked may show up in search results in awkward ways.</p>

<p><strong>Are public paths blocked by mistake?</strong> The most common error is a leftover "Disallow: /" from when the site was being built. If robots.txt blocks everything, Google won't list your site at all.</p>

<p>Google Search Console has a robots.txt report (under Settings) that shows the file Google last read and any errors in it. To check whether a particular page can be crawled, run a live test on it with the URL Inspection tool.</p>

<h2>The relationship to noindex</h2>

<p>robots.txt and the noindex tag are often confused, but they solve different problems:</p>

<p><strong>robots.txt controls crawling.</strong> It tells the crawler whether to fetch the page at all.</p>

<p><strong>noindex controls indexing.</strong> It tells the crawler that, even after fetching the page, it shouldn't list the page in search results.</p>

<p>On sites I build, every page that should stay out of search results carries a <code>noindex</code> tag, and robots.txt holds the rules that cover whole sections at once. The two work together, and neither replaces the other.</p>

<h2>If your current site has no robots.txt</h2>

<p>The fix is small. Create a plain-text file named <code>robots.txt</code>, put it at the top level of your domain, and include at least:</p>

<pre><code>User-agent: *
Allow: /

Sitemap: https://yoursite.com/sitemap.xml</code></pre>

<p>That smallest useful file welcomes all crawlers to the whole site and points them to the sitemap. From there, add Disallow lines for any private sections.</p>

<p>On sites I build, robots.txt is part of the build and goes live with every update. On other sites, the platform almost always creates it, and your job is to find it and confirm it says what you want.</p>
