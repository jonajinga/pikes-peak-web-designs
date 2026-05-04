// /assets/js/grader.js — frontend for the Service-Business Site Grader.
// Submits the URL to /api/grade and renders the response. Vanilla JS,
// no framework, no build step.

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
      '<div class="grader-loading">' +
      '  <span class="grader-loading-spinner" aria-hidden="true"></span>' +
      '  <p>Running five checks against your URL. Usually takes 5&ndash;15 seconds.</p>' +
      '</div>';
  }

  function showError(msg) {
    resultEl.hidden = false;
    resultEl.innerHTML =
      '<div class="grader-error" role="alert">' +
      '  <strong>Could not grade that URL.</strong>' +
      '  <p>' + escapeHtml(msg) + '</p>' +
      '</div>';
  }

  function showResult(data) {
    const b = data.breakdown || {};
    const total = data.total || 0;
    const grade = data.grade || 'F';
    const cls = total >= 80 ? 'green' : (total >= 60 ? 'amber' : 'red');

    resultEl.hidden = false;
    resultEl.innerHTML =
      '<div class="grader-card grader-card--' + cls + '">' +
      '  <div class="grader-card-head">' +
      '    <span class="grader-card-grade">' + grade + '</span>' +
      '    <div class="grader-card-meta">' +
      '      <span class="grader-card-score">' + total + '<span class="grader-card-score-max"> / 100</span></span>' +
      '      <span class="grader-card-url">' + escapeHtml(data.url) + '</span>' +
      '    </div>' +
      '  </div>' +
      '  <div class="grader-card-recommendation">' +
      '    <strong>Fix this first:</strong> ' + escapeHtml(data.recommendation || '') +
      '  </div>' +
      '  <div class="grader-breakdown">' +
      breakdownRow('Mobile PageSpeed', b.pagespeed && b.pagespeed.score, 40, b.pagespeed && b.pagespeed.raw != null ? b.pagespeed.raw + ' / 100 PSI' : 'No data') +
      breakdownRow('Schema (JSON-LD) present', b.schema && b.schema.score, 15, b.schema && b.schema.hasSchema ? 'Yes' : 'No') +
      breakdownRow('NAP visible (phone + address)', b.nap && b.nap.score, 15, b.nap && b.nap.hasNAP ? 'Yes' : 'No') +
      breakdownRow('HTTPS', b.https && b.https.score, 10, b.https && b.https.https ? 'Yes' : 'No') +
      breakdownRow('Tracker footprint', b.tracker && b.tracker.score, 20, b.tracker ? (b.tracker.trackerCount + ' detected') : 'Unknown') +
      '  </div>' +
      '  <div class="grader-card-cta">' +
      '    <a href="/audit/" class="btn btn-primary">Get a deeper free audit</a>' +
      '    <a href="/service-site-audit/" class="btn btn-outline-dark">Or the paid $499 audit</a>' +
      '  </div>' +
      '</div>';
  }

  function breakdownRow(label, score, max, detail) {
    if (score == null) score = 0;
    const pct = Math.round((score / max) * 100);
    return '<div class="grader-row">' +
      '  <span class="grader-row-label">' + escapeHtml(label) + '</span>' +
      '  <span class="grader-row-bar" aria-hidden="true">' +
      '    <span class="grader-row-bar-fill" style="width:' + pct + '%"></span>' +
      '  </span>' +
      '  <span class="grader-row-score">' + score + '/' + max + '</span>' +
      '  <span class="grader-row-detail">' + escapeHtml(detail) + '</span>' +
      '</div>';
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
})();
