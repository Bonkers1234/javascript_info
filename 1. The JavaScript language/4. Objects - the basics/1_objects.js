
// Task 1
const user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name

// Task 2
let schedule = {};

// alert( isEmpty(schedule) ); // true
console.log(isEmpty(schedule))

schedule["8:30"] = "get up";
console.log(isEmpty(schedule))

// alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
  for(let key in obj) {
    return false
  }
  return true
}

// Task 3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumSalary(obj) {
  let sum = 0
  for(let key in obj) {
    sum += obj[key]
  }

  return sum
}

console.log(sumSalary(salaries))

// Task 4
function multiplyNumeric(obj) {
  for(let key in obj) {
    if(!+obj[key]) continue
    obj[key] += obj[key]
  }
}

// official solution
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
console.log(menu)
multiplyNumeric(menu);
console.log(menu)
