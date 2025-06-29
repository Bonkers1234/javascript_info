## 5.1 Methods of primitives [link](https://javascript.info/primitives-methods) 
- when we try to access/use a method on a `primitive` value 3 steps are performed:
  - special object is created called `object wrapper`, that knows the value provided and allows to use certain methods
  - the method is run and new value is returned
  - `special object` is destroyed leaving original value intact
- there are 5 **types** of `wrappers`:
  - `String`, `Number`, `Boolean`, `Symbol`, `BigInt`

### Exercises:
- 1_methods_of_primitives.js


## 5.2 Numbers [link](https://javascript.info/number)
- More ways to write a number:
  - syntactic sugar for readability `let billion = 1_000_000_000;`
  - In JavaScript, we can shorten a number by appending the letter `"e"` to it and specifying the zeroes count:
    ```javascript
    let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes
    alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)
    // 1e3 === 1 * 1000; // e3 means *1000
    // 1.23e6 === 1.23 * 1000000; // e6 means *1000000

    let mсs = 0.000001;
    let mcs = 1e-6; // five zeroes to the left from 1
    // -3 divides by 1 with 3 zeroes
    1e-3 === 1 / 1000; // 0.001
    // -6 divides by 1 with 6 zeroes
    1.23e-6 === 1.23 / 1000000; // 0.00000123
    // an example with a bigger number
    1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times
    ```

- Hex, binary and octal numbers:
  - `hexadecimal` numbers can represent colors, encode characters and can be used for other things, we write them as follows:
    - `0x` and then number, `0xff/0xFF` case doesnt matter
  - `binary` and `octal` are rarely used, both prefixed `0b` and `0o` respectively

- toString(base):
  - `num.toString(base)` returns a string representation of `num` in the numeral system with the given base
    ```javascript
    let num = 255;
    alert( num.toString(16) );  // ff
    alert( num.toString(2) );   // 11111111
    ```
  - The `base` can vary from `2` to `36`. By default, it’s `10`:
    - **base=16** is used for hex colors, character encodings etc, digits can be `0..9` or `A..F`
    - **base=2** is mostly for debugging bitwise operations, digits can be `0` or `1`
    - **base=36** is the maximum, digits can be `0..9` or `A..Z`, can be used to shorten long numeric identifier like `url`:
      - `alert( 123456..toString(36) ); // 2n9c` , remember **2** dots, 1 for decimal point, and second for method call, alternatively:
      - `(123456).toString(36)`

- Rounding:
  - `Math.floor`, Rounds down: `3.1` becomes `3`, and `-1.1` becomes `-2`
  - `Math.ceil`, Rounds up: `3.1` becomes `4`, and `-1.1` becomes `-1`
  - `Math.round`, Rounds to the nearest integer: `3.1` becomes `3`, `3.6` becomes `4`. In the middle cases `3.5` rounds up to `4`, and `-3.5` rounds up to `-3`
  - `Math.trunc`, Removes anything after the decimal point without rounding: `3.1` becomes `3`, `-1.1` becomes `-1`
  - `.toFixed(n)`, rounds the number to `n` digits after the point and returns a `string` representation of the result
    ```javascript
    let num = 12.34;
    alert( num.toFixed(1) ); // "12.3"
    // This rounds up or down to the nearest value, similar to Math.round:
    let num = 12.36;
    alert( num.toFixed(1) ); // "12.4"
    // result of toFixed is a string. If the decimal part is shorter than required, zeroes are appended to the end:
    let num = 12.34;
    alert( num.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits
    ```

- Imprecise calculations:
  - be careful of `integer imprecision` caused by binary mathematic operations that can cause problems in cash shop apps etc.
  - simple solution is to use `+sum.toFixed(2)`
  - more info on website link

- Tests: isFinite and isNaN:
  - `isNaN(value)`converts its argument to a number and then tests it for being `NaN`, returns `true`/`false`
  - `isFinite(value)` converts its argument to a **number** and returns `true` if it’s a regular number, `false` otherwise
    - can be used to validate if provided value is a number
  - `Number.isNaN(value)`, strict version of the above, does not convert anything
  - `Number.isFinite(value)`, same as above

- `parseInt(str, base)` and `parseFloat`:
  - They “read” a number from a string until they can’t. In case of an error, the gathered number is returned:
    - `parseInt(str, base)` returns `integer`, can also **parse** strings of `hex`/`binary`/`octa`/etc given `base` of the numeral system:
      ```javascript
      alert( parseInt('0xff', 16) ); // 255
      alert( parseInt('ff', 16) ); // 255, without 0x also works
      alert( parseInt('2n9c', 36) ); // 123456
      ```
    - `parseFloat` returns floating point number
  - useful for extraction of information from text/html or CSS parameters:
    ```javascript
    alert( parseInt('100px') ); // 100
    alert( parseFloat('12.5em') ); // 12.5
    alert( parseInt('12.3') ); // 12, only the integer part is returned
    alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading
    // There are situations when parseInt/parseFloat will return NaN. It happens when no digits could be read:
    alert( parseInt('a123') ); // NaN, the first symbol stops the process
    ```

- Other math functions:
  - `Math.random()`, Returns a random number from 0 to 1 (not including 1)  `alert( Math.random() ); // 0.1234567894322`
  - `Math.max/min(a, b, c...)`, Returns the greatest and smallest from the arbitrary number of arguments `alert( Math.max(3, 5, -10, 0, 1) ); // 5`
  - `Math.pow(n, power)`, Returns `n` raised to the given power `alert( Math.pow(2, 10) ); // 2 in power 10 = 1024`

### Exercises:
  - 2_numbers.js


## 5.3 Strings [link](https://javascript.info/string)
- Quotes:
  - single/double quotes `' and "`, and backticks that allow us to use `template strings` with `${}` and `multiline` strings

- Special characters:
  - start with `escape character` `\`
  - most common ones are `\n`, quotes `\', \"` and backtick, backslash `\\` and `\t`

- String length:
  - we can get length of the string with `str.length` property

- Accessing characters:
  - to get characters at `pos` we can either use `[]` or `str.at(pos)`:
      ```javascript
      let str = `Hello`;
      // the first character
      alert( str[0] ); // H
      alert( str.at(0) ); // H
      // the last character
      alert( str[str.length - 1] ); // o
      alert( str.at(-1) ); // allows negative position counted from the end of the string
      alert( str[-2] ); // undefined, is returned for negatives with square brackets
      ```
  - `for...of`, allows us to iterate over the string characters:
      ```javascript
      for(let char of "Hello") {
        alert(char) // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
      }
      ```

- Strings are **immutable** and can’t be changed in JavaScript, It is impossible to change a character `str[0] = 'h'; // error`

- Changing the case:
  - `'Interface'.toUpperCase() // INTERFACE`, will turn all letters to UPPER case **BUT** can be applied to single character:
    - `'interface'[0].toUpperCase() // 'I'`, probably even to slices etc.
  - `'Interface'.toLowerCase() // interface`, will turn letters to LOWER case, also can be applied to single character like above

- Searching for a substring:
  - `str.indexOf(substr, [pos])`, looks for the case SENSITIVE `substr` in `str`, starting from 0 index or optionally provided `pos`
    - returns the position `str` was found or `-1` if there was nothing returned/found
      ```javascript
      let str = 'Widget with id';
      alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)
      ```
    - `str.lastIndexOf()`, does the same but from the end
    - with `if` we have to look out for match at `0` index that will covnert to false so better to comapre against `-1`:
      - `if (str.indexOf("Widget") != -1)`
  - `str.inculdes(substr, pos)`, modern method that returns true/false depending if `str` contains `substr`, good for finding match not position
  - `str.startsWith(substr)/str.endsWith(substr)`, do exactly what they are called, **CASE SENSITIVE**

- Getting a substring:
  - `str.slice(start [, end])`, Returns the part of the string from `start` to (but not including) `end`
    - if there is no second argument `slice` goes till the end of the string
    - negative values are possible and are counted from the end `alert( str.slice(-4, -1) )`
  - `str.substring(start [, end])`, Returns the part of the string *between* `start` and `end` (not including `end`)
    - This is almost the same as `slice`, but it allows `start` to be greater than `end` (in this case it simply swaps `start` and `end` values)
    - negative values **DONT WORK** and are treated as `0`
  - `str.substr(start [, length])`, Returns the part of the string from `start`, with the given `length`
    - The first argument may be negative, to count from the end

- Comparing strings:
  - comparing string is not always as easy as it seems like with `'Österreich' > 'Zealand'` since diacritical marks are 'out of order'
  - There are special methods that allow to get the character for the code and back:
    - `str.codePointAt(pos)` Returns a decimal number representing the code for the character at position `pos`:
      - `alert( "z".codePointAt(0) ); // 122`
      - `alert( "z".codePointAt(0).toString(16) ); // 7a (if we need a hexadecimal value)`
    - `String.fromCodePoint(code)` Creates a character by its numeric `code`:
      - `alert( String.fromCodePoint(90) ); // Z`
      - `alert( String.fromCodePoint(0x5a) ); // Z (we can also use a hex value as an argument)`
  - Correct comparisons:
    - when we need to compare strings in different language with their order/rules/algorithms we use `str.localeCompare(str2)`:
      - returns `negative/-1` number if `str` is LESS than `str2`
      - `positive/1` number if `str` is GREATER than `str2`
      - `0` if they are equal

- Extra:
  - `str.trim()` trims spaces from beginning and end of string
  - `str.repeat(n)` repeats string `n` times

### Exercises:
  - 3_strings.js


## 5.4 Arrays [link](https://javascript.info/array)
- allows us to create and store an **ordered collection/list** of something like users, goods, HTML elements

- Declaration:
  - either constructor `let arr = new Array()` or more commonly literal `let fruits = ["Apple", "Orange", "Plum"]`
  - we can:
    - access element `fruits[0] // Apple`
    - replace element `fruits[2] = 'Pear' // now ["Apple", "Orange", "Pear"]`
    - add new element `fruits[3] = 'Lemon' // now ["Apple", "Orange", "Pear", "Lemon"]`
    - get `length` by `fruits.length // 4`
    - while `alert(fruits) // Apple,Orange,Plum,Lemon` will print its content
  - can store elments of **ANY** type and we can act on them:
    ```javascript
    // mix of values
    let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
    // get the object at index 1 and then show its name
    alert( arr[1].name ); // John
    // get the function at index 3 and run it
    arr[3](); // hello
    ```

- Get last elements with `“at”`:
  - recent addition, used previously with 'Accessing characters' with strings since they are arrays themselves
  - `arr.at(i)` is exactly the same as `arr[i]`, if `i >= 0`
  - for negative values of `i`, it steps back from the end of the array, used because `fruits[-1]` is not allowed and would return `undefined`
    - otherwise we would need to use `fruits[fruits.length - 1]`

- Methods `pop/push`, `shift/unshift`:
  - A `queue/FIFO` is one of the most common uses of an array, an ordered collection of elements which supports two operations:
    - `push` appends an element to the end
    - `shift` get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st
  - another use case for arrays – the data structure named `stack/LIFO`, it supports two operations:
    - `push` adds an element to the end
    - `pop` takes an element from the end
  - methods that work with the **END** of of the array:
    - `pop()` Extracts/removes the last element of the array and returns it
    - `push()` Append ELEMENTS to the end of the array, The call `fruits.push(...)` is equal to `fruits[fruits.length] = ...`
  - methods that work with the **BEGINNING** of the array:
    - `shift` Extracts/removes the first element of the array and returns it
    - `unshift` Add ELEMENTS to the beginning of the array

- Internals:
  - essentially `Array` is the same as `Object` extending its methods to work with ordered collections, where `keys` are just numbers
  - it is copied by `reference` just like `Object`
  - Arrays are optimised in JS to make working with them really fast like placing elements in **contiguous memory area** one after another
    plus other optimisations
  - if the engine sees that we try to use Array as an Object it will **TURN OFF** special optimisations, ways to misuse Array:
    - Add a non-numeric property like `arr.test = 5`
    - Make holes, like: add `arr[0]` and then `arr[1000]` (and nothing between them)
    - Fill the array in the reverse order, like `arr[1000]`, `arr[999]` and so on

- Performance:
  - Methods `push/pop` run fast, while `shift/unshift` are slow
  - `shift/unshift` needs to remove/add element at the start and so the whole Array is modified which takes many operations
  - `push/pop` just add/remove element at the end so are contained in way less operations
  - more info at link

- Loops:
  - One of the oldest ways to cycle array items is the `for` loop over indexes `for (let i = 0; i < arr.length; i++)`
  - But for arrays there is another form of loop, `for..of`, `for (let fruit of fruits)`
    - it doesnt give access to the number of the current element, just its value, which in most cases is enough
  - Technically, because arrays are objects, it is also possible to use `for..in`, but there are potential problems:
    - The loop `for..in` iterates over all properties, not only the numeric ones, and if we work with **array like** objects (in browser) that 
      can have non-numerical properties and methods it can cause problems
    - The `for..in` loop is optimized for generic objects, not arrays, and thus is 10-100 times slower

- A word about “length”:
  - `length` automatically updates when we  modify the array but it is actually not the count of values in the array, but the greatest 
    numeric index plus one:
    ```javascript
    let fruits = [];
    fruits[123] = "Apple";
    alert( fruits.length ); // 124
    ```
  - Another interesting thing about the length property is that it’s writable
    - If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible,
      here’s the example:
      ```javascript
      let arr = [1, 2, 3, 4, 5];
      arr.length = 2; // truncate to 2 elements
      alert( arr ); // [1, 2]
      arr.length = 5; // return length back
      alert( arr[3] ); // undefined: the values do not return
      ```
    - So, the simplest way to clear the array is: `arr.length = 0`;

- `new Array()`:
  - `let arr = new Array("Apple", "Pear", "etc");` creates an array with provided values but is rarely used in comparison to `[]`
  - If `new Array` is called with a single argument which is a number, then it creates an array without items, but with the given length:
    ```javascript
    let arr = new Array(2); // will it create an array of [2] ?
    alert( arr[0] ); // undefined! no elements.
    alert( arr.length ); // length 2
    ```
  - use `[]` to avoid problems

- Multidimensional arrays:
  - `Arrays` can have items that are also `arrays`. We can use it for multidimensional arrays, for example to store matrices:
    ```javascript
    let matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    alert( matrix[0][1] ); // 2, the second value of the first inner array
    ```

- `toString`:
  - Arrays have their own implementation of `toString`(no `Symbol.toPrimitive` or `valueOf`) method that returns a comma-separated list of elements
    ```javascript
    let arr = [1, 2, 3];
    alert( arr ); // 1,2,3
    alert( String(arr) === '1,2,3' ); // true
    alert( [] + 1 ); // converted by toString to "" + 1 = "1"
    alert( [1] + 1 ); // converted by toString to "1" + 1 = "11"
    alert( [1,2] + 1 ); // converted by toString to "1,2" + 1 = "1,21"
    ```

- Don’t compare arrays with `==`:
  - Arrays in JavaScript shouldn’t be compared with operator `==`, This operator has no special treatment for arrays, it works with 
    them as with any objects (reminder in 'Objects - the basics')
  - if we want to compare arrays do it item-by-item in a loop or with iteration methods from next chapter

### Exercises:
  - 4_arrays.js


## 5.5 Array methods [link](https://javascript.info/array-methods)
- Add/remove items:
  - `arr.splice(start[, deleteCount, elem1, ..., elemN])`, can do everything, insert, remove, replace
    - starts from the index `start`, removes `deleteCount` elements, and then inserts `elem1, ...`, returns array of removed items
    - allows `negative` numbers to count from the end
    - example `arr.splice(0, 0, ...somveArrValues)` will spread and add like `upshift`
  - `arr.slice()`, same as `str.slice`, copies elements in provided range and returns new subarray, can be used to simply make a copy
  - `arr.concat(arg1, arg2)` creates NEW array from provided arrays and OTHER values(objects, etc) `arr.concat([3, 4], 5, 6)`
    - objects are added as a whole `[1, 2].concat({0: "something", 1: "else", length: 2})` = `1,2,[object Object]`
    - if object HAS symbol `[Symbol.isConcatSpreadable]: true` then its treated as an array by `concat` = `1,2,something,else`
    - Array-LIKE object needs to have proper length and keys as numbers not strings

-  Iterate: `.forEach()`:
  - The `arr.forEach(function(item, index, array)` method allows to run a function for every element of the array:
    ```javascript
    ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => { 
      // each of the arguments is PASSED into the provided function in order when you just write 'forEach(alert)' so it has an access to them
      alert(`${item} is at index ${index} in ${array}`); // item=Bilbo, index=0, array=Bilbo,Gandal,Nazgul
    });
    ```

- Searching in array:
  - `indexOf/lastIndexOf and includes`:
    - perform the SAME function as their `string` counterparts
    - `includes` methods handles `NaN` correctly while `indexOf` returns `-1` since its an old function
  - `find and findIndex/findLastIndex`:
    - `arr.find(function(item, index, array){})` works similar to `forEach`, iteration over an array using provided function
      - if function returns `true` the search is stopped and `item` returned otherwise `undefined`
    - `findIndex/findLastIndex` have the same synthax but return `position` of the item or `-1`
  - `filter(function(item, index, array){})`, `find` looks for FIRST matching element and returns `true`, `filter` looks for all matches and
  returns NEW array with ALL matches

- Transform an array:
  - `arr.map(fn(item, index, array) {})` It calls the function for each element of the array and returns the array of results
  - `sort(fn)` sorts the array in **PLACE**(`toSorted(fn)` returns sorted copy), changing its element order:
    - without a `fn` provided array items are **CONVERTED** to strings and compared in LEXICOGRAPHIC order so `2 > 15 = 15, 2, ...`
    - to work as intended we need to supply our own function comparing 2 things `function compare(a, b)` more in docs
  - `reverse()` reverses the order of array items, MODIFIES IN PLACE
  - `split(delim)` splits the string into an array by the given delimiter `delim`(can be `''` for splitting string by letter)
  - `join(glue)` creates a string of `arr` items joined by `glue` between them
  - `arr.reduce(function(accumulator, item, index, array) {// ...}, [initial])`, `initial` if provided is used as first call `accumulator`
    - if no `initial` is provided the 1st array element is used as it and execution starts from second element
  - `reduceRight()` does the same as above but in reverse order

- `Array.isArray([])` returns `true` if provided value is an array otherwise `false`, works for arrays instead of `typeof`

- Most methods support `“thisArg”`:
  - more sophisticated feature of functions above allowing for object methods to recognize `this` when calling a method
  - `users.filter(army.canJoin, army)` is same as `users.filter(user => army.canJoin(user))`

- Summary has more methods that are less frequently used but worth checking

### Exercises:
- 5_array_methods.js











