---
title: "Open Graph Images: Why Your Links Look Plain"
date: 2026-05-06
label: "Engagement & SEO"
description: "If your links show up as a blank box on Facebook, LinkedIn, or iMessage, the fix is one image and a few meta tags. Here's how I handle it on every site."
ctaLabel: "Standard on every build"
ctaHeading: "Every site I build has a share card for each page"
ctaText: "Custom-coded sites with branded share images on every blog post, season page, and key landing page, made automatically when the site is built. It's $175 a month, flat."
layout: layouts/post.njk
tags: [post]
---

<p>Paste a link to your website into a Facebook post, a LinkedIn post, an iMessage thread, a Slack channel, or a Discord server, and look at what shows up.</p>

<p>If the preview is a blank rectangle, a tiny generic icon, or a blurry screenshot of the wrong part of the page, you have an Open Graph problem. You can't see it from your end, but it costs you clicks every time someone shares your work.</p>

<p>Open Graph images are part of the standard plan on every site I build. Here's what they are, how I make them, and how to check your site in 30 seconds with the free <a href="https://www.opengraph.xyz/" rel="noopener" class="inline-link">OpenGraph.xyz</a> inspector.</p>

<h2>What Open Graph is</h2>

<p>Open Graph (OG) is a small set of meta tags, hidden labels in a page's code, that Facebook introduced in 2010 to tell social platforms how a shared link should look. Far more than Facebook reads them now: LinkedIn, X (formerly Twitter), Slack, Discord, iMessage, WhatsApp, Pinterest, Reddit, Microsoft Teams, and the link previews in Notion, Roam, and Obsidian.</p>

<p>The four tags that matter most:</p>

<ul>
  <li><code>og:title</code>: the headline above the preview.</li>
  <li><code>og:description</code>: one or two lines of preview text.</li>
  <li><code>og:image</code>: the rectangular image beside it, the most visible piece.</li>
  <li><code>og:url</code>: the main address the platform should link to.</li>
</ul>

<p>X reads its own nearly identical set (<code>twitter:title</code>, <code>twitter:description</code>, <code>twitter:image</code>, <code>twitter:card</code>). LinkedIn, Slack, iMessage, and the rest build their preview card from the OG tags.</p>

<p>Without these tags, a shared link gets a generic preview: a blank box, whatever image the platform found first, or a poor screenshot of the header. Far fewer people click it.</p>

<h2>What a good Open Graph card looks like</h2>

<p>Every platform that reads OG uses the same specification:</p>

<ul>
  <li><strong>Image dimensions:</strong> exactly 1200&times;630 pixels. Smaller images show as tiny thumbnails, and larger ones get cropped, often badly. That 1.91:1 shape is the standard for full-width social cards.</li>
  <li><strong>File format:</strong> PNG or JPG. WebP works in some places but not others, and PNG works everywhere.</li>
  <li><strong>File size:</strong> under 5 MB, and ideally under 300 KB so previews load fast.</li>
  <li><strong>Image content:</strong> text large enough to read in a phone preview (about 22 point and up at full size) and your logo or business name. Ideally, add a button-style call to action so the card has a purpose.</li>
</ul>

<p>The dimensions matter more than people expect. If a site lists a 2400&times;1260 image (a double-size export for sharp screens), Facebook's preview system often <em>rejects</em> it. The file doesn't match the size stated in the <code>og:image:width</code> and <code>og:image:height</code> tags. Export at exactly 1200&times;630.</p>

<h2>How I build OG cards for every client site</h2>

<p>The standard plan includes a tool that makes an Open Graph image for each page whenever the site is built:</p>

<ol>
  <li>During design, each client gets an OG template that matches the site: the same fonts, colors, and logo placement, plus a call-to-action button. The template is one HTML file, with style settings (CSS variables) for the title and the small label above it.</li>
  <li>For every blog post, season page, key sales page, and the homepage, the build process fills the template with that page's title and saves a 1200&times;630 PNG for that page.</li>
  <li>Each page's <code>&lt;head&gt;</code>, the hidden top section of its code, points <code>og:image</code> at its own card and states its size with <code>og:image:width</code> and <code>og:image:height</code>.</li>
  <li>A short text description of the image (alt text) is included for screen readers. Most platforms ignore it, but LinkedIn uses it.</li>
</ol>

<p>So every page has its own branded share card. When a client posts a link to their roofing-warranty page, the preview shows that page's title on their template, with the company logo and a "Get a free inspection" button. The client writes the page, and the build makes the card.</p>

<h2>Why per-page beats a single sitewide image</h2>

<p>Many small-business sites set one Open Graph image for the whole site, so every link previews with the same homepage card. That's better than nothing, but it misses the point.</p>

<p>The card is the <em>sales pitch</em> for the page being shared. A blog post about hail damage, shared in a community Facebook group, should preview with the post's title instead of "Welcome to ABC Roofing." A service-area page shared in a regional homeowners' forum should show that area's name. The preview should match the page, not the company's main pitch.</p>

<p>Per-page cards earn more clicks than a sitewide card. The Markup, BuzzFeed, and other major publishers all use them for that reason.</p>

<h2>How to check your own site in 30 seconds</h2>

<p>The easiest free tool I've found is <a href="https://www.opengraph.xyz/" rel="noopener" class="inline-link">OpenGraph.xyz</a>:</p>

<ol>
  <li>Visit <a href="https://www.opengraph.xyz/" rel="noopener" class="inline-link">opengraph.xyz</a>.</li>
  <li>Paste the address of any page on your site (the homepage is fine to start; a blog post tells you more).</li>
  <li>Click "Inspect."</li>
  <li>Read the report.</li>
</ol>

<p>The tool shows how the page will look on Facebook, X, LinkedIn, Discord, and Slack, side by side, with the image, title, description, and address. If the image is missing, broken, or the wrong size, you'll see the same poor fallback your visitors see.</p>

<p>It also lists the OG and Twitter tags it found and flags problems, such as a missing <code>og:image</code>, image dimensions that don't match <code>og:image:width</code> and <code>og:image:height</code>, or a title over about 70 characters, which X often cuts off.</p>

<h3>What the most common failures look like</h3>

<p><strong>"og:image is missing."</strong> Every shared link previews as a blank box. This is the most common finding on small-business sites built five or more years ago, before OG became standard.</p>

<p><strong>"og:image returned a 404."</strong> The tag points to an image that isn't on the server (a "404" means "not found"). This often happens after a move to a new site when the tag wasn't updated, and the result is the same blank preview.</p>

<p><strong>"og:image is 2400&times;1260 but og:image:width is 1200." </strong> The image works, but its size doesn't match the tag. Facebook is strict about this and may reject the image.</p>

<p><strong>"og:image is the same on every page."</strong> One image serves the whole site. It works, and it's usually a setting to change rather than a missing image.</p>

<p><strong>"og:title is the same as the page title but og:description is missing."</strong> Half the tags are in place. Add the description, and previews will show the missing line of context.</p>

<h2>How to fix it</h2>

<p>The fix depends on your platform.</p>

<p><strong>Custom-coded sites:</strong> Add the tags to the page's <code>&lt;head&gt;</code> template. Eleventy, Next.js, Astro, and other modern site-building tools each have a standard way to do this, and a small script can make the per-page images automatically. (For my clients, this is part of the standard plan and needs nothing from them.)</p>

<p><strong>WordPress:</strong> Yoast SEO and Rank Math both handle OG tags out of the box, with sitewide defaults and settings for each post. The images are made by hand unless you add a plugin such as Open Graph Image, which works but adds one more plugin to maintain.</p>

<p><strong>Wix and Squarespace:</strong> Both handle OG tags automatically and let you upload an image for each page. The card design they generate can't be customized, so it doesn't look much like your brand. Squarespace 7.1 is noticeably better than older versions.</p>

<p><strong>Shopify:</strong> OG is built in and can be adjusted in the theme. Newer themes do it well; older ones vary.</p>

<h2>The thirty-day argument</h2>

<p>If your Open Graph data is missing or broken, fixing it pays off within 30 days. Old shares start looking right as platforms refresh their saved copies, new shares look right at once, and more people click shared links.</p>

<p>A site live for years without working OG tags has lost clicks on every share in that time. People who saw the broken previews assumed the business was careless about its marketing. You can't recover those shares, but you can fix every one from now on.</p>

<h2>Run the check on your own site</h2>

<p>Two free tools, both worth bookmarking:</p>

<ul>
  <li><strong><a href="https://www.opengraph.xyz/" rel="noopener" class="inline-link">opengraph.xyz</a></strong>: the cleanest free OG inspector. It previews five major platforms and flags common failures.</li>
  <li><strong><a href="https://developers.facebook.com/tools/debug/" rel="noopener" class="inline-link">Facebook Sharing Debugger</a></strong>: Meta's own tool, useful when Facebook has saved an old version of your card. The "Scrape Again" button makes it refresh.</li>
</ul>

<p>Run them on your homepage, then on three or four inner pages, such as a service page, a blog post, a case study, and a contact page. If the cards differ by page, your site uses per-page cards; if there's no image at all, the tags are missing.</p>

<p>If the report shows missing tags, broken images, or one card for every page, the fix is inexpensive on every platform above, and it pays off the next time someone shares your link.</p>
