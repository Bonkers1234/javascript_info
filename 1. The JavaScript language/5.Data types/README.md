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














