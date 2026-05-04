---
title: "How Much Is Your Slow Website Costing You? The Hidden Math Behind Page Speed and Lost Leads"
date: 2026-05-05
label: "Local SEO &amp; Performance"
description: "A working-back-from-the-numbers guide to figuring out how many leads your slow website loses every month, what each one was worth, and the annual revenue line item nobody quantifies."
ctaLabel: "See your number, then act"
ctaHeading: "Plug your numbers into the calculator."
ctaText: "The /calculator/ page does this math live with your traffic and average job value. The /audit/ page measures it on your real URL. $0 either way."
layout: layouts/post.njk
tags: [post, local-seo]
---

<p>Every service-business owner I have ever audited has one number they cannot put a value on: the customers who almost called and then closed the tab. They never appear on the books. They do not bounce out of a CRM. The phone simply does not ring as much as it could, and the silence is invisible.</p>

<p>That silence has a price. It is not as fuzzy as people assume. The math is rough, but the order of magnitude is honest. This post walks through how to actually quantify what your current website is costing you in unbooked work, and why the answer almost always justifies a custom build several times over.</p>

<h2>Step 1: how many people leave because of speed?</h2>

<p>Google has been publishing data on this for over a decade. The number is consistent across studies: <strong>every additional second of mobile load time loses roughly 7&ndash;10% of mobile visitors before they read a word</strong>. Not "they bounce eventually", they leave during the load.</p>

<p>The way to measure where you sit:</p>

<ol>
  <li>Run your homepage through <a href="https://pagespeed.web.dev/" rel="noopener" class="inline-link">pagespeed.web.dev</a>. Note the mobile score.</li>
  <li>If the score is 95+, you are at roughly 1 second of mobile load time. Skip to step 2.</li>
  <li>If the score is 50, you are at roughly 4&ndash;5 seconds.</li>
  <li>If the score is below 30, you are at 6+ seconds, which means a measurable share of mobile visitors give up before the hero image even appears.</li>
</ol>

<p>The bounce-rate cost: roughly <strong>1.5% additional mobile bounce per PageSpeed point below 95</strong>. That is conservative; real-world studies on flaky cellular connections suggest higher. A site at PageSpeed 55 (the typical Wix score) is losing approximately <code>(95 - 55) &times; 1.5% = 60% of mobile bounces</code> over the floor, capped at the actual mobile-bounce ceiling, which is usually around 60%.</p>

<p>Translation: if you have 1,000 monthly visitors and 70% are on mobile, you have 700 mobile visits. A site at 55 is losing roughly 35&ndash;50% of those before they engage. <strong>Three hundred mobile visitors per month who never had a chance to become customers.</strong></p>

<h2>Step 2: what would those visitors have done?</h2>

<p>The visitors who DID stay tell you the conversion rate. Pull from your form-submission count or call-tracking number:</p>

<p><strong>Conversion rate = (form submissions + tracked calls) / total monthly visitors</strong></p>

<p>For service-business websites, the typical range is 1.5&ndash;3.5%. If your form has good intake fields and a clear CTA, expect the high end. If your form is "Name / Email / Message" the conversion rate is closer to the low end, the visitor stares at the empty Message field and gives up.</p>

<p>Apply that conversion rate to the visitors you LOST: 300 lost mobile visitors × 2% conversion = <strong>6 missed leads per month, or 72 per year</strong>.</p>

<h2>Step 3: what is each lead worth?</h2>

<p>Two numbers:</p>

<ul>
  <li><strong>Lead-to-close rate.</strong> Of the qualified leads who do reach you, what percentage become paying customers? Most service businesses run 30&ndash;55%. Use 40% if you are not tracking it.</li>
  <li><strong>Average job value.</strong> The dollar value of a typical close. A roofing job, an HVAC install, an inspection report, a landscape design contract.</li>
</ul>

<p>Continue the example:</p>

<ul>
  <li>72 missed leads × 40% close rate = <strong>29 missed jobs per year</strong>.</li>
  <li>29 missed jobs × $500 average job value = <strong>$14,500 of revenue per year</strong>.</li>
  <li>Or, if your average job is $5,000: <strong>$145,000 of revenue per year</strong>.</li>
</ul>

<p>That is the silent line item. It does not appear on a P&amp;L because it is the customers who almost called and then closed the tab.</p>

<h2>The honest caveats</h2>

<p>This math is rough on purpose. Several things I am NOT counting:</p>

<ul>
  <li><strong>Lower local-pack ranking from generic schema.</strong> A real custom site moves you up in the Google Maps three-pack, which has more conversion impact than any other single factor for service-business search. The calculator does not estimate this.</li>
  <li><strong>Better forms.</strong> A trade-specific intake form (real fields, real urgency routing) converts measurably better than a generic Name/Email/Message form. The lift is typically 1.5&ndash;2&times;. Not in the calculator.</li>
  <li><strong>Long-tail organic traffic from real city pages.</strong> Doorway service-area pages do not rank. Real, indexable city pages with local content compound over time. Not in the calculator.</li>
  <li><strong>Retention impact of a maintained site.</strong> A custom site does not break, does not get hacked, does not regress when WordPress pushes an update. Stability is a real revenue protector. Not in the calculator.</li>
</ul>

<p>So the number you arrive at is the floor, the page-speed line alone, not counting any of the other levers a custom-coded site moves at the same time.</p>

<h2>Pull the actual lever</h2>

<p>Three ways to apply this:</p>

<ol>
  <li><strong>The <a href="/calculator/" class="inline-link">interactive calculator</a>.</strong> Plug in your real numbers (visitors, mobile share, current PageSpeed, conversion rate, average job value, close rate). Get the annual leakage estimate in 30 seconds. Numbers run in your browser; nothing leaves your device.</li>
  <li><strong>The <a href="/audit/" class="inline-link">free 5-point audit</a>.</strong> If you would rather have me run real Lighthouse numbers and a real schema check on your URL and write up the findings, that takes five business days, costs nothing, and the deliverable is a written report you can act on with or without me.</li>
  <li><strong>The <a href="/contact/" class="inline-link">discovery call</a>.</strong> Twenty minutes. Bring the numbers from the calculator. We will talk through where they come from and what a custom build would actually change.</li>
</ol>

<h2>The thing nobody puts on a website</h2>

<p>Most agencies will not write this post. The reason is simple: if a $1,800 Wix subscription is leaking $14,500 a year, the agency that recommended Wix has some explaining to do. The number does not flatter anyone except the alternative.</p>

<p>The math is the math. The hardest line on a service-business P&amp;L to see is the one that does not appear, revenue that never happened because the website never gave a fair-shot mobile visitor a chance to become a customer. <strong>Quantifying that line is the work this post and the calculator are trying to make easier.</strong> Once you can see it, the budget conversation gets a lot simpler.</p>
