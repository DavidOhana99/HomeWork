window.app = window.app || {};
window.app.counter2 = (function (clicker) {
    'use strict'
    let count = 0;
    let counter = 0;
    function createClicker() {
        counter++;
        console.log(`counter is ${counter}`)
        return {
            increment: () => count++,
            getCount: () =>
                console.log(count)
        };
    }
    clicker.createClicker = createClicker;
    return clicker;

}(window.app.counter2 || {}));
const aCounter = app.counter2.createClicker();
aCounter.increment();
aCounter.getCount();
const cntr = app.counter2.createClicker();