---
title: "Email DNS: MX, SPF, DKIM, DMARC for Small Businesses"
date: 2026-05-30
label: "The Stack"
description: "Four DNS records decide whether your business email reaches the inbox or lands in spam. A plain-language explanation of what each does."
ctaLabel: "Email DNS handled at launch"
ctaHeading: "I configure the four records on every site."
ctaText: "MX, SPF, DKIM, DMARC, all set against your real email provider, with monitoring on the renewal. Part of the standard plan, no separate fee."
layout: layouts/post.njk
tags: [post]
---

<p>If your business email occasionally lands in customers' spam folders, the cause is almost always the four DNS records that authenticate your outgoing mail. The records are MX, SPF, DKIM, and DMARC. Most small business websites have MX configured (or email would not work at all) but skip the other three; the result is mail that fails authentication and gets flagged as suspicious by Gmail, Outlook, and the rest.</p>

<p>This post explains what each of the four records does, what happens when each is missing or wrong, and the configuration I run for every client.</p>

<h2>The four records and why each one matters</h2>

<h3>MX (Mail Exchange)</h3>

<p>The MX record tells the internet where to deliver email sent to your domain. If someone emails <code>jane@yourbusiness.com</code>, their mail server looks up the MX record for <code>yourbusiness.com</code> and routes the message to whichever server the record points to.</p>

<p>For a small business using Google Workspace, the MX records point at Google's mail servers. For Microsoft 365, they point at Microsoft's. For a self-hosted email server (rare in 2026), they point at that specific server.</p>

<p><strong>What goes wrong:</strong> if MX records are missing, email sent to your domain bounces. The sender gets a "delivery failed" notification. This is usually noticed within hours of a configuration error because someone tries to email the business and cannot.</p>

<p><strong>What I configure:</strong> the MX records for whichever email provider the client uses, set up at launch with the correct priority numbers (some providers want multiple servers listed in priority order).</p>

<h3>SPF (Sender Policy Framework)</h3>

<p>SPF is a TXT record at your domain that lists which mail servers are authorized to send email FROM your domain. Without SPF, anyone on the internet can send an email pretending to be from <code>jane@yourbusiness.com</code>, and the recipient has no way to tell whether the email actually came from your authorized mail server.</p>

<p>With SPF, the recipient's mail server can check: "the email claims to be from yourbusiness.com; the SPF record at yourbusiness.com lists Google's mail servers as authorized; the email came from a Google mail server; therefore the email is legitimate."</p>

<p>A typical SPF record looks like:</p>

<pre><code>v=spf1 include:_spf.google.com ~all</code></pre>

<p>That says "version 1 of SPF, authorize whatever Google's SPF includes (Google Workspace), softfail anything else." The "softfail" is the recommended setting; "hardfail" tells receivers to reject unauthorized mail outright but is sometimes too strict in practice.</p>

<p><strong>What goes wrong:</strong> without SPF, much of your outgoing mail lands in spam folders, especially when sent to Gmail and Outlook recipients. Both providers heavily weight SPF as an authentication signal.</p>

<h3>DKIM (DomainKeys Identified Mail)</h3>

<p>DKIM is a cryptographic signature on every email your mail server sends, verifiable by the recipient. Your mail provider generates a public/private key pair; the private key signs every outgoing message, the public key gets published as a TXT record at your domain. When the recipient's server receives the email, it fetches the public key from your DNS, verifies the signature, and confirms "yes, this email was actually sent by the mail server claiming to send it, and the content has not been tampered with in transit."</p>

<p>Without DKIM, the recipient has no cryptographic proof that the email came from your mail server, and many email providers (Gmail in particular) downgrade unauthenticated mail to spam aggressively.</p>

<p>The DKIM record looks like:</p>

<pre><code>v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC...</code></pre>

<p>The actual key is hundreds of characters long. You copy it from the email provider's setup wizard and paste it into a TXT record at your DNS host.</p>

<p><strong>What goes wrong:</strong> without DKIM, deliverability suffers. Gmail in particular will mark unauthenticated bulk mail as spam by default. For small businesses sending only individual person-to-person mail, the impact is smaller but still real.</p>

<h3>DMARC (Domain-based Message Authentication, Reporting, and Conformance)</h3>

<p>DMARC is the policy layer that tells receiving mail servers what to do with mail from your domain that fails SPF or DKIM checks. It also requests reports from receivers about authentication results, which is how you find out whether your records are actually working in practice.</p>

<p>A typical DMARC record looks like:</p>

<pre><code>v=DMARC1; p=quarantine; rua=mailto:dmarc@yourbusiness.com; pct=100</code></pre>

<p>That says "version 1 of DMARC, if mail fails authentication put it in spam (quarantine) rather than rejecting outright, send aggregate reports to this email, apply this policy to 100 percent of messages."</p>

<p>The three available policies are <code>p=none</code> (monitor only, do not affect delivery), <code>p=quarantine</code> (send failing mail to spam), and <code>p=reject</code> (refuse failing mail entirely). The right policy depends on confidence: start with none, watch the reports for 30 days to confirm SPF and DKIM are working correctly for all legitimate mail, then move to quarantine, then to reject.</p>

<p><strong>What goes wrong:</strong> without DMARC, anyone can spoof your domain in phishing emails to your customers, and you have no visibility into when it is happening. With a properly-tuned DMARC record set to reject, spoofed mail gets blocked before it reaches your customers' inboxes.</p>

<h2>How I configure the four records</h2>

<p>For every site I build, the email-DNS configuration is part of the launch checklist. The flow:</p>

<ol>
  <li><strong>Confirm the email provider.</strong> Most clients use Google Workspace or Microsoft 365; some use simple forwarding through Cloudflare Email Routing or similar. The provider determines the specific values for each record.</li>
  <li><strong>Configure MX.</strong> The provider's setup wizard names the exact MX values; I add them to the client's DNS host (Cloudflare DNS for most clients, or wherever the domain is registered).</li>
  <li><strong>Configure SPF.</strong> The provider names the SPF include value (e.g. <code>include:_spf.google.com</code>); I add the SPF TXT record. If the client uses additional sending services (a CRM, a marketing-email tool), I include those in the SPF record too.</li>
  <li><strong>Configure DKIM.</strong> The provider's setup wizard generates the public key. I add it as a TXT record at the specific subdomain the provider names (typically <code>google._domainkey</code> or similar).</li>
  <li><strong>Configure DMARC, starting permissive.</strong> I set <code>p=none</code> initially with a reporting address that comes to me. Aggregate reports flow in for 30 days.</li>
  <li><strong>Tighten DMARC after 30 days of clean reports.</strong> If the reports show all legitimate mail authenticating cleanly, I move the policy to <code>p=quarantine</code>. After another 30 days at quarantine without legitimate mail being affected, I move to <code>p=reject</code>.</li>
</ol>

<p>The whole process takes about an hour at launch plus a quick check on each milestone. Once the records are at <code>p=reject</code> and stable, they require no further attention.</p>

<h2>How to check what your current records say</h2>

<p>Three free tools tell you most of what you need to know:</p>

<p><strong>MXToolbox.</strong> Visit <a href="https://mxtoolbox.com" rel="noopener" class="inline-link">mxtoolbox.com</a>, enter your domain. The tool shows MX, SPF, and DKIM records and flags common configuration issues. The depth is enough for most small-business diagnostics.</p>

<p><strong>Google's "Check MX" tool.</strong> If you use Google Workspace, the admin console has a built-in MX checker that confirms everything is configured correctly from Google's side.</p>

<p><strong>Send a test email to a Gmail account.</strong> After sending, open the email in Gmail's web interface, click the three-dot menu, choose "Show original." The header section names whether SPF, DKIM, and DMARC each PASS or FAIL. Three passes is the goal; any FAIL is worth investigating.</p>

<h2>If your business email lands in spam</h2>

<p>The diagnostic flow:</p>

<ol>
  <li>Send a test from your business email to a personal Gmail account.</li>
  <li>If the email arrives in spam, open it and check "Show original."</li>
  <li>Look for the SPF, DKIM, and DMARC results.</li>
  <li>Whichever check failed, that is the record to fix first.</li>
</ol>

<p>For sites I build, this is a non-issue at launch because the records are configured correctly. For sites I do not build, the fix path is to find your DNS host (where you bought the domain or where the records currently live), add or correct the failing record, wait 24 hours for propagation, and test again.</p>

<p>If the records are correctly configured but mail still lands in spam, the issue is usually content-based (spammy keywords, all-image emails, broken HTML) rather than authentication. That is a different conversation, but the authentication piece is the necessary precondition.</p>
