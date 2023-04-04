document.addEventListener('DOMContentLoaded', () => {
    // Language list open
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

        if (!headerMenuList.classList.contains('header-menu__active') || headerMenuList.classList.contains('header-menu__no-active')) {
            headerMenuList.classList.add('header-menu__active');
        } else {
            // if (headerMenuList.classList.contains('header-menu__active')) {
            //     headerMenuList.classList.add('header-menu__no-active');
            //     headerMenuList.classList.remove('header-menu__active');
            // } else {
            //     headerMenuList.classList.remove('header-menu__no-active');
            // }
            console.log('asd');
        }
    })
})