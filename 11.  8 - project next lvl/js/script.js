/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';


document.addEventListener('DOMContentLoaded', () => {//наши скрипты начнуть работать только после полного формирования DOM дерева!
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
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
        
    };
    
    
    const genre = document.querySelector('.promo__genre');
    const poster = document.querySelector('.promo__bg');


    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.background = 'url("img/bg.jpg")';
        poster.style.backgroundRepeat = 'no-repeat';
        poster.style.backgroundPosition = 'cover';
    // url('../img/bg.jpg') center (center / cover) no-repeat;
    };
    
    
    const sortArr = (arr) => {
        arr.sort();
    };

    const movieList = document.querySelector('.promo__interactive-list');
    const addform = document.querySelector('form.add');
    const addInput = addform.querySelector('.adding__input');
    const checkbox = addform.querySelector('[type="checkbox"]');

 


    addform.addEventListener('submit', (event) => {  //submit - реагирует, когда пользователь отправляет form (нажимает на кнопку)
        event.preventDefault();
        let newFilm = addInput.value;
        
        const favorite = checkbox.checked;   // 4 задание!

             if(favorite) {
                console.log('Любимый фильм');
    }

        if (newFilm) {   // делает так, что если в переменной не пустая строка, то код не выполнится. 
            
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substr(0,22)}...`;
            }
            
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }

      
        console.log(newFilm.length);
        event.target.reset();
    });
    



    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `  
                                  <li class="promo__interactive-item">${i + 1}.${film} 
                                    <div class="delete"></div>
                                  </li>
                                `;  
        });

        document.querySelectorAll('.delete').forEach((btn, i) => { // выбираем все корзинки и индекс фильма из массива
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);   // чтобы создать уже новую нумерацию
            });
        });
       
    }


    deleteAdv(advert);
    makeChanges();
    
    createMovieList(movieDB.movies, movieList);

   

    
});













