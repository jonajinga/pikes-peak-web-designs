---
title: "Blacklight: A Free Privacy Inspector for Any Website"
date: 2026-05-05
label: "Privacy & Tooling"
description: "The Markup's Blacklight tool reveals what trackers your site is actually loading. Here is how to use it, and how I run it against every build."
ctaLabel: "Privacy by construction"
ctaHeading: "I run Blacklight against every site I build."
ctaText: "Custom-coded sites with privacy-first analytics by default — no Facebook Pixel, no Google Tag Manager, no cookie-banner tax. $175 a month, flat."
layout: layouts/post.njk
tags: [post]
---

<p>Most service-business owners have no idea what their website is actually doing in the background. The contact form is the visible part. The analytics dashboard is the visible part. The third-party trackers loading invisibly on every page, the session-replay scripts watching every mouse move, the ad-network pixels building shadow profiles of every visitor, the cookie banners that exist because of those trackers — none of that is visible.</p>

<p>The Markup, an investigative-journalism nonprofit, built a tool that makes the invisible visible. It is called <a href="https://themarkup.org/blacklight" rel="noopener" class="inline-link">Blacklight</a>, and it is the cleanest way I have found to see exactly what a website is loading on someone else's behalf. This post walks through what Blacklight does, how to use it, what to do with the findings, and how the same tool fits into my own build process.</p>

<h2>What Blacklight is</h2>

<p>Blacklight is a real-time website privacy inspector. You paste any URL into the box on <a href="https://themarkup.org/blacklight" rel="noopener" class="inline-link">themarkup.org/blacklight</a>, and the tool loads the page in a sandboxed browser, watches every network request the page makes, and produces a written report. The whole thing takes about 30 seconds and is completely free.</p>

<p>The report covers seven distinct categories of privacy concern:</p>

<ol>
  <li><strong>Ad trackers.</strong> How many third-party trackers were loaded on the page and which networks they belong to (Google, Facebook, Microsoft, Amazon, etc.).</li>
  <li><strong>Third-party cookies.</strong> Cookies set by domains other than the one being visited, the standard mechanism for cross-site tracking.</li>
  <li><strong>Canvas fingerprinting.</strong> Whether scripts on the page are using the HTML canvas to generate a unique device fingerprint, which works even when the user blocks cookies.</li>
  <li><strong>Session recording.</strong> Whether services like Hotjar, Mouseflow, or FullStory are recording the visitor's session to play back later.</li>
  <li><strong>Key logging.</strong> Whether form fields are being captured before the visitor submits them — a real and growing pattern that lets companies harvest typed-but-not-submitted information.</li>
  <li><strong>Facebook tracking.</strong> Whether the Facebook pixel is present, what events it is reporting, and what data is being shared with Meta.</li>
  <li><strong>Google tracking.</strong> Whether Google Analytics, Google Tag Manager, Google Ads, or DoubleClick scripts are running, and whether the IP address is being shared.</li>
</ol>

<p>Each finding includes a short explanation of what the tracker does, why it might be on the site, and what risks it represents. The tone is neutral and factual; Blacklight is not a hit piece on any specific site.</p>

<h2>How to use it</h2>

<p>The basic flow is two clicks:</p>

<ol>
  <li>Visit <a href="https://themarkup.org/blacklight" rel="noopener" class="inline-link">themarkup.org/blacklight</a>.</li>
  <li>Paste the URL of the page you want to inspect (the homepage is the standard starting point) and click "Inspect Site."</li>
  <li>Wait roughly 30 seconds while Blacklight loads the page in its sandbox.</li>
  <li>Read the report.</li>
</ol>

<p>The report itself is a permanent URL on themarkup.org, which means you can save it, share it with a developer, or send it to a vendor as part of a procurement conversation. The tool keeps the report public for at least a few weeks, which is long enough for most reasonable uses.</p>

<h2>What to do with the findings</h2>

<p>The Blacklight report is not actionable on its own. The value comes from understanding what the findings mean for your specific situation. A few patterns worth knowing:</p>

<h3>If the report shows zero or one tracker</h3>

<p>Your site is in good shape. Privacy-respecting by construction. The visitors who reach your site are not being secretly profiled, the cookie banner you may have written off as theater can probably go away (since you do not actually need consent for tracking that does not exist), and your legal exposure under privacy regulations (GDPR, CCPA, Quebec Law 25, the various U.S. state privacy laws coming online) is minimal. This is the goal posture, and it is genuinely achievable.</p>

<h3>If the report shows two to four trackers</h3>

<p>Likely cause: Google Analytics plus a Facebook pixel, possibly a Google Tag Manager container that pulls in a few more. This is the modal small-business website. The trackers are not catastrophic, but they are doing more than the business owner usually realizes, and they are the reason the cookie banner exists. The honest fix is to switch to privacy-first analytics (Cloudflare Web Analytics or Umami, both of which are cookie-free and produce the same operational reports) and remove the Facebook pixel if you are not actively running paid ads.</p>

<h3>If the report shows five or more trackers</h3>

<p>The site is leaking visitor data heavily. Common cause: a marketing-agency engagement that bolted on Hotjar for session recording, AdRoll for retargeting, HubSpot for the contact form, and a Google Tag Manager container with a dozen more pixels inside it. The site is slow because of the tracker load, the cookie banner is mandatory, and the privacy exposure is real. The fix here is bigger and worth a conversation with whoever maintains the site.</p>

<h3>If the report shows session recording</h3>

<p>Worth looking at carefully. Session recording is the tracker pattern that surprises business owners the most when they learn about it. The vendor tells the business owner the tool helps "understand visitor behavior." What is happening technically is that every mouse movement, scroll position, click, and (in many configurations) every key the visitor types into a form field is being recorded and sent to a third-party server, where the business owner can play it back like a video. The visitor has no idea this is happening unless the cookie banner discloses it specifically, which most do not.</p>

<p>The legal posture on session recording is increasingly aggressive. California has been particularly active on session recording as a wiretap-statute violation, and the lawsuits have been expensive. If your Blacklight report shows session recording, talk to a lawyer or remove the tracker. Both options are valid; the third option (do nothing) is the riskiest of the three.</p>

<h2>How I run my own builds against Blacklight</h2>

<p>Before I launch any client site, I run it through Blacklight as part of a pre-launch checklist. The expected result, every time, is zero ad trackers, zero session recording, zero canvas fingerprinting, and zero Facebook tracking. Most of my sites pass with a clean sweep. Occasionally a Cloudflare Web Analytics line shows up as a "tracker" by Blacklight's definition — which is technically correct, since Cloudflare is a third party from the site's perspective, but Cloudflare's analytics are cookie-free, IP-anonymized, and aggregated at the edge before any data leaves the visitor's session. I disclose that on every site's privacy page and the report stays accurate.</p>

<p>The reason I do this is not theater. Blacklight gives me an independent third-party verification that the privacy posture I claim on the marketing pages is actually what the live site is doing. If a stray tracker ever sneaks in (a CDN switch that suddenly loads a Google Fonts call from googleapis.com, for example), Blacklight catches it before launch. The check is part of the build pipeline, not an afterthought.</p>

<p>For client-side sites I run Blacklight again at every quarterly review. Trackers can drift in over time, especially when a client has another agency add a campaign-tracking script to a landing page. A quarterly Blacklight pass keeps the privacy story honest.</p>

<h2>What Blacklight does not catch</h2>

<p>Worth being honest about the limits of any single tool:</p>

<ul>
  <li><strong>Server-side tracking.</strong> Blacklight watches the browser's network requests. If a site sends visitor data from its own server to a third party (like Meta's Conversion API), Blacklight cannot see it. The trend in 2026 is increasingly toward server-side tracking precisely because tools like Blacklight have made client-side tracking visible.</li>
  <li><strong>Email-based tracking.</strong> Pixels in marketing emails, link redirects, unsubscribe-page tracking. All happen outside the browser.</li>
  <li><strong>App tracking.</strong> Blacklight is web-only. Mobile app trackers (the SDKs companies like Adjust, Branch, and Singular sell) are a separate world with different inspection tools.</li>
  <li><strong>The intent behind a tracker.</strong> Blacklight tells you what is loading. It does not tell you whether the business has a legitimate reason for it (some companies genuinely need conversion-attribution pixels) or whether it is a careless mistake (many do).</li>
</ul>

<p>That said, for a small-business website, Blacklight catches roughly 90 percent of what would matter. It is the right starting tool, and it is free.</p>

<h2>How to use it as a buyer</h2>

<p>If you are evaluating a web design agency, run their own marketing site through Blacklight before you sign anything. The result tells you something real about how the agency thinks about privacy. An agency that markets themselves on speed and minimalism but loads twelve trackers on their own homepage is selling a posture they do not practice.</p>

<p>The same applies to any vendor whose site you are about to put your visitors on. Hosting providers, form backends, scheduling tools, payment processors. If their own marketing site is heavy with trackers, the product they sell is likely heavier still.</p>

<h2>One small request</h2>

<p>The Markup is a nonprofit, and Blacklight is funded by donations. If you find the tool useful, <a href="https://themarkup.org/donate" rel="noopener" class="inline-link">consider supporting them</a>. Independent journalism is the reason this tool exists at all, and the same independence is what makes the tool credible.</p>

<p>The tool is at <a href="https://themarkup.org/blacklight" rel="noopener" class="inline-link">themarkup.org/blacklight</a>. Run it on your own site first. The result usually tells you what to do next.</p>
