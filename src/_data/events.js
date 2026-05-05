// Jon's marketing calendar.
//
// This is a private operational dashboard, not a visitor-facing page.
// /events/ is noindex + excluded from collections; the page exists so
// Jon can plan, track, and review the marketing activity that brings
// new clients in (networking, speaking, podcasts, pitch waves, etc.).
//
// Add an entry whenever a new opportunity lands. Update status as it
// moves. After the event, fill in `outcome` so the historical view
// shows what actually happened.
//
// Shape:
//   slug      kebab-case unique id
//   type      one of: networking | speaking | hosting | pitching |
//             podcast | conference | outreach | sponsorship
//   title     short descriptive label
//   date      YYYY-MM-DD (or YYYY-MM if exact day not yet set)
//   end       optional, for multi-day or window events (YYYY-MM-DD)
//   location  city/state OR "Virtual" OR specific venue
//   audience  who is in the room (trade segment, role, etc.)
//   goal      one of: leads | brand | partnerships | content | learning
//   status    one of: idea | scheduled | prep | completed | declined
//   prep      optional array of checklist strings (open prep tasks)
//   notes     free-text notes for context
//   outcome   short summary of what came of it (filled in after)
//   leads     number of qualified leads attributed (after-only)

export default {
  events: [
    // -------------------------------------------------------------------
    // Active / upcoming
    // -------------------------------------------------------------------
    {
      slug: "cos-chamber-mixer-may",
      type: "networking",
      title: "Colorado Springs Chamber of Commerce — May mixer",
      date: "2026-05-15",
      location: "Colorado Springs, CO",
      audience: "Local small-business owners across all trades",
      goal: "leads",
      status: "scheduled",
      prep: [
        "Print 25 business cards",
        "Refresh one-page service overview as a PDF handout",
        "Confirm registration paid (Chamber portal)",
      ],
      notes: "Best networking event in town for direct contact with the buyer profile. Prior mixers have produced 1-2 discovery calls each.",
    },
    {
      slug: "front-range-roofing-podcast",
      type: "podcast",
      title: "Front Range Roofing podcast — guest appearance",
      date: "2026-05-22",
      location: "Virtual (Riverside.fm)",
      audience: "Colorado roofing-business owners (~1,200 monthly listeners)",
      goal: "brand",
      status: "prep",
      prep: [
        "Send three angle options to the host by Friday",
        "Record audio test on the actual mic",
        "Prepare 60-second redcap-roofing demo walk-through",
      ],
      notes: "Topic: 'Why your roofing company website is costing you storm leads.' Host wants the demo URL on screen during the talk.",
    },
    {
      slug: "bni-pikes-peak-weekly",
      type: "networking",
      title: "BNI Pikes Peak chapter — weekly meeting",
      date: "2026-05-09",
      location: "Colorado Springs, CO (every Friday 7am)",
      audience: "Cross-industry referral group, ~32 members",
      goal: "partnerships",
      status: "scheduled",
      prep: [
        "Bring referral targets (looking for HVAC, electrician, landscape designer)",
        "Prepare 60-second weekly intro",
      ],
      notes: "Recurring weekly. Track referrals given vs. received per quarter.",
    },
    {
      slug: "co-springs-home-garden-show",
      type: "sponsorship",
      title: "Colorado Springs Home & Garden Show — booth",
      date: "2026-09-12",
      end: "2026-09-14",
      location: "Norris Penrose Event Center, Colorado Springs",
      audience: "Homeowners + service-business owners (booth-side conversations)",
      goal: "leads",
      status: "idea",
      prep: [
        "Decide whether to share a booth with an existing client",
        "Get quote on 10x10 booth",
        "Design takeaway: laminated 'free 5-point audit' card with QR code",
      ],
      notes: "Ambitious. ROI uncertain. Decide by July; deposit due 60 days out.",
    },

    // -------------------------------------------------------------------
    // Outreach campaigns (rolling, not single-day events)
    // -------------------------------------------------------------------
    {
      slug: "trades-publications-pitch-wave-q2",
      type: "pitching",
      title: "Q2 trades-publications pitch wave",
      date: "2026-04-15",
      end: "2026-06-30",
      location: "Email + LinkedIn",
      audience: "Roofing, HVAC, plumbing, electrical trade-pub editors",
      goal: "content",
      status: "prep",
      prep: [
        "Finalize three-pitch shortlist (Roofing Contractor, ACHR News, Reeves Journal)",
        "Tailor each pitch with one trade-specific angle",
        "Track responses in the press-mentions data file",
      ],
      notes: "Aim: one published article per quarter. The methodology page is the lead-magnet inside each pitch.",
    },
    {
      slug: "realtor-referral-outreach-may",
      type: "outreach",
      title: "Realtor referral outreach — Colorado Springs",
      date: "2026-05-01",
      end: "2026-05-31",
      location: "Email + door drops",
      audience: "Top 30 producing realtors in Colorado Springs metro",
      goal: "partnerships",
      status: "idea",
      prep: [
        "Pull list from local MLS (top 30 by volume in 2025)",
        "Draft a one-paragraph intro email + a useful free resource (homeowner-website tip sheet)",
        "Decide whether to add a small referral incentive ($50/referral that closes)",
      ],
      notes: "Realtors are the best referral source for inspector/landscaper clients. Lots of low-friction warm leads if even one or two engage.",
    },

    // -------------------------------------------------------------------
    // Hosted (own webinars / events)
    // -------------------------------------------------------------------
    {
      slug: "webinar-website-hurts-business-june",
      type: "hosting",
      title: "Webinar: \"How to tell if your website is hurting your business\"",
      date: "2026-06-18",
      location: "Virtual (Zoom)",
      audience: "Service-business owners on the newsletter list",
      goal: "leads",
      status: "idea",
      prep: [
        "Decide on 30-min vs 45-min format",
        "Draft slide outline based on the 12-point self-audit blog post",
        "Promote via newsletter + LinkedIn + Reddit r/smallbusiness",
        "Set up registration page + reminder email automation",
      ],
      notes: "First webinar. Low expectations on attendance. Use it as content (record + repurpose into clips). Plan to repeat quarterly if it gets traction.",
    },

    // -------------------------------------------------------------------
    // Recently completed (last 90 days, with outcomes)
    // -------------------------------------------------------------------
    {
      slug: "cos-chamber-mixer-april",
      type: "networking",
      title: "Colorado Springs Chamber of Commerce — April mixer",
      date: "2026-04-17",
      location: "Colorado Springs, CO",
      audience: "Local small-business owners",
      goal: "leads",
      status: "completed",
      outcome: "Two discovery calls booked (one painter, one auto-detailer). One signed on the standard plan; the second went quiet after the second email.",
      leads: 2,
      notes: "Worth repeating monthly. The painter conversation came from a side comment about a competitor's WordPress site; lesson: lead with examples, not pitches.",
    },
    {
      slug: "trades-pub-pitch-q1-roofing-contractor",
      type: "pitching",
      title: "Roofing Contractor magazine — pitch (Q1)",
      date: "2026-03-12",
      location: "Email",
      audience: "Editor",
      goal: "content",
      status: "declined",
      outcome: "Editor passed; said they had three website articles in the queue already. Asked me to re-pitch in Q3 with a different angle.",
      notes: "Save the rejection email; re-pitch in August with a 'storm-season website readiness' angle.",
    },
    {
      slug: "regional-electrician-association-talk",
      type: "speaking",
      title: "Regional Electricians' Association — quarterly meetup talk",
      date: "2026-03-22",
      location: "Pueblo, CO",
      audience: "~40 electricians from southern Colorado",
      goal: "brand",
      status: "completed",
      outcome: "Talk went well. Three business cards collected, one became an active client (lumen-electric-style site, signed mid-April). Best ROI per hour of any marketing activity to date.",
      leads: 3,
      notes: "Pitch the same trade-association format to plumbers and HVAC associations next.",
    },
  ],
};
