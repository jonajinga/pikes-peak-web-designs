---
title: "GitHub: Version Control for Non-Developers, Explained"
date: 2026-05-19
label: "The Stack"
description: "Every site I build lives in a Git repository, with a permanent record of every change. Here's what that means for a small business owner."
ctaLabel: "Versioned by default"
ctaHeading: "Every change to your site stays on record"
ctaText: "Every site I build is stored in a Git repository with a permanent history of every change. Rolling back to any past version takes a few minutes, and you can always see what changed and when."
layout: layouts/post.njk
tags: [post]
---

<p>Ask a developer how their work is organized and you may get a string of terms back: Git, GitHub, repos, branches, commits, pull requests. They name one of the most common tools in software in 2026. Every site I build lives in a Git repository on GitHub, and that repository supports everything else I do. This post is the explanation I'd like every client to read.</p>

<p>The short version: Git records every change to a set of files in a permanent, dated log, and GitHub stores that record online where you can browse it. Together they mean every line of code your site has ever had can be recovered, and every change can be inspected, undone, or traced at any time.</p>

<h2>What a "repository" is</h2>

<p>A Git repository ("repo" for short) is a folder of files with a hidden tracking layer underneath. It looks like an ordinary folder, but Git keeps a full history of every save, deletion, edited line, and new file.</p>

<p>That history is permanent. A deleted file can be brought back, and today's version of a page can be compared line by line with last year's. In effect, the repository is a time machine for your site's code.</p>

<p>For the sites I build, it holds everything that produces the site: the page templates, the written content, the styling and scripts, the settings, the build and publishing instructions, and the images. Copied to a new computer, it could rebuild the whole site from scratch in two minutes.</p>

<h2>What "commits" are</h2>

<p>Each change is saved as a "commit": a labeled snapshot of what changed, who changed it, and when. A typical commit message reads "Add hours of operation to contact page" or "Fix typo in service-area description for Boulder."</p>

<p>The commits read like a project log. Six months or six years after launch, you can scroll through and see what changed on which day.</p>

<p>Most clients never see the log. You email me an update, I make the change and save the commit, and the site updates. The log is there whenever you want it, though, and a question like "who removed the Saturday hours from the contact page?" takes one search to answer.</p>

<h2>What "deploy on push" means</h2>

<p>The repository and the live site are linked. When I send ("push") a commit to the main version of the repository, Cloudflare Pages, the service that hosts the site, notices within seconds, builds the site from the new code, and publishes it. The whole process takes 30 seconds to two minutes.</p>

<p>Nobody copies files to a server by hand or has to remember which files changed. For you, that means fast, reliable updates. For me, it means I can't forget to publish a change or upload the wrong files.</p>

<h2>Why this matters for a small business</h2>

<p>The repository gives you two practical benefits.</p>

<p><strong>Rolling back is fast.</strong> If a change causes a problem, such as a text edit that breaks a layout, one Git command and one republish restore the previous version within minutes, with nothing lost.</p>

<p><strong>The record is permanent.</strong> Every word on the site was added at a known time by a known person. If a price or a service description is changed by mistake, both the old text and the timeline can be recovered.</p>

<h2>Where the repository lives</h2>

<p>On the monthly plan I own the code, so each client's repository is private and kept in my own GitHub account, with access for the client where it's useful. I do it this way for two reasons:</p>

<p><strong>I can act right away.</strong> I can make changes without sorting out passwords with you first. If a fix is needed at midnight on a Saturday during storm season, I don't have to wait for access.</p>

<p><strong>It's backed up.</strong> GitHub backs up every repository automatically, keeps the history indefinitely, and copies each commit across its data centers within seconds.</p>

<p>Your domain is registered in your name, and you control it. If you cancel, I help you move the domain to a registrar of your choice, and the website goes offline at the end of the term. The repository stays with me, because there's no export of the site and no code buyout.</p>

<h2>What clients interact with</h2>

<p>For most clients, nothing. The repository is my tool. You send updates by email or through the content-update form, I make the changes, and they go live.</p>

<p>Clients who want to look can use GitHub's web pages to browse the files, read the log, search, and compare any two versions. Reading takes no technical knowledge; making changes takes some.</p>

<p>If you have a developer on staff, the repository can become a shared workspace. They can review my changes before they go live, suggest edits through pull requests (proposed changes I review first), or make small content updates themselves. That's rare for small businesses, but I support it.</p>

<h2>What this prevents</h2>

<p>Version control spares you the headaches older ways of working cause:</p>

<ul>
  <li>"The developer overwrote my logo, and now it's gone for good."</li>
  <li>"We hired someone to update the site, and they broke something we can't find."</li>
  <li>"The old version of this page had a paragraph I wanted, and I deleted it."</li>
  <li>"I have no idea what changed between last week and this week."</li>
</ul>

<p>The repository solves all four by keeping every version recoverable.</p>

<h2>If your current site has no version control</h2>

<p>Most small-business websites built before 2018 have no version history. The site exists only as it is now, earlier versions are gone, and rolling back means rebuilding.</p>

<p>Sites I build have version control from day one, as part of the standard plan. Another site can add it at any time, but the past can't be recovered; only changes from that point on are logged.</p>

<p>Most small businesses never need the history. But on the rare day something goes wrong, it's the difference between a five-minute rollback and a five-day rebuild.</p>
