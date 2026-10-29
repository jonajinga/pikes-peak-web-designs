---
title: "301 Redirects: Preserving Your SEO Through a Rebuild"
date: 2026-05-20
label: "SEO Operations"
description: "When pages move in a rebuild, 301 redirects keep the search rankings you've already earned. Most rebuilds skip this step."
ctaLabel: "Redirects planned for you"
ctaHeading: "I plan every redirect before launch"
ctaText: "I match every address on your old site to its page on the new one, so your search rankings carry over and you don't lose half your traffic after the relaunch. It's part of the standard plan."
layout: layouts/post.njk
tags: [post]
---

<p>The most common way a small business loses its Google rankings is a rebuild with no redirect plan, more often than weak search engine optimization (SEO). The new site goes live, and every old page address returns a 404, the "page not found" error. Google treats the site as brand new, and years of ranking drop to zero.</p>

<p>A 301 redirect prevents this. It tells search engines and bookmarks, "This page moved, and here's where it went," and the ranking carries over to the new address (the URL). The fix is simple. Most rebuilds skip it because the planning happens at the wrong time, by the wrong person, with the wrong information.</p>

<h2>What a 301 redirect is</h2>

<p>A 301 redirect is a reply from the web server, the computer that hosts the site. It says, "The page you asked for has moved for good to this other address." Say a browser asks for <code>oldsite.com/services/roof-repair/</code>, and the server answers with a 301 pointing to <code>newsite.com/roof-repair-services/</code>. Two things happen:</p>

<ol>
  <li>The browser follows the redirect on its own, and the visitor probably never notices.</li>
  <li>Search engines update their index, the catalog of pages they know. The new address inherits the old one's ranking signals: backlinks (links from other sites), traffic history, and indexing depth. Google calls this "passing link equity."</li>
</ol>

<p>The code "301" means "permanent." The code "302" means temporary, as when a page points to a maintenance notice during an update. For a rebuild, use 301, because a 302 leaves the search engine guessing.</p>

<h2>Why most rebuilds break SEO</h2>

<p>The pattern repeats. A small business hires an agency to rebuild its 50-page site. The old addresses come in mixed styles: some with <code>/services/</code> in the path, some with dates, and some with odd endings ("slugs") that WordPress made up. The new site has cleaner addresses, such as <code>/services/electrical-panel-upgrade/</code> instead of <code>/?p=247</code>.</p>

<p>The new site looks good, it launches, and it replaces the old one.</p>

<p>Now every Google result, link from another site, and saved bookmark points to a 404. Within two weeks, Google drops the old addresses. Within four weeks, visits from unpaid search results (organic traffic) fall 40 to 60 percent. The developer calls it "expected during a rebuild," and the owner calls it "what just happened to my business."</p>

<p>The fix was one document and 20 minutes of planning: a list of every old address, matched to its new one. Those redirects go into the new server's settings, and search engines see the launch only as an upgrade.</p>

<h2>What I plan at every rebuild</h2>

<p>Every rebuild I do has a redirect plan on its launch checklist. It takes about an hour for a 50-page site and much less for a smaller one.</p>

<ol>
  <li><strong>Pull the old site's address list.</strong> I take it from the old sitemap (the file that lists a site's pages) and from the coverage report in Google Search Console, Google's free tool for site owners. If needed, I also crawl the live site with a program that follows every link. The result is one list of every address Google has indexed.</li>
  <li><strong>Match each old address to its new page.</strong> Usually the match is obvious: "About Us" becomes "About." Sometimes three old service pages merge into one. Sometimes a page retires, like an old promotion.</li>
  <li><strong>Plan a redirect for each retired page.</strong> Instead of a 404, a retired page gets a 301 to the closest match in meaning. A page about a discontinued service might point to the main services page.</li>
  <li><strong>Set up the redirects.</strong> For sites I host on Cloudflare Pages, my hosting service, the redirects live in a plain-text <code>_redirects</code> file. Each line holds one redirect: the old address, the new one, and the status code.</li>
  <li><strong>Check after launch.</strong> On launch day, I test the old address list against the live site. Each address should show the same page or 301 to its new one. Any 404 is a missed redirect, and I add it before the next update.</li>
</ol>

<h2>What it preserves</h2>

<p>Done right, a rebuild with planned redirects keeps four things that take years to build:</p>

<p><strong>Search ranking.</strong> Pages that ranked before the rebuild keep ranking at their new addresses.</p>

<p><strong>Backlinks.</strong> Links from directories, partner sites, news stories, and social posts pass through to the new pages and keep sending visitors.</p>

<p><strong>Bookmarks and saved URLs.</strong> A returning customer or a referrer who saved a page still reaches it.</p>

<p><strong>Internal-linking equity.</strong> Links between your own pages keep working, so the ranking strength they pass from page to page carries over.</p>

<h2>What gets lost without redirects</h2>

<p>The same four things, in reverse:</p>

<p><strong>Search ranking</strong> falls to almost nothing on every changed address. Recovery takes six to 18 months while Google relearns the site.</p>

<p><strong>Backlinks</strong> lead to a 404, so visitors leave and the links' ranking value goes to waste.</p>

<p><strong>Bookmarks</strong> break. Returning visitors find nothing, blame the business, and may not come back.</p>

<p><strong>Internal-linking equity</strong> resets, and pages that ranked through links from other pages start over.</p>

<p>For a small business that depends on local search, the total loss can be 30 to 60 percent of its search traffic for most of a year.</p>

<h2>How to check if your last rebuild handled redirects</h2>

<p>If your site was rebuilt or moved in the past two years, three quick checks will tell you:</p>

<p><strong>1. The "Coverage" report in Google Search Console.</strong> Filter to "Crawled but not indexed" or "Page with redirect." A jump in 404 errors around the rebuild suggests missed redirects. Working redirects show as "Page with redirect," which is normal and good.</p>

<p><strong>2. A few targeted Google searches.</strong> Search for your business name plus an old service. If the result leads to a 404, that page has lost its redirect and its ranking.</p>

<p><strong>3. A bulk address check.</strong> Tools like Screaming Frog, free for up to 500 addresses, can test your old sitemap against the new site and flag every 404. That list is the redirect plan you needed at launch.</p>

<h2>What to do if redirects were missed</h2>

<p>It's rarely too late, but the damage grows with time. Redirects added three months after a botched rebuild win back most of the ranking. Added 18 months later, they win back some, and full recovery takes longer.</p>

<p>When I take over a site from another developer, I clean up its redirects within the first 90 days. When I build a site from scratch, redirects are part of the standard plan from day one.</p>

<p>If your business depends on search and your site was rebuilt without a redirect plan, you keep paying for it every month. The fix is small next to that cost, so it's worth doing soon.</p>
