// Створити форму як на малюнку, за допомогою js реалізувати перевірку чи співпадають паролі. 
// Чи введені всі дані в полях.
// Якщо всі данні введені, сховати поля і кнопки і вивести текст, реєсстрація пройшла успішно, 
// в полях де помилка змінити колір бордера на червоний

window.onload = () => {
    
    let body = document.querySelector('body');

    let pass = document.querySelector('.pass');
    let cpass = document.querySelector('.cpass');
    let namee = document.querySelector('.name');
    let email = document.querySelector('.email');
    let phone = document.querySelector('.phone');
    let btn = document.querySelector('.btn');
    let AllInput = document.querySelectorAll('input');
    let createForm = document.querySelector('form');
    
    btn.addEventListener('click', function (e) {
        e.preventDefault();
    
        if (pass.value !== cpass.value) {
            pass.setAttribute('style','border: 4px solid red;');
            cpass.setAttribute('style', 'border: 4px solid red;');
            alert('Введені паролі не співпадають');
            return;
        }

        AllInput.forEach((item) => {
            if (item.value == 0) {
                item.setAttribute('style', 'border: 4px solid red');
            }
        })

        let Congrat = document.createElement('h2');
        Congrat.setAttribute('style', 'display: none;');
        body.appendChild(Congrat);
        Congrat.innerText = 'Реєстрація пройшла успішно';
 
        if(
            namee.value != 0 &&
            email.value != 0 &&
            phone.value != 0 &&
            pass.value != 0 &&
            cpass.value != 0
        ){
            createForm.setAttribute('style', 'display: none;');
            Congrat.setAttribute('style', 'display: block; color: white; text-align: center; font-size: 40px;');
        }
        return;
    });
    
}