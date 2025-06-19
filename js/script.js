document.querySelector('#contact form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out!');
});

const navToggle = document.getElementById('nav-toggle');
const navList = document.querySelector('header ul');

navToggle?.addEventListener('click', () => {
  navList.classList.toggle('open');
});

navList?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navList.classList.remove('open'));
});

const toTop = document.getElementById('to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    toTop?.classList.add('show');
  } else {
    toTop?.classList.remove('show');
  }
});

toTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
