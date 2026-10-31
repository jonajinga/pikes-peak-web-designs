---
title: "Email DNS: MX, SPF, DKIM, DMARC for Small Businesses"
date: 2026-05-30
label: "The Stack"
description: "Four settings on your domain decide whether your business email reaches the inbox or lands in spam. Here's what each one does, in plain words."
ctaLabel: "Email settings handled at launch"
ctaHeading: "I set up all four records on every site"
ctaText: "I set MX, SPF, DKIM, and DMARC to match your email provider, and I check them again at renewal. It's part of the standard plan, with no separate fee."
layout: layouts/post.njk
tags: [post]
---

<p>If your business email sometimes lands in spam, the cause is almost always four DNS records. These are short entries stored with your domain, and together MX, SPF, DKIM, and DMARC prove your mail comes from you. Most small businesses have MX (or email wouldn't work at all) but skip the other three, so Gmail and Outlook treat their mail as suspicious.</p>

<p>Here's what each one does and how I set them up for every client.</p>

<h2>The four records and why each one matters</h2>

<h3>MX (Mail Exchange)</h3>

<p>The MX record tells the internet where to deliver mail sent to your domain. When someone emails <code>jane@yourbusiness.com</code>, their server looks up the MX record for <code>yourbusiness.com</code> and sends the message where it points.</p>

<p>With Google Workspace it points to Google's servers, with Microsoft 365 to Microsoft's, and with a self-hosted server (rare in 2026) to that server.</p>

<p><strong>What goes wrong:</strong> without MX, mail to your domain bounces with a "delivery failed" notice. You usually find out within hours, when someone can't reach you.</p>

<h3>SPF (Sender Policy Framework)</h3>

<p>SPF is a TXT record (a plain-text note on your domain) that lists the servers allowed to send mail from your domain. Without it, anyone can send mail posing as <code>jane@yourbusiness.com</code>, and the recipient can't tell it's fake.</p>

<p>With it, the receiving server can confirm that mail claiming to be from yourbusiness.com came from a server on the list, such as Google's.</p>

<p>A typical SPF record looks like this:</p>

<pre><code>v=spf1 include:_spf.google.com ~all</code></pre>

<p>It means "SPF version 1: trust Google Workspace's servers and softfail anything else." Softfail, the recommended setting, marks other mail as suspect. Hardfail rejects it outright, which is sometimes too strict.</p>

<p><strong>What goes wrong:</strong> without SPF, much of your mail lands in spam, especially at Gmail and Outlook, which both weigh SPF heavily.</p>

<h3>DKIM (DomainKeys Identified Mail)</h3>

<p>DKIM puts a digital signature on every email your server sends. Your provider creates a pair of keys: a private one that signs each message and a public one published as a TXT record on your domain. The receiving server fetches the public key and checks the signature, which proves your server sent the email and nobody changed it on the way.</p>

<p>The DKIM record looks like this:</p>

<pre><code>v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC...</code></pre>

<p>The full key runs to hundreds of characters, and you copy it from your provider's setup screen.</p>

<p><strong>What goes wrong:</strong> without DKIM, fewer emails reach the inbox, and Gmail sends unsigned bulk mail to spam by default. If you send only one-to-one mail, the effect is smaller but still there.</p>

<h3>DMARC (Domain-based Message Authentication, Reporting, and Conformance)</h3>

<p>DMARC tells receiving servers what to do with mail from your domain that fails SPF or DKIM. It also asks them to send you reports, which is how you learn whether your records work.</p>

<p>A typical DMARC record looks like this:</p>

<pre><code>v=DMARC1; p=quarantine; rua=mailto:dmarc@yourbusiness.com; pct=100</code></pre>

<p>It means "DMARC version 1: send failing mail to spam (quarantine) instead of rejecting it, mail summary reports to this address, and apply this to 100 percent of messages."</p>

<p>The three settings are <code>p=none</code> (watch only), <code>p=quarantine</code> (failing mail goes to spam), and <code>p=reject</code> (failing mail is refused). Start with none, and tighten it once the reports show all your legitimate mail passing.</p>

<p><strong>What goes wrong:</strong> without DMARC, scammers can send fake emails to your customers in your name (spoofing), and you'll never know. With DMARC set to reject, those fakes are blocked before they reach anyone.</p>

<h2>How I configure the four records</h2>

<p>Email setup is on the launch checklist for every site I build:</p>

<ol>
  <li><strong>Confirm the email provider.</strong> Most small businesses use Google Workspace or Microsoft 365, and some use simple forwarding such as Cloudflare Email Routing. The provider determines each record's values.</li>
  <li><strong>Configure MX.</strong> I add the provider's MX values, with the right priority numbers, at the client's DNS host (Cloudflare DNS for the sites I host, or wherever the domain is registered). Some providers list several servers, and the numbers set the order.</li>
  <li><strong>Configure SPF.</strong> I add the SPF record with the provider's value (for example, <code>include:_spf.google.com</code>). If other services send mail for the client, such as a CRM (customer-tracking software) or a marketing-email tool, I add those too.</li>
  <li><strong>Configure DKIM.</strong> I add the provider's public key as a TXT record at the address it names (usually <code>google._domainkey</code> or similar).</li>
  <li><strong>Configure DMARC, starting gently.</strong> I start at <code>p=none</code>, with reports sent to me for 30 days.</li>
  <li><strong>Tighten DMARC after 30 days of clean reports.</strong> If all legitimate mail passes, I move to <code>p=quarantine</code>, and after another clean 30 days, to <code>p=reject</code>.</li>
</ol>

<p>It takes about an hour at launch, plus a quick check at each step. Once the records reach <code>p=reject</code> and stay stable, they need no further attention.</p>

<h2>How to check what your current records say</h2>

<p>Three free tools tell you most of what you need:</p>

<p><strong>MXToolbox.</strong> Enter your domain at <a href="https://mxtoolbox.com" rel="noopener" class="inline-link">mxtoolbox.com</a>. It shows your MX, SPF, and DKIM records and flags common mistakes, which is enough for most small businesses.</p>

<p><strong>Google's "Check MX" tool.</strong> If you use Google Workspace, the admin console has a checker that confirms your setup from Google's side.</p>

<p><strong>A test email to a Gmail account.</strong> Open it in Gmail on the web, click the three-dot menu, and choose "Show original." You'll see PASS or FAIL for SPF, DKIM, and DMARC. You want three passes, and any FAIL is worth looking into.</p>

<h2>If your business email lands in spam</h2>

<p>Work through it in this order:</p>

<ol>
  <li>Send a test from your business email to a personal Gmail account.</li>
  <li>If it lands in spam, open it and choose "Show original."</li>
  <li>Find the SPF, DKIM, and DMARC results.</li>
  <li>Fix whichever record failed first.</li>
</ol>

<p>On sites I build, the records are right at launch. Elsewhere, find your DNS host (where you bought the domain, or where the records live now), fix the failing record, wait 24 hours for the change to spread, and test again.</p>

<p>If the records pass and mail still lands in spam, the cause is usually the content: spammy words, emails made only of images, or broken formatting. That's a separate problem, but the records must be right first.</p>
