// console.log(document.body);  // обращаемся к тэгу body нашего домдерева(document)
// console.log(document.head);  // можно обратится к heady нашего домдерева(document)
// console.log(document.documentElement);  // можно обратится к тэгу HTML нашего домдерева(document)


// методы для работы с нодами(узлами)

// console.log(document.body.childNodes); // узлы которые являются дочерними у тэга body
// текстовая нода(узел) Text - это перенос строки 

// console.log(document.body.firstChild);  // обратится к первой дочерней ноде  у body
// console.log(document.body.lastChild);   // обратится к последний дочерней ноде у body

// console.log(document.querySelector('#current').parentNode); // получаем родетельский узел у выбранного элемента с id current
// console.log(document.querySelector('#current').parentNode.parentNode); // получаем следующий уровень родителя. 


// console.log(document.querySelector("[data-current='3']").nextSibling);//получаем следующую ноду по порядку после найденного эле
// console.log(document.querySelector("[data-current='3']").previousSibling); //получаем предыдущую ноду 




// методы для работы с элементами ... Добавляем везде Element

// console.log(document.body.firstElementChild);  
// console.log(document.body.lastElementChild);


// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector("[data-current='3']").nextElementSibling);  // получаем уже следующий элемент, а не ноду. 






// console.log(document.body.childNodes); // узлы которые являются дочерними у тэга body
// аналога для элементов нет. Нужно прибегать к переберающей конструкции:

for (let node of document.body.childNodes) {
    if (node.nodeName === '#text') {// названия берем из консоли в браузере для свойства и значения. 
        continue;
    }           
    
    console.log(node);
}