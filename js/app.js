var mask = document.querySelector('.mask');
const animationH = document.querySelectorAll('.animation');
var nav = document.getElementById('nav');
var burger = document.getElementById('burgerButton');

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove()
    }, 800);
});

burger.addEventListener('click', function (event) {
    event.preventDefault();

    nav.classList.toggle('show');
});


if (animationH.length > 0) {
    window.addEventListener('scroll', animScroll);

    function offset(el) {
        const rect = el.getBoundingClientRect(),
              scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    function animScroll() {
        for(let i = 0; i < animationH.length; i++) {
            const animItem = animationH[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight  - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight  - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            } else {
                animItem.classList.remove('active');
            }
        }
    }
    animScroll();
}
