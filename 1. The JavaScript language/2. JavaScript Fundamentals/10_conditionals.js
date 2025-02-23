
// Task 1
if ("0") {
  alert( 'Hello' ); // alert will be shown since '0' is a truthy value
}

// Task 2
let input = prompt(`What is the “official” name of JavaScript?`)

if(input == 'ECMAScript') {
  alert(`Right!`)
} else {
  alert("You don't know? ECMAScript!")
}

// Task 3
let number = prompt('Pick a number')

if(number > 0) {
  alert(1)
} else if (number < 0) {
  alert(-1)
} else {
  alert(0)
}

// Task 4
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

result = a + b < 4 ? 'Below' : 'Over'

// Task 5
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

message = login == 'Employee' ? 'Hello' :
  login == 'Director' ? 'Greetings' :
  login == '' ? 'No login' :
  ''
