const sliderUsers = (container) => new window.Swiper(container, {
  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.users__header .btn--next',
    prevEl: '.users__header .btn--prev',
  },

  pagination: {
    el: '.users__header .slider-pagination',
    type: 'fraction',
    renderFraction(currentClass, totalClass) {
      return `<span class=" ${currentClass} "></span> / <span class=" ${totalClass} "></span>`;
    },
  },
});

export {sliderUsers};
