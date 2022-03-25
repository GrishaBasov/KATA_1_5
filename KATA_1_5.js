
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: "auto",

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',

    },
});


// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: false,
//     slidesPerView: "auto",
//
//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },
//
//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//
//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });




let button = document.querySelector('.read-more')
let menuOpen = document.querySelector('.main-menu')
let menuClose = document.querySelector('.hide')
button.addEventListener('click', function () {
    menuOpen.classList.add('main-menu--open')
    button.classList.add('read-more--hide')
    menuClose.classList.remove('hide--remove')
});

menuClose.addEventListener('click', function () {
    menuClose.classList.add('hide--remove')
    menuOpen.classList.remove('main-menu--open')
    button.classList.remove('read-more--hide')
});

