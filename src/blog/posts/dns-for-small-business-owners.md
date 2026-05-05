---
title: "DNS for Small Business Owners: A Plain-Language Guide"
date: 2026-05-17
label: "The Stack"
description: "Domain records control where your website lives, where your email goes, and whether anyone can pretend to be you. A plain explanation, no jargon."
ctaLabel: "DNS handled for you"
ctaHeading: "I configure every record at launch."
ctaText: "Domain pointed at hosting, MX records for whichever email provider you use, SPF/DKIM/DMARC for spam protection, monitoring on the renewal. All part of the standard plan."
layout: layouts/post.njk
tags: [post]
---

<p>DNS is one of those parts of running a website that nobody explains to small business owners until something goes wrong. A new site does not load on a particular phone, an important email lands in the recipient's spam folder, the domain quietly expires because the renewal email got lost, and suddenly DNS becomes a vocabulary problem on top of an emergency.</p>

<p>This post is the explanation I want every client to have read before they need it. What DNS actually is, the five record types that matter for a small business, what happens when each one is wrong, and how I configure them at launch.</p>

<h2>What DNS actually is</h2>

<p>DNS is the internet's address book. When a visitor types <code>yourbusiness.com</code> into their browser, the browser does not know where on the internet that name actually lives. It asks the DNS system, "where is yourbusiness.com?" The DNS system returns a numeric IP address, the browser opens a connection to that address, and the website loads.</p>

<p>Every domain has a small set of records that tell the DNS system how to answer that question. Those records live at your domain registrar (where you bought the domain) or at a separate DNS provider (Cloudflare, Route 53, etc.). They are public, queryable by anyone, and they govern more than just the website. Email, file sharing, video conferencing, and almost every internet-facing service that uses your domain reads from the same records.</p>

<h2>The five records that matter</h2>

<p>Most small business domains need exactly five record types configured. Each one solves a specific problem, and the cost of getting any of them wrong is real.</p>

<h3>1. A and AAAA records (where the website lives)</h3>

<p>The A record points your domain at the IP address of the server hosting your website. AAAA is the same thing for IPv6 addresses (the newer numbering system). When a visitor types your domain, the browser reads the A record to find the website.</p>

<p>For sites I build on Cloudflare Pages, the A record is replaced by a CNAME (see below) that points at Cloudflare's edge network. The visitor's browser is then routed to whichever Cloudflare data center is geographically closest, which is what makes the site fast worldwide.</p>

<p><strong>What goes wrong:</strong> if the A record is missing or wrong, the website does not load at all. The browser shows "this site can't be reached." Common after a site migration when the old A record was removed before the new one was set.</p>

<h3>2. CNAME records (aliases)</h3>

<p>CNAME records say "this name is an alias for that other name." Used for two main things: pointing the <code>www.</code> subdomain at the same place as the bare domain, and pointing the domain at a hosting provider's server name (so they can change IP addresses without you having to update your DNS).</p>

<p>For sites I build, the typical CNAME setup is:</p>

<ul>
  <li><code>www.yourbusiness.com</code> → CNAME to <code>yourbusiness.com</code> (so both versions of the URL work)</li>
  <li><code>yourbusiness.com</code> → CNAME to Cloudflare Pages' edge address</li>
</ul>

<p><strong>What goes wrong:</strong> a missing <code>www.</code> CNAME means visitors who type the URL with <code>www</code> in front see an error. This used to be more common than it sounds.</p>

<h3>3. MX records (where email goes)</h3>

<p>MX records tell the internet where to deliver email sent to your domain. If someone emails <code>jane@yourbusiness.com</code>, their email server reads your MX records to figure out which mail server to deliver to. The MX records typically point at Google Workspace, Microsoft 365, or whatever email provider you actually use.</p>

<p><strong>What goes wrong:</strong> if MX records are missing or wrong, email sent to your domain bounces. The sender gets a "delivery failed" notification. This is usually noticed within hours of a configuration error because someone tries to email the business and cannot.</p>

<p>For sites I build, I configure MX records to point at whichever email provider the client uses (or sets up at launch). I do not host email myself, but I make sure the records are correct so the client's chosen provider works.</p>

<h3>4. SPF, DKIM, and DMARC records (spam protection)</h3>

<p>This is the trio of records that decides whether email sent from your domain reaches the recipient's inbox or gets filtered as spam. They are technical, often skipped during initial setup, and the cost of skipping them is that legitimate emails from your business start landing in spam folders without explanation.</p>

<p><strong>SPF (Sender Policy Framework)</strong> is a TXT record that lists which mail servers are allowed to send email from your domain. Without SPF, anyone can pretend to be sending from your domain. With SPF, the recipient's mail server can verify "yes, this email came from a server you authorized." Looks like:</p>

<pre><code>v=spf1 include:_spf.google.com ~all</code></pre>

<p><strong>DKIM (DomainKeys Identified Mail)</strong> is a cryptographic signature on every email your mail server sends, verifiable by the recipient. Configured by your email provider; you copy the public key from their setup wizard into a TXT record at your DNS host. Without DKIM, the recipient has no cryptographic proof that the email actually came from your mail server.</p>

<p><strong>DMARC (Domain-based Message Authentication)</strong> is the policy that tells receiving mail servers what to do with mail that fails SPF or DKIM checks. Without DMARC, the receiver decides on its own (usually conservatively, meaning more of your legitimate mail goes to spam). With a properly configured DMARC record, you can say "if my mail fails the checks, reject it outright" — which both protects your domain from spoofing and signals to receivers that your real mail is trustworthy.</p>

<p><strong>What goes wrong:</strong> small business email bouncing into spam folders. The most common cause across every client I have worked with. The fix is correct SPF, DKIM, and DMARC records, and it makes a measurable difference in deliverability within days.</p>

<h3>5. TXT records (verification + miscellany)</h3>

<p>The catch-all record type for tasks that need a small text string at a specific name. Most commonly used for:</p>

<ul>
  <li>Domain verification (Google Search Console, Microsoft 365, etc.)</li>
  <li>SPF and DMARC (described above)</li>
  <li>Domain-based service discovery for some platforms</li>
</ul>

<p>TXT records do not break anything if extra ones are present, but they should be cleaned up periodically. A domain with thirty stale TXT records from past services is harder to audit when something goes wrong.</p>

<h2>What I do at launch</h2>

<p>For every site I build, I configure DNS at the client's preferred registrar (or move it to Cloudflare DNS if they want, which is faster and free). The launch checklist:</p>

<ol>
  <li><strong>A/CNAME for the website.</strong> Point the domain at Cloudflare Pages' edge address.</li>
  <li><strong>CNAME for <code>www.</code></strong>. Make both URL versions work.</li>
  <li><strong>MX records.</strong> Point at the client's email provider.</li>
  <li><strong>SPF.</strong> List the email provider's authorized servers.</li>
  <li><strong>DKIM.</strong> Set the public-key TXT record from the email provider.</li>
  <li><strong>DMARC.</strong> Start with a permissive monitoring policy, then tighten to enforcement after thirty days of clean reports.</li>
  <li><strong>Domain verification TXT.</strong> Add the Google Search Console verification record (and any other services the client uses).</li>
</ol>

<p>The whole DNS setup takes about an hour at launch. After that, the records stay stable until the client adds a new email provider or service that needs its own record.</p>

<h2>Domain renewal: the part that fails silently</h2>

<p>One non-DNS task that ties to the same control surface: domain renewal. Every domain has an expiration date. Registrars send renewal-reminder emails, but those emails often land in spam or get ignored. If the domain expires and no one notices, the website goes dark and email stops working overnight.</p>

<p>I monitor renewal dates directly via WHOIS rather than relying on the registrar's email reminders. Sixty days, thirty days, and seven days before expiration, I send the client a heads-up. If the domain does lapse, most TLDs have a thirty-day redemption window during which it can still be recovered, and I help with that.</p>

<p>This is one of those small operational things that almost never matters and is catastrophic when it does.</p>

<h2>If your current DNS is messy</h2>

<p>Three quick checks any business owner can run:</p>

<p><strong>1. Does <code>www.yourbusiness.com</code> work?</strong> If only the bare domain works, your <code>www.</code> CNAME is missing.</p>

<p><strong>2. Send a test email to a Gmail account from your business email and look at the headers.</strong> If SPF or DKIM is failing, Gmail will say so in the message details. Failed checks land you in spam more often.</p>

<p><strong>3. Check your domain's expiration date.</strong> Go to <a href="https://whois.icann.org" rel="noopener" class="inline-link">whois.icann.org</a>, type your domain, and look at the expiration date. If it is less than ninety days away and you have not seen a renewal email, set a calendar reminder.</p>

<p>For sites I build, all three of these are wired in at launch and monitored thereafter. For sites I do not build, the same checks apply, and the fixes are usually small.</p>
