const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// for (let i = 0; i < 2; i++) {
//     const lastWathingFilm = prompt("Один из последних просмотренных фильмов?","");
//     const raitOfFilm = +prompt("Насколько оцените его?","");
//     if (lastWathingFilm != '' && lastWathingFilm != null && lastWathingFilm.length <10 &&
//         raitOfFilm != '' && raitOfFilm != null) {
//         personalMovieDB.movies[lastWathingFilm] = raitOfFilm;
//         console.log('done');
//     } else {
//         console.log('error')
//         i--;
//     }
// }
// console.log(personalMovieDB);



// let i = 0;

// while (i<2) {
//     const lastWathingFilm = prompt("Один из последних просмотренных фильмов?","");
//     const raitOfFilm = +prompt("Насколько оцените его?","");
//     personalMovieDB.movies[lastWathingFilm] = raitOfFilm;
//     i++;
// }

// let i = 0;
// do {
//     const lastWathingFilm = prompt("Один из последних просмотренных фильмов?","");
//     const raitOfFilm = +prompt("Насколько оцените его?","");
//     personalMovieDB.movies[lastWathingFilm] = raitOfFilm;
//     i++;
// }
// while (i<2);






















// for (let i = 0; i < 2; i++) {
//     const lastWatchingFilm = prompt('Один из последних просмотренных фильмов?','');
//     const raitOfFilm = prompt('Насколько цените его?','');
//     if (lastWatchingFilm != '' && lastWatchingFilm != null && lastWatchingFilm.length < 10 &&
//         raitOfFilm != '' && raitOfFilm != null) {
//         personalMovieDB.movies[lastWatchingFilm] = raitOfFilm;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }
//  console.log(personalMovieDB); 




//  if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
//      console.log('Просмотрено мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
//     console.log('Вы класический зритель');
// } else if (personalMovieDB.count >= 30){
//     console.log('Вы киноман');
// } else {console.log('ошибка');}






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



// function getlog (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(a+b);
//     c = 15;
//     console.log(c + 5 + d);
//     console.log(d);
// }
// let d = 35;
// getlog(5,6);



// const myName = 'geORge'.toUpperCase();
// const myLowerName = myName.toLowerCase(); 
// console.log(myName);
// console.log(myLowerName);



// const city = 'Sochi is the best city in the world!!!';
// console.log(city.indexOf('best'));


// const greetings = 'Hello beautiful World!';

// console.log(greetings.slice(6,17));
// console.log(greetings.substring(17,6));

// const greetings = 'Hello beautiful World!';
// console.log(greetings.substr(6, 9));

// console.log(Math.round(12.4441));
// console.log(parseInt('15 12 13'));
// console.log(parseFloat('15/12 13.13'));



