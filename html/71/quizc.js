// SL - this file doesnt run. Get error in browser when loaded due to same top level scope variable names used in multiple files...
'use strict';
function counter() {
    const counter1 = 10;
    for (let i = 0; i < counter1; i++) {
        app.counter.increment(i);
    };
}


function cntr(number, newcounter) {
    for (let i = 0; i <= number; i++) {

        console.log(newcounter.increment(i));
    }
}

counter();

// SL - you called it getClicker - and we want to see the result in the console. Cmmenting out and replacing
// app.counter.getCount();
console.log(app.counter.getClicker());

// SL - you called it counter2 and createClicker. Commenting out and replacing
//const aCounter = app.cntr.createCounter();
const aCounter = app.counter2.createClicker();
cntr(5, aCounter);

//const aScndCounter = app.cntr.createCounter();
const aScndCounter = app.counter2.createClicker();
cntr(10, aScndCounter);

// SL after all the creating and incrementing we were then supposed to print out counts at the end...

// SL - Seems like you could use some more practice with basic coding exercises...
// SL - Grade - 70
