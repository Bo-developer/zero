// Mobile navigation
const body = document.querySelector('body');
const navToggleBtn = document.querySelector('#tooggleNav');
const nav = document.querySelector('.header-top');

function toggleMobileNav() {
  navToggleBtn.classList.toggle('mobile-nav-toggle--active');
  body.classList.toggle('fixed');
  nav.classList.toggle('header-top--mobile');
}

navToggleBtn.addEventListener('click', toggleMobileNav);
