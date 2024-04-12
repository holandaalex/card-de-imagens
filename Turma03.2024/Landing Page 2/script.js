var swiper = new swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect:{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerview: 2
        },
        768: {
            slidesPerview: 1
        },
        1024: {
            slidesPerview: 3
        }
    }
});