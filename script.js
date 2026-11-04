
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

// Mobile navigation
menu.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close menu after clicking a link
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// Automatic copyright year
document.getElementById('year').textContent =
  new Date().getFullYear();

// Scroll progress bar
const bar = document.getElementById('progress');

window.addEventListener('scroll', () => {

  const max =
    document.documentElement.scrollHeight - innerHeight;

  bar.style.width =
    (max ? scrollY / max * 100 : 0) + '%';

}, { passive: true });

// Scroll reveal animation
const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('visible');

        observer.unobserve(entry.target);
      }

    });

  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(element => {
  observer.observe(element);
});
