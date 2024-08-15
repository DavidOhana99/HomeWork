'use strict'

const letters = ["a", "b", "c"];


function map(anArray) {
  const upperCasedLetters = [];
  for (let i = 0; i < letters.length; i++) {

    upperCasedLetters.push(anArray[i].toUpperCase());
  }
  return upperCasedLetters;
}


const upperCased = map(letters)
console.log(letters)
console.log(upperCased);