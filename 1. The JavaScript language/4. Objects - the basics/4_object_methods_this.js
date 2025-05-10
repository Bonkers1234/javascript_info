
// Task 1
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?
// wont work because 'makeUser()' is not a method, and 'this' is evaluated during the methods 'call', more explanation at the website with task


// Task 2
// Create an object calculator with three methods:

//     read() prompts for two values and saves them as object properties with names a and b respectively.
//     sum() returns the sum of saved values.
//     mul() multiplies saved values and returns the result.

let calculator = {
  read() {
    this.b = +prompt('Input numeric value for b: ', 0)
    this.a = +prompt('Input numeric value for a: ', 0)
  },
  sum() {
    return this.a + this.b
  },
  mul() {
    return this.a * this.b
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


// Task 3
// There’s a ladder object that allows you to go up and down:

//To make it chainable we need to return 'this' in every method
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this
  }
};

ladder
  .up()
  .up()
  .down()
  .showStep() // 1
  .down()
  .showStep(); // 0





