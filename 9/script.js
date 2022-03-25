
// способ редко используется!!!
// const btn = document.querySelector('#btn');  // к конкретному элементу можно обратится по id
// const btn = document.querySelector('button');   // к первому элементу с тэгом button
// const btn = document.querySelectorAll('button'); // создать массив из всех элементом с тэгом button

// btn[1].onclick = function () {    // повесить обработчик событий на второй элемент
//     alert('превед');
// };



// Правильный способ:

// const btn = document.querySelector('#btn');

// btn.addEventListener('click', () => {  // первый аргумент - название события(без on), второй - колбэк функция
//     alert('превед');
// });   

// btn.addEventListener('mouseenter', () => {  // наведение курсора мыши на кнопку
//     console.log('Наведение на кнопку!!!');   // 
// }); 

//внутрь колбек функции помещают специальный объект - event. Называться может как угодно.
// если нам нужены ещё другие аргументы, то пишем их туда через проблем после ивента.
// btn.addEventListener('mouseenter', (event) => {  // наведение курсора мыши на кнопку
//     console.log('Наведение на кнопку!!!');
//     console.log(event);  // получится огромный объект с большим количеством свойств.
//     console.log(event.target); // вот так можно обратится к свойству target и узнать название объекта.
//     event.target.remove(); // можно удалить этот объект
// }); 





// результат действия функции можно присвоить переменной
// const btn = document.querySelector('#btn');
// const deleteElement = (event) => {
//     // console.log(event.target);
//     event.target.remove();
// };

// btn.addEventListener('click', deleteElement);


// removeEventListener вызывается в каком-то условии когда обработчик событий больше не нужен.
// событие выполнится только один раз, а потом Eventlistener удалится. 
// ВАЖНО!!! Можно заменить с помощью 3 аргумента у addEventListener:
// btn.addEventListener('click', deleteElement, {once:true});




// let i = 0;
// const btn = document.querySelector('#btn');

// const deleteElement = (event) => {           // функция для удаление элмента, после использования i раз 
//     console.log(event.target);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener('click', deleteElement);
//     }
// };

// btn.addEventListener('click', deleteElement);





//всплытие событий. Когда обработчик событий сначала отрабатывает на самом вложенном элеменете и дальше до родителя. 
// Когда действие срабатывает сначала на дочернем элементе, а потом и на родительском. 
// и ссылаемся на элемент который и привел к возникновению события. Дважды получается. 
// const btn = document.querySelector('#btn');

// const overlay = document.querySelector('.overlay');

// const deleteElement = (event) => {
//     console.log(event.currentTarget);  // currentTarget так можно ссылаться на кнопку, а потом и на оверлей!!! 
//     console.log(event.type);
// };

// overlay.addEventListener('click', deleteElement);
// btn.addEventListener('click', deleteElement);  






// чтобы отменять стандартные поведения браузера
// переход по ссылке

// const link = document.querySelector('a');

// // СУПЕР ВАЖНО!!!
// link.addEventListener('click', (event) => {
//     event.preventDefault();// записывается в самое начало ВСЕГДА. Отменяем станд.повед.
//     console.log(event.target);  // выводим в консоль значения свойства target у объекта event
// });






// ЕЩЁ СУПЕР ВАЖНО: у псевдомассивов нет метода addEventListener !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// т.е. если мы его получаем с помощью querySelectorAll - , то метода addEventListener у него нет!!!
// поэтому надо все элементы перебрать ( с помощью forEach) и навесить на каждый из них addEventListener


// const btns = document.querySelectorAll('button');


// const deleteElement = (event) => {
//     console.log(event.currentTarget);  // currentTarget так можно ссылаться на кнопку, а потом и на оверлей!!! 
//     console.log(event.type);
// };

// btns.forEach(item => {
//     item.addEventListener('click', deleteElement, {once: true});
// });



// с помощью третьего параметра у addEventListener, который нахывается option, мы можем сделать так, чтобы этот Listner
// сработал только один раз!
// btns.forEach(item => {
//     item.addEventListener('click', (event) => {console.log(event.target);}, {once: true});
// });







