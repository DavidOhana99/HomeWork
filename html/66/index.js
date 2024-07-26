'use strict'
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

function isuppercase(ch) {
  return ch === ch.toUpperCase();
}


function ourEvery(anArray, filterFunction) {

  for (let i = 0; i < anArray.length; i++) {
    if (!filterFunction(anArray[i])) {
      return false;
    }
  }
  return true;
}

const charaters = ourEvery(letters, isuppercase);
console.log(charaters);

const lett2 = ['H', 'J', "H"]

const charaters2 = ourEvery(lett2, isuppercase);
console.log(charaters2);

console.log(letters.every(isuppercase))

////////

const Letters = ['a', 'b', 'c', 'D', 'e', 'f', 'g', 'h', 'i'];

function isuppercase(ch) {
  return ch === ch.toUpperCase();
}


function ourSome(anArray, filterFunction) {

  for (let i = 0; i < anArray.length; i++) {
    if (filterFunction(anArray[i])) {
      return true;
    }
  }
  return false;
}

const Charaters = ourSome(letters, isuppercase);
console.log(charaters);

const Lett2 = ['H', 'J', "H"]

const Charaters2 = ourSome(lett2, isuppercase);
console.log(charaters2);

console.log(Letters.some(isuppercase))


//////


function onlyif(anArray, filterFunction, dosomething) {

  for (let i = 0; i < anArray.length; i++) {
    if (filterFunction(anArray[i])) {
      dosomething(anArray[i]);
    }
  }

}
function printIt(it) {
  console.log('our printit', it);
}
onlyif(letters, isuppercase, printIt);

Letters.filter(isuppercase).forEach(printIt);

