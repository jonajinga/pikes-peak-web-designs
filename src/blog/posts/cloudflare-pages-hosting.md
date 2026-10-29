---
title: "Cloudflare Pages: Where I Host Every Site I Build"
date: 2026-05-13
label: "The Stack"
description: "Cloudflare Pages makes a fast, secure site, served from all over the world, possible at almost no cost. Here's how I use it."
ctaLabel: "Hosting in the standard plan"
ctaHeading: "I host every site on Cloudflare's worldwide network"
ctaText: "Your site gets a free security certificate, fast delivery worldwide, and a fresh copy published every time I make a change, with no bandwidth charges. Hosting is part of the standard plan, with no separate fee."
layout: layouts/post.njk
tags: [post]
---

<p>Nobody thinks about hosting until it goes wrong. The site is up, the pages load, and the email forwards. Then traffic jumps during storm season or after a news story, the host slows to a crawl, and the next conversation gets uncomfortable.</p>

<p>Every site I build lives on <a href="https://pages.cloudflare.com" rel="noopener" class="inline-link">Cloudflare Pages</a>, Cloudflare's hosting service for static sites, which are sites made of ready-built files.</p>

<h2>What Cloudflare Pages is</h2>

<p>Cloudflare Pages hosts static and JAMstack websites, both built ahead of time as plain files. I send my code changes to GitHub, a service that stores code and its history (GitLab and Bitbucket work too). Cloudflare notices the change, builds the site on its own computers, and copies the finished files to its content delivery network (CDN). From then on, each page loads from the Cloudflare location nearest the visitor.</p>

<p>That nearness is what "edge network" means. Cloudflare runs hundreds of data centers worldwide, so a visitor in Colorado Springs reaches the Denver location, and visitors in Toronto and Sydney reach local ones. A static page served this close arrives in tens of milliseconds instead of the hundreds a typical shared host takes.</p>

<p>This works differently from traditional hosting, where one server in one data center serves every visitor wherever they are. It also differs from platform hosting on Wix, Squarespace, or WordPress.com, where the delivery network is part of the platform's larger system and built for its needs.</p>

<h2>What it costs</h2>

<p>The free tier covers 500 builds a month and unlimited bandwidth, the amount of data visitors download. Most of my client sites build five to 20 times a month, once per content update. Bandwidth is the charge that scares people on traditional hosts, and Cloudflare Pages doesn't meter it.</p>

<p>For sites with heavy traffic or complicated builds, the paid tier costs $20 a month and raises the limit to 5,000 builds. No small-business client of mine has come close to that limit.</p>

<p>In practice, hosting costs nothing for almost every small-business site I build.</p>

<h2>How a deploy works</h2>

<p>Here's what happens each time I publish a change (a deploy):</p>

<ol>
  <li>I send the code change to the site's GitHub repository, its storage folder, or approve a proposed change (a pull request).</li>
  <li>Cloudflare Pages notices within a few seconds.</li>
  <li>Cloudflare builds the site. Eleventy turns the templates and content into finished pages, the style files are combined and shrunk, and the share images are remade. The icon set is checked, and the sitemap and search index are created.</li>
  <li>The finished files go out to the worldwide network, each with a unique address based on its contents.</li>
  <li>The new version goes live within 30 seconds to two minutes, depending on the build.</li>
</ol>

<p>Cloudflare keeps a permanent preview address for every deploy. If a new version causes a problem, I can roll back to any earlier one with one click, and it's live within seconds. I've never needed this on a live site, but it's there.</p>

<h2>What the visitor experiences</h2>

<p>Visitors get three measurable advantages over typical small-business hosting.</p>

<p><strong>Pages load in about 200 to 600 milliseconds.</strong> That's measured on visitors' own devices, from start to finish. It's why every site I measure scores well in the green on Core Web Vitals, Google's page-experience scores.</p>

<p><strong>Zero downtime during traffic spikes.</strong> Cloudflare's network handles billions of requests a day, so a single small-business site barely registers. A storm-season rush that would slow a traditional host to a crawl hardly shows up.</p>

<p><strong>A security certificate by default, renewed on its own.</strong> Every site gets HTTPS, the padlock in the address bar, on launch day, and the certificate (SSL) renews automatically for as long as you're a client. There's no separate fee, nothing to install, and no renewal date to forget.</p>

<h2>What I do not have to think about</h2>

<p>Cloudflare Pages removes a whole category of upkeep that adds up on other hosts:</p>

<ul>
  <li><strong>No server to patch.</strong> No Linux computer sits behind the site waiting for security updates.</li>
  <li><strong>No database to back up.</strong> A site made of static files has no database.</li>
  <li><strong>No bandwidth surcharge.</strong> A storm-season rush doesn't bring a surprise bill.</li>
  <li><strong>No DDoS exposure.</strong> In a DDoS attack, someone floods a site with fake traffic, and Cloudflare's network absorbs an attack on a small site with ease.</li>
  <li><strong>No CDN to set up separately.</strong> The CDN is the host.</li>
  <li><strong>No regional outage.</strong> If one Cloudflare data center goes down, traffic moves to the next nearest one automatically.</li>
</ul>

<p>A set of problems that traditional hosting causes doesn't exist here. The savings don't show up as lines on a budget; they show up as late-night emergency calls you never get.</p>

<h2>The one trade-off worth knowing</h2>

<p>Static hosting can't run programs on the server. There's no PHP, no MySQL database, and no logged-in dashboard for visitors. If a small business needs accounts, such as a customer portal, invoice history, or a shopping cart that remembers items, static hosting alone can't provide them.</p>

<p>For most small service businesses, the static model is exactly right. The site is a brochure plus a contact form, and <a href="/blog/web3forms-contact-and-lead-forms/" class="inline-link">Web3Forms</a> handles the form instead of the host.</p>

<p>The rare client who needs work done on a server might want a custom calculator, a live inventory search, or a connection to another company's system. For them, Cloudflare offers Workers, small programs that run on its network alongside the static site. For example, a static page can use a Worker to fetch live speed scores from Google's PageSpeed Insights service.</p>

<h2>Who owns what</h2>

<p>While you're on the plan, I host your site on my own Cloudflare account, and I own the code. Your domain is registered in your own name at the registrar you prefer, such as GoDaddy, Namecheap, or Cloudflare Registrar. Its address settings (DNS) point to my hosting, and your photos, text, and brand assets stay yours throughout.</p>

<p>If you cancel, I help you move the domain to a registrar of your choice, and the website goes offline at the end of the term. There's no export of the site and no code buyout, and the plain-English service agreement says so before you sign.</p>

<p>Here's the reason for that split. The hosting account stays with me so I can fix problems and publish updates without waiting for passwords to change hands. The domain stays in your name, so you control your web address whatever happens.</p>

<h2>If your current site is on a slow or expensive host</h2>

<p>Moving to Cloudflare Pages from most platforms is straightforward. The work is mostly:</p>

<ol>
  <li>Put the site's code in a clean GitHub repository.</li>
  <li>Set up the build (most static-site generators have a ready-made Pages setup).</li>
  <li>Point the domain's DNS to Cloudflare.</li>
  <li>Move the forms to Web3Forms or a similar service.</li>
  <li>Shut down the old host.</li>
</ol>

<p>For clients switching to a site I build, this is part of the launch. The site is down for about 30 minutes during the move, and from then on it's live on Cloudflare's network.</p>

<p>For sites I don't build, the path depends on the platform. A WordPress site can be turned into static files with a plugin like Simply Static and then moved to Pages. Wix and Squarespace sites usually need a rebuild rather than a move, which is where the rebuild conversation starts.</p>
