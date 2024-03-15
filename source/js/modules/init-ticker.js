const initTicker = (speed) => {
  const parentSelectors = document.querySelectorAll('[data-ticker]');

  if (!parentSelectors) {
    return;
  }

  parentSelectors.forEach((it) => {
    const clone = it.innerHTML;
    const firstElement = it.children[0];
    let i = 0;
    it.insertAdjacentHTML('beforeend', clone);
    it.insertAdjacentHTML('beforeend', clone);

    setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  });
};

export {initTicker};
