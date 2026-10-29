// Directory data for every page under /blog/ (the index and each post).
// While site.blogPublic is false the blog is noindex, which base.njk turns
// into a robots meta tag and a Pagefind ignore, and sitemap.njk skips.
import site from "../_data/site.js";

export default {
  noindex: !site.blogPublic,
};
