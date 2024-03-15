import {sliderStages} from './slider-stages';
import {sliderUsers} from './slider-users';

const sliderContainers = document.querySelectorAll('[data-slider]');

const initSetupSwiper = (type, container) => {
  switch (type) {
    case 'stages':
      sliderStages(container);
      break;
    case 'users':
      sliderUsers(container);
      break;
  }
};

const initSlider = () => {
  sliderContainers.forEach((it) => {
    const type = it.dataset.slider;
    initSetupSwiper(type, it);
  });
};

export {initSlider};
