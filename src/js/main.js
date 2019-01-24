const menu = document.getElementById('menu-toggle')
const toggleMenu = document.getElementById('menu')
menu.addEventListener('click', function (e) {
  toggleMenu.classList.toggle('visible')
})