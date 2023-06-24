const mainPage = document.querySelector(".main-page");
const headerHeight = document.querySelector(".header").offsetHeight;
const viewHeight = window.innerHeight;
const consultationPage = document.querySelector(".consultation");

function fullScreen(element) {
    if (element.offsetHeight > viewHeight) {
        element.style.marginTop = `${headerHeight}px`;
        return null;
    } else {
        element.style.marginTop = `${headerHeight}px`;
        element.style.height = `${viewHeight - headerHeight}px`;
        window.addEventListener("resize", function () {
            const viewHeight = window.innerHeight;
            element.style.marginTop = `${headerHeight}px`;
            element.style.height = `${viewHeight - headerHeight}px`;
        });
    }
}

fullScreen(mainPage);
