'use strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  console.log(`navbarHeight : ${navbarHeight}`);

  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark')
  }
})

// scrollTo
const location = document.querySelector(".about").offsetTop;
const about = document.querySelector('.about');

window.scrollTo({top: location, behavior:'smooth'});


document.addEventListener('onclick', () => {
  window.scrollBy(0, 100);
})
