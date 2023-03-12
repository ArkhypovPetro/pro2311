// Створити блок на сторінці, який переміщужться на 10рх в сторону стрілки яку натиснули.

window.onload=()=>{

    let right = 0;
    let down = 0;

window.onkeydown = function move(event) {
    let code = event.keyCode;
    if (code == 39) {
        right -= 10;
        document.querySelector('.block').style.right = right + 'px';
    }
    else if (code == 37) {
        right += 10;
        document.querySelector('.block').style.right = right + 'px';
    }
    else if (code == 38) {
        down += 10;
        document.querySelector('.block').style.bottom = down + 'px';
    }
    else if (code == 40) {
        down -= 10;
        document.querySelector('.block').style.bottom = down + 'px';
    }
}
}