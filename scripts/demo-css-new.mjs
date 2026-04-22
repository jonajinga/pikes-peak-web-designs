#!/usr/bin/env node
// Replace the legacy demo CSS block in style.css with a completely new
// Redcap Roofing identity (Oswald + IBM Plex Sans, construction-yellow
// safety accent, diagonal roofline dividers, industrial card treatment).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cssPath = path.resolve(__dirname, '..', 'src', 'assets', 'css', 'style.css');
const src = fs.readFileSync(cssPath, 'utf8');

const startMarker = '/* =============================================================\n   DEMO SITE — REDCAP ROOFING';
const endMarker = '/* =============================================================\n   MOBILE-FIRST OPTIMIZATIONS';
const start = src.indexOf(startMarker);
const end = src.indexOf(endMarker);
if (start === -1 || end === -1) {
  console.error('markers not found');
  process.exit(1);
}

const NEW_CSS = `/* =============================================================
   DEMO SITE — REDCAP ROOFING
   Completely distinct aesthetic (Oswald + IBM Plex Sans, construction-
   yellow safety accent, diagonal roofline dividers, industrial card
   treatment). Scoped under .demo-site, owes nothing to Pikes Peak.
   ============================================================= */

.demo-site {
  /* Palette — fire engine red, industrial black, safety yellow, warm cream */
  --rc-black: #0F131D;
  --rc-black-2: #1A202D;
  --rc-red: #DC2626;
  --rc-red-dark: #991B1B;
  --rc-red-mid: #B91C1C;
  --rc-safety: #F7D046;
  --rc-safety-dark: #D9B229;
  --rc-cream: #F7F5F0;
  --rc-cream-warm: #EDE8DC;
  --rc-line: #E5E0D5;
  --rc-line-dark: #2B3140;
  --rc-text: #14171F;
  --rc-text-muted: #4E5460;
  --rc-text-dim: #6B7180;

  font-family: 'IBM Plex Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--rc-cream);
  color: var(--rc-text);
  font-size: 1rem;
  line-height: 1.55;
  letter-spacing: 0.005em;
}

.demo-site h1, .demo-site h2, .demo-site h3, .demo-site h4, .demo-site h5 {
  font-family: 'Oswald', 'Bebas Neue', 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  letter-spacing: -0.005em;
  line-height: 1.1;
  color: var(--rc-black);
  text-transform: none;
}

/* ========== LIVE-DEMO BANNER (persistent nag back to Pikes Peak) ========== */
.demo-banner {
  background: linear-gradient(90deg, #05102A 0%, #0A1F44 100%);
  color: #FFFFFF;
  padding: 0.55rem clamp(1rem, 3vw, 2rem);
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  z-index: 200;
  border-bottom: 2px solid var(--rc-safety);
}
.demo-banner-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.94);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  font-weight: 700;
}
.demo-banner-label::before {
  content: '';
  width: 8px;
  height: 8px;
  background: var(--rc-safety);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(247, 208, 70, 0.7);
  animation: rcPulse 2s ease-in-out infinite;
}
@keyframes rcPulse { 50% { opacity: 0.4; } }
@media (prefers-reduced-motion: reduce) { .demo-banner-label::before { animation: none; } }
.demo-banner-actions {
  display: inline-flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 0.8rem;
  letter-spacing: 0.01em;
}
.demo-banner a {
  color: var(--rc-safety);
  font-weight: 600;
  transition: color 0.2s;
}
.demo-banner a:hover { color: #FFE071; }

/* ========== HEADER ========== */
.demo-header {
  background: var(--rc-black);
  color: #FFFFFF;
  position: sticky;
  top: 2.15rem;
  z-index: 50;
  border-bottom: 4px solid var(--rc-red);
}
.demo-header-inner {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 3vw, 2rem);
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}
.demo-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #FFFFFF;
  font-family: 'Oswald', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  line-height: 1;
}
.demo-logo-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  background: var(--rc-red);
  color: #FFFFFF;
  border-radius: 2px;
  font-size: 1.3rem;
  font-weight: 700;
  font-family: 'Oswald', sans-serif;
  box-shadow: 0 4px 14px rgba(220, 38, 38, 0.5), 0 0 0 2px rgba(220, 38, 38, 0.25);
  transform: rotate(-3deg);
}
.demo-logo-accent { color: var(--rc-safety); font-weight: 600; }

.demo-nav { display: flex; align-items: center; gap: 0.1rem; }
.demo-nav a {
  padding: 0.65rem 0.95rem;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.84);
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  white-space: nowrap;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  border-bottom: 3px solid transparent;
}
.demo-nav a:hover { background: rgba(255, 255, 255, 0.06); color: #FFFFFF; border-bottom-color: var(--rc-safety); }
.demo-nav a.is-active { color: #FFFFFF; border-bottom-color: var(--rc-red); }

.demo-nav-phone {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--rc-safety);
  font-weight: 700;
  font-family: 'Oswald', sans-serif;
  font-size: 1.05rem;
  letter-spacing: 0.03em;
}
.demo-nav-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.85rem 1.4rem;
  background: var(--rc-red);
  color: #FFFFFF !important;
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  font-size: 0.92rem;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  border-radius: 2px;
  margin-left: 0.5rem;
  box-shadow: 0 4px 14px rgba(220, 38, 38, 0.45);
  transition: background 0.2s, transform 0.2s;
  border-bottom: 3px solid transparent !important;
  border-top: 3px solid var(--rc-safety);
}
.demo-nav-cta:hover { background: var(--rc-red-dark); transform: translateY(-2px); }

.demo-menu-toggle {
  display: none;
  width: 46px;
  height: 46px;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  background: transparent;
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 2px;
  cursor: pointer;
}
.demo-menu-toggle svg { width: 22px; height: 22px; }

@media (max-width: 1040px) {
  .demo-nav:not(.demo-nav--mobile) { display: none; }
  .demo-menu-toggle { display: inline-flex; }
  .demo-nav-phone { display: none; }
}

.demo-mobile-nav {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(400px, 92vw);
  background: var(--rc-black);
  color: #FFFFFF;
  padding: 5.5rem 1.5rem 2rem;
  transform: translateX(100%);
  transition: transform 0.3s ease-out;
  z-index: 180;
  overflow-y: auto;
  box-shadow: -10px 0 50px rgba(0,0,0,0.6);
  border-left: 4px solid var(--rc-red);
}
.demo-mobile-nav.is-open { transform: translateX(0); display: block; }
.demo-mobile-nav a {
  display: block;
  padding: 1rem 1rem;
  color: rgba(255,255,255,0.92);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  font-family: 'Oswald', sans-serif;
  font-size: 1.05rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.demo-mobile-nav a:hover { background: rgba(255,255,255,0.06); color: var(--rc-safety); }
.demo-mobile-nav a.demo-nav-cta { margin-top: 1.5rem; background: var(--rc-red); border-bottom: none; text-align: center; }

/* ========== HERO (asymmetric, industrial) ========== */
.demo-hero {
  position: relative;
  padding: clamp(4rem, 9vw, 7rem) 0 clamp(4.5rem, 10vw, 8rem);
  background: var(--rc-black);
  color: #FFFFFF;
  overflow: hidden;
  isolation: isolate;
}
.demo-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(155deg, transparent 40%, rgba(220, 38, 38, 0.28) 100%),
    repeating-linear-gradient(135deg, transparent 0, transparent 80px, rgba(255,255,255,0.018) 80px, rgba(255,255,255,0.018) 82px);
  z-index: -1;
}
.demo-hero::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 55%;
  height: 100%;
  background: linear-gradient(135deg, transparent 0%, transparent 45%, rgba(247, 208, 70, 0.08) 45%, rgba(247, 208, 70, 0.08) 46%, transparent 46%);
  z-index: -1;
  pointer-events: none;
}
.demo-hero-inner {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 3vw, 2rem);
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: center;
}
@media (max-width: 880px) { .demo-hero-inner { grid-template-columns: 1fr; } }

.demo-hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.45rem 0.95rem;
  background: rgba(247, 208, 70, 0.12);
  border: 2px solid var(--rc-safety);
  color: var(--rc-safety);
  font-family: 'Oswald', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  border-radius: 2px;
  margin-bottom: 1.5rem;
}
.demo-hero-eyebrow::before {
  content: '';
  width: 10px;
  height: 10px;
  background: var(--rc-safety);
  transform: rotate(45deg);
}

.demo-hero h1 {
  font-size: clamp(2.6rem, 1.8rem + 4vw, 4.5rem);
  line-height: 1.02;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #FFFFFF;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  text-wrap: balance;
}
.demo-hero h1 em {
  color: var(--rc-safety);
  font-style: normal;
  font-weight: 600;
  display: inline-block;
  position: relative;
}
.demo-hero h1 em::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.1em;
  height: 0.08em;
  background: var(--rc-red);
  transform: skewX(-8deg);
  z-index: -1;
  opacity: 0.9;
}

.demo-hero-sub {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: clamp(1.05rem, 0.95rem + 0.5vw, 1.25rem);
  color: rgba(255,255,255,0.84);
  line-height: 1.55;
  margin-bottom: 2.25rem;
  max-width: 54ch;
  font-weight: 400;
}
.demo-hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-bottom: 2.25rem;
}

/* Buttons - sharp corners, uppercase, industrial */
.demo-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 1.1rem 2rem;
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 2px;
  border: 2px solid transparent;
  white-space: nowrap;
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s, box-shadow 0.2s;
  min-height: 50px;
  line-height: 1;
  cursor: pointer;
}
.demo-btn-primary {
  background: var(--rc-red);
  color: #FFFFFF;
  border-color: var(--rc-red);
  box-shadow: 0 6px 20px rgba(220, 38, 38, 0.45), inset 0 -3px 0 rgba(0,0,0,0.25);
}
.demo-btn-primary:hover {
  background: var(--rc-red-dark);
  border-color: var(--rc-red-dark);
  color: #FFFFFF;
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(220, 38, 38, 0.55), inset 0 -3px 0 rgba(0,0,0,0.25);
}
.demo-btn-outline {
  background: transparent;
  color: #FFFFFF;
  border-color: rgba(255,255,255,0.4);
}
.demo-btn-outline:hover {
  background: rgba(255,255,255,0.1);
  border-color: #FFFFFF;
  color: #FFFFFF;
}
.demo-btn-safety {
  background: var(--rc-safety);
  color: var(--rc-black);
  border-color: var(--rc-safety);
  box-shadow: 0 6px 20px rgba(247, 208, 70, 0.4), inset 0 -3px 0 rgba(0,0,0,0.15);
}
.demo-btn-safety:hover {
  background: var(--rc-safety-dark);
  border-color: var(--rc-safety-dark);
  color: var(--rc-black);
  transform: translateY(-2px);
}
.demo-btn-dark {
  background: var(--rc-black);
  color: #FFFFFF;
  border-color: var(--rc-black);
}
.demo-btn-dark:hover {
  background: #000;
  border-color: #000;
  color: #FFFFFF;
  transform: translateY(-1px);
}

.demo-hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.75rem;
  padding-top: 1.75rem;
  border-top: 1px dashed rgba(255,255,255,0.15);
  font-size: 0.85rem;
  color: rgba(255,255,255,0.82);
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
}
.demo-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: 0.02em;
}
.demo-hero-badge::before {
  content: '';
  width: 14px;
  height: 14px;
  background: var(--rc-safety);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 50%);
}

/* Hero card - tilted ticket-style */
.demo-hero-card {
  position: relative;
  background: #FFFFFF;
  color: var(--rc-black);
  border-radius: 2px;
  padding: 2.25rem;
  max-width: 460px;
  margin-left: auto;
  box-shadow: 0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.08);
  border-top: 5px solid var(--rc-red);
  transform: rotate(1deg);
}
.demo-hero-card::before {
  content: 'WARRANTY ISSUED';
  position: absolute;
  top: -14px;
  right: 20px;
  background: var(--rc-safety);
  color: var(--rc-black);
  font-family: 'Oswald', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  padding: 0.3rem 0.75rem;
  border-radius: 2px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.25);
}
.demo-hero-card h3 {
  font-size: 1.2rem;
  color: var(--rc-black);
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.demo-hero-card p {
  color: var(--rc-text);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}
.demo-hero-card p strong {
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  display: block;
  color: var(--rc-text-muted);
  margin-top: 0.5rem;
}
.demo-hero-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid var(--rc-cream-warm);
}
.demo-hero-stars { color: var(--rc-safety-dark); font-size: 1.25rem; letter-spacing: 0.05em; }
.demo-hero-rating-count {
  color: var(--rc-text-muted);
  font-size: 0.82rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 500;
}
.demo-hero-cert-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.55rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--rc-cream-warm);
}
.demo-hero-cert {
  text-align: center;
  padding: 0.65rem 0.35rem;
  background: var(--rc-cream);
  border: 1px solid var(--rc-line);
  border-radius: 2px;
  font-family: 'Oswald', sans-serif;
  font-size: 0.68rem;
  color: var(--rc-black);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* Diagonal roofline divider */
.demo-roofline {
  position: relative;
  height: 50px;
  background: var(--rc-black);
  overflow: hidden;
}
.demo-roofline::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: var(--rc-cream);
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
}
.demo-roofline--reverse::before {
  background: var(--rc-black);
  clip-path: polygon(0 0, 50% 100%, 100% 0);
}
.demo-roofline--on-cream { background: var(--rc-cream); }
.demo-roofline--on-cream::before { background: var(--rc-black); }

/* Safety-tape inspired stripe band */
.demo-trust-bar {
  background: var(--rc-black);
  color: #FFFFFF;
  padding: 1.25rem 0;
  border-top: 4px solid var(--rc-red);
  border-bottom: 4px solid var(--rc-safety);
  position: relative;
}
.demo-trust-bar::before, .demo-trust-bar::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 4px;
  background: repeating-linear-gradient(45deg, var(--rc-safety) 0, var(--rc-safety) 12px, var(--rc-black) 12px, var(--rc-black) 24px);
}
.demo-trust-bar::before { top: -4px; }
.demo-trust-bar::after { bottom: -4px; }
.demo-trust-bar-inner {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 3vw, 2rem);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.85rem 2rem;
  font-family: 'Oswald', sans-serif;
  font-size: 0.82rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.88);
}
.demo-trust-bar-item { display: inline-flex; align-items: center; gap: 0.55rem; }
.demo-trust-bar-item svg { width: 18px; height: 18px; color: var(--rc-safety); }

/* ========== SECTIONS ========== */
.demo-section { padding: clamp(4rem, 7vw, 6rem) 0; }
.demo-section--cream { background: var(--rc-cream); }
.demo-section--cream-warm { background: var(--rc-cream-warm); }
.demo-section--white { background: #FFFFFF; }
.demo-section--dark { background: var(--rc-black); color: #FFFFFF; }
.demo-section--red {
  background: linear-gradient(160deg, var(--rc-red) 0%, var(--rc-red-dark) 100%);
  color: #FFFFFF;
}
.demo-section--striped {
  background:
    linear-gradient(to right, var(--rc-black) 0%, var(--rc-black-2) 100%),
    repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0 60px, rgba(247,208,70,0.02) 60px 62px);
  background-blend-mode: overlay;
  color: #FFFFFF;
}

.demo-container { max-width: 1240px; margin: 0 auto; padding: 0 clamp(1rem, 3vw, 2rem); }
.demo-container--narrow { max-width: 820px; }
.demo-container--medium { max-width: 1040px; }

/* Section labels — big, uppercase, industrial */
.demo-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  font-family: 'Oswald', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--rc-red);
  margin-bottom: 1.25rem;
}
.demo-eyebrow::before {
  content: '';
  width: 42px;
  height: 3px;
  background: var(--rc-red);
}
.demo-section--dark .demo-eyebrow, .demo-section--red .demo-eyebrow, .demo-section--striped .demo-eyebrow { color: var(--rc-safety); }
.demo-section--dark .demo-eyebrow::before, .demo-section--red .demo-eyebrow::before, .demo-section--striped .demo-eyebrow::before { background: var(--rc-safety); }

.demo-h2 {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(2.1rem, 1.5rem + 2.8vw, 3.2rem);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.005em;
  color: var(--rc-black);
  margin-bottom: 1.15rem;
  text-wrap: balance;
  text-transform: uppercase;
}
.demo-section--dark .demo-h2, .demo-section--red .demo-h2, .demo-section--striped .demo-h2 { color: #FFFFFF; }
.demo-h2 em {
  color: var(--rc-red);
  font-style: normal;
  font-weight: 600;
  position: relative;
  display: inline-block;
}
.demo-section--dark .demo-h2 em, .demo-section--red .demo-h2 em, .demo-section--striped .demo-h2 em { color: var(--rc-safety); }

.demo-lead {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--rc-text-muted);
  max-width: 60ch;
  margin-bottom: 2.5rem;
  font-weight: 400;
}
.demo-section--dark .demo-lead, .demo-section--red .demo-lead, .demo-section--striped .demo-lead { color: rgba(255,255,255,0.82); }

/* ========== SERVICES (cards with thick left accent, industrial feel) ========== */
.demo-services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
@media (max-width: 860px) { .demo-services { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .demo-services { grid-template-columns: 1fr; } }

.demo-service {
  background: #FFFFFF;
  border: 1px solid var(--rc-line);
  border-left: 5px solid var(--rc-red);
  border-radius: 2px;
  padding: 2rem 1.75rem;
  transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s;
  display: flex;
  flex-direction: column;
  position: relative;
}
.demo-service::before {
  content: counter(rc-count, decimal-leading-zero);
  counter-increment: rc-count;
  position: absolute;
  top: 1.25rem;
  right: 1.5rem;
  font-family: 'Oswald', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--rc-cream-warm);
  line-height: 1;
  pointer-events: none;
}
.demo-services { counter-reset: rc-count; }
.demo-service:hover {
  box-shadow: 0 20px 50px rgba(15, 19, 29, 0.14);
  transform: translateY(-6px);
  border-left-color: var(--rc-safety);
}
.demo-service:hover::before { color: var(--rc-safety); }

.demo-service-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 2px;
  background: var(--rc-black);
  color: var(--rc-safety);
  margin-bottom: 1.25rem;
  transform: rotate(-3deg);
}
.demo-service-icon svg { width: 30px; height: 30px; }
.demo-service:hover .demo-service-icon { background: var(--rc-red); color: #FFFFFF; transform: rotate(0); }

.demo-service h3 {
  font-family: 'Oswald', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin-bottom: 0.75rem;
  color: var(--rc-black);
}
.demo-service p {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--rc-text-muted);
  margin-bottom: 1.25rem;
  flex: 1;
}
.demo-service a {
  color: var(--rc-red);
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}
.demo-service a::after { content: '→'; transition: transform 0.2s; font-family: 'IBM Plex Sans', sans-serif; }
.demo-service:hover a::after { transform: translateX(4px); }

/* ========== STATS BAR (giant Oswald numbers on dark) ========== */
.demo-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: left;
}
@media (max-width: 760px) { .demo-stats { grid-template-columns: repeat(2, 1fr); gap: 2rem 1.5rem; } }
.demo-stat {
  padding-left: 1.25rem;
  border-left: 3px solid var(--rc-safety);
}
.demo-stat-num {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(3rem, 6vw, 4.75rem);
  font-weight: 700;
  color: #FFFFFF;
  line-height: 0.95;
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}
.demo-stat-label {
  font-family: 'Oswald', sans-serif;
  font-size: 0.82rem;
  color: var(--rc-safety);
  letter-spacing: 0.14em;
  line-height: 1.4;
  text-transform: uppercase;
  font-weight: 500;
  max-width: 22ch;
}

/* ========== PROCESS STEPS (numbered in Oswald) ========== */
.demo-process {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.25rem;
}
@media (max-width: 860px) { .demo-process { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 500px) { .demo-process { grid-template-columns: 1fr; } }
.demo-process-step {
  background: #FFFFFF;
  border: 1px solid var(--rc-line);
  border-radius: 2px;
  padding: 1.75rem 1.5rem;
  position: relative;
  border-top: 4px solid var(--rc-red);
}
.demo-process-num {
  font-family: 'Oswald', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--rc-red);
  line-height: 1;
  margin-bottom: 0.85rem;
  display: block;
}
.demo-process-step h3 {
  font-family: 'Oswald', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.5rem;
}
.demo-process-step p {
  font-size: 0.88rem;
  color: var(--rc-text-muted);
  line-height: 1.55;
}

/* ========== TESTIMONIALS (no italic, square, bold) ========== */
.demo-testimonials {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
@media (max-width: 880px) { .demo-testimonials { grid-template-columns: 1fr; } }
.demo-testimonial {
  background: #FFFFFF;
  border: 1px solid var(--rc-line);
  border-left: 5px solid var(--rc-safety);
  border-radius: 2px;
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 14px rgba(15,19,29,0.06);
}
.demo-testimonial-stars {
  color: var(--rc-safety-dark);
  font-size: 1.2rem;
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
}
.demo-testimonial-quote {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.65;
  color: var(--rc-text);
  margin-bottom: 1.5rem;
  flex: 1;
  font-style: normal;
  font-weight: 400;
}
.demo-testimonial-author {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding-top: 1.25rem;
  border-top: 1px dashed var(--rc-cream-warm);
}
.demo-testimonial-avatar {
  width: 48px;
  height: 48px;
  background: var(--rc-red);
  color: #FFFFFF;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  border-radius: 2px;
}
.demo-testimonial-name {
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  color: var(--rc-black);
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.demo-testimonial-meta {
  font-size: 0.8rem;
  color: var(--rc-text-muted);
  letter-spacing: 0.04em;
}

/* ========== GALLERY (industrial photo placeholder) ========== */
.demo-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
@media (max-width: 760px) { .demo-gallery { grid-template-columns: repeat(2, 1fr); } }
.demo-gallery-item {
  aspect-ratio: 4 / 3;
  border-radius: 2px;
  background: var(--rc-black-2);
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 1.25rem;
  color: #FFFFFF;
  font-family: 'Oswald', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;
  border-bottom: 4px solid var(--rc-red);
}
.demo-gallery-item:hover { transform: translateY(-4px); border-bottom-color: var(--rc-safety); }
.demo-gallery-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, transparent 50%, rgba(15, 19, 29, 0.92) 100%),
    repeating-linear-gradient(135deg, var(--rc-red-dark) 0 30px, var(--rc-black) 30px 60px);
  opacity: 0.85;
}
.demo-gallery-item::after { display: none; }
.demo-gallery-item > span {
  position: relative;
  z-index: 1;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.demo-gallery-tag {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--rc-safety);
  color: var(--rc-black);
  font-family: 'Oswald', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.3rem 0.65rem;
  letter-spacing: 0.12em;
  z-index: 2;
}

/* ========== CTA BAND (red or black, industrial) ========== */
.demo-cta-band {
  background: var(--rc-black);
  color: #FFFFFF;
  padding: clamp(3.5rem, 7vw, 5.5rem) 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-top: 4px solid var(--rc-red);
  border-bottom: 4px solid var(--rc-safety);
}
.demo-cta-band::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(135deg, transparent 0 80px, rgba(220, 38, 38, 0.06) 80px 81px);
  z-index: 0;
}
.demo-cta-band > * { position: relative; z-index: 1; }
.demo-cta-band h2 {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(2.1rem, 1.5rem + 2.5vw, 3rem);
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 1rem;
  line-height: 1.05;
  text-transform: uppercase;
  letter-spacing: -0.005em;
}
.demo-cta-band h2 em { color: var(--rc-safety); font-style: normal; }
.demo-cta-band p {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.1rem;
  color: rgba(255,255,255,0.88);
  max-width: 56ch;
  margin: 0 auto 2.25rem;
  line-height: 1.6;
}

/* ========== INSURANCE CALLOUT (warning-tape style) ========== */
.demo-insurance-bar {
  background: var(--rc-safety);
  color: var(--rc-black);
  padding: 1.5rem 0;
  border-top: 4px solid var(--rc-black);
  border-bottom: 4px solid var(--rc-black);
  position: relative;
}
.demo-insurance-bar::before, .demo-insurance-bar::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 4px;
  background: repeating-linear-gradient(45deg, var(--rc-black) 0, var(--rc-black) 12px, var(--rc-safety) 12px, var(--rc-safety) 24px);
}
.demo-insurance-bar::before { top: -4px; }
.demo-insurance-bar::after { bottom: -4px; }
.demo-insurance-inner {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 3vw, 2rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
}
.demo-insurance-inner strong {
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.demo-insurance-inner a {
  color: var(--rc-black);
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

/* ========== PAGE HERO (interior pages) ========== */
.demo-page-hero {
  background: var(--rc-black);
  color: #FFFFFF;
  padding: clamp(3rem, 6vw, 5rem) 0 clamp(3rem, 6vw, 4.5rem);
  border-bottom: 6px solid var(--rc-red);
  position: relative;
  overflow: hidden;
}
.demo-page-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(135deg, transparent 0 60px, rgba(220, 38, 38, 0.04) 60px 61px);
  z-index: 0;
}
.demo-page-hero > * { position: relative; z-index: 1; }
.demo-page-hero h1 {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(2.3rem, 1.6rem + 3vw, 3.75rem);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.005em;
  color: #FFFFFF;
  margin-bottom: 1rem;
  text-transform: uppercase;
  text-wrap: balance;
}
.demo-page-hero h1 em { color: var(--rc-safety); font-style: normal; font-weight: 600; }
.demo-page-hero p {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.15rem;
  color: rgba(255,255,255,0.82);
  max-width: 60ch;
  line-height: 1.6;
}
.demo-breadcrumb {
  display: flex;
  gap: 0.45rem;
  align-items: center;
  font-family: 'Oswald', sans-serif;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.6);
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}
.demo-breadcrumb a { color: rgba(255,255,255,0.82); transition: color 0.2s; }
.demo-breadcrumb a:hover { color: var(--rc-safety); }
.demo-breadcrumb .sep { color: rgba(255,255,255,0.35); }

/* ========== PROSE (service detail pages) ========== */
.demo-prose { max-width: 720px; margin: 0 auto; font-family: 'IBM Plex Sans', sans-serif; }
.demo-prose h2 {
  font-family: 'Oswald', sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--rc-black);
  margin: 2.75rem 0 1rem;
  letter-spacing: -0.005em;
  text-transform: uppercase;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid var(--rc-red);
  display: inline-block;
}
.demo-prose h3 {
  font-family: 'Oswald', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--rc-black);
  margin: 1.75rem 0 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}
.demo-prose p, .demo-prose li {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--rc-text);
}
.demo-prose p { margin-bottom: 1.25rem; }
.demo-prose ul, .demo-prose ol { margin: 0 0 1.5rem 0; list-style: none; padding: 0; }
.demo-prose ul li { padding-left: 1.75rem; position: relative; margin-bottom: 0.6rem; }
.demo-prose ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6rem;
  width: 12px;
  height: 12px;
  background: var(--rc-red);
  clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%);
}
.demo-prose ol { counter-reset: rc-list; margin-left: 0; }
.demo-prose ol li {
  padding-left: 3rem;
  position: relative;
  margin-bottom: 0.85rem;
  counter-increment: rc-list;
}
.demo-prose ol li::before {
  content: counter(rc-list, decimal-leading-zero);
  position: absolute;
  left: 0;
  top: 0.25rem;
  font-family: 'Oswald', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--rc-red);
  letter-spacing: 0.03em;
}
.demo-prose strong {
  color: var(--rc-black);
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.95em;
  letter-spacing: 0.02em;
}
.demo-prose a {
  color: var(--rc-red);
  font-weight: 600;
  border-bottom: 2px solid var(--rc-cream-warm);
  transition: border-color 0.2s, color 0.2s;
}
.demo-prose a:hover { color: var(--rc-red-dark); border-bottom-color: var(--rc-red); }
.demo-prose code {
  font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace;
  font-size: 0.9em;
  padding: 0.12em 0.4em;
  background: var(--rc-cream-warm);
  border-radius: 2px;
  color: var(--rc-black);
}

/* ========== FORMS ========== */
.demo-form {
  background: #FFFFFF;
  border: 1px solid var(--rc-line);
  border-top: 5px solid var(--rc-red);
  border-radius: 2px;
  padding: 2.5rem 2.25rem;
  box-shadow: 0 10px 35px rgba(15,19,29,0.08);
}
.demo-form h3 {
  font-family: 'Oswald', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin-bottom: 0.5rem;
  color: var(--rc-black);
}
.demo-form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}
@media (max-width: 560px) { .demo-form-row { grid-template-columns: 1fr; } }
.demo-form-group { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 1rem; }
.demo-form-group label {
  font-family: 'Oswald', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--rc-black);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.demo-form-group input,
.demo-form-group select,
.demo-form-group textarea {
  padding: 0.85rem 1rem;
  border: 2px solid var(--rc-line);
  border-radius: 2px;
  font-size: 16px;
  font-family: 'IBM Plex Sans', sans-serif;
  background: #FFFFFF;
  color: var(--rc-text);
  transition: border-color 0.2s, box-shadow 0.2s;
}
.demo-form-group input:focus,
.demo-form-group select:focus,
.demo-form-group textarea:focus {
  outline: none;
  border-color: var(--rc-red);
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.15);
}
.demo-form-group textarea { min-height: 120px; line-height: 1.55; resize: vertical; }
.demo-form button[type="submit"] {
  width: 100%;
  padding: 1.15rem;
  background: var(--rc-red);
  color: #FFFFFF;
  border: none;
  border-radius: 2px;
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  margin-top: 0.5rem;
  box-shadow: 0 6px 20px rgba(220, 38, 38, 0.4), inset 0 -3px 0 rgba(0,0,0,0.25);
}
.demo-form button[type="submit"]:hover { background: var(--rc-red-dark); transform: translateY(-2px); }

/* ========== INFO CARDS (inline callouts on prose pages) ========== */
.demo-info-card {
  padding: 1.5rem 1.75rem;
  background: var(--rc-black);
  color: #FFFFFF;
  border-radius: 2px;
  border-left: 5px solid var(--rc-safety);
  margin: 2rem 0;
}
.demo-info-card strong {
  color: var(--rc-safety) !important;
  font-family: 'Oswald', sans-serif;
  font-size: 0.82rem !important;
  letter-spacing: 0.12em !important;
  display: block;
  margin-bottom: 0.5rem;
}
.demo-info-card p {
  color: rgba(255,255,255,0.88);
  margin-bottom: 0 !important;
  font-family: 'IBM Plex Sans', sans-serif;
}

/* ========== FOOTER ========== */
.demo-footer {
  background: var(--rc-black);
  color: rgba(255,255,255,0.78);
  padding: clamp(3.5rem, 6vw, 5rem) 0 2rem;
  border-top: 6px solid var(--rc-red);
  position: relative;
}
.demo-footer::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 0;
  right: 0;
  height: 4px;
  background: repeating-linear-gradient(45deg, var(--rc-safety) 0 12px, var(--rc-red) 12px 24px);
}
.demo-footer-grid {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 3vw, 2rem);
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 3rem;
}
@media (max-width: 760px) { .demo-footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; } }
@media (max-width: 500px) { .demo-footer-grid { grid-template-columns: 1fr; } }
.demo-footer h4 {
  color: var(--rc-safety);
  font-family: 'Oswald', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 1.15rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(247, 208, 70, 0.15);
}
.demo-footer a {
  display: block;
  padding: 0.35rem 0;
  color: rgba(255,255,255,0.78);
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.92rem;
  transition: color 0.2s, padding-left 0.2s;
}
.demo-footer a:hover { color: var(--rc-safety); padding-left: 0.25rem; }
.demo-footer p {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.92rem;
  color: rgba(255,255,255,0.72);
  line-height: 1.65;
  margin-bottom: 1rem;
}
.demo-footer-brand .demo-logo { color: #FFFFFF; margin-bottom: 1rem; }

.demo-footer-bottom {
  max-width: 1240px;
  margin: 2.5rem auto 0;
  padding: 2rem clamp(1rem, 3vw, 2rem) 0;
  border-top: 1px dashed rgba(255,255,255,0.1);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.56);
}
.demo-footer-bottom a { display: inline; color: inherit; padding: 0; }
.demo-footer-bottom a:hover { color: var(--rc-safety); padding-left: 0; }
.demo-footer-pp {
  padding: 0.5rem 0.85rem;
  background: rgba(247, 208, 70, 0.08);
  border: 1px solid rgba(247, 208, 70, 0.2);
  border-radius: 2px;
  color: rgba(255,255,255,0.82);
  font-family: 'Oswald', sans-serif !important;
  font-size: 0.75rem !important;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* ========== LIGHTHOUSE CARD (on homepage, styled for dark Redcap aesthetic) ========== */
.lighthouse-card {
  background: var(--rc-black);
  color: #FFFFFF;
  border: 1px solid rgba(255,255,255,0.08);
  border-top: 4px solid var(--rc-safety);
  border-radius: 2px;
  padding: 2rem;
  max-width: 720px;
  margin: 0 auto;
  box-shadow: 0 20px 50px rgba(15,19,29,0.2);
}
.lighthouse-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px dashed rgba(255,255,255,0.15);
  gap: 0.75rem;
  flex-wrap: wrap;
}
.lighthouse-head h3 {
  font-family: 'Oswald', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #FFFFFF;
}
.lighthouse-url {
  font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace;
  font-size: 0.78rem;
  color: var(--rc-safety);
  padding: 0.3rem 0.6rem;
  background: rgba(247, 208, 70, 0.08);
  border-radius: 2px;
}
.lighthouse-scores {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
@media (max-width: 560px) { .lighthouse-scores { grid-template-columns: repeat(2, 1fr); } }
.lighthouse-score { text-align: center; }
.lighthouse-ring { width: 80px; height: 80px; margin: 0 auto 0.75rem; position: relative; }
.lighthouse-ring-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: conic-gradient(#0CCE6B 0% 99%, rgba(255,255,255,0.08) 99% 100%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.lighthouse-ring-circle::before {
  content: '';
  position: absolute;
  inset: 5px;
  background: var(--rc-black);
  border-radius: 50%;
}
.lighthouse-ring-number {
  position: relative;
  font-family: 'Oswald', sans-serif;
  font-size: 1.55rem;
  font-weight: 700;
  color: #0CCE6B;
}
.lighthouse-label {
  font-family: 'Oswald', sans-serif;
  font-size: 0.78rem;
  color: rgba(255,255,255,0.78);
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  line-height: 1.3;
}
.lighthouse-foot {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px dashed rgba(255,255,255,0.12);
  font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace;
  font-size: 0.78rem;
  color: rgba(255,255,255,0.6);
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.lighthouse-foot a { color: var(--rc-safety); text-decoration: underline; }

`;

const before = src.slice(0, start);
const after = src.slice(end);
fs.writeFileSync(cssPath, before + NEW_CSS + after);

const beforeLines = before.split('\\n').length;
const newLines = NEW_CSS.split('\\n').length;
const afterLines = after.split('\\n').length;
console.log('Wrote new demo CSS:');
console.log('  Old block: ' + (src.slice(start, end).split('\\n').length) + ' lines');
console.log('  New block: ' + newLines + ' lines');
console.log('  Total file: ' + (beforeLines + newLines + afterLines - 2) + ' lines');
