export default class Car {
    constructor(color, type) {
        this.color = color;
        this.type = type;
    }

    print() {
        console.log(`${this.color} ${this.type}`);
    }
}


