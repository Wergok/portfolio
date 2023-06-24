"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contacts__form");
    form.addEventListener("submit", formSend);

    async function formSend(element) {
        element.preventDefault();

        const resultValidate = formValidate(form);

        const formData = new FormData(form);

        if (resultValidate) {
            document.querySelector(".wrapper").classList.add("loading-body");
            let response = await fetch("php/mail.php", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
                document
                    .querySelector(".wrapper")
                    .classList.remove("loading-body");
            } else {
                alert("Ошибка");
                document
                    .querySelector(".wrapper")
                    .classList.remove("loading-body");
            }
        }
    }

    function formValidate(form) {
        const formInputs = form.querySelectorAll(".contacts__input");

        for (const input of formInputs) {
            console.log(input);
            if (input.classList.contains("email")) {
                console.log(!input.validity.patternMismatch);
                console.log(!input.value.valueMissin);

                if (
                    !input.validity.patternMismatch &&
                    !input.validity.valueMissin
                ) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
});
