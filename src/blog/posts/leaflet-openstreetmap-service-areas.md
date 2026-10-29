---
title: "How I Build Service-Area Maps with Leaflet and OpenStreetMap"
date: 2026-05-10
label: "The Stack"
description: "Every service business website I build gets an interactive map of the area the business serves. Here are the free, open-source tools I use to build it, with no map fees."
ctaLabel: "Service-area map included"
ctaHeading: "Every service business site I build gets an interactive map"
ctaText: "The map shows every neighborhood, ZIP code, or city you cover, with a pin on your shop and links to the matching city pages. It's part of the standard plan, with no map fees."
layout: layouts/post.njk
tags: [post]
---

<p>Every service business has a service area. The HVAC company covers the Denver metro but not Boulder. The roofer works the Pikes Peak corridor from Colorado Springs up to Monument and out to Black Forest, but not Pueblo. The plumber's ten-truck fleet covers Salt Lake County but stops short of Provo. A customer who finds you online needs to know within five seconds whether you cover their address, before they bother with a form.</p>

<p>A map shows this best: an interactive one that visitors can zoom, with every covered city pinned, the shop marked, and each pin linking to that city's page on your site. I build these with two free, open-source projects (software anyone may use and inspect): Leaflet and OpenStreetMap.</p>

<h2>Why not just use Google Maps embed</h2>

<p>Most people reach first for Google's maps service for websites (the Google Maps JavaScript API, a way for a page to request maps from Google). For a small business service-area map in 2026, it's the wrong default, for three reasons.</p>

<p><strong>It costs money.</strong> Google's free monthly allowance is about 28,000 map loads, and after that the cost is $7 per 1,000. That's rarely a problem on day one. It becomes one the month a news story or a popular local post sends 50,000 visitors to the page in a week, and the bill arrives 30 days later. I don't want to ask a client whether to remove the map to control the cost.</p>

<p><strong>It requires an API key.</strong> The key (a password that identifies your account to Google) needs billing turned on and a credit card attached, even for the free allowance. It can be locked to your site, but it's still a credential sitting in the page's code. The setup isn't hard, but I'd rather not put every client through it.</p>

<p><strong>It brings in a tracker.</strong> Google's map code adds Google's tracking to the page. That's a problem for a client who cares about privacy, or who falls under consent rules like Europe's GDPR without knowing it yet. I keep outside code to a minimum on every site, and a Google map would undo that.</p>

<p>Leaflet with OpenStreetMap map images has none of these trade-offs.</p>

<h2>What Leaflet is</h2>

<p>Leaflet is a small, free JavaScript library (ready-made code a page can load) for interactive maps. It's about 42KB once compressed, has been around since 2011, is maintained by the OpenStreetMap community, and runs at Facebook, Pinterest, Etsy, and, until it switched to its own system, GitHub. Its license, BSD-2-Clause, allows any use, including commercial, with no credit line required in the code itself.</p>

<p>Leaflet handles the parts that are the same on every map: panning, zooming, pins, pop-up boxes, layers, touch screens, sharp images on high-resolution screens, and keyboard focus. It doesn't include the map itself. The "tiles", the small square images of streets, parks, and landmarks, come from a separate provider. On my sites, that's OpenStreetMap.</p>

<h2>What OpenStreetMap is</h2>

<p>OpenStreetMap (OSM) is a free map of the world built by volunteers. They add roads, building outlines, business locations, park boundaries, and more. A worldwide review process checks and merges the changes. The result rivals Google Maps in coverage and, in some places (bike routes especially), beats it.</p>

<p>The OSM data is licensed under the Open Database License (ODbL). It's free for any use, including commercial, if you credit "© OpenStreetMap contributors". Leaflet adds that line in the map's bottom-right corner automatically. The credit is the only obligation: no fee, no API key, and no usage cap beyond the fair-use guidelines for the public tile servers.</p>

<p>For a high-traffic site, I can route the tiles through a paid OSM provider (Stadia Maps, Mapbox's OSM-based tiles, or my own copy through OpenMapTiles). For every small business service-area map I've built, the public servers have been enough, because these pages don't get enough traffic to strain the fair-use guidelines.</p>

<h2>The technical setup, end to end</h2>

<p>One of these maps takes about 30 lines of HTML and JavaScript. The steps:</p>

<ol>
  <li>Load Leaflet's style and code files from a CDN, a network of servers that delivers common files quickly. Both files are tiny, and browsers keep copies of them.</li>
  <li>Add one <code>&lt;div&gt;</code> (an empty box on the page) with its own ID where the map should go, and set its height in the stylesheet.</li>
  <li>In a short script, create a Leaflet map centered on the business's main city at a suitable zoom level (10 for a metro area, 11 or 12 for a tighter area).</li>
  <li>Add the OSM tile layer. That's three lines of JavaScript.</li>
  <li>Add a pin for each city or neighborhood the business covers, placed by its latitude and longitude (lat/lng). The coordinates come from a hand-made list in the page's code or from a data file used when the site is built.</li>
  <li>Attach a pop-up to each pin with the city name, the ZIP codes it covers, and a link to that city's page on the site.</li>
  <li>Add a separate pin for the business's shop or office, styled differently (a custom icon, a different color, or a label).</li>
</ol>

<p>The result shows the business's coverage on top of OpenStreetMap's streets. Every covered area is pinned and linked to its own page, and the shop stands out so visitors can see where the business is based.</p>

<h2>The data file pattern</h2>

<p>The list of coordinates could sit inside the page's code, but I keep it in a data file that the site reads when it's built. In Eleventy, the tool I use to build sites, that's a file in <code>src/_data/</code> that lists each area as <code>{ name, zip, lat, lng }</code>.</p>

<p>A data file lets one list feed several parts of the site:</p>

<ul>
  <li>The interactive map pins.</li>
  <li>The list of service areas in the footer.</li>
  <li>The individual <code>/service-area/colorado-springs/</code> pages, which Eleventy creates one per city.</li>
  <li>The <a href="/blog/local-seo-service-area-pages/" class="inline-link">local search content</a> on each city page.</li>
</ul>

<p>I find the coordinates by looking up each place in OpenStreetMap and copying them from the address bar, where OSM shows them as you move the map. A 12-area map takes about 20 minutes the first time. Adding a city or changing the coverage later is a one-line edit.</p>

<h2>Performance characteristics</h2>

<p>A Leaflet and OSM map is fast. Leaflet is about 42KB compressed. The tiles are PNG images that the browser saves for reuse. A typical service-area map at zoom level 11 shows five to 12 tiles, depending on screen size: about 100-300KB on the first visit and nearly instant after that.</p>

<p>The map doesn't hold up the rest of the page. I load Leaflet with the <code>defer</code> setting, which tells the browser to wait, and draw the map only once the page is usable. The page still scores 90 or above for performance in Lighthouse, Google's testing tool, and the map fades in within the next half-second.</p>

<p>Compared with a Google Maps embed, this setup has about half the code, adds no tracking, and never contacts a Google server. The visitor's browser talks only to my hosting and Cloudflare's servers.</p>

<h2>Accessibility and mobile</h2>

<p>Leaflet supports the keyboard from the start: tab into the map, use the arrow keys to pan, and use plus and minus to zoom. Pins are page elements that can take keyboard focus, and pop-ups close with the Escape key. On phones, you pinch to zoom, drag to pan, and tap a pin for its pop-up. None of this took any custom code.</p>

<p>One accessibility step is worth noting. The map's box needs a <code>role="region"</code> and an <code>aria-label</code>, labels that tell screen readers what the map shows ("Map of [Business] service area covering [Region]"). Leaflet doesn't add them, so I put them in the map's <code>&lt;div&gt;</code>.</p>

<p>The next post covers the customer side: <a href="/blog/service-area-map-client-value/" class="inline-link">what an interactive service-area map does for a small business's marketing</a>, in concrete terms.</p>
