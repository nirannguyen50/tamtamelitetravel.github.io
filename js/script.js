document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.cta-form');
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const yearEl = document.getElementById('year');

  yearEl.textContent = new Date().getFullYear();

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = form.elements.namedItem('name')?.value || 'there';
      alert(`Thanks ${name}! Our concierge team will reach out shortly.`);
      form.reset();
    });
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.classList.toggle('open', isOpen);
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
          navToggle.classList.remove('open');
        }
      });
    });
  }
});
