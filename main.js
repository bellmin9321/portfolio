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

// scrollIntoView

const navbarAbout = document.querySelector('.navAbout');
const about = document.querySelector('#about');

navbarAbout.addEventListener('click', () => {
  about.scrollIntoView();
  console.log('ok');
})
// document.addEventListener('click', () => {
//   console.log(`pageY : ${aboutHeight}`);
//   window.scrollTo(aboutHeight)

// })

// const location = document.querySelector(".about").offsetTop;
// const about = document.querySelector('.about');

// window.scrollTo({top: location, behavior:'smooth'});


// document.addEventListener('onclick', () => {
//   window.scrollBy(0, 100);
// })
