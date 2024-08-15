window.app = window.app || {};
window.app.counter = (function (clicker) {
    'use strict'
    let count = 0;

    clicker.increment = () => count++;

    function getClicker(){
        return count;
    }
    clicker.getClicker= getClicker;
  return clicker;

}(window.app.counter || {}));
app.counter.increment();
console.log(app.counter.getClicker());