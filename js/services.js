var services = document.getElementsByName('services__toggle');
var count = 1;
var content1 = document.querySelector('.content-one');
var content2 = document.querySelector('.content-two');
var content3 = document.querySelector('.content-three');
var menuButton =document.querySelectorAll('.menu__button');

menuButton[0].style.background = 'black';


for (var i = 0; i < services.length; i++) {
    services[i].addEventListener('click', function() {
        var service = document.querySelector('input[name="services__toggle"]:checked');
        count = service.value;
        if (count == 1) {
            content1.classList.remove('visually-hidden');
            menuButton[0].style.background = 'black';
            menuButton[1].style.background = 'linear-gradient(transparent 33%, #f0c52e 33%,#f0c52e 66%, transparent 66%)';
            menuButton[2].style.background = 'linear-gradient(transparent 33%, #f0c52e 33%,#f0c52e 66%, transparent 66%)';

            if (!content2.classList.contains('visually-hidden')) {
                content2.classList.add('visually-hidden');
            }
            if (!content3.classList.contains('visually-hidden')) {
                content3.classList.add('visually-hidden');
            }
        }
        if (count == 2) {
            content2.classList.remove('visually-hidden');
            menuButton[1].style.background = 'black';
            menuButton[0].style.background = 'linear-gradient(transparent 33%, #f0c52e 33%,#f0c52e 66%, transparent 66%)';
            menuButton[2].style.background = 'linear-gradient(transparent 33%, #f0c52e 33%,#f0c52e 66%, transparent 66%)';

            if (!content1.classList.contains('visually-hidden')) {
                content1.classList.add('visually-hidden');
            }
            if (!content3.classList.contains('visually-hidden')) {
                content3.classList.add('visually-hidden');
            }
        }
        if (count == 3) {
            content3.classList.remove('visually-hidden');
            menuButton[2].style.background = 'black';
            menuButton[1].style.background = 'linear-gradient(transparent 33%, #f0c52e 33%,#f0c52e 66%, transparent 66%)';
            menuButton[0].style.background = 'linear-gradient(transparent 33%, #f0c52e 33%,#f0c52e 66%, transparent 66%)';

            if (!content1.classList.contains('visually-hidden')) {
                content1.classList.add('visually-hidden');
            }
            if (!content2.classList.contains('visually-hidden')) {
                content2.classList.add('visually-hidden');
            }
        }
    })
}






