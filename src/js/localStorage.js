
// Запись выбранной Theme в localStorage

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