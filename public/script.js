const API_PEOPLE_ENDPOINT = "/api/people";

document.querySelector('.menu-button').addEventListener('click', function(ev) {
  document.querySelector('.header-nav').classList.add('target')
  document.querySelector('.header-nav-container').classList.add('show')
  document.querySelector('.menu-close').classList.add('show')
  document.querySelector('.header-nav').focus();
  ev.preventDefault();
})

document.querySelector('.menu-close').addEventListener('click', function(ev) {
  document.querySelector('.header-nav').classList.remove('target')
  document.querySelector('.header-nav-container').classList.remove('show')
  document.querySelector('.menu-close').classList.remove('show')
  document.body.focus();
  ev.preventDefault();
})
