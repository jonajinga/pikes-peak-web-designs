---
title: "301 Redirects: Preserving Your SEO Through a Rebuild"
date: 2026-05-20
label: "SEO Operations"
description: "When pages move during a rebuild, 301 redirects are how you keep the SEO you already built. The migration safety net most rebuilds skip."
ctaLabel: "Migration handled cleanly"
ctaHeading: "I plan every redirect before launch."
ctaText: "Every URL on your old site gets mapped to the equivalent on the new one. Search rankings transfer. No 'site lost half its traffic after relaunch' surprise. Part of the standard plan."
layout: layouts/post.njk
tags: [post]
---

<p>The most common way a small-business website loses search-engine rankings is not bad SEO. It is a rebuild that did not plan its redirects. The new site goes live, the old URLs all return 404, Google reindexes the site as a brand-new domain in the eyes of its crawler, and the page-rank built up over years gets reset to zero.</p>

<p>301 redirects are the safety net that prevents this. They tell Google (and every other search engine and bookmark tool) "this page moved, here is where it went," and the search ranking transfers cleanly to the new URL. The fix is technically simple. The reason most rebuilds skip it is that the planning happens at the wrong time, by the wrong person, with the wrong inputs.</p>

<p>This post explains what 301 redirects do, why they matter, what I plan at every rebuild, and how to check whether yours are working.</p>

<h2>What a 301 redirect actually is</h2>

<p>A 301 redirect is a server response that says "the page you asked for has permanently moved to this other URL." When a browser or search engine requests <code>oldsite.com/services/roof-repair/</code> and the server responds with a 301 pointing at <code>newsite.com/roof-repair-services/</code>, two things happen:</p>

<ol>
  <li>The browser automatically follows the redirect to the new URL. The visitor sees the new page; they probably do not even notice the redirect happened.</li>
  <li>Search engines update their index. The old URL gets removed from search results; the new URL inherits the ranking signals (backlinks, traffic history, indexing depth) of the old one. Google calls this "passing link equity."</li>
</ol>

<p>The "301" status code specifically means "permanent." The "302" status code is the temporary version, used when a page is moving briefly (like to a maintenance page during a deploy). For rebuilds, 301 is the right answer; 302 leaves the search engine guessing whether the move is permanent.</p>

<h2>Why most rebuilds break SEO</h2>

<p>The pattern is consistent. A small business hires a new agency to rebuild their site. The old site has fifty pages with various URL structures (some with <code>/services/</code> in the path, some with date prefixes, some with weird WordPress-generated slugs). The new site has cleaner URLs (<code>/services/electrical-panel-upgrade/</code> instead of <code>/?p=247</code>).</p>

<p>The new agency builds the new site beautifully. The launch happens. The old site gets replaced.</p>

<p>And every link to the old URLs (every Google search result, every backlink from another site, every bookmark in someone's browser) now points at a URL that returns 404. Within two weeks, Google has dropped the old URLs from search results. Within four weeks, the site's organic search traffic has fallen 40 to 60 percent. The agency calls it "expected during a rebuild." The client calls it "what just happened to my business."</p>

<p>The fix would have been one document and twenty minutes of planning before launch. A list of every URL on the old site, mapped to its equivalent on the new site. The redirects from the list go into the new server's configuration, and the launch is invisible to search engines except as an upgrade.</p>

<h2>What I plan at every rebuild</h2>

<p>For every rebuild engagement, the redirect plan is part of the launch checklist. The work runs about an hour for a fifty-page site, much less for smaller ones.</p>

<ol>
  <li><strong>Pull the old site's URL list.</strong> I get this from the existing site's sitemap, from Google Search Console's coverage report (most useful), and by crawling the live site if needed. The result is a flat list of every URL Google currently indexes.</li>
  <li><strong>Map each old URL to its new-site equivalent.</strong> Most of the time the mapping is obvious (an old "About Us" page becomes the new "About" page). Sometimes the new site has consolidated multiple old pages into one (three old service pages become one combined service page). Sometimes a page is being retired entirely (an old promotional page that no longer applies).</li>
  <li><strong>Plan the redirect for each retired page.</strong> A retired page should not 404 on the new site; it should 301 to the closest semantic equivalent. The old promotional page about a discontinued service might 301 to the parent services hub.</li>
  <li><strong>Implement the redirects.</strong> For sites I host on Cloudflare Pages, the redirects live in a <code>_redirects</code> file in the build output. The file is plain text: one redirect per line, source URL on the left, destination on the right, status code at the end.</li>
  <li><strong>Verify after launch.</strong> The day of launch, I run a quick crawl of the old URL list against the live new site. Every old URL should either return the equivalent new content (if the URL did not change) or 301 to the new URL. Any 404 on the list is a missed redirect; I add it before the next deploy.</li>
</ol>

<h2>What it preserves</h2>

<p>Done correctly, a redirect-planned rebuild preserves four things that take years to build:</p>

<p><strong>Search ranking.</strong> Pages that ranked on Google before the rebuild continue to rank after, on their new URLs. The transition is invisible from a search-result perspective.</p>

<p><strong>Backlinks.</strong> Other websites that link to your old URLs (industry directories, partner sites, news mentions, social media posts) keep working. The links 301 through to the new pages and continue to send traffic.</p>

<p><strong>Bookmarks and saved URLs.</strong> Visitors who bookmarked specific pages (a returning customer, a partner, a referrer) reach the new equivalent rather than a broken link.</p>

<p><strong>Internal-linking equity.</strong> Pages on the old site that linked to other pages on the old site continue to work, because the redirects handle the URL changes invisibly. Internal page authority transfers cleanly.</p>

<h2>What gets lost without redirects</h2>

<p>The same four things, in reverse:</p>

<p><strong>Search ranking</strong> drops to near-zero on every URL that changed. Recovery takes 6 to 18 months as Google re-indexes the new URLs from scratch.</p>

<p><strong>Backlinks</strong> stop working. Visitors clicking links from external sites reach 404s and bounce. The link equity is wasted.</p>

<p><strong>Bookmarks</strong> break. Returning visitors find nothing where they expect a page, blame the business, and may not return.</p>

<p><strong>Internal-linking equity</strong> resets. Pages that ranked because of internal links from other pages have to rebuild that authority from scratch.</p>

<p>The cumulative impact on a small business that depends on local search traffic can be 30 to 60 percent of organic traffic, lost for the better part of a year.</p>

<h2>How to check if your last rebuild handled redirects</h2>

<p>If your site has been rebuilt or migrated in the past two years, three quick checks tell you whether redirects were handled:</p>

<p><strong>1. Google Search Console "Coverage" report.</strong> Filter to "Crawled but not indexed" or "Page with redirect." A spike of 404 errors during the rebuild window suggests redirects were missed. Active 301 redirects show up as "Page with redirect" entries — that is normal and good.</p>

<p><strong>2. A few targeted Google searches.</strong> Search for your business name plus an old service. If the result clicks through to a 404, that page lost its ranking and the redirect is missing.</p>

<p><strong>3. A bulk URL check.</strong> Tools like Screaming Frog (free up to 500 URLs) can crawl your old sitemap against the new site and flag every URL that 404s. The list is the redirect plan you should have had at launch.</p>

<h2>What to do if redirects were missed</h2>

<p>It is rarely too late, but the work compounds with time. Adding redirects three months after a botched rebuild recovers most of the ranking. Adding them eighteen months after recovers some, but Google's index has already adjusted and full recovery takes longer.</p>

<p>For sites I take over from another developer, redirect cleanup is part of the first 90 days. For sites I build from scratch, redirects are part of the standard plan from day one.</p>

<p>The honest implication: if your business depends on search-engine traffic and your site was rebuilt without a redirect plan, the cost is real and ongoing. The fix is small relative to the cost. The conversation is worth having sooner than later.</p>
