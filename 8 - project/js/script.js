/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Скотт Пилигрим против...",
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость"
    ]
};



//  1.1

const advert = document.querySelectorAll('.promo__adv img');
console.log(advert);

advert.forEach(item => {
    item.remove();
});

//  1.2
// const advert = document.querySelector('.promo__adv');
// advert.remove();


//  2.1

const genre = document.querySelector('.promo__genre');
genre.textContent = 'драма';


//  3.1 

const poster = document.querySelector('.promo__bg');
poster.style.background = 'url("img/bg.jpg")';
poster.style.backgroundRepeat = 'no-repeat';
poster.style.backgroundPosition = 'cover';
// url('../img/bg.jpg') center (center / cover) no-repeat;

//  4.1 

const movieList = document.querySelector('.promo__interactive-list');
// movieList.forEach(item => item.innerHTML = '');
movieList.innerHTML = '';



movieDB.movies.sort();  // метод массива. Сортирует по алфавиту если свойства имеют значения строк.


// a = a + 1;
// a += 1;   // одно и тоже
// ставим += обязательно!!!
movieDB.movies.forEach((film, i) => {   // на каждой итерации будем добавлять еще строки
    movieList.innerHTML += `  
                          <li class="promo__interactive-item">${i + 1}.${film} 
                            <div class="delete"></div>
                          </li>
                        `;  
});

















