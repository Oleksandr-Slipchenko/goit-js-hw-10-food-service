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

export { onCheckClass, onDarkToggle };