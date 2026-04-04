/* =============================================================
   PIKES PEAK WEB DESIGN - MAIN JS
   Modules: Mobile Nav, Mega Menu, FAQ Accordion, Smooth Scroll, Sticky Header
   ============================================================= */

(function () {
  'use strict';


  /* -------- Mobile Nav -------- */
  const hamburger  = document.getElementById('hamburger');
  const mobileNav  = document.getElementById('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on nav link click (but not dropdown toggles)
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* -------- Mobile Dropdown (accordions) -------- */
  document.querySelectorAll('.mobile-dropdown-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      const menu    = toggle.nextElementSibling;
      const isOpen  = toggle.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      if (menu) menu.classList.toggle('open', isOpen);
    });
  });

  /* -------- Desktop Mega Menu - keyboard accessibility -------- */
  document.querySelectorAll('.nav-dropdown').forEach(function (dropdown) {
    const trigger = dropdown.querySelector('a');
    const menu    = dropdown.querySelector('.mega-menu');
    if (!trigger || !menu) return;

    // Toggle on Enter/Space
    trigger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const isOpen = dropdown.classList.toggle('open');
        trigger.setAttribute('aria-expanded', isOpen);
      }
      if (e.key === 'Escape') {
        dropdown.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.focus();
      }
    });

    // Close on Escape from within menu
    menu.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dropdown.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.focus();
      }
    });

    // Close when focus leaves the dropdown
    dropdown.addEventListener('focusout', function (e) {
      if (!dropdown.contains(e.relatedTarget)) {
        dropdown.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close mega menu on Escape anywhere
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-dropdown').forEach(function (d) {
        d.classList.remove('open');
        var t = d.querySelector('a');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
    }
  });

  /* -------- FAQ Accordion -------- */
  document.querySelectorAll('.faq-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const answer   = btn.nextElementSibling;
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      // Close all others
      document.querySelectorAll('.faq-btn').forEach(function (other) {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          const otherAnswer = other.nextElementSibling;
          if (otherAnswer) otherAnswer.classList.remove('open');
        }
      });

      btn.setAttribute('aria-expanded', !expanded);
      if (answer) answer.classList.toggle('open', !expanded);
    });
  });

  /* -------- Sticky header: shadow + hide/reveal on scroll -------- */
  var header = document.querySelector('.header');
  if (header) {
    var lastScrollY = window.scrollY;
    window.addEventListener('scroll', function () {
      var currentY = window.scrollY;
      // Shadow when scrolled down
      header.style.boxShadow = currentY > 20
        ? '0 2px 20px rgba(0,0,0,0.25)'
        : 'none';
      // Hide on scroll down (past 120px), reveal on scroll up
      if (currentY > lastScrollY && currentY > 120) {
        header.classList.add('header--hidden');
      } else {
        header.classList.remove('header--hidden');
      }
      lastScrollY = currentY;
    }, { passive: true });
  }

  /* -------- Smooth scroll for anchor links -------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var offset = 80; // header height
      var top    = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* -------- Contact form — Web3Forms submission -------- */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = document.getElementById('contactSubmit');
      var errorBox = document.getElementById('form-error');

      if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
      if (errorBox) errorBox.style.display = 'none';

      var data = new FormData(contactForm);

      fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
        .then(function (res) { return res.json(); })
        .then(function (json) {
          if (json.success) {
            window.location.href = '/thank-you/';
          } else {
            if (btn) { btn.disabled = false; btn.textContent = 'Send Message \u2014 We\u2019ll Be in Touch'; }
            if (errorBox) errorBox.style.display = 'block';
          }
        })
        .catch(function () {
          if (btn) { btn.disabled = false; btn.textContent = 'Send Message \u2014 We\u2019ll Be in Touch'; }
          if (errorBox) errorBox.style.display = 'block';
        });
    });
  }

}());
