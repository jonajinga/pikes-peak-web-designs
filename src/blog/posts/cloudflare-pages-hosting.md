---
title: "Cloudflare Pages: Where I Host Every Site I Build"
date: 2026-05-13
label: "The Stack"
description: "Cloudflare Pages is the hosting layer that makes a fast, secure, globally distributed site possible at almost no cost. Here is how I use it."
ctaLabel: "Hosting in the standard plan"
ctaHeading: "I host every site on Cloudflare's edge network."
ctaText: "Free SSL, global CDN, deploy on every push, and the bandwidth cost stays at zero. Part of the standard plan, no separate hosting fee."
layout: layouts/post.njk
tags: [post]
---

<p>Hosting is one of those parts of a website that nobody thinks about until it goes wrong. The site is up, pages load, the email forwards. Then traffic spikes during a storm season or after a press placement, the host slows to a crawl, and the rest of the conversation gets uncomfortable.</p>

<p>Every site I build lives on <a href="https://pages.cloudflare.com" rel="noopener" class="inline-link">Cloudflare Pages</a>, the static-site hosting product Cloudflare offers as part of its broader edge network. This post explains why, what it gets a small business, and how the hosting layer connects to the rest of the stack.</p>

<h2>What Cloudflare Pages is</h2>

<p>Cloudflare Pages is a hosting product specifically designed for static and JAMstack websites. You push your code to GitHub (or GitLab, Bitbucket); Cloudflare detects the push, runs your build pipeline on their infrastructure, and deploys the resulting static files to their global CDN. Every page request thereafter is served from the Cloudflare edge node closest to the visitor.</p>

<p>The "edge" in "edge network" is the meaningful part. Cloudflare runs hundreds of data centers worldwide. A visitor in Colorado Springs hits the Denver node, a visitor in Toronto hits a Toronto node, a visitor in Sydney hits a Sydney node. The latency budget on a static page that lives on the edge is measured in tens of milliseconds rather than the hundreds of milliseconds a typical shared host produces.</p>

<p>The model is fundamentally different from traditional hosting (a single server in a single data center, serving every visitor regardless of geography) and from typical platform hosting (Wix, Squarespace, WordPress.com, where the platform's CDN is part of their broader infrastructure but not the same shape).</p>

<h2>What it costs</h2>

<p>The free tier covers 500 builds per month and unlimited bandwidth. For context: most of my client sites build five to twenty times per month (a build per content update). Bandwidth is the line item that scares people on traditional hosts; on Cloudflare Pages it is unmetered.</p>

<p>For sites with very high traffic or complex build pipelines, the paid tier is $20 per month and increases the build allowance to 5,000 builds. I have never had a small-business client come close to that cap.</p>

<p>The practical cost: zero, for almost every small business website I build. The hosting line on the budget is genuinely free.</p>

<h2>How a deploy actually works</h2>

<p>The flow on every change is straightforward:</p>

<ol>
  <li>I push code to the GitHub repository (or merge a pull request).</li>
  <li>Cloudflare Pages detects the push within a few seconds.</li>
  <li>The build runs in Cloudflare's container infrastructure: Eleventy compiles the templates and content into static HTML, the CSS gets concatenated and minified, the OG cards regenerate, the favicon set is in place, the sitemap is generated, the search index is built.</li>
  <li>The output is uploaded to the global edge network, with each file getting a unique URL based on its content hash.</li>
  <li>The new build becomes live within thirty seconds to two minutes, depending on the build pipeline.</li>
</ol>

<p>For each deploy, Cloudflare keeps a permanent preview URL. If the new build introduces a problem, I can roll back to any previous deploy with one click and the rollback is live within a few seconds. I have never had to use this feature in production, but the safety net is real.</p>

<h2>What the visitor experiences</h2>

<p>From the visitor's perspective, Cloudflare Pages produces three measurable advantages over typical small-business hosting.</p>

<p><strong>Page-load time on the order of 200 to 600 milliseconds.</strong> Real measurement, on real visitor devices, end to end. The Core Web Vitals we measure on every site live comfortably in the green zone for this reason.</p>

<p><strong>Zero downtime during traffic spikes.</strong> The edge network was designed for sites that handle billions of requests per day; an individual small business site is rounding error. A storm-season traffic spike that would slow a traditional host to a crawl barely registers on Cloudflare's infrastructure.</p>

<p><strong>SSL by default, with automatic certificate renewal.</strong> Every site gets HTTPS the day it launches, with the certificate auto-renewed for the life of the engagement. There is no separate SSL fee, no certificate to install manually, no quarterly renewal task to forget.</p>

<h2>What I do not have to think about</h2>

<p>Hosting on Cloudflare Pages eliminates a category of small-business-website maintenance work that would otherwise add up:</p>

<ul>
  <li><strong>No server to patch.</strong> There is no Linux box behind the site that needs security updates.</li>
  <li><strong>No database to back up.</strong> Static files do not have a database.</li>
  <li><strong>No bandwidth surcharge.</strong> A storm-season traffic spike does not produce a surprise bill.</li>
  <li><strong>No DDoS exposure.</strong> Cloudflare's network absorbs any attack that hits a small site as a rounding error in their global capacity.</li>
  <li><strong>No CDN to configure separately.</strong> The CDN is the host.</li>
  <li><strong>No region-specific outage.</strong> If one Cloudflare data center goes down, traffic auto-routes to the next nearest one.</li>
</ul>

<p>The honest implication: a class of operational headaches that traditional hosting produces simply does not exist on this stack. The savings show up not as line items on the budget but as the absence of late-night emergency calls.</p>

<h2>The one trade-off worth knowing</h2>

<p>Static hosting cannot do server-side logic. There is no PHP runtime, no MySQL database, no logged-in dashboard for visitors to access. If a small business needs an account-based feature (a customer portal, an invoice history, a saved-cart shopping experience), static hosting alone cannot provide it.</p>

<p>For most small service businesses, the static-only model is exactly right. The site is a brochure plus a contact form, and the contact form is handled by <a href="/blog/web3forms-contact-and-lead-forms/" class="inline-link">Web3Forms</a> rather than by the hosting layer.</p>

<p>For the rare client that genuinely needs server-side logic (a custom calculator, a dynamic search of inventory, a third-party API integration), Cloudflare Pages includes Cloudflare Workers, the serverless function platform. I can write small server-side endpoints that run alongside the static site, with the same edge-network distribution. The site grader on this site is built this way: static page plus a Worker that calls Google's PageSpeed Insights API.</p>

<h2>Who owns what</h2>

<p>I host every client's site on my own Cloudflare account while the engagement is active. The domain itself is registered in the client's own name at their preferred registrar (GoDaddy, Namecheap, Cloudflare Registrar, whichever they prefer), with DNS pointed at my hosting. The photos, the copy, and the brand assets all remain the client's property throughout.</p>

<p>If the engagement ever ends, the client takes a clean static export of the site that runs on any host with no dependencies, plus full ownership of the domain and the content. There is no exit fee, no migration roadblock, and no missing piece.</p>

<p>The reasoning behind that split: the hosting account stays with me so I can patch things, ship updates, and respond to issues without waiting on credentials to be passed around. The domain and the deliverable stay with the client so the relationship can end cleanly whenever it needs to.</p>

<h2>If your current site is on a slow or expensive host</h2>

<p>The migration to Cloudflare Pages from most platforms is straightforward. The work is mostly:</p>

<ol>
  <li>Get the site source into a clean GitHub repository.</li>
  <li>Configure the build pipeline (most static-site generators have a Pages template).</li>
  <li>Wire DNS to point at Cloudflare.</li>
  <li>Migrate the form backend to Web3Forms (or similar).</li>
  <li>Decommission the old host.</li>
</ol>

<p>For sites I build, this is part of the launch process for any client switching over. The downtime during migration is roughly thirty minutes, and the new site is live on Cloudflare's edge from that point forward.</p>

<p>For sites I do not build, the path depends on the source platform. WordPress sites can be exported to static via plugins like Simply Static, then imported to Pages. Wix and Squarespace sites usually need to be rebuilt rather than migrated, which is where the rebuild conversation starts.</p>
