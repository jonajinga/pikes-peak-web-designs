---
title: "DNS for Small Business Owners: A Plain-Language Guide"
date: 2026-05-17
label: "The Stack"
description: "Domain records control where your website lives, where your email goes, and whether anyone can pretend to be you. Here's a plain explanation."
ctaLabel: "DNS handled for you"
ctaHeading: "I set up every record at launch"
ctaText: "I point your domain to your hosting, set up the email records for whichever provider you use, and add the SPF, DKIM, and DMARC records that keep your mail out of spam. I also watch your renewal date. It's all part of the standard plan."
layout: layouts/post.njk
tags: [post]
---

<p>Nobody explains DNS to small-business owners until something goes wrong. A new site won't load on someone's phone, an important email lands in a customer's spam folder, or the domain expires because the renewal notice got lost. Then DNS becomes a vocabulary lesson in the middle of an emergency.</p>

<p>This is the explanation I want every client to read before they need it.</p>

<h2>What DNS is</h2>

<p>DNS, the Domain Name System, is the internet's address book. When a visitor types <code>yourbusiness.com</code> into a browser, the browser doesn't know where on the internet that name lives. It asks DNS, "Where is yourbusiness.com?" DNS answers with a numeric IP address, the browser connects to that address, and the website loads.</p>

<p>Every domain has a small set of records that tell DNS how to answer. They live at your domain registrar, where you bought the domain, or at a DNS provider such as Cloudflare or Route 53. Anyone can look them up, and they control more than the website: email, file sharing, video calls, and nearly every online service that uses your domain read from them.</p>

<h2>The five records that matter</h2>

<p>Most small-business domains need exactly five types of record. Each one solves a specific problem, and getting any of them wrong has a cost.</p>

<h3>1. A and AAAA records (where the website lives)</h3>

<p>The A record points your domain to the IP address of the server that hosts your website. AAAA does the same for IPv6 addresses, the newer numbering system. When a visitor types your domain, the browser reads the A record to find the site.</p>

<p>For sites I build on Cloudflare Pages, a CNAME record (see below) takes the A record's place and points to Cloudflare's worldwide network. Each visitor's browser then reaches the nearest Cloudflare data center, which is what makes the site fast everywhere.</p>

<p><strong>What goes wrong:</strong> if the A record is missing or wrong, the website doesn't load at all, and the browser shows "This site can't be reached." It often happens after a move to a new host, when the old A record was removed before the new one was set.</p>

<h3>2. CNAME records (aliases)</h3>

<p>A CNAME record says, "This name is another name for that one." It has two main uses. It points the <code>www.</code> version of your address to the same place as the plain domain. It also points your domain to a hosting company's server name, so the host can change its IP addresses without you updating anything.</p>

<p>For sites I build, the usual CNAME setup is:</p>

<ul>
  <li><code>www.yourbusiness.com</code> → CNAME to <code>yourbusiness.com</code> (so both versions of the address work)</li>
  <li><code>yourbusiness.com</code> → CNAME to Cloudflare Pages' network address</li>
</ul>

<p><strong>What goes wrong:</strong> without a <code>www.</code> CNAME, visitors who type <code>www</code> in front of your address see an error. This used to be more common than it sounds.</p>

<h3>3. MX records (where email goes)</h3>

<p>MX records tell the internet where to deliver email sent to your domain. When someone emails <code>jane@yourbusiness.com</code>, their email server reads your MX records to find the right mail server. They usually point to Google Workspace, Microsoft 365, or whichever email provider you use.</p>

<p><strong>What goes wrong:</strong> if MX records are missing or wrong, email to your domain bounces, and the sender gets a "delivery failed" notice. People usually notice within hours, because someone tries to email the business and can't.</p>

<p>For sites I build, I point the MX records to the email provider the client uses or sets up at launch. I don't host email myself, but I make sure the records are right so the client's provider works.</p>

<h3>4. SPF, DKIM, and DMARC records (spam protection)</h3>

<p>These three records decide whether email from your domain reaches the inbox or lands in spam. They're technical and often skipped at setup, and then legitimate emails from your business land in spam with no explanation.</p>

<p><strong>SPF (Sender Policy Framework)</strong> is a TXT record, a short line of text, that lists the mail servers allowed to send email for your domain. Without SPF, anyone can pretend to send from your domain. With it, the receiving server can confirm the email came from a server you approved. It looks like this:</p>

<pre><code>v=spf1 include:_spf.google.com ~all</code></pre>

<p><strong>DKIM (DomainKeys Identified Mail)</strong> adds a coded signature to every email your mail server sends, which the receiver can check. Your email provider sets it up, and you copy the public key from their setup screens into a TXT record at your DNS host. Without DKIM, the receiver has no proof that the email came from your mail server.</p>

<p><strong>DMARC (Domain-based Message Authentication)</strong> tells receiving servers what to do with mail that fails the SPF or DKIM checks. Without it, each receiver decides alone, usually cautiously, so more of your legitimate mail goes to spam. A properly set DMARC record can say, "If my mail fails the checks, reject it." That protects your domain from impostors and tells receivers your own mail can be trusted.</p>

<p><strong>What goes wrong:</strong> small-business email lands in spam. It's one of the most common DNS problems small businesses run into. Correct SPF, DKIM, and DMARC records fix it, and delivery improves measurably within days.</p>

<h3>5. TXT records (verification and other uses)</h3>

<p>TXT records are the catch-all type, for any task that needs a short line of text at a specific name. They're most often used for:</p>

<ul>
  <li>Proving you own the domain (Google Search Console, Microsoft 365, and others)</li>
  <li>SPF and DMARC (described above)</li>
  <li>Helping some platforms find services connected to your domain</li>
</ul>

<p>Extra TXT records don't break anything, but they should be cleaned up from time to time. A domain with 30 stale TXT records from old services is harder to check when something goes wrong.</p>

<h2>What I do at launch</h2>

<p>For every site I build, I set up DNS at the client's preferred registrar, or I move it to Cloudflare DNS if they'd like, which is faster and free. Here's the launch checklist:</p>

<ol>
  <li><strong>A/CNAME for the website.</strong> Point the domain to Cloudflare Pages' network address.</li>
  <li><strong>CNAME for <code>www.</code></strong>. Make both versions of the address work.</li>
  <li><strong>MX records.</strong> Point to the client's email provider.</li>
  <li><strong>SPF.</strong> List the email provider's approved servers.</li>
  <li><strong>DKIM.</strong> Add the public-key TXT record from the email provider.</li>
  <li><strong>DMARC.</strong> Start with a relaxed policy that only reports, then tighten it to block failing mail after 30 days of clean reports.</li>
  <li><strong>Domain verification TXT.</strong> Add the Google Search Console verification record, plus any others the client's services need.</li>
</ol>

<p>The whole DNS setup takes about an hour at launch. After that, the records stay put until the client adds a new email provider or a service that needs its own record.</p>

<h2>Domain renewal: the part that fails silently</h2>

<p>One task outside DNS is tied to the same settings: renewing the domain. Every domain has an expiration date. Registrars send reminder emails, but those often land in spam or get ignored. If the domain expires and nobody notices, the website goes dark and email stops working overnight.</p>

<p>I track renewal dates myself through WHOIS, the public registry of domain records, instead of relying on the registrar's reminders. I send the client a heads-up 60 days, 30 days, and seven days before expiration. If a domain does lapse, most domain endings (TLDs, such as .com) allow 30 days during which it can still be recovered, and I help with that.</p>

<p>It's one of those small chores that almost never matters and is a disaster when it does.</p>

<h2>If your current DNS is messy</h2>

<p>Any business owner can run three quick checks:</p>

<p><strong>1. Does <code>www.yourbusiness.com</code> work?</strong> If only the plain domain works, your <code>www.</code> CNAME is missing.</p>

<p><strong>2. Send a test email to a Gmail account from your business email and look at the headers.</strong> If SPF or DKIM is failing, Gmail says so in the message details, and failed checks send you to spam more often.</p>

<p><strong>3. Check your domain's expiration date.</strong> Go to <a href="https://whois.icann.org" rel="noopener" class="inline-link">whois.icann.org</a>, type your domain, and look at the expiration date. If it's less than 90 days away and you haven't seen a renewal email, set a calendar reminder.</p>

<p>For sites I build, I set up all three at launch and keep watching them. For other sites, the same checks apply, and the fixes are usually small.</p>
