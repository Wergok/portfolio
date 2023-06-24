const mainPageSwiper = new Swiper(".main-page__swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    loop: true,

    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
        dynamicBullets: true,
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

const portfolioSwiper = new Swiper(".portfolio__swiper", {
    pagination: {
        el: ".portfolio__swiper-pagination",
        type: "bullets",
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    keyboard: {
        enabled: true,
    },

    loop: true,

    slidesPerView: 1,
    slidesPerGroup: 1,

    breakpoints: {
        660: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },

        1248: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    },
});