const nav = document.querySelector('.nav');
const backToTop = document.querySelector('.back-to-top');
const themeToggle = document.querySelector('.theme-toggle');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

document.documentElement.dataset.theme = storedTheme || (prefersDark ? 'dark' : 'light');

const updateScrollState = () => {
  const y = window.scrollY;

  if (y > 60) {
    nav?.classList.add('scrolled');
  } else {
    nav?.classList.remove('scrolled');
  }

  if (y > 400) {
    backToTop?.classList.add('visible');
  } else {
    backToTop?.classList.remove('visible');
  }

  let current = '';
  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    if (y >= top) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
};

window.addEventListener('scroll', updateScrollState, { passive: true });
updateScrollState();

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

themeToggle?.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.skill-card, .project-card, .about-content, .contact-card, .timeline-card, .now-card, .link-card, .note-list').forEach((el) => {
  el.classList.add('fade-in');
  observer.observe(el);
});
