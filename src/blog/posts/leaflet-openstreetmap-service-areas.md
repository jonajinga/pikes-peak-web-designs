---
title: "How I Build Service-Area Maps with Leaflet and OpenStreetMap"
date: 2026-05-10
label: "The Stack"
description: "Every service business website gets an interactive map of where the business actually serves. Here is the open-source, zero-API-cost stack I use to build it."
ctaLabel: "Service-area map included"
ctaHeading: "Every service business site I build gets a real map."
ctaText: "Not a screenshot from Google Maps and not a static SVG. A real interactive map showing every neighborhood, ZIP code, or city you cover, with a pin on the shop and links into the relevant city pages. Part of the standard plan, no API fees."
layout: layouts/post.njk
tags: [post]
---

<p>Every service business has a service area. The HVAC company that covers Denver metro but not Boulder. The roofer who works the Pikes Peak corridor from Colorado Springs up to Monument and out to Black Forest, but not Pueblo. The plumber whose ten-truck fleet covers Salt Lake County but stops short of Provo. The boundaries of where a business will and will not drive a truck are a meaningful sales conversation: a customer who finds you online needs to know within five seconds whether you cover their address before they bother filling out a form.</p>

<p>The tool that conveys this best is a map. Not a screenshot from Google Maps with a few highlighted neighborhoods. Not a static list of ZIP codes. A real, interactive, zoomable map with every covered city pinned, the shop's location marked, and a click on each pin linking to the relevant service-area page. The stack I use to build these is two open-source projects that cost nothing to use: Leaflet and OpenStreetMap.</p>

<h2>Why not just use Google Maps embed</h2>

<p>The Google Maps JavaScript API is the default option that most people reach for first. It is also the wrong default for small business service-area maps in 2026, for three concrete reasons.</p>

<p><strong>It costs money.</strong> Google's Maps API has a free monthly tier of about 28,000 map loads, after which the cost is $7 per 1,000 loads. For a small site this is unlikely to be a budget problem on day one. It becomes a budget problem the month a press placement or a viral local mention sends 50,000 visitors to the service area page in a week. The bill arrives 30 days later. I do not want to be in the position of asking a client whether I should remove the map to control cost.</p>

<p><strong>It requires an API key.</strong> Google's Maps API key has to be billing-enabled and credit-card-attached, even for the free tier. The key gets restricted by referrer or IP, but it is still a credential that lives in the page's JavaScript. The setup work is not hard, but it is process I would rather not impose on every client.</p>

<p><strong>It pulls a third-party tracker.</strong> Loading the Google Maps JS adds Google's tracking infrastructure to the page. For a privacy-conscious client (or a client subject to GDPR-style consent rules even if they do not realize it yet), this is a problem. The agency stack already minimizes third-party JS aggressively; opting back into Google for the map would undo that.</p>

<p>The alternative — Leaflet plus OpenStreetMap tiles — has none of those tradeoffs.</p>

<h2>What Leaflet is</h2>

<p>Leaflet is a small open-source JavaScript library that renders interactive maps. The library is about 42KB minified and gzipped, has been around since 2011, is maintained by the OpenStreetMap community, and is used in production at Facebook, Pinterest, Etsy, and (until they switched to their own renderer) GitHub. The license is BSD-2-Clause, which means free for any use including commercial, with no attribution requirement in the JavaScript itself.</p>

<p>The library handles the parts of an interactive map that are the same in every implementation: pan, zoom, marker placement, popup rendering, layer toggling, mobile touch handling, retina-display tile loading, accessibility focus management. What it does not include is the map data itself. The tiles — the actual rendered images of streets and parks and landmarks — come from a separate provider. For my agency stack, that provider is OpenStreetMap.</p>

<h2>What OpenStreetMap is</h2>

<p>OpenStreetMap (OSM) is a community-maintained open dataset of the physical world. Volunteers contribute road centerlines, building footprints, business locations, park boundaries, and the like; a global cleaning pipeline merges and validates them; the result is a dataset comparable to Google Maps in coverage and, in some regions (cycling infrastructure especially), better.</p>

<p>The OSM data is licensed under the Open Database License (ODbL), which means free to use including commercially, with attribution to "© OpenStreetMap contributors." Most map renderings include the attribution as a small line of text in the bottom-right corner of the map, which Leaflet does automatically. The attribution is the only obligation; there is no fee, no API key, and no rate limit beyond the polite-use guidelines for the public tile servers.</p>

<p>For higher-traffic sites I sometimes route the tiles through a paid OSM proxy (Stadia Maps, Mapbox's OSM-based tiles, or self-hosted via OpenMapTiles), but the public tile servers are sufficient for any small business service-area map I have built. The traffic profile of a service-area page is low enough that the courtesy use guidelines never become a concern.</p>

<h2>The technical setup, end to end</h2>

<p>The full stack for one of these maps is about thirty lines of HTML and JavaScript. The flow:</p>

<ol>
  <li>Load Leaflet's CSS and JavaScript from a CDN. Both files are tiny and cached aggressively across the web.</li>
  <li>Add a single <code>&lt;div&gt;</code> with a unique ID to the page where the map should render. Set its height in CSS.</li>
  <li>In a small script block, instantiate a Leaflet map centered on the business's primary city, with an appropriate zoom level (10 for metro coverage, 11-12 for tighter local).</li>
  <li>Add an OSM tile layer to the map. Three lines of JavaScript.</li>
  <li>For each city or neighborhood the business covers, add a marker at that location's lat/lng. The lat/lng comes from a hand-curated list inside the page's JavaScript or from a build-time data file.</li>
  <li>Bind a popup to each marker with the city name, the ZIP code(s) it covers, and a link into the corresponding service-area page on the site.</li>
  <li>Add a distinct marker for the business's shop or office location, styled differently from the area markers (a custom icon, a different color, or a label).</li>
</ol>

<p>The result is an interactive map with the business's coverage geography rendered on top of OpenStreetMap's road layer, every covered area pinned, every pin linked to the city's dedicated service-area page, and the shop pinned distinctly so visitors can see where the operation is based.</p>

<h2>The data file pattern</h2>

<p>The lat/lng list for the covered areas could live as inline JavaScript in the page, but the cleaner pattern in my stack is to put it in a build-time data file. For Eleventy, that means a JavaScript module under <code>src/_data/</code> that exports an array of <code>{ name, zip, lat, lng }</code> objects.</p>

<p>The advantage of the data file is that the same dataset can drive multiple things on the site:</p>

<ul>
  <li>The interactive map markers.</li>
  <li>The static list of service areas in the footer.</li>
  <li>The individual <code>/service-area/colorado-springs/</code> pages, generated via Eleventy pagination.</li>
  <li>The <a href="/blog/local-seo-service-area-pages/" class="inline-link">local-SEO content</a> on each city page.</li>
</ul>

<p>The lat/lng values themselves come from manually looking up each city or neighborhood in OpenStreetMap and copying the coordinates from the URL bar (OSM puts them in the URL as you pan). The whole exercise for a 12-area service map takes about twenty minutes the first time. Updates (a new city added, a coverage change) are a one-line edit to the data file.</p>

<h2>Performance characteristics</h2>

<p>The performance of a Leaflet+OSM map is genuinely fast. The Leaflet library itself is around 42KB after compression. The OSM tiles are PNG images cached aggressively by the browser; a typical service-area map at zoom level 11 renders five to twelve tiles depending on screen size, around 100-300KB total on first load and effectively instant on subsequent visits.</p>

<p>The map does not block page rendering. I load Leaflet with the <code>defer</code> attribute and instantiate the map only after the page is interactive. The result is that the service-area page itself loads at 90+ Lighthouse Performance even with the map present; the map fades in over the next half-second after the page is usable.</p>

<p>Compared to a Google Maps embed, the Leaflet+OSM stack is roughly half the JavaScript weight, has zero analytics overhead, and never sends a request to a Google domain. The visitor's browser session stays inside the agency's infrastructure and Cloudflare's edge cache.</p>

<h2>Accessibility and mobile</h2>

<p>Leaflet handles keyboard navigation out of the box: tab into the map, arrow keys to pan, plus and minus for zoom. Markers are real DOM elements that can take focus, and popups have proper close-on-Escape behavior. The mobile touch handling is solid — pinch to zoom, drag to pan, tap a marker for the popup. None of this required any custom code in my implementation.</p>

<p>The one accessibility consideration worth calling out: the Leaflet container needs an explicit <code>role="region"</code> and <code>aria-label</code> describing what the map shows ("Map of [Business] service area covering [Region]"). Leaflet doesn't add these automatically. They go in the HTML markup of the map's <code>&lt;div&gt;</code>.</p>

<p>The next post in this thread covers the customer-facing side: <a href="/blog/service-area-map-client-value/" class="inline-link">what a real interactive service-area map actually does for a small business's marketing</a>, in concrete terms.</p>
