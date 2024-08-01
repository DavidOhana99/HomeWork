'use strict'
let counter = 2;
const myDiv = document.querySelector('#theDiv');
const theButton = document.querySelector('#bttn');
theButton.addEventListener('click', listener);

function listener(e) {
    const myNewButton = document.createElement('button');
    myNewButton.innerText = counter++;
    myNewButton.addEventListener('click', listener);
    myDiv.appendChild(myNewButton);
}

