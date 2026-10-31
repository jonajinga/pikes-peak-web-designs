---
title: "Bunny Fonts: A Privacy-First Alternative to Google"
date: 2026-05-16
label: "The Stack"
description: "Google Fonts looks free, but it sends each visitor's IP address to Google on every page view. Bunny Fonts is the cleaner choice I use."
ctaLabel: "Privacy by default"
ctaHeading: "Cookie-free fonts on every site I build"
ctaText: "I serve every web font through Bunny Fonts, so no outside company logs your visitors. It's part of the standard plan at no extra fee, and fonts alone never need a consent banner."
layout: layouts/post.njk
tags: [post]
---

<p>Web fonts, the typefaces a site downloads to show its text, look free until you read the fine print. Google Fonts is the leading choice, used on tens of millions of sites and offered free to designers. But on every page load, the visitor's IP address (the device's internet address) goes to Google's servers in exchange for the font file. German courts have already ruled against websites for using Google Fonts without consent, so the legal risk under European and Canadian privacy laws is more than theory.</p>

<p>Bunny Fonts is the cleaner choice I use on every site I build. It serves the same free, open-source fonts as Google with no logging, no IP tracking, no consent prompt, and no measurable loss of speed.</p>

<h2>What Bunny Fonts is</h2>

<p>Bunny Fonts is a privacy-friendly font service from Bunny.net, a Slovenian content delivery network (CDN), meaning a worldwide set of servers that hand out files quickly. It hosts Google's open-source font library, with the same families, weights, and character sets, and browsers can store its files just as well. For the developer it works almost exactly like Google Fonts, with the same code, flexibility, and coverage.</p>

<p>The difference is what happens behind the scenes. Bunny Fonts logs nothing about the visitor: no stored IP addresses, no records of which sites load which fonts, and no data on behavior. The font file arrives, the browser saves it, and that's the end of it.</p>

<h2>Why this matters in 2026</h2>

<p>The privacy problem with Google Fonts is a practical one. In January 2022, a German court ruled that a website using Google Fonts without consent had broken GDPR, the European Union's privacy law, by sending visitor IP addresses to a U.S. company. The court awarded damages, and the plaintiff went on to file thousands of similar claims against German websites. The pattern repeated in Austria and France within the year, and copycat lawsuits have spread through the EU since.</p>

<p>For a U.S. or Canadian small business with no EU customers, the direct legal risk is low. But the wider trend is clear: more places are passing laws that regulate sending visitor data to outside companies. Quebec's Law 25, the U.S. state privacy laws (California, Virginia, Colorado, Connecticut, Utah, and more each year), and the federal data-broker rules all point the same way.</p>

<p>The cleanest answer is to stop sending visitor data to outside companies without a good reason. Web fonts don't need to send anything to Google to work, and they never did.</p>

<h2>Performance: the surprising part</h2>

<p>The argument I hear most for Google Fonts is that it's faster than hosting fonts yourself, because Google's network is global and its files are well compressed. That was true a decade ago, and it isn't today.</p>

<p>Bunny Fonts runs on Bunny.net's global network, which reaches as widely as Cloudflare, Fastly, and Google. Its font files are identical to Google's, byte for byte, in the same WOFF2 format. Google's old advantage, a font saved by one site and reused on the next, is gone. Chrome, Safari, and Firefox now keep a separate store for each site, so a Google Font saved on Site A isn't reused on Site B.</p>

<p>In Lighthouse, Google's page-speed testing tool, the sites I build load the same with Bunny Fonts as with Google Fonts. The time for the largest element to appear (Largest Contentful Paint), the time to the server's first reply, and how the fonts swap in all measure the same. The privacy gain costs no speed.</p>

<h2>How I use it</h2>

<p>The setup is one line per font family in the page's head section, in the same form as Google Fonts:</p>

<pre><code>&lt;link rel="preconnect" href="https://fonts.bunny.net"&gt;
&lt;link rel="stylesheet" href="https://fonts.bunny.net/css?family=inter:400,600|playfair:600,700"&gt;</code></pre>

<p>That request returns a small style file whose @font-face rules point to the font files on Bunny's network, exactly as Google Fonts does. Switching an existing site from Google to Bunny is usually a one-line change.</p>

<p>On sites I build, I also preload the two fonts most likely to affect how fast the main content appears: the headline font and the body font. That cuts another 100 to 300 milliseconds off the load time a visitor notices. It works the same with Google or Bunny, and I do it on every build.</p>

<h2>What it costs</h2>

<p>It's free, with no catch. Bunny.net offers Bunny Fonts as a public service, with no sign-up, no rate limit, no traffic cap, and no paid upgrade. Bunny pays for the bandwidth, which is small next to its main CDN business, as goodwill toward sites that might later host with Bunny.net.</p>

<p>The free version is the only version. There is no premium Bunny Fonts.</p>

<h2>The cookie-banner question</h2>

<p>Here's one concrete benefit. A site that uses only its own analytics plus Bunny Fonts has far less that needs consent than the same site using Google Fonts. Several EU privacy regulators have named Google Fonts as a transfer of data to a third party that requires consent under GDPR. Bunny Fonts isn't in that group.</p>

<p>Pair Bunny Fonts with Cloudflare Web Analytics and Umami, which both work without cookies, and most small-business sites can run with no cookie banner at all. That removes one of the interruptions that lowers the share of visitors who call, on every site that shows one.</p>

<h2>If your current site uses Google Fonts</h2>

<p>The switch is one of the cheapest privacy improvements you can make. Here are the steps:</p>

<ol>
  <li>Find every reference to <code>fonts.googleapis.com</code> or <code>fonts.gstatic.com</code> in your site.</li>
  <li>Replace each with the matching <code>fonts.bunny.net</code> address. The Bunny Fonts website has a converter that turns a Google Fonts address into the Bunny one.</li>
  <li>Test the site to confirm the fonts look right.</li>
  <li>Update your privacy policy if it names Google Fonts as an outside processor of visitor data.</li>
</ol>

<p>Sites I build use Bunny Fonts from launch. On other sites, the switch usually takes 15 to 30 minutes, and it removes one outside data transfer from every page load for the life of the site.</p>

<h2>One small note about self-hosting</h2>

<p>The most private choice is to host the font files yourself, on the same server as your site, so no third party is involved. Some developers prefer this cleanest option. The trade-off is a little more setup, and your fonts then load from wherever your site does. On Cloudflare Pages, my hosting service, that's the same global network anyway.</p>

<p>For most small-business sites, Bunny Fonts strikes the right balance, with no privacy issue, no setup work, and no speed cost. For larger sites with custom font licenses or strict rules on where data is stored, self-hosting is the next step up. I decide for each project, and Bunny is the default.</p>
