window.onload = () => {

// Створити сторінку, на якій виводиться вікно, в яке юзер вводить дані. Дані виводяться в стилізований список, можете підключити bootstrap чи написати свої стилі. При введені більше 5 пунктів, перший пункт видаляється. В пункті, який добавляється, повино бути данні, які введено і час створення в форматі день, номер місяця, рік і час години хвилини.

    let analyticsData = function () {
      let container = document.querySelector(".container");
      let ul = document.createElement("ul");
      let myDate = new Date();
      let count = 0;
      while (true) {
        let inputData = prompt("Enter your details or press enter to finish");
        if (inputData === "") {
          return;
        }
        count++;
        if (count > 5) {
          ul.removeChild(ul.firstElementChild);
        }
        let li = document.createElement("li");
        li.innerHTML = `${inputData}  ${myDate.toLocaleString()}`;
        ul.appendChild(li);
        container.appendChild(ul);
      }
    };
  
    analyticsData();

// Створити массив обєктів і на сонові нього вивести на сторінку лінки, в яких знаходяться зображення і alt для зображення, стилізувати задовільно, кількість обєктів в массиві більше 3

class Dogs {
  constructor(imgPath, alt, href) {
    this.imgPath = imgPath;
    this.alt = alt;
    this.href = href;
  }
}

let arrayOfImages = [
  new Dogs(
    'img/akita.jpg',
    'akita',
    'https://zeleniymir.org/amerikanskaya-akita/'
  ),
  new Dogs(
    'img/malamut.png',
    'malamut',
    'https://zeleniymir.org/alyaskinskij-malamut/'
  ),
  new Dogs(
    'img/alabai.jpg',
    'alabai',
    'https://zeleniymir.org/sredneaziatskaya-ovcharka/'
  ),
];

let outputImages = function (array) {
  let picture = document.querySelector(".picture");
  let fragmentOfImages = new DocumentFragment();
  array.forEach((images) => {
    let impLink = document.createElement("a");
    impLink.setAttribute("href", images.href);
    let img = document.createElement("img");
    img.src = images.imgPath;
    img.alt = images.alt;
    img.setAttribute('style', 'margin: 50px 20px; height: 200px;');
    impLink.appendChild(img);
    fragmentOfImages.appendChild(impLink);
  });
  picture.appendChild(fragmentOfImages);
};

outputImages(arrayOfImages);

// Створити таблицю за допомогою js з полями імя, місто, курс і заповнити її даними також за допомогою js.В таблиці повино бути мінімум 2 рядки

let tableArr = [
  {
      city: 'Київ',
      course: '1',
      name: 'Олександр',
  },
  {
      city: 'Одеса',
      course: '2',
      name: 'Вікторія',
  },
  {
      city: 'Вінниця',
      course: '3',
      name: 'Ірина',
  },
];
let heat = ['Імя', 'Місто', 'Курс'];

let body = document.querySelector('.students');
let table = document.createElement('table');
let tableHead = document.createElement('tableHead');
let headName = document.createElement('headName');
headName.setAttribute('style', 'display: flex;border: 2px solid white')

table.setAttribute('style', 'display: flex;flex-direction: column;max-width: 90%;margin: 100px auto;padding:10px');
body.appendChild(table);
table.appendChild(tableHead);
tableHead.appendChild(headName);

heat.forEach((item) => {
  let tableData = document.createElement('tableData');
  tableData.innerText = item;
  headName.appendChild(tableData);
})

tableArr.forEach((item) => {
  let tableLines = document.createElement('tableLines');
  tableLines.setAttribute('style', 'display: flex;')
  table.appendChild(tableLines);
  tableLines.appendChild(document.createElement('tableData')).append(item.name);
  tableLines.appendChild(document.createElement('tableData')).append(item.city);
  tableLines.appendChild(document.createElement('tableData')).append(item.course);
});

  let lines = document.querySelectorAll('tableData');
  console.log(lines);
  lines.forEach((item) => {
      item.setAttribute('style', 'border: 1px solid white; padding: 10px; width: 100%; text-align: center;')
});

}

