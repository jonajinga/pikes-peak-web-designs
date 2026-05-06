// Published case studies. Iterated by src/case-studies.njk once the
// hidden state is unlocked (≥1 case study published).
//
// The first study (the agency's own site) ships immediately as
// dogfood. Client studies populate as written permission lands —
// the consent clause is in the proposal language.
//
// Field shape:
//   slug          string         filename slug under src/case-studies/
//   client        string         business name
//   trade         string         trade vertical
//   metro         string         metro / city
//   summary       string         one-line outcome sentence
//   metrics       array<object>  [{ label, before, after }] — for the
//                                results stat block at the top of each
//                                case-study page
//   tags          array<string>  for filtering on /case-studies/
//   anonymous     bool           true if names should be hidden
//   selfStudy     bool           true for the agency's own dogfood case
export default [
  {
    slug: "service-site-standard-applied-to-itself",
    client: "Pikes Peak Web Designs",
    trade: "Custom-coded web design",
    metro: "Colorado Springs, CO (national reach)",
    summary: "The agency's own website. First site, built from scratch on the Service Site Standard. No prior site to migrate, no legacy to undo — every number on this page is what shipped on day one.",
    metrics: [
      { label: "Mobile PageSpeed", value: "95–100" },
      { label: "Core Web Vitals", value: "Green band" },
      { label: "Accessibility floor", value: "WCAG 2.2 AA" },
      { label: "Pages on launch", value: "100+" },
      { label: "Cookie banner required", value: "No" },
    ],
    tags: ["self-study", "greenfield", "custom-coded", "static-site"],
    anonymous: false,
    selfStudy: true,
    greenfield: true,
  },
];
