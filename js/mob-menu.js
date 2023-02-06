const ham = document.querySelector('.ham');
const x = document.querySelector('.x');
const mobMenu = document.querySelector('.menu');

// Mobile menu
ham.addEventListener('click', () => {
  mobMenu.classList.toggle('active-menu');
});
x.addEventListener('click', () => {
  mobMenu.classList.toggle('active-menu');
});