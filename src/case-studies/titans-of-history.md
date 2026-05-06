---
layout: layouts/case-study.njk
permalink: /case-studies/titans-of-history/
title: "Titans of History — a structured biographical reference"
client: "Titans of History"
liveUrl: "https://titansofhistory.com"
trade: "Historical reference"
metro: "Open-web project"
summary: "A reference site profiling the figures who shaped the modern world, with biographical depth, structured data on every entry, a custom megamenu, and the same engineering posture that runs every client site here, designed and built from scratch."
selfStudy: true
greenfield: true
metrics:
  - label: "Mobile PageSpeed"
    value: "95–100"
    note: "Every page, mobile and desktop. Verifiable in pagespeed.web.dev against titansofhistory.com."
  - label: "Schema coverage"
    value: "Person + WebSite"
    note: "Every figure ships Person JSON-LD with birth/death dates and a description. Site root ships WebSite + BreadcrumbList."
  - label: "Accessibility floor"
    value: "WCAG 2.2 AA"
    note: "Custom megamenu and biography templates audited end-to-end. Real focus rings, real keyboard navigation, real semantics."
  - label: "Custom megamenu"
    value: "Indexable per-link"
    note: "Each megamenu link is a real anchor on a real URL. No client-side routing, no hash-only states. Every figure is directly linkable."
  - label: "Cookie banner required"
    value: "No"
    note: "No third-party trackers on the visitor path. Privacy-first analytics only."
---

## The brief, framed honestly

Titans of History is a reference site profiling the figures who shaped the modern world. The point of the project is to be a serious biographical resource, the kind a curious reader or a researcher would actually use, on a stack that respects both. There was no prior site to migrate. The whole project was designed and built greenfield, from a blank file, specifically to be the reference shape of "a real reference site on a real engineering foundation."

## The build, end to end

The site is organized around per-figure biographical entries, each with their own URL, their own structured-data envelope, and their own breadcrumb. A reader linking to "Marcus Aurelius" gets a permanent URL that resolves to a complete biographical entry, indexable in Google, citable in academic work, and readable on any device.

The custom megamenu was a deliberate choice. Reference sites lean into the temptation to build everything as a search-driven SPA: type a name, see a result, click. That model is fast for a power user but a disaster for first-time visitors and search engines, because none of the per-figure URLs are real. The megamenu approach gives every figure a real anchor on a real URL, browsable by category, indexable by search engines, and shareable by readers.

Each entry ships `Person` JSON-LD with birth and death dates, country of origin, and a description. The site root ships `WebSite` plus `BreadcrumbList`. A search engine that crawls the site sees the right kind of content in the right kind of structured envelope on the right kind of URL.

The reader-experience layer is the same one every site I build receives: clean serif typography for body, generous leading, sticky table of contents on long entries, prev/next pager, related-figure grid, share buttons. Privacy-first: no Google fonts on the visitor path, no third-party trackers, no cookie banner needed.

## The principles applied

### Custom code over CMSes

Eleventy + Nunjucks + vanilla CSS + vanilla JS. No WordPress, no Wikipedia clone, no Notion-as-CMS. The reference is files in a repo, and the build emits the entire site as static HTML.

### Posted prices, posted process

Reference sites have a particular obligation to clarity, since their job is to be cited. Every entry has a clear authorship, a clear citation, and a clear last-updated date. The structure is consistent across entries so readers can pattern-match what they will find before they click.

### Fast by construction

Mobile PageSpeed 95–100 on every page, including the long biography templates that run several thousand words each. CSS per-page-purged at build. Image pipeline emits AVIF + WebP + JPEG at multiple widths.

### Accessible by default

Custom megamenus are an accessibility hazard if assembled from scratch without care: keyboard navigation breaks, screen-reader semantics get lost, focus management goes haywire. The Titans megamenu was built with real ARIA roles, real keyboard handlers, real focus management. WCAG 2.2 AA verified.

### Boring infrastructure

Eleventy + Cloudflare Pages. The site will run identically in 2030. No part of the stack depends on a vendor's ongoing existence beyond the domain registration.

## Why it qualifies as a case study

A reference site with a custom megamenu, structured data on every entry, and 95–100 PageSpeed is a harder build than a typical service-business marketing site. If the engineering posture can produce that, an HVAC company's services-and-service-area site is a smaller variant of the same job, on a faster timeline, on the same flat monthly plan.

## Visit the live site

The reference is on the open web at <a href="https://titansofhistory.com" rel="noopener" class="inline-link">titansofhistory.com</a>. Inspect any URL. Run any page through PageSpeed Insights. The numbers, the schema, and the engineering posture are all auditable in the public tools.
