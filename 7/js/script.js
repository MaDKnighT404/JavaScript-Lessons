"use strict";

const box = document.getElementById('box');
const buttons = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');


// чтобы добавить инлайн стили к элементам: (инлайн стили - самые важные по приоритету)
// используются редко. Чаще изменяют сами классы у элементов с помощью JS 

// box.style.backgroundColor = '#fab'; // указываем значения точно такое же как и в CSS. Можно просто 'pink'
// box.style.width = '500px';  // тоже самое. Указываем точное значение с единицами измерения. 

// для того, чтобы добавить несколько значений используем cssText
// box.style.cssText = 'background-color: #fab; width: 500px'; // свойство и значение в виде строки. Такое же как и в CSS

// можно вместо значений указать переменную:
// const num = 500;
// box.style.cssText = `background-color: #fab; width: ${num}px`;

// // обращаемся к 3-ей кнопке из псевдомассива:

// buttons[2].style.borderRadius = '100%';


// ничего не произойдет, потому что мы обращаемся к псевдомассиву, а не конкретному элементу
// нужно обязательно указывать индекс из этого массива для нужного элемента:
// circles.style.backgroundColor = 'red'; 



// для того, чтобы обратится ко всем элементам из массива:
// используем цикл, for off или forEach

// Циклы почти не используются.
// for (let i = 0; i < hearts.length; i++) {  // hearts.lenght - значение соответствующее длине массиве. Т.е все его элементы
//     hearts[i].style.backgroundColor = 'purple';
// }

//Используем forEach !!!!!
// hearts.forEach(item => item.style.backgroundColor = 'yellow'); // каждому значению индекса у псевдамассива добавляем свойство




// создаем новые элементы!!!

// const newDiv = document.createElement('div');  // Элемент div создан и находится только внутри JS !!!
// // const text = document.createTextNode('kdsjhafkjh'); // Почти не используется. Создаём текст, который ничем не обернут 

// //Изменяем свойства и значения классов

// newDiv.classList.add('black'); // добавляем новому диву класс black

// document.body.append(div); // добавляем наш див в конец тэга body. Нужно обязательно указывать родителя.

// wrapper.append(newDiv); // добавляем наш див в конец первого элемента, у которого есть класс wrapper
// wrapper.prepend(newDiv); // добавляем наш див в начало первого элемента, у которого есть класс wrapper
// hearts[1].before(newDiv); // добавляем наш див перед вторым элементом в псевдомассиве hearts
// hearts[2].after(newDiv); // добавляем наш див после третьего элементом в псевдомассиве hearts

// circles[1].remove();  // удаляет второй элемент из псевдомассива.


// hearts[1].replaceWith(circles[1]);  // поменять местами два элемента



// старый метод для взаимодействия

// wrapper.insertBefore(newDiv, hearts[1]);  // первый аргумент - элемент, который будем вставлять
// //                                           второй аргумент - перед каким элементов он будет вставлен

// wrapper.removeChild(hearts[1]); // старый метод удаления элемента

// wrapper.replaceChild(circles[1], hearts[1]); // старый метод замены



// добавление текста в элементы 

// const newDiv = document.createElement('div');
// newDiv.classList.add('black');
// wrapper.append(newDiv);

// newDiv.innerHTML = 'Hello George!'; // добавится текст в новый див
// newDiv.innerHTML = '<h1>Hello George!</h1>'; // можно обернуть в новый тэг

// newDiv.textContent = 'Жора!'; // второй метод добавления текста. Добавляет ТОЛЬКО текст 
//    нужен для безопасности, чтобы пользователь случайно или специально  не смог вписать html код через инпут окно



// добавляем кусок кода html !!!

// const newDiv = document.createElement('div');
// newDiv.classList.add('black');
// wrapper.append(newDiv);

// newDiv.innerHTML = 'Hello George!';

// newDiv.insertAdjacentHTML('afterend', '<h2>WORLD фывыв фыв фв</h2>');  //второй аргумент - html код который мы хотим вставить
// // первый аргумент может принимать 4 значения: 
// // 1. beforebegin - вставляет код перед элементом
// // 2  afterend  - вставляет код после элемента. 
// // 3. afterbegin - вставляет код перед текстом внутри элемента
// // 4  beforeend - вставляет код после текста внутри элемента ( перед концом)



// Хитрость!!!

// const wrapper = document.querySelector('.wrapper');
// const hearts = wrapper.querySelectorAll('.heart');  // вот так можно использовать не сам document, а новый массив.