
// Task 1
alert( null || 2 || undefined ); // result is 'true' and '2' is returned

// Task 2
alert( alert(1) || 2 || alert(3) ); // alert(1) will output '1' in the browser but return 'undefined'/falsy value and then '2' is returned 

// Task 3
alert( 1 && null && 2 ); // null

// Task 4
alert( alert(1) && alert(2) ); // 1 and then 'undefined' since alert outputs 1 and && returns alert()s return value which is void

// Task 5
alert( null || 2 && 3 || 4 ); // 3

// Task 6
if(age >= 14 && age <= 90) {
  alert('ok')
}

// Task 7
if(!(age >= 14 && age <= 90)) {
  alert('ok')
}
if(age < 14 || age > 90) {
  alert('ok')
}

// Task 8
if (-1 || 0) alert( 'first' ); // '-1' is truthy, alert will execute
if (-1 && 0) alert( 'second' ); // alert wont execute, result will be 'false'
if (null || -1 && 1) alert( 'third' ); // '-1' and '1' is truthy, '1' will be returned, alert will execute

// Task 9
let login = prompt('Login: ')

if(login === 'Admin') {
  let password = prompt('password: ')
  if(password === 'TheMaster') {
    alert('welcome')
  } else if(password === '' || password === null) {
    alert('canceled')
  } else {
    alert('wrong password')
  }
} else if(login === null || login === '') {
  alert('Canceled')
} else {
  alert('I dont know you')
}