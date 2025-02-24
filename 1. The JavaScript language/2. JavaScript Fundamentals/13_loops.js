
// Task 1
let i = 3;

while (i) {
  alert( i-- ); // last value alerted is 1
}

// Task 2
let a = 0;
while (++a < 5) alert( a ); // starts to output 'a' as 1 since its 'prefix' ++ operator, 1/2/3/4

let b = 0;
while (b++ < 5) alert( b ); // starts to output 'b' as 0 since its 'postfix' ++ operator, 1/2/3/4/5

// Task 3
for (let i = 0; i < 5; i++) alert( i );

for (let i = 0; i < 5; ++i) alert( i ); // both will show 'i' as 0 at first since the 'step' is only applied after the first loop iteration

// Task 4
for(let i = 2; i <= 10; i++) {
  if(!(i % 2)) {
    alert(i)
  }
}

// Task 5
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

let c = 0
while(i < 3) {
  alert( `number ${c}!` )
  i++
}

// Task 6
let d
do {
  d = +prompt('Please provide number greater than 100', '')
} while(d <= 100 && d)

// Task 7
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}