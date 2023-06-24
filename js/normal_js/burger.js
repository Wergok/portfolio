const burger = document.querySelector(".burger");

if (burger) {
    const burgerButtons = document.querySelectorAll(".burger-button");

    burgerButtons.forEach((element) => {
        element.addEventListener("click", () => changeStatusBurger(burger));
    });
}

function changeStatusBurger(burger) {
    burger.classList.toggle("burger--active");
    document.body.classList.toggle("body--lock");
}
