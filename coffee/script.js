/** @format */

const menuOpen = document.querySelector('#menuOpen');
const menuClose = document.querySelector('#menuClose');

menuOpen.addEventListener('click', () => {
  document.body.classList.toggle('show-menu');
});
menuClose.addEventListener('click', () => menuOpen.click());

// Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
