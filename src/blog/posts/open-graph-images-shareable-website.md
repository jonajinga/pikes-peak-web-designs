---
title: "Open Graph Images: Why Your Links Look Plain"
date: 2026-05-06
label: "Engagement & SEO"
description: "If your links show up as a blank box on Facebook, LinkedIn, or iMessage, the fix is one image and a few meta tags. How I do it on every build."
ctaLabel: "Standard on every build"
ctaHeading: "Per-page Open Graph cards ship with every site I build."
ctaText: "Custom-coded sites with branded share images on every blog post, season page, and key landing page — generated automatically at build time. $175 a month, flat."
layout: layouts/post.njk
tags: [post]
---

<p>Take any link to your website. Paste it into a Facebook status, a LinkedIn post, an iMessage thread, a Slack channel, a Discord server. Look at what shows up.</p>

<p>If your link previews as a blank rectangle, a tiny generic icon, or a low-resolution screenshot of the wrong part of the page, that is an Open Graph problem. It is invisible from your end (you do not see what your visitors see when they share), but it costs real engagement every time someone tries to share your work.</p>

<p>Open Graph images are part of the standard plan on every site I build. This post walks through what they are, why they matter, how I produce one for every key page on every client site, and how you can check your own site in 30 seconds with the free <a href="https://www.opengraph.xyz/" rel="noopener" class="inline-link">OpenGraph.xyz</a> inspector.</p>

<h2>What Open Graph actually is</h2>

<p>Open Graph (OG) is a small set of meta tags Facebook introduced in 2010 to tell social platforms how a webpage should appear when someone shares its link. The standard now extends well beyond Facebook: LinkedIn, X (formerly Twitter), Slack, Discord, iMessage, WhatsApp, Pinterest, Reddit, Microsoft Teams, and the unfurled-link previews in Notion, Roam, and Obsidian all read the same OG tags.</p>

<p>The four tags that matter most:</p>

<ul>
  <li><code>og:title</code> — the headline shown above the link preview.</li>
  <li><code>og:description</code> — one or two lines of preview text.</li>
  <li><code>og:image</code> — the rectangular image that appears alongside (the most visible piece).</li>
  <li><code>og:url</code> — the canonical URL the platform should link to.</li>
</ul>

<p>Twitter / X reads its own near-identical set (<code>twitter:title</code>, <code>twitter:description</code>, <code>twitter:image</code>, <code>twitter:card</code>). LinkedIn, Slack, iMessage, and the rest fall back to the OG tags and render a card from those.</p>

<p>If your site is missing these tags, every shared link defaults to a generic preview: a blank or near-blank box, a thumbnail of whatever image the platform happened to find first, or a low-quality screenshot of the page header. The link is far less likely to be clicked, and the brand impression that comes with the share is wasted.</p>

<h2>What a good Open Graph card looks like</h2>

<p>The technical specification is consistent across every platform that consumes OG:</p>

<ul>
  <li><strong>Image dimensions:</strong> 1200&times;630 pixels exactly. Anything smaller renders as a thumbnail (tiny). Anything larger gets cropped (often badly). The 1.91:1 aspect ratio is the standard for full-width social cards.</li>
  <li><strong>File format:</strong> PNG or JPG. WebP works in some places but not others; PNG is universally safe.</li>
  <li><strong>File size:</strong> Under 5 MB; in practice under 300 KB is ideal so previews render fast.</li>
  <li><strong>Image content:</strong> Some text large enough to read on a phone preview (about 22 point and up at the original 1200&times;630 size), brand identity (logo or wordmark), and ideally a call-to-action element so the shared card feels purposeful.</li>
</ul>

<p>The dimensions matter more than people realize. A site that declares a 2400&times;1260 image (a 2x retina export) often gets <em>rejected</em> by Facebook's preview cache, because the file does not match the declared <code>og:image:width</code> and <code>og:image:height</code> meta tags. The fix is to export at exactly 1200&times;630.</p>

<h2>How I build OG cards for every client site</h2>

<p>The standard plan ships with a per-page Open Graph image generator that runs at build time. The flow is:</p>

<ol>
  <li>Each client gets a brand-aligned OG template at design time. Same fonts as the site, same color palette, same wordmark placement, an explicit call-to-action button. The template is one HTML file with CSS variables for the title and eyebrow text.</li>
  <li>For every blog post, every season landing page, every key conversion page, and the homepage, the build pipeline renders the template with that page's specific title and saves a 1200&times;630 PNG to a per-page path.</li>
  <li>Each page's HTML <code>&lt;head&gt;</code> declares <code>og:image</code> pointing at its own custom card, with <code>og:image:width</code> and <code>og:image:height</code> meta to lock the aspect ratio.</li>
  <li>A small alt-text string is included for screen readers (most platforms ignore it but LinkedIn uses it).</li>
</ol>

<p>The result: every page on the site has a unique, branded share card. When a client posts a link to their roofing-warranty page, the preview shows that page's title rendered onto the brand template with the company logo and a "Get a free inspection" button. The share looks like a polished asset, not a default fallback.</p>

<p>None of this requires the client to do any work. They write the page. The build does the card.</p>

<h2>Why per-page beats a single sitewide image</h2>

<p>A common pattern on small-business websites is one Open Graph image set sitewide: every link, regardless of which page is being shared, previews with the same generic homepage card.</p>

<p>This is better than nothing. It also misses the point.</p>

<p>The Open Graph card is the <em>sales card</em> for the specific page being shared. A blog post about hail damage shared on a community Facebook group should preview with the post's actual title, not "Welcome to ABC Roofing." A service-area page shared in a regional homeowners' forum should preview with that area's name. The link being shared is the link being shared; the preview should reflect the page, not the brand's main marketing pitch.</p>

<p>The lift in click-through rate from per-page OG cards over sitewide cards is real. The Markup, BuzzFeed, and major publishers all run per-page; the reason is that the cards earn the click on engagement-driven platforms.</p>

<h2>How to check your own site in 30 seconds</h2>

<p>The easiest free tool I have found is <a href="https://www.opengraph.xyz/" rel="noopener" class="inline-link">OpenGraph.xyz</a>. The flow:</p>

<ol>
  <li>Visit <a href="https://www.opengraph.xyz/" rel="noopener" class="inline-link">opengraph.xyz</a>.</li>
  <li>Paste the URL of any page on your site (the homepage is fine to start; an individual blog post is more revealing).</li>
  <li>Click "Inspect."</li>
  <li>Read the report.</li>
</ol>

<p>The tool returns a side-by-side preview of how the page will look on Facebook, X, LinkedIn, Discord, and Slack. Each preview shows what the actual platform would render: the image, the title, the description, the URL. If the image is missing, broken, or the wrong size, the preview shows what the visitor would see, which is usually a sad-looking fallback.</p>

<p>The tool also lists the raw OG and Twitter meta tags it found. If <code>og:image</code> is missing, it says so. If the image dimensions do not match the declared <code>og:image:width</code> and <code>og:image:height</code>, the tool flags the mismatch. If the title is too long (over 70 characters tends to truncate on Twitter), the tool flags that too.</p>

<h3>What the most common failures look like</h3>

<p><strong>"og:image is missing."</strong> The site has no Open Graph image at all. Every shared link previews as a blank box. This is the most common finding on small-business sites built five or more years ago, before OG became standard.</p>

<p><strong>"og:image returned a 404."</strong> The site declares an image URL that does not exist on the server. Often happens after a site migration when the meta tag was not updated. The result is the same as missing: blank preview.</p>

<p><strong>"og:image is 2400&times;1260 but og:image:width is 1200." </strong> The image is technically correct but the dimensions do not match the declared meta. Facebook in particular is strict about this and may reject the image entirely.</p>

<p><strong>"og:image is the same on every page."</strong> Sitewide image instead of per-page. Functional but suboptimal. Usually a fixable configuration issue rather than a missing-image problem.</p>

<p><strong>"og:title is the same as the page title but og:description is missing."</strong> Half of the meta is in place. Add the description tag and the previews will show the line of context that was missing.</p>

<h2>How to fix it</h2>

<p>The fix path depends on what platform your site is on.</p>

<p><strong>Custom-coded sites:</strong> Add the meta tags to the page's <code>&lt;head&gt;</code> template. If you are using Eleventy, Next.js, Astro, or any modern static-site generator, every framework has a built-in pattern for this. The build pipeline can also auto-generate the per-page image if you set up a small script. (For my clients, this is part of the standard plan and runs without any client involvement.)</p>

<p><strong>WordPress:</strong> Yoast SEO and Rank Math both handle OG tags out of the box. Both have settings panels for sitewide defaults plus per-post overrides. The image generation is manual unless you use a plugin like Open Graph Image (which is decent but creates an extra plugin dependency).</p>

<p><strong>Wix and Squarespace:</strong> Both platforms handle OG tags automatically and let you upload a per-page image. The catch is that the auto-generated card design is generic and not customizable, so the brand fidelity is low. Squarespace 7.1 is meaningfully better than older Squarespace builds.</p>

<p><strong>Shopify:</strong> Built-in, with theme-level customization. Newer themes do this well; older themes vary.</p>

<h2>The thirty-day argument</h2>

<p>If your site is missing or broken Open Graph data, the lift from fixing it is substantial and shows up within thirty days. Every existing share starts looking right (most platforms re-cache periodically). New shares look right immediately. Click-through rates on shared links measurably increase. The work is small relative to the impact.</p>

<p>The reverse is also true: a site that has been live for years without working OG tags has been quietly losing engagement on every share that has happened in that whole time. The link previews looked broken; the people who saw them assumed the brand was casual about its own marketing. That is an unrecoverable cost on links already shared, and a recoverable one going forward.</p>

<h2>Run the check on your own site</h2>

<p>Two tools, both free, both worth bookmarking:</p>

<ul>
  <li><strong><a href="https://www.opengraph.xyz/" rel="noopener" class="inline-link">opengraph.xyz</a></strong> — the cleanest free OG inspector. Shows previews across five major platforms and flags common failures.</li>
  <li><strong><a href="https://developers.facebook.com/tools/debug/" rel="noopener" class="inline-link">Facebook Sharing Debugger</a></strong> — Meta's own tool. Useful when Facebook has cached an old version of your card and you need to force a refresh. The "Scrape Again" button is the fix for stale Facebook previews.</li>
</ul>

<p>Run them on your homepage, then on three or four interior pages (a service page, a blog post, a case study, a contact page). The differences across pages tell you whether the implementation is sitewide or per-page. The presence or absence of an image tells you whether the implementation is there at all.</p>

<p>If the report comes back with missing tags, broken images, or sitewide cards where you would benefit from per-page, that is a real opportunity to improve. The fix is not expensive in any of the platforms above, and the return on getting it right shows up the next time someone shares one of your links.</p>
