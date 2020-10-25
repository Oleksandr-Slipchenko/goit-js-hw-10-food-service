
import menuArrayList from '../templates/menuArrayList.hbs';
import menu from '../menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const changeThemeRef = document.querySelector('.theme-switch');
const toggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const menuRef = document.querySelector('.js-menu');

changeThemeRef.addEventListener('change', onChangeTheme);
menuRef.insertAdjacentHTML('afterbegin', createMenuMarkup(menu));

bodyRef.classList.add(Theme.LIGHT);

// Добавление класа Theme на body

function onChangeTheme(e) {
  e.preventDefault();
  if (e.target === toggleRef) {
    bodyRef.classList.toggle(Theme.LIGHT);
    bodyRef.classList.toggle(Theme.DARK);
  }
  onCheckClass();
}

// // Запись выбранной Theme в localStorage

function onCheckClass(e) {
  const lightTheme = bodyRef.classList.contains(Theme.LIGHT);
  const darkTheme = bodyRef.classList.contains(Theme.DARK);
  if (lightTheme) {
    localStorage.setItem('theme', Theme.LIGHT);
  }
  if (darkTheme) {
    localStorage.setItem('theme', Theme.DARK);
  }
}

// Добавление шаблона разметки

function createMenuMarkup(menuList) {
  return menuArrayList(menuList);
}

// Проверка, что за Theme записана в localStorage после обновления страницы.
// Ставит соответствующую Theme

const checkTheme = () => {
  const color = localStorage.getItem('theme');
  if (color === Theme.DARK) {
    toggleRef.checked = true;
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
  }
}
  checkTheme();