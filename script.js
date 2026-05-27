// Typed text effect
const typedStrings = [
  "Aspiring DevOps Engineer",
  "Full Stack Developer",
  "Cloud Enthusiast",
  "Problem Solver"
];
let sIdx = 0, cIdx = 0, deleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
  const str = typedStrings[sIdx];
  if (!deleting) {
    typedEl.textContent = str.slice(0, ++cIdx);
    if (cIdx === str.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    typedEl.textContent = str.slice(0, --cIdx);
    if (cIdx === 0) { deleting = false; sIdx = (sIdx + 1) % typedStrings.length; }
  }
  setTimeout(type, deleting ? 60 : 100);
}
type();

// Theme toggle — default is light
const themeBtn = document.getElementById('theme-toggle');
const html = document.documentElement;
let dark = false;
html.setAttribute('data-theme', 'light');
themeBtn.textContent = '🌙';
themeBtn.addEventListener('click', () => {
  dark = !dark;
  html.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeBtn.textContent = dark ? '☀️' : '🌙';
});

// Mobile nav
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
const mobileClose = document.getElementById('mobile-close');
hamburger.addEventListener('click', () => mobileNav.classList.add('open'));
mobileClose.addEventListener('click', () => mobileNav.classList.remove('open'));
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));

// Smooth nav background on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.style.background = window.scrollY > 60
    ? (dark ? 'rgba(15,17,23,0.97)' : 'rgba(255,255,255,0.97)')
    : (dark ? 'rgba(15,17,23,0.92)' : 'rgba(255,255,255,0.92)');
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // Animate skill bars
      e.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.pct + '%';
      });
      // Animate timeline items
      e.target.querySelectorAll('.timeline-item').forEach((item, i) => {
        setTimeout(() => item.classList.add('visible'), i * 150);
      });
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .skills-grid, .timeline').forEach(el => observer.observe(el));

// Counter animation
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = Math.ceil(target / (duration / 16));
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = start + (el.dataset.suffix || '');
    if (start >= target) clearInterval(timer);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('[data-count]').forEach(el => {
        animateCounter(el, parseInt(el.dataset.count));
      });
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.hero-stats, .github-stats-grid').forEach(el => counterObserver.observe(el));

// Contact form — real submission via Web3Forms
document.getElementById('contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn = this.querySelector('.form-submit');
  const originalText = btn.innerHTML;
  btn.innerHTML = '⏳ Sending...';
  btn.disabled = true;

  const formData = new FormData(this);
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    if (data.success) {
      btn.innerHTML = '✅ Message Sent! I\'ll reply soon.';
      btn.style.background = '#16a34a';
      this.reset();
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 4000);
    } else {
      throw new Error('Submission failed');
    }
  } catch {
    btn.innerHTML = '❌ Failed. Email me directly!';
    btn.style.background = '#dc2626';
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.disabled = false;
    }, 4000);
  }
});

// Reveal all sections on load
setTimeout(() => {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) el.classList.add('visible');
  });
}, 100);
