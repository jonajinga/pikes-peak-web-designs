// The Service Site Show — podcast metadata. Read by src/podcast.njk and
// src/_includes/layouts/episode.njk. Per-episode markdown lives in
// src/podcast/episodes/<slug>.md and is paginated like the blog.
//
// Podcast surface ships hidden (noindex / robots-disallow / unlinked)
// until 3 episodes are recorded; un-hide trigger documented in the
// world-class plan.
export default {
  title: "The Service Site Show",
  tagline: "Conversations with service-business owners about the web, work, and what actually moves the phone.",
  host: "Jon Ajinga",
  cadence: "Fortnightly, 20 minutes.",
  formats: [
    "Solo monologues — turning a recent essay or audit observation into 15-20 min of audio.",
    "Guest interviews — service-business owners (HVAC, roofing, plumbing, electrical, inspection, landscaping) on what their website actually does for them.",
  ],
  hosting: "Transistor.fm",
  feedUrl: "/podcast/feed.xml",
  publicLaunchTrigger: "Three episodes recorded and published. Until then, the page stays noindex and unlinked from nav.",
  appearsOn: [
    // Populated as the feed is submitted to each platform.
    // { name: "Apple Podcasts", url: "" },
    // { name: "Spotify",        url: "" },
    // { name: "Overcast",       url: "" },
    // { name: "Pocket Casts",   url: "" },
  ],
};
