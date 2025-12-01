// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const CounterModule = (function () {

    let count = 0;

    function increaseA() {
        count = count + 7;
        render();
    }

    function increaseB() {
        count = count + 33;
        render();
    }

    function reset() {
        count = 0;
        render();
    }

    function render() {
        const el = document.querySelector("#time_display");
        el.textContent = count;
    }

    return {
        increaseA,
        increaseB,
        reset
    };

})();

document
    .querySelector("#btn_brief")
    .addEventListener("click", CounterModule.increaseA);

document
    .querySelector("#btn_shift")
    .addEventListener("click", CounterModule.increaseB);

document
    .querySelector("#btn_zero")
    .addEventListener("click", CounterModule.reset);