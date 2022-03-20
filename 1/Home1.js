const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

console.log(`Пользователь посмотрел ${numberOfFilms} фильмов`); 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: Boolean(false)
 };

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

 if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
     console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
    console.log('Вы класический зритель');
} else if (personalMovieDB.count >= 30){
    console.log('Вы киноман');
} else {console.log('ошибка');}

