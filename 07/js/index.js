window.onload = ()=>{

    // Створити html документ, в якому є теги header, footer, nav, ul список на 5 елементів li , отримати доступ до цих елементів і змінити там текст за допомогою innerHtml

    let navInfo = document.querySelector(".info");
    navInfo.innerHTML = "Information";

    let [...listItems] = document.querySelectorAll(".item");
    listItems.forEach(element => {
        element.innerHTML = "New element"
    });

    let contacts = document.querySelector(".contact");
    contacts.innerHTML = "Contact information";

    // Знайти батьківський елемент li елемента через методи пошуку батьківського елементу вивести в консоль отримане значення  
  
    let liElement = document.querySelector("li");
    console.log(liElement.parentNode);

    // Створіть класс по додаваню фільма який має такі значення(рік випуску, жанр, назву, кількість переглядів)

    class Movie {
        constructor(year, genre, name, views) {
            this.year = year;
            this.genre = genre;
            this.name = name;
            this.views = views;
        }
    
    // В классі створити метод який визначає рейтинг в залежності від року випуску і кількості переглядів  ( кількість переглядів поділена на різницю між сьогоднішнім роком і роком випуску) 
    
    rate(){
        let yearRate = new Date();
        console.log(`Rate this movie ${this.views/(yearRate.getFullYear() - this.year)}`)
        }
    }
    
    let Matrix = new Movie(2003, "action", "Matrix Reloaded", 100000);
    console.log(Matrix);
    Matrix.rate();
    
    // Створіть массив і розмістіть в ньому створені обєкти фільмів, далі за допомогою синтаксису деструктирізації  переберіть масив  і виведіть значення по року випуску.
    
    let Maverick = new Movie(2022, "action", "Top Gun: Maverick", 20000);
    let Avatar = new Movie(2009, "fantasy", "Avatar", 200000);
    let Legend = new Movie(2015, "thriller", "Legend", 50000);
    let Gladiator = new Movie(2000, "historical", "Gladiator", 70000);
    let Fallout = new Movie(2018, "action", "Mission: Impossible - Fallout", 50000);
        
    let movieArr = [Matrix, Maverick, Avatar, Legend, Gladiator, Fallout];
    for(let{year}of movieArr){
    console.log(year);
    }
}