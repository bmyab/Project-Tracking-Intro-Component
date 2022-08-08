const menu = document.querySelector('.icons');
const close = document.querySelector('.close');
const hamburguer = document.querySelector('.hamburger');
const links = document.querySelector('.links');

menu.addEventListener('click', () => {
  links.classList.toggle('hide');
  close.classList.toggle('hide');
  hamburguer.classList.toggle('hide');
  
});