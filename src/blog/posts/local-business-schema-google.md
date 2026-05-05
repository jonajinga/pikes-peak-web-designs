---
title: "Local Business Schema: How Google Reads Your Site"
date: 2026-05-23
label: "Performance & SEO"
description: "Schema markup tells Google exactly what your business is, where it is, and what it does. Here is the JSON-LD I write for every service-business client."
ctaLabel: "Schema written by hand"
ctaHeading: "I author the schema for every site I build."
ctaText: "LocalBusiness, Service, FAQPage, BlogPosting — every relevant schema type, hand-written against your real Google Business Profile. Part of the standard plan, no plugin."
layout: layouts/post.njk
tags: [post]
---

<p>One of the quiet differences between a small-business website that ranks well and one that does not is whether the site speaks Google's language. The visible content is the same: text, photos, contact information, prices. The invisible difference is structured data — small JSON blocks embedded in the HTML that tell Google exactly what the page is about, who it is for, and how it relates to other entities Google already knows.</p>

<p>The format is called Schema.org structured data, usually expressed as JSON-LD. It is invisible to visitors and visible only to search engines. For a service business, it is one of the highest-leverage local-SEO signals available, and a remarkable number of small-business websites do not have it at all.</p>

<p>This post explains what Schema.org is, what types matter for a service business, what I write into every site I build, and how to check what your own site has now.</p>

<h2>What Schema.org is</h2>

<p>Schema.org is a vocabulary maintained jointly by Google, Microsoft, Yahoo, and Yandex. It defines a controlled set of entity types (LocalBusiness, Service, Person, Product, FAQPage, etc.) and the properties each type can have (name, address, telephone, hours, rating, etc.). When a page declares structured data, it is essentially saying "this page is about a thing of type X with these properties."</p>

<p>The data lives inside a <code>&lt;script type="application/ld+json"&gt;</code> tag in the HTML head. The format is JSON, which is easy for machines to parse and reasonably readable for humans. The data is invisible to visitors; the only consumer is search engines and a small number of other tools (LinkedIn unfurls, Pinterest pins, Apple Maps cards).</p>

<p>What Google does with the data: it uses it to confirm the entity the page is about, to render rich-result features in search (the FAQ accordion under a result, the star rating, the local business card with hours), and to feed its broader Knowledge Graph. A site with clean schema is one Google can confidently rank for queries about its specific entity; a site without schema is one Google has to guess about.</p>

<h2>The schema types that matter for a service business</h2>

<p>Most service-business websites benefit from four specific schema types. Each one solves a specific Google-side question.</p>

<h3>LocalBusiness</h3>

<p>The flagship type. Tells Google "this site represents a local business with these specific properties." Includes the business name, address, phone number, hours of operation, geo coordinates, payment methods accepted, and (for many subtypes) the area served.</p>

<p>The LocalBusiness type has dozens of subtypes. Plumber, Electrician, RoofingContractor, HVACBusiness, HomeAndConstructionBusiness, GeneralContractor — each with slightly different recommended properties. Picking the right subtype is part of the work. The browser does not care about the subtype, but Google's local-pack algorithm reads it.</p>

<p>For a typical service business, the LocalBusiness block lives on the homepage and is referenced by every other page through a single canonical ID, so Google never sees a conflict between pages.</p>

<h3>Service</h3>

<p>For each major service the business offers, a Service schema block tells Google "this page describes this specific service, offered by this LocalBusiness, in this geographic area, at this approximate price range."</p>

<p>The Service blocks live on individual service pages and reference the parent LocalBusiness through the same canonical ID. This pattern is how Google can rank the right service page for a query like "plumber Colorado Springs water heater install" — the Service schema explicitly names the service, the area, and the parent business.</p>

<h3>FAQPage</h3>

<p>For pages with FAQ sections, the FAQPage type tells Google the questions and answers explicitly. Google sometimes renders the questions as an expandable accordion directly under the search result, which is a meaningful click-through-rate boost.</p>

<p>FAQ schema is one of the easiest wins. A page with a "Frequently Asked Questions" section already has the content; adding the schema is a few lines of JSON. The rich-result render is at Google's discretion (not every FAQ gets the accordion), but the schema makes the eligibility clear.</p>

<h3>BlogPosting / Article</h3>

<p>For blog posts, the BlogPosting type identifies the post as an article with a specific author, publication date, modification date, and main image. Used by Google's news and article-rich-result surfaces, plus by social platforms when unfurling links.</p>

<h2>What I write for every client</h2>

<p>For each site I build, the schema authoring is part of the launch process. The work runs about an hour for a typical service business and produces:</p>

<ol>
  <li><strong>One LocalBusiness block on the homepage.</strong> Includes the business name, address, geo coordinates, phone, email, opening hours, area served, payment methods accepted, and a logo URL. The subtype matches the trade exactly (Plumber, Roofer, ElectricalBusiness, etc.).</li>
  <li><strong>One Service block per major service page.</strong> Each one references the parent LocalBusiness, names the specific service, the area served, and (where appropriate) a price range.</li>
  <li><strong>FAQPage blocks on pages with FAQ sections.</strong> One Question/Answer pair per FAQ entry on the page.</li>
  <li><strong>BlogPosting blocks on every blog post.</strong> Author, dates, image, headline. Auto-generated from the post's frontmatter at build time.</li>
  <li><strong>BreadcrumbList blocks on every page.</strong> The site's navigation hierarchy, expressed as schema, which sometimes shows up in search results as a breadcrumb path.</li>
</ol>

<p>Every schema block is hand-written against the actual business, not generated by a plugin from a template. Plugins produce template-grade schema; the differences from a hand-written version are subtle but real, and Google's local-pack algorithm increasingly weights uniqueness.</p>

<h2>Why I do not use plugins</h2>

<p>WordPress plugins like Yoast and Rank Math produce schema automatically. They do it well enough that for many sites the result is acceptable. But the auto-generated schema has limitations:</p>

<p><strong>It is template-grade.</strong> The same plugin produces nearly-identical schema on every site that uses it. Google can tell.</p>

<p><strong>It is incomplete.</strong> Plugins typically cover the basics (Organization, Article) but skip the more specific types (Service, FAQPage, the right LocalBusiness subtype) that move local-pack rankings.</p>

<p><strong>It can be wrong.</strong> Plugins often default to generic Organization schema when LocalBusiness would be more accurate, or they pick the wrong LocalBusiness subtype.</p>

<p>For sites I build, the schema is part of the design work, not an afterthought. The result is more accurate, more complete, and more uniquely tied to the specific business than a plugin can produce.</p>

<h2>How to check your own schema</h2>

<p>Two free tools:</p>

<p><strong>Google's Rich Results Test.</strong> Visit <a href="https://search.google.com/test/rich-results" rel="noopener" class="inline-link">search.google.com/test/rich-results</a>, paste a URL, run the test. The tool shows what schema Google detected on the page, what rich-result features the page is eligible for, and what warnings or errors the schema contains. Worth running on the homepage and on a few interior pages.</p>

<p><strong>Schema.org Validator.</strong> Visit <a href="https://validator.schema.org/" rel="noopener" class="inline-link">validator.schema.org</a> for a more permissive check. The tool surfaces structural problems Google's tool sometimes ignores.</p>

<p>If the report shows zero schema, the site has no structured data at all. If it shows generic Organization without LocalBusiness, the schema is partially correct but missing the local signals. If it shows the right types with errors flagged, the fixes are usually straightforward.</p>

<h2>What clean schema enables</h2>

<p>Three concrete benefits show up within months of getting schema right:</p>

<p><strong>Local-pack ranking.</strong> The "map pack" of three local businesses Google shows for "near me" queries is partially driven by schema accuracy. Sites with clean LocalBusiness schema are eligible to show up; sites without are not.</p>

<p><strong>Rich results in search.</strong> The expandable FAQ accordion under a search result, the star rating, the breadcrumb path, the "More about this business" card — all are rendered from schema. They take up more visual real estate in search results and earn more clicks.</p>

<p><strong>Knowledge Graph inclusion.</strong> Sites with sufficient schema get added to Google's Knowledge Graph as recognized entities, which is the foundation for many of Google's other ranking signals. Once a business is in the Knowledge Graph, it becomes much easier for Google to confidently rank pages about it.</p>

<h2>If your current site has no schema</h2>

<p>It is the cheapest local-SEO improvement available, and one of the highest-leverage. For sites I build, schema is part of the standard plan from launch. For sites I do not build, the path depends on the platform: WordPress users can install Yoast or Rank Math (acceptable but template-grade), Squarespace and Wix users have built-in schema that may need configuration, custom-coded sites need the schema authored by hand.</p>

<p>The free <a href="/audit/" class="inline-link">five-point audit</a> covers schema as part of the standard pass; the report names whether your site has it, what types are present, what is missing, and what to do about each gap.</p>
