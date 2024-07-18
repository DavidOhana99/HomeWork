"use strict";

let ans = prompt("convert f to c");
convertTocelc(ans);

let ans2 = prompt("convert c to f");
convertToFeran(ans2);

function convertTocelc(degree) {
    let myans = ((degree-32)*5) /9;
    alert (myans);
}

function convertToFeran(degree) {
    let myans =((degree/5)*9)+32;
    alert (myans)
}


