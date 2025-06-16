const API_PEOPLE_ENDPOINT = "/api/people";

// Hamburger menu, als je erop klikt dan ->
document.querySelector('.menu-button').addEventListener('click', function(ev) {
  document.querySelector('.header-nav').classList.add('target')
  document.querySelector('.header-nav-container').classList.add('show')
  document.querySelector('.menu-close').classList.add('show')
  document.querySelector('.header-nav').focus();
  ev.preventDefault();
})

// Hamburger menu, als je op kruisje klikt dan ->
document.querySelector('.menu-close').addEventListener('click', function(ev) {
  document.querySelector('.header-nav').classList.remove('target')
  document.querySelector('.header-nav-container').classList.remove('show')
  document.querySelector('.menu-close').classList.remove('show')
  document.body.focus();
  ev.preventDefault();
})
