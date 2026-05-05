---
title: "GitHub: Version Control for Non-Developers, Explained"
date: 2026-05-19
label: "The Stack"
description: "Every site I build lives in a Git repository, with a permanent record of every change. Here is what that means for a small business owner."
ctaLabel: "Versioned by default"
ctaHeading: "Every change to your site is logged forever."
ctaText: "Every site I build is stored in a Git repository, with a permanent history of every change. Rollback to any past version is a few minutes of work, and you can always see exactly what changed and when."
layout: layouts/post.njk
tags: [post]
---

<p>If you have ever asked a developer how their work is organized and gotten back a barrage of acronyms (Git, GitHub, repos, branches, commits, pull requests), you have run into one of the most universal pieces of software-development infrastructure in 2026. Every site I build lives in a Git repository on GitHub, and the repository is one of the quiet workhorses behind everything else. This post is the version of that conversation I want every client to have read.</p>

<p>The short version: Git is a way of tracking every change to a set of files, with a permanent timestamped log. GitHub is the place where the Git repository lives, with a friendly web interface on top. Together they mean every line of code that has ever existed on your site is recoverable, and every change can be inspected, reverted, or audited at any time.</p>

<h2>What a "repository" actually is</h2>

<p>A Git repository (often shortened to "repo") is a folder of files with a hidden tracking layer underneath. The folder itself looks normal — just files and subfolders — but Git keeps a complete history of every change ever made to those files. Every save, every deletion, every line modified, every new file added.</p>

<p>That history is permanent. Files deleted from the repository can be recovered from any past version. A change made today can be inspected against the version from a year ago, with the differences highlighted line by line. The repository is, in effect, a complete time machine for the codebase.</p>

<p>For sites I build, the repository contains everything that produces the site: the HTML templates, the Markdown content, the CSS, the JavaScript, the configuration files, the build scripts, the deployment instructions. Plus images and other assets that ship with the site. If the entire repository were copied to a new machine, the site could be rebuilt from scratch in two minutes.</p>

<h2>What "commits" are</h2>

<p>Every change to the repository is grouped into a "commit." A commit is a labeled snapshot: a description of what changed, who made the change, and when. A typical commit message reads something like "Add hours of operation to contact page" or "Fix typo in service-area description for Boulder."</p>

<p>The commit history reads like a project log. Six months after launch, you can scroll through the commits and see exactly what changed on which day. Six years after launch, the log is still there, with every modification annotated.</p>

<p>For most clients, the commit log is invisible — they email me with content updates, I make the change, the commit lands, the site updates. The client sees the result; the log records the work. But the log is available to the client at any time, and on the rare occasion when something needs auditing ("who removed the Saturday hours from the contact page?"), the answer is one search in the commit log.</p>

<h2>What "deploy on push" means</h2>

<p>The connection between the GitHub repository and the live website is automatic. Every time I push a commit to the repository's main branch, Cloudflare Pages detects the push within a few seconds, pulls the new code, runs the build pipeline, and publishes the result to the live website. The whole flow takes 30 seconds to two minutes.</p>

<p>This is the modern small-business-website workflow. There is no FTP, no manual file uploading, no "remember to copy the changed files to the server." A change is committed once, and the deployment is automatic.</p>

<p>The advantage from a client perspective is that updates are fast and reliable. The advantage from my perspective is that I can never forget to deploy a change, and I can never accidentally upload the wrong files.</p>

<h2>Why this matters for a small business</h2>

<p>The repository system produces three concrete client-facing benefits.</p>

<p><strong>Rollback to any past version is fast.</strong> If a change introduces a problem (a copy edit produces a broken layout, a new feature has an unexpected side effect), reverting to the previous version is one Git command and one redeploy. The site is back to its previous state within minutes, with no data loss.</p>

<p><strong>Audit trail is permanent.</strong> Every word on the website was added at a specific time by a specific person. If a price was changed by mistake or a service description got accidentally edited, the change is recoverable and the timeline is recoverable.</p>

<p><strong>The site is portable.</strong> If the client ever moves to a different developer, the entire site (and its history) is in the repository. The new developer clones the repository, runs the build, and continues. There is no "the old developer needs to give us access to the proprietary platform" step.</p>

<h2>Where the repository lives</h2>

<p>For sites I build, the repository is hosted on GitHub under my own organization, with the client granted appropriate access. I do this for two reasons:</p>

<p><strong>Operational continuity.</strong> Hosting the repository in my account means I can make changes without coordinating credentials with the client. I can deploy fixes at midnight on a Saturday during a storm-season traffic spike without waiting on the client to grant access.</p>

<p><strong>Backup and continuity.</strong> The repository is automatically backed up by GitHub's infrastructure, with version history preserved indefinitely. Every commit is replicated across GitHub's data centers within seconds of being pushed.</p>

<p>If a client wants their own copy of the repository (for backup, for archival, or because they want to engage another developer), I provide a clone at any point during or after the engagement. The repository is small (typically a few hundred KB plus the image assets), and a complete copy fits on any modern device.</p>

<h2>What the client typically interacts with</h2>

<p>For most clients, the answer is "nothing directly." The repository is the developer's tool, not the client's tool. Updates flow through email or the content-update form; I make the changes in the repository; the changes go live; the client sees the result.</p>

<p>For clients who do want to look at the repository, GitHub provides a clean web interface. They can browse the file tree, read the commit log, search for specific files or terms, and view the differences between any two versions. No technical knowledge required to read; some technical knowledge required to write changes.</p>

<p>For clients with a developer on staff or a tech-comfortable team, the repository becomes a collaboration surface. The team member can review my changes before they go live, propose edits via pull requests, or even handle small content updates themselves. This is rare on small-business engagements but supported on the rare occasions when it comes up.</p>

<h2>What this skips</h2>

<p>By using GitHub for version control, I get to skip a category of small-business-website pain that older workflows produce:</p>

<ul>
  <li>No "the developer accidentally overwrote my logo and now it is gone forever."</li>
  <li>No "we hired someone to update the site and they broke something we cannot identify."</li>
  <li>No "the previous version of this page had a paragraph I wanted to keep but I deleted it."</li>
  <li>No "I have no idea what changed between last week and this week."</li>
</ul>

<p>The repository solves all four of these by keeping every version recoverable.</p>

<h2>If your current site has no version control</h2>

<p>Most small-business websites built before 2018 have no version-control history. The site exists as a snapshot on a server; previous versions are gone forever; the developer has no log of changes; rolling back is rebuilding.</p>

<p>For sites I build, version control is part of the standard plan from day one. For sites I do not build, retroactively adding version control is straightforward but the historical record cannot be reconstructed (the past is just gone). Going forward, every change is logged, but pre-engagement history is not recoverable.</p>

<p>Worth being clear: most small businesses never need the version history. The site runs, the changes happen, and the past versions are not consulted. But on the rare occasion when something does go wrong, having the history is the difference between a 5-minute rollback and a 5-day rebuild.</p>
