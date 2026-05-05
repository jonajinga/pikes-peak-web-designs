---
title: "WCAG 2.2 AA: What Accessibility Means in Practice"
date: 2026-05-24
label: "Standards & Compliance"
description: "WCAG 2.2 AA is the accessibility floor every U.S. small-business website should meet. Here is what it means in practice and why ADA lawsuits are accelerating."
ctaLabel: "AA from launch, every site"
ctaHeading: "Accessibility built in by construction."
ctaText: "Real contrast, real focus rings, real keyboard navigation, real screen-reader support. Tested with WAVE before every launch. Part of the standard plan."
layout: layouts/post.njk
tags: [post]
---

<p>Web accessibility is one of those topics small business owners encounter only when something has gone wrong. A demand letter arrives from a law firm representing a visitor who could not use the website with a screen reader. An ADA-related lawsuit threatens an expensive settlement. A nonprofit grant requires a compliance certification the website cannot provide.</p>

<p>The standard that governs almost all of these situations is WCAG 2.2 AA. This post explains what that standard actually requires, how I build to it from day one on every site, and why the legal pressure on small-business websites has been accelerating since 2020.</p>

<h2>What WCAG 2.2 AA is</h2>

<p>WCAG stands for Web Content Accessibility Guidelines, maintained by the World Wide Web Consortium (W3C) since 1999. The most current major version is WCAG 2.2, published in October 2023. The "AA" is the conformance level: the W3C defines three levels (A, AA, AAA), and AA is the level that every U.S. court has cited as the practical baseline for ADA compliance and most international jurisdictions reference as the standard.</p>

<p>The full specification covers thirteen guidelines under four principles (perceivable, operable, understandable, robust). Each guideline expands into specific testable criteria. AA conformance requires meeting fifty specific success criteria.</p>

<p>For a small business owner, that level of technical detail is not the right entry point. The practical version of WCAG 2.2 AA is six categories of work, each with measurable outcomes.</p>

<h2>The six categories that matter</h2>

<h3>1. Color contrast</h3>

<p>Every text element on the page must meet a minimum contrast ratio against its background: 4.5:1 for normal text, 3:1 for large text (18pt+ or 14pt+ bold). The same rule applies to interactive elements like buttons.</p>

<p>This is the single most common failure mode. Light gray text on white backgrounds, gold text on cream backgrounds, dark blue text on slightly-darker blue backgrounds — all of these are common in branded designs and most fail the contrast test.</p>

<p><strong>What I do:</strong> every color combination on every site I build is checked against WebAIM's Contrast Checker before it ships. If a color does not pass, the design changes. The brand can use whatever colors it likes for decorative purposes; the text on the page reads.</p>

<h3>2. Keyboard navigation</h3>

<p>Every interactive element on the site (links, buttons, form fields, dropdowns, modals) must be reachable and operable via keyboard alone, without a mouse. The Tab key moves through interactive elements; Enter and Space activate them; Escape closes modals.</p>

<p>This matters for visitors who cannot use a mouse (motor disabilities, screen-reader users, repetitive-strain-injury sufferers, anyone using assistive tech), and it also matters for power users who prefer keyboard.</p>

<p><strong>What I do:</strong> every site I build is keyboard-tested before launch. Every interactive element shows a visible focus ring when reached via Tab. Every modal traps focus appropriately. Every dropdown is keyboard-operable.</p>

<h3>3. Screen-reader support</h3>

<p>Visitors using screen readers (VoiceOver on Mac/iOS, NVDA or JAWS on Windows, TalkBack on Android) need the page's structure to be conveyed correctly. Headings should be marked as headings (H1, H2, H3), not as styled paragraphs. Images should have descriptive alt text. Form fields should have associated labels. Buttons should be buttons, not divs with click handlers.</p>

<p><strong>What I do:</strong> every site I build uses semantic HTML by default. Headings are real headings. Images have alt text written by hand (not auto-generated). Forms use real label elements with for/id pairs. Buttons are <code>&lt;button&gt;</code> elements, not styled divs.</p>

<h3>4. Focus indicators</h3>

<p>When a visitor tabs to an interactive element, the element must show a visible indicator that it is focused. A blue outline, a brighter background, a different border — the specific styling does not matter, only that something visible changes.</p>

<p>This is one of the most common subtle failures. Many designers explicitly remove focus rings as a "polish" step because the default browser ring is ugly. The fix is to replace the default ring with a custom version that matches the brand, not to remove it entirely.</p>

<p><strong>What I do:</strong> every interactive element on every site I build has a custom focus indicator that matches the brand. The indicator is intentional, visible, and consistent across the site.</p>

<h3>5. Skip links</h3>

<p>A "skip to main content" link at the top of every page lets keyboard and screen-reader users jump past the navigation menu to the page content. Without it, every visit means tabbing through every navigation link before reaching the page's content.</p>

<p><strong>What I do:</strong> every site has a skip link. The link is visually hidden until a keyboard user tabs to it, at which point it becomes visible. Standard pattern, takes 5 minutes to implement, makes a meaningful difference for assistive-tech users.</p>

<h3>6. Form labels and error messages</h3>

<p>Every form field needs an associated label that screen readers can announce. Required fields need to be marked as required. Error messages need to be programmatically associated with the field they refer to, so a screen reader announces "this field is required" alongside the field rather than reading the error message somewhere else on the page.</p>

<p><strong>What I do:</strong> every form on every site has explicit labels, required indicators, and aria-described-by attributes connecting error messages to fields.</p>

<h2>Why ADA lawsuits are accelerating</h2>

<p>The legal environment around web accessibility has shifted dramatically since 2018. The Department of Justice's position is that the ADA applies to commercial websites, even though Title III of the ADA was written before the web existed and does not literally name websites. Federal courts have largely agreed.</p>

<p>The 2019 Supreme Court decision in Robles v. Domino's let stand a Ninth Circuit ruling that ADA Title III applies to Domino's website because it had a sufficient nexus to the company's physical pizza shops. Subsequent cases have extended the principle to most small businesses with both physical locations and websites.</p>

<p>The practical pattern: a plaintiff's law firm runs an automated accessibility check against thousands of small-business websites, identifies failures, and sends demand letters offering to settle for $5,000 to $25,000 per site. Most small businesses settle rather than litigate. The firms that run this practice have filed thousands of cases; California, New York, Florida, and Pennsylvania see the majority.</p>

<p>The defense against this is not a perfect site. The defense is a site that meets WCAG 2.2 AA in good faith, with documented testing and a published accessibility statement. A plaintiff's automated check that finds three small issues on a generally compliant site is meaningfully different from one that finds 200 issues on a site that has obviously never been tested.</p>

<h2>How I test</h2>

<p>Before any site I build goes live, the accessibility pass involves three tools:</p>

<ol>
  <li><strong>WAVE (Web Accessibility Evaluation Tool).</strong> Free, browser-based, run by WebAIM. Catches roughly 40 percent of automated-detectable issues. The tool I rely on most.</li>
  <li><strong>Lighthouse accessibility audit.</strong> Built into Chrome DevTools. Catches a different 30 percent of automated issues; the overlap with WAVE is partial.</li>
  <li><strong>Manual keyboard test.</strong> I tab through every interactive element on every page, confirming the focus indicator is visible and the element responds to Enter/Space. This catches the issues WAVE and Lighthouse miss.</li>
</ol>

<p>Automated tools find about 50 percent of accessibility issues; the rest require manual review. Sites I build pass both automated tools at zero errors and survive the manual review. The audit is part of the launch checklist on every project.</p>

<h2>The accessibility statement</h2>

<p>Every site I build ships with a published accessibility statement at <code>/accessibility/</code>. The statement names the standard the site is built to (WCAG 2.2 AA), describes how the site has been tested, identifies any known gaps, and provides contact information for visitors who encounter accessibility issues.</p>

<p>This is partly a moral obligation (visitors who cannot use the site deserve to know how to reach you) and partly a legal one (a published statement signaling good faith is part of what courts have credited as evidence of compliance).</p>

<h2>If your current site has not been tested</h2>

<p>The first step is the automated check. Visit <a href="https://wave.webaim.org" rel="noopener" class="inline-link">wave.webaim.org</a>, paste your homepage URL, and read the report. If WAVE finds errors (red circles on the report), those are the most significant issues and worth fixing first. Warnings (yellow triangles) are softer issues that may or may not be problems depending on context.</p>

<p>The free <a href="/audit/" class="inline-link">five-point audit</a> covers accessibility as part of the standard pass. The report names what the site fails, what the fixes look like, and whether the issues are fixable on the existing platform or require a rebuild.</p>

<p>For sites I build, accessibility is not an add-on or a remediation phase. It is part of how the site is constructed from the first commit. The fix path on a site already built without accessibility in mind is harder; building it in from the start is easier.</p>
