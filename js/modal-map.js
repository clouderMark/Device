var map = document.querySelector('.contacts__map-link');
var modalMap = document.querySelector('.modal-map');
var close = modalMap.querySelector('.modal-close');

map.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalMap.classList.add('modal-show');
})

close.addEventListener('click', function(evt){
    evt.preventDefault();
    modalMap.classList.remove('modal-show')
})

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (modalMap.classList.contains('modal-show')) {
        evt.preventDefault();
        modalMap.classList.remove('modal-show');
      }
    }
  })