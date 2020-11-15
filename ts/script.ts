'use strict';

const slides = document.querySelectorAll('.slide'),
      prev: Element = document.querySelector('.prev'),
      next: Element = document.querySelector('.next'),
      total: Element = document.querySelector('.counter__total'),
      current: Element = document.querySelector('.counter__current');

let slideIndex: number = 1;

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

    // slides.forEach(item => item.style.display = 'none');

    slides.forEach(item => item.classList.add("display_none"));

    // slides[slideIndex - 1].style.display = 'block';

    slides[slideIndex - 1].classList.add("display_block");

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