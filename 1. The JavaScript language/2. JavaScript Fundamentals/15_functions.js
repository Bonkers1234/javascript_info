
// Task 1 
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?'); // the function will behave the same
}

// Task 2
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

function checkAge2(age) { 
  return age > 18 ? true : confirm('Did parents allow you?') 
}

function checkAge3(age) {
  return age > 18 || confirm('Did parents allow you?')
}

// Task 3
function min(a, b) {
  return a > b ? b : a
}

// Task 4
function pow(x, n) {
  return x ** n
}