/* =============================================================
   PIKES PEAK WEB DESIGNS; MAIN JS
   ============================================================= */

(function () {
  'use strict';

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* -------- Theme system (Light / Auto / Dark) -------- */
  const THEME_KEY = 'pp-theme';
  const systemPrefersDark = () =>
    typeof matchMedia !== 'undefined' && matchMedia('(prefers-color-scheme: dark)').matches;
  const applyTheme = (mode) => {
    const resolved = mode === 'system' ? (systemPrefersDark() ? 'dark' : 'light') : mode;
    const root = document.documentElement;
    root.setAttribute('data-theme', resolved);
    // Keep the inline color-scheme + background in sync with the no-flash
    // bootstrap script in base.njk. Without this, toggling the theme
    // wouldn't update the inline html background that the bootstrap sets
    // to prevent the white flash on first paint, so the page would stay
    // the wrong color until the next full reload.
    root.style.colorScheme = resolved;
    root.style.background = resolved === 'dark' ? '#071125' : '#FFFFFF';
  };
  const getStoredTheme = () => {
    try { return localStorage.getItem(THEME_KEY) || 'system'; } catch (e) { return 'system'; }
  };
  const setStoredTheme = (mode) => {
    try {
      if (mode === 'system') localStorage.removeItem(THEME_KEY);
      else localStorage.setItem(THEME_KEY, mode);
    } catch (e) {}
  };
  const updateThemeControls = () => {
    const active = getStoredTheme();
    $$('.theme-switch-btn').forEach(btn => {
      const isActive = btn.dataset.themeSet === active;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  };

  // Segmented control buttons (Light / Auto / Dark)
  $$('.theme-switch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.themeSet;
      setStoredTheme(mode);
      applyTheme(mode);
      updateThemeControls();
    });
  });

  // Header icon toggles (Light <-> Dark only)
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    setStoredTheme(next);
    applyTheme(next);
    updateThemeControls();
  };
  $$('#themeToggle, .theme-toggle:not(.theme-switch-btn)').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  // React to system theme changes while on "auto"
  try {
    if (typeof matchMedia !== 'undefined') {
      matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (getStoredTheme() === 'system') applyTheme('system');
      });
    }
  } catch (e) {}

  // Initial sync for segmented control
  updateThemeControls();

  /* -------- Mobile Nav -------- */
  const hamburger = $('#hamburger');
  const mobileNav = $('#mobileNav');
  const backdrop  = $('#mobileBackdrop') || $('.mobile-backdrop');

  const openMobileNav = () => {
    if (!mobileNav) return;
    mobileNav.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    if (hamburger) {
      hamburger.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';
  };

  const closeMobileNav = () => {
    if (!mobileNav) return;
    mobileNav.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    if (hamburger) {
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
    // Collapse any open dropdowns so the panel is in a clean state next time
    $$('.mobile-dropdown-toggle.open').forEach(btn => {
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      if (btn.nextElementSibling) btn.nextElementSibling.classList.remove('open');
    });
    document.body.style.overflow = '';
  };

  const toggleMobileNav = () => {
    if (!mobileNav) return;
    mobileNav.classList.contains('open') ? closeMobileNav() : openMobileNav();
  };

  if (hamburger) hamburger.addEventListener('click', toggleMobileNav);
  if (backdrop) backdrop.addEventListener('click', closeMobileNav);
  const mobileNavClose = $('#mobileNavClose');
  if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileNav);
  if (mobileNav) {
    // Close when a nav link is tapped (but not a dropdown toggle or theme toggle)
    mobileNav.querySelectorAll('a').forEach(link =>
      link.addEventListener('click', closeMobileNav)
    );
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMobileNav();
    });
  }

  /* -------- Mobile nav dropdowns -------- */
  $$('.mobile-dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const menu = btn.nextElementSibling;
      const opening = !btn.classList.contains('open');
      btn.classList.toggle('open', opening);
      btn.setAttribute('aria-expanded', String(opening));
      if (menu) menu.classList.toggle('open', opening);
    });
  });

  /* -------- Desktop dropdowns; keyboard -------- */
  $$('.nav-dropdown').forEach(dropdown => {
    const trigger = dropdown.querySelector(':scope > a');
    if (!trigger) return;
    trigger.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        dropdown.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.focus();
      }
    });
    dropdown.addEventListener('focusout', e => {
      if (!dropdown.contains(e.relatedTarget)) {
        dropdown.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* -------- FAQ Accordion -------- */
  $$('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer   = btn.nextElementSibling;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      $$('.faq-btn').forEach(other => {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          const a = other.nextElementSibling;
          if (a) a.classList.remove('open');
        }
      });
      btn.setAttribute('aria-expanded', !expanded);
      if (answer) answer.classList.toggle('open', !expanded);
    });
  });

  /* -------- Sticky Header -------- */
  const header = $('.header');
  if (header) {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      header.classList.toggle('header--scrolled', y > 20);
      if (y > 200 && y > lastY + 4) {
        header.classList.add('header--hidden');
      } else if (y < lastY - 4) {
        header.classList.remove('header--hidden');
      }
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* -------- Back to Top -------- */
  const backToTop = $('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });
  }

  /* -------- Glossary A-Z floater (mobile) --------
     Reveal the fixed-position A-Z rail only after the user scrolls past
     the hero region. Prevents it from covering the hero copy on load. */
  const glossaryIndex = $('.glossary-index');
  if (glossaryIndex) {
    const reveal = () => {
      glossaryIndex.classList.toggle('is-revealed', window.scrollY > 220);
    };
    reveal();
    window.addEventListener('scroll', reveal, { passive: true });
  }

  /* -------- Smooth scroll -------- */
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 88;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* -------- Web3Forms handler (contact + onboarding) -------- */
  $$('form[data-web3forms]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const errorBox = form.querySelector('.form-error');
      const origLabel = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      if (errorBox) errorBox.style.display = 'none';

      const data = new FormData(form);
      fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
        .then(r => r.json())
        .then(json => {
          if (json.success) {
            const redirect = form.dataset.redirect || '/thank-you/';
            window.location.href = redirect;
          } else {
            if (btn) { btn.disabled = false; btn.textContent = origLabel; }
            if (errorBox) errorBox.style.display = 'block';
          }
        })
        .catch(() => {
          if (btn) { btn.disabled = false; btn.textContent = origLabel; }
          if (errorBox) errorBox.style.display = 'block';
        });
    });
  });

  /* -------- Tippy.js glossary + helper tooltips --------
     Three opt-ins, all using the same theme/behavior:
       [data-term="..."]    - inline term with definition (canonical pattern)
       [data-tooltip="..."] - any element that wants a small explainer
       a[href*="/glossary/#"] - any glossary anchor link auto-gets a "View
                                full definition" hint, so authors can write
                                a normal anchor link and still get a tooltip.
     trigger covers hover (desktop), keyboard focus, and click (mobile
     tap + a11y). touch: true means a single tap on a term shows the
     tooltip; tapping outside hides it. */
  const initTippy = () => {
    if (typeof tippy === 'undefined') return;
    const baseConfig = {
      theme: 'pikes',
      placement: 'top',
      allowHTML: false,
      maxWidth: 280,
      delay: [120, 80],
      touch: true,
      trigger: 'mouseenter focus click',
      hideOnClick: true,
      interactive: false,
    };
    tippy('[data-term]', Object.assign({}, baseConfig, {
      content(ref) { return ref.getAttribute('data-term'); },
    }));
    tippy('[data-tooltip]', Object.assign({}, baseConfig, {
      content(ref) { return ref.getAttribute('data-tooltip'); },
    }));
    // Glossary anchor links: skip if already given a data-term (avoids
    // double-tooltipping) and skip the in-glossary index links.
    const glossaryLinks = document.querySelectorAll('a[href*="/glossary/#"]');
    const candidates = [];
    glossaryLinks.forEach((el) => {
      if (el.hasAttribute('data-term') || el.hasAttribute('data-tooltip')) return;
      if (el.classList.contains('glossary-letter')) return;
      candidates.push(el);
    });
    if (candidates.length) {
      tippy(candidates, Object.assign({}, baseConfig, {
        content: 'View the full definition in the glossary.',
        placement: 'top',
      }));
    }
  };
  // Tippy loads with defer, so wait a tick
  if (document.readyState === 'complete') initTippy();
  else window.addEventListener('load', initTippy);

  /* -------- Pagefind search — custom headless UI (lazy-loaded) -------- */
  let pagefindModulePromise = null;
  const mountedSearchElements = new WeakSet();

  const loadPagefind = () => {
    if (pagefindModulePromise) return pagefindModulePromise;
    pagefindModulePromise = import('/pagefind/pagefind.js')
      .then(async (mod) => {
        if (typeof mod.options === 'function') {
          await mod.options({ excerptLength: 30 });
        }
        return mod;
      });
    return pagefindModulePromise;
  };

  // Type detection from URL — drives the badge color and filter group.
  const TYPE_DEFS = [
    { key: 'blog',       label: 'Blog',         test: (u) => /^\/blog\//.test(u) && u !== '/blog/' },
    { key: 'faq',        label: 'FAQ',          test: (u) => /^\/faq(\/|$)/.test(u) },
    { key: 'glossary',   label: 'Glossary',     test: (u) => /^\/glossary(\/|$)/.test(u) },
    { key: 'sop',        label: 'SOP',          test: (u) => /^\/sop\//.test(u) },
    { key: 'area',       label: 'Service area', test: (u) => /^\/(service-areas|areas)\//.test(u) },
    { key: 'demo',       label: 'Demo site',    test: (u) => /^\/demo\//.test(u) },
    { key: 'comparison', label: 'Comparison',   test: (u) => /^\/vs-/.test(u) || /-vs-/.test(u) },
    { key: 'case',       label: 'Case study',   test: (u) => /^\/case-studies\//.test(u) },
    { key: 'podcast',    label: 'Podcast',      test: (u) => /^\/podcast\//.test(u) },
    { key: 'changelog',  label: 'Changelog',    test: (u) => /^\/changelog/.test(u) },
    { key: 'method',     label: 'Method',       test: (u) => /^\/(method|technical-approach|how-it-works)/.test(u) },
    { key: 'pricing',    label: 'Pricing',      test: (u) => /^\/(pricing|hourly|rebuild|audit|grader|calm-site-audit)/.test(u) },
  ];
  const detectType = (url) => {
    for (const t of TYPE_DEFS) if (t.test(url)) return t;
    return { key: 'page', label: 'Page' };
  };

  // Pretty breadcrumb from URL — turns "/blog/posts/foo-bar/" → "Blog › Posts › Foo bar".
  const breadcrumbFromUrl = (url) => {
    const segs = url.replace(/^\/|\/$/g, '').split('/').filter(Boolean);
    if (!segs.length) return 'Home';
    return segs.slice(0, -1)
      .map(s => s.replace(/[-_]/g, ' '))
      .map(s => s.charAt(0).toUpperCase() + s.slice(1))
      .join(' › ') || 'Home';
  };

  const escapeHtml = (str) => String(str).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  // Strip Pagefind's wrapping tags + clean meta title.
  const cleanTitle = (raw) => {
    if (!raw) return '';
    return String(raw).replace(/\s*\|\s*Pikes Peak Web Designs.*$/i, '').trim();
  };

  const renderResultCard = (data, idx) => {
    const url = data.url || '#';
    const type = detectType(url);
    const title = cleanTitle(data.meta && data.meta.title) || data.url;
    const excerpt = data.excerpt || '';
    const crumb = breadcrumbFromUrl(url);
    return (
      '<a class="ppwd-result" href="' + escapeHtml(url) + '" role="option" data-type="' + type.key + '" data-idx="' + idx + '">' +
        '<span class="ppwd-result-type ppwd-result-type--' + type.key + '">' + type.label + '</span>' +
        '<h3 class="ppwd-result-title">' + escapeHtml(title) + '</h3>' +
        '<p class="ppwd-result-excerpt">' + excerpt + '</p>' +
        '<span class="ppwd-result-crumb">' + escapeHtml(crumb) + '</span>' +
        '<svg class="ppwd-result-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
      '</a>'
    );
  };

  const mountPagefind = (selectorOrElement, options = {}) => {
    const el = typeof selectorOrElement === 'string'
      ? document.querySelector(selectorOrElement)
      : selectorOrElement;
    if (!el || mountedSearchElements.has(el)) return Promise.resolve();
    mountedSearchElements.add(el);

    const placeholder = options.placeholder || 'Search the site...';
    const compact = !!options.compact;

    el.classList.add('ppwd-search');
    if (compact) el.classList.add('ppwd-search--compact');
    const inModal = !!el.closest('.search-modal');
    const onSearchPage = window.location.pathname.replace(/\/+$/, '') === '/search';
    el.innerHTML = (
      '<div class="ppwd-search-inputwrap">' +
        '<svg class="ppwd-search-inputicon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' +
        '<input type="search" class="ppwd-search-input" placeholder="' + escapeHtml(placeholder) + '" aria-label="Search the site" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' +
        '<button type="button" class="ppwd-search-clear" aria-label="Clear search" hidden>' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
        '</button>' +
      '</div>' +
      '<div class="ppwd-search-status" data-status aria-live="polite"></div>' +
      '<div class="ppwd-search-filters" data-filters role="tablist" aria-label="Filter by section" hidden></div>' +
      '<div class="ppwd-search-results" data-results role="listbox" aria-label="Search results"></div>' +
      '<div class="ppwd-search-empty" data-empty hidden>' +
        '<strong>No matches.</strong>' +
        '<span>Try fewer or different words, or browse the <a href="/sitemap/" class="inline-link">site map</a>.</span>' +
      '</div>' +
      (!onSearchPage
        ? '<a class="ppwd-search-allresults" data-allresults href="/search/" hidden>' +
            '<span data-allresults-text>See all matches on the search page</span>' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
          '</a>'
        : '')
    );

    const input = el.querySelector('.ppwd-search-input');
    const clearBtn = el.querySelector('.ppwd-search-clear');
    const statusEl = el.querySelector('[data-status]');
    const filtersEl = el.querySelector('[data-filters]');
    const resultsEl = el.querySelector('[data-results]');
    const emptyEl = el.querySelector('[data-empty]');
    const allResultsEl = el.querySelector('[data-allresults]');
    const allResultsTextEl = el.querySelector('[data-allresults-text]');

    let activeFilter = 'all';
    let currentResults = [];      // [{ data, type }]
    let activeIdx = -1;
    let searchToken = 0;
    let pagefindReady = null;

    const setActive = (idx) => {
      const cards = resultsEl.querySelectorAll('.ppwd-result:not([hidden])');
      cards.forEach(c => c.classList.remove('is-active'));
      if (idx < 0 || idx >= cards.length) { activeIdx = -1; return; }
      activeIdx = idx;
      cards[idx].classList.add('is-active');
      cards[idx].scrollIntoView({ block: 'nearest' });
    };

    const renderFilters = () => {
      const counts = { all: currentResults.length };
      currentResults.forEach(r => { counts[r.type.key] = (counts[r.type.key] || 0) + 1; });
      const types = TYPE_DEFS.filter(t => counts[t.key] > 0);
      if (!types.length) { filtersEl.hidden = true; filtersEl.innerHTML = ''; return; }
      filtersEl.hidden = false;
      const buttons = [{ key: 'all', label: 'All' }].concat(types.map(t => ({ key: t.key, label: t.label })));
      filtersEl.innerHTML = buttons.map(b =>
        '<button type="button" class="ppwd-filter' + (b.key === activeFilter ? ' is-active' : '') +
        '" data-filter="' + b.key + '" role="tab" aria-selected="' + (b.key === activeFilter) + '">' +
          escapeHtml(b.label) +
          '<span class="ppwd-filter-count">' + counts[b.key] + '</span>' +
        '</button>'
      ).join('');
    };

    const applyFilter = () => {
      const cards = resultsEl.querySelectorAll('.ppwd-result');
      let visible = 0;
      cards.forEach(c => {
        const match = activeFilter === 'all' || c.dataset.type === activeFilter;
        c.hidden = !match;
        if (match) visible++;
      });
      activeIdx = -1;
      cards.forEach(c => c.classList.remove('is-active'));
      emptyEl.hidden = visible !== 0 || !currentResults.length;
      if (currentResults.length && !visible) {
        emptyEl.hidden = false;
        emptyEl.querySelector('strong').textContent = 'No results in that section.';
      } else if (!currentResults.length) {
        emptyEl.querySelector('strong').textContent = 'No matches.';
      }
    };

    filtersEl.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-filter]');
      if (!btn) return;
      activeFilter = btn.dataset.filter;
      filtersEl.querySelectorAll('[data-filter]').forEach(b => {
        const on = b.dataset.filter === activeFilter;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-selected', on);
      });
      applyFilter();
    });

    const reset = () => {
      currentResults = [];
      resultsEl.innerHTML = '';
      filtersEl.hidden = true; filtersEl.innerHTML = '';
      emptyEl.hidden = true;
      statusEl.textContent = '';
      activeFilter = 'all';
      activeIdx = -1;
      if (allResultsEl) allResultsEl.hidden = true;
    };

    const runSearch = async (query) => {
      const q = (query || '').trim();
      clearBtn.hidden = !q.length;
      const myToken = ++searchToken;
      if (q.length < 2) { reset(); return; }
      statusEl.textContent = 'Searching...';
      try {
        const pf = await (pagefindReady = pagefindReady || loadPagefind());
        if (myToken !== searchToken) return;
        const search = await pf.search(q);
        if (myToken !== searchToken) return;
        const top = search.results.slice(0, 30);
        const datas = await Promise.all(top.map(r => r.data()));
        if (myToken !== searchToken) return;

        currentResults = datas.map(d => ({ data: d, type: detectType(d.url || '') }));
        if (!currentResults.length) {
          resultsEl.innerHTML = '';
          filtersEl.hidden = true; filtersEl.innerHTML = '';
          emptyEl.hidden = false;
          emptyEl.querySelector('strong').textContent = 'No matches.';
          statusEl.textContent = '0 results for "' + q + '"';
          if (allResultsEl) allResultsEl.hidden = true;
          return;
        }
        const html = currentResults.map((r, i) => renderResultCard(r.data, i)).join('');
        resultsEl.innerHTML = html;
        renderFilters();
        applyFilter();
        const total = search.results.length;
        const showing = currentResults.length;
        statusEl.textContent = total > showing
          ? 'Showing top ' + showing + ' of ' + total + ' results for "' + q + '"'
          : showing + ' result' + (showing === 1 ? '' : 's') + ' for "' + q + '"';
        if (allResultsEl) {
          allResultsEl.hidden = false;
          allResultsEl.href = '/search/?q=' + encodeURIComponent(q);
          if (allResultsTextEl) {
            allResultsTextEl.textContent = total > showing
              ? 'See all ' + total + ' matches on the search page'
              : 'Open these results on the search page';
          }
        }
      } catch (err) {
        console.warn('Search failed:', err);
        statusEl.textContent = '';
        resultsEl.innerHTML = '';
        emptyEl.hidden = false;
        emptyEl.querySelector('strong').textContent = 'Search is offline.';
        if (allResultsEl) allResultsEl.hidden = true;
      }
    };

    let debounceTimer = null;
    input.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      const v = input.value;
      debounceTimer = setTimeout(() => runSearch(v), 140);
    });
    clearBtn.addEventListener('click', () => {
      input.value = '';
      input.focus();
      reset();
      clearBtn.hidden = true;
    });

    // Keyboard navigation: arrows move highlight, Enter opens active.
    input.addEventListener('keydown', (e) => {
      const visibleCards = resultsEl.querySelectorAll('.ppwd-result:not([hidden])');
      if (e.key === 'ArrowDown') {
        if (!visibleCards.length) return;
        e.preventDefault();
        setActive(Math.min(activeIdx + 1, visibleCards.length - 1));
      } else if (e.key === 'ArrowUp') {
        if (!visibleCards.length) return;
        e.preventDefault();
        setActive(Math.max(activeIdx - 1, 0));
      } else if (e.key === 'Enter') {
        if (activeIdx >= 0 && visibleCards[activeIdx]) {
          e.preventDefault();
          window.location.href = visibleCards[activeIdx].href;
        }
      }
    });

    if (options.autoFocus) setTimeout(() => input.focus(), 50);
    return Promise.resolve({ input, runSearch, focus: () => input.focus() });
  };

  // Expose a small helper so /search/ page chip prefill can drive the input.
  window.__ppwdSearchPrefill = (q) => {
    const inputs = $$('.ppwd-search-input');
    if (!inputs.length) return;
    const target = inputs[inputs.length - 1];
    target.value = q;
    target.dispatchEvent(new Event('input', { bubbles: true }));
    target.focus();
    const rect = target.getBoundingClientRect();
    if (rect.top < 0 || rect.top > window.innerHeight) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Mount immediately on any inline #pagefind-search container (e.g. /search/ page)
  $$('#pagefind-search').forEach(el => {
    if (el.closest('.search-modal')) return;
    mountPagefind(el, { autoFocus: window.matchMedia('(min-width: 720px)').matches && !location.hash });
    // Seed from ?q= on the /search/ page so the modal's "see all" link works.
    try {
      const params = new URLSearchParams(window.location.search);
      const seeded = params.get('q');
      if (seeded) {
        const input = el.querySelector('.ppwd-search-input');
        if (input) {
          input.value = seeded;
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }
    } catch (e) { /* ignore */ }
  });

  /* -------- Search modal -------- */
  const searchModal = $('#searchModal');
  const openSearch = () => {
    if (!searchModal) return;
    searchModal.hidden = false;
    document.body.style.overflow = 'hidden';
    closeMobileNav();
    const modalContainer = searchModal.querySelector('#pagefind-search');
    if (modalContainer) {
      mountPagefind(modalContainer, { placeholder: 'Search the site...', autoFocus: true });
      // For an already-mounted modal, just re-focus the input on reopen.
      const input = modalContainer.querySelector('.ppwd-search-input');
      if (input) setTimeout(() => input.focus(), 50);
    }
  };
  const closeSearch = () => {
    if (!searchModal) return;
    searchModal.hidden = true;
    document.body.style.overflow = '';
  };
  $$('[data-open-search]').forEach(btn => btn.addEventListener('click', openSearch));
  $$('[data-close-search]').forEach(btn => btn.addEventListener('click', closeSearch));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && searchModal && !searchModal.hidden) closeSearch();
    if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      openSearch();
    }
  });

  /* -------- Inline mobile-nav search -------- */
  const mobileSearchEl = $('#mobileSearch');
  if (mobileSearchEl) {
    // Mount on first open so Pagefind only loads when the user actually reaches for search
    const hamburgerEl = $('#hamburger');
    const mountOnce = () => {
      mountPagefind(mobileSearchEl, { placeholder: 'Search the site...', compact: true });
    };
    if (hamburgerEl) {
      hamburgerEl.addEventListener('click', mountOnce, { once: true });
    }
  }

  /* -------- Sticky TOC active-section highlighting --------
     Pages using .toc-layout (owners-guide, technical-approach,
     what-we-build) get an active link highlight as the user
     scrolls past each H2 anchor. Progressive enhancement only. */
  const tocList = $('.toc-list');
  if (tocList && 'IntersectionObserver' in window) {
    const tocLinks = $$('a[href^="#"]', tocList);
    const idMap = new Map();
    tocLinks.forEach(link => {
      const id = link.getAttribute('href').slice(1);
      const target = id ? document.getElementById(id) : null;
      if (target) idMap.set(target, link);
    });
    if (idMap.size) {
      let activeLink = null;
      const setActive = (link) => {
        if (activeLink === link) return;
        if (activeLink) activeLink.classList.remove('is-active');
        if (link) link.classList.add('is-active');
        activeLink = link;
      };
      const visible = new Set();
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        });
        if (!visible.size) return;
        const sorted = Array.from(visible).sort(
          (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top
        );
        setActive(idMap.get(sorted[0]));
      }, { rootMargin: '-80px 0px -60% 0px', threshold: 0 });
      idMap.forEach((_link, target) => observer.observe(target));
    }
  }

}());
