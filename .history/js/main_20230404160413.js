document.addEventListener('DOMContentLoaded', () => {
    // Language list open
    const langList = document.querySelector('.language-list');
    const langBtn = document.querySelector('.header-list__open');

    langBtn.addEventListener('click', () => {

        langBtn.style.transition = '0.4s';
        langBtn.style.transform = 'rotate(180deg)';
        langBtn.style.bottom = '-10px';
    })
})