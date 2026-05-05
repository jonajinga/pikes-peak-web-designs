---
title: "Cookie Banners: When You Actually Need One"
date: 2026-05-25
label: "Standards & Compliance"
description: "Most service-business websites do not need a cookie banner. Here is when one is genuinely required and when it is just visual noise hurting conversion."
ctaLabel: "Banner-free by default"
ctaHeading: "I build sites that don't need a banner."
ctaText: "Cookie-free analytics, privacy-respecting fonts, no ad pixels, no tracker tax. The cookie banner that hurts your conversion rate goes away because it was never needed."
layout: layouts/post.njk
tags: [post]
---

<p>The cookie banner is one of the most universally hated user-interface elements on the web. Visitors click "Accept" without reading because the banner is in the way, the banner pops up again on the next visit, and the entire ritual is something almost no one understands the legal basis for. The banners exist because of European privacy law that most U.S. small businesses are technically subject to and almost none have read.</p>

<p>The honest answer for most service-business websites is that they do not need a cookie banner at all. The trackers that require consent are not on the site. Adding a banner anyway is a self-imposed conversion drag on something that did not require the consent in the first place.</p>

<p>This post explains what cookie banners are actually for, when one is genuinely required, when one is theater, and how I build sites that legitimately do not need one.</p>

<h2>What cookie banners are actually for</h2>

<p>The cookie banner exists because of GDPR (General Data Protection Regulation), the European Union's privacy law that took effect in 2018. GDPR requires websites to obtain consent before storing certain cookies on visitors' devices or transferring certain personal data to third parties.</p>

<p>The banner is the consent mechanism. Before the visitor accepts, the website cannot legally set non-essential cookies or fire third-party trackers. Once the visitor accepts (or, in stricter jurisdictions, opts in to specific categories), the cookies and trackers can run.</p>

<p>Several other privacy regimes have followed similar patterns: the UK's GDPR equivalent, Quebec's Law 25, California's CCPA/CPRA, the various other U.S. state privacy laws (Virginia, Colorado, Connecticut, Utah, Texas, and growing). The specific requirements vary, but the underlying premise is the same: track visitors only with their informed consent.</p>

<h2>Which sites genuinely need consent</h2>

<p>Three categories of small-business website are clearly within the regulated zone:</p>

<p><strong>Sites that run third-party advertising or remarketing pixels.</strong> Facebook Pixel, Google Ads conversion tracking, Bing Ads, AdRoll, Criteo, and similar tools all require consent under GDPR and most other privacy laws. Their entire purpose is cross-site tracking, which is exactly what consent was designed to gate.</p>

<p><strong>Sites that run session recording.</strong> Hotjar, FullStory, Mouseflow, and similar tools record everything the visitor does on the page. The legal posture on session recording has gotten aggressive in California; the wiretap-statute lawsuits against companies running these tools have been expensive.</p>

<p><strong>Sites that genuinely do business in the EU or use EU customer data.</strong> A U.S. small business that ships products to EU customers, has EU clients, or runs EU-targeted ads is fully within GDPR scope and needs the full consent infrastructure.</p>

<p>For sites in these categories, the banner is not theater; it is required, and the implementation needs to be done correctly (with granular consent, with tracker blocking before consent, with documented data-processor agreements).</p>

<h2>Which sites do not need consent</h2>

<p>The category most small-business websites fall into:</p>

<p><strong>Sites that use only first-party, privacy-respecting tools.</strong> The site uses cookie-free analytics (Cloudflare Web Analytics, Umami, Plausible). The site uses privacy-respecting fonts (Bunny Fonts or self-hosted, not Google Fonts). The site has no advertising pixels, no remarketing tags, no session recorders. The site's contact form goes to a server that does not retain visitor data (Web3Forms, Formspark, similar).</p>

<p>For sites in this category, GDPR's consent requirement does not apply because the site is not doing the things consent gates. Adding a banner anyway is meaningless from a legal perspective and harmful from a conversion perspective. The banner reduces engagement, increases bounce rate, and hurts the visitor experience for no actual privacy benefit.</p>

<h2>How I build sites that don't need a banner</h2>

<p>For every site I build, the default stack is designed to avoid the consent threshold. The choices that compound:</p>

<p><strong>Analytics.</strong> Cloudflare Web Analytics and Umami, both cookie-free, neither tracking individuals. No GDPR consent requirement.</p>

<p><strong>Fonts.</strong> Bunny Fonts (or self-hosted), not Google Fonts. The IP-transmission issue that Google Fonts triggers does not apply.</p>

<p><strong>Maps.</strong> When a site needs an embedded map (service-area page, location indicator), I use OpenStreetMap via Leaflet rather than Google Maps. Same visual outcome, no Google data exchange.</p>

<p><strong>Forms.</strong> Web3Forms, which routes submissions to email without retaining visitor data on its own servers.</p>

<p><strong>Embeds.</strong> Facebook posts, Instagram embeds, Twitter/X cards, and YouTube videos all set tracking cookies when embedded directly. For sites that need them, I use privacy-respecting alternatives: youtube-nocookie.com instead of youtube.com, native code rather than embedded widgets where possible.</p>

<p>The result is a site whose only network requests are to its own host, plus the small number of strictly-essential third parties (the form backend, the privacy-first analytics, the privacy-first fonts). None of those require consent under GDPR or any U.S. state law I am aware of.</p>

<h2>The published privacy policy</h2>

<p>Every site I build ships with a privacy policy at <code>/privacy-policy/</code>. Even when consent is not required, transparency is, and the privacy policy is where it lives. The policy plainly names every third party that touches visitor data (Cloudflare, the form backend, the analytics provider), what data each one sees, what they do with it, and how to contact me with privacy concerns.</p>

<p>This is the right disclosure regardless of whether a banner is needed. Visitors who care about privacy can read the policy and confirm the site is doing what it claims; visitors who do not care can ignore it. Either way the disclosure is published.</p>

<h2>The case for adding a banner anyway</h2>

<p>Two situations where I do recommend a banner even when it is not strictly required:</p>

<p><strong>The client wants to add Google Analytics later.</strong> A site set up with privacy-first analytics that may pivot to GA4 in the future should ship with banner infrastructure ready to flip on. The cleanest approach is to build the site without a banner, document the conditions under which a banner becomes necessary, and add it when those conditions are met.</p>

<p><strong>The business genuinely operates internationally.</strong> A U.S. small business that does not currently serve EU customers but might in the future is on the right side of GDPR today. If international expansion becomes real, the banner becomes real with it.</p>

<p>For both cases, I add the banner when the trigger arrives, not preemptively.</p>

<h2>What a "good" banner looks like, when one is required</h2>

<p>If a site genuinely needs a consent banner, the implementation matters. A few patterns separate good banners from theater:</p>

<p><strong>The banner blocks trackers before consent.</strong> The trackers should not fire at all until the visitor has actively accepted. A banner that just sits on top while the trackers run anyway is illegal in most jurisdictions and is increasingly the basis for litigation.</p>

<p><strong>"Reject all" is as easy as "Accept all."</strong> A banner that prominently shows "Accept" while burying "Reject" three menus deep is non-compliant under GDPR's "freely given consent" requirement.</p>

<p><strong>The banner does not reappear immediately.</strong> Visitors who reject should not see the banner again on every page load. The choice should be respected for a reasonable duration.</p>

<p>For sites that need a banner, I implement the full flow: tracker blocking before consent, equal accept/reject buttons, granular category controls, and persistence across sessions. The banner is built to actually do its job, not as visual cover.</p>

<h2>How to check what your current site needs</h2>

<p>Two free tools tell you most of what you need to know:</p>

<p><strong><a href="https://themarkup.org/blacklight" rel="noopener" class="inline-link">Blacklight</a></strong> by The Markup. Paste your URL, see exactly which trackers are loading. If the report shows third-party trackers (Facebook Pixel, Google Tag Manager, Hotjar, etc.), you need a banner. If it shows no trackers and only the privacy-respecting tools, you do not.</p>

<p><strong>Browser DevTools, "Application" tab, "Cookies" panel.</strong> Visit your homepage in a fresh incognito window, open DevTools, and check what cookies were set on the first page load. If only your own domain's cookies are present (session cookies, theme preference, etc.), you are likely fine without consent. If third-party domains have set cookies, you need consent.</p>

<p>Most small-business websites that have never been audited fall into one of three patterns: clean and don't need a banner (about a third), light tracking that could be removed to clean up the consent surface (about a third), or heavy tracking that genuinely needs a properly-configured banner (the remaining third).</p>

<p>The free <a href="/audit/" class="inline-link">five-point audit</a> covers tracker exposure and consent requirements as part of the standard pass. The report names what is actually happening on the site and what changes (if any) would let the banner go away.</p>
