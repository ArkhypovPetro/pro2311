// Створити обєкт userWallet, в якому існують ключі (amountUsa, amountEuro, amountUa), які містять числові значення ( збереження юзера). Створити массив обєктів bank, в якому є обєкти з ключами buy, sell з числовими значеннями (продаж і покупка валюти), а також ключ name, в який передаємо назву валюти (usa, euro, ua). Створити функцію, яка отримує данні з обєкту юзер, опрацьовує ці данні і повертає скільки долларів чи євро може купити користувач, врахувати можливість неможливості покупки.Створити функцію, яка прораховує скільки гривень отримує користувач продавши свої збереження

// Створити функцію move, яка повертає текст на скільки кроків і куди (отримане значення) змістився користувач . Створити функцію moveUser, яка отримує напрямок переміщення, кількість кроків і функцію move як колбек. moveUser ('north', move, 10) повина повернути ( Юзер перемістився на північ на 10 кроків)

let distace = prompt("Введіть кількість кроків");
let direction = prompt("Введіть напрямок руху", "Південь, Північ, Захід, Схід");

function move (a, b) {
    let primaryMove = `${a} кроків на ${b}`;
    return primaryMove;
}

function moveUser(a, b, callBack){
    let finalMove = `Користувач премістився: ${callBack(a,b)}`
    console.log(finalMove);
    return finalMove;
}
moveUser(distace, direction, move);

// Створіть массив, в якому видаляється кожний другий елемент ["Keep", "Remove", "Keep", "Remove", "Keep", ...] в результаті повинен бути ось такий новий массив ["Keep", "Keep", "Keep", ...], Врахувати що массив може бути пустий, повернути помилку в разі пустого масиву

let KeepRemove = ["Keep", "Remove", "Keep", "Remove", "Keep", "Remove"];

if(KeepRemove.length > 0){
    for (let i = 0; i<KeepRemove.length; i++){
        KeepRemove.splice(i+1,1);
    }
} else {
    console.log("Массив пустий");
}
console.log(KeepRemove);

// cтворити функцію яка обробляє массив обєктів і вираховує площу фігури в обєкті,

let figurs = [
    {
      figure: "Squar",
      sizeA: 4,
      sizeB: 4,
    },
    {
      figure: "Rectangle",
      sizeA: 4,
      sizeB: 8,
    },
  ];
  
  function calculateArea(figure) {
    figure.forEach((element) => {
      console.log(`${element.figure} is ${element.sizeA * element.sizeB}`);
    });
  }
  calculateArea(figurs);
  console.log("=============================================================");

// створити новий массив, який використовує массив [2,3,5,4,8,7,9,10] і перемножує парні значення на 4

let myArray = [2, 3, 5, 4, 8, 7, 9, 10];
let myModifArray = myArray.map((a) => {
  return a % 2 == 0 ? a * 4 : a;
});

console.log(myModifArray.toString());