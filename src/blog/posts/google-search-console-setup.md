---
title: "Google Search Console: What I Set Up for Every Client"
date: 2026-05-08
label: "SEO Operations"
description: "Search Console is the ground truth for how Google sees your website. Here is what I configure on every client account and what to watch for once it is running."
ctaLabel: "Search Console wired in"
ctaHeading: "I set up GSC on every site, before launch."
ctaText: "Property verified, sitemap submitted, baseline screenshot saved, and access shared with you. Part of the standard plan, not an add-on."
layout: layouts/post.njk
tags: [post]
---

<p>Google Search Console (GSC, formerly Webmaster Tools) is the single most important diagnostic surface for any site that wants to be findable on Google. It tells you which queries are bringing visitors to your site, which pages Google has indexed, which pages it has refused to index and why, what mobile-usability errors it has noticed, and what structured-data warnings it has raised. None of that information is available through Google Analytics, Cloudflare, or any other third-party tool. Search Console is the only source.</p>

<p>For every site I build, the Search Console setup is part of the standard plan. The work is not glamorous and most clients never directly look at the dashboard, but the alternative is shipping a site without the basic diagnostic feedback loop that tells me whether Google is actually finding it. Below is what I configure for each client and what I watch for during the first ninety days.</p>

<h2>Step 1: Verify the property</h2>

<p>The first task is proving to Google that I actually own or operate the domain. Search Console offers several verification methods (HTML file upload, HTML meta tag, DNS TXT record, Google Analytics, Google Tag Manager). The best for a long-term client engagement is the DNS TXT record because it survives migrations, redesigns, and platform changes.</p>

<p>Concretely:</p>

<ol>
  <li>Add the domain as a "Domain" property in Search Console (not the URL-prefix variant; Domain covers all subdomains and protocols at once).</li>
  <li>Google generates a TXT record value.</li>
  <li>I add the TXT record to whichever DNS provider the client uses (Cloudflare, GoDaddy, Namecheap, Google Domains, etc.).</li>
  <li>Verification usually completes within fifteen minutes, occasionally a few hours.</li>
</ol>

<p>The TXT record stays in DNS forever. I never have to re-verify, and any future Google product that needs to confirm domain ownership recognizes the record automatically.</p>

<h2>Step 2: Submit the sitemap</h2>

<p>Once the property is verified, I submit the XML sitemap. Every site I build ships with one at <code>/sitemap.xml</code>, auto-generated at build time from the current set of pages. The sitemap tells Google which URLs the site considers canonical, when each one was last modified, and how they relate.</p>

<p>Submitting the sitemap to Search Console accomplishes two things:</p>

<ol>
  <li>Google pulls the sitemap on a roughly daily cadence and uses it to decide which URLs to crawl.</li>
  <li>Search Console starts reporting on the sitemap specifically: how many URLs were submitted, how many got indexed, and which were rejected with reasons.</li>
</ol>

<p>The sitemap submission is permanent. If a new URL is added to the site after launch, the next build adds it to the sitemap, the next sitemap pull picks it up, and Google crawls it within a few days. I do not have to manually request indexing for individual pages in normal cases.</p>

<h2>Step 3: Submit the canonical homepage URL</h2>

<p>For brand-new sites, I do submit the homepage URL via the URL Inspection tool's "Request Indexing" button. This nudges Google to crawl the homepage immediately rather than waiting for the standard discovery cadence. On a fresh domain, the difference between "request indexing" and "wait for the crawler" is often a week of indexing lag.</p>

<p>I do this once per launch, not as ongoing practice. Google explicitly rate-limits the request-indexing tool, and using it routinely for every page change is the wrong instinct.</p>

<h2>Step 4: Connect to Google Analytics 4 (if used)</h2>

<p>Most of my clients use the privacy-respecting analytics stack I set up by default (Cloudflare Web Analytics plus Umami, both cookie-free). For those clients, no GA4 connection is needed.</p>

<p>For clients who want GA4 (occasionally a marketing-team requirement), I connect the GA4 property to Search Console so the queries data shows up alongside their other analytics. This is a one-click link in the Search Console settings.</p>

<h2>Step 5: Save a baseline screenshot</h2>

<p>This step is the one most agencies skip. Before any optimization work, I save a screenshot of the Performance tab covering the past 28 days (which is mostly empty for a new site, but baseline-zero is still a baseline). For an existing site, this captures the pre-rebuild state of the queries, impressions, and click data.</p>

<p>The reason this matters: ninety days after launch, when a client asks whether the rebuild has helped, the only way to answer the question rigorously is to compare the new dashboard to the old one. Without a baseline, the question becomes a vibes-based estimate.</p>

<h2>Step 6: Share access with the client</h2>

<p>The Search Console property belongs to the client, not to me. I add my email as a user (not the owner; user-level access is sufficient for ongoing diagnostics), and I leave the client as the verified owner. If the client ever wants to remove me, it is one click, and they retain full access to the historical data without my involvement.</p>

<p>This is the right control structure on the wrong day. If the engagement ends, the client keeps everything.</p>

<h2>What I watch for in the first 90 days</h2>

<p>After launch, Search Console becomes a passive monitoring surface. I check it weekly for the first quarter and monthly thereafter. The four reports that matter:</p>

<p><strong>Coverage.</strong> Tells me how many URLs Google has actually indexed versus how many are submitted. A healthy site after sixty days should have 90 to 100 percent of its submitted pages indexed. If the indexed count is lower, the Coverage report names the reasons (which I then go fix).</p>

<p><strong>Performance.</strong> Tells me what queries are bringing traffic to which pages. The most useful filter is by page: I open a specific service page, see what queries Google is sending traffic for, and check whether those queries match what I designed the page to rank for. If the page is ranking for unexpected queries, the on-page copy may need adjusting.</p>

<p><strong>Mobile Usability.</strong> Tells me whether Google's mobile crawler is finding any layout issues that hurt the page's mobile-search ranking. Sites I build pass this 100 percent of the time at launch (the build pipeline checks for the same issues), but it is worth confirming Google agrees.</p>

<p><strong>Enhancements (specifically, structured data).</strong> Tells me whether the LocalBusiness, FAQ, and Article schema I shipped is parsing cleanly on Google's end. Schema warnings in the first few weeks after launch are common (Google sometimes takes time to validate new schema types) and most resolve on their own.</p>

<h2>What clients should do in Search Console</h2>

<p>Most of my clients never log in to Search Console themselves, and that is fine. The property is set up; I monitor it; I send a short summary on the quarterly review call. Clients who do want to engage with Search Console directly can do two useful things:</p>

<p><strong>Check the Performance report monthly.</strong> Filter to the past 28 days, sort by clicks descending, and look at the top queries. This is the cleanest view of how your site is actually being found, far better than vanity metrics like total visits.</p>

<p><strong>Use the URL Inspection tool when you publish a new page.</strong> After publishing a new service page or blog post, paste the URL into the inspection box and click "Request Indexing." Google does not always need this nudge, but it sometimes does, and the nudge takes thirty seconds.</p>

<p>That is the entire client-facing GSC workflow. The deeper diagnostic work (resolving Coverage errors, fixing schema warnings, investigating sudden traffic drops) is part of my standard maintenance and is included in the monthly plan.</p>

<h2>What Search Console does not tell you</h2>

<p>A short honest list of GSC's limits, since the tool does have them:</p>

<ul>
  <li>It only reports on Google. Bing, DuckDuckGo, Brave Search, and the other engines have their own webmaster tools (Bing Webmaster Tools is the most useful; the rest can usually be skipped).</li>
  <li>It does not track returning visitors, conversion rate, or anything past the click. For that you need a real analytics tool (Cloudflare, Umami, or GA4).</li>
  <li>It does not catch every technical SEO issue. The Coverage and Mobile Usability reports are good but not comprehensive; tools like Ahrefs, Screaming Frog, and Sitebulb find things GSC does not.</li>
  <li>The query data is sampled and lagged. Today's clicks show up in the report tomorrow, and very-low-click queries get bucketed into "(other)" rather than reported individually.</li>
</ul>

<p>For most service-business sites, GSC plus Cloudflare Web Analytics plus a quarterly Ahrefs site-audit covers 95 percent of the legitimate technical-SEO surface. Anything more elaborate than that is usually scope creep.</p>

<h2>If your current site does not have GSC set up</h2>

<p>The setup takes about thirty minutes if you have DNS access. Verify the domain, submit the sitemap, save a baseline screenshot, share access with whoever maintains the site. The work is small and the dataset that opens up after a few weeks of crawling is genuinely useful.</p>

<p>If the thirty minutes is the blocker, that is exactly the kind of operational work I handle as part of the standard plan. The site I build comes with Search Console wired in before launch, the sitemap submitted, and the baseline saved. There is no separate SEO-onboarding fee for any of it.</p>
