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
    document.documentElement.setAttribute('data-theme', resolved);
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

  /* -------- Tippy.js glossary tooltips --------
     trigger covers hover (desktop), keyboard focus, and click (mobile
     tap + a11y). touch: true means a single tap on a term shows the
     tooltip; tapping outside hides it. The previous touch: ['hold',
     250] required a long-press, which felt broken on phones. */
  const initTippy = () => {
    if (typeof tippy === 'undefined') return;
    tippy('[data-term]', {
      content(ref) { return ref.getAttribute('data-term'); },
      theme: 'pikes',
      placement: 'top',
      allowHTML: false,
      maxWidth: 280,
      delay: [120, 80],
      touch: true,
      trigger: 'mouseenter focus click',
      hideOnClick: true,
      interactive: false,
    });
  };
  // Tippy loads with defer, so wait a tick
  if (document.readyState === 'complete') initTippy();
  else window.addEventListener('load', initTippy);

  /* -------- Pagefind search (lazy-loaded, supports multiple mount points) -------- */
  let pagefindScriptPromise = null;
  const mountedSearchElements = new WeakSet();

  const loadPagefindScript = () => {
    if (window.PagefindUI) return Promise.resolve();
    if (pagefindScriptPromise) return pagefindScriptPromise;
    pagefindScriptPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = '/pagefind/pagefind-ui.js';
      s.onload = () => resolve();
      s.onerror = () => reject(new Error('pagefind script failed to load'));
      document.head.appendChild(s);
    });
    return pagefindScriptPromise;
  };

  const mountPagefind = (selectorOrElement, options = {}) => {
    return loadPagefindScript().then(() => {
      const el = typeof selectorOrElement === 'string'
        ? document.querySelector(selectorOrElement)
        : selectorOrElement;
      if (!el || mountedSearchElements.has(el) || !window.PagefindUI) return;
      try {
        new window.PagefindUI(Object.assign({
          element: el,
          showSubResults: true,
          resetStyles: false,
          showImages: false,
          placeholder: 'Search articles, pages, and service areas...',
        }, options));
        mountedSearchElements.add(el);
      } catch (e) { console.warn('PagefindUI init failed:', e); }
    });
  };

  // Mount immediately on any inline #pagefind-search container (e.g. /search/ page)
  $$('#pagefind-search').forEach(el => {
    // Skip the one inside the modal (lazy-loaded on modal open)
    if (el.closest('.search-modal')) return;
    mountPagefind(el).catch(() => {
      el.innerHTML = '<p style="color:var(--text-muted);font-size:0.9rem">Search isn\'t available yet. Try the <a href="/sitemap/" class="inline-link">site map</a>.</p>';
    });
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
      mountPagefind(modalContainer, { placeholder: 'Search the site...' })
        .then(() => {
          const input = searchModal.querySelector('input[type="search"], input[type="text"]');
          if (input) setTimeout(() => input.focus(), 50);
        })
        .catch(() => {
          modalContainer.innerHTML = '<p style="color:var(--text-muted);font-size:0.9rem;padding:1rem">Search isn\'t available yet. Try the <a href="/sitemap/" class="inline-link">site map</a>.</p>';
        });
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
      mountPagefind(mobileSearchEl, { placeholder: 'Search the site...' }).catch(() => {
        mobileSearchEl.innerHTML = '<p style="color:var(--text-muted);font-size:0.88rem;padding:0.5rem 0">Search is offline. Try the <a href="/sitemap/" class="inline-link">site map</a>.</p>';
      });
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
