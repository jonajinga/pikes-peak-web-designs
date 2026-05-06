---
layout: layouts/case-study.njk
permalink: /case-studies/the-great-agnostic/
title: "The Great Agnostic — a literary archive in monochrome"
client: "The Great Agnostic"
liveUrl: "https://thegreatagnostic.com"
trade: "Literary archive"
metro: "Open-web project"
summary: "A complete archive of Robert Green Ingersoll's twelve-volume Dresden Edition, designed and built from a blank file with a custom Victorian typographic system, full structured data, and a monochrome aesthetic. 177 verbatim works, a biography, a timeline, and a connections graph, all on the same engineering posture every client site here uses."
selfStudy: true
greenfield: true
metrics:
  - label: "Verbatim works rendered"
    value: "177"
    note: "Every essay, lecture, and interview from the 12-volume Dresden Edition, ingested from source TXTs into custom Eleventy templates."
  - label: "Mobile PageSpeed"
    value: "95–100"
    note: "Every page, mobile and desktop. Verifiable in pagespeed.web.dev against thegreatagnostic.com."
  - label: "Accessibility floor"
    value: "WCAG 2.2 AA"
    note: "Long-form Victorian-era prose with custom drop caps and italic emphasis, audited for color contrast and semantic structure."
  - label: "Schema coverage"
    value: "Per-work + Person"
    note: "Every work ships CreativeWork JSON-LD. Biography ships Person + WebSite + BreadcrumbList. FAQ page ships FAQPage."
  - label: "Theme system"
    value: "Light + dark"
    note: "Two-mode toggle with localStorage + prefers-color-scheme, no flash of wrong theme on initial paint."
---

## The brief, framed honestly

The Great Agnostic is a personal project: a literary archive of Robert Green Ingersoll, the nineteenth-century orator known to history as "the Great Agnostic." His complete works fill twelve volumes in the Dresden Edition, and at the time of this build, no clean, reader-friendly, search-engine-indexable version of the full corpus existed online. Plain-text scans on archive.org. PDFs on Project Gutenberg. A few of the more famous lectures floated around in blog excerpts. Nothing approaching a real archive.

This is the entire archive, on the open web, with a structure that respects both the reader and the search engine. Built greenfield, no pre-existing site to migrate, no CMS to fight with.

## The build, end to end

The full Dresden Edition was ingested from source TXTs into Eleventy via a custom pipeline (`scripts/ingest-dresden.mjs`) that reads a manifest of WORKS, identifies each work's body content by a distinctive start-marker phrase, and emits per-work markdown files into the Eleventy collection. 177 works in total, each with its own URL, breadcrumb, structured-data block, and prev/next navigation.

The visual register is Victorian. Playfair Display for display, Crimson Pro for body, monochrome palette throughout (paper warm-cream, ink dark charcoal, no chromatic accent). The typographic system carries drop caps on long-form work, italic emphasis preserved from the source text, and a sticky table of contents on every long piece.

Beyond the works themselves, the site ships a full biography, a 25-event timeline, a connections graph linking Ingersoll to thirteen contemporaries (Whitman, Twain, Lincoln, etc.), a resources page with the original Dresden Edition source links, an FAQ, and a privacy/terms layer for completeness.

Search runs client-side via Pagefind across every word of every work. RSS feed for the blog. JSON-LD on every page in the right shape (CreativeWork for works, Person for the biography, BlogPosting for posts, FAQPage for the FAQ).

## The principles applied

### Custom code over CMSes

Eleventy v3 (ESM), Nunjucks templates, vanilla CSS, vanilla JS. No WordPress, no headless CMS. The 177-work corpus would have needed its own migration tooling on any CMS; on Eleventy each work is a markdown file, and the build emits the entire archive in under three seconds.

### Fast by construction

Mobile PageSpeed 95–100 across every page, including the works themselves which run several thousand words each. CSS concatenated and per-page-purged at build time. No analytics tracker. No third-party fonts on the visitor path.

### Accessible by default

Long-form Victorian prose has its own accessibility hazards — drop caps, all-caps section heads, italic emphasis dense enough to fight contrast. Each was solved by hand: drop caps use real `:first-letter` rules with adequate size and color, all-caps is reserved for section labels not body, italics retain full text contrast. WCAG 2.2 AA across the corpus.

### Boring infrastructure

Eleventy + Nunjucks + Cloudflare Pages. No build step that depends on a vendor's account, no deploy that depends on a runtime service. The site is files in a repo, hashed and deployed.

## Why it qualifies as a case study

Most service-business websites are a tenth this complex: ten or twenty pages, a blog, a contact form. The Great Agnostic is 177+ pages of long-form historical prose, custom-typeset, fully structured for search, with a working theme toggle and a working search and a working RSS feed and a working FAQPage rich-result. If the engineering posture can produce that, a roofing site or a plumbing site is a smaller version of the same job.

## Visit the live site

The whole archive is on the open web at <a href="https://thegreatagnostic.com" rel="noopener" class="inline-link">thegreatagnostic.com</a>. Run any URL through PageSpeed Insights. View source on any work. The page-speed numbers, the structured-data shape, and the accessibility posture are all auditable in the public tools.
