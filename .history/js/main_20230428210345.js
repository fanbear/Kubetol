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
        if (window.innerWidth > 1440) {
            const videoMP = video.getAttribute('data-mp');
            const videoWebm = video.getAttribute('data-webm');

            video.querySelector('source').setAttribute('src', videoWebm);
            video.addEventListener('loadedmetadata', function () {
                // Play the video
                video.play();
            });
        }

    }


    //Product page TABS ----------------------
    //-----------------------------------------------
    //-----------------------------------------------
    // Product page options tab
    const tabLinks = document.querySelectorAll('.option__head-item');
    const tabItems = document.querySelectorAll('.option__body-item');


    if (tabLinks) {

        tabLinks.forEach((tabLink, i) => {
            tabLink.addEventListener('click', () => {

                tabLinks.forEach((tabLink) => {
                    tabLink.classList.remove('option__head-active');
                });
                tabItems.forEach((tabItem) => {
                    tabItem.classList.remove('option__body-active');
                });


                tabLink.classList.add('option__head-active');
                tabItems[i].classList.add('option__body-active');
            });
        });
    }
    // Product page main tab
    const mainTabLinks = document.querySelectorAll('.product-tab__head-item');
    const mainTabItems = document.querySelectorAll('.product-tab__body-item');

    if (mainTabLinks) {
        mainTabLinks.forEach((mainLinks, i) => {
            mainLinks.addEventListener('click', (e) => {

                mainTabLinks.forEach((mainLinks) => {
                    mainLinks.classList.remove('product-tab__head-active');
                });
                mainTabItems.forEach((tabItem) => {
                    tabItem.classList.remove('product-tab__body-active');
                });


                mainLinks.classList.add('product-tab__head-active');
                mainTabItems[i].classList.add('product-tab__body-active');

                const optionLink = mainTabItems[i].querySelectorAll('.option__head-item');
                const optionItems = mainTabItems[i].querySelectorAll('.option__body-item');

                console.log(optionLink);
                if (optionLink) {
                    optionLink.forEach((elem, i) => {
                        elem.classList.remove('option__head-active');
                    });

                    optionItems.forEach((elem) => {
                        elem.classList.remove('option__body-active');
                    });


                    optionLink[0].classList.add('option__head-active');
                    optionItems[0].classList.add('option__body-active');
                }


            });
        });
    }


    // ************** Function "View More" ********************

    function showMore(button, list, showItem) {

        const listCount = list.length;
        let count = 0;
        console.log(button);
        if (listCount > showItem) {
            list.forEach((item, i) => {
                if (item.classList.contains('result__show')) {
                    count += 1;
                }

            })
            list.forEach((item, i = count) => {
                if (i < count + showItem) {
                    setTimeout(() => {
                        item.classList.remove('result__hidden');
                        item.classList.add('result__show');
                    }, i * 100 - i * 50)

                }
                if (listCount < count + 1) {
                    button.classList.add('btn-disable')
                }
            })
        }
    }


    // Search page view more
    const searchBtn = document.querySelector('.search-result__btn button');
    const searchItemList = document.querySelectorAll('.result-item');

    if (searchItemList) {
        if (searchItemList.length > 3) {
            searchItemList.forEach((item, i) => {
                if (i > 2) {
                    item.classList.add('result__hidden');
                }
            })
        }
    }
    if (searchBtn) {
        searchBtn.addEventListener('click', () => showMore(searchBtn, searchItemList, 3))
    }


    // News Category page view more

    const newsBtn = document.querySelector('.news-category__btn button')
    const newsItemList = document.querySelectorAll('.grid-item_news');

    if (newsItemList) {
        if (newsItemList.length > 4) {
            newsItemList.forEach((item, i) => {
                if (i > 3) {
                    item.classList.add('result__hidden');
                }
            })
        }
    }

    if (newsBtn) {
        newsBtn.addEventListener('click', () => showMore(newsBtn, newsItemList, 4))
    }


    // 404 error page back to history
    const backBtn = document.querySelector('.error-page__btn a');

    if (backBtn) {
        backBtn.addEventListener('click', (e) => {
            e.preventDefault();

            window.history.back();
        })
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
        autoplayHoverPause: true,
        responsive: {
            1440: {
                items: 4,
            },
            1024: {
                items: 3,
            }
        }
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

    // Magnific popup
    if ($('.image-link')) {
        $('.image-link').magnificPopup({ type: 'image' });

        $('.spec-img-container').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image'
            // other options
        });
    }

});

