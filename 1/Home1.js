// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const lastWathingFilm1 = prompt("Один из последних просмотренных фильмов?","");
// const raitOfFilm1 = +prompt("Насколько оцените его?","");

// const lastWathingFilm2 = prompt("Один из последних просмотренных фильмов?","");
// const raitOfFilm2 = +prompt("Насколько оцените его?","");

// personalMovieDB.movies[lastWathingFilm1] = raitOfFilm1;
// personalMovieDB.movies[lastWathingFilm2] = raitOfFilm2;

// console.log(personalMovieDB);



// // for (let i = 0; i < 2; i++) {
// //     const lastWatchingFilm = prompt('Один из последних просмотренных фильмов?','');
// //     const raitOfFilm = prompt('Насколько цените его?','');
// //     if (lastWatchingFilm != '' && lastWatchingFilm != null && lastWatchingFilm.length < 10 &&
// //         raitOfFilm != '' && raitOfFilm != null) {
// //         personalMovieDB.movies[lastWatchingFilm] = raitOfFilm;
// //         console.log('done');
// //     } else {
// //         console.log('error');
// //         i--;
// //     }
// // }
// //  console.log(personalMovieDB); 




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