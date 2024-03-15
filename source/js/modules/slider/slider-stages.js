const sliderStages = (container) => {
  const breakpoint = window.matchMedia('(max-width:767px)');
  let stagesSlider;
  let settings = {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.slider--stages .btn--next',
      prevEl: '.slider--stages .btn--prev',
    },
    pagination: {
      el: '.slider--stages .slider__pagination',
      type: 'bullets',
    },
  };

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      stagesSlider = new window.Swiper(container, settings);

      return stagesSlider;
    } else if (stagesSlider) {
      return stagesSlider.destroy(true, true);
    } else {
      return '';
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {sliderStages};
