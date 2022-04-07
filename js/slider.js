
var slider = document.getElementsByName("slider-one__toggle");
var num = 1;
var one = document.querySelector('.sl-one');
var two = document.querySelector('.sl-two');
var three = document.querySelector('.sl-three');


for (var i = 0; i < slider.length; i++) {
    slider[i].addEventListener('click', function() {
        var slide = document.querySelector('input[name="slider-one__toggle"]:checked');
        num = slide.value;
        if (num == 1) {
            one.classList.remove('visually-hidden');
            if (!two.classList.contains('visually-hidden')) {
                two.classList.add('visually-hidden');
            }
            if (!three.classList.contains('visually-hidden')) {
                three.classList.add('visually-hidden');
            }
        }
        if (num == 2) {
            two.classList.remove('visually-hidden');
            if (!one.classList.contains('visually-hidden')) {
                one.classList.add('visually-hidden');
            }
            if (!three.classList.contains('visually-hidden')) {
                three.classList.add('visually-hidden');
            }
        }
        if (num == 3) {
            three.classList.remove('visually-hidden');
            if (!one.classList.contains('visually-hidden')) {
                one.classList.add('visually-hidden');
            }
            if (!two.classList.contains('visually-hidden')) {
                two.classList.add('visually-hidden');
            }
        }
    })
}


















