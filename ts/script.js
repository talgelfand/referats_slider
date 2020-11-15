'use strict';
var slides = document.querySelectorAll('.slide'), prev = document.querySelector('.prev'), next = document.querySelector('.next'), total = document.querySelector('.counter__total'), current = document.querySelector('.counter__current'), consoleMessage = "This is my TypeScript slider";
var slideIndex = 1;
console.log(consoleMessage);
showSlides(slideIndex);
// total.textContent = slides.length;
total.textContent = (slides.length).toString();
console.log("Total amount of slides: " + slides.length);
function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides.forEach(function (item) { return item.classList.add("hide"); });
    slides.forEach(function (item) { return item.classList.remove("show"); });
    slides[slideIndex - 1].classList.add("show");
    current.textContent = slideIndex.toString();
    console.log("Current slide: " + slideIndex);
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}
prev.addEventListener('click', function () {
    plusSlides(-1);
});
next.addEventListener('click', function () {
    plusSlides(1);
});
