const hamburgerBtn = document.querySelector('.toggle-menu');

const toggledMenu = () => {
  const flag = hamburgerBtn.classList.contains('active');
  hamburgerBtn.classList.toggle('active');
  if (!flag) {
    hamburgerBtn.classList.add('not-active');
    hamburgerBtn.setAttribute('aria-label', 'Открыть мобильное меню');
  }
  hamburgerBtn.classList.toggle('not-active');
  hamburgerBtn.setAttribute('aria-expanded', !flag);
  hamburgerBtn.setAttribute('aria-label', 'Закрить мобильное меню');
};

hamburgerBtn.addEventListener('click', toggledMenu);

