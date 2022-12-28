// створити функцію, яка отримує массив і вибирає з нього всі парні числа, і розміщує в новому масиві. Функція повина повертати массив з парними номерами. arrRandomNumbers

let arrRandomNumbers = [1,3,5,4,6,9,8,20,31,33,10];
let arrDoubleNumbers = [];
function Number(res) {
    for (i = 0; i < arrRandomNumbers.length; i++){
        res = arrRandomNumbers[i];
        if (res % 2 == 0) {
            arrDoubleNumbers.push(res);
        }
    }
return arrDoubleNumbers;
}
console.log(Number())

// створити цикл, який 5 разів виводить prompt, запитує що купити і вводить це в массив.

let arrProduct = [];
for (i = 0; i < 5; i++){
    let product = prompt('Що бажаєте купити ? ');
    arrProduct.push(product);
}
console.log(arrProduct);

// створити функцію, яка отримує як аргумент массив і вираховує середнє значення всіх чисел (при розрахунках вважайте, що массив може бути будь-якої довжини переданий)

let sum = 0;
let averageValue = 0;
function average(argument) {
    for (i = 0; i < argument.length; i++){
        let a = argument[i];
        sum+= a;
    }
    averageValue = sum/argument.length;
    return averageValue;
}
console.log(average(arrRandomNumbers))

// створити функцію, яка замінює в массиві =) на;)

let smile = [':)', '=)', ':)', '=)', ':)', '=)'];
function replacement() {
    for (i = 0; i < smile.length; i++) {
        if (smile[i] == '=)') {
            smile.splice(i, 1, ';)');
        }
    }
return smile;
}
console.log(replacement())

// створити функцію, яка отримує аргумент, якщо це 'last', то функція створює массив, поміщає в нього останній елемент массиву  і видаляє останній елемент  массиву animals, якщо аргумент 'first' то також записує перший елемент массиву до нового массиву і видаляє перший елемент з animals

let value = prompt('Введіть: last  або first', 'last');
let animals = ['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
let animalsPart = [];
function deletes() {
if (value == 'last') {
    animalsPart = animals.splice(animals.length - 1, 1);
    console.log(animalsPart);
    console.log(animals);
}
else if (value == 'first') {
    animalsPart = animals.splice(0, 1);
    console.log(animalsPart);
    console.log(animals);
    }
else {
    alert("Wrong argument!");
}
}
deletes()

// напишіть функцію, яка отримує массив і повертає сумму всіх значень массиву

let a = 0;
let b = 0;
function sum() {
    for (i = 0; i < arrRandomNumbers.length; i++) {
        a = arrRandomNumbers[i];
        b+=a
    }
return b;
}
console.log(sum())

// створити функцію, яка отримує в аргумент старт значення і фініш значення(старт менше фініша) також отрмує массив задовільної довжини.Функція повина повертати массив в якому вирізанні значення з старт індекса по фініш

let start = prompt('Введіть число для старту: ') 
let finish = prompt('Введіть число для фінішу: ') 
function spliceArray () {
    if (start < finish && start >=0 && finish <= arrRandomNumbers.length) {
       return arrRandomNumbers.splice(start-1, finish - start + 1); 
    } else if (start >= finish) {
        return alert("Error! 'Start' must be smaller than 'finish'!");
    }
    else {return alert("Wrong arguments!")};
}
console.log(spliceArray())
console.log (arrRandomNumbers)
