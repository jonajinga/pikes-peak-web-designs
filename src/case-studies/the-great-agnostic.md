---
layout: layouts/case-study.njk
permalink: /case-studies/the-great-agnostic/
title: "The Great Agnostic: a literary archive in monochrome"
client: "The Great Agnostic"
liveUrl: "https://thegreatagnostic.com"
trade: "Literary archive"
metro: "Online project"
summary: "A complete archive of Robert Green Ingersoll's 12-volume Dresden Edition, built from a blank file: 177 works in full, a biography, a timeline, and a map of his connections, in a monochrome Victorian design built the same way as every client site."
selfStudy: true
greenfield: true
metrics:
  - label: "Works in full text"
    value: "177"
    note: "Every essay, lecture, and interview in the Dresden Edition, from the original text files."
  - label: "Speed score on phones"
    value: "95–100"
    note: "Every page, on phones and computers. Check thegreatagnostic.com at pagespeed.web.dev."
  - label: "Accessibility standard"
    value: "WCAG 2.2 AA"
    note: "Long Victorian prose with drop caps and italics, checked for color contrast and page structure."
  - label: "Search-engine labels"
    value: "Every work"
    note: "Each work, the biography, and the FAQ carry labels that tell search engines what they are."
  - label: "Light and dark mode"
    value: "Both"
    note: "Readers can switch modes, and the page never flashes the wrong one as it loads."
---

## The project

The Great Agnostic is my archive of Robert Green Ingersoll, the 19th-century speaker known as "the Great Agnostic." His works fill the 12-volume Dresden Edition, but when I built the site, no clean, searchable version of the full collection existed online: only scans on archive.org, PDFs on Project Gutenberg, and excerpts quoted on blogs. Now the whole archive is online, laid out for readers and search engines alike.

## The build

A script I wrote reads the Dresden Edition's original text files and turns each work into its own page, with its own address, search-engine labels, and links to the previous and next work: 177 in all.

The look is Victorian: Playfair Display and Crimson Pro type on warm cream and charcoal, with drop caps, the original italics, and a table of contents that stays in view on long pieces.

The site adds a biography, a 25-event timeline, a map linking Ingersoll to 13 contemporaries (Whitman, Twain, Lincoln, and others), source links, an FAQ, privacy and terms pages, full-text search, and an RSS feed for the blog.

## The principles applied

### Custom code over CMSes

With no content management system, the 177 works needed no import tools. Each is a simple text file, and the whole archive builds in under three seconds.

### Fast by construction

Every page scores 95 to 100 on Google's speed test on phones, even works several thousand words long, and no tracking scripts or outside fonts load for visitors.

### Accessible by default

Victorian prose brings its own accessibility problems: drop caps, all-capital headings, and dense italics. I handled each by hand, and the whole collection meets WCAG 2.2 AA.

### Boring infrastructure

The site is a set of files built with proven tools. Publishing it depends on no single company's account and no service running behind the scenes.

## Why it belongs here

Most service-business sites are a tenth as complex: 10 or 20 pages, a blog, and a contact form. This archive has more than 177 pages of long historical writing, with search, light and dark modes, an RSS feed, and an FAQ that can appear in Google's rich results. A roofing or plumbing site is a smaller version of the same job.

## Visit the live site

The archive is at <a href="https://thegreatagnostic.com" rel="noopener" class="inline-link">thegreatagnostic.com</a>. Run any page through Google's speed test, or view the source of any work.
