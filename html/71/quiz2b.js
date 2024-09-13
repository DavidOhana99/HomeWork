window.app = window.app || {};
window.app.counter2 = (function (clicker) {
    'use strict'

    // SL - you put count out here - where its shared by all the counters returned by createCLicker - they step on each other we end up with 20 as both counters use the same count... if you moved it into createClicker, each would have its own count used by the return closures...
    let count = 0;
    let counter =0;
    function createClicker() {
        counter++;
        console.log(`counter is ${counter}`)
        return{
            increment:()=>count++,

            // SL - getCount should return count, let caller log if thats what they want to do
            getCount:() =>
                console.log(count)
        };
    }
    clicker.createClicker = createClicker;
    return clicker;

}(window.app.counter2 || {}));

// SL - why is this here? Your supposed to create 2 and incrmeent them 15 and 5 times in a third file...
//const aCounter = app.counter2.createClicker();
//aCounter.increment();
//aCounter.getCount();
//const cntr = app.counter2.createClicker();
