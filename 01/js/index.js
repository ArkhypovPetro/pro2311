// отримати 2 цифрових значення і вивести результат математичнихх операцій в console.


let FirstInt = prompt("Enter the first number");
let SecondInt = prompt("Enter the second number");
console.log(+FirstInt + +SecondInt);
console.log(FirstInt - SecondInt);
console.log(FirstInt * SecondInt);
console.log(FirstInt / SecondInt);
console.log(FirstInt % SecondInt);

// отримати 2 текстових значення і вивсести за допомогою document .write  "User name: FirstVar  User last name SecondVar " ( firstVar, secondVar значення, які отримали)

let FirstVar = prompt("Enter name");
let SecondVar = prompt("Enter last name");
document.write("User name: "+ FirstVar + " " + "User last name: "+ SecondVar);

// отримати текстове значення і виконати перевіку: якщо uk повернути true, якщо ru повернути false

let language = prompt ("Enter value uk or ru");
let uk = "uk";
let examination  = language == uk;
console.log ('uk',examination);

// отримати 2 числових значення, якщо перше більше 20, а друге більше 30, то вивстести true, якщо одна з умов не відповідає - вивсести false

let FirstValue = prompt("Enter the first number");
let SecondValue = prompt("Enter the second number");
let ResultValue = FirstValue>20 && SecondValue>30;
console.log(ResultValue);