---
title: "NAP Consistency: The Boring SEO Fix That Quietly Decides Your Local Rankings"
date: 2026-05-13
label: "Local SEO"
description: "Three pieces of information — Name, Address, Phone — repeated identically across the open web. NAP consistency is the most boring local-SEO fundamental and one of the most predictably load-bearing."
ctaLabel: "NAP set up cleanly"
ctaHeading: "I check every NAP source on launch day."
ctaText: "Site footer, schema markup, Google Business Profile, every directory listing — all reading the exact same business name, address, and phone. Audited as part of the standard pre-launch QA. Part of the standard plan."
layout: layouts/post.njk
tags: [post]
---

<p>Of all the things that decide where a service business ranks in local search, three of them are stunningly mundane. The business's <strong>N</strong>ame, <strong>A</strong>ddress, and <strong>P</strong>hone number &mdash; the NAP &mdash; need to appear identically across every place those facts live online. The website footer, the Google Business Profile, the Yelp listing, the BBB profile, the Chamber of Commerce directory, the trade-association page, the old listings on inactive directories from 2018. Every NAP, byte-for-byte the same.</p>

<p>If that sounds tedious, it is. NAP consistency is the most boring fundamental in local SEO and one of the most predictably load-bearing. Most service businesses with mediocre local rankings have a NAP problem they don't know about, and most local rankings improvements come from fixing the NAP problem rather than from any clever new tactic.</p>

<h2>Why Google cares about NAP consistency</h2>

<p>Google's local-pack algorithm is trying to answer a hard question: which of the dozens of business listings claiming to be "Acme Plumbing in Colorado Springs" is the actual real business? When the listings disagree about the address &mdash; one says 1500 Main Street, another says 1500 N. Main, a third says 1500 Main St. Suite 200 &mdash; Google has to make a call about which is canonical, or worse, has to count them as separate businesses.</p>

<p>Inconsistency reads to Google as either negligence ("this business doesn't manage its presence carefully") or duplication ("these might be two different businesses, hard to know which one is real"). Either interpretation lowers the listing's prominence score, which lowers its position in the local pack.</p>

<p>The fix is not clever. It is meticulous. Every public reference to the business uses the exact same name string, the exact same address string, the exact same phone-number formatting. Google's crawler aggregates the references, sees them all match, and the listing's prominence score climbs.</p>

<h2>What "exact" actually means</h2>

<p>Stricter than most owners initially assume. "Acme Plumbing, LLC" and "Acme Plumbing" are not the same NAP to Google's crawler. "1500 Main St." and "1500 Main Street" are not the same. "(719) 555-0100" and "719-555-0100" and "719.555.0100" are all different.</p>

<p>The canonical version &mdash; the one you commit to and never deviate from &mdash; needs to be decided once. My standard is:</p>

<ul>
  <li><strong>Name:</strong> the official legal name as it appears on the business license, dropped of "LLC" or "Inc." if those are not part of how customers refer to the business. Pick one and never deviate.</li>
  <li><strong>Address:</strong> US Postal Service-formatted. Numbers as digits. Street types abbreviated ("St" not "Street," "Rd" not "Road"). City, state, ZIP on the same line. No suite or unit unless meaningful.</li>
  <li><strong>Phone:</strong> one format, applied everywhere. I default to (XXX) XXX-XXXX with parentheses around the area code; that is the format Google's structured-data parser handles cleanest and the format that matches how American customers naturally read a number.</li>
</ul>

<p>Once the canonical NAP is set, the audit is simply: where are we getting it wrong, and how do we fix each one?</p>

<h2>The standard NAP audit</h2>

<p>The audit takes about an hour the first time and ten minutes per quarter thereafter. The checklist:</p>

<ol>
  <li><strong>Search the business name in Google.</strong> The first page of results includes the website, the Google Business Profile, and the highest-prominence directory listings. Open each and confirm the NAP.</li>
  <li><strong>Search the phone number in Google, in quotes.</strong> "(719) 555-0100" returns every site that has that exact number string. Most are legitimate listings; some are old directories or scrape sites that have outdated information. The legitimate ones get fixed; the scrape sites usually do not need attention because Google's crawler already knows they are unreliable.</li>
  <li><strong>Check the major directories explicitly.</strong> Google Business Profile, Bing Places, Apple Maps, Yelp, Facebook, BBB, Yellow Pages, Manta, Foursquare, Better Business Bureau, the local Chamber of Commerce, the relevant trade associations. Each gets logged in a small spreadsheet alongside the date last verified.</li>
  <li><strong>Check the website itself.</strong> Footer, contact page, schema markup. The schema is the easy one to forget; it is the version Google reads programmatically and any difference between the schema and the visible text is a small flag.</li>
  <li><strong>Check old domains and subdomains.</strong> If the business previously had a website on a different domain that still resolves, that old site's NAP needs to either be updated or 301-redirected to the new domain.</li>
</ol>

<p>The output of the audit is a small log: every public reference, the NAP found, whether it matches the canonical, and the action required. Most audits I run for new clients turn up between three and twelve inconsistencies, almost always from old listings the owner forgot existed.</p>

<h2>What schema markup adds</h2>

<p>Schema markup is structured data embedded in the page's HTML that tells Google explicitly what the NAP is, in a format the crawler does not have to guess at. For a local service business, the relevant schema type is <code>LocalBusiness</code> (or one of its subtypes: <code>Plumber</code>, <code>Roofer</code>, <code>HVACBusiness</code>, etc.).</p>

<p>The schema sits in a JSON-LD block in the page's <code>&lt;head&gt;</code> and includes the business name, address with each line broken out, phone in international format, opening hours, area served, and the URL. Google parses it on every crawl and uses it to populate the knowledge panel that sometimes appears alongside search results.</p>

<p>For NAP consistency specifically, the schema is the highest-confidence source. If the schema, the visible footer, and the GBP all match, Google treats the NAP as authoritative. If the schema disagrees with the footer, the schema usually wins (because the parser is unambiguous), but the conflict registers as a small reliability issue. Better to have all three saying the same thing.</p>

<h2>What to do about old, wrong listings</h2>

<p>Almost every business has them. A directory entry from 2017 with the previous business name. A Yelp review from 2019 still showing the old phone number that has since been ported to a new line. A trade-association page that was filled out by a previous office manager who is long gone.</p>

<p>The fix protocol:</p>

<ul>
  <li><strong>Owned listings (GBP, Yelp claimed, Facebook owned):</strong> log into each and update directly. Most updates take effect within 24 hours.</li>
  <li><strong>Unclaimed listings:</strong> claim them. Most directories have a "claim this listing" flow that takes a few minutes. Once claimed, the NAP can be updated.</li>
  <li><strong>Trade associations and Chambers:</strong> email the membership coordinator. Updates usually take 1-2 weeks but are reliable once submitted.</li>
  <li><strong>Old, unmaintained directories that no human is updating anymore:</strong> ignore them. Google's crawler already discounts them. Spending time on these directories is poor ROI.</li>
  <li><strong>Scrape sites that aggregate other sites' data:</strong> mostly ignore. They will eventually re-scrape and pick up the corrected NAP from authoritative sources. Trying to fix them directly is whack-a-mole.</li>
</ul>

<p>The Pareto here is real: the top eight to twelve listings produce 95% of the NAP-consistency signal Google reads. Get those right and the rest mostly self-corrects over time as the high-authority sources propagate.</p>

<h2>Why this is worth the hour</h2>

<p>Local pack rankings are the difference between a service business getting twenty calls a week and getting two. The local pack is the three-listing block at the top of Google's local results, above the standard organic listings. Being in it is high-leverage; being just below it is much less so.</p>

<p>NAP consistency is the second-highest-impact local SEO factor I know of, behind only Google Business Profile completeness and ahead of nearly everything else &mdash; review velocity, backlinks, on-page content. The fix is unglamorous, takes one focused hour to audit and another hour to remediate, and shows up in rankings within four to eight weeks. That is the boringest, highest-ROI hour a local service business can spend on its web presence.</p>

<p>For the wider context on how local-search visibility actually translates into booked work &mdash; alongside the speed, conversion-path, and maintenance levers that compound with it &mdash; the <a href="/roi/" class="inline-link">return-on-investment page</a> walks through the math with a worked example for a typical local service business.</p>
