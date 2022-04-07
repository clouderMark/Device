var button = document.querySelector('.contacts__button');
var write = document.querySelector('.modal-write');
var closeBtn = write.querySelector('.modal-close');

button.addEventListener('click', function(evt){
    evt.preventDefault();
    write.classList.add('modal-show');
})

closeBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    write.classList.remove('modal-show');
})

window.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
        if (write.classList.contains('modal-show')) {
            evt.preventDefault();
            write.classList.remove('modal-show');
        }
    }
})