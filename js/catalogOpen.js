var catalog = document.querySelector('.header-middle__catalog');
var menu = document.querySelector('.header-bottom__list');
// var item1 = menu.querySelector('.header-bottom__item-1');
// var item2 = menu.querySelector('.header-bottom__item-2');

menu.classList.add('visually-hidden');

catalog.addEventListener('click', function(evt) {
    evt.preventDefault();
    menu.classList.toggle('visually-hidden');
})

// document.addEventListener('mouseup', function(e) {
//     if (e.target != menu && e.target != item1 && e.target != item2) {
//       menu.classList.add('visually-hidden');
//     }
//   });
/*
Эта часть кода должна закрывать всплывающее меню по щелчку вне его, по документу
она так и работает, но так же закрывает его по клику на элементы меню - 
как включить их в исключения все,header-bottom__item, не знаю
единственный способ: увеличить паддинг ссылок, каждой задать класс,
e.target != этот класс, но что если ссылок будет больше.
хотелось бы найти более гибкое решение
*/

