// step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let pauseDom = document.getElementById('pause'); // ✅ Ajout du bouton pause

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

let timeRunning = 3000;
let timeAutoNext = 7000;

let isPaused = false; // ✅ Indique si le slider est en pause

nextDom.onclick = function () {
    showSlider('next');
}

prevDom.onclick = function () {
    showSlider('prev');
}

// ✅ Fonction pour programmer la transition automatique
function scheduleAutoNext() {
    if (!isPaused) {
        runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);
    }
}

let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    scheduleAutoNext(); // ✅ Reprogramme la transition automatique sauf si en pause
}

// ✅ Fonction liée au bouton pause
pauseDom.onclick = function () {
    isPaused = !isPaused; // Bascule l'état de pause
    pauseDom.textContent = isPaused ? '▶️' : '⏸️';

    clearTimeout(runNextAuto); // Stoppe l'autoplay immédiatement

    if (!isPaused) {
        scheduleAutoNext(); // Reprend l'autoplay
    }
};
