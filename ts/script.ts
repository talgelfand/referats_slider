'use strict';

const slides = document.querySelectorAll('.slide'),
      prev: Element = document.querySelector('.prev'),
      next: Element = document.querySelector('.next'),
      total: Element = document.querySelector('.counter__total'),
      current: Element = document.querySelector('.counter__current'),
      consoleMessage: string = "This is my TypeScript slider";

let slideIndex: number = 1;

console.log(consoleMessage);

showSlides(slideIndex);

// total.textContent = slides.length;
total.textContent = (slides.length).toString();
console.log(`Total amount of slides: ${slides.length}`);

function showSlides(n: number) {
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(item => item.classList.add("hide"));
    slides.forEach(item => item.classList.remove("show"));

    slides[slideIndex - 1].classList.add("show");

    current.textContent = slideIndex.toString();
    console.log(`Current slide: ${slideIndex}`);
}

function plusSlides(n: number) {
    showSlides(slideIndex += n);
}

prev.addEventListener('click', () => {
    plusSlides(-1);
});

next.addEventListener('click', () => {
    plusSlides(1);
});