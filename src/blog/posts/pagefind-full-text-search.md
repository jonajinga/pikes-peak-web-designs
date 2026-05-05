---
title: "Pagefind: Full-Text Search Without a Server"
date: 2026-05-15
label: "The Stack"
description: "Pagefind builds a full-text search index at deploy time and runs entirely in the browser. Here is how it works on every site I ship."
ctaLabel: "Search built in by default"
ctaHeading: "Every site I build ships with full-text search."
ctaText: "Pagefind builds the index at deploy time, runs in the browser, costs nothing to host. Searches are sub-100ms across the whole site."
layout: layouts/post.njk
tags: [post]
---

<p>Most small business websites do not have a search bar. The visitor lands on the homepage, navigates through the menu to find what they are looking for, and either succeeds or gives up. On a site of fifteen pages, the menu is enough. On a site of fifty pages with a deep blog, a service-area directory, and an FAQ, the menu stops being enough and the visitor needs a way to type "frozen pipes" and find the relevant page in one step.</p>

<p>The search bar is the answer. Building one used to mean either a third-party hosted service (Algolia, Swiftype, costing $30 to $300 per month) or a server-side search runtime (Elasticsearch, Meilisearch, requiring an actual server). Both are overkill for a small business.</p>

<p><a href="https://pagefind.app" rel="noopener" class="inline-link">Pagefind</a> is the third option, and it is the one I install on every site I build. This post explains what it is, how it works, and why it has changed what a "small website with search" looks like.</p>

<h2>What Pagefind is</h2>

<p>Pagefind is a static-site search tool. At build time, after the site has been compiled to static HTML, Pagefind crawls the output, extracts the searchable content from each page, and builds a small index. The index is split into chunks (each chunk a few KB) and uploaded alongside the rest of the site to the CDN.</p>

<p>When a visitor types in the search box, a small JavaScript loader fetches only the index chunks needed for that specific query. The actual search happens in the visitor's browser, against the chunks that just downloaded. There is no server query, no API call, no third-party service involved. The whole loop from keystroke to results displayed is typically 50 to 150 milliseconds.</p>

<p>The crucial design choice: Pagefind does not download the entire index up front. A site with 200 pages might have a 5 MB total index, but a single search only loads the few chunks relevant to the query terms, usually 50 to 200 KB. The cost to the visitor is the cost of a single image, not the cost of a database client.</p>

<h2>Why this works</h2>

<p>The math behind Pagefind is unintuitive but correct. A traditional search engine assumes the index is too large to ship to every visitor, so it lives on a server and visitors query it remotely. Pagefind flips the assumption: most search queries only touch a small slice of the index, so it ships the slice and skips the server.</p>

<p>For a small-to-medium site (under 5,000 pages), the slice approach is meaningfully faster than the server approach. There is no network round-trip to a remote search service, no rate limit, no cold-start latency, no API key to leak. The first search may pull 100 KB of index data; subsequent searches reuse cached chunks and feel instant.</p>

<p>For very large sites (millions of pages), Pagefind's approach breaks down because the index becomes too unwieldy to chunk effectively. But "very large" is way beyond what any small business website will ever reach.</p>

<h2>How I wire it into client sites</h2>

<p>The integration runs at three places in the build:</p>

<ol>
  <li><strong>Pagefind runs as a post-build step.</strong> After Eleventy compiles the static HTML, Pagefind crawls the output directory and writes the index to a folder alongside the rest of the site. This adds a few seconds to each deploy and produces no other change.</li>
  <li><strong>The search UI is a small JavaScript component.</strong> Pagefind ships a default UI (about 30 KB compressed) that I drop into the site. It produces the search box, the results list, and the keyboard navigation. I customize the styling to match each client's brand.</li>
  <li><strong>The search modal is wired into the navigation.</strong> Every site I build has a search icon in the header that opens a modal with the Pagefind input. The keyboard shortcut <code>/</code> opens it from any page. The escape key closes it. This is a standard pattern visitors recognize from Notion, Linear, GitHub, and most modern documentation sites.</li>
</ol>

<p>The whole integration takes about an hour at site setup, then runs forever. Each new page added to the site is automatically included in the next deploy's index.</p>

<h2>What it costs</h2>

<p>Pagefind is open source and free. The hosting cost is the same as the rest of the site (zero on Cloudflare Pages). There is no per-search fee, no monthly subscription, no traffic-based pricing. Adding search to a small-business site cost real money five years ago; today it is a build step.</p>

<h2>What the visitor experiences</h2>

<p>The search-modal flow on a site with Pagefind:</p>

<ol>
  <li>Visitor clicks the search icon in the header (or presses <code>/</code> from anywhere on the site).</li>
  <li>A modal opens with a focused input field.</li>
  <li>Visitor types a query.</li>
  <li>Results appear within 100 ms, ranked by relevance, with the matching terms highlighted in context.</li>
  <li>Visitor clicks a result and the modal closes as the new page loads.</li>
</ol>

<p>The whole flow feels native to the site rather than tacked on, which is the design goal. Search bars that feel like a cheap third-party plugin are common on small-business sites; the right answer should feel like the rest of the navigation.</p>

<h2>What clients can do with it</h2>

<p>The search bar is mostly invisible until a visitor needs it. For most service-business sites, that means one to three percent of visitors actually use it on a typical visit. Of those, the search experience determines whether they stay or bounce.</p>

<p>For clients, three things are worth knowing:</p>

<p><strong>Every page on the site is searchable from launch.</strong> No separate "add this page to the search index" step. The next deploy after a new page lands includes that page in the index automatically.</p>

<p><strong>Search analytics are limited.</strong> Pagefind runs entirely in the browser, so I can't easily see what visitors are searching for. For clients who want that data, the trade-off is wiring an analytics event for each search, which adds a small amount of complexity. Most clients do not need this.</p>

<p><strong>Specific pages can be excluded from search if needed.</strong> Thank-you pages, hidden landing pages, and other operational URLs can be marked to skip the index. This happens automatically for any page already marked <code>noindex</code> for search engines.</p>

<h2>Why this matters for the lifetime of the site</h2>

<p>A search bar built into the site at launch becomes more valuable over time. A site with fifteen pages does not need search; a site with seventy-five pages absolutely does. Adding search retroactively after the site has grown is a real piece of work; building it in from the start adds zero to the timeline.</p>

<p>The trade-off pattern is similar to other build-time decisions: the cost of including the feature now is roughly zero; the cost of adding it later is real; the value of having it is small at first and grows continuously.</p>

<h2>If your current site does not have working search</h2>

<p>Three patterns I see on small-business sites:</p>

<p><strong>No search at all.</strong> Common on small WordPress and Squarespace sites. Adding it usually requires a plugin (WordPress) or sometimes a paid integration (Squarespace).</p>

<p><strong>Search exists but does not work well.</strong> The default WordPress search relies on a SQL LIKE query against post titles and content. The relevance ranking is poor, the results page is ugly, and the typical small-business site has no useful results because the search query keywords do not match the page text. Yoast and similar plugins can improve this with effort.</p>

<p><strong>Search exists via a third-party service.</strong> Algolia and Swiftype produce excellent search but cost $30 to $300 per month and require ongoing index management. For most small businesses, the cost outweighs the benefit.</p>

<p>For sites I build, Pagefind sidesteps all three patterns. The search is built in, fast, free to host, and stays current automatically. For sites I do not build, Pagefind can be retrofitted into most static-site setups in a few hours, but adding it to WordPress is harder than just including it in a fresh build.</p>
