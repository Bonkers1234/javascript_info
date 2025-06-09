
// Task 1

function ucFirst(str) {
  if(!str) return str // failsafe for empty 'str', otherwise we would get an error

  return str[0].toUpperCase() + str.slice(1)
}


// Task 2

// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
// The function must be case-insensitive:
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

function checkSpam(str) {
  // my solution
  // return str.toLowerCase().includes('viagra') ? true : 
  //   str.toUpperCase().includes('XXX') ? true : 
  //   false

  // cleaner solution 
  let lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}


// Task 3
// Create a function truncate(str, maxlength) that checks the length of the str and, 
// if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
// The result of the function should be the truncated (if needed) string.
// For instance:
// truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"
// truncate("Hi everyone!", 20) == "Hi everyone!"

function truncate(str, maxlength) {
  return str.length > maxlength ?
    str.slice(0, maxlength - 1) + '…' : str
}


// Task 4
// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
// Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.
// The example:
// alert( extractCurrencyValue('$120') === 120 ); // true

function extractCurrencyValue(str) {
  return +str.slice(1)
}
