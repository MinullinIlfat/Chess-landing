const slider = document.querySelector('.slider-title-items');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.slider-title-item'));
const slideCount = slides.length;
let slideIndex = [0, 1, 2];

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

updateSlider();
