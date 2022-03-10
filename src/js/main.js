const arrow = document.querySelector('.arrow-up');
const links = document.querySelectorAll('.nav__link');
const menu = document.querySelector('.header__menu-icon');

menu.addEventListener('click', () => {
  menu.classList.toggle('bx-x');
});

arrow.addEventListener('click', () => {
  window.scrollTo({
    behavior: 'smooth',
    top: 0,
  });
});

links.forEach((l) => {
  l.addEventListener('click', () => {
    removeLinkActive();
    l.classList.add('active');
  });
});

const removeLinkActive = () =>
  links.forEach((l) => l.classList.remove('active'));

function scrollActive() {
  var y = window.scrollY;
  let intViewportHeight = window.innerHeight;

  if (y < intViewportHeight) {
    links[0].classList.add('active');
  } else links[0].classList.remove('active');

  if (y >= intViewportHeight && y < intViewportHeight * 2) {
    links[1].classList.add('active');
  } else links[1].classList.remove('active');

  if (y >= intViewportHeight * 2) {
    links[2].classList.add('active');
  } else links[2].classList.remove('active');
}

window.addEventListener('scroll', scrollActive);
