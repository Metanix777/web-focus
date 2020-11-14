window.addEventListener('DOMContentLoaded', () => {
    const arrowsItem = document.querySelectorAll('.arrows__item'),
        screenSlide = document.querySelectorAll('.slide_item'),
        screenContent = document.querySelectorAll('.main-screen__content');
    let current = 0;

    function showSlide (n) {
        let prev = current;
        current += n;

        if (current > screenContent.length-1) current = 0;
        else if (current < 0) current = screenContent.length-1;

        screenSlide[prev].classList.remove('slide_active');
        screenSlide[current].classList.add('slide_active');
        screenContent[prev].classList.remove('slide_active');
        screenContent[current].classList.add('slide_active');
    }

    arrowsItem[0].addEventListener('click', () => {
        showSlide(-1);
    });

    arrowsItem[1].addEventListener('click', () => {
        showSlide(1);
    });
});
