---
title: "Cookie Banners: When You Actually Need One"
date: 2026-05-25
label: "Standards & Compliance"
description: "Most service-business websites don't need a cookie banner. Here's when one is required, and when it's visual noise that costs you calls."
ctaLabel: "Banner-free by default"
ctaHeading: "I build sites that don't need a banner"
ctaText: "I use analytics without cookies, fonts that respect privacy, and no ad pixels or outside trackers. The banner that costs you calls goes away, because your site never needed it."
layout: layouts/post.njk
tags: [post]
---

<p>The cookie banner is one of the most disliked features on the web. Visitors click "Accept" without reading because it's in the way, it pops up again on the next visit, and almost no one understands the legal reason for it. Banners exist because of a European privacy law that many U.S. small businesses technically fall under and almost none have read.</p>

<p>Most service-business websites don't need a cookie banner at all, because the trackers that require consent aren't on the site. Adding a banner anyway costs you visitors for no reason.</p>

<h2>What cookie banners are for</h2>

<p>The cookie banner exists because of GDPR (the General Data Protection Regulation), the European Union's privacy law, which took effect in 2018. GDPR requires websites to get consent before they store certain cookies, small files that remember things about a visitor, or send certain personal data to outside companies.</p>

<p>The banner is how a site asks for that consent. Until the visitor accepts, the site can't legally set optional cookies or run outside trackers. Once the visitor accepts, or in stricter places opts in to specific categories, the cookies and trackers can run.</p>

<p>Other privacy laws have followed the same pattern: the UK's version of GDPR, Quebec's Law 25, California's CCPA and CPRA, and a growing list of U.S. state laws (Virginia, Colorado, Connecticut, Utah, Texas, and more). The details vary, but the idea is the same: track visitors only with their informed consent.</p>

<h2>Which sites need consent</h2>

<p>Three kinds of small-business website clearly fall under these laws:</p>

<p><strong>Sites that run outside advertising or remarketing pixels.</strong> The Facebook Pixel, Google Ads conversion tracking, Bing Ads, AdRoll, Criteo, and similar tools all require consent under GDPR and most other privacy laws. They exist to follow people from site to site, which is exactly what consent was designed to control.</p>

<p><strong>Sites that run session recording.</strong> Hotjar, FullStory, Mouseflow, and similar tools record everything a visitor does on the page. California has taken a hard line on these tools, and lawsuits under its wiretap laws have been expensive for the companies using them.</p>

<p><strong>Sites that do business in the EU or use EU customer data.</strong> A U.S. small business that sends products to EU customers, has EU clients, or runs ads aimed at the EU falls fully under GDPR and needs a complete consent system.</p>

<p>For these sites, the banner is required, and it has to be done right. That means consent by category, trackers blocked until consent, and signed agreements with every company that handles the data.</p>

<h2>Which sites do not need consent</h2>

<p>Most small-business websites belong in this group:</p>

<p><strong>Sites that use only their own tools and tools that respect privacy.</strong> The site's analytics use no cookies (Cloudflare Web Analytics, Umami, or Plausible). Its fonts come from Bunny Fonts or its own server instead of Google Fonts. It has no ad pixels, remarketing tags, or session recorders, and its contact form goes through a service that keeps no visitor data, such as Web3Forms or Formspark.</p>

<p>For these sites, GDPR's consent rule doesn't apply, because the site doesn't do what consent is meant to control. A banner adds nothing legally and does harm in practice. It drives more visitors away and makes the visit worse, with no gain for anyone's privacy.</p>

<h2>How I build sites that don't need a banner</h2>

<p>On every site I build, the standard tools stay below the point where consent is needed. These choices add up:</p>

<p><strong>Analytics.</strong> Cloudflare Web Analytics and Umami. Neither uses cookies or tracks individuals, so GDPR requires no consent.</p>

<p><strong>Fonts.</strong> Bunny Fonts or self-hosted fonts instead of Google Fonts, so no visitor's IP address (the device's internet address) goes to Google.</p>

<p><strong>Maps.</strong> When a site needs a map, such as on a service-area page, I use OpenStreetMap through Leaflet instead of Google Maps. It looks the same and shares no data with Google.</p>

<p><strong>Forms.</strong> Web3Forms, which sends submissions to email without storing visitor data on its own servers.</p>

<p><strong>Embeds.</strong> Facebook posts, Instagram posts, Twitter/X cards, and YouTube videos all set tracking cookies when placed directly on a page. When a site needs them, I use privacy-friendly versions, such as youtube-nocookie.com instead of youtube.com, and plain code instead of embedded widgets where I can.</p>

<p>The result is a site that talks only to its own host and a few essential services: the form service, the analytics, and the fonts, all chosen for privacy. None of them require consent under GDPR or any U.S. state law I know of.</p>

<h2>The published privacy policy</h2>

<p>Every site I build comes with a privacy policy at <code>/privacy-policy/</code>. Even when consent isn't required, openness is, and the privacy policy is where it lives. It names every outside company that touches visitor data (Cloudflare, the form service, and the analytics provider), what data each one sees, and what it does with it. It also says how to contact me about privacy.</p>

<p>That disclosure is right whether or not a banner is needed. Visitors who care about privacy can read the policy and confirm the site does what it claims, and those who don't can skip it.</p>

<h2>The case for adding a banner anyway</h2>

<p>There are two situations where I plan for a banner even when the law doesn't yet require one:</p>

<p><strong>The client wants to add Google Analytics later.</strong> A site that might switch to GA4, the current Google Analytics, should be ready to turn a banner on. The cleanest approach is to launch without a banner, write down when one becomes necessary, and add it when that happens.</p>

<p><strong>The business operates internationally.</strong> A U.S. small business with no EU customers today is on the right side of GDPR. If it expands overseas, the banner becomes necessary too.</p>

<p>In both cases, I add the banner when the need arrives, not in advance.</p>

<h2>What a "good" banner looks like, when one is required</h2>

<p>If a site needs a consent banner, how it's built matters. A good banner does three things:</p>

<p><strong>The banner blocks trackers before consent.</strong> Trackers shouldn't run at all until the visitor accepts. A banner that sits on top while trackers run anyway is illegal in most places and increasingly leads to lawsuits.</p>

<p><strong>"Reject all" is as easy as "Accept all."</strong> A banner with a big "Accept" button and "Reject" buried three menus deep fails GDPR's rule that consent be freely given.</p>

<p><strong>The banner does not reappear immediately.</strong> Visitors who reject shouldn't see it again on every page. Their choice should last a reasonable time.</p>

<p>For sites that need a banner, I build the full system. Trackers stay blocked until consent, accept and reject get equal buttons, visitors can choose by category, and their choice carries over from visit to visit. The banner does its job instead of serving as cover.</p>

<h2>How to check what your current site needs</h2>

<p>Two free tools tell you most of what you need to know:</p>

<p><strong><a href="https://themarkup.org/blacklight" rel="noopener" class="inline-link">Blacklight</a></strong> by The Markup. Paste in your web address and see which trackers load. If the report shows outside trackers, such as the Facebook Pixel, Google Tag Manager, or Hotjar, you need a banner. If it shows only privacy-friendly tools, you don't.</p>

<p><strong>Browser DevTools, "Application" tab, "Cookies" panel.</strong> DevTools are the developer tools built into your browser. Open your home page in a fresh private window, open DevTools, and check which cookies the first page load set. If only your own domain set cookies, such as for a session or a theme preference, you're likely fine without consent. If other domains set cookies, you need consent.</p>

<p>Most small-business websites that have never been checked fall into one of three groups, each about a third of the total. Some are clean and need no banner. Some have light tracking that could be removed to avoid the need for consent, and the rest have heavy tracking that needs a properly built banner.</p>
