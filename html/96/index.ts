function userinfo(name: string, age: Number): string {
    return `${name} is ${age} years old!`;
}

const username: string = 'david';
const age: number = 25;

console.log(userinfo(username, age));

class foo<x> {
    constructor(public value: x) { }
}

let y: foo<number>;
let j = new foo(23)

console.log(j)

interface person {
    first: string,
    last: string,

}

const newuser: person = {
    first: 'david',
    last: 'ohana',

}

console.log(newuser)

