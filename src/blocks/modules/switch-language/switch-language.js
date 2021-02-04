const openLanguages = document.querySelector('.switch-language__open-list');
const languageList = document.querySelector('.switch-language__choice');

openLanguages.addEventListener('click', () => {
  openLanguages.classList.toggle('active');
  languageList.classList.toggle('active');
});
