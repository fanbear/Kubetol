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

    // Main Page Video fon main page ---------------
    // ----------------------------------
    // ----------------------------------

    const video = document.querySelector('.slider-item video');


    if (video) {

        const videoData = video.getAttribute('data-preload');

        video.querySelector('source').setAttribute('src', videoData);
        video.addEventListener('loadedmetadata', function () {
            // Play the video
            video.play();
        });
    }


    //Product page options tab ----------------------
    //-----------------------------------------------
    //-----------------------------------------------
    // Отримуємо всі кнопки табів та контент табів
    const tabLinks = document.querySelectorAll('.option__head-item');
    const tabItems = document.querySelectorAll('.option__body-item');


    if (tabLinks) {
        // Додаємо обробник подій на кожну кнопку таба
        tabLinks.forEach((tabLink, i) => {
            tabLink.addEventListener('click', (e) => {
                // Відключаємо активний клас у всіх кнопок табів та контенту табів
                tabLinks.forEach((tabLink) => {
                    tabLink.classList.remove('option__head-active');
                });
                tabItems.forEach((tabItem) => {
                    tabItem.classList.remove('option__body-active');
                });

                // Додаємо активний клас на натиснуту кнопку таба та відповідний контент таба
                console.log(Array(tabItems[i]));
                tabLink.classList.add('option__head-active');
                Array(tabItems[i]).classList.add('option__body-active');
            });
        });
    }




})

$(document).ready(function () {


    if ($('.header').hasClass('header-rgb')) {
        $(window).scroll(function () {
            if ($('.header-rgb').offset().top > 50) {
                $('.header-rgb').css("background-color", "white")
            } else {
                $('.header-rgb').css("background-color", "rgb(255, 255, 255, 0.8)")
            }
        });
    }



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
        loop: true,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
    //Bsetseller sldier
    $(".bestseller__slider").owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true
    });

    //Reviews slider
    $(".reviews-slider").owlCarousel({
        items: 1,
        loop: false,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
    //News slider
    $(".news-slide").owlCarousel({
        items: 4,
        stagePadding: 50,
        loop: true,
        margin: 30,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
    // Category slider
    $(".top-slider").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false
    });

    //digits animation
    $(window).scroll(function () {
        $('.number').each(function () {
            const min = $('.number').offset().top - 600;
            const max = $('.number').offset().top - 500;
            if (isScrolledIntoView($(this)) > min && isScrolledIntoView($(this)) < max) {
                animateNumbers($(this));
            }
        });
    });

    function animateNumbers(element) {
        const startValue = parseInt(element.data('start'));
        const endValue = parseInt(element.data('end'));
        const duration = 2000;

        $({ Counter: startValue }).animate({ Counter: endValue }, {
            duration: duration,
            easing: 'swing',
            step: function () {
                element.text(Math.ceil(this.Counter));
            }
        });
    }

    function isScrolledIntoView(element) {
        const viewportTop = $(window).scrollTop();
        return viewportTop;
    }



    // AOE animations start
    AOS.init({
        disable: 'mobile', // відключити на мобільних пристроях
    });
});

