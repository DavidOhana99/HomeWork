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
app.counter.getCount();

const aCounter = app.cntr.createCounter();
cntr(5, aCounter);

const aScndCounter = app.cntr.createCounter();
cntr(10, aScndCounter);
