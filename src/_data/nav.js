export default {
  primary: [
    { label: "How It Works", url: "/how-it-works/" },
    { label: "What's Included", url: "/whats-included/" },
    { label: "Sample Websites", url: "/samples/" },
    { label: "Pricing", url: "/pricing/" },
    { label: "Blog", url: "/blog/" },
    { label: "About", url: "/about/" },
  ],
  megaMenu: {
    southwest: {
      label: "Southwest & West",
      // Sorted by state then city
      cities: [
        { label: "Phoenix, AZ", slug: "phoenix-az" },
        { label: "Los Angeles, CA", slug: "los-angeles-ca" },
        { label: "San Diego, CA", slug: "san-diego-ca" },
        { label: "Denver, CO", slug: "denver-co" },
        { label: "Las Vegas, NV", slug: "las-vegas-nv" },
        { label: "Portland, OR", slug: "portland-or" },
        { label: "Salt Lake City, UT", slug: "salt-lake-city-ut" },
        { label: "Seattle, WA", slug: "seattle-wa" },
      ],
    },
    south: {
      label: "South & Texas",
      // Sorted by state then city
      cities: [
        { label: "Atlanta, GA", slug: "atlanta-ga" },
        { label: "Charlotte, NC", slug: "charlotte-nc" },
        { label: "Raleigh, NC", slug: "raleigh-nc" },
        { label: "Nashville, TN", slug: "nashville-tn" },
        { label: "Austin, TX", slug: "austin-tx" },
        { label: "Dallas, TX", slug: "dallas-tx" },
        { label: "Houston, TX", slug: "houston-tx" },
        { label: "San Antonio, TX", slug: "san-antonio-tx" },
      ],
    },
    east: {
      label: "Florida, Midwest & Northeast",
      // Sorted by state then city
      cities: [
        { label: "Jacksonville, FL", slug: "jacksonville-fl" },
        { label: "Miami, FL", slug: "miami-fl" },
        { label: "Tampa, FL", slug: "tampa-fl" },
        { label: "Chicago, IL", slug: "chicago-il" },
        { label: "Indianapolis, IN", slug: "indianapolis-in" },
        { label: "Baltimore, MD", slug: "baltimore-md" },
        { label: "Columbus, OH", slug: "columbus-oh" },
        { label: "Philadelphia, PA", slug: "philadelphia-pa" },
      ],
    },
    canada: {
      label: "Canada",
      // Sorted by province then city
      cities: [
        { label: "Calgary, AB", slug: "calgary-ab" },
        { label: "Edmonton, AB", slug: "edmonton-ab" },
        { label: "Vancouver, BC", slug: "vancouver-bc" },
        { label: "Ottawa, ON", slug: "ottawa-on" },
        { label: "Toronto, ON", slug: "toronto-on" },
        { label: "Montreal, QC", slug: "montreal-qc" },
      ],
    },
  },
  // Mobile highlights sorted by state then city (U.S. first, then Canada)
  mobileHighlights: [
    { label: "Phoenix, AZ", slug: "phoenix-az" },
    { label: "Los Angeles, CA", slug: "los-angeles-ca" },
    { label: "Denver, CO", slug: "denver-co" },
    { label: "Miami, FL", slug: "miami-fl" },
    { label: "Tampa, FL", slug: "tampa-fl" },
    { label: "Atlanta, GA", slug: "atlanta-ga" },
    { label: "Chicago, IL", slug: "chicago-il" },
    { label: "Charlotte, NC", slug: "charlotte-nc" },
    { label: "Las Vegas, NV", slug: "las-vegas-nv" },
    { label: "Philadelphia, PA", slug: "philadelphia-pa" },
    { label: "Nashville, TN", slug: "nashville-tn" },
    { label: "Dallas, TX", slug: "dallas-tx" },
    { label: "Houston, TX", slug: "houston-tx" },
    { label: "San Antonio, TX", slug: "san-antonio-tx" },
    { label: "Seattle, WA", slug: "seattle-wa" },
    { label: "Calgary, AB", slug: "calgary-ab", canada: true },
    { label: "Vancouver, BC", slug: "vancouver-bc", canada: true },
    { label: "Toronto, ON", slug: "toronto-on", canada: true },
    { label: "Montreal, QC", slug: "montreal-qc", canada: true },
  ],
};
