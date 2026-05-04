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
    summary: "The Service Site Standard, applied to the agency's own website. Before / after numbers from the rebuild.",
    metrics: [
      { label: "Mobile PageSpeed", before: "—", after: "98–100" },
      { label: "Pages on launch", before: "—", after: "100+" },
      { label: "Cookie banner required", before: "n/a", after: "No" },
    ],
    tags: ["self-study", "custom-coded", "static-site"],
    anonymous: false,
    selfStudy: true,
  },
];
