---
title: "Local Business Schema: How Google Reads Your Site"
date: 2026-05-23
label: "Performance & SEO"
description: "Schema markup tells Google exactly what your business is, where it is, and what it does. Here's the JSON-LD I write for every service-business client."
ctaLabel: "Schema written by hand"
ctaHeading: "I write the schema for every site I build"
ctaText: "LocalBusiness, Service, FAQPage, and BlogPosting: every schema type that applies, written by hand to match your Google Business Profile. It's part of the standard plan, with no plugin."
layout: layouts/post.njk
tags: [post]
---

<p>One difference between a small-business site that ranks well and one that doesn't is whether it speaks Google's language. Visitors see the same text, photos, and prices either way. The difference is structured data: small blocks of hidden code that tell Google what the page is about, who it's for, and how it connects to businesses and places Google already knows.</p>

<p>The format is called Schema.org structured data, usually written as JSON-LD, and only search engines read it. For a service business, it's one of the most effective local search signals available, yet a surprising number of small-business sites have none.</p>

<h2>What Schema.org is</h2>

<p>Schema.org is a shared vocabulary maintained by Google, Microsoft, Yahoo, and Yandex. It defines types of things (LocalBusiness, Service, Person, Product, FAQPage, and so on) and the details each can have (name, address, telephone, hours, rating). Structured data on a page says, in effect, "this page is about a thing of type X with these details."</p>

<p>The data sits in a <code>&lt;script type="application/ld+json"&gt;</code> tag in the page's head, the part of the code visitors don't see. It's written in JSON, a format machines read easily and people can follow. A few other tools also read it, such as LinkedIn link previews, Pinterest pins, and Apple Maps cards.</p>

<p>Google uses the data to confirm what the page is about. It also builds "rich results" from it, the extras in search such as an FAQ dropdown, star ratings, or a business card with hours. And it feeds the Knowledge Graph, Google's database of known businesses, people, and places. Google can rank a site with clean schema with confidence; without schema, it has to guess.</p>

<h2>The schema types that matter for a service business</h2>

<p>Most service-business sites need four types.</p>

<h3>LocalBusiness</h3>

<p>The main type tells Google "this site represents a local business with these details": name, address, phone, hours, map coordinates, payment methods, and, for many subtypes, the area served.</p>

<p>It has dozens of subtypes, such as Plumber, Electrician, RoofingContractor, HVACBusiness, HomeAndConstructionBusiness, and GeneralContractor, each with slightly different recommended details. Picking the right one matters, because Google's map rankings (the "local pack") read it.</p>

<p>This block lives on the homepage, and every other page points to it through one shared ID, so no two pages ever disagree.</p>

<h3>Service</h3>

<p>For each major service, a Service block tells Google "this page describes this service, offered by this business, in this area, at about this price." It sits on the service page and points to the LocalBusiness through the same shared ID. That's how Google matches the right page to a search like "plumber Colorado Springs water heater install".</p>

<h3>FAQPage</h3>

<p>On a page with an FAQ section, this type spells out the questions and answers. Google sometimes shows them as a dropdown under the search result, which can bring noticeably more clicks. It's an easy win: the page already has the content, and the schema adds a few lines of JSON. Google decides whether to show the dropdown, but the schema makes the page eligible.</p>

<h3>BlogPosting / Article</h3>

<p>This type marks a blog post as an article with an author, publication and update dates, and a main image. Google uses it for article results, and social platforms use it for link previews.</p>

<h2>What I write for every client</h2>

<p>Writing the schema takes about an hour per launch for a typical service business and produces:</p>

<ol>
  <li><strong>One LocalBusiness block on the homepage.</strong> It includes the business name, address, map coordinates, phone, email, hours, area served, payment methods, and logo address. The subtype matches the trade exactly (Plumber, Roofer, ElectricalBusiness, and so on).</li>
  <li><strong>One Service block per major service page.</strong> Each points to the LocalBusiness and names the service, the area served, and, where it fits, a price range.</li>
  <li><strong>FAQPage blocks on pages with FAQ sections.</strong> One question-and-answer pair per FAQ entry.</li>
  <li><strong>BlogPosting blocks on every blog post.</strong> Author, dates, image, and headline, filled in automatically from each post's settings when the site is built.</li>
  <li><strong>BreadcrumbList blocks on every page.</strong> They describe where the page sits in the site's menu, which Google sometimes shows in results as a path.</li>
</ol>

<p>I write every block by hand for the business instead of letting a plugin (an add-on) fill in a template. The differences are small but they count, because Google's map rankings put more and more weight on details unique to each business.</p>

<h2>Why I do not use plugins</h2>

<p>WordPress plugins such as Yoast and Rank Math produce schema automatically, and for many sites the result is good enough. It has limits, though:</p>

<p><strong>It's generic.</strong> The same plugin produces nearly identical schema on every site that uses it, and Google can tell.</p>

<p><strong>It's incomplete.</strong> Plugins usually cover the basics (Organization, Article) and skip the types that help map rankings: Service, FAQPage, and the right LocalBusiness subtype.</p>

<p><strong>It can be wrong.</strong> Plugins often fall back to a general Organization type where LocalBusiness fits better, or pick the wrong subtype.</p>

<p>On my sites, schema is part of the design work from the start, so it's more accurate and complete than a plugin's.</p>

<h2>How to check your own schema</h2>

<p>Two free tools:</p>

<p><strong>Google's Rich Results Test.</strong> Go to <a href="https://search.google.com/test/rich-results" rel="noopener" class="inline-link">search.google.com/test/rich-results</a>, paste a page address, and run the test. It shows the schema Google found, the rich results the page qualifies for, and any errors. Run it on the homepage and a few inner pages.</p>

<p><strong>Schema.org Validator.</strong> <a href="https://validator.schema.org/" rel="noopener" class="inline-link">validator.schema.org</a> is less strict and catches structural problems Google's tool sometimes ignores.</p>

<p>If the report finds a general Organization type but no LocalBusiness, the local details are missing. If it finds the right types with errors, the fixes are usually simple.</p>

<h2>What clean schema enables</h2>

<p>Three benefits show up within months:</p>

<p><strong>Map rankings.</strong> The three businesses Google shows on a map for "near me" searches are chosen partly by schema accuracy. Sites with clean LocalBusiness schema are eligible to appear there, and sites without it aren't.</p>

<p><strong>Rich results in search.</strong> The FAQ dropdown, star rating, breadcrumb path, and "More about this business" card all come from schema. They take more space on the results page and earn more clicks.</p>

<p><strong>A place in the Knowledge Graph.</strong> Sites with enough schema join the Knowledge Graph as recognized businesses, which many other ranking signals build on. After that, Google ranks pages about the business with much more confidence.</p>

<h2>If your current site has no schema</h2>

<p>Schema is the cheapest local search improvement you can make, and one of the most effective. On sites I build, it's in the standard plan from launch. WordPress users can install Yoast or Rank Math, which work but produce generic schema. Squarespace and Wix have built-in schema that may need setting up, and other custom-coded sites need it written by hand.</p>
