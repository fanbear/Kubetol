document.addEventListener('DOMContentLoaded', () => {

    // Language list open ------------------------
    // -------------------------------------------
    // -------------------------------------------
    const langList = document.querySelector('.language-list');
    const langBtn = document.querySelector('.header-list__open');

    langBtn.addEventListener('click', () => {

        if (langBtn.classList.contains('no-transform')) {
            langBtn.classList.add('header-list__open-transform');
            langBtn.classList.remove('no-transform');
        } else {
            langBtn.classList.remove('header-list__open-transform');
            langBtn.classList.add('no-transform');
        }
        langList.classList.toggle('language-list-opened');

    })


    // Header Menu -----------------------
    // -----------------------------------
    // -----------------------------------

    const headeMenuBtn = document.querySelector('.header-menu');
    const headerMenuList = document.querySelector('.header-menu__list');

    headeMenuBtn.addEventListener('click', () => {

        if (!headerMenuList.classList.contains('header-menu__active')) {
            headerMenuList.classList.add('header-menu__active');
            headerMenuList.classList.remove('header-menu__no-active');
        } else {
            headerMenuList.classList.add('header-menu__no-active');
            headerMenuList.classList.remove('header-menu__active');
        }
    })

    //Video fon main page ---------------
    // ----------------------------------
    // ----------------------------------

    const video = document.querySelector('.slider-item video');
    const videoData = video.getAttribute('data-preload')

    if (video) {
        video.querySelector('source').setAttribute('src', videoData);
        setTimeout(() => {
            video.play();
        }, 3000)

    }
})

$(document).ready(function () {

    //Main page slider
    $(".main-video__sldier").owlCarousel({
        items: 1,
        loop: false,
        dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });

    //Kubetelo shipped sldier
    $(".kubetol-shipped__slider").owlCarousel({
        items: 1,
        loop: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
});
