'use strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  // console.log(`navbarHeight : ${navbarHeight}`);

  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
})

// navbar toggle is open when it is clicked
// const toggle = document.querySelector('.navbar__toggle-btn');
// const navMenu = document.querySelector('.navbar__menu');
// toggle.addEventListener('click', () => {
//   if ( navMenu.style.display != 'none') {
//     navMenu.style.display = 'none';
//   } else {
//     navMenu.style.display = 'block';
//   }
//   console.log('ok');
// })

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if( link == null ) {
    return;
  }
  scrollIntoView(link);
})

// navbar toggle menu open&close
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
  console.log('ok');
})

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
})

// home transparent
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  const y = window.scrollY;
  const max = homeHeight;
  home.style.opacity = (max-y)/max
  // '(max-y)/max' 라고 써서 계속 안됐었음 ㅡㅡ
  // ''는 숫자, 문자
  }
)

// Arrow Up Btn 
const arrowBtn = document.querySelector('.arrow-up');
addEventListener('scroll', () => {
  if ( window.scrollY > homeHeight ) {
    arrowBtn.style.display = 'block'
  } else {
    arrowBtn.style.display = 'none'
  }
})

arrowBtn.addEventListener('click', () => window.scrollTo({
  top: 0,
  behavior: 'smooth',
}))

// Projects
const workBtnContainer = document.querySelector('.work__categories' );
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if ( filter == null) {
    return;
  };
  // Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target = 
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('anim-out')
  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type)
      if ( filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible')
      } else {
        project.classList.add('invisible')
      }
    })
    projectContainer.classList.remove('anim-out')
  }, 300)
 // 위와 다 같은 문법
  // for(let project of projects) {
  //   console.log(project);
  // }

  // let project;
  // for(let i = 0; i < projects.length; i++) {
  //   project = projects[i];
  //   console.log(project);
  // }
});

// function scrollIntoView -> 반복되는 함수 방지
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}

// 1. 모든 섹션 요소들을 가지고 온다
// 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.

const sectionIds = ['#home', '#about', '#skills', '#work', '#testimonials', '#contact'];

const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`))
console.log(sections);
console.log(navItems);

const observerOptions = {
  root : null,
  rootMargin: '0px',
  threshold: 0.3,
}

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    console.log(entry.target);
  })
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

// // intersection observer when scroll into specific page
// const items = document.querySelectorAll('.navbar__menu__item');
// const options = {
//   root: null, //viewport
//   rootMargin: '0px',
//   threshold: 0.5, // 0~1 (100%)
// };
// const callback = (entries, observer) => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting) {
//       entry.target.classList.add('active')
//       console.log(entry.target);
//     } else {
//       entry.target.classList.remove('active');
//       console.error(entry.target);
//     }
//   })
// }