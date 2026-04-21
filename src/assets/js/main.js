/* =============================================================
   PIKES PEAK WEB DESIGNS; MAIN JS
   ============================================================= */

(function () {
  'use strict';

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* -------- Theme toggle -------- */
  const THEME_KEY = 'pp-theme';
  const setTheme = (t) => {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
  };
  const toggleTheme = () => {
    const cur = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(cur === 'dark' ? 'light' : 'dark');
  };
  $$('#themeToggle, #themeToggleMobile, .theme-toggle, .mobile-theme-toggle').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
  // Respect system change if user hasn't set a preference
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (!saved && matchMedia) {
      matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(THEME_KEY)) setTheme(e.matches ? 'dark' : 'light');
      });
    }
  } catch (e) {}

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

  /* -------- Tippy.js glossary tooltips -------- */
  const initTippy = () => {
    if (typeof tippy === 'undefined') return;
    tippy('[data-term]', {
      content(ref) { return ref.getAttribute('data-term'); },
      theme: 'pikes',
      placement: 'top',
      allowHTML: false,
      maxWidth: 280,
      delay: [120, 80],
      touch: ['hold', 250],
    });
  };
  // Tippy loads with defer, so wait a tick
  if (document.readyState === 'complete') initTippy();
  else window.addEventListener('load', initTippy);

  /* -------- Pagefind search (lazy-loaded classic script) -------- */
  let pagefindLoaded = false;
  let pagefindLoading = null;
  const loadPagefind = () => {
    if (pagefindLoaded) return Promise.resolve();
    if (pagefindLoading) return pagefindLoading;
    pagefindLoading = new Promise((resolve, reject) => {
      if (window.PagefindUI) { pagefindLoaded = true; return resolve(); }
      const s = document.createElement('script');
      s.src = '/pagefind/pagefind-ui.js';
      s.onload = () => {
        pagefindLoaded = true;
        try {
          new window.PagefindUI({
            element: '#pagefind-search',
            showSubResults: true,
            resetStyles: false,
            showImages: false,
            placeholder: 'Search articles, pages, and service areas...',
          });
        } catch (e) { console.warn('PagefindUI init failed:', e); }
        resolve();
      };
      s.onerror = () => reject(new Error('pagefind script failed to load'));
      document.head.appendChild(s);
    });
    return pagefindLoading;
  };

  // Initialize on any page that has an inline #pagefind-search container (e.g. /sitemap/)
  if ($('#pagefind-search:not(.search-modal #pagefind-search)')) {
    loadPagefind().catch(() => {
      const c = $('#pagefind-search');
      if (c) c.innerHTML = '<p style="color:var(--text-muted);font-size:0.9rem">Search isn\'t available yet. Try the <a href="/sitemap/" class="inline-link">site map</a> or <a href="/blog/" class="inline-link">blog index</a>.</p>';
    });
  }

  /* -------- Search modal -------- */
  const searchModal = $('#searchModal');
  const openSearch = () => {
    if (!searchModal) return;
    searchModal.hidden = false;
    document.body.style.overflow = 'hidden';
    closeMobileNav();
    loadPagefind().then(() => {
      const input = searchModal.querySelector('input[type="search"], input[type="text"]');
      if (input) setTimeout(() => input.focus(), 50);
    }).catch(() => {
      const c = searchModal.querySelector('#pagefind-search');
      if (c) c.innerHTML = '<p style="color:var(--text-muted);font-size:0.9rem;padding:1rem">Search isn\'t available yet. Try the <a href="/sitemap/" class="inline-link">site map</a>.</p>';
    });
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
    // Keyboard shortcut: / opens search (ignore when typing in inputs)
    if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      openSearch();
    }
  });

}());
