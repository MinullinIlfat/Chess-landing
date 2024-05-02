const slider = document.querySelector('.slider-items');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.slider-item'));
let slideCount = slides.length;
let slideIndex = 0;
let page = 1
let pages = document.createElement('div');

showPages = function () {
    let titlePage = document.querySelector('.slider-title-page')
    pages.className = 'pages';
    pages.innerText = page + ' / ' + slideCount.toString();
    titlePage.appendChild(pages)
}

showPages();

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);


function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    if (page !== 1) {
        page--
        nextButton.classList.remove('disabled');
        nextButton.addEventListener('click', showNextSlide);
    }
    showPages();
    updateSlider();

    if (page === 1) {
        prevButton.className = 'slider-title-arrow prev-button disabled';
        prevButton.removeEventListener('click', showPreviousSlide);
        return;
    }
    updateSlider();
    showPages();
}


function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    if (page !== slideCount) {
        page++
        prevButton.classList.remove('disabled')
        prevButton.addEventListener('click', showPreviousSlide);
    }

    updateSlider();
    showPages();

    if (page === slideCount) {
        nextButton.classList.add('disabled');
        nextButton.removeEventListener('click', showNextSlide);
        return;
    }
    updateSlider();
    showPages();
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


updateSlider();


const sliderAirPlane = document.querySelector('.stages-items');
const prevButtonAirPlane = document.querySelector('.prev-button-airplane');
const nextButtonAirPlane = document.querySelector('.next-button-airplane');
const slidesAirPlane = Array.from(sliderAirPlane.querySelectorAll('.stages-item'));
const slideCountAirPlane = slidesAirPlane.length;
let slideIndexAirPlane = 0;

prevButtonAirPlane.addEventListener('click', showPreviousSlideAirPlane);
nextButtonAirPlane.addEventListener('click', showNextSlideAirPLane);

function showPreviousSlideAirPlane() {
    slideIndex = (slideIndexAirPlane - 1 + slideCountAirPlane) % slideCountAirPlane;
    updateSlider();
}

function showNextSlideAirPLane() {
    slideIndex = (slideIndexAirPlane + 1) % slideCountAirPlane;
    updateSlider();
}

function updateSliderAirPlane() {
    slidesAirPlane.forEach((slide, index) => {
        if (index === slideIndexAirPlane || index === slideIndexAirPlane + 1) {
            slide.style.display = 'flex';
        } else {
            // slide.style.display = 'none';
        }
    });
}

updateSliderAirPlane();
