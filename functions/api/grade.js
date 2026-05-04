// Cloudflare Pages Function: /api/grade?url=<URL>
//
// Backs the Service-Business Site Grader at /grader/. Runs five
// lightweight checks against a user-submitted URL and returns a
// 0-100 grade. No persistent storage; nothing leaves the request.
//
// Checks:
//   1. PageSpeed mobile (Google PSI API) — 40 pts max
//   2. Schema presence (any JSON-LD found in <head>) — 15 pts max
//   3. NAP exposure (phone + address regex hits on body) — 15 pts max
//   4. HTTPS (URL scheme check) — 10 pts max
//   5. Cookie banner footprint (no obvious tracker pixels) — 20 pts max
//
// Errors are returned as 200 with score: null and an error string so
// the frontend can render gracefully.

export async function onRequest(context) {
  const { request, env } = context;
  const u = new URL(request.url);
  const target = u.searchParams.get("url");

  if (!target) {
    return jsonError("Missing ?url= parameter", 400);
  }

  let parsed;
  try {
    parsed = new URL(target);
  } catch {
    return jsonError("Invalid URL", 400);
  }
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    return jsonError("URL must use http or https", 400);
  }

  const [pagespeed, html] = await Promise.all([
    fetchPagespeed(parsed.toString(), env.PSI_API_KEY),
    fetchHtml(parsed.toString()),
  ]);

  const httpsScore = parsed.protocol === "https:" ? 10 : 0;
  const psScore = pagespeed.score == null ? 0 : Math.round((pagespeed.score / 100) * 40);
  const schemaScore = html.hasSchema ? 15 : 0;
  const napScore = html.hasNAP ? 15 : 0;
  const trackerScore = html.trackerCount === 0 ? 20 : Math.max(0, 20 - html.trackerCount * 5);

  const total = psScore + schemaScore + napScore + httpsScore + trackerScore;
  const grade = letter(total);

  const recommendation = pickRecommendation({
    pagespeed: pagespeed.score,
    hasSchema: html.hasSchema,
    hasNAP: html.hasNAP,
    https: parsed.protocol === "https:",
    trackerCount: html.trackerCount,
  });

  return jsonOk({
    url: parsed.toString(),
    grade,
    total,
    breakdown: {
      pagespeed: { score: psScore, max: 40, raw: pagespeed.score, error: pagespeed.error },
      schema: { score: schemaScore, max: 15, hasSchema: html.hasSchema },
      nap: { score: napScore, max: 15, hasNAP: html.hasNAP },
      https: { score: httpsScore, max: 10, https: parsed.protocol === "https:" },
      tracker: { score: trackerScore, max: 20, trackerCount: html.trackerCount },
    },
    recommendation,
    checkedAt: new Date().toISOString(),
  });
}

async function fetchPagespeed(url, apiKey) {
  if (!apiKey) return { score: null, error: "PSI_API_KEY not configured" };
  try {
    const r = await fetch(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&category=PERFORMANCE&key=${apiKey}`,
      { cf: { cacheTtl: 60 * 60 * 1 } } // 1 hour edge cache per URL
    );
    if (!r.ok) return { score: null, error: `PSI ${r.status}` };
    const data = await r.json();
    const score = Math.round(((data?.lighthouseResult?.categories?.performance?.score) || 0) * 100);
    return { score, error: null };
  } catch (e) {
    return { score: null, error: e.message };
  }
}

async function fetchHtml(url) {
  try {
    const r = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; PikesPeakGrader/1.0)" },
      cf: { cacheTtl: 60 * 60 * 1 },
      redirect: "follow",
    });
    if (!r.ok) return { hasSchema: false, hasNAP: false, trackerCount: 0, error: `${r.status}` };
    const text = await r.text();
    const hasSchema = /<script[^>]+type=['"]application\/ld\+json['"]/i.test(text);
    // Phone regex: any common US/Canada phone format. Address regex: street suffix
    // (St / Ave / Rd / Blvd / Way / Dr) followed by city-state shape.
    const hasPhone = /(\(\d{3}\)\s?\d{3}[-.\s]?\d{4})|(\d{3}[-.\s]\d{3}[-.\s]\d{4})/.test(text);
    const hasAddress = /\b\d+\s+[A-Z][a-zA-Z]+\s+(?:St|Street|Ave|Avenue|Rd|Road|Blvd|Boulevard|Way|Dr|Drive|Ln|Lane)\b/.test(text);
    const hasNAP = hasPhone && hasAddress;
    // Count common third-party tracker domains (signal of cookie banner need).
    const trackerPatterns = [
      /googletagmanager\.com/i,
      /google-analytics\.com/i,
      /facebook\.net\/[^"]+\/fbevents\.js/i,
      /connect\.facebook\.net/i,
      /static\.hotjar\.com/i,
      /cdn\.segment\.com/i,
      /js\.hs-scripts\.com/i,
    ];
    const trackerCount = trackerPatterns.filter((re) => re.test(text)).length;
    return { hasSchema, hasNAP, trackerCount, error: null };
  } catch (e) {
    return { hasSchema: false, hasNAP: false, trackerCount: 0, error: e.message };
  }
}

function letter(total) {
  if (total >= 90) return "A";
  if (total >= 80) return "B";
  if (total >= 70) return "C";
  if (total >= 60) return "D";
  return "F";
}

function pickRecommendation(s) {
  if (!s.https) return "Switch to HTTPS first. Modern hosting (Cloudflare Pages, Netlify) ships with free SSL.";
  if (s.pagespeed != null && s.pagespeed < 50) return "Page speed is the highest-leverage fix. Mobile visitors are bouncing off slow load before they read your headline.";
  if (!s.hasSchema) return "Add LocalBusiness + Service schema (JSON-LD). Single highest-leverage local-pack ranking move.";
  if (!s.hasNAP) return "Get name, address, phone visible on every page in the same format as your Google Business Profile. Local-pack ranking depends on consistency.";
  if (s.trackerCount > 1) return "You probably need a cookie banner. Privacy-first analytics (Cloudflare + Umami) is a faster, cleaner alternative.";
  if (s.pagespeed != null && s.pagespeed < 90) return "Page speed is good but not great. Pushing from 75 to 95 is real revenue, not vanity.";
  return "Your site is in solid shape. The free 5-point audit can dig deeper if you want a written diagnostic.";
}

function jsonOk(payload) {
  return new Response(JSON.stringify(payload, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

function jsonError(message, status) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
