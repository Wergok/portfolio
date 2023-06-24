function scroll(element) {
    const path = element.dataset.path;

    const offsetPosition = getPositionToScroll(path);

    window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
    });
}

function getPositionToScroll(path) {
    const elementToScroll = document.querySelector(path);
    const topOffset = document.querySelector(".header").offsetHeight;
    const elementPosition = elementToScroll.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    return offsetPosition;
}

function changeStatusBurger(burger) {
    document.querySelector(".burger").classList.toggle("burger--active");
    document.body.classList.toggle("body--lock");
}

const burgerSrcollButtons = document.querySelectorAll(".burger-body__item");

if (burgerSrcollButtons) {
    burgerSrcollButtons.forEach((element) => {
        element.addEventListener("click", () =>
            setTimeout(function () {
                scroll(element);
            }, 800)
        );
        element.addEventListener("click", () => changeStatusBurger(burger));
    });
}

document.querySelectorAll(".menu__button").forEach((element) => {
    element.addEventListener("click", () => scroll(element));
});

document.querySelectorAll(".card-price__button").forEach((element) => {
    element.addEventListener("click", () => scroll(element));
});

document.querySelectorAll(".main-page__button").forEach((element) => {
    element.addEventListener("click", () => scroll(element));
});