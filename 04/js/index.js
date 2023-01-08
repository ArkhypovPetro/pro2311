// Створити обєкт userWallet, в якому існують ключі (amountUsa, amountEuro, amountUa), які містять числові значення ( збереження юзера). Створити массив обєктів bank, в якому є обєкти з ключами buy, sell з числовими значеннями (продаж і покупка валюти), а також ключ name, в який передаємо назву валюти (usa, euro, ua). Створити функцію, яка отримує данні з обєкту юзер, опрацьовує ці данні і повертає скільки долларів чи євро може купити користувач, врахувати можливість неможливості покупки.Створити функцію, яка прораховує скільки гривень отримує користувач продавши свої збереження

let userWallet = {
    amountUsa:10,
    amountEuro:20,
    amountUa:500
  }
  const bank =[
    {
        name:'Usd',
        buy:40,
        sell:42
    },
    {
        name:'euro',
        buy:40,
        sell:43
    },
    {
        name:'ua',
        buy:0.9,
        sell:1.1
    }
  ];
  
  function moneyInfo(arr){
    if(userWallet.amountUa == 0){
        alert(
            'Try next time'
        );
        return;
    }
    let moneyInfoArr = []
    arr.forEach(value => {
        moneyInfoArr.push(`User can buy ${userWallet.amountUa / value.buy}`)
    });
    console.log(moneyInfoArr);
    return moneyInfoArr;
  }
  moneyInfo(bank);
  
  function exchangeAll(arr){
    let isRichUser = 0;
    let userWalletAmount = [];
    for (let value in userWallet){
        userWalletAmount.push(userWallet[value]);
        if(userWallet[value] == 0){
            isRichUser +=1;
        }
    }
    if(arr.length == isRichUser){
        alert(
            'Try next time'
        );
        return;
    }
    let totalAmount = 0;
    const sellAmount = [];
    for(let value of arr){
        sellAmount.push(value.sell);
    }
    sellAmount.forEach((sellValue, index)=>{
        let allCost = userWalletAmount[index];
        totalAmount +=sellValue*allCost;
    });
    console.log(totalAmount);
  }
  exchangeAll(bank);
  
  // Створити функцію move, яка повертає текст на скільки кроків і куди (отримане значення) змістився користувач . Створити функцію moveUser, яка отримує напрямок переміщення, кількість кроків і функцію move як колбек. moveUser ('north', move, 10) повина повернути ( Юзер перемістився на північ на 10 кроків)
  
  let distace = prompt("Enter the number of steps", 0);
  let direction = prompt("Enter the direction of travel", "east");
  
  function move (a, b) {
      let input = `${a} steps on ${b}`;
      return input;
  }
  
  function moveUser(a, b, callBack){
      let collector = `The user has moved: ${callBack(a,b)}`
      console.log(collector);
      return collector;
  }
  moveUser(distace, direction, move);
  
  // Створіть массив, в якому видаляється кожний другий елемент ["Keep", "Remove", "Keep", "Remove", "Keep", ...] в результаті повинен бути ось такий новий массив ["Keep", "Keep", "Keep", ...], Врахувати що массив може бути пустий, повернути помилку в разі пустого масиву
  
  let keepArray = ["Keep", "Remove", "Keep", "Remove", "Keep", "Remove"];
  
  if(keepArray.length > 0){
      for (let i = 0; i<keepArray.length; i++){
        keepArray.splice(i+1,1);
      }
  } else {
      console.log("The array is empty");
  }
  console.log(keepArray);
  
  // cтворити функцію, яка обробляє массив обєктів і вираховує площу фігури в обєкті
  
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
    
    function area(figure) {
      figure.forEach((element) => {
        console.log(`${element.figure} is ${element.sizeA * element.sizeB}`);
      });
    }
    area(figurs);
  
  // створити новий массив, який використовує массив [2,3,5,4,8,7,9,10] і перемножує парні значення на 4
  
  const oldArray = [2,3,5,4,8,7,9,10];
  let newArray = oldArray.map(element => (element % 2 == 0) ? element *= 4 : element);
  console.log(newArray);