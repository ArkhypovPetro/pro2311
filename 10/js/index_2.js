// Використовуючи компоненти бутстрапа створити форму замовлення піци. Всі дані, що будуть на сторінці (розмір піцци, топінги тримати в js і заповнювати їми компоненти форми). Форма має мати такі елементи і рахувати вартість замовлення, при зміні умов перераховувати ціну.
// Селект по вибору розміру (мала, середня, велика )
// Тип начиники (з мясом, сиром і т.д ) кожна начинка різна ціна
// Додаткові топінги (гриби, сир, ковбаски ... ) реаліувати чекбокасами кожен вибраний чекбок +10 грн до ціни
// Достаквка чи самовивіз ( доставка +30 до ціни самовивіз 0)
// Поле, де відображається ціна.
// Кнопка замовити (якщо всі поля крім топінгів заповнені, то вона активна )
// Після натискання кнопки спливає вікно (модалка або якийсь компонент з бутстрапа з написом "Дякуємо за замовлення" на 5 секунд і зникає

window.onload = () => {

let body = document.body;
body.setAttribute('style', 'margin: 5% auto;');

let FormWidth = document.querySelector('form');
FormWidth.setAttribute('style', 'width:500px; margin: 0 auto;');

// Розміри піцци
let sizeSelect = document.querySelector('.pizzasize');

let size1 = document.querySelector('.size1');
size1.textContent = 'Мала';

let size2 = document.querySelector('.size2');
size2.textContent = 'Середня';

let size3 = document.querySelector('.size3');
size3.textContent = 'Велика';

// Тип начинки
let typeSelect = document.querySelector('.pizzatype');

let type1 = document.querySelector('.type1');
type1.textContent = 'Гавайська';

let type2 = document.querySelector('.type2');
type2.textContent = 'Папероні';

let type3 = document.querySelector('.type3');
type3.textContent = 'Чотири Сира';

// Кнопка
let btn = document.querySelector('.buy');
btn.disabled = true;

// Ціна
// по розміру
let little = 100;
let medium = 120;
let large = 150;
// по типу
let sz1 = 50;
let sz2 = 60;
let sz3 = 70;

// Добавка
let check = 10;

// Доставка
let deliv = 30;


let price = document.querySelector('.price');
price.textContent = 0;


typeSelect.addEventListener("change", function (e) {
    if (e.target.value == 0) {
      price.innerHTML = 0;
      btn.disabled = !typeSelect.checked;
    }
  });

  sizeSelect.addEventListener("change", function (e) {
    if (
      e.target.value == 0 ||
      typeSelect.value == 1 ||
      typeSelect.value == 2 ||
      typeSelect.value == 3
    ) {
      price.innerHTML = 0;
      btn.disabled = !sizeSelect.checked;
    }
  });
  
  typeSelect.addEventListener("change", function (e) {
    if (e.target.value == 1 && sizeSelect.value == 1) {
      price.innerHTML = sz1 + little;
    }
  });
  sizeSelect.addEventListener("change", function (e) {
    if (e.target.value == 1 && typeSelect.value == 1) {
      price.innerHTML = sz1 + little;
      btn.disabled = sizeSelect.checked;
    }
  });
  sizeSelect.addEventListener("change", function (e) {
    if (e.target.value == 2 && typeSelect.value == 1) {
      price.innerHTML = sz1 + medium;
      btn.disabled = sizeSelect.checked;
    }
  });
  sizeSelect.addEventListener("change", function (e) {
    if (e.target.value == 3 && typeSelect.value == 1) {
      price.innerHTML = sz1 + large;
      btn.disabled = sizeSelect.checked;
    }
  });
  
  sizeSelect.addEventListener("change", function (e) {
    if (e.target.value == 1 && typeSelect.value == 2) {
      price.innerHTML = sz2 + little;
      btn.disabled = sizeSelect.checked;
    }
  });
  sizeSelect.addEventListener("change", function (e) {
    if (e.target.value == 2 && typeSelect.value == 2) {
      price.innerHTML = sz2 + medium;
      btn.disabled = sizeSelect.checked;
    }
  });
  sizeSelect.addEventListener("change", function (e) {
    if (e.target.value == 3 && typeSelect.value == 2) {
      price.innerHTML = sz2 + large;
      btn.disabled = sizeSelect.checked;
    }
  });
  sizeSelect.addEventListener("change", function (e) {
    if (e.target.value == 1 && pizzaSelect.value == 3) {
      price.innerHTML = sz3 + little;
      btn.disabled = sizeSelect.checked;
    }
  });
  sizeSelect.addEventListener("change", function (e) {
    if (e.target.value == 2 && typeSelect.value == 3) {
      price.innerHTML = sz3 + medium;
      btn.disabled = sizeSelect.checked;
    }
  });
  sizeSelect.addEventListener("change", function (e) {
    if (e.target.value == 3 && typeSelect.value == 3) {
      price.innerHTML = sz3 + large;
      btn.disabled = sizeSelect.checked;
    }
  });

  // Чекбокси

  let mashrooms = document.querySelector('#mashrooms');
  let cheese = document.querySelector('#cheese');
  let sosige = document.querySelector('#sosige');

  mashrooms.addEventListener("change", function (e) {
    if (this.checked) {
      price.innerHTML = +price.innerHTML + check;
    } else {
      price.innerHTML = +price.innerHTML - check;
    }
  });

  cheese.addEventListener("change", function (e) {
    if (this.checked) {
      price.innerHTML = +price.innerHTML + check;
    } else {
      price.innerHTML = +price.innerHTML - check;
    }
  });

  sosige.addEventListener("change", function (e) {
    if (this.checked) {
      price.innerHTML = +price.innerHTML + check;
    } else {
      price.innerHTML = +price.innerHTML - check;
    }
  });

  let delivery = document.querySelector("#delivery");
  let self = document.querySelector("#self");

  delivery.addEventListener("change", function (e) {
    if (this.checked) {
      price.innerHTML = +price.innerHTML + deliv;
    }
  });
  self.addEventListener("change", function (e) {
    if (this.checked) {
      price.innerHTML = +price.innerHTML - deliv;
    }
  });
  
  // Модальне вікно

  let modal = document.querySelector('.modal');
  modal.setAttribute('style', 'display: none;');
  
  let close = document.querySelector('.btn-close');
  close.addEventListener("click", function () {
      modal.setAttribute('style', 'display: none;');
  });
  
  btn.addEventListener("click", function () {
      modal.setAttribute('style', 'display: block;');
  
      let closeW = function(){
          modal.setAttribute('style', 'display: none;');
      };
  
      window.setTimeout(closeW , 5000);
  
  });

}