// события для мобильных брайзеров. 

// touchstart - касание
// touchmove - при движении нажатого пальца на элемент будет каждый раз происходить это событие
// touchend - при отрывания пальца от элемента будет срабатывать это событие. 
// touchenter - когда ведем пальцем по экрану и наталкиваемся на элемент, который содержит это событие. 
// touchleave -  когда скользящий палец выходит за границы элемента, на котором висит этот обработчик событий
// touchcancel - выходит за границы браузера?

// document.addEventListener('DOMContentLoaded', () => {
//         const box = document.querySelector('.box');

//         box.addEventListener('touchstart', (event) => {
//             event.preventDefault(); // рекомендуется всегда ставить
//             console.log('start'); // будет выводится start когда трогаем пальцем эту коробку
//         });
// });


// touches свойство у event. Выдаёт список всех пальцев, которые взаимодейтсвует со всем экраном. 

// document.addEventListener('DOMContentLoaded', () => {
//     const box = document.querySelector('.box');

//     box.addEventListener('touchstart', (event) => {
//         event.preventDefault(); // рекомендуется всегда ставить
//         console.log('start'); // будет выводится start когда трогаем пальцем эту коробку
//         console.log(event.touches);
//     });
// });


// targetTouches свойство у event. Пальцы, которые взаимодействуют с конкретным элементом. 

// changedTouches свойство у event. Список пальцев участвующий в текущем событии. Пальцы совершившие назначенное действие. 


document.addEventListener('DOMContentLoaded', () => {
    box.addEventListener('touchmove', (event) => {
        event.preventDefault(); // рекомендуется всегда ставить
        console.log(event.targetTouches[0].pageX); // первый палец. Координаты по X

    });
});