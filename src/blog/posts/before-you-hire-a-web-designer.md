---
title: "Before You Hire a Web Designer: What You Actually Need to Know"
date: 2026-05-05
label: "Buying Guide"
description: "A pre-purchase due-diligence checklist for service-business owners who are about to hire someone to build their website. The questions to ask, the answers to listen for, and the red flags that should end the conversation."
ctaLabel: "Pass the test? Let's talk."
ctaHeading: "If a vendor cannot answer the questions in this post, find another one."
ctaText: "I will answer all of them on the discovery call before you sign anything. $0 down, no design deposit. The whole agency operates in public."
layout: layouts/post.njk
tags: [post]
---

<p>You are about to spend somewhere between $1,500 and $15,000 on a website. Maybe ongoing too. The people pitching you all sound competent on the phone, that is the easy part of the job for a salesperson. The hard part for you is figuring out which of them will deliver something that actually brings in calls a year from now, and which will hand you a pretty file and disappear.</p>

<p>This is the due-diligence checklist nobody hands service-business owners before they sign. Run any vendor through it, including me, and the answers will tell you most of what you need to know.</p>

<h2>1. Who, specifically, is doing the work?</h2>

<p>Ask: "Will the person I am talking to today write the code? If not, who will, and can I talk to them before I sign?"</p>

<p>You are looking for one of three honest answers:</p>

<ul>
  <li><strong>"Me."</strong> The person on the call is the developer. Best answer for a small build.</li>
  <li><strong>"A specific named teammate."</strong> They will introduce that teammate before you sign. Acceptable.</li>
  <li><strong>"Our team."</strong> Vague. Means a junior or an offshore subcontractor will write the code while the salesperson moves on. Probe further.</li>
</ul>

<p><strong>Red flag:</strong> they avoid the question, or they say "we use a proven team-based approach" without naming a single human. The person who closes you should be available to answer for the work after launch, that is what "accountability" actually means.</p>

<h2>2. What stack are they using and why?</h2>

<p>Ask: "What technology will my site be built on, and why that one specifically?"</p>

<p>Listen for whether they have an opinion. The answers fall into rough categories:</p>

<ul>
  <li><strong>"WordPress."</strong> Default answer. WordPress is fine for high-volume publishers; it is overkill, slow, and security-burdensome for a 5&ndash;15 page service business. If they cannot articulate why WordPress is right for YOUR situation specifically, they just default to WordPress because it is what they know how to sell.</li>
  <li><strong>"Wix / Squarespace."</strong> They are not a developer; they are a Wix-template configurator. That is fine for a very small business or a side project, but understand what you are buying.</li>
  <li><strong>"Webflow / Framer."</strong> No-code modern builder. Faster than WordPress, more design control than Squarespace. Reasonable middle ground if performance and SEO are not top priority.</li>
  <li><strong>"Custom code on a static-site generator (Eleventy / Astro / Next)."</strong> Hand-written. Best performance ceiling, lowest security surface, highest level of skill required. What I do.</li>
</ul>

<p><strong>Red flag:</strong> they have never had to defend their stack choice. Anyone who has built a few sites has thought about this; the answer should come quickly and with reasons.</p>

<h2>3. What is the real total cost over three years?</h2>

<p>Ask: "Walk me through every dollar I will spend with you over the next three years."</p>

<p>Most agencies will quote a build price ($3K&ndash;$8K) and forget to mention:</p>

<ul>
  <li>Hosting ($20&ndash;$80/month).</li>
  <li>Maintenance retainer ($100&ndash;$300/month, often required to keep WordPress secure).</li>
  <li>Plugin licenses (varies; can run $40&ndash;$200/month at scale).</li>
  <li>SEO retainer (often pitched separately as $500&ndash;$3,000/month).</li>
  <li>Per-change billing (some shops bill $100&ndash;$200 per content update).</li>
</ul>

<p>Get all of these in writing, in advance. The "I forgot to mention" line items are how a $4,000 quote becomes $15,000 over three years.</p>

<p><strong>Green flag:</strong> the vendor sends you a written breakdown of everything before you ask for it.</p>

<h2>4. Who owns the site if I leave?</h2>

<p>Ask: "If I cancel after 12 months, what do I get to take with me?"</p>

<p>The answer matters more than people realize. Three patterns:</p>

<ul>
  <li><strong>"You own the source code, on your GitHub."</strong> Best answer. You can take the site to any host, any developer.</li>
  <li><strong>"You get a static export / final files."</strong> Acceptable. The site can run anywhere, even if the source-code isn't transferred.</li>
  <li><strong>"Nothing, the site is on our platform."</strong> Wix / Squarespace / proprietary builder. You are renting forever.</li>
  <li><strong>"You own everything but you have to pay an offboarding fee."</strong> Hostage situation. Run.</li>
</ul>

<p><strong>Red flag:</strong> this question makes them uncomfortable. Plenty of agencies have built genuine vendor lock-in into the relationship and they know they cannot answer cleanly.</p>

<h2>5. What does maintenance actually mean?</h2>

<p>Ask: "Walk me through what 'maintenance' means in your monthly fee. What do you actually do?"</p>

<p>Listen for specifics, not platitudes:</p>

<ul>
  <li><strong>Specific:</strong> "Plugin updates checked weekly, a security scan monthly, content updates within 24 hours, performance regression testing on every deploy, uptime monitoring with SMS alerts." That is real maintenance.</li>
  <li><strong>Vague:</strong> "We keep your site running smoothly." That is not maintenance; that is a marketing line. They probably do not log in to your site between launch day and the day it breaks.</li>
</ul>

<p><strong>Red flag:</strong> they do not have a written maintenance scope. The default is for the maintenance retainer to be free money for the agency until you complain.</p>

<h2>6. How fast does the site they will build for you actually load?</h2>

<p>Ask: "Show me a site you have built recently. What is its mobile PageSpeed score?"</p>

<p>Run their reference site through <a href="https://pagespeed.web.dev/" rel="noopener" class="inline-link">pagespeed.web.dev</a> live on the call:</p>

<ul>
  <li><strong>95+:</strong> They actually care about performance. Rare; impressive.</li>
  <li><strong>80&ndash;94:</strong> Acceptable. They know about it but have not optimized hard.</li>
  <li><strong>60&ndash;79:</strong> Below the real threshold. They have not internalized that page speed is a Google ranking factor and a conversion factor.</li>
  <li><strong>Below 60:</strong> They will deliver the same to you. Get a different vendor.</li>
</ul>

<p>Page speed is non-negotiable in 2026. A site at 60 PageSpeed loses approximately a third of its mobile visitors before they engage. If their reference work is at 60, your future site will be too.</p>

<h2>7. Will the site be accessible (WCAG 2.2 AA)?</h2>

<p>Ask: "Is the site you are building me WCAG 2.2 AA compliant by default?"</p>

<p>The honest answers:</p>

<ul>
  <li><strong>"Yes, that is our default; here is the test methodology we use."</strong> Best answer. Specifics matter (WAVE, Lighthouse, manual screen-reader testing).</li>
  <li><strong>"We can do that as an add-on."</strong> Means it is not their default and you will pay extra. Acceptable but you should know upfront.</li>
  <li><strong>"What is WCAG?"</strong> They have not done this work. ADA-compliance lawsuits against small business sites are real and rising. Get a different vendor.</li>
</ul>

<h2>8. How do they handle local SEO?</h2>

<p>Ask: "What specifically will my site do that helps me rank locally on Google?"</p>

<p>Listen for:</p>

<ul>
  <li><strong>Hand-written schema markup</strong> (LocalBusiness, Service, FAQPage). Bonus for "matched to your Google Business Profile so the entities reconcile."</li>
  <li><strong>Real city pages, not doorway pages.</strong> Each service-area page should have unique local content, not the same paragraph with city name swapped.</li>
  <li><strong>NAP consistency check</strong>, name/address/phone identical between site and GBP, in the same format, on every page.</li>
</ul>

<p><strong>Red flag:</strong> "We use a plugin for SEO" and that is the whole answer. Plugins generate template-grade schema; Google's local algorithm increasingly weights uniqueness.</p>

<h2>9. What is the actual launch timeline, with milestones?</h2>

<p>Ask: "What does the project plan look like, week by week, from today to launch?"</p>

<p>Good vendors have a written process. Mine looks like: discovery call → proposal → onboarding (asset collection) → design preview → revisions → build → pre-launch QA → launch → post-launch check-in. Each of those is a week or so.</p>

<p><strong>Red flag:</strong> "Six weeks roughly" with no specifics. Means nobody owns the milestones; the project will slip.</p>

<h2>10. Can you talk to a previous client?</h2>

<p>Ask: "Who is a client you built a similar site for, and can I email them?"</p>

<p>This is the highest-signal reference check available. Vendors with happy clients introduce them readily; vendors without struggle to come up with a name. The conversation with the previous client is worth more than any pitch deck.</p>

<p><strong>Note:</strong> a sole-prop or new agency might not have a long client list yet (transparently mine doesn't). In that case, the substitute is the agency's OWN site, the changelog, the open Owner's Guide, the public service agreement. If the agency's own site is fast, accessible, well-maintained, and transparent, that is a self-evident reference.</p>

<h2>The two questions that matter most</h2>

<p>Of the ten above, two predict outcomes more than the rest combined:</p>

<ol>
  <li><strong>What is the mobile PageSpeed score on a site they built recently?</strong> Tells you the technical ceiling.</li>
  <li><strong>Who, specifically, is doing the work?</strong> Tells you whether the relationship will survive launch.</li>
</ol>

<p>If those two answers are unsatisfying, no amount of "we have a great team" or "we have been doing this for ten years" will make up for it. If those two answers are strong, the rest of the checklist will usually fall in line.</p>

<h2>One more thing the checklist does not cover</h2>

<p>Read the agency's own website carefully. If it loads slow, has obvious accessibility failures, has a vague pricing page, or has a copy that reads like every other agency's copy, that is what you are about to buy. The agency's own site is the most reliable preview of the work you will get.</p>

<p>Mine is open by design: <a href="/pricing/" class="inline-link">posted pricing</a>, <a href="/agreement/" class="inline-link">public service agreement</a>, <a href="/owners-guide/" class="inline-link">open Owner's Guide</a>, <a href="/changelog/" class="inline-link">live changelog</a>, <a href="/technical-approach/" class="inline-link">technical approach</a> documented in detail, and <a href="/samples/" class="inline-link">six demo sites</a> at full quality. Run any of them through PageSpeed, then run an agency you are evaluating through the same. The comparison will say more than any sales call.</p>

<p>If you want to test the answers above against me directly, the <a href="/contact/" class="inline-link">discovery call</a> is the next step. I will answer all ten in writing before you sign anything.</p>

<p>For a shorter list focused on the seven questions that matter most, see <a href="/blog/questions-to-ask-a-web-designer/" class="inline-link">The Seven Questions to Ask Any Web Designer Before Hiring Them</a>. And if the goal is to compare every realistic price tier head-to-head, <a href="/blog/how-much-does-a-small-business-website-cost/" class="inline-link">How Much Does a Small Business Website Actually Cost</a> runs the lifetime-cost math.</p>
