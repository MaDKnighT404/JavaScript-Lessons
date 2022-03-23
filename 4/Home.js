const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {    // проверяет аргумент и если это не число - возвращает true
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const lastWathingFilm = prompt("Один из последних просмотренных фильмов?","");
            const raitOfFilm = +prompt("Насколько оцените его?","");
            if (lastWathingFilm != '' && lastWathingFilm != null && lastWathingFilm.length <10 &&
                raitOfFilm != '' && raitOfFilm != null) {
                personalMovieDB.movies[lastWathingFilm] = raitOfFilm;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count >= 1 && personalMovieDB.count < 10) {
            console.log('Просмотренно довольно маль фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log ('Вы классический зритель');
        } else if (personalMovieDB.count >=30) {
            console.log ('Вы киноман!');
        } else {
            console.log ('Вы вообще ничего не смотрели?');
        }
    },
    ShowMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const favoriteGenres = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[i - 1] = favoriteGenres;
            if (favoriteGenres == '' || favoriteGenres == null) {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = favoriteGenres;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i + 1} - это ${item}`);
        });
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB ();
personalMovieDB.ShowMyDB ();
personalMovieDB.writeYourGenres();















// два других варианта циклов

// let i = 0;

// while (i<2) {
//     const lastWathingFilm = prompt("Один из последних просмотренных фильмов?","");
//     const raitOfFilm = +prompt("Насколько оцените его?","");
//     if (lastWathingFilm != '' && lastWathingFilm != null && lastWathingFilm.length <10 &&
//         raitOfFilm != '' && raitOfFilm != null) {
//         personalMovieDB.movies[lastWathingFilm] = raitOfFilm;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// }
// console.log(personalMovieDB);


// let i = 0;
// do {
//     const lastWathingFilm = prompt("Один из последних просмотренных фильмов?","");
//     const raitOfFilm = +prompt("Насколько оцените его?","");
//     if (lastWathingFilm != '' && lastWathingFilm != null && lastWathingFilm.length <10 &&
//         raitOfFilm != '' && raitOfFilm != null) {
//         personalMovieDB.movies[lastWathingFilm] = raitOfFilm;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// }
// while (i<2);
// console.log(personalMovieDB);




















// условия

// const num = 500;

// if (num == 45) {
//     console.log('Not Ok!');
// } else if (num == 50) {
//     console.log('Ok!');
// } else {
//     console.log('not');
// } 

// num == 50 ? console.log('good') : console.log('Not good')


// switch (num) {
//      case 49:
//          console.log('net');
//          break;
//      case 50:
//         console.log('da');
//         break;
//      case 500:
//         console.log('net500');
//         break;
// }



// циклы

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for (let i = 1; i <= 10; i++) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i <= 10; i++) {
//     if (i == 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }




// функции

// let num = 20

// function showFirstMessage(text) {
//     console.log('text');
//     let num = 26;   //если убрать let, то будет другой результат
//     console.log(num);
// }

// showFirstMessage('Hello!')
// console.log(num);


// function getlog (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(a+b);
//     c = 15;
//     console.log(c + 5 + d);
//     console.log(d);
//     return console.log(a+b+c+d);
// }
// const d = 35;
// getlog(5,6);


// колбек функции

//первый способ

// function learnJS(lang, callback) {
//     console.log (`Я учу: ${lang}`);
//     callback();
// }

// learnJS('JavaScript', function() {
//      console.log('Я прошёл этот урок!');
// });


//второй способ

// function learnJS(lang, callback) {
//     console.log (`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошёл этот урок!');
// }

// learnJS('JavaScript', done);




// const myName = 'geORge'.toUpperCase();
// const myLowerName = myName.toLowerCase(); 
// console.log(myName);
// console.log(myLowerName);





// обрезаем строки и округляем числа

// const city = 'Sochi is the best city in the world!!!';
// console.log(city.indexOf('best'));

// let city = 'Sochi is the best';
// if (city.indexOf('q') == -1) {     // Если такого символа нет в строке, то результат равен -1
//     city = 'Moscow';
// }
// console.log(city);



// const greetings = 'Hello beautiful World!';

// console.log(greetings.slice(6,15));   // вырезает из строки текст. Два аргумента. Начало и конец. Отчет символовом с нуля!. 
// //                                       Последний аргумент - не включает тот символ, т.е надо делать +1 
// console.log(greetings.slice(6));   // Если аргумент один - то начиная с него и до конца всё вырежется. 
// console.log(greetings.slice(-7, -1));  // Можно использовать отрицательные значения. Тогда отчет справо будет и начинается с 1!


// const greetings = 'Hello beautiful World!';
// console.log(greetings.substring(17,9));  // тоже самое, что и slice. Только не поддерживает отрицательные числа и 
//                                             первый аргумент может быть больше второго 


// const greetings = 'Hello beautiful World!';
// console.log(greetings.substr(6, 9));   // Первый аргумент - начала вырезания, второй - сколько символом отрезать после него. 


// console.log(Math.round(12.4441));   // Округляет число до целового. 
// console.log(parseInt('15.01 12 13'));  // Можно перевести строку в число и округлить.
// console.log(parseFloat('15/12 13.13'));  // Можно перевести строку в число даже с дробной частью.






// Объекты 
// перебор свойств. Создание метода для объекта. 

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         background:'Red'
//     },
//     makeTest: function() {           // создание нового метода makeTest, который будет доступен для этого объкта.
//         console.log('test');
//     }
// };

// options.makeTest();  // Запускаем новый метод

// //деструктуризация объекта. 

// const {border,background} = options.colors; //Вытащить свойства из вложенного объекта в качестве отдельной переменной.
// console.log(border);  // теперь border - это переменная, которая содержит значение black


// console.log(options);
// delete options.colors.border;
// console.log(options);

// for (let key in options) {             // для перебора свойств объекта. 
//     if (typeof(options[key]) === 'object') {   // для перебора вложенного объекта
//         for (let subKey in options[key] ) {    // создаем еще один перебор
//             console.log(`Свойство ${subKey} имеет значение ${options[key][subKey]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);    // будем получает значение ключа, который перебирается в свойствах ${key}
//     }
// }

// console.log(Object.keys(options).length);  // создаём из объекта массив, в котором свойства объкта 
// //                                            занимают порядковый индекс в масиве. Если добавить length,
// //                                            то узнаем количество свойств в этом новом массиве




//массивы

// const arr = [1, 5, 6, 8, 15];

// arr.pop();  // метод удаляет последний элемент массива.
// arr.push('George', 25, []); // метод добавляет конкретные элементы в конец массива
// arr.shift();    // !!!удаляет первый элемент массива. Редко используется потому что у всех последующих элементов меняется индекс
// arr.unshift(1555); //!!!добавляется в начало массива конекретный элемент. Редко используется как и shift

//перебор массива

// for (let i = 0; i < arr.length; i++) {   // !!!Можно с помощью for, но для массивов есть свои методы перебора!!!
//     console.log (arr[i]);
// }

// for (let value in arr) {        // переберёт индексы массива: 0,1,2,3,4
//     console.log(value);
// }

// for (let value of arr) {          // переберёт значения индексов: 1,5,6,8,15
//     console.log(value);
// }

// нормальные методы перебора массива

// const arr = [1, 5, 6, 8, 15];

// arr.forEach(function(item, index, arr) {   // item - значение свойств. index - значение индекса. arr - название массива
//     console.log(`${index}: ${item} в массиве ${arr}`);
// });


// метод split . Превращает строку в массив. Нужно указаталь в скобках как будет выглядеть разделитель!

// const str = prompt('', '');
// const products = str.split(', ');  // Указать через какой разделить будут находится элементы в строке.
// console.log(products);


// метод Join. Объдиняет элементы массивы и создаёт из них строку. Нужно указаталь в скобках как будет выглядеть разделитель!

// const str = ['молоко', 'хлеб', 'сметана', 'курица'];
// const products = str.join('; ');  // Указать через какой разделить будут находится элементы в строке.
// console.log(products);


// метод sort. Соритирует элементы в алфавитном порядке. По умолчанию сравнение идёт по символьно. 
// const str = [3,'молоко', 'хлеб', 'сметана', 'курица', 1, 15];
// const products = str.sort();  
// console.log(products);

// но можно в метод sort добавить специальную коллбек функцию.
// const arr = [3, 55, 23, 'хлеб', 5, 7, 1, 15];
// arr.sort(compareNum); 
// console.log(arr);

// function compareNum (a, b) {
//     return a - b;
// } 




// мутации объектов

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

// copy.a = 10;
// console.log(copy);
// console.log(obj);  // значение свойства a измениться, потому что мы копируеме не объект, а ссылку на него.

// как копировать объекты правильно?

// первый способ с помощью цикла for in
// function copy(mainObj) {
//     let objCopy ={};
//     for (let key in mainObj) {
//          objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 11,
//     b: 5,
//     c: {
//         x:9,
//         y:3
//     }
// };

// const newNumbers = copy(numbers);  // Поверхностная копия ( без вложенных объектов )
// newNumbers.b = 33;
// newNumbers.c.x = 15;  // !!!Для вложенных обеъктов поменяется значение и оригинального!!!

// console.log(numbers);
// console.log(newNumbers);


// второй способ с помощью obj.assign. Позволяет соеденять объекты. Тоже поверхностаная копия. Не глубокая

// const numbers = {
//     a: 11,
//     b: 5,
//     c: {
//         x:9,
//         y:3
//     }
// };

// const numbers2 = {
//     d: 25,
//     e: 33,
//     f: {
//         m: 6,
//         n: 44
//     }
// };

// Object.assign (numbers, numbers2); // Первый аргумент - объект куда помещается второй объкт из второго аргумента. 

// console.log(numbers);

// // а чтобы скопировать объект можно первый аргумент указать в качестве пустого объекта.

// const numbers3 = Object.assign ({}, numbers2);
// numbers3.e = 'Good';
// numbers3.f.m = 'hello'; // так же мутирует основной объект.

// console.log(numbers2);
// console.log(numbers3);



// Копии массивов. Можно воспользоваться циклами, но есть специальный метод для этого.

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();  // без метода slice создаться только ссылка на массив.
// newArray[3] = 5;
// console.log(oldArray);
// console.log(newArray);


// Создание копий с помощью оператора spread ( оператор разворота, появился в ES8). Работает и для объектов

// для массивов
// const oldArray = ['a', 'b', 'c'];
// const newArray = [...oldArray];
// newArray[3] = 5;
// console.log(oldArray);
// console.log(newArray);

// // для объектов

// const obj = {
//     one: 1,
//     two: 2,
//     three: {
//         nine: 9,
//         ten: 10
//     }
// };

// const newObj = {...obj};
// newObj.three.nine = 55;   // тоже поверхностная копия.

// console.log(obj);
// console.log(newObj);



// // что еще можно делать с помощью spread оператора?


// const fruits = ['apple', 'orange', 'banana'];
// const vegetables = ['carrot', 'tomato', 'onion'];
// const food = [...fruits, ...vegetables,  'bread', 'milk'];//троеточие - это spread оператор, который перенесет все свойства массива

// console.log(food);




// function data(a, b, c) {   // Можно с помощью spread оператора разложить массив на свойства и отправить их в функцию в качестве аргументов
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [1, 7, 15];

// data(...num);


// создание прототипов

//старый и не используемый метод!

// const soldier = {
//     health: 300,
//     armor: 200
// };

// const soldierJohn = {
//     health: 100
// };

// soldierJohn.__proto__ = soldier;  // Ставим soldier прототипом для переменной soldierJohn

// console.log(soldierJohn.armor); // теперь с помощью точки можно обратится к свойству прототипа у переменной.


// новый метод

// так можно делать если у нас уже существуют объекты и им надо задать связь прототип-дочерний элемент.

// const soldier = {
//     health: 300,
//     armor: 200
// };

// const soldierJohn = {
//     health: 100
// };

// Object.setPrototypeOf(soldierJohn, soldier);  // первый аргумент тут - объект, которому будет назначен прототип, второй аргумент - используемый прототип

// console.log(soldierJohn.armor);



// так делаем когда хотим создавать новые объекты из прототипа. 

// const soldier = {
//     health: 300,
//     armor: 200
// };

// const soldierJohn = Object.create(soldier);  // создаем новый объект soldierJohn, который будет прототипно наследоваться от soldier
// console.log(soldierJohn.armor);