---
title: "WCAG 2.2 AA: What Accessibility Means in Practice"
date: 2026-05-24
label: "Standards & Compliance"
description: "WCAG 2.2 AA is the accessibility standard every U.S. small-business website should meet. Here's what it means in practice and why ADA lawsuits are accelerating."
ctaLabel: "AA from launch, every site"
ctaHeading: "Accessibility built into every site from the start"
ctaText: "Strong color contrast, visible focus outlines, full keyboard navigation, and screen-reader support, tested with WAVE before every launch. Part of the standard plan."
layout: layouts/post.njk
tags: [post]
---

<p>Most small business owners think about web accessibility only when something goes wrong. A law firm sends a demand letter for a visitor who couldn't use the site with a screen reader. An ADA lawsuit threatens an expensive settlement. A nonprofit grant asks for a compliance certificate the website can't provide.</p>

<p>Almost all of these come back to one standard: WCAG 2.2 AA. This post explains what it requires, how I build to it from day one, and why legal pressure on small-business websites has been accelerating since 2020.</p>

<h2>What WCAG 2.2 AA is</h2>

<p>WCAG stands for Web Content Accessibility Guidelines, which the World Wide Web Consortium (W3C) has maintained since 1999. The current major version, WCAG 2.2, came out in October 2023. "AA" is the middle of three conformance levels (A, AA, and AAA). It's the level every U.S. court has cited as the practical baseline for ADA compliance, and the one most other countries treat as the standard.</p>

<p>The full standard has 13 guidelines under four principles: people must be able to perceive the content, operate it, and understand it, and it must work with the tools they use, such as screen readers. AA means meeting 50 specific, testable criteria. In practice, they come down to six kinds of work, each with results you can measure.</p>

<h2>The six categories that matter</h2>

<h3>1. Color contrast</h3>

<p>All text must stand out from its background by a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text (18 point and up, or 14 point bold). The same rule applies to buttons and other controls.</p>

<p>This is the most common failure. Light gray on white, gold on cream, and dark blue on slightly darker blue all turn up in branded designs, and most of them fail.</p>

<p><strong>What I do:</strong> I check every color pairing against WebAIM's Contrast Checker before launch, and if a pairing fails, the design changes. Your brand colors can still appear as decoration, and the text stays easy to read.</p>

<h3>2. Keyboard navigation</h3>

<p>Every link, button, form field, drop-down menu, and pop-up window must work with the keyboard alone. Tab moves between them, Enter and Space activate them, and Escape closes pop-ups.</p>

<p>This matters for anyone who can't use a mouse, including people with motor disabilities or repetitive strain injuries, screen-reader users, and others who rely on assistive technology. It also helps people who prefer the keyboard.</p>

<p><strong>What I do:</strong> I test every site with the keyboard before launch. Each control shows a visible outline when you reach it, pop-up windows hold the keyboard focus while they're open, and every drop-down works from the keyboard.</p>

<h3>3. Screen-reader support</h3>

<p>People who use screen readers (VoiceOver on Mac and iPhone, NVDA or JAWS on Windows, TalkBack on Android) need the page's structure to come through. Headings must be coded as headings (H1, H2, H3), images need descriptions (alt text), form fields need labels, and buttons must be coded as buttons rather than as boxes that respond to clicks.</p>

<p><strong>What I do:</strong> I build every site with semantic HTML, meaning each element is coded as what it is. I write every image description by hand. Forms use proper label elements linked to their fields, and buttons are <code>&lt;button&gt;</code> elements, not styled boxes.</p>

<h3>4. Focus indicators</h3>

<p>When a visitor tabs to a control, something visible must change, such as an outline, a brighter background, or a new border. Many designers remove the browser's plain default outline as a finishing touch. The fix is to restyle it to match the brand, not to remove it.</p>

<p><strong>What I do:</strong> every control on every site I build has a custom focus outline that matches the brand and looks the same across the site.</p>

<h3>5. Skip links</h3>

<p>A "skip to main content" link at the top of each page lets keyboard and screen-reader users jump past the menu. Without it, they have to tab through every menu link on every page before reaching the content.</p>

<p><strong>What I do:</strong> every site has a skip link. It stays hidden until a keyboard user tabs to it. It takes five minutes to add and makes a big difference for people using assistive technology.</p>

<h3>6. Form labels and error messages</h3>

<p>Every form field needs a label a screen reader can announce, and required fields must be marked. Each error message must be tied to its field in the code, so a screen reader announces "this field is required" with the field, not somewhere else on the page.</p>

<p><strong>What I do:</strong> every form has clear labels, required-field markers, and aria-describedby attributes that tie each error message to its field.</p>

<h2>Why ADA lawsuits are accelerating</h2>

<p>The legal picture has changed sharply since 2018. The Department of Justice holds that the ADA applies to business websites, even though Title III of the ADA was written before the web existed and doesn't name websites. Federal courts have largely agreed.</p>

<p>In 2019, the Supreme Court let stand a Ninth Circuit ruling in Robles v. Domino's that ADA Title III applies to Domino's website, because the site was closely tied to the company's physical pizza shops. Later cases have extended the principle to most small businesses with both physical locations and websites.</p>

<p>The usual pattern: a plaintiff's law firm runs an automated accessibility check on thousands of small-business websites and sends demand letters offering to settle for $5,000 to $25,000 per site. Most small businesses settle rather than fight. These firms have filed thousands of cases, most of them in California, New York, Florida, and Pennsylvania.</p>

<p>The defense isn't a perfect site. It's a site that meets WCAG 2.2 AA in good faith, with documented testing and a published accessibility statement. Three small issues on a site that generally complies look very different from 200 issues on a site that was plainly never tested.</p>

<h2>How I test</h2>

<p>Before any site I build goes live, I check it three ways:</p>

<ol>
  <li><strong>WAVE (Web Accessibility Evaluation Tool).</strong> A free, browser-based checker from WebAIM. It catches roughly 40 percent of the issues an automated tool can find, and I rely on it most.</li>
  <li><strong>Lighthouse accessibility check.</strong> Built into Chrome's developer tools. It catches a different 30 percent, overlapping only partly with WAVE.</li>
  <li><strong>Manual keyboard test.</strong> I tab through every control on every page to confirm the focus outline shows and each control responds to Enter and Space. This catches what the automated tools miss.</li>
</ol>

<p>Automated tools find about 50 percent of accessibility issues, and the rest need a person to review. Sites I build pass both tools with zero errors and pass the manual review before launch.</p>

<h2>The accessibility statement</h2>

<p>Every site I build launches with an accessibility statement at <code>/accessibility/</code>. It names the standard (WCAG 2.2 AA), describes the testing, notes any known gaps, and tells visitors how to reach you if they run into a problem.</p>

<p>That's partly a moral duty, since visitors who can't use the site deserve a way to reach you. It's also a legal one, because courts have credited a published statement as evidence of good-faith compliance.</p>

<h2>Testing your current site</h2>

<p>Start with the automated check. Go to <a href="https://wave.webaim.org" rel="noopener" class="inline-link">wave.webaim.org</a>, paste in your home page address, and read the report. Errors (red circles) are the most serious, so fix those first. Warnings (yellow triangles) may or may not be problems, depending on context.</p>

<p>On sites I build, accessibility isn't an add-on or a later repair job. I build it in from the first line of code, because fixing a finished site is harder.</p>
