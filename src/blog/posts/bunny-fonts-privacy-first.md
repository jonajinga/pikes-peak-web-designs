---
title: "Bunny Fonts: A Privacy-First Alternative to Google"
date: 2026-05-16
label: "The Stack"
description: "Google Fonts looks free, but the privacy cost is the visitor's IP address logged to Google on every pageview. Bunny Fonts is the cleaner alternative I use."
ctaLabel: "Privacy by default"
ctaHeading: "Cookie-free fonts on every site I build."
ctaText: "I serve every web font through Bunny Fonts so visitors never get logged to a third party. Part of the standard plan, no extra fee, no consent banner needed for fonts alone."
layout: layouts/post.njk
tags: [post]
---

<p>Web fonts are one of those parts of a website that look free until you read the fine print. Google Fonts is the dominant option, used on tens of millions of sites, marketed as a free service for designers. The actual transaction is that on every page load, the visitor's IP address gets sent to Google's servers in exchange for the font file. That data exchange is real, the privacy implications are real, and the legal exposure under EU and Canadian privacy laws is real enough that German courts have already issued judgments against websites for using Google Fonts without consent.</p>

<p>Bunny Fonts is the cleaner alternative I run on every site I build. It serves the exact same open-source fonts as Google, with no logging, no IP tracking, no consent gate, and no measurable difference in performance. This post explains what it is, why I switched, and what the practical difference is for a small business website.</p>

<h2>What Bunny Fonts is</h2>

<p>Bunny Fonts is a privacy-respecting font CDN run by Bunny.net (a Slovenian content-delivery network). It hosts the same Google Fonts open-source library — the same families, the same weights, the same character sets — and serves them with the same browser-cacheable performance characteristics. The technical experience for the developer is nearly identical to Google Fonts: same syntax, same flexibility, same coverage.</p>

<p>The difference is what happens at the network layer. Bunny Fonts logs nothing about the visitor. No IP address retention, no analytics about which fonts are loaded on which sites, no behavioral data collection of any kind. The font file gets served, the browser caches it, and the transaction ends there.</p>

<h2>Why this matters in 2026</h2>

<p>The Google Fonts privacy issue is not theoretical. In January 2022 a German court ruled that a website embedding Google Fonts without consent had violated GDPR by transmitting visitor IP addresses to a US company. The court awarded damages to the plaintiff, who promptly filed thousands of similar claims against German websites. The pattern repeated in Austria and France within the year, and copycat litigation has been spreading through the EU since.</p>

<p>For a U.S. or Canadian small business that does not actively serve EU customers, the direct legal risk is low. But the broader privacy posture matters, and the global trajectory is clear: more jurisdictions are passing privacy laws that treat third-party data transmission as a regulated act. Quebec's Law 25, the various U.S. state privacy laws (California, Virginia, Colorado, Connecticut, Utah, and more arriving each year), and the federal data-broker rules all push in the same direction.</p>

<p>The cleanest answer is to stop transmitting visitor data to third parties unless there is a genuine reason. Web fonts do not need to send anything to Google to function. They never did.</p>

<h2>Performance: the surprising part</h2>

<p>The argument I see most for Google Fonts is that it is faster than self-hosting because Google's CDN is global and their files are heavily optimized. That argument was true a decade ago. It is not true today.</p>

<p>Bunny Fonts runs on Bunny.net's global CDN, which has the same edge-network distribution as Cloudflare, Fastly, and Google. The font files are byte-for-byte identical to Google's (same WOFF2 format, same compression). The browser-cache benefits Google used to claim are now mostly irrelevant because modern browsers partition cache by site, not by URL — meaning a cached Google Font from Site A is no longer reused on Site B in Chrome, Safari, or Firefox.</p>

<p>In real-world Lighthouse measurement on the sites I build, Bunny Fonts produces page loads indistinguishable from Google Fonts. The Largest Contentful Paint, the time to first byte, the font-display behavior — all measure the same. There is no performance trade for the privacy improvement.</p>

<h2>How I use it</h2>

<p>The setup is one line per font family in the HTML head, the same shape as Google Fonts:</p>

<pre><code>&lt;link rel="preconnect" href="https://fonts.bunny.net"&gt;
&lt;link rel="stylesheet" href="https://fonts.bunny.net/css?family=inter:400,600|playfair:600,700"&gt;</code></pre>

<p>The font request returns a CSS file with @font-face declarations pointing at the actual font files on Bunny's CDN, exactly like Google Fonts. Switching an existing site from Google to Bunny is a one-line change in most cases.</p>

<p>For sites I build, I additionally preload the two display fonts most likely to be involved in the Largest Contentful Paint (the headline font and the body font), which shaves another 100 to 300 ms off perceived load time. This optimization works the same on Google or Bunny; I default to it on every build.</p>

<h2>What it costs</h2>

<p>Free, with no asterisks. Bunny.net offers Bunny Fonts as a public service, with no signup required, no rate limit, no traffic cap, and no upsell to a paid version. The cost to Bunny is the bandwidth, which is small relative to their core CDN business and serves as a goodwill loss-leader for sites that might later become Bunny.net hosting customers.</p>

<p>The free tier is the only tier. There is no premium version of Bunny Fonts.</p>

<h2>The cookie-banner question</h2>

<p>One concrete benefit worth naming: a website using only first-party tracking plus Bunny Fonts (not Google Fonts) has a meaningfully cleaner consent surface than the same site using Google Fonts. Several EU privacy regulators have explicitly named Google Fonts as a third-party data transmission that requires consent under GDPR. Bunny Fonts is not in that category.</p>

<p>Combine Bunny Fonts with Cloudflare Web Analytics and Umami (both cookie-free), and most small-business sites can legitimately operate without any cookie banner at all. That alone removes one of the visual disruptions that hurt conversion on every site that has them.</p>

<h2>If your current site uses Google Fonts</h2>

<p>The migration is one of the cheapest privacy improvements available. The steps:</p>

<ol>
  <li>Find every reference to <code>fonts.googleapis.com</code> or <code>fonts.gstatic.com</code> in your site.</li>
  <li>Replace each with the equivalent <code>fonts.bunny.net</code> URL (the Bunny Fonts website has a translator that takes a Google Fonts URL and returns the Bunny equivalent).</li>
  <li>Test the site to confirm the fonts render correctly.</li>
  <li>Update your privacy policy if it specifically mentioned Google Fonts as a third-party processor.</li>
</ol>

<p>For sites I build, this is part of the default stack at launch. For sites I do not build, the migration is usually 15 to 30 minutes of work and the result is one less third-party transmission on every page load for the lifetime of the site.</p>

<h2>One small note about self-hosting</h2>

<p>The most private option is to self-host the font files alongside your own site, so no third party is involved at all. This is technically the cleanest answer and what some teams prefer. The trade-off is a small amount of additional setup work and the loss of Bunny's global CDN distribution (your fonts now serve from wherever your site serves from, which on Cloudflare Pages is the same global edge anyway).</p>

<p>For most small business sites, Bunny Fonts is the right balance: zero privacy issue, zero setup work, zero performance cost. For larger sites with custom font licensing or strict data-residency requirements, self-hosting is the next step up. I make the call per project; the default is Bunny.</p>
