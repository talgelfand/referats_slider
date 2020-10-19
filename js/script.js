'use strict';

const slides = document.querySelectorAll('.slide'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      total = document.querySelector('.counter__total'),
      current = document.querySelector('.counter__current');

let slideIndex = 1;

showSlides(slideIndex);

total.textContent = slides.length;
console.log(`Total amount of slides: ${slides.length}`);

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(item => item.style.display = 'none');

    slides[slideIndex - 1].style.display = 'block';

    current.textContent = slideIndex;
    console.log(`Current slide: ${slideIndex}`);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

prev.addEventListener('click', () => {
    plusSlides(-1);
});

next.addEventListener('click', () => {
    plusSlides(1);
});