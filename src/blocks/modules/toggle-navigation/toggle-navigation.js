const menu = document.querySelector('.toggle-navigation');
const siteNavigation = document.querySelector('.site-navigation');

const toggleNavigation = () => {
  menu.classList.toggle('toggle-navigation--open');
  const isShow = menu.classList.contains('toggle-navigation--open');
  const ariaExpanded = isShow ? 'true' : 'false';
  const ariaHiddenNavigation = isShow ? 'false' : 'true';
  const ariaLabel = isShow ? 'Закрыть меню навигации' : 'Открыть меню навигации';
  menu.setAttribute('aria-expanded', ariaExpanded);
  menu.setAttribute('aria-label', ariaLabel);
  // show in a11y tree site navigation
  // siteNavigation.setAttribute('aria-hidden', ariaHiddenNavigation);
};

menu.addEventListener('click', toggleNavigation);
