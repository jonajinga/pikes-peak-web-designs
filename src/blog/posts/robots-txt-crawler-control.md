---
title: "robots.txt: The Small File That Controls Crawlers"
date: 2026-05-26
label: "SEO Operations"
description: "robots.txt tells search engines and bots what they can crawl on your site. Here is what it does, what mine looks like, and when to use it."
ctaLabel: "Configured at every launch"
ctaHeading: "Crawler access wired in by default."
ctaText: "Every site I build ships with a clean robots.txt referencing the sitemap, blocking the right paths, and welcoming legitimate crawlers. Part of the standard plan."
layout: layouts/post.njk
tags: [post]
---

<p>Of all the small technical files that ship with a website, robots.txt is the one most often misunderstood and most often slightly wrong. It is a plain-text file that lives at the root of the domain (<code>yoursite.com/robots.txt</code>) and tells search engine crawlers what they can and cannot access. The format is simple. The implications are not.</p>

<p>This post explains what robots.txt actually does, what it does not do, what mine looks like for a typical service-business site, and the common ways it goes wrong.</p>

<h2>What robots.txt actually is</h2>

<p>robots.txt is a file at the root of a website that follows the Robots Exclusion Protocol, an informal standard that has been in use since 1994. The file is a polite request: it tells well-behaved crawlers (Googlebot, Bingbot, Yandex, DuckDuckBot, etc.) what areas of the site they are welcome to crawl and what areas they should avoid.</p>

<p>The format is plain text, one rule per line. A typical entry reads:</p>

<pre><code>User-agent: *
Disallow: /admin/

Sitemap: https://example.com/sitemap.xml</code></pre>

<p>That says "to all crawlers, avoid the /admin/ path, and the canonical sitemap is at this URL." The crawler reads the file, applies the rules to its crawl plan, and proceeds.</p>

<h2>What it does NOT do</h2>

<p>Two common misunderstandings worth naming up front.</p>

<p><strong>robots.txt does not provide security.</strong> The file is publicly readable; anyone can see what paths are listed. A "Disallow: /private-customer-data/" entry tells search engines not to crawl that path, but it also tells anyone reading robots.txt exactly where the private data lives. If something needs to be private, it needs server-side authentication, not a robots.txt entry.</p>

<p><strong>robots.txt does not guarantee compliance.</strong> Well-behaved crawlers (the ones from Google, Bing, Yandex, etc.) respect the file. Less well-behaved crawlers (some scrapers, some AI training bots, some bad-actor bots) ignore it entirely. The file is a request, not an enforcement mechanism.</p>

<p><strong>robots.txt does not remove pages from search results.</strong> If a page is already indexed and you add a Disallow entry, the page may stay in the index for some time (because the crawler is no longer visiting it to confirm it should be removed). To remove a page from search results, the right tool is the noindex meta tag or HTTP header on the page itself, not a robots.txt entry.</p>

<h2>What mine looks like for a typical small-business site</h2>

<p>The robots.txt I ship on every site I build is short and conservative. The whole file is usually a dozen lines:</p>

<pre><code>User-agent: *
Allow: /

Disallow: /thank-you/
Disallow: /client-portal/
Disallow: /onboarding/
Disallow: /404.html

Sitemap: https://yoursite.com/sitemap.xml</code></pre>

<p>The breakdown:</p>

<p><strong>Allow: /</strong> explicitly welcomes all crawlers to all paths by default. This is the conservative starting point. Some templates start with <code>Disallow: /</code> (block everything) and then carve out specific allowed paths, which is the wrong default for a public marketing site.</p>

<p><strong>Disallow: /thank-you/</strong> blocks the post-form-submission thank-you page from search results. The page is meaningful only to visitors who just submitted a form; having it appear in search results would be confusing.</p>

<p><strong>Disallow: /client-portal/</strong> blocks the existing-client portal. Not because it contains private data (it does not; it is just a directory of client-side links and forms), but because there is no value in indexing it.</p>

<p><strong>Disallow: /onboarding/</strong> blocks the onboarding form. The form is meaningful only to clients who have signed up; appearing in search results would be misleading.</p>

<p><strong>Disallow: /404.html</strong> blocks the custom 404 page from appearing in search results as a real destination.</p>

<p><strong>Sitemap: ...</strong> tells crawlers where the canonical XML sitemap is. This single line meaningfully accelerates discovery of new content; crawlers check the sitemap and find new pages quickly rather than waiting to discover them through link-following.</p>

<h2>What I do not include</h2>

<p>A few patterns that show up in robots.txt files of inherited sites and that I generally remove:</p>

<p><strong>Crawl-delay directives.</strong> Some templates include "Crawl-delay: 10" or similar, asking crawlers to space out their visits. Googlebot ignores this directive entirely; the only crawler that respects it is Bing. For a small site on a CDN, the crawl rate is never an issue, so the directive does not earn its keep.</p>

<p><strong>Per-bot blocks.</strong> Some inherited sites have lists of specific User-agents to block (BadBotName, ScraperBot, etc.). The lists are perpetually out of date and the bad actors do not respect the rules anyway. Server-side rate-limiting at the CDN is a more effective tool.</p>

<p><strong>AI-training bot blocks.</strong> Whether to block GPTBot, Claude-Web, ChatGPT-User, and similar AI-training crawlers is a policy decision worth making explicitly. For most service-business sites, allowing them is fine (the AI training is unlikely to harm the business and may help it via inclusion in AI-powered search tools). For sites with strong opinions about AI training, the relevant rules are well-documented and easy to add.</p>

<p>For my own site, I currently allow all reasonable crawlers, including AI-training bots. The decision is reviewed annually as the AI landscape evolves.</p>

<h2>How to check your own robots.txt</h2>

<p>The fastest check is just to visit the URL directly. Go to <code>https://yoursite.com/robots.txt</code> in a browser. If you see a plain-text file, it exists. If you see a 404 or a redirect, your site does not have one.</p>

<p>Three things to look for in the content:</p>

<p><strong>Is there a Sitemap line?</strong> Without one, crawlers have to discover the sitemap through other channels (Search Console submission, primarily). Adding the line meaningfully accelerates content discovery.</p>

<p><strong>Are private paths blocked?</strong> Thank-you pages, admin paths, internal-only directories. If they are not blocked, they may show up in search results in awkward ways.</p>

<p><strong>Are public paths inadvertently blocked?</strong> The most common mistake is a stale "Disallow: /" left over from a development environment. If your robots.txt blocks everything, your site will not be indexed at all.</p>

<p>Google Search Console has a robots.txt Tester (under Settings) that lets you verify specific URLs against the file. Useful when investigating why a page is or is not being crawled.</p>

<h2>The relationship to noindex</h2>

<p>robots.txt and the noindex meta tag are often confused but solve different problems:</p>

<p><strong>robots.txt controls crawling.</strong> It tells the crawler whether to fetch the page at all.</p>

<p><strong>noindex controls indexing.</strong> It tells the crawler that, even after fetching the page, the page should not appear in search results.</p>

<p>For a typical small-business site, the right tool is usually noindex on individual pages that should not appear in search results. robots.txt is the right tool for blocking entire directory trees from being crawled at all.</p>

<p>For sites I build, every individual page that should not appear in search results carries a <code>noindex</code> meta tag. robots.txt is reserved for directory-level rules that apply to many pages at once. The two tools work together; neither replaces the other.</p>

<h2>If your current site has no robots.txt</h2>

<p>The fix is small. Create a plain-text file named <code>robots.txt</code>, put it at the root of your domain, and include at minimum:</p>

<pre><code>User-agent: *
Allow: /

Sitemap: https://yoursite.com/sitemap.xml</code></pre>

<p>That is the minimum-viable file. It welcomes all crawlers to the entire site and points them at the sitemap. From there, you can add Disallow lines for any private paths.</p>

<p>For sites I build, the robots.txt is part of the build and ships at every deploy. For sites I do not build, the platform almost always handles robots.txt; the work is to find where it lives and verify it says what you want it to say.</p>
