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


// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  
  const target = event.target;
  const link = target.dataset.link;
  if( link == null ) {
    return;
  }

  console.log(event.target.dataset.link)
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: 'smooth'});

})
// // Home
// const navHome = document.querySelector('.navHome');
// const home = document.querySelector('#home');

// navHome.addEventListener('click', () => {
//   home.scrollIntoView();
// })

// // About
// const navAbout = document.querySelector('.navAbout');
// const about = document.querySelector('#about');

// navAbout.addEventListener('click', () => {
//   about.scrollIntoView();
// })
// // Skills
// const navSkills = document.querySelector('.navSkills');
// const skills = document.querySelector('#skills');

// navSkills.addEventListener('click', () => {
//   skills.scrollIntoView();
// })
// // My work
// const navWork = document.querySelector('.navWork');
// const work = document.querySelector('#work');

// navWork.addEventListener('click', () => {
//   work.scrollIntoView();
// })

// // Testimonial
// const navTestimonial = document.querySelector('.navTestimonial');
// const testimonial = document.querySelector('#testimonial');

// navTestimonial.addEventListener('click', () => {
//   testimonial.scrollIntoView();
//   console.log('testimonial ')
// })


// // Contact
// const navContact = document.querySelector('.navContact');
// const contact = document.querySelector('#contact');

// navContact.addEventListener('click', () => {
//   contact.scrollIntoView();
// })

// Contact me
const contactMe = document.querySelector('.home__contact');
const contact = document.querySelector('#contact');
contactMe.addEventListener('click', () => {
  contact.scrollIntoView({behavior: 'smooth'});
  console.log('ok')
})
