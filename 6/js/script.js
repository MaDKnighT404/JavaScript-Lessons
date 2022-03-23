'use strict';

// СТАРЫЙ МЕТОД


//С помощью методов к объекту document можно обратиться к какому-либо элемунту по его id
// метод document существует только внутри браузера!

// const box = document.getElementById('box');
// console.log(box);





// выводит значение всех button из html странички
// в переменную buttons мы получаем псевдомассив. Это такой массив у которого нет методов (map, reduce и т.д.)
// const buttons = document.getElementsByTagName('button'); 
// console.log(buttons);

// const buttons = document.getElementsByTagName('button')[2]; // чтобы записать только конкретную кнопку. В данном случае 3
// console.log(buttons[2]); // ИЛИ можно записать все кнопки. (без [2] в 15 строке), а вот так обратиться к конкретной. 

// ВАЖНО!!! Если в html документы была бы только 1 кнопка, то создался бы псевдомассив с 1 элементом.
//          Тогда нельзя будет например поменять цвет у кнопки, потому что она стала значением массива.

// в таком случае можно сделать так:

// const buttons = document.getElementsByTagName('button'); 
// console.log(buttons[0]); 



// можно обратится также к классам:

// const circles = document.getElementsByClassName('circle');
// console.log(circles);


// НОВЫЙ МЕТОД!

// во внутрь круглых скобок помещаем CSS селектор!! Для классов ставим точку, для id решутку и т.д.

// const hearts = document.querySelectorAll('.heart'); // созданный псевдомассив будет иметь метод forEach !!!!!!!!!!!!!!!!!
// console.log(hearts);

// // hearts.forEach((item) => {      //можно так
// //     console.log(item);
// // });

// hearts.forEach(item => console.log(item));

// можно обратится только к одному элементу - первому:
// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);





