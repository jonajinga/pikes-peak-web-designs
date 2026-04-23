// Cloudflare Pages Function — serves robots.txt from code so Cloudflare's
// edge-level "Content Signals" injection doesn't append non-standard directives
// (which Lighthouse flags as invalid, breaking SEO score).
//
// Pages Functions take precedence over static assets at the same path, so this
// replaces the static robots.txt that lives in src/. Any future updates to
// robots.txt directives should go here, not in src/.
export async function onRequest() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    "Sitemap: https://pikespeakwebdesigns.com/sitemap.xml",
    "",
  ].join("\n");
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
