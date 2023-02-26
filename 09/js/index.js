window.onload = () => {

    //  Створити массив шляхів до зображень і створити слайдер, який переключає кожні 3 секунди картинку. Слайдер повинен бути зациклений, коли доходить до кінця массиву, починає показувати зображення з початку. Анімації і ефекти до слайдеру по бажанню.
    
    let slideItem = [
        {
            src: './img/Fusion.jpg',
        },
        {
            src: './img/Kuga.jpg',
        },
        {
            src: './img/Puma.jpg',
        },
        {
            src: './img/S-Max.jpg',
        },
    ];
    let boxSlid = document.querySelector('.slider');
    
    slideItem.forEach((item) => {
        let div = document.createElement('div');
        let img = document.createElement('img');
        div.className = 'slider-item';
        img.setAttribute('src', item.src);
        div.appendChild(img);
        boxSlid.appendChild(div);
    });
    
    let offset = 0;
    
    function AutoChange(){
        offset += 900;
        if (offset > 2700) {
            offset = 0;
        };
        boxSlid.style.left = -offset + 'px';
    };
    setInterval(AutoChange, 3000);
    
    // Створити 2 кнопки, які при кліку будуть перемикати зображення в слайдері вперед назад.
    
    document.querySelector('.right-button ').addEventListener('click', function () {
        offset += 900;
        if (offset > 2700) {
            offset = 0;
        };
        boxSlid.style.left = -offset + 'px';
    });
    
    document.querySelector('.left-button ').addEventListener('click', function () {
        offset -= 900;
        if (offset < 0) {
            offset = 2700;
        };
        boxSlid.style.left = -offset + 'px';
    });
    
    // Зробити таймер, який відраховує 60 секунд і виводить розрахунок на сторінку, а потім відображає alert ('Ви дочикались знижок). Стилізування за бажанням.
                          
    let time = document.querySelector('.time');
    let iTime = 60;
        
    let counter = setInterval(function () {
        iTime--;
        time.innerText = iTime;
        if (iTime === 0) {
            alert("Ви дочекались знижок !!!");
            clearInterval(counter);
        }
    }, 1000);
    
    // Створити кнопку, по натисканню на кнопку повино зявлятись модальне вікно, в модалці повинна бути кнопка закрити вікно. Під модальним вікном повиний бути блок підкладка (на всю ширину сторінки), при кліку на який, модальне вікно закривається. За допомгою js задайте left i top щоб вікно було по центру, для цього використайте window.innerWidth і window.innerHeight а також визначте розміри блоку модального вікна.
    
    let modal = document.querySelector('.modal');
    let arround = document.querySelector('.arround');
    let modalBody = document.querySelector('.modalBody');
    let modalContent = document.querySelector('.modalContent');
    let close = document.querySelector('.close');
    
        let ModalWindow = function () {
            modal.setAttribute('style', 'display: block; position: fixed; width: 100%; height: 100%; top: 0; left: 0;');
            modalContent.setAttribute('style', 'background-color: #fff;  position: relative; padding: 30px; width: 500px;');
    
            let width = modalContent.clientWidth;      // вираховуємо довжину блоку модального вікна
            let height = modalContent.clientHeight;    // вираховуємо висоту блоку модального вікна
            let windowWidth = window.innerWidth;        // вираховуємо довжину вікна в браузері
            let windowHeight = window.innerHeight;      // вираховуємо висоту вікна в браузері
    
            modalBody.setAttribute('style', `display: flex; align-items: center; z-index: 2; position: absolute; top:${windowHeight / 2 - height / 2}px; left:${windowWidth / 2 - width / 2}px;}`);
        };
    
        let CloseModal = function () {
            modal.setAttribute('style', 'display: none;');
        };
    
    let buttonWindow = document.querySelector('.button-window');
    buttonWindow.addEventListener('click', ModalWindow);
    
    close.addEventListener('click', CloseModal);
    arround.addEventListener('click', CloseModal);
    
    }