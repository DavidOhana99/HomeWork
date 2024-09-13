window.app = window.app || {};
window.app.counter = (function (clicker) {
    'use strict'
    let count = 0;

    clicker.increment = () => count++;

    function getClicker(){
        return count;
    }
    clicker.getClicker= getClicker;

  // SL - indentation is messed up here, thats a problem.
  return clicker;

}(window.app.counter || {}));

// SL - why is this here? Its supposed to be incremented 10 times in another file
//app.counter.increment();
//console.log(app.counter.getClicker());
