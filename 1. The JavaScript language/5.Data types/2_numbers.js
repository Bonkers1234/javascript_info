
// Task 1

let numOne = +prompt('First number: ')
let numTwo = +prompt('Second number: ')

console.log(numOne + numTwo)


// Task 2

// According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.
alert( 1.35.toFixed(1) ); // 1.4
// In the similar example below, why is 6.35 rounded to 6.3, not 6.4?
alert( 6.35.toFixed(1) ); // 6.3
// How to round 6.35 the right way?

alert( 6.35.toFixed(20) ); // 6.34999999999999964473, .34 will be rounded down
alert( 1.35.toFixed(20) ); // 1.35000000000000008882, .35 will be rounded up
// this will become revealed if we use 20 decimal points or as many as the first break of INTERNALLY rounded number, 16 in this case
// to fix this we can multiply by 10 to bring it closer to an integer so we get .5 fraction that is equal to 1/2 in binary and can be
// represented with no issues, then divide by 10 and we get correct number
alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4


// Task 3

function readNumber() {
  let num
  do {
    num = prompt('Provide a number: ', 0)
  }
  while(!isFinite(num)) 
  // necessary for '0' numerical value failsafe, for '!num' with '0' it would infinitely loop, but with 'isFinite` '0'
  // is converted to 'true' since its a number, and isnt converted and read as 'false'

  if (num === null || num === '') return null

  return +num
}

alert(`Read: ${readNumber()}`)


// Task 4

// This loop is infinite. It never ends. Why?

let i = 0;
while (i != 10) {
  i += 0.2;
}

// we are adding imprecise fractions that cant be properly represented in binary form and thus will never equal '10' exactly


// Task 5

function random(min, max) {
  return min + Math.random() * (max - min)
}
// first 'Math.random()' creates a number from 0..1, then we multiply by 'max-min', so the value can never be greater than 'max', and
// add 'min' last so the value can never be lower than 'min'


// Task 6

function randomInteger(min, max) {
  // fast imporper solution
  return Math.round(min + Math.random() * (max - min))

  // proper solution 1
  // now rand is from  (min-0.5) to (max+0.5)
  // let rand = min - 0.5 + Math.random() * (max - min + 1);
  // return Math.round(rand);

  // proper solution 2
  // here rand is from min to (max+1)
  // let rand = min + Math.random() * (max + 1 - min);
  // return Math.floor(rand);
}











