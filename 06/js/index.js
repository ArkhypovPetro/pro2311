// Створити функцію, яка отримує невизначену кількість аргументів, вираховує їх суму і повертає результат обчислень

function SumArg(...a) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    };
    return `Sum: ${sum}`
};
console.log(SumArg(1, 2, 3));

// Створити функцію яка отримує від користувача день народження, місяць, рік і повертає вік користувача і якщо сьогодні день народження користувача то вивести привітання.
// Модифікуват завдання 2 добавивши в аргументи функцію вітання яка буде використанна як колбек, і в разі дня народження буде вітати користувача

function Сongratulation() {
    console.log('Happy Birthday');
}

const month = parseInt(prompt('Select month:'));
const day = parseInt(prompt('Select day:'));
const year = parseInt(prompt('Select year:'));
const date = new Date;
const dataInfo = new Date(year, month -1, day);
//function data(info){
function data(info, fn) {
    if (info.getMonth() === date.getMonth() && info.getDate() === date.getDate()) {
        fn();
        //console.log('Happy Birthday');
    };
    if (info.getMonth() > date.getMonth()) {
        console.log(`You are: ${date.getFullYear() - 1 - info.getFullYear()} years old`);
    };
    if (info.getMonth() === date.getMonth() && info.getDate() < date.getDate()) {
        console.log(`You are: ${date.getFullYear() - info.getFullYear()} years old`);
    };
    if (info.getMonth() === date.getMonth() && info.getDate() > date.getDate()) {
        console.log(`You are: ${date.getFullYear() - 1 - info.getFullYear()} years old`);
    };
};

//data(dataInfo);
data(dataInfo, Сongratulation);

// Створити функцію, яка повертає сторіччя, функція отримує рік, а повертає номер сторіччя.

let userYear = parseInt(prompt ('Enter the year:'));

function Century(year) {
    if (year % 100 == 0) {
        return `${year} year is ${parseInt(year / 100)} century`
    }
    else { 
        return `${year} year is ${parseInt(year / 100) + 1} century`
    }
}
console.log(Century(userYear));

// Створити функцію, яка повертає інформацію скільки днів в цьому місяці, а також в наступному

let userMonth = parseInt(prompt("Enter the month as a number:"));
let userYears = parseInt(prompt("Enter year:"));

function daysInMonth(month, year) {
    return `This month: ${new Date(year, month, 0).getDate()} days, and in the next: ${new Date(year, month + 1, 0).getDate()}`;
}
console.log(daysInMonth(userMonth, userYears));



