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

<p>Every service business has a service area. The HVAC company covers the Denver metro but not Boulder. The roofer works from Colorado Springs up to Monument and out to Black Forest, but not Pueblo. The plumber's ten-truck fleet covers Salt Lake County but stops short of Provo. A customer who finds you online needs to know within five seconds whether you cover their address.</p>

<p>A map shows this best: an interactive one, with every covered city pinned, the shop marked, and each pin linked to that city's page. I build these with two free, open-source projects (software anyone may use and inspect): Leaflet and OpenStreetMap.</p>

<h2>Why not just use Google Maps embed</h2>

<p>Most people reach first for Google's map service for websites (the Google Maps JavaScript API, which lets a page request maps from Google). For a small business service-area map in 2026, it's the wrong default, for three reasons.</p>

<p><strong>It costs money.</strong> Google allows about 28,000 free map loads a month, then charges $7 per 1,000. That's rarely a problem on day one. It becomes one the month a news story sends 50,000 visitors to the page in a week, and the bill arrives 30 days later. I don't want to ask a client whether to remove the map to control the cost.</p>

<p><strong>It requires an API key.</strong> The key, a password that identifies your account to Google, needs billing turned on and a credit card attached, even for the free allowance. It can be locked to your site, but it's still a credential in the page's code, and I'd rather not put every client through the setup.</p>

<p><strong>It brings in a tracker.</strong> Google's map code adds Google's tracking to the page. That's a problem for a client who cares about privacy, or who falls under consent rules like Europe's GDPR without knowing it. I keep outside code to a minimum on every site, and a Google map would undo that.</p>

<p>Leaflet with OpenStreetMap avoids all three.</p>

<h2>What Leaflet is</h2>

<p>Leaflet is a small, free JavaScript library (ready-made code a page can load) for interactive maps. It's about 42KB compressed, dates from 2011, is maintained by the OpenStreetMap community, and runs at Facebook, Pinterest, Etsy, and, until it built its own, GitHub. Its BSD-2-Clause license allows any use, including commercial, with no credit line required in the code.</p>

<p>Leaflet handles what every map needs: panning, zooming, pins, pop-ups, layers, touch screens, sharp images on high-resolution screens, and keyboard focus. The map pictures themselves, square "tiles" of streets, parks, and landmarks, come from a separate provider. On my sites, that's OpenStreetMap.</p>

<h2>What OpenStreetMap is</h2>

<p>OpenStreetMap (OSM) is a free map of the world built by volunteers, who add roads, building outlines, businesses, and park boundaries. A worldwide review process checks and merges their changes. The result rivals Google Maps in coverage and, in some places (bike routes especially), beats it.</p>

<p>The data is free for any use, including commercial, under the Open Database License (ODbL), as long as you credit "© OpenStreetMap contributors". Leaflet adds that line in the map's corner automatically. There's no fee, no API key, and no usage cap beyond fair-use guidelines for the public tile servers.</p>

<p>For a high-traffic site, I can route the tiles through a paid OSM provider (Stadia Maps, Mapbox's OSM-based tiles, or a self-hosted copy through OpenMapTiles). For every small business map I've built, the public servers have been enough, because service-area pages get light traffic.</p>

<h2>The technical setup, end to end</h2>

<p>One of these maps takes about 30 lines of HTML and JavaScript:</p>

<ol>
  <li>Load Leaflet's two small files from a CDN, a network of servers that delivers common files quickly and lets browsers reuse them.</li>
  <li>Add one <code>&lt;div&gt;</code> (an empty box on the page) with its own ID where the map goes, and set its height.</li>
  <li>In a short script, create a map centered on the main city at a suitable zoom level (10 for a metro area, 11 or 12 for a tighter area).</li>
  <li>Add the OSM tile layer, which takes three lines of JavaScript.</li>
  <li>Add a pin for each covered city or neighborhood at its latitude and longitude (lat/lng), taken from a hand-made list in the page or from a data file the site reads when it's built.</li>
  <li>Give each pin a pop-up with the city name, its ZIP codes, and a link to that city's page.</li>
  <li>Add a separate pin for the shop or office, styled differently (a custom icon, a different color, or a label).</li>
</ol>

<p>The result shows the coverage on OpenStreetMap's streets, with every area pinned and linked and the shop easy to spot.</p>

<h2>The data file pattern</h2>

<p>I keep the coordinates in a data file instead of the page. In Eleventy, the tool I build sites with, that's a file in <code>src/_data/</code> listing each area as <code>{ name, zip, lat, lng }</code>. One list then feeds several parts of the site:</p>

<ul>
  <li>The interactive map pins.</li>
  <li>The list of service areas in the footer.</li>
  <li>The individual <code>/service-area/colorado-springs/</code> pages, which Eleventy creates one per city.</li>
  <li>The <a href="/blog/service-area-pages-local-seo/" class="inline-link">local search content</a> on each city page.</li>
</ul>

<p>I look up each place in OpenStreetMap and copy its coordinates from the address bar. A 12-area map takes about 20 minutes the first time, and adding a city later is a one-line edit.</p>

<h2>Performance characteristics</h2>

<p>The map is fast. Leaflet is about 42KB compressed, and the tiles are PNG images the browser saves for reuse. A typical map at zoom level 11 shows five to 12 tiles, about 100-300KB on the first visit and nearly instant after that.</p>

<p>The map doesn't hold up the page. I load Leaflet with the <code>defer</code> setting, which tells the browser to wait, and draw the map once the page is usable. The page still scores 90 or above in Lighthouse, Google's speed test, and the map fades in half a second later.</p>

<p>Compared with a Google Maps embed, this setup has about half the code, adds no tracking, and never contacts Google. The visitor's browser talks only to my hosting and Cloudflare's servers.</p>

<h2>Accessibility and mobile</h2>

<p>Leaflet works with a keyboard from the start: tab into the map, pan with the arrow keys, and zoom with plus and minus. Pins can take keyboard focus, and pop-ups close with Escape. On phones, you pinch to zoom, drag to pan, and tap a pin. None of this needed custom code.</p>

<p>One step is mine to add. The map's box needs a <code>role="region"</code> and an <code>aria-label</code>, labels that tell screen readers what the map shows ("Map of [Business] service area covering [Region]"). Leaflet doesn't add them, so I put them in the map's <code>&lt;div&gt;</code>.</p>

<p>The next post covers the customer side: <a href="/blog/service-area-map-client-value/" class="inline-link">what an interactive service-area map does for a small business's marketing</a>, in concrete terms.</p>
