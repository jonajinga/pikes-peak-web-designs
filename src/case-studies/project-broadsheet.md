---
layout: layouts/case-study.njk
permalink: /case-studies/project-broadsheet/
title: "Project Broadsheet — an open-source editorial framework"
client: "Project Broadsheet"
liveUrl: "https://projectbroadsheet.com"
trade: "Editorial framework"
metro: "Open-web project"
summary: "An open-source editorial framework on Eleventy for long-form publishers. Nine editorial sections, a reviews stack, a public-domain library, search, and the full SEO + structured-data + reader-experience layer that ships with every site I build, designed and built from scratch with no prior version."
selfStudy: true
greenfield: true
metrics:
  - label: "Editorial sections"
    value: "9"
    note: "Distinct content types each with their own listing, taxonomy, and template. Reviews, essays, dispatches, library, et al."
  - label: "Mobile PageSpeed"
    value: "95–100"
    note: "Every page, mobile and desktop. Verifiable in pagespeed.web.dev against projectbroadsheet.com."
  - label: "Accessibility floor"
    value: "WCAG 2.2 AA"
    note: "Long-form editorial layout with quote pulls, footnotes, and dropcaps, audited end-to-end."
  - label: "Search"
    value: "Pagefind static"
    note: "Full-text client-side search across every published piece. No backend, no API key, no third-party dependency."
  - label: "Public-domain library"
    value: "Indexable per-work"
    note: "Each library work is its own indexable URL with structured data — every entry available for direct linking and citation."
---

## The brief, framed honestly

Project Broadsheet is an open-source editorial framework for long-form publishers. It is the answer to the question, "what would a serious independent magazine site look like in 2026, if you started from a blank file and refused every stack shortcut that produces a slow, accessibility-poor, SEO-thin site?"

The point of the project is to be reusable. Every layout, every taxonomy, every template is generic enough to belong to any long-form publisher who clones it. There was no "before" — the whole framework was designed and built specifically to be the reference shape.

## The build, end to end

Nine editorial sections live alongside each other: essays, dispatches, reviews, the library, a search interface, plus support pages. Each section has its own listing template, its own per-item template, its own taxonomy, and its own rich-result schema. A piece in *Reviews* ships `Review` schema with the right `itemReviewed` and `reviewRating`; a piece in *Library* ships `CreativeWork` with the right `author` and `datePublished`; a dispatch ships `Article`. A search engine that crawls the site sees the right kind of content in the right kind of envelope on the right kind of URL.

The reviews stack is a deliberate piece of work in its own right. Star ratings render as semantic markup, not background images. A reviewer byline pulls from a per-author data file. Every review's structured data validates in the Schema.org validator and produces a real rich result in test pages of the Google search console.

The public-domain library is a separate listing under `/library/` where each work is an indexable per-work URL. The library page itself is a paginated index. Each work carries its own metadata, its own canonical URL, its own structured data, and its own breadcrumb back to the library.

The reader experience layer is the same one I install on every client site: sticky table of contents on long pieces, reading-progress bar at the top, share buttons, a clean prev/next pager, related-piece grid. Privacy-respecting: no Google Fonts on the visitor path, no third-party analytics by default, no cookie banner needed.

## The principles applied

### Posted prices, posted process

The framework is open source. The whole codebase is on a public repository. The README documents the section structure, the data model, and the deploy step. A publisher who wants to fork it can do so without asking for permission.

### Custom code over CMSes

Eleventy v3 (ESM), Nunjucks templates, vanilla CSS, vanilla JS. The whole framework is a static-site build. No WordPress, no Ghost, no Substack, no Medium. A publisher cloning it owns their content, their archive, and their entire stack.

### Fast by construction

Mobile PageSpeed 95–100 on every page including the long-form review and essay templates. CSS per-page-purged at build. Image pipeline emits AVIF + WebP + JPEG at multiple widths. JavaScript on the reader path is minimal and deferred.

### Accessible by default

Long-form layout is the worst case for accessibility because every piece introduces new typography (quotes, pull-quotes, footnotes, footnote references, drop caps, end-of-piece glyphs). Each was solved by hand. WCAG 2.2 AA across the corpus.

## Why it qualifies as a case study

A typical service-business site is far simpler than this. If the engineering posture and the design system can produce a publication-grade editorial framework with nine sections, working search, structured data per content type, and 95–100 PageSpeed across the board, then a contractor's marketing site is a much smaller variant of the same job.

## Visit the live site

The reference deployment is on the open web at <a href="https://projectbroadsheet.com" rel="noopener" class="inline-link">projectbroadsheet.com</a>. Inspect any URL. Run any page through PageSpeed Insights. The numbers and the engineering shape are auditable in the public tools.
