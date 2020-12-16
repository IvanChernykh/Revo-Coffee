'use strict'

function Slider(btn, slide) {
    let buttons = document.querySelectorAll(btn);
    let slides = document.querySelectorAll(slide);
    let stepSize = slides[0].firstElementChild.clientWidth + 30;
    let step = 0;

    function getStep() {
        for (let elem of slides) elem.style.transform = `translateX(${-stepSize * step}px)`;
    }
    function removeClass(n) {
        buttons[n].classList.remove('active');
    }
    function addClass(n) {
        buttons[n].classList.add('active');
    }
    buttons[1].addEventListener('click', function () {
        if (step >= slides[0].children.length - 2) removeClass(1);
        step++;
        getStep();
        if (step >= 1) addClass(0);
        console.log(stepSize);
    })
    buttons[0].addEventListener('click', function () {
        step--;
        getStep();
        if (step < slides[0].children.length) addClass(1);
        if (step == 0) removeClass(0);
    })
}
Slider('.coffee__slider-btn', '.coffee__row');
Slider('.combo__slider-btn', '.combo__slides');
function giftsetSlides() {
    let slides = document.querySelectorAll('.giftset__item');
    let buttons = document.querySelectorAll('.giftset__slider-btn');
    function removeClass(elems) {
        for (let elem of elems) elem.classList.remove('active');
    }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            removeClass(slides);
            removeClass(buttons);
            buttons[i].classList.add('active');
            slides[i].classList.add('active');
        })

    }
}
giftsetSlides();