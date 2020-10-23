// import menuListTpl from './templates/menuList.hbs';
import menuArrayList from './templates/menuArrayList.hbs';
import menu from './menu.json';
import './styles.css';
// import { onCheckClass, onDarkToggle } from './js/localStorage';

// console.log(menuArrayList(menu));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const changeThemeRef = document.querySelector('.theme-switch');
const toggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const menuRef = document.querySelector('.js-menu');
const tagListRef = document.querySelector('.tag-list');

changeThemeRef.addEventListener('change', onChangeTheme);
menuRef.insertAdjacentHTML('afterbegin', createMenuMarkup(menu));
// tagListRef.insertAdjacentHTML('afterbegin', createMenuTagListMarkup(menu))

// console.log(menu.ingredients);

bodyRef.classList.add(Theme.LIGHT);

// console.log(bodyRef.classList.contains(Theme.LIGHT));

function onChangeTheme(e) {
  e.preventDefault();
  if (e.target === toggleRef) {
    bodyRef.classList.toggle(Theme.LIGHT);
    bodyRef.classList.toggle(Theme.DARK);
  }
  onCheckClass();
  onDarkToggle();
}

function onCheckClass(e) {
  const lightTheme = bodyRef.classList.contains(Theme.LIGHT);
  const darkTheme = bodyRef.classList.contains(Theme.DARK);
  if (lightTheme) {
    localStorage.setItem('themeLight', Theme.LIGHT);
    localStorage.removeItem('themeDark');
  }
  if (darkTheme) {
    localStorage.setItem('themeDark', Theme.DARK);
    localStorage.removeItem('themeLight');
  }
}

function onDarkToggle(e) {
  localStorage.getItem('themeDark') ? toggleRef.setAttribute('checked', 'true') : toggleRef.removeAttribute('checked');
  // if (localStorage.getItem('themeDark')) {
  //   // toggleRef.setAttribute('checked', 'true');
  //   e.target.checked;
  // }
  // // if (localStorage.getItem('themeLight')) {
  // //   toggleRef.removeAttribute('checked');
  // // }
}

function createMenuMarkup(menu) {
  // return menu.map(menuItem => menuListTpl(menuItem)).join('');
  // return menu.map(menuListTpl).join('');
  return menuArrayList(menu);
}
