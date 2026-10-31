---
layout: layouts/case-study.njk
permalink: /case-studies/project-broadsheet/
title: "Project Broadsheet: an open-source editorial framework"
client: "Project Broadsheet"
liveUrl: "https://projectbroadsheet.com"
trade: "Editorial framework"
metro: "Online project"
summary: "An open-source framework for long-form publishers, built from scratch: nine sections, reviews, a public-domain library, site search, and the search-engine groundwork and reading features I build into every site."
selfStudy: true
greenfield: true
metrics:
  - label: "Sections"
    value: "9"
    note: "Reviews, essays, dispatches, the library, and more, each with its own listing and page design."
  - label: "Speed score on phones"
    value: "95–100"
    note: "Every page, on phones and computers. Check projectbroadsheet.com at pagespeed.web.dev."
  - label: "Accessibility standard"
    value: "WCAG 2.2 AA"
    note: "A long-form layout with pull quotes, footnotes, and drop caps, checked from end to end."
  - label: "Site search"
    value: "Pagefind"
    note: "A search tool that runs in the reader's browser and covers every piece, with no server or outside service."
  - label: "Public-domain library"
    value: "One page per work"
    note: "Each library work has its own page that search engines can find and readers can cite."
---

## The project

Project Broadsheet is an open-source framework for long-form publishers. It shows what a serious independent magazine site could look like in 2026, built from a blank file without the shortcuts that make sites slow, hard to use, and hard to find.

Every layout and page design is general enough for any publisher to reuse. There was no earlier version; I designed it to be the model.

## The build

Nine sections sit side by side, including essays, dispatches, reviews, and the library. Each has its own listing, page design, categories, and search-engine labels, so Google can tell a review from a library work or an article.

Star ratings are text that screen readers and search engines can read, and every review's labels pass Google's rich-result tests. Each work in the public-domain library has its own page and a trail back to the library index.

The reading features match what I add to every client site: a table of contents, a reading-progress bar, share buttons, and related pieces. There are no outside fonts, no outside analytics by default, and no cookie banner.

## The principles applied

### Posted prices, posted process

The framework is open source, with all its code and a guide to its structure in public, so any publisher can copy it without asking.

### Custom code over CMSes

It's custom code throughout, with no content management system underneath, so a publisher who uses it owns their content, archive, and site.

### Fast by construction

Every page, including long reviews and essays, scores 95 to 100 on Google's speed test on phones. Pages load only the styles they use, and images come in several sizes.

### Accessible by default

Long-form layouts are the hardest case for accessibility, because quotes, footnotes, drop caps, and end marks each need care. I handled each by hand, and the framework meets WCAG 2.2 AA.

## Why it belongs here

A typical service-business site is far simpler. If I can build a publication with nine sections, search, labels for every kind of content, and top speed scores, a contractor's site is a much smaller version of the same job.

## Visit the live site

The model site is at <a href="https://projectbroadsheet.com" rel="noopener" class="inline-link">projectbroadsheet.com</a>. Look through any page, or run it through Google's speed test.
