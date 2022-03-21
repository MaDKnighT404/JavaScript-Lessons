let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {    // проверяет аргумент и если это не число - возвращает true
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastWathingFilm = prompt("Один из последних просмотренных фильмов?","");
        const raitOfFilm = +prompt("Насколько оцените его?","");
        if (lastWathingFilm != '' && lastWathingFilm != null && lastWathingFilm.length <10 &&
            raitOfFilm != '' && raitOfFilm != null) {
            personalMovieDB.movies[lastWathingFilm] = raitOfFilm;
            console.log('done');
        } else {
            console.log('error')
            i--;
        }
    }

}
rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count >= 1 && personalMovieDB.count < 10) {
        console.log('Просмотренно довольно маль фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log ('Вы классический зритель');
    } else if (personalMovieDB.count >=30) {
        console.log ('Вы киноман!');
    } else {
        console.log ('Вы вообще ничего не смотрели?');
    }
}
detectPersonalLevel();


function ShowMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
ShowMyDB ();


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const favoriteGenres = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = favoriteGenres;
       // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);   // Можно вместо 64-65 оставить только 66
    }
}
writeYourGenres();




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


// const myName = 'geORge'.toUpperCase();
// const myLowerName = myName.toLowerCase(); 
// console.log(myName);
// console.log(myLowerName);



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



