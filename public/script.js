const API_PEOPLE_ENDPOINT = "/api/people";

document.querySelector('.menu-button').addEventListener('click', function(ev) {
  document.querySelector('.footer-nav').classList.add('target')
  document.querySelector('.footer-nav-container').classList.add('show')
  document.querySelector('.menu-close').classList.add('show')
  document.querySelector('.footer-nav').focus();
  ev.preventDefault();
})

document.querySelector('.menu-close').addEventListener('click', function(ev) {
  document.querySelector('.footer-nav').classList.remove('target')
  document.querySelector('.footer-nav-container').classList.remove('show')
  document.querySelector('.menu-close').classList.remove('show')
  document.body.focus();
  ev.preventDefault();
})
