---
title: "Blacklight: A Free Privacy Inspector for Any Website"
date: 2026-05-05
label: "Privacy & Tooling"
description: "The Markup's Blacklight tool shows which trackers your site loads. Here's how to use it, and how I run it against every site I build."
ctaLabel: "Privacy built in"
ctaHeading: "I run Blacklight against every site I build"
ctaText: "Every site I build comes with privacy-friendly visitor statistics, with no Facebook Pixel, no Google Tag Manager, and no cookie banner. It's $175 a month, flat."
layout: layouts/post.njk
tags: [post]
---

<p>Most service-business owners don't know what their website does out of sight. The contact form and the analytics dashboard are the parts you see. You don't see the outside trackers loading on every page, the session-replay scripts recording every mouse move, or the ad-network pixels building profiles of every visitor. You don't see that the cookie banner exists because of those trackers.</p>

<p>The Markup, a nonprofit newsroom that does investigative journalism, built a tool that shows all of this. It's called <a href="https://themarkup.org/blacklight" rel="noopener" class="inline-link">Blacklight</a>, and it's the clearest way I've found to see what a website loads for someone else's benefit. This post covers what Blacklight does, how to use it, what to do with the results, and how it fits into my own build process.</p>

<h2>What Blacklight is</h2>

<p>Blacklight is a website privacy inspector. You paste any web address into the box on <a href="https://themarkup.org/blacklight" rel="noopener" class="inline-link">themarkup.org/blacklight</a>. The tool loads the page in a sealed-off browser, watches every request the page makes to other servers, and writes a report. It takes about 30 seconds and costs nothing.</p>

<p>The report covers seven kinds of privacy concern:</p>

<ol>
  <li><strong>Ad trackers.</strong> How many outside trackers the page loaded and which networks they belong to, such as Google, Facebook, Microsoft, or Amazon.</li>
  <li><strong>Third-party cookies.</strong> Cookies set by sites other than the one you're visiting, the usual way of following people from site to site.</li>
  <li><strong>Canvas fingerprinting.</strong> Whether scripts use the page's drawing feature (the HTML canvas) to build a unique ID for your device, which works even when you block cookies.</li>
  <li><strong>Session recording.</strong> Whether services like Hotjar, Mouseflow, or FullStory record the visit to play back later.</li>
  <li><strong>Key logging.</strong> Whether form fields are captured before the visitor sends them. It's a growing practice that lets companies collect what people type but never submit.</li>
  <li><strong>Facebook tracking.</strong> Whether the Facebook pixel is present, which events it reports, and what data goes to Meta.</li>
  <li><strong>Google tracking.</strong> Whether Google Analytics, Google Tag Manager, Google Ads, or DoubleClick scripts are running, and whether the visitor's IP address (the device's internet address) is shared.</li>
</ol>

<p>Each finding explains what the tracker does, why it might be on the site, and what risks it carries. The tone is neutral and factual, so the report never reads as an attack on any site.</p>

<h2>How to use it</h2>

<p>It takes two clicks:</p>

<ol>
  <li>Visit <a href="https://themarkup.org/blacklight" rel="noopener" class="inline-link">themarkup.org/blacklight</a>.</li>
  <li>Paste the address of the page you want to check (start with the home page) and click "Inspect Site."</li>
  <li>Wait about 30 seconds while Blacklight loads the page.</li>
  <li>Read the report.</li>
</ol>

<p>Each report gets its own address on themarkup.org, so you can save it, share it with a developer, or send it to a vendor while you're shopping. The report stays public for at least a few weeks, which is long enough for most uses.</p>

<h2>What to do with the findings</h2>

<p>The report doesn't tell you what to do on its own. Its value comes from knowing what the findings mean for your site. Here are the common patterns.</p>

<h3>If the report shows zero or one tracker</h3>

<p>Your site is in good shape and respects privacy by design. Nobody is profiling your visitors behind their backs. You can probably drop the cookie banner, since tracking that doesn't exist needs no consent. Your legal risk under privacy laws (GDPR in Europe, CCPA in California, Quebec's Law 25, and the newer U.S. state laws) is minimal, and this result is well within reach.</p>

<h3>If the report shows two to four trackers</h3>

<p>The likely cause is Google Analytics plus a Facebook pixel, perhaps with a Google Tag Manager container that pulls in a few more. This is the typical small-business website. The trackers aren't a disaster, but they do more than most owners realize, and they're the reason the cookie banner exists. The fix is to switch to privacy-friendly analytics, such as Cloudflare Web Analytics or Umami, which use no cookies and give you the same everyday reports. Then remove the Facebook pixel if you aren't running paid ads.</p>

<h3>If the report shows five or more trackers</h3>

<p>The site is leaking a lot of visitor data. A common cause is a marketing agency that added Hotjar for session recording, AdRoll for retargeting ads, HubSpot for the contact form, and a Google Tag Manager container holding a dozen more pixels. The trackers slow the site, the cookie banner becomes mandatory, and the privacy risk is serious. This fix is bigger and worth a talk with whoever looks after the site.</p>

<h3>If the report shows session recording</h3>

<p>Look at this one closely, because session recording surprises owners more than any other tracker. The vendor says the tool helps you "understand visitor behavior." In fact, it records every mouse movement, scroll, and click, and often every key typed into a form. It sends all of it to an outside server, where the owner can play it back like a video, and visitors don't know unless the cookie banner says so, which most don't.</p>

<p>Regulators and courts are taking a harder line on session recording. In California, lawsuits have treated it as a violation of wiretap laws, and they've been expensive. If your report shows session recording, talk to a lawyer or remove the tracker. Doing nothing is the riskiest choice.</p>

<h2>How I run my own builds against Blacklight</h2>

<p>Before I launch any client site, I run it through Blacklight as part of my launch checklist. I expect zero ad trackers, zero session recording, zero canvas fingerprinting, and zero Facebook tracking, and most of my sites pass clean. Now and then, Blacklight lists Cloudflare Web Analytics as a tracker. That's correct by its definition, because Cloudflare is an outside company, but its analytics use no cookies, hide visitors' IP addresses, and combine the numbers before any data leaves the visit. I say so on every site's privacy page, so the report stays accurate.</p>

<p>Blacklight gives me an independent check that the privacy I promise on my sales pages matches what the live site does. If a stray tracker slips in, Blacklight catches it before launch. For example, switching the network that delivers a site's files (the CDN) can suddenly load Google Fonts from googleapis.com. The check is a set step in every build.</p>

<p>For client sites, I run Blacklight again at every quarterly review. Trackers can creep in over time, especially when a client has another agency add a campaign-tracking script to a landing page. A quarterly check keeps the privacy promise true.</p>

<h2>What Blacklight does not catch</h2>

<p>Every tool has limits, and these are Blacklight's:</p>

<ul>
  <li><strong>Server-side tracking.</strong> Blacklight watches what the browser sends. If a site's own server passes visitor data to a third party, as Meta's Conversion API does, Blacklight can't see it. In 2026, tracking is moving to servers because tools like Blacklight made browser tracking visible.</li>
  <li><strong>Email-based tracking.</strong> Pixels in marketing emails, redirecting links, and tracking on unsubscribe pages all happen outside the browser.</li>
  <li><strong>App tracking.</strong> Blacklight covers websites only. Trackers inside phone apps (the toolkits sold by companies like Adjust, Branch, and Singular) need different inspection tools.</li>
  <li><strong>The reason behind a tracker.</strong> Blacklight tells you what's loading, not why. Some businesses need pixels that show which ads led to a sale, and many trackers are careless leftovers.</li>
</ul>

<p>Still, for a small-business website, Blacklight catches about 90 percent of what matters. It's the right tool to start with, and it's free.</p>

<h2>How to use it as a buyer</h2>

<p>If you're choosing a web designer, run their own site through Blacklight before you sign anything. The result tells you how they think about privacy. A designer who sells speed and simplicity but loads 12 trackers on their own home page is selling something they don't practice.</p>

<p>The same goes for any vendor whose product your visitors will touch: hosting companies, form services, scheduling tools, and payment processors. If a vendor's own site is heavy with trackers, its product is likely heavier still.</p>

<h2>One small request</h2>

<p>The Markup is a nonprofit, and donations fund Blacklight. If you find the tool useful, <a href="https://themarkup.org/donate" rel="noopener" class="inline-link">consider supporting them</a>. Independent journalism is the reason the tool exists, and that independence is what makes it credible.</p>

<p>The tool is at <a href="https://themarkup.org/blacklight" rel="noopener" class="inline-link">themarkup.org/blacklight</a>. Run it on your own site first, and the result will usually tell you what to do next.</p>
