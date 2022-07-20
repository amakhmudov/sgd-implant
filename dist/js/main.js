const firstSwiper = new Swiper(".first-swiper", {
  speed: 900,
  grabCursor: true,
  autoHeight: true,
  mousewheel: true,
  keyboard: true,
  spaceBetween: 24,

  pagination: {
    el: ".first-swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    640: {
      spaceBetween: 96,
    },
  },
});

const slideSwiper = new Swiper(".slide-swiper", {
  speed: 900,
  grabCursor: true,
  autoHeight: true,
  mousewheel: true,
  keyboard: true,
  slidesPerView: 1,
  spaceBetween: 40,
  centeredSlides: true,

  pagination: {
    el: ".slide-swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    480: {
      slidesPerView: 2,
    },

    640: {
      slidesPerView: 3,
    },
  },
});
