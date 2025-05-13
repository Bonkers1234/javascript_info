
// Task 1
// Is it possible to create functions A and B so that new A() == new B()?

function A() {  }
function B() {  }

let a = new A();
let b = new B();

alert( a == b ); // true

// Yes, it’s possible.
// If a function returns an object then 'new' returns it instead of 'this'.
// So they can, for instance, return the same externally defined object obj:

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true


// Task 2

function  Calculator() {
  this.read = function() {
    this.a = +prompt('Provide value for a: ', 0)
    this.b = +prompt('Provide value for b: ', 0)
  },
  this.sum = function() {
    return this.a + this.b
  },
  this.mul = function() {
    return this.a * this.b
  }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


// Task 3

function Accumulator(startingValue) {
  this.value = startingValue,
  this.read = function() {
    this.value += +prompt('New number to add: ', 0)
  }
}


