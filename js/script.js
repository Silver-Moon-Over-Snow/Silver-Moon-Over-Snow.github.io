// Navigation scroll effect
const nav = document.querySelector('.nav');
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  const y = window.scrollY;

  // Nav shadow
  if (y > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  // Back to top button
  if (y > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }

  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    if (y >= top) {
      current = section.getAttribute('id');
    }
  });
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Back to top click
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fade-in on scroll
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

document.querySelectorAll('.skill-card, .project-card, .about-content, .contact-card, .timeline-card').forEach((el) => {
  el.classList.add('fade-in');
  observer.observe(el);
});
