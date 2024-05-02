let position = 0;
let slidesToShow = 0;
let page = 1;
let minPage = 1;
if (window.matchMedia("(min-width: 376px)").matches) {
    slidesToShow = 3;
    page = 3;
    minPage = 3
} else {
    slidesToShow = 1;
    page = 1;
    minPage = 1;
}

const slidesToScroll = 1;
const container = document.querySelector('.slider-items');
const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.prev-button');
const btnNext = document.querySelector('.next-button');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

let pages = document.createElement('div');

showPages = function () {
    let titlePage = document.querySelector('.slider-title-page')
    pages.className = 'pages';
    pages.innerText = page + ' / ' + itemsCount.toString();
    titlePage.appendChild(pages);
}

showPages();

items.forEach(item => {
    item.style.minWidth = `${itemWidth}px`;
});

btnPrev.addEventListener('click', showPreviousSlide);
btnNext.addEventListener('click', showNextSlide);

function showNextSlide() {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    if (page !== itemsCount) {
        page++;
        btnPrev.classList.remove('disabled');
        btnPrev.addEventListener('click', showPreviousSlide);
    }

    showPages();
    setPosition();

    if (page === itemsCount) {
        btnNext.classList.add('disabled');
        btnNext.removeEventListener('click', showNextSlide);
        return;
    }

    showPages();
    setPosition();
}

function showPreviousSlide() {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    if (page !== minPage) {
        page--;
        btnNext.classList.remove('disabled');
        btnNext.addEventListener('click', showNextSlide);
    }

    showPages();
    setPosition();

    if (page === minPage) {
        btnPrev.className = 'slider-title-arrow prev-button disabled';
        btnPrev.removeEventListener('click', showPreviousSlide);
        return;
    }

    showPages();
    setPosition();
}

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
}

let positionAirPlane = 0;
let pageAirPlane = 1;
let minPageAirPlane = 1;
const containerAirPlane = document.querySelector('.stages-items');
const trackAirPlane = document.querySelector('.stages-track');
const btnPrevAirPlane = document.querySelector('.prev-button-airplane');
const btnNextAirPlane = document.querySelector('.next-button-airplane');
const itemsAirPlane = document.querySelectorAll('.stages-item');
const itemsCountAirPlane = itemsAirPlane.length - 1;
const itemWidthAirPlane = containerAirPlane.clientWidth / slidesToShow;
const movePositionAirPlane = slidesToScroll * itemWidthAirPlane;

let pagination = document.querySelector('.slider-title-pagination');

showPagesAirPlane = function () {
    for (let i = 0; i < itemsCountAirPlane - 1; i++) {
        let paginationCircle = document.createElement('div');
        paginationCircle.className = 'circle';
        paginationCircle.style.width = '10px';
        paginationCircle.style.height = '10px';
        paginationCircle.style.backgroundColor = '#D9D9D9';
        paginationCircle.style.marginRight = '6px';
        paginationCircle.style.borderRadius = '50%';
        pagination.appendChild(paginationCircle);
    }
    pagination.children[0].classList.add('active');
}

showPagesAirPlane();

itemsAirPlane.forEach(item => {
    item.style.minWidth = `${itemWidthAirPlane}px`;
});

btnPrevAirPlane.addEventListener('click', showPreviousSlideAirPlane);
btnNextAirPlane.addEventListener('click', showNextSlideAirPlane);

function showNextSlideAirPlane() {
    const itemsLeft = itemsCountAirPlane - (Math.abs(positionAirPlane) + slidesToShow * itemWidthAirPlane) / itemWidthAirPlane;

    positionAirPlane -= itemsLeft >= slidesToScroll ? movePositionAirPlane : itemsLeft * itemWidthAirPlane;

    if (pageAirPlane !== itemsCountAirPlane) {
        pageAirPlane++;
        pagination.children[pageAirPlane - 2].classList.remove('active');
        pagination.children[pageAirPlane - 1].classList.add('active');
        btnPrevAirPlane.classList.remove('disabled');
        btnPrevAirPlane.addEventListener('click', showPreviousSlideAirPlane);
    }

    setPositionAirPlane();

    if (pageAirPlane === itemsCountAirPlane - 1) {
        btnNextAirPlane.classList.add('disabled');
        btnNextAirPlane.removeEventListener('click', showNextSlideAirPlane);
        return;
    }

    setPositionAirPlane();
}

function showPreviousSlideAirPlane() {
    const itemsLeft = Math.abs(positionAirPlane) / itemWidthAirPlane;

    positionAirPlane += itemsLeft >= slidesToScroll ? movePositionAirPlane : itemsLeft * itemWidthAirPlane;
    if (pageAirPlane !== minPageAirPlane) {
        pageAirPlane--;
        pagination.children[pageAirPlane].classList.remove('active');
        pagination.children[pageAirPlane - 1].classList.add('active');
        btnNextAirPlane.classList.remove('disabled');
        btnNextAirPlane.addEventListener('click', showNextSlideAirPlane);
    }

    setPositionAirPlane();

    if (pageAirPlane === minPageAirPlane) {
        btnPrevAirPlane.classList.add('disabled');
        btnPrevAirPlane.removeEventListener('click', showPreviousSlide);
        return;
    }

    setPositionAirPlane();
}
const setPositionAirPlane = () => {
    trackAirPlane.style.transform = `translateX(${positionAirPlane}px)`;
}
