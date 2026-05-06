---
layout: layouts/case-study.njk
permalink: /case-studies/the-freethinking-times/
title: "The Freethinking Times — an independent publication, custom-built"
client: "The Freethinking Times"
liveUrl: "https://thefreethinkingtimes.com"
trade: "Independent publication"
metro: "Open-web project"
summary: "An independent publication on philosophy, history, and ideas, designed and built from a blank file. Custom editorial layout, integrated newsletter, RSS feed, and the same accessibility and performance bar every site here ships with."
selfStudy: true
greenfield: true
metrics:
  - label: "Mobile PageSpeed"
    value: "95–100"
    note: "Every page, mobile and desktop. Verifiable in pagespeed.web.dev against thefreethinkingtimes.com."
  - label: "Accessibility floor"
    value: "WCAG 2.2 AA"
    note: "Long-form editorial design with serif body, generous leading, and high-contrast tokens. Audited on every deploy."
  - label: "Newsletter"
    value: "Self-hosted"
    note: "Subscribe form integrated directly into the site, sender on a privacy-respecting platform, no third-party tracker on the page."
  - label: "RSS feed"
    value: "Atom 1.0"
    note: "Auto-generated on every build. Real readers can subscribe in any RSS client without depending on the site's own delivery."
  - label: "Cookie banner required"
    value: "No"
    note: "No third-party analytics, no Facebook pixel, no Google fonts on the visitor path. Privacy-first by construction."
---

## The brief, framed honestly

The Freethinking Times is an independent publication on philosophy, history, and ideas. It belongs to its author; it does not live inside Substack, Medium, or any other host that owns the audience. The point of the project is to demonstrate what an independent publication looks like when it is built like a proper site, not assembled out of a templated subscription product.

There was no prior version. The whole publication was designed and built greenfield, from a blank file, specifically to be the reference shape of "an independent publication that owns its own URL, its own subscribers, its own search ranking, and its own engineering posture."

## The build, end to end

The reading experience is the load-bearing piece. Long-form essays use a deliberate serif body face with generous leading and a column width tuned to a comfortable reading length. Pull quotes, footnotes, and inline citations all use proper semantic markup so screen readers and search engines see them as what they are. Every essay carries structured data so it shows up in Google search with the right author, date, and excerpt.

The newsletter is integrated into the site itself, not bolted on via a third-party widget. Visitors who want the next issue subscribe directly. No cookie banner is required because no tracker is loaded; the subscribe action is a form post to a privacy-respecting platform, and the form itself is on the site.

The RSS feed is real and complete. Every essay appears in the feed in a format any RSS client can consume. Readers who prefer to control their own subscriptions can do so without depending on the site for delivery.

Search runs client-side via Pagefind: full-text across every essay, no backend, no API key. The site is a static build deployed to Cloudflare's edge, which means the response is fast everywhere in the world and the platform never goes "down for maintenance."

## The principles applied

### Local before global, but applied to readership

The Freethinking Times has no local-pack pressure (it is not a service business). The principle applies in a different shape: every essay has a real, indexable URL — not a hash-routed SPA pseudo-page — so a reader linking to a piece can be confident the link will resolve and search engines can index it cleanly.

### Custom code over CMSes

Eleventy + Nunjucks + vanilla CSS + vanilla JS, as on every site I ship. No Substack, no Ghost, no Medium, no headless CMS. The author owns the codebase, the content, and the audience.

### Fast by construction

Mobile PageSpeed 95–100 across the publication including long-form essay templates with embedded illustrations. Image pipeline emits AVIF + WebP + JPEG at multiple widths automatically. CSS per-page-purged at build. JavaScript minimal.

### Boring infrastructure

Eleventy + Cloudflare Pages. The technology under this publication will run identically in 2030. No vendor lock-in, no migration risk, no quarterly platform upgrade.

## Why it qualifies as a case study

A blog or a service-business news section is a smaller variant of the same job. If the engineering posture can carry a real publication with structured data, integrated newsletter, RSS feed, and 95–100 PageSpeed, then "can you add a blog to my site" is a yes with no hedge.

## Visit the live site

The publication is on the open web at <a href="https://thefreethinkingtimes.com" rel="noopener" class="inline-link">thefreethinkingtimes.com</a>. Run any URL through PageSpeed Insights. View source on any essay. The page-speed numbers, the structured-data shape, and the privacy posture are all auditable in the public tools.
