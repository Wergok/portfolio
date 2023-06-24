class CheckInterection {
    constructor(element) {
        this.element = element;
    }

    get windowPosition() {
        return {
            top: window.scrollY,
            left: window.scrollX,
            bottom: window.scrollY + document.body.clientHeight,
            right: window.scrollX + document.body.clientWidth,
        };
    }

    get targetPosition() {
        return {
            top: window.scrollY + this.element.getBoundingClientRect().top,
            left: window.scrollX + this.element.getBoundingClientRect().left,
            bottom:
                window.scrollY + this.element.getBoundingClientRect().bottom,
            right: window.scrollX + this.element.getBoundingClientRect().right,
        };
    }

    checkVisible() {
        this._targetPosition = this.windowPosition;
        this._windowPosition = this.targetPosition;
        if (
            this._targetPosition.bottom > this._windowPosition.top &&
            this._targetPosition.top < this._windowPosition.bottom &&
            this._targetPosition.right > this._windowPosition.left &&
            this._targetPosition.left < this._windowPosition.right
        ) {
            return true;
        }
        return false;
    }
}

class AnimationText extends CheckInterection {
    listener = () => {
        return this.animation();
    };
    constructor(element) {
        super(element);

        this.#addStyleDisableAnimation();
        window.addEventListener("scroll", this.listener);
        setTimeout(
            document.addEventListener("DOMContentLoaded", this.listener, {
                once: true,
            }),
            1
        );
    }

    #addStyleDisableAnimation() {
        this.element.classList.add("transition");
        this.element.style.transform = "translate(-100px, 0px)";
        this.element.style.visibility = "hidden";
    }

    #removeStyleDisableAnimation() {
        this.element.style.transform = "translate(0px, 0px)";
        this.element.style.visibility = "visible";
    }

    animation() {
        this.visibility = this.checkVisible();

        if (this.visibility) {
            this.#removeStyleDisableAnimation();
            window.removeEventListener("scroll", this.listener);
        }
    }
}

const elements = document.querySelectorAll(".animation");
elements.forEach((element) => {
    new AnimationText(element);
});
