/**
 * Meta-Innovation Harness · main.js
 * Handles: sticky nav, scroll-reveal, mobile menu, scroll progress.
 */

(function () {
  'use strict';

  /* ── Sticky Nav ─────────────────────────────────────────────────────────── */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Scroll-reveal ───────────────────────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  /* ── Mobile nav toggle ───────────────────────────────────────────────────── */
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.querySelector('.nav__links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.style.display === 'flex';
      navLinks.style.display = isOpen ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'rgba(8, 11, 16, 0.97)';
      navLinks.style.borderBottom = '1px solid #1e2d3d';
      navLinks.style.padding = '1rem 2rem';
      navLinks.style.gap = '0.25rem';
      if (isOpen) {
        navLinks.style.display = 'none';
      }
    });

    // Close when a link is clicked
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.style.display = 'none';
      });
    });
  }

  /* ── Scroll progress bar ─────────────────────────────────────────────────── */
  const progressBar = document.createElement('div');
  progressBar.style.cssText = [
    'position:fixed',
    'top:0',
    'left:0',
    'height:2px',
    'background:linear-gradient(90deg,#f5a623,#00d4ff)',
    'z-index:2000',
    'width:0%',
    'transition:width 0.1s linear',
    'pointer-events:none',
  ].join(';');
  document.body.prepend(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }, { passive: true });

  /* ── Active nav link highlight ───────────────────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav__links a[href^="#"]');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinkEls.forEach((link) => {
            link.style.color = '';
            if (link.getAttribute('href') === '#' + id) {
              link.style.color = '#f5a623';
            }
          });
        }
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach((s) => sectionObserver.observe(s));

  /* ── Expert card tilt effect ─────────────────────────────────────────────── */
  const expertCards = document.querySelectorAll('.expert-card');
  expertCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotateX = ((y - cy) / cy) * -4;
      const rotateY = ((x - cx) / cx) * 4;
      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ── Workflow card stagger on scroll ─────────────────────────────────────── */
  // Already handled by CSS .reveal + JS IntersectionObserver above.
  // Nothing extra needed.

})();
