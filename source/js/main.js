import {mobileVhFix} from './utils/mobile-vh-fix.js';
import {initSlider} from './modules/slider/init-slider.js';
import {initTicker} from './modules/init-ticker.js';
import {initDynamicAdaptive} from './modules/dinamic-adaptive/init-dynamic-adaptive.js';

window.addEventListener('DOMContentLoaded', () => {

  mobileVhFix();

  initSlider();
  initTicker(0.2);

  window.addEventListener('load', () => {
    initDynamicAdaptive();
  });
});
