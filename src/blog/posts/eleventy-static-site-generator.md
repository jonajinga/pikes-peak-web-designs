---
title: "Eleventy: The Static-Site Generator I Build On"
date: 2026-05-14
label: "The Stack"
description: "Eleventy is the build tool that turns templates and content into the fast, plain web pages every site I build runs on. Here's what it is and why I chose it."
ctaLabel: "Proven tools, by design"
ctaHeading: "Every site I build runs on Eleventy"
ctaText: "Your site needs no content management system, no database, and no plugin bills. Every change I make becomes clean, plain web pages within minutes, so the site stays stable and fast."
layout: layouts/post.njk
tags: [post]
---

<p>If you click "View source" on any page of a site I build, the HTML code you see was made by Eleventy. It's a small, free, open-source tool that turns templates and content into static HTML files, plain pages that are built ahead of time. Eleventy is the build step of every project I launch. Visitors never touch it: it runs on my computer or on Cloudflare's build servers to make the files that then go out on Cloudflare's worldwide network.</p>

<p>For a small-business client, the build tool is as invisible as a carpenter's tools are to a homeowner, because what matters is the finished house. But the tool shapes the site's lifetime cost, how fast changes go live, and how easily another developer could work on it. It also decides how quickly things break when the platform underneath changes, so I'll explain the choice once.</p>

<h2>What Eleventy is</h2>

<p><a href="https://www.11ty.dev" rel="noopener" class="inline-link">Eleventy</a>, often shortened to 11ty, is a static-site generator. You write the site as templates (the layout shared across pages) and content (the words and structure of each page). Eleventy combines them into a folder of plain HTML files, ready to publish.</p>

<p>The result is just files. There's no database, no code running on the server, no PHP, and no JavaScript framework rebuilding the page in the browser. The browser reads the HTML and shows it directly, the way the web was first designed to work.</p>

<p>That sounds primitive in 2026. It's also why the sites I build score 95 to 100 on Google's PageSpeed test and never need a security patch. They also sit well in the green on all of Google's Core Web Vitals speed scores.</p>

<h2>Why I picked it over the alternatives</h2>

<p>Static-site generators are a small, mature category. The leading options in 2026 are Astro, Eleventy, Hugo, Jekyll, and Next.js (in its static-export mode). I've used most of them, and I picked Eleventy for four reasons.</p>

<p><strong>It is small.</strong> The tool itself is about 250 KB of JavaScript, and it's fast: a 200-page site rebuilds in two seconds. I can read all of its code if something behaves oddly, and a change to a site takes only as long as saving a file.</p>

<p><strong>It does not impose a programming model.</strong> Astro and Next.js want you to build with their components in a set way, and Eleventy has no such opinion. I can write templates in Nunjucks (which I do), Liquid, Handlebars, Markdown, or plain HTML, or mix them in one project. That freedom helps most when I need something the tool's authors didn't anticipate.</p>

<p><strong>It produces clean HTML.</strong> Astro, Next.js, and Hugo wrap their output in extra code of their own, such as scripts and build leftovers, which adds weight to every page sent to the browser. Eleventy outputs only what I wrote, so a page that's 6 KB of HTML in my files is 6 KB when it reaches the visitor.</p>

<p><strong>It is conservative about its dependencies.</strong> Eleventy relies on only a short list of other software packages (its dependencies), and its maintainers are slow to add more. So it doesn't break every six weeks because some package it relies on rewrote itself. One of my old builds from Eleventy 0.7 still builds today.</p>

<h2>What this means for a client</h2>

<p>The choice of build tool gives clients three concrete benefits:</p>

<p><strong>Nothing ties the site to one company.</strong> Eleventy is small enough that any developer can learn it in a weekend. It needs no Eleventy-only cloud services, private build steps, or licensed templates, and the project is just a folder of files. On my plan, I own that code while you're a client, and the service agreement spells out what happens if you cancel.</p>

<p><strong>The site keeps working over time.</strong> Eleventy projects from five years ago still build today with small changes. By contrast, WordPress themes can break when the PHP version updates, and React-based tools have reinvented themselves between major versions.</p>

<p><strong>Build times stay fast.</strong> Adding 100 pages doesn't noticeably slow the build. Adding a blog post takes two steps: I save the file and watch the browser refresh in two seconds. That speed adds up across thousands of small updates over the years you're a client.</p>

<h2>How a typical Eleventy project looks</h2>

<p>A small-business website on Eleventy is a few folders of files:</p>

<ul>
  <li><strong><code>src/_includes/layouts/</code></strong>: the shared layouts (header, footer, and the outer frame of each page).</li>
  <li><strong><code>src/_includes/partials/</code></strong>: small reusable pieces, such as the contact form, the menu, and the footer.</li>
  <li><strong><code>src/_data/</code></strong>: JavaScript files that hold structured data, such as the site settings, the menu links, and details about each service area.</li>
  <li><strong><code>src/blog/posts/</code></strong>: blog posts as Markdown files, one per post.</li>
  <li><strong><code>src/</code></strong>: every other page (home, about, contact, and services), each as a single Nunjucks or Markdown file.</li>
  <li><strong><code>src/assets/</code></strong>: images, style files, and JavaScript that pass straight through to the finished site.</li>
</ul>

<p>The folder structure is the site structure. A new page is a new file, and a new blog post is a new Markdown file in the posts folder. You think in files and folders, with no admin panel on top.</p>

<h2>What this skips</h2>

<p>Building on Eleventy lets me skip a whole category of work that platforms like WordPress require:</p>

<ul>
  <li>No theme update cycle.</li>
  <li>No chart of which plugins work with which.</li>
  <li>No PHP version upgrades.</li>
  <li>No database to move when changing hosts.</li>
  <li>No admin-panel security patches.</li>
  <li>No emergency calls because a WordPress update broke the site.</li>
</ul>

<p>The site has no parts where those problems can start, so they don't happen.</p>

<h2>What it cannot do</h2>

<p>Eleventy has two limits:</p>

<p><strong>Eleventy cannot run server-side logic.</strong> A static site is, by definition, just files, so anything that has to happen when a visitor asks for a page lives outside Eleventy. That includes form handling, search, and changing content. I use <a href="/blog/web3forms-contact-and-lead-forms/" class="inline-link">Web3Forms</a> for forms and Cloudflare Workers, small programs on Cloudflare's network, for live features. Search uses Pagefind, which builds its index when the site is published and runs in the browser.</p>

<p><strong>Eleventy is not a CMS.</strong> A content management system (CMS) lets you edit pages through a web admin, and Eleventy doesn't include one. For most of my clients, that's no problem, since they email me their changes and I make them quickly. For clients who want to log in and edit pages themselves, I can add a separate editing tool such as Decap or Statamic, or switch to different tools entirely.</p>

<p>For most service businesses, the static approach is exactly right. The site changes a few times a month, the changes are small, and emailing me is faster than logging in to an admin panel.</p>

<h2>Why this matters for the lifetime cost of the site</h2>

<p>Hosting cost on Cloudflare Pages: free.<br>
Plugin cost: zero.<br>
Theme licensing cost: zero.<br>
Database hosting cost: zero.<br>
Speed plugin cost: zero.<br>
Security plugin cost: zero.<br>
Backup service cost: zero (the code is stored in Git, which keeps every version, and the site can be rebuilt from it at any time).</p>

<p>The behind-the-scenes cost of running a typical Eleventy site is zero. What you pay for is my time, on the standard plan. The only outside service that ever costs money is Web3Forms' optional paid tier, for a client who receives more than 250 form submissions a month.</p>

<p>A typical WordPress small-business site, by comparison, often costs $30 to $80 a month for hosting, plugin licenses, a premium theme, a backup service, and a security service. It also usually needs a developer now and then to handle the upkeep those layers create.</p>

<h2>If your current site is on a heavier platform</h2>

<p>Moving to a static-site generator like Eleventy takes substantial work, but it pays for itself over the life of the site. When I rebuild a site, the move is part of the rebuild. For a site that's otherwise healthy on its current platform, the move is rarely worth it alone, and the value comes when a rebuild is happening anyway.</p>

<p>If you run a small-business site on WordPress and its upkeep has become a steady frustration, it's worth a conversation. The standard plan covers the rebuild, the move, the new hosting, and the new analytics, all for one flat monthly rate.</p>
