
// Task 1

// What is this code going to show?
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // ? 
// it will show 4 since objects are copied by reference


// Task 2

const styles = ['Jazz', 'Blues']
styles.push('Rock-n-roll')
styles[Math.floor(styles.length / 2)] = 'Classics'
console.log(styles.shift())
styles.unshift('Rap', 'Reggae')


// Task 3

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ? , the result is an alert popup printing the entire object array with all, now 3, elements including the function that calls
          // 'this' object from outside function


// Task 4

// Write the function sumInput() that:
//     Asks the user for values using prompt and stores the values in the array.
//     Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
//     Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.
function sumInput() {
  const arr = []
  let sum = 0
  do {
    let value = prompt('Provide numeric value: ', 0)
    if(value === '' || value === null || !isFinite(value)) {
      break
    } else {
      arr.push(+value)
    }
  } while (true)
  
  for(let i of arr) {
    sum += i
  }
  return sum
}


//  Task 5

// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
// The task is: find the contiguous subarray of arr with the maximal sum of items.
// Write the function getMaxSubSum(arr) that will return that sum.
// For instance:

// getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (take all)

// If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:
// getMaxSubSum([-1, -2, -3]) = 0

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}
// this was not learning task about arrays but a complex take on certain algorithm with poorly worded description











