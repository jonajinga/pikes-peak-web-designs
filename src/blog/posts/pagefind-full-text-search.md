---
title: "Pagefind: Full-Text Search Without a Server"
date: 2026-05-15
label: "The Stack"
description: "Pagefind builds a full-text search index each time the site is published and runs entirely in the browser. Here's how it works on every site I build."
ctaLabel: "Search built in from the start"
ctaHeading: "Every site I build comes with full-text search"
ctaText: "Pagefind builds the search index each time the site is published and runs in the visitor's browser, so it costs nothing to host. Results appear in under a tenth of a second across the whole site."
layout: layouts/post.njk
tags: [post]
---

<p>Most small business websites have no search bar. Visitors use the menu and either find what they want or give up. On a 15-page site, the menu is enough. On a 50-page site with a deep blog, a list of service areas, and an FAQ, visitors need to type "frozen pipes" and reach the right page in one step.</p>

<p>Adding search used to mean a paid outside service (Algolia or Swiftype, at $30 to $300 a month) or search software running on a server of your own (Elasticsearch or Meilisearch). Both are more than a small business needs.</p>

<p><a href="https://pagefind.app" rel="noopener" class="inline-link">Pagefind</a> is a third option, and I install it on every site I build.</p>

<h2>What Pagefind is</h2>

<p>Pagefind is a search tool for static sites, meaning sites built ahead of time as finished pages rather than assembled by a server on each visit. When I build the site, Pagefind reads every finished page, pulls out the searchable text, and builds a small index, a lookup list of which words appear where. It splits the index into pieces of a few KB each and publishes them with the rest of the site on the CDN, the network of servers that delivers it.</p>

<p>When a visitor types in the search box, a little JavaScript fetches only the pieces needed for that search, and the search runs in the visitor's browser. No server, outside service, or API call (a request to another company's system) is involved. From keystroke to results usually takes 50 to 150 milliseconds.</p>

<p>The key design choice is that Pagefind never downloads the whole index. A 200-page site might have a 5 MB index, but one search loads only the pieces that match its words, usually 50 to 200 KB, about the size of one photo.</p>

<h2>Why this works</h2>

<p>A traditional search engine assumes the index is too big to send to every visitor, so it keeps the index on a server and visitors send it their searches. Pagefind turns that around. Most searches touch only a small part of the index, so it sends that part and skips the server.</p>

<p>For a site under 5,000 pages, this is noticeably faster. There's no wait for a distant server, no cap on searches, no delay while a sleeping server wakes up, and no API key (a password for the service) to leak. The first search may download 100 KB, and later searches reuse those pieces and feel instant.</p>

<p>Only sites with millions of pages outgrow this, far beyond any small business website.</p>

<h2>How I wire it into client sites</h2>

<p>Pagefind fits into the build in three places:</p>

<ol>
  <li><strong>Pagefind runs after the site is built.</strong> Once Eleventy, the tool I build sites with, has produced the finished pages, Pagefind reads them and writes the index into a folder beside them. It adds a few seconds to each publish and changes nothing else.</li>
  <li><strong>The search box is a small piece of JavaScript.</strong> Pagefind comes with a ready-made search box and results list (about 30 KB compressed) that works with the keyboard. I style it to match each client's brand.</li>
  <li><strong>A search window opens from the menu.</strong> Every site I build has a search icon in the header that opens a pop-up window (a "modal") with the search box. Pressing <code>/</code> opens it from any page, and Escape closes it. Visitors know this pattern from Notion, Linear, GitHub, and most modern help sites.</li>
</ol>

<p>Setting it up takes about an hour, and then it runs for the life of the site. Each new page joins the index the next time the site is published.</p>

<h2>What it costs</h2>

<p>Pagefind is open source and free, and it's hosted with the rest of the site at no cost on Cloudflare Pages. There's no per-search fee, subscription, or traffic charge. Five years ago, small-business search cost money every month; today it's one build step.</p>

<h2>What the visitor experiences</h2>

<p>On a site with Pagefind:</p>

<ol>
  <li>The visitor clicks the search icon in the header (or presses <code>/</code> anywhere on the site).</li>
  <li>A window opens with the cursor in the search box.</li>
  <li>The visitor types a search.</li>
  <li>Results appear within 100 ms, best matches first, with the matching words highlighted.</li>
  <li>The visitor clicks a result, and the window closes as the page loads.</li>
</ol>

<p>Search feels like part of the menu instead of a cheap plugin, which is the goal.</p>

<h2>What clients can do with it</h2>

<p>On most service-business sites, one to three percent of visitors use search on a typical visit, and good results decide whether they stay. Three things are worth knowing:</p>

<p><strong>Every page is searchable from launch.</strong> There's no separate step to add a page to search. The next publish after a new page goes up includes it automatically.</p>

<p><strong>Search statistics are limited.</strong> Because Pagefind runs in the browser, I can't easily see what visitors search for. Clients who want that data can have me record each search in their visitor statistics, which adds a little complexity. Most clients don't need it.</p>

<p><strong>Pages can be left out of search.</strong> Thank-you pages, hidden landing pages, and other behind-the-scenes pages can skip the index. Any page already marked <code>noindex</code>, the setting that keeps it out of search engines, is left out automatically.</p>

<h2>Why this matters for the lifetime of the site</h2>

<p>Search built in at launch becomes more useful as the site grows: a 15-page site doesn't need it, but a 75-page site does. Like many build-time decisions, it costs almost nothing and adds no time at the start, while adding it later is a sizable job.</p>

<h2>If your current site does not have working search</h2>

<p>I see three patterns on small-business sites:</p>

<p><strong>No search at all.</strong> This is common on small WordPress and Squarespace sites. Adding it usually takes a plugin (WordPress) or sometimes a paid add-on (Squarespace).</p>

<p><strong>Search that doesn't work well.</strong> WordPress's built-in search looks for exact text in post titles and content (a database "LIKE" query). It ranks results poorly, the results page looks plain, and searches often find nothing because the visitor's words don't match the page's. Yoast and similar plugins can improve it with effort.</p>

<p><strong>Search through an outside service.</strong> Algolia and Swiftype give excellent results but cost $30 to $300 a month and need ongoing upkeep. For most small businesses, the cost outweighs the benefit.</p>

<p>Pagefind avoids all three on the sites I build: search is built in, fast, free to host, and always current. On other static sites, Pagefind can be added in a few hours, but adding it to WordPress is harder than including it in a new build.</p>
