---
title: "Eleventy: The Static-Site Generator I Build On"
date: 2026-05-14
label: "The Stack"
description: "Eleventy is the build tool that turns templates and content into the fast, static HTML every site I deliver runs on. Here is what it is and why I picked it."
ctaLabel: "Boring infrastructure, by design"
ctaHeading: "Every site I build runs on Eleventy."
ctaText: "No CMS, no database, no plugin tax. Templates and Markdown compile to clean static HTML on every push. Stable, fast, and yours to take with you."
layout: layouts/post.njk
tags: [post]
---

<p>If you click "view source" on any page of any site I build, the HTML you see was produced by Eleventy, a small open-source tool that compiles templates and content into static HTML files. Eleventy is the build layer of every project I ship. It does not run in production (the visitor never touches it); it runs on my computer or on Cloudflare's build infrastructure to produce the files that then live on the edge network.</p>

<p>For a small-business client, the choice of build tool is invisible the way the choice of carpentry tools is invisible to a homeowner. What matters is the finished house. But the build tool shapes the lifetime cost of the site, the speed of changes, the ease of moving to another developer, and how quickly things break when the platform changes underneath. So I am going to walk through the choice once.</p>

<h2>What Eleventy is</h2>

<p><a href="https://www.11ty.dev" rel="noopener" class="inline-link">Eleventy</a> (often shortened to 11ty) is a static-site generator. You write your site as a set of templates (the layout shared across pages) and content (the actual page-by-page words and structure), and Eleventy combines them into a folder of plain HTML files ready to deploy.</p>

<p>The output is just files. No database. No server-side logic. No PHP runtime. No JavaScript framework hydrating in the browser. Just HTML that the browser can parse and render directly, the way the web was originally designed to work.</p>

<p>This sounds primitive in 2026. It is also the reason the sites I build load in well under a second on a phone, score 95 to 100 on Google PageSpeed, and never need a security patch.</p>

<h2>Why I picked it over the alternatives</h2>

<p>Static-site generators are a small and mature category. The leading options in 2026 are Astro, Eleventy, Hugo, Jekyll, and Next.js (in static-export mode). I have used most of them; I picked Eleventy for four specific reasons.</p>

<p><strong>It is genuinely small.</strong> The framework itself is around 250 KB of JavaScript. The build is fast (a 200-page site rebuilds in two seconds). I can read the entire codebase if something behaves unexpectedly. The minimum-viable-change loop on a site is the time to save a file.</p>

<p><strong>It does not impose a programming model.</strong> Astro and Next.js both want you to use components in a specific way. Eleventy does not have an opinion. I can write templates in Nunjucks (which I do), in Liquid, in Handlebars, in Markdown, in plain HTML, or mix all of them in the same project. The flexibility shows up most when I need to do something the framework's authors did not anticipate.</p>

<p><strong>It produces clean HTML.</strong> Astro, Next.js, and Hugo all wrap the output in framework-specific markup, hydration scripts, or build-system breadcrumbs that bloat the bytes shipped to the browser. Eleventy outputs only what I wrote. If a page is 6 KB of HTML in source, it is 6 KB on the wire.</p>

<p><strong>It is conservative about its dependencies.</strong> Eleventy itself has a short list of dependencies, and the maintainers are slow to add more. The result is a build tool that does not break every six weeks because some upstream package decided to rewrite its API. I have a build of mine running on Eleventy 0.7 in the way-back, and it still builds today.</p>

<h2>What this means for a client</h2>

<p>The build-tool choice produces three concrete client-facing benefits:</p>

<p><strong>The site is portable.</strong> If the client ever wants to move to another developer, Eleventy is a small enough framework that the next developer can learn it in a weekend if they have not already. There are no Eleventy-specific cloud services, no proprietary cloud build steps, no licensed templates to extricate. The repo is just a folder of files.</p>

<p><strong>The site keeps working over time.</strong> Eleventy projects from five years ago still build today with minimal changes. Compare to WordPress sites where the theme breaks every PHP-version update, or to React-based stacks where the framework reinvented itself between major versions.</p>

<p><strong>Build times stay fast.</strong> Adding a hundred pages to a site does not slow the build noticeably. The dev loop on adding a new blog post is "save the markdown file, watch the browser refresh in two seconds." That speed compounds across thousands of small updates over the lifetime of the engagement.</p>

<h2>How a typical Eleventy project looks</h2>

<p>A small business website on Eleventy is a few directories of files:</p>

<ul>
  <li><strong><code>src/_includes/layouts/</code></strong> — the shared layouts (header, footer, base wrapper).</li>
  <li><strong><code>src/_includes/partials/</code></strong> — small reusable HTML fragments (the contact form, the navigation, the footer).</li>
  <li><strong><code>src/_data/</code></strong> — JavaScript files exporting structured data (the site config, the navigation links, the service-area metadata).</li>
  <li><strong><code>src/blog/posts/</code></strong> — blog posts as Markdown files, one per post.</li>
  <li><strong><code>src/</code></strong> — every other page (home, about, contact, services), each as a single Nunjucks or Markdown file.</li>
  <li><strong><code>src/assets/</code></strong> — images, CSS, JavaScript that pass through to the build output.</li>
</ul>

<p>The folder structure is the site structure. A new page is a new file. A new blog post is a new Markdown file in the posts directory. The mental model is the file system; there is no admin panel layered on top.</p>

<h2>What this skips</h2>

<p>By building on Eleventy, I get to skip a category of work that platforms like WordPress require:</p>

<ul>
  <li>No theme update cycle.</li>
  <li>No plugin compatibility matrix.</li>
  <li>No PHP version migrations.</li>
  <li>No database migration when changing hosts.</li>
  <li>No admin-panel security patches.</li>
  <li>No "WordPress core update bricked the site" emergency calls.</li>
</ul>

<p>The site does not have surfaces for any of those things to break, so they do not break.</p>

<h2>What it cannot do</h2>

<p>Honest limits:</p>

<p><strong>Eleventy cannot run server-side logic.</strong> A static site is, by definition, just files. Anything that needs to happen at request time (form processing, search, dynamic content) lives outside Eleventy. I use <a href="/blog/web3forms-contact-and-lead-forms/" class="inline-link">Web3Forms</a> for forms, Cloudflare Workers for dynamic endpoints, and Pagefind (built at deploy time, runs in the browser) for search.</p>

<p><strong>Eleventy is not a CMS.</strong> Clients who want to edit pages through a web admin do not get that out of the box. For most of my clients, this is not an issue (they email me with changes and the change lands quickly), but for clients who specifically want to log in and edit pages themselves, I can layer a headless CMS like Decap or Statamic on top, or pivot to a different stack entirely.</p>

<p>For most service businesses, the static model is exactly right. The site changes a few times a month, the changes are small, and the email-driven update workflow is faster than logging into an admin panel.</p>

<h2>Why this matters for the lifetime cost of the site</h2>

<p>Hosting cost on Cloudflare Pages: free.<br>
Plugin cost: zero.<br>
Theme licensing cost: zero.<br>
Database hosting cost: zero.<br>
Performance optimization plugin cost: zero.<br>
Security plugin cost: zero.<br>
Backup-service cost: zero (the source is in Git; the build is reproducible).</p>

<p>The infrastructure cost of running a typical Eleventy site is genuinely zero. The cost of the engagement is the cost of my time, on the standard plan, and the only third-party service that costs money is the optional Web3Forms paid tier when a client exceeds 250 form submissions per month.</p>

<p>Compare to a typical WordPress small-business site, which often runs $30 to $80 per month in hosting + plugin licenses + premium theme + backup service + security service, and which typically needs a periodic developer engagement to handle the maintenance the platform layers create.</p>

<h2>If your current site is on a heavier platform</h2>

<p>The migration to a static-site generator like Eleventy is a real piece of work, but it pays back over the lifetime of the site. For sites I rebuild, the migration is just the rebuild itself. For sites that are otherwise healthy on their current platform, the migration is rarely worth doing on its own; the value comes when the rebuild is happening anyway.</p>

<p>If you are running a small-business site on WordPress and the maintenance overhead has become a recurring frustration, the conversation is worth having. The standard plan covers the rebuild, the migration, the new hosting, and the new analytics, all in one engagement, at one flat rate.</p>
