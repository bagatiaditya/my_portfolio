// Toggle mobile menu
const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  navLinks.classList.toggle('active');
});
