document.addEventListener('DOMContentLoaded', () => {
    // Language list open
    const langList = document.querySelector('.language-list');
    const langBtn = document.querySelector('.header-list__open');

    langBtn.addEventListener('click', (event) => {
        const target = event
        console.log(target)
        event.style.transform = 'rotate(90deg)';
    })
})