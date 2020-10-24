import menuArrayList from './templates/menuArrayList.hbs';
import menu from './menu.json';
import './styles.css';
// import { onCheckClass, onDarkToggle } from './js/localStorage';

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



function onChangeTheme(e) {
  // e.preventDefault();
  if (e.target === toggleRef) {
    bodyRef.classList.toggle(Theme.LIGHT);
    bodyRef.classList.toggle(Theme.DARK);
  }
  onCheckClass();
}

function onCheckClass(e) {
  const lightTheme = bodyRef.classList.contains(Theme.LIGHT);
  const darkTheme = bodyRef.classList.contains(Theme.DARK);
  if (lightTheme) {
    localStorage.setItem('theme', Theme.LIGHT);
    // localStorage.removeItem('theme');
  }
  if (darkTheme) {
    localStorage.setItem('theme', Theme.DARK);
    // localStorage.removeItem('theme');
  }
}

function createMenuMarkup(menu) {
  // return menu.map(menuItem => menuListTpl(menuItem)).join('');
  // return menu.map(menuListTpl).join('');
  return menuArrayList(menu);
}

const checkTheme = () => {
  const color = localStorage.getItem('theme');
  if (color === Theme.DARK) {
    toggleRef.checked = true;
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
  }
}
  checkTheme();
