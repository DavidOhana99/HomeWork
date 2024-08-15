
console.log(app.counter.getClicker());
const aCounter = app.counter2.createClicker();
aCounter.increment();
aCounter.getCount();
const cntr = app.counter2.createClicker();


for (let i = 0; i < 10; i++) {
    app.counter.increment();
    console.log(app.counter.getClicker());
}

