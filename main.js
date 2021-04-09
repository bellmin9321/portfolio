window.onscroll = scrollShowNav;
const nav = document.querySelector('#navbar')
const stickyTop = nav.offSetTop;

function scrollShowNav() {
  if (window.pageYOffset >= stickyTop) {
    nav.classList.add('fixed')
  } else {
    console.log('success')
    nav.classList.remove('fixed')
  }
}