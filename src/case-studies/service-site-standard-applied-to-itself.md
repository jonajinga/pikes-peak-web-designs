---
layout: layouts/case-study.njk
permalink: /case-studies/service-site-standard-applied-to-itself/
title: "The Service Site Standard, applied to itself"
client: "Pikes Peak Web Designs"
trade: "Custom-coded web design"
metro: "Colorado Springs, CO (national reach)"
summary: "Before-and-after of the agency's own rebuild. Real numbers, no client permissions to wait on, and a working preview of every principle of the Service Site Standard."
metrics:
  - label: "Mobile PageSpeed"
    before: "—"
    after: "98–100"
  - label: "Pages on launch"
    before: "—"
    after: "100+"
  - label: "Cookie banner required"
    before: "n/a"
    after: "No"
noindex: true
eleventyExcludeFromCollections: true
---

## Why this is the first case study

A rule the agency tries to live by: do not publish a case study you cannot also pass yourself. The first case study on this page is the agency's own site, built end-to-end on the Service Site Standard, with real PageSpeed numbers, real architecture decisions, and a real preview of what every client gets.

This is dogfood. Same code patterns, same hosting, same accessibility floor as a client engagement. The only difference is the brand.

## The before

The "before" state was a placeholder. There was no production site for several months while the rebuild was in progress; the previous shape was a single static landing page with a contact form. By the standards of the Service Site Standard, it failed on principle 4 (fast by construction, but only because there was nothing on it), principle 5 (accessibility was light), principle 6 (no local-pack architecture), and principle 7 (the placeholder was vendor-dependent).

So this is not a "we made a slow site fast" story. It is a "we built the right thing on the right foundation, the first time" story.

## The build

The build is the seven principles, applied in order:

### Principle 1: One owner, end to end.

Every line of code on this site is mine. Every page, every CSS rule, every interactive element. No subcontractor, no agency partner, no design-handoff. The continuity of authorship matters because the site is the proof, if the agency's own site is built by a relay chain, the principle is rhetoric.

### Principle 2: Custom code over CMSes.

Eleventy v3 (static-site generator), Nunjucks templates, vanilla CSS, vanilla JavaScript. No WordPress, no Webflow, no headless CMS, no React framework. The whole site is files in a git repo. View source on any page to verify.

### Principle 3: Posted prices, posted process.

Every operational detail is on a public page: [pricing](/pricing/), the [service agreement](/agreement/), the [owner's guide](/owners-guide/), the [technical approach](/technical-approach/), the [Service Site Standard](/method/) itself, and a [public changelog](/changelog/) of every shipped change. A prospect can read the entire engagement before the discovery call.

### Principle 4: Fast by construction.

Mobile PageSpeed: 98–100 on every page. Time-to-first-byte: under 100ms via Cloudflare's global edge. Time-to-interactive on a phone: under 1.5 seconds. Image pipeline emits AVIF + WebP + JPEG at multiple widths automatically. CSS concatenated at build, not @imported at runtime. JavaScript kept under 10KB on a typical page. None of this is added later, it is the way the site is assembled.

### Principle 5: Accessible by default.

WCAG 2.2 AA across every page. Real contrast ratios verified. 44×44px minimum touch targets. Keyboard navigation throughout. Skip links, semantic HTML, focus rings. The [accessibility statement](/accessibility/) is contractual, not aspirational. Re-audited on every deploy.

### Principle 6: Local before global.

This site is the agency's own, the local-pack work matters less than for a typical service business. But the architecture is the same: LocalBusiness schema present, NAP (Colorado Springs) consistent across every page, real city-level service-area pages for the metros where service-business clients operate, service-area maps via Leaflet + OpenStreetMap on every metro page, no Google Maps tracker.

### Principle 7: Boring infrastructure.

Eleventy, Nunjucks, vanilla CSS, vanilla JS, Cloudflare Pages, Web3Forms, Pagefind. Nothing in that list is brand-new, nothing in that list is hyped, and nothing in that list has changed substantially in three years. The site you see now will run identically in 2030 because the underlying technology does not move under it.

## The after

100+ pages on launch (services, pricing, comparisons, blog, glossary, technical approach, owner's guide, changelog, results, calculator, walk-through, press kit, partners, three discount pages, six demo sites, service-area pages for thirty metros, methodology page, case studies infrastructure, podcast and newsletter scaffolds, legal pages, accessibility statement). Every page is auditable in PageSpeed Insights. The full agency operating posture is on public pages anyone can read before signing anything.

The site itself is the case study for the methodology. If the agency's own site cannot demonstrate the Service Site Standard, the methodology is rhetoric. If it can, and it does, the methodology is the deliverable.

## What the next case study will look like

The same shape: before, build, after. The same metrics: PageSpeed delta, lead volume delta if the client is willing to share, time to launch, total dollars in. The same principle-by-principle walk-through. The next study will be the first paying client who grants written permission per the consent clause in the service agreement. When it ships, this section gets replaced with a link.
