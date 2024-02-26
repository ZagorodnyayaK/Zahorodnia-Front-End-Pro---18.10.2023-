'use strict';

const slider = document.querySelectorAll(".slider img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

const initializeSlider = () => {
    if (slider.length > 0) {
        slider[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

const showSlide = (index) => {
    slider.forEach(slide =>{
        slide.classList.remove("displaySlide");
    });
    slider[slideIndex].classList.add("displaySlide");
}

const prevSlide = () => {

}
const nextSlide = () => {
    slideIndex++;
    showSlide(slideIndex);
}

