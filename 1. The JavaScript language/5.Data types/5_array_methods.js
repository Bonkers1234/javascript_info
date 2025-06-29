
// Task 1

// my solution
// function camelize(str) {
//   let arr = str.split('-')
//   for(let i = 1; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
//   }
//   return arr.join('')
// }

// answer solution including more things that we learned
function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('') // joins ['my', 'Long', 'Word'] into 'myLongWord'
}


// Task 2

function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b)
}


// Task 3  Filter range "in place"

function filterRangeInPlace(arr, a, b) {
  let temp = arr.filter(item => item >= a && item <= b)
  arr.splice(0, arr.length, ...temp)
}


// Task 4  Sort in decreasing order

arr.sort((a, b) => b - a)


// Task 5  Copy and sort array

function copySorted(arr) {
  return arr.slice().sort()
}


// Task 6  Create an extendable calculator

function Calculator() {
  this.operations = [
    ['+', (a, b) => a + b],
    ['-', (a, b) => a - b],
  ],
  this.calculate = function(str) {  // we CANT use method shorthand inside a constructor function, it lacks 'prototype property'?
    // First try, makes 1st part work but seems worthless for the 2nd
    // let arr = str.split(' ')
    // return arr[1] === '+' ? +arr[0] + +arr[2] : arr[0] - arr[2]
    let parts = str.split(' ')
    for(let operation of this.operations) {
      if(operation[0] === parts[1]) {
        return operation[1](+parts[0], +parts[2])
      }
    }
  },
  this.addMethod = function(name, func) {
    this.operations.push([name, func])
  }
}

// Original solution 
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };
  this.calculate = function(str) {
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  };
  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}


// Task 7  Map to names

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

let names = users.map(user => user.name)

alert( names ); // John, Pete, Mary


//  Task 8  Map to objects

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

let usersMapped = users.map(user => (   // no 'return' keyword is needed IF we use '()' to GROUP the returned expression as a whole, just like single line expression
    {
        fullName: `${user.name} ${user.surname}`,
        id: user.id
    }
))

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith


// Task 9  Sort users by age

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
// For instance:
function sortByAge(users) {
    users.sort((a, b) => a.age - b.age)
}

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete


// Task 10  Shuffle an array

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// Multiple runs of shuffle may lead to different orders of elements. For instance:

// let arr = [1, 2, 3];

function shuffle(array) {
    // another question unrelated to the topic about advanced algorithm that at this point in time is pointless
    array.sort(() => Math.random() - 0.5)
}

shuffle(arr);
// arr = [3, 2, 1]
shuffle(arr);
// arr = [2, 1, 3]
shuffle(arr);
// arr = [3, 1, 2]
// ...
// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.


// Task 11  Get average age
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
// The formula for the average is (age1 + age2 + ... + ageN) / N.
// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(users) {
    return users.reduce((sum, item) =>  item.age + sum, 0) / users.length
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


// Task 12  Filter unique array members
// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.
// For instance:

function unique(arr) {
  return arr.reduce((start, item) => !start.includes(item) ? start.concat(item) : start, []) 
  // was 'start.push(item)' instead of 'concat' but push returns new arary length so the start/accumulator was number '1' next iteration and called 'includes' on it cusing TypeError
  // 'concat' returns new array so accumulator becomes that value each iteration resolving the issue, could be done with 'splice' maybe? 'start.splice(start.length, 0, item)'
  // update: cant be done with 'splice' since it only returns the deleted values
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O


// Task 13  Create keyed object from array
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
// For example:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr) {
    return arr.reduce((sum, user) => {
        // return sum[user.id] ? sum : (sum[user.id] = user)  // this doesnt work, returns only last user
        if(!sum[user.id]) {
            sum[user.id] = user
        }
        return sum
    }, {})
}

let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// Such function is really handy when working with server data.
// In this task we assume that id is unique. There may be no two array items with the same id.
// Please use array .reduce method in the solution.






















