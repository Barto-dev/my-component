const tooltips = document.querySelectorAll('[data-tooltip]');

if (tooltips) {
  const tooltip = document.createElement('span');
  tooltip.classList.add('tooltip');
  tooltip.innerText = 'q2wwqqwqw';
  document.body.insertAdjacentElement('beforeend', tooltip);

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', function (evt) {
      const visibleTooltip = document.querySelector('.tooltip');
      visibleTooltip.style.left = `${evt.screenX}px`;
      visibleTooltip.style.top = `${evt.screenY}px`;
    });
  });
}
