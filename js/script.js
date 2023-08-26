let currentPosition = 0;
let spoller = document.querySelector('.slider__items');
let item = document.querySelector('.slider__item');
let items = document.querySelectorAll('.slider__item');
let previosItem = document.querySelector('.slider__body_next-item');
let nextItem = document.querySelector('.slider__body_previos-item');
let step = item.getBoundingClientRect().width;
let watchWindow = 3;


document.addEventListener("click",function (e){
    const targetElement = e.target;
    console.log(targetElement);
        if(targetElement === previosItem){
            if (currentPosition === 0) {
                currentPosition = step * ((items.length) - watchWindow + 1);
                spoller.style.right = currentPosition + 'px';
            }
            currentPosition = currentPosition - step;
            spoller.style.right = currentPosition + 'px';
        }
        if(targetElement === nextItem){
            if (currentPosition === (step * ((items.length) - watchWindow))) {
                currentPosition = 0;
                spoller.style.right = currentPosition - step + 'px';
                currentPosition = -step;
            }
        currentPosition = currentPosition + step;
        spoller.style.right = currentPosition + 'px';
        }
});



