---
title: "Web3Forms: Contact and Lead Forms Without a Backend"
date: 2026-05-12
label: "Forms & Lead Capture"
description: "Web3Forms is a privacy-friendly service that sends form submissions straight to your inbox. Here's how I set it up for contact forms and trade-specific lead forms."
ctaLabel: "Forms set up by default"
ctaHeading: "Every site I build comes with a working contact form"
ctaText: "Plus lead forms made for your trade, such as HVAC service requests, roofing inspection requests, and contractor bid forms. They run on Web3Forms, so no server is needed."
layout: layouts/post.njk
tags: [post]
---

<p>Most service-business websites need only one thing that changes with each visitor: a form that takes the visitor's details and sends them to the owner. Everything else, from the pages and photos to the price list, can be ready-made files on a CDN (a network of servers around the world), with no server program behind them.</p>

<p>That one need is why so many small business sites end up on WordPress, Squarespace, or Wix. A host for ready-made pages, such as Cloudflare Pages, can't process forms by itself.</p>

<p>I solve it differently. <a href="https://web3forms.com" rel="noopener" class="inline-link">Web3Forms</a> handles the forms, so the rest of the site stays fast, secure, and cheap to host while every submission reaches the client's inbox right away. Here's how I set it up, including the lead forms I build beyond a basic contact form.</p>

<h2>What Web3Forms is</h2>

<p>Web3Forms is an outside service that processes forms, also called a form backend. A visitor fills out a form on your site, the form sends it to Web3Forms, and Web3Forms checks it and emails it to you as a tidy message. The visitor then lands on a thank-you page on your site. The trip from "submit" to your inbox takes about half a second.</p>

<p>The key point is that Web3Forms doesn't store your form data. It forwards each submission to your email right away and keeps no copy. There's no database to break into, no admin panel of stored messages, and no privacy-policy paragraph about an outside company holding your visitors' contact details.</p>

<p>All Web3Forms keeps is an anonymous count of submissions per access key (the code that ties a form to an account), which it uses to limit abuse.</p>

<h2>What it costs</h2>

<p>The free tier covers 250 submissions a month per access key, enough for most small business sites in their first year. The paid tier is $7.99 a month for 1,500 submissions, plenty for a busy service business. One access key handles every form on a site, with no per-form pricing.</p>

<p>For comparison, Wix and Squarespace include forms in a monthly fee of $16 to $49. WordPress form plugins are often free, but they need a database that has to be maintained and backed up. Web3Forms costs noticeably less than the platforms and needs none of the WordPress upkeep.</p>

<h2>How I set it up for contact pages</h2>

<p>Every site I build uses Web3Forms for its contact form. The setup:</p>

<ol>
  <li>The client signs up for a Web3Forms account with their business email. The account is theirs, not mine.</li>
  <li>The client sends me the access key from their dashboard. I never get into the account itself, only the key that connects the forms.</li>
  <li>I add the form to the contact page. It's plain HTML, and the only Web3Forms parts are the access key, a hidden subject line, and a hidden "honeypot" field that catches spam bots.</li>
  <li>When a visitor submits, the form sends to Web3Forms, and the visitor goes to a thank-you page I built. A code in the address tells that page which form was sent, so each form can show its own "what happens next" message.</li>
  <li>Every submission goes straight to the client's email in plain text, with each field labeled.</li>
</ol>

<p>Setup takes about 30 minutes, and after that the form needs no backups, plugin updates, or security patches.</p>

<h2>The specialty forms I build</h2>

<p>Most service businesses do better with lead forms made for their trade. These are the ones I build most often:</p>

<p><strong>Free-inspection request (roofing, home inspection, HVAC).</strong> Besides name and email, it asks for the property address, the year built, how urgent it is, the concern (storm damage, a leak, age, or a pre-listing check), and an optional photo. The roofing version also asks about insurance claims, since a claim changes the kind of inspection.</p>

<p><strong>Emergency service request (plumbing, HVAC, electrical).</strong> Only the basics: name, address, phone number, and a short description. A "call me right now" button beside the form opens the visitor's phone dialer, because in an emergency, typing is the wrong way to reach you.</p>

<p><strong>Bid request (contractors, landscape design).</strong> A longer form that sizes up the lead before the first conversation. It asks for the project type, scope, preferred start, rough budget, photos of the current state, and any limits, such as HOA approval, right-of-way issues with neighbors, or specific materials. It does the work of the first 30 minutes of a first phone call.</p>

<p><strong>Inspection scheduling (commercial real estate, property managers).</strong> It asks for the property type, square footage, the reason for the inspection (a purchase, a routine check, or an incident), and the buyer's broker, if any. The lead arrives ready to sort.</p>

<p><strong>Service-area inquiry (businesses with several locations).</strong> A short form for the visitor's ZIP code, the service they need, and how they'd like to be contacted. It sends the lead to the right branch's email based on the ZIP code.</p>

<p>Each form has its own access key (or a shared key with different subject lines for inbox rules), thank-you page, and checks on what visitors enter. The client gets a far more useful lead than a bare name, email, and message.</p>

<h2>How I prevent spam</h2>

<p>Every form comes with two layers of spam protection:</p>

<p><strong>Honeypot field.</strong> A hidden field that people never see and bots try to fill in. When it's filled, Web3Forms rejects the submission without telling the sender. This stops most automated spam.</p>

<p><strong>Web3Forms' own filtering.</strong> The service checks every submission and blocks obvious spam, such as form-letter messages, strange strings of characters, and email domains known for abuse, before it reaches your inbox.</p>

<p>Together, they cut bot spam from a typical "10 a day on a small site" to "one or two a month, sometimes none for weeks." For sites with stubborn spam, Web3Forms also offers reCAPTCHA (Google's "I'm not a robot" check) and a list of approved IP addresses, but I rarely need either.</p>

<h2>What clients see in their inbox</h2>

<p>A submission arrives looking like this:</p>

<pre><code>Subject: New roof-inspection request, Smith Roofing

From: jane@example.com

Name: Jane Smith
Phone: (719) 555-0142
Property address: 4421 Mountain Vista Way, Colorado Springs CO 80906
Year built: 1998
Concern: Hail damage from May 18 storm
Insurance claim filed: Yes
Photos attached: 3
Best time to visit: Weekday afternoons
</code></pre>

<p>It's plain text, easy to read, forward, and answer. The "from" address is the visitor's own, so the client can hit reply, and the most important fields come first.</p>

<p>For high volume (more than 10 submissions a day), I can connect Zapier or Make.com to send submissions into a CRM (software for tracking customers). For most small businesses, though, the inbox is the right place, since the client already checks it every hour.</p>

<h2>What this lets me skip</h2>

<p>Using Web3Forms for the forms removes a whole category of work:</p>

<ul>
  <li>No server to set up.</li>
  <li>No database to maintain.</li>
  <li>No security patches to apply, since the form is plain HTML.</li>
  <li>No backups of stored submissions, since none are stored.</li>
  <li>No GDPR data-processor agreement to sign (GDPR is Europe's privacy law), since Web3Forms publishes its own and small businesses are covered by it.</li>
  <li>No plugin updates, as on WordPress.</li>
</ul>

<p>The site stays fast and cheap to host, and the form works reliably without a server to look after.</p>

<h2>If your current site has form problems</h2>

<p>These are three of the most common form failures I see on small business sites:</p>

<p><strong>Submissions disappear.</strong> The visitor sees a thank-you page, but nothing reaches the inbox. Usually an email forwarder is misconfigured, a spam filter is catching good mail, or the form service can't sign in to the email provider. It's common on older WordPress sites where a previous developer set up the plugin and never tested it.</p>

<p><strong>Spam floods the form.</strong> Without a honeypot or a "not a robot" check, every form online eventually draws bots. The fix is a small honeypot field plus a service that does its own filtering, not a more complicated form.</p>

<p><strong>Replies go to the wrong place.</strong> The client clicks reply on the notice, and the email goes to the form company instead of the visitor. The fix is to set the reply-to address to the visitor's email, which Web3Forms does automatically.</p>

<p>If your site has any of these problems, the fix usually takes less time than finding the cause.</p>
