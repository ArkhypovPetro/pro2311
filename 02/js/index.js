// дописати реалізацію  калькулятора, розглянутого на уроці за допомогою if і else if, при спробі поділити на 0 виводити alert з попередженням. Повині бути команди(додавання, множення, ділення, віднімання)

let firstNumber = parseFloat(prompt('Type number', 0));
let secondNumber = parseFloat(prompt('Type number', 0));
let operationNumber = (prompt('operation'));
let result = 0;
if (operationNumber == '+') {
    result = firstNumber + secondNumber;
    console.log('plus value:', result);
}
else if( operationNumber == '-') {
    result = firstNumber - secondNumber;
    console.log('Minus operation:', result);
}
else if (operationNumber == '*') {
    result = firstNumber * secondNumber;
    console.log('Multiplie value:', result);
}
else if (operationNumber == '/') {
    result = firstNumber / secondNumber;
    console.log('Division value:', result);
    if (secondNumber === 0) {
        alert('Error');
    }
}
else {
    console.log('Operation not found');
}

// за допомогою циклу вивести в консоль всі парні значення числа 20

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// використовуючи цикл, виведіть суму чисел між А і В з умовою, що A < B

let a = parseFloat(prompt('Enter value A:', 0));
let b = parseFloat(prompt('Enter value B:', 0));
let sum = 0;
if (a<b){
    for (let i=a+1; i<b; i++){
    sum+= i;
    }
    alert('The sum of the numbers between A and B:' + sum);
}
else{
    alert('The number A must be less than B');
}

// зробити цикл, який виводить дані навпаки від більшого до меншого. Наприклад, від 10 до 0 (10, 9, 8, 7, 6 ...)

for(let i=10; i>=0; i--){
    console.log(n);
}

// отримайте 2 значення і виведіть за допомогою * в консоль фігуру, в якій довжина і ширина - це отримані значення. Наприклад, а = 2 і в = 2 буде ось така фігура
// **
// **

let width = parseInt(prompt('Enter width', 0));
let height = parseInt(prompt('Enter height', 0));
for(let i = 0; i<width; i++){
    let starCount = '';
    for(let j=0; j<height; j++){
        starCount+="*";
    }
    console.log(starCount);
    console.log();
}

// напишіть змінні, які питають логін та пароль з prompt. Якщо логін admin і пароль 12345 вірні, то виводити повідомлення "вітаємо в системі", якщо ні, то виводити "Пароль логін не вірні"

let login = prompt('Login', 'admin');
let password = prompt('Password', 1234);
if (login == 'admin' && password == 1234) {
    alert('Вітаємо в системі');
}
else{
    alert('Пароль логін не вірні');
}

// отримати 3 значення від користувача і порахувати середнє значення цих значень

let firstValue = parseInt(prompt("Enter first number: ", 0));
let secondValue = parseInt(prompt("Enter second number: ", 0));
let thirdValue = parseInt(prompt("Enter third number: ", 0));
console.log("Middle value is: " + ((firstValue + secondValue + thirdValue)/3));

// спитати в користувача вік, далі використовуючи тернарний оператор (це скорочений запис іf), створити змінну, яка отримує true, якщо вік більше 18 i false якщо менше

let youAge = prompt('How old are you?');
let ageResult = (youAge >= 18) ? true : false;
console.log(ageResult);

// створити switch, в якому є назви планет сонячної системи. Якщо користувач вводить назву планети сонячної системи, то виводиться ця планета в сонячній системі. Якщо такої планети нема, то виводити: такої планети нема в сонячній системі

let planet = prompt('Введіть назву планети');
switch (planet) {
    case 'Меркурій':
    case 'Венера':
    case 'Земля':
    case 'Марс':
    case 'Юпітер':
    case 'Сатурн':
    case 'Уран':
    case 'Нептун': 
        console.log('Ця планета в сонячній систем');
        break;
    default:
        console.log('Такої планети нема в сонячній системі');
        break;
}

// отримати від користувача число, яке більше 0, і, якщо воно більше 100, то порахувати знижку 3 % і вивести значення, якщо більше 3000, то порахувати знижку 5 %, і якщо більше 10000 то порахувати знижку 7 %. В усіх інших випадках вивести: "У вас нема знижки, до сплати число яке було введене"

let usersPrice = parseFloat(prompt("Вкажіть число більше 0:", ''));
let discount3 = 0.03;
let discount5 = 0.05;
let discount7 = 0.07;
if(usersPrice > 10000){
    console.log(`Ваша знижка становить 7%. До сплати:  ${usersPrice - usersPrice * discount7} грн.`);
}
    else if(usersPrice >= 3000){
    console.log(`Ваша знижка становить 5%. До сплати:  ${usersPrice - usersPrice * discount5} грн.`);
}
    else if(usersPrice >= 100){
    console.log(`Ваша знижка становить 3%. До сплати:  ${usersPrice - usersPrice * discount3} грн.`);
}
else{
    console.log("У вас нема знижки. До сплати: " + usersPrice);
}

// отримати від користувача назву тварини і за допогомою світч вивести звук, який вона видає. Наприклад, корова: му - му  і т.д

let animal = prompt("Вкажіть назву тварини:");
switch (animal){
    case 'Кіт':
        alert(animal + " каже мяу");
        break;
    case 'Собака':
        alert(animal + " каже гав");
        break;
    case 'Корова':
        alert(animal + " каже му");
        break;
    default:
        alert("Не вірна назва тварини");
    }