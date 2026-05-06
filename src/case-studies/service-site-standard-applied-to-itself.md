---
layout: layouts/case-study.njk
permalink: /case-studies/service-site-standard-applied-to-itself/
title: "The Service Site Standard, applied to itself"
client: "Pikes Peak Web Designs"
trade: "Custom-coded web design"
metro: "Colorado Springs, CO (national reach)"
summary: "The agency's own website. First site, built from scratch on the Service Site Standard. No prior site to migrate, no legacy to undo — every number on this page is what shipped on day one."
selfStudy: true
greenfield: true
metrics:
  - label: "Mobile PageSpeed"
    value: "95–100"
    note: "Every page, mobile and desktop. Run any URL through pagespeed.web.dev to verify."
  - label: "Core Web Vitals"
    value: "Green band"
    note: "LCP, INP, and CLS all in the good zone, measured against real visitor data via Cloudflare Web Analytics."
  - label: "Accessibility floor"
    value: "WCAG 2.2 AA"
    note: "Audited with WAVE and Lighthouse on every deploy. No remediation phase; the floor is the build."
  - label: "Pages on launch"
    value: "100+"
    note: "Marketing, comparisons, blog, glossary, methodology, owner's guide, technical approach, six demo sites, thirty service-area pages, legal."
  - label: "Cookie banner required"
    value: "No"
    note: "No third-party trackers on the visitor path. Privacy-first analytics (Cloudflare + Umami) plus self-hosted fonts."
  - label: "Stack lifespan"
    value: "Boring"
    note: "Eleventy, Nunjucks, vanilla CSS, vanilla JS, Cloudflare Pages, Web3Forms, Pagefind. Nothing in that list will move under the site."
---

## Why this is the first case study

The honest version: case studies usually trade on the *delta* — show the bad before, show the good after, point at the gap. That works when there is a before. This case study has none.

This is the first website Pikes Peak Web Designs has ever shipped, and it was built from a blank file specifically to demonstrate the Service Site Standard end-to-end before any client paid for it. There was no old site to migrate, no legacy CMS to wrestle, no prior agency engagement to clean up. The page you are reading is, line for line, what it has been since launch.

So the framing is different. Instead of "we made this slow site fast," this is "we built the right thing on the right foundation, the first time, and you can verify every claim by running the same public auditors I run."

## The build, principle by principle

The methodology is [the Service Site Standard](/method/). Seven principles, every site I ship runs through them in order. Here is how each one shows up in this site.

### Principle 1: One owner, end to end

Every line of code on this site is mine. Every page, every CSS rule, every interactive element, every form, every script. No subcontractor wrote any of it, no agency partner reviewed it, no offshore developer ran a chunk of the build. The continuity of authorship is the principle, and on the agency's own site it is the proof of the principle.

### Principle 2: Custom code over CMSes

[Eleventy](/blog/eleventy-static-site-generator/) (a static site generator) plus Nunjucks templates plus vanilla CSS plus vanilla JavaScript. No WordPress, no Webflow, no headless CMS, no React framework, no Tailwind, no Next.js. The whole site is plain files in a Git repo. View source on any page to verify; the HTML is hand-shaped, not framework-extruded.

### Principle 3: Posted prices, posted process

Every operational detail is on a public page before any conversation begins. [Pricing](/pricing/), the [service agreement](/agreement/), the [owner's guide](/owners-guide/), the [technical approach](/technical-approach/), the [Service Site Standard](/method/), and a [public changelog](/changelog/) of every shipped change. A prospect can read the entire engagement before the discovery call, and the discovery call exists to confirm fit, not to reveal the deal.

### Principle 4: Fast by construction

Mobile PageSpeed sits between 95 and 100 on every page. Time-to-first-byte from Cloudflare's edge is well under 100ms. The image pipeline emits AVIF, WebP, and JPEG at multiple widths automatically. CSS is concatenated at build time and per-page-purged so each route only ships the rules it actually uses (~50KB per page, ~10KB brotli on the wire). JavaScript on a typical page is under 10KB. None of that was added later as an optimization phase; it is the way the site is assembled.

### Principle 5: Accessible by default

WCAG 2.2 AA across every page. Real contrast ratios, verified. 44×44px minimum touch targets. Keyboard navigation throughout. Skip links, semantic HTML, visible focus rings, `aria-current` on active nav. The [accessibility statement](/accessibility/) is a contractual commitment, not aspirational copy. WAVE and Lighthouse run on every deploy.

### Principle 6: Local before global

This is the agency's own site, so the local-pack pressure is lower than for a typical service business. The architecture is the same anyway: LocalBusiness schema present on the homepage, NAP consistent across every page, real city-level service-area pages for the metros where service-business clients actually operate, embedded service-area maps via Leaflet and OpenStreetMap (no Google Maps tracker, no Mapbox account).

### Principle 7: Boring infrastructure

[Eleventy](/blog/eleventy-static-site-generator/), Nunjucks, vanilla CSS, vanilla JavaScript, [Cloudflare Pages](/blog/cloudflare-pages-hosting/), [Web3Forms](/blog/web3forms-contact-and-lead-forms/), [Pagefind](/blog/pagefind-full-text-search/). Nothing on that list is brand-new, nothing on that list is hyped, and nothing on that list has changed substantially in the last three years. The site you are reading now will run identically in 2030 because the underlying technology is not moving.

## What shipped

What's live, today, that you can verify yourself:

- **The marketing surface.** Home, pricing, how-it-works, what-I-build, methodology, technical approach, samples, walk-through, sample forms, audit, calculator, grader, contact.
- **Eight platform comparisons.** Side-by-side writeups against Wix, Squarespace, GoDaddy, Webflow, WordPress, AI builders, traditional agencies, and freelance developers.
- **Six live demo sites.** Roofing, home inspection, landscaping, HVAC, electrical, plumbing — each with its own visual language, its own stack, and its own working contact form. Real builds, not screenshots.
- **A working blog.** 30+ practical posts on local SEO, page speed, the stack itself, accessibility, comparisons. Sticky table-of-contents per post, share buttons, structured-data schema, RSS feed.
- **A 165-entry glossary.** Plain-language definitions for every technical term used anywhere on the site.
- **Service-area pages for 30 metros** across the U.S. and Canada, each with a real local map and indexable local content.
- **A full client portal.** Onboarding form, content-update form, design-feedback form, emergency-support form, referral form, testimonial form. Existing clients have one bookmarkable URL.
- **The full operating posture.** Service agreement, owner's guide, methodology, technical approach, accessibility statement, privacy policy, terms of use, public changelog.

The whole catalog is more than a hundred pages. Every one is auditable in [PageSpeed Insights](https://pagespeed.web.dev). Every one ships from the same flat $175/month plan I sell.

## What this proves

The site is the deliverable. If the agency's own site cannot demonstrate the Service Site Standard end-to-end, the methodology is rhetoric. If the site can — and it does — the methodology is the product.

Every claim on this page is verifiable today by a stranger with a browser and the public auditors. That is the point.

## What the next case study will look like

The same shape, with one difference: a real client's metrics. The next study will be the first paying client who grants written permission per the consent clause in the [service agreement](/agreement/). When it ships, this case study stays as the dogfood reference and a "Client studies" section appears alongside it.

If you would like to be that client — and your build can be the next case study published here — the [discovery call](/contact/) is the right starting point.
