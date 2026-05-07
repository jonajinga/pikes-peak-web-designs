/* Umami rich-event tracking for Pikes Peak Web Designs.
   Loaded on every page. Bails silently if window.umami isn't present
   (script blocked, ad-blocker, etc.) so tracking never breaks the UI.

   Coverage:
   - Conversion goals: CTA clicks, form submits, payment / documenso
     initiations, calendar bookings.
   - Engagement: scroll depth, time-on-page milestones, megamenu opens,
     glossary tooltip opens, search opens + queries, video plays.
   - Funnel signals: demo views, demo nav clicks, samples-page browse,
     comparison-page reads.
   - Retention: returning-visitor flag (localStorage), session ordinal,
     return-after-N-days bucket. */
(function () {
  'use strict';

  // ----- Tracking helper. Bails if Umami isn't loaded. -----
  function track(name, data) {
    try {
      if (window.umami && typeof window.umami.track === 'function') {
        window.umami.track(name, data || {});
      }
    } catch (_) { /* never throw */ }
  }

  // Page categorization — gives every event a `section` so we can group
  // homepage events vs. demo events vs. blog events in dashboards.
  function pageSection() {
    var path = location.pathname;
    if (path.indexOf('/demo/') === 0) return 'demo';
    if (path.indexOf('/blog/') === 0) return 'blog';
    if (path.indexOf('/sop/') === 0) return 'sop';
    if (path.indexOf('/case-studies/') === 0) return 'case-study';
    if (path.indexOf('/vs-') === 0) return 'comparison';
    if (path.indexOf('/samples/') === 0) return 'samples';
    if (path === '/') return 'home';
    if (/^\/(contact|subscribe|onboarding|booking|hourly-request)\//.test(path)) return 'conversion';
    if (/^\/(pricing|how-it-works|process|services)\//.test(path)) return 'product';
    return 'other';
  }
  function demoSlug() {
    var m = location.pathname.match(/^\/demo\/([^/]+)\//);
    return m ? m[1] : null;
  }

  var PAGE_SECTION = pageSection();
  var DEMO_SLUG = demoSlug();

  // ----- Retention: count visits, last-visit timestamp -----
  function bumpRetention() {
    try {
      var KEY_COUNT = 'ppwd:visits';
      var KEY_LAST = 'ppwd:last';
      var KEY_FIRST = 'ppwd:first';
      var now = Date.now();
      var visits = parseInt(localStorage.getItem(KEY_COUNT) || '0', 10) + 1;
      var lastTs = parseInt(localStorage.getItem(KEY_LAST) || '0', 10);
      var firstTs = parseInt(localStorage.getItem(KEY_FIRST) || '0', 10);
      if (!firstTs) {
        firstTs = now;
        localStorage.setItem(KEY_FIRST, String(now));
      }
      localStorage.setItem(KEY_COUNT, String(visits));
      localStorage.setItem(KEY_LAST, String(now));

      // Bucket the gap since last visit so dashboards can build a
      // return-cohort histogram without exporting raw timestamps.
      var bucket = 'first';
      if (lastTs) {
        var hoursSince = (now - lastTs) / 36e5;
        if (hoursSince < 1) bucket = 'within-1h';
        else if (hoursSince < 24) bucket = 'within-24h';
        else if (hoursSince < 24 * 7) bucket = 'within-7d';
        else if (hoursSince < 24 * 30) bucket = 'within-30d';
        else bucket = 'over-30d';
      }
      // Days since first ever visit — a coarse "tenure" metric.
      var tenureDays = lastTs ? Math.floor((now - firstTs) / 86_400_000) : 0;

      track('session_start', {
        section: PAGE_SECTION,
        demo: DEMO_SLUG,
        visit_ordinal: visits,
        return_bucket: bucket,
        tenure_days: tenureDays,
        is_returning: visits > 1,
      });
    } catch (_) { /* localStorage unavailable, skip */ }
  }
  bumpRetention();

  // ----- Scroll depth (25 / 50 / 75 / 100) -----
  var SCROLL_LEVELS = [25, 50, 75, 100];
  var firedDepths = {};
  function onScroll() {
    var doc = document.documentElement;
    var scrollable = (doc.scrollHeight - doc.clientHeight) || 1;
    var pct = Math.round((doc.scrollTop / scrollable) * 100);
    for (var i = 0; i < SCROLL_LEVELS.length; i++) {
      var level = SCROLL_LEVELS[i];
      if (pct >= level && !firedDepths[level]) {
        firedDepths[level] = true;
        track('scroll_depth', {
          depth: level,
          section: PAGE_SECTION,
          demo: DEMO_SLUG,
          path: location.pathname,
        });
      }
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // ----- Time on page (30s / 2min / 5min / 10min) -----
  var TIME_MARKS = [30, 120, 300, 600];
  var firedTimes = {};
  function startTimers() {
    TIME_MARKS.forEach(function (sec) {
      setTimeout(function () {
        if (!firedTimes[sec] && document.visibilityState === 'visible') {
          firedTimes[sec] = true;
          track('time_on_page', {
            seconds: sec,
            section: PAGE_SECTION,
            demo: DEMO_SLUG,
            path: location.pathname,
          });
        }
      }, sec * 1000);
    });
  }
  startTimers();

  // ----- CTA clicks: tag every primary/conversion link -----
  document.addEventListener('click', function (e) {
    var el = e.target.closest('a, button');
    if (!el) return;
    var href = (el.getAttribute('href') || '').toLowerCase();
    var text = (el.textContent || '').trim().toLowerCase();
    var classes = el.className || '';

    // External outbound links (excluding tel: / mailto:)
    if (el.tagName === 'A' && /^https?:\/\//.test(href) && href.indexOf(location.host) === -1) {
      track('outbound_click', {
        url: el.getAttribute('href'),
        text: text.slice(0, 80),
        section: PAGE_SECTION,
      });
    }

    // Phone link
    if (href.indexOf('tel:') === 0) {
      track('phone_click', {
        section: PAGE_SECTION,
        demo: DEMO_SLUG,
        location: el.closest('header') ? 'header' : el.closest('footer') ? 'footer' : 'body',
      });
      return;
    }
    // Email link
    if (href.indexOf('mailto:') === 0) {
      track('email_click', { section: PAGE_SECTION });
      return;
    }

    // Conversion CTAs (matches text + class signals).
    var isStartNow = /\bstart\s*now\b/.test(text);
    var isBookCall = /\b(book|schedule)\b.*\b(call|consultation|discovery)\b/.test(text)
                  || /\bbook a discovery/.test(text);
    var isSubscribe = href.indexOf('/subscribe/') !== -1;
    var isPayment = href.indexOf('buy.stripe.com') !== -1
                  || /\b(pay|checkout|stripe)\b/.test(text);
    var isDocumenso = href.indexOf('app.documenso.com') !== -1
                  || /\b(sign\s*the\s*agreement|sign\s*up)\b/.test(text);
    var isContactForm = href.indexOf('/contact/') !== -1;
    var isAudit = href.indexOf('/audit/') !== -1
                  || /\b(free\s*audit|run\s*the\s*grader)\b/.test(text);

    if (isPayment) {
      track('payment_initiated', { section: PAGE_SECTION, text: text.slice(0, 80) });
    } else if (isDocumenso) {
      track('documenso_initiated', { section: PAGE_SECTION, text: text.slice(0, 80) });
    } else if (isStartNow || isSubscribe) {
      track('cta_start_now', { section: PAGE_SECTION, demo: DEMO_SLUG, text: text.slice(0, 80) });
    } else if (isBookCall) {
      track('cta_book_call', { section: PAGE_SECTION, demo: DEMO_SLUG, text: text.slice(0, 80) });
    } else if (isAudit) {
      track('cta_audit', { section: PAGE_SECTION, text: text.slice(0, 80) });
    } else if (isContactForm) {
      track('cta_contact', { section: PAGE_SECTION, demo: DEMO_SLUG, text: text.slice(0, 80) });
    }

    // Demo entry from samples / walk-through / case-studies.
    if (/^\/demo\/([^/]+)\//.test(href)) {
      var slug = href.match(/^\/demo\/([^/]+)\//)[1];
      track('demo_open', {
        from: PAGE_SECTION,
        demo: slug,
        text: text.slice(0, 80),
      });
    }

    // Megamenu trigger click (hover-open vs. click-open).
    if (el.closest('.demo-mega-dropdown, .nav-dropdown')) {
      track('megamenu_click', {
        section: PAGE_SECTION,
        demo: DEMO_SLUG,
        text: text.slice(0, 60),
      });
    }
  }, { capture: true });

  // ----- Form interactions -----
  // First focus inside any form = "form_start". Submit = "form_submit".
  // Tracks form name from <form name> or aria-label or first heading near it.
  function formName(form) {
    return form.getAttribute('name')
        || form.getAttribute('aria-label')
        || form.dataset.umamiForm
        || (form.id || '').replace(/-/g, ' ')
        || 'unnamed';
  }
  var formStarted = new WeakSet();
  document.addEventListener('focusin', function (e) {
    var input = e.target;
    if (!(input.matches && input.matches('input, textarea, select'))) return;
    var form = input.closest('form');
    if (!form || formStarted.has(form)) return;
    formStarted.add(form);
    track('form_start', {
      form: formName(form),
      section: PAGE_SECTION,
      demo: DEMO_SLUG,
    });
  });
  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form || form.tagName !== 'FORM') return;
    track('form_submit', {
      form: formName(form),
      section: PAGE_SECTION,
      demo: DEMO_SLUG,
    });
  }, { capture: true });

  // ----- Search (custom Pagefind UI) -----
  document.addEventListener('input', function (e) {
    if (!e.target.matches || !e.target.matches('.ppwd-search-input, input[type="search"]')) return;
    var q = (e.target.value || '').trim();
    if (q.length < 3) return;
    // Debounce per input session — only fire once per query string.
    if (e.target._lastTracked === q) return;
    e.target._lastTracked = q;
    track('search_query', { q: q.slice(0, 80), section: PAGE_SECTION });
  });

  // ----- Glossary tooltip opens (term hover or click) -----
  document.addEventListener('click', function (e) {
    var term = e.target.closest('.term, [data-term]');
    if (!term) return;
    track('glossary_open', {
      term: (term.textContent || '').trim().slice(0, 60),
      section: PAGE_SECTION,
    });
  });

  // ----- Video plays (HTML5 video + YouTube iframes) -----
  document.addEventListener('play', function (e) {
    if (e.target && e.target.tagName === 'VIDEO') {
      track('video_play', {
        src: (e.target.currentSrc || '').slice(0, 120),
        section: PAGE_SECTION,
      });
    }
  }, { capture: true });

  // ----- Print intent (pre-print event fires before the dialog) -----
  window.addEventListener('beforeprint', function () {
    track('print_intent', { section: PAGE_SECTION, path: location.pathname });
  });

  // ----- Tab visibility: counts how many people leave & come back -----
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      track('tab_hidden', { section: PAGE_SECTION });
    }
  });

  // ----- Engagement signal at unload: did the user actually engage? -----
  // "engaged_session" = scrolled past 25% OR stayed >=30s OR clicked something
  // OR submitted/started a form. Combined with session_start, this gives a
  // bounce-vs-engaged ratio per section without third-party heatmaps.
  var didClick = false;
  document.addEventListener('click', function () { didClick = true; }, { capture: true });
  window.addEventListener('pagehide', function () {
    var engaged = !!(firedDepths[25] || firedTimes[30] || didClick || formStarted);
    track('session_end', {
      section: PAGE_SECTION,
      demo: DEMO_SLUG,
      engaged: engaged,
      max_depth: firedDepths[100] ? 100 : firedDepths[75] ? 75 : firedDepths[50] ? 50 : firedDepths[25] ? 25 : 0,
    });
  });
})();
