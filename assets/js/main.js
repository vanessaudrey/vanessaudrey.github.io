// ============================================
// PORTFOLIO — Main JS
// ============================================

// --- THEME TOGGLE ---
(function() {
  const html = document.documentElement;
  const btn = document.querySelector('.theme-toggle');

  // Determine initial theme
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');

  if (stored) html.setAttribute('data-theme', stored);

  if (btn) {
    btn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  // Listen for system changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
  });
})();

// --- MOBILE NAV ---
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// --- SCROLL FADE IN ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// --- CONTACT FORM (Formspree-ready) ---
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;

    // Replace the action URL with your Formspree endpoint
    const action = form.getAttribute('action');
    if (!action || action === '#') {
      setTimeout(() => {
        btn.textContent = '✓ Message sent!';
        btn.style.background = '#22c55e';
        form.reset();
        setTimeout(() => { btn.textContent = original; btn.disabled = false; btn.style.background = ''; }, 3000);
      }, 800);
      return;
    }

    try {
      const res = await fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        btn.textContent = '✓ Message sent!';
        form.reset();
      } else {
        btn.textContent = 'Something went wrong';
      }
    } catch {
      btn.textContent = 'Network error';
    } finally {
      btn.disabled = false;
      setTimeout(() => { btn.textContent = original; }, 3000);
    }
  });
}
