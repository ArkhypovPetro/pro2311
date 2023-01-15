// Створити функцію конструктор яка створює обєкт юзер(з даними імя, прізвище, вік, також в юзера повинен бути унікальний іd номер від 1 до 10) в функції конструкторі повиний бути метод виводу інформації про юзера. Метод повинен бути винесений в прототип.

function User (name, surname, age, id) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.id = Math.ceil(Math.random() * 10);
}
User.prototype.info = function () {
    return `This user ${this.name} ${this.surname} ${this.age}, ID-${this.id}`;
}
let userTest = new User ('Taras', 'Shevchenko', 47);
console.log(userTest.info());



// Створити методи на прототайп для оновлення ключів обєкту юзер наприклад змінити імя, вік користувача.ІD не міняється

User.prototype.change = function (name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
};

userTest.change('Ivan', 'Franko', 59)
console.log(userTest);

// Створити функцію конструктор створення (прямокутника, квадрата), в прототип винести методи обчислення площі, переметра та визначення діагоналі

function Rectangle (height, width) {
    this.height = height;
    this.width = width;
}
Rectangle.prototype.square = function () {
    return `Square: ${this.height * this.width}`
};
Rectangle.prototype.perimeter = function () {
    return `Perimeter: ${2 * this.height + 2 * this.width}`
};
Rectangle.prototype.diagonals = function () {
    return `Diagonals: ${Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.width, 2))}`
};

let rectangleExample = new Rectangle (2, 4);
console.log(rectangleExample.square());
console.log(rectangleExample.perimeter());
console.log(rectangleExample.diagonals());

// Отримати від користувача значення name, вивести в консоль першу і останню літеру з name в верхньому регістрі.

let userName = prompt('Enter name and surname');

function Initials (user) {
    let nameSurname = user.toUpperCase()
    console.log(`${nameSurname.slice(0, 1)} ${nameSurname.slice(-1,)}`);
}
Initials(userName);

// Створити функцію, яка отримує стрінг, обрізає пробіли спочатку і кінця стрінгу, якщо стрінг має довжину більше 10, то відрізає все після 10 і додає 3 крапки

let textExample = ' Hello world   '

function StringPruning (part) {
    let text = part.trim();
    if (text.length > 10) {
        console.log(`${text.slice(0, 10)} ...`);
    }
}
StringPruning(textExample);