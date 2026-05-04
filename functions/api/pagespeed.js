// Cloudflare Pages Function: /api/pagespeed.json
//
// Returns the latest PageSpeed Insights mobile score for each URL in
// the watchlist. Cached at the Cloudflare edge for 6 hours so we do
// not blow through the PSI free quota; refreshed automatically as
// the cache expires.
//
// Configure PSI_API_KEY as an environment variable in Cloudflare
// Pages settings (free Google Cloud key with PSI API enabled). If
// the key is missing, the function falls back to a static "no data"
// payload rather than failing the request.
//
// Consumed by src/assets/js/main.js — the demo-site PageSpeed badge
// and the status page both read from this endpoint.

const WATCHLIST = [
  { id: "pikes-peak",        url: "https://pikespeakwebdesigns.com/" },
  { id: "redcap-roofing",    url: "https://pikespeakwebdesigns.com/demo/redcap-roofing/" },
  { id: "alpine-inspectors", url: "https://pikespeakwebdesigns.com/demo/alpine-inspectors/" },
  { id: "summit-hvac",       url: "https://pikespeakwebdesigns.com/demo/summit-hvac/" },
  { id: "lumen-electric",    url: "https://pikespeakwebdesigns.com/demo/lumen-electric/" },
  { id: "clearwater-plumbing", url: "https://pikespeakwebdesigns.com/demo/clearwater-plumbing/" },
  { id: "meadow-stone",      url: "https://pikespeakwebdesigns.com/demo/meadow-stone/" },
];

const CACHE_TTL_SECONDS = 60 * 60 * 6; // 6 hours

export async function onRequest(context) {
  const { env } = context;
  const apiKey = env.PSI_API_KEY;

  if (!apiKey) {
    return jsonResponse({
      checked: null,
      sites: WATCHLIST.map((s) => ({ ...s, score: null, error: "PSI_API_KEY not configured" })),
    }, 60);
  }

  const sites = await Promise.all(
    WATCHLIST.map(async (site) => {
      try {
        const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(site.url)}&strategy=mobile&category=PERFORMANCE&key=${apiKey}`;
        const r = await fetch(apiUrl, { cf: { cacheTtl: CACHE_TTL_SECONDS } });
        if (!r.ok) return { ...site, score: null, error: `PSI ${r.status}` };
        const data = await r.json();
        const score = Math.round(((data?.lighthouseResult?.categories?.performance?.score) || 0) * 100);
        return { ...site, score, error: null };
      } catch (e) {
        return { ...site, score: null, error: e.message };
      }
    })
  );

  return jsonResponse({
    checked: new Date().toISOString(),
    sites,
  }, CACHE_TTL_SECONDS);
}

function jsonResponse(payload, cacheSeconds) {
  return new Response(JSON.stringify(payload, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": `public, max-age=${cacheSeconds}, s-maxage=${cacheSeconds}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
}
