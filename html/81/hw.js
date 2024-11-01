"use strict"
const going = {
    print() {
        console.log(`I am ${this.make} that is ${this.color}`);
    },
    go(speed) {
        console.log(`${this.make} is going ${speed} mph`);
    }
};

function vehicle(make, color) {
    this.make = make;
    this.color = color;

}
Object.assign(vehicle.prototype, going);
const p3 = new vehicle('ford', 'black');

p3.go(77);
p3.print();

function plane(make, color, airline) {
    vehicle.call(this, make, color);
  
    this.airline = airline;
  }

  plane.prototype = Object.create(vehicle.prototype);

plane.prototype.go = function (speed) {
    console.log(`${this.airline} ${this.make} is going ${speed} mph `);
};

const p1 = new plane('747', 'white','delta');

p1.go(3000);
p1.print();