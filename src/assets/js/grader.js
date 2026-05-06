// /assets/js/grader.js — frontend for the Service-Business Site Grader.
// Submits the URL to /api/grade and renders the response as a clean
// report card. Vanilla JS, no framework, no build step.

(function () {
  'use strict';

  const form = document.getElementById('grader-form');
  const resultEl = document.getElementById('grader-result');
  const input = document.getElementById('grader-url');
  if (!form || !resultEl || !input) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const raw = input.value.trim();
    if (!raw) return;

    let target = raw;
    if (!/^https?:\/\//i.test(target)) target = 'https://' + target;

    showLoading();

    try {
      const r = await fetch('/api/grade?url=' + encodeURIComponent(target));
      if (!r.ok) {
        const err = await r.json().catch(function () { return { error: 'API error ' + r.status }; });
        showError(err.error || 'API error ' + r.status);
        return;
      }
      const data = await r.json();
      showResult(data);
    } catch (err) {
      showError(err.message || 'Network error');
    }
  });

  function showLoading() {
    resultEl.hidden = false;
    resultEl.innerHTML =
      '<div class="grader-loading" role="status">' +
      '  <span class="grader-loading-spinner" aria-hidden="true"></span>' +
      '  <p>Running five checks against your URL. Usually takes 5&ndash;15 seconds.</p>' +
      '</div>';
    resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function showError(msg) {
    resultEl.hidden = false;
    resultEl.innerHTML =
      '<div class="grader-error" role="alert">' +
      '  <strong>Could not grade that URL.</strong>' +
      '  <p>' + escapeHtml(msg) + '</p>' +
      '</div>';
  }

  // Each check has a fixed copy block: a one-line explanation when the
  // result is good, and a one-line fix when the result is bad. Drives
  // the per-row note in the report.
  const NOTES = {
    pagespeed: {
      good:   'Mobile load is fast enough that visitors stay engaged through the headline.',
      ok:     'Acceptable, but pushing past 90 is real money — a 75 to 95 jump cuts mobile bounce noticeably.',
      bad:    'Mobile visitors are bouncing before the page even paints. Highest-leverage fix on the list.',
      missing:'PageSpeed could not be measured (rate limit or fetch error). Try again in a minute.',
    },
    schema: {
      good: 'Structured data (JSON-LD) is present. Google does not have to guess what the business is.',
      bad:  'No JSON-LD found. Add LocalBusiness + Service schema; biggest single local-pack ranking move.',
    },
    nap:    {
      good: 'Name, address, and phone are visible on the page in a Google-parseable format.',
      bad:  'Phone or address not detected. Local-pack ranking depends on NAP visibility + consistency with the Google Business Profile.',
    },
    https:  {
      good: 'HTTPS is on. Browsers do not warn visitors and search engines do not deprioritize.',
      bad:  'Site is not on HTTPS. Modern hosting (Cloudflare Pages, Netlify) ships free SSL — fix this first.',
    },
    tracker:{
      good:  'No third-party trackers detected. No cookie banner needed; page-speed cost is zero.',
      ok:    'One tracker detected. Borderline — a single GA4 tag is usually fine, but watch the page-speed cost.',
      bad:   'Multiple third-party trackers detected. Cookie banner is legally required and each tracker drags down PageSpeed.',
    },
  };

  function pickNote(key, breakdown) {
    const n = NOTES[key];
    if (!n) return '';
    const b = breakdown[key] || {};
    if (key === 'pagespeed') {
      if (b.raw == null) return n.missing;
      if (b.raw >= 90) return n.good;
      if (b.raw >= 60) return n.ok;
      return n.bad;
    }
    if (key === 'schema') return b.hasSchema ? n.good : n.bad;
    if (key === 'nap')    return b.hasNAP    ? n.good : n.bad;
    if (key === 'https')  return b.https     ? n.good : n.bad;
    if (key === 'tracker') {
      const c = b.trackerCount || 0;
      if (c === 0) return n.good;
      if (c === 1) return n.ok;
      return n.bad;
    }
    return '';
  }

  function showResult(data) {
    const b = data.breakdown || {};
    const total = data.total || 0;
    const grade = data.grade || 'F';
    const cls = total >= 80 ? 'green' : (total >= 60 ? 'amber' : 'red');
    const checkedAt = data.checkedAt
      ? new Date(data.checkedAt).toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'short' })
      : new Date().toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'short' });

    resultEl.hidden = false;
    resultEl.innerHTML =
      '<article class="grader-card grader-card--' + cls + '" id="grader-report">' +
      '  <header class="grader-card-print-head" aria-hidden="true">' +
      '    <span class="grader-card-print-brand">Pikes Peak Web Designs</span>' +
      '    <span class="grader-card-print-tagline">Service-Business Site Grader Report</span>' +
      '  </header>' +
      '  <div class="grader-card-head">' +
      '    <span class="grader-card-grade">' + grade + '</span>' +
      '    <div class="grader-card-meta">' +
      '      <span class="grader-card-score">' + total + '<span class="grader-card-score-max"> / 100</span></span>' +
      '      <span class="grader-card-url">' + escapeHtml(data.url) + '</span>' +
      '      <span class="grader-card-checked">Checked ' + escapeHtml(checkedAt) + '</span>' +
      '    </div>' +
      '    <div class="grader-card-actions">' +
      '      <button type="button" class="btn btn-outline-dark btn-sm" onclick="window.print()" aria-label="Print or save report as PDF">' +
      '        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>' +
      '        Print / Save as PDF' +
      '      </button>' +
      '    </div>' +
      '  </div>' +
      '  <div class="grader-card-recommendation">' +
      '    <strong>Fix this first:</strong> ' + escapeHtml(data.recommendation || '') +
      '  </div>' +
      '  <div class="grader-breakdown" role="list" aria-label="Score breakdown">' +
      breakdownRow('Mobile PageSpeed', b.pagespeed && b.pagespeed.score, 40, b.pagespeed && b.pagespeed.raw != null ? b.pagespeed.raw + ' / 100 PSI' : 'No data', pickNote('pagespeed', b)) +
      breakdownRow('Schema (JSON-LD) present', b.schema && b.schema.score, 15, b.schema && b.schema.hasSchema ? 'Detected' : 'Not found', pickNote('schema', b)) +
      breakdownRow('NAP visible (phone + address)', b.nap && b.nap.score, 15, b.nap && b.nap.hasNAP ? 'Detected' : 'Not found', pickNote('nap', b)) +
      breakdownRow('HTTPS', b.https && b.https.score, 10, b.https && b.https.https ? 'On' : 'Off', pickNote('https', b)) +
      breakdownRow('Tracker footprint', b.tracker && b.tracker.score, 20, b.tracker ? (b.tracker.trackerCount + ' detected') : 'Unknown', pickNote('tracker', b)) +
      '  </div>' +
      '  <footer class="grader-card-foot">' +
      '    <div class="grader-card-cta">' +
      '      <a href="/audit/" class="btn btn-primary">Get the free 5-point audit</a>' +
      '      <a href="/contact/" class="btn btn-outline-dark">Or book a discovery call</a>' +
      '    </div>' +
      '    <p class="grader-card-print-foot" aria-hidden="true">' +
      '      Generated by the Pikes Peak Web Designs Service-Business Site Grader at pikespeakwebdesigns.com/grader/. ' +
      '      Verifiable: each check above can be reproduced by hand using PageSpeed Insights, View Source, and a browser DevTools network tab. ' +
      '      Questions: hello@pikespeakwebdesigns.com.' +
      '    </p>' +
      '  </footer>' +
      '</article>';

    resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function breakdownRow(label, score, max, detail, note) {
    if (score == null) score = 0;
    const pct = Math.round((score / max) * 100);
    const tone = pct >= 80 ? 'good' : (pct >= 50 ? 'ok' : 'bad');
    return '<div class="grader-row grader-row--' + tone + '" role="listitem">' +
      '  <span class="grader-row-label">' + escapeHtml(label) + '</span>' +
      '  <span class="grader-row-bar" aria-hidden="true">' +
      '    <span class="grader-row-bar-fill" style="width:' + pct + '%"></span>' +
      '  </span>' +
      '  <span class="grader-row-score"><strong>' + score + '</strong>/' + max + '</span>' +
      '  <span class="grader-row-detail"><strong>' + escapeHtml(detail) + '</strong>' + (note ? ' &middot; ' + escapeHtml(note) : '') + '</span>' +
      '</div>';
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
})();
