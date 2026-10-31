---
title: "Google Search Console: What I Set Up for Every Client"
date: 2026-05-08
label: "SEO Operations"
description: "Search Console is the most reliable record of how Google sees your website. Here's what I set up on every client account and what to watch once it's running."
ctaLabel: "Search Console set up for you"
ctaHeading: "I set up Search Console on every site before launch"
ctaText: "I verify your site with Google, submit the sitemap, save a starting snapshot, and share access with you. It's part of the standard plan, not an add-on."
layout: layouts/post.njk
tags: [post]
---

<p>Google Search Console (GSC, once called Webmaster Tools) is Google's free dashboard for site owners, and the most important tool for any site that wants to be found on Google. It shows which searches bring visitors and which pages Google has added to its index (the catalog it draws results from) or refused, and why. It also flags problems on phones and warnings about your structured data (code that describes your business to search engines). No other tool, including Google Analytics and Cloudflare, has this information.</p>

<p>I set it up on every site I build, as part of the standard plan. Most owners never open the dashboard, but without it I'd have no way to tell whether Google is finding the site. Here's what I set up and what I watch in the first 90 days.</p>

<h2>Step 1: Verify the property</h2>

<p>First I prove to Google that I run the domain. Of the several ways to do it, a DNS TXT record (a short text note in your domain's settings) is best for a long-term client. It survives moves, redesigns, and platform changes. The others are uploading a file, adding a page tag, or linking Google Analytics or Google Tag Manager.</p>

<ol>
  <li>Add the domain as a "Domain" property, not the "URL prefix" kind, so it covers every subdomain (such as shop.yourbusiness.com) and both http and https at once.</li>
  <li>Google creates a TXT record value.</li>
  <li>I add the record wherever the client's DNS is managed (Cloudflare, GoDaddy, Namecheap, Google Domains, and so on).</li>
  <li>Verification usually finishes within 15 minutes, occasionally a few hours.</li>
</ol>

<p>The record stays for good, so I never verify again, and future Google products that need proof of ownership recognize it.</p>

<h2>Step 2: Submit the sitemap</h2>

<p>Next I submit the XML sitemap, a file listing every page. Every site I build generates one at <code>/sitemap.xml</code> each time it's built. It tells Google which addresses are official, when each page changed, and how they relate.</p>

<p>Submitting it does two things:</p>

<ol>
  <li>Google reads the sitemap about once a day to decide which pages to visit (crawl).</li>
  <li>Search Console reports how many pages were submitted, how many were indexed, and which were rejected and why.</li>
</ol>

<p>You submit it only once. New pages join the sitemap at the next build, and Google crawls them within a few days without being asked.</p>

<h2>Step 3: Submit the canonical homepage URL</h2>

<p>For a brand-new site, I submit the homepage's official (canonical) address with the URL Inspection tool's "Request Indexing" button. Google then crawls it right away instead of waiting to find it, which on a new domain often saves a week.</p>

<p>I do this once per launch, not as a habit. Google limits how often you can use the button.</p>

<h2>Step 4: Connect to Google Analytics 4 (if used)</h2>

<p>The sites I build use privacy-friendly visitor statistics by default (Cloudflare Web Analytics plus Umami, both without cookies), so they don't need Google Analytics 4 (GA4). For clients who want GA4, often because a marketing team requires it, I link it to Search Console in one click so search data appears beside their other statistics.</p>

<h2>Step 5: Save a baseline screenshot</h2>

<p>Most agencies skip this. Before any improvement work, I save a screenshot of the Performance report for the past 28 days. On a new site it's mostly empty, but zero is still a starting point. On an existing site, it records the searches, appearances in results (impressions), and clicks before the rebuild.</p>

<p>Ninety days after launch, when a client asks whether the rebuild helped, comparing the new numbers with the old is the only rigorous answer. Without a baseline, it's a guess.</p>

<h2>Step 6: Share access with the client</h2>

<p>The Search Console property belongs to you. I add myself as a user, which is enough for ongoing checks, and leave you as the verified owner. You can remove me with one click and keep all the history, so if we ever stop working together, you keep everything.</p>

<h2>What I watch for in the first 90 days</h2>

<p>I check Search Console weekly for the first three months and monthly after that. Four reports matter:</p>

<p><strong>Coverage.</strong> How many submitted pages are indexed. After 60 days, a healthy site should be at 90 to 100 percent. If it's lower, the report names the reasons, and I fix them.</p>

<p><strong>Performance.</strong> Which searches bring visitors to which pages. I check that each service page draws the searches I built it for, and adjust its wording if it doesn't.</p>

<p><strong>Mobile Usability.</strong> Whether Google found layout problems on phones that hurt mobile rankings. Sites I build pass at launch every time, because my build process checks for the same problems, but it's worth confirming Google agrees.</p>

<p><strong>Enhancements (structured data).</strong> Whether the LocalBusiness, FAQ, and Article schema I added reads correctly. Warnings are common in the first few weeks while Google validates new schema, and most clear on their own.</p>

<h2>What clients should do in Search Console</h2>

<p>Most owners never log in, and that's fine. I watch the property and send a short summary on the quarterly review call. If you'd like to use it yourself, two habits help:</p>

<p><strong>Check the Performance report monthly.</strong> Set it to the past 28 days, sort by clicks, and read the top searches. It shows how people find your site far better than headline numbers like total visits.</p>

<p><strong>Use URL Inspection when you publish a new page.</strong> Paste the page's address into the inspection box and click "Request Indexing." Google doesn't always need the prompt, but sometimes it does, and it takes 30 seconds.</p>

<p>The deeper work, such as fixing Coverage errors and schema warnings or looking into a sudden traffic drop, is part of my regular maintenance and included in the monthly plan.</p>

<h2>What Search Console does not tell you</h2>

<p>The tool has limits:</p>

<ul>
  <li>It covers only Google. Bing Webmaster Tools is the most useful of the other search engines' tools, and the rest can usually be skipped.</li>
  <li>It stops at the click, so it can't track returning visitors or how many become customers. For that you need a visitor-statistics tool (Cloudflare, Umami, or GA4).</li>
  <li>It misses some technical problems that tools like Ahrefs, Screaming Frog, and Sitebulb find.</li>
  <li>Its search data is sampled and a day behind, and searches with very few clicks are grouped under "(other)."</li>
</ul>

<p>For most service-business sites, Search Console, Cloudflare Web Analytics, and a quarterly Ahrefs scan cover 95 percent of the technical search work that matters.</p>

<h2>If your current site does not have GSC set up</h2>

<p>Setup takes about 30 minutes if you can reach your DNS settings: verify the domain, submit the sitemap, save a baseline screenshot, and share access with whoever looks after the site. After a few weeks of crawling, the data becomes useful.</p>

<p>If finding 30 minutes is the problem, I handle this as part of the standard plan. Every site I build has Search Console set up before launch, with the sitemap submitted and the baseline saved, at no separate fee.</p>
