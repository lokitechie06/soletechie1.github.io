/* ============================================================
   SOLETECHIE — Site JS
   ============================================================ */

(function () {
  'use strict';

  /* ── Scroll reveal ── */
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('in'), i * 55);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    els.forEach(el => io.observe(el));
  }

  /* ── Active nav link on scroll ── */
  function initNavHighlight() {
    const sections = document.querySelectorAll('section[id], div[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    if (!navLinks.length) return;

    const onScroll = () => {
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
      });
      navLinks.forEach(a => {
        const href = a.getAttribute('href');
        a.classList.toggle('active',
          href === '#' + current || href === current + '.html' || (href === 'index.html' && !current));
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Blog tag filter ── */
  function initBlogFilter() {
    const btns  = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.list-card');
    if (!btns.length || !cards.length) return;

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tag = btn.dataset.tag;
        cards.forEach(card => {
          const match = tag === 'all' || card.dataset.tags?.includes(tag);
          card.style.display = match ? '' : 'none';
        });
      });
    });
  }

  /* ── Typewriter effect for hero terminal ── */
  function initTypewriter() {
    const lines = document.querySelectorAll('.tw-line');
    if (!lines.length) return;
    lines.forEach((line, i) => {
      line.style.opacity = '0';
      setTimeout(() => {
        line.style.opacity = '1';
        line.style.animation = 'none';
      }, i * 280 + 400);
    });
  }

  /* ── Skill bars: trigger fill on visibility ── */
  function initSkillBars() {
    const bars = document.querySelectorAll('.bar-fill');
    if (!bars.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.animationPlayState = 'running';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    bars.forEach(bar => {
      bar.style.animationPlayState = 'paused';
      io.observe(bar);
    });
  }

  /* ── Copy code blocks ── */
  function initCodeCopy() {
    document.querySelectorAll('pre').forEach(pre => {
      const btn = document.createElement('button');
      btn.textContent = 'copy';
      btn.style.cssText = `
        position:absolute; top:0.6rem; right:0.75rem;
        font-family:var(--mono); font-size:0.62rem; letter-spacing:0.05em;
        color:var(--text-dim); background:var(--surface); border:1px solid var(--border-hi);
        border-radius:3px; padding:0.18rem 0.5rem; cursor:pointer;
        transition:color .15s;
      `;
      btn.addEventListener('mouseenter', () => btn.style.color = 'var(--green)');
      btn.addEventListener('mouseleave', () => btn.style.color = 'var(--text-dim)');
      btn.addEventListener('click', () => {
        navigator.clipboard?.writeText(pre.querySelector('code')?.textContent ?? pre.textContent);
        btn.textContent = 'copied!';
        btn.style.color = 'var(--green)';
        setTimeout(() => { btn.textContent = 'copy'; btn.style.color = 'var(--text-dim)'; }, 1800);
      });
      pre.style.position = 'relative';
      pre.appendChild(btn);
    });
  }

  /* ── Init all ── */
  document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    initNavHighlight();
    initBlogFilter();
    initTypewriter();
    initSkillBars();
    initCodeCopy();
  });

})();
