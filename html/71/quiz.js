'use strict'

const letters = ["a", "b", "c"];

// SL - This function is hard coded to upper case letters. Its not a general purpose map function taking a callback as asked for...
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

// SL - ok but not quite what was asked for... Doesnt take a callback - not a map function, example was supposed to double numbers...
// SL - lots of missing semi colons. Not a problem - and if you dont believe in them ok, but I wonder if you dont have a linter set up?
