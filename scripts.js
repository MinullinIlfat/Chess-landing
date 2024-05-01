const slider = document.querySelector('.slider-items');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.slider-item'));
const slideCount = slides.length;
const sliderAirPlane = document.querySelector('.stages-items');
const prevButtonAirPlane = document.querySelector('.prev-button-airplane');
const nextButtonAirPlane = document.querySelector('.next-button-airplane');
const slidesAirPlane = Array.from(sliderAirPlane.querySelectorAll('.stages-item'));
const slideCountAirPlane = slidesAirPlane.length;
let slideIndex = 0;
let slideIndexAirPlane = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
prevButtonAirPlane.addEventListener('click', showPreviousSlideAirPlane);
nextButtonAirPlane.addEventListener('click', showNextSlideAirPLane);

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

function showPreviousSlideAirPlane() {
    slideIndex = (slideIndexAirPlane - 1 + slideCountAirPlane) % slideCountAirPlane;
    updateSlider();
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

function showNextSlideAirPLane() {
    slideIndex = (slideIndexAirPlane + 1) % slideCountAirPlane;
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'flex';
        } else {
            slide.style.display = 'none';
        }
    });
}
function updateSliderAirPlane() {
    slidesAirPlane.forEach((slide, index) => {
        if (index === slideIndexAirPlane) {
            slide.style.display = 'flex';
        } else {
            // slide.style.display = 'none';
        }
    });
}

updateSlider();
updateSliderAirPlane();
