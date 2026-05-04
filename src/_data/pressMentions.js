// Press / podcast / contributed-article placements as they land. The
// homepage "As featured in" strip and the /press/ "recent placements"
// list both read from this array.
//
// Empty array → strip is hidden on the homepage and the placements
// list on /press/ shows a "no placements yet" inline note.
//
// Field shape:
//   outlet      string  publication / podcast / show name
//   url         string  link to the placement (article URL or episode)
//   type        string  "article" | "podcast" | "interview" | "op-ed"
//   logoFile    string  optional, /assets/img/press/<file>.svg or .png
//   date        string  ISO date — internal only, not shown publicly
//   topic       string  one-line description of the placement
export default [
  // Example shape (commented; uncomment and populate as placements land):
  // {
  //   outlet: "Trade Publication Name",
  //   url: "https://...",
  //   type: "article",
  //   logoFile: "/assets/img/press/outlet.svg",
  //   date: "2026-06-15",
  //   topic: "How custom-coded sites out-rank template builders in the local pack",
  // },
];
