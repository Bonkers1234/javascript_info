# 2. JavaScript Fundamentals

## 2.1 Hello, world! [link](https://javascript.info/hello-world)
- server-side environment execute `node my.js`
- javascript can be inserted into HTML in few ways:
  - inside `body` element: `<script> your code here </script>`
  - as meta tag with source attribute inside head: `<script src="/path/to/script.js"></script>`
  - we can also attach multiple scripts each in separate script tag
- put ONLY the simplest scripts in HTML and more complex in separate files so that they can be stored in cache and be reused by other webpages 
with same origin
- if `src=""` is set in `<script>` tag the content inside is ignored, but still there can be multiple `<script>` tags either with `src=""` or code
content inside

### Exercises:
- 1_hello_world.html
- 1_hello_world.js


## 2.2 Code structure [link](https://javascript.info/structure)
General information about **Statements, Semicolons and Comments**.

## 2.3 The modern mode, "use strict" [link](https://javascript.info/strict-mode)
To maintain old code compatibility **strict** mode is *disabled* by default. `"use strict"` has to be explicitly enabled in code to use modern, possibly noncompatible functionality.
Things to remember about `"use strict"`:
- **HAS** to be located at the **TOP** of the `<script>` tag code content
- **CAN'T** be disabled once activated
- **CAN** be activated to work inside a singular function only
- developer console **DOESN'T** use `"use strict"` by default
- **classes/modules** enable `"use strict"` automatically

## 2.4 Variables [link](https://javascript.info/variables)
Basic information regarding working with variables, like their definitions, naming practices, differences between `let`/`var`/`const`, etc.

### Exercises:
- 4_variables.js


## 2.5 Data types [link](https://javascript.info/types)
JavaScript is a *dynamically* typed language (we can reset variable values to be different data types on the fly).
There are 8 basic data types:
- `Number`:
  - `integer`
  - `floating point`
  - special numeric values:
    - `Infinity/-Infinity`
    - `NaN`
- `BigInt`:
  - was recently added to the language to represent integers of arbitrary length and is created by appending `n` to the end of an integer
- `String`
- `Boolean`
- `null`
- `undefined`
- `symbol` type is used to create unique identifiers for objects
- `object` for more complex data structures (is not a **primitive** value like the rest)

The `typeof/typeof()` operator allows us to see which type is stored in a variable.

### Exercises:
- 5_data_types.js


## 2.6 Interaction: alert, prompt, confirm [link] (https://javascript.info/alert-prompt-confirm)
- `alert("Hello")`: It shows a message and waits for the user to press “OK”
  - The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window
- `prompt(title, [default])`: It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel, then either
returns input field to a variable or `null` if it is canceled
- `confirm(question)`: The function `confirm` shows a modal window with a question and two buttons: OK and Cancel. Returns `true`/`false`

### Exercises:
- 6_interaction.html


## 2.7 Type Conversions [link](https://javascript.info/type-conversions)
Used when we need to explicitly convert a value to the expected type. We can distinguish:
- **String Conversion**:
  - `String(value)`
  - String conversion is mostly obvious. A `false` becomes `"false"`, `null` becomes `"null"`, etc.
- **Numeric Conversion**:
  - `Number(str/boolean/null/undefined)`
  - If the string is not a valid number, the result of such a conversion is `NaN`
- **Boolean Conversion**:
  - `Boolean(value)`
  - Values that are intuitively “empty”, like `0`, an empty string, `null`, `undefined`, and `NaN`, become `false`
  - Other values become `true`


## 2.8 Basic operators, maths [link](https://javascript.info/operators)
`Operand`: is what operators are applied to, like number or string

`Operator`: is either applied to one operand(`unary`) or evaluates an expression between 2 operands(`binary`):
- `-x` is a unary operand that reverses the sign of a number
- `y - x` is a binary operand that evaluates the expression

Math operators:
- `+, -, *, /`
- `%`: Reminder of the integer division (8 % 3) // 2, the remainder of 8 divided by 3
- `**`: Exponentiation (a ** b raises a to the power of b)

String concatenation with binary `+`:
- `let s = "my" + "string";` concatenates strings into one
- `'1' + 2` converts number to a string and concatenates
- in more complex examples with more than 1 operator expression is evalueated one after another:
  - `2 + 2 + '1'` // "41" and not "221"
  - `'1' + 2 + 2` // "122" and not "14"
- The binary `+` is the only operator that supports strings in such a way
- Other arithmetic operators work **only** with numbers and always convert their operands to numbers
  - `6 - '2'` // 4, converts '2' to a number
  - `'6' / '2'` // 3, converts both operands to numbers

Numeric conversion, unary `+`:
- does nothing to numbers 
- converts other data types into numbers like `Number()`:

  `let apples = "2"`

  `let oranges = "3"`

  `+apples + +oranges` // 5 instead of '23'

Operator precedence:
- If an expression has more than one operator, the execution order is defined by their *precedence*, or, in other words, the default priority order of operators
- Parentheses override any precedence `(1 + 2) * 2`

Modify-in-place:
- `+=, -=, *=, /=` shorthand for `n = n + 5`
- `n *= 3 + 5;` // right part evaluated first, same as n *= 8

Increment/decrement:
- either prefix(`++counter`, returns incremented valuer) or postfix(`counter++`, returns preincrement value)
- can be usend inside expression like `2 * ++counter(1) // 4` but is harder to understand

Bitwise operators and Comma are rarely used in everyday programming, more info [link](https://javascript.info/operators#bitwise-operators)

### Exercises:
- 8_operators.js


## 2.9 Comparisons [link](https://javascript.info/comparison#boolean-is-the-result)
- note to be added...

### Exercises:
- 9_comparisons.js


## 2.10 Conditional branching: if, '?' [link](https://javascript.info/ifelse)
...

### Exercises:
- 10_conditionals.js


## 2.11 Logical operators [link](https://javascript.info/logical-operators)
...

### Exercises:
- 11_logical operators.js


## 2.12 Nullish coalescing operator '??' [link](https://javascript.info/nullish-coalescing-operator)
- written as `??`
- `??` returns the first argument if it's not `null/undefined`. Otherwise, the second one.
- The common use case for `??` is to provide a default value
- due to low precendece it should always be used with parentheses


## 2.13 Loops: while and for [link](https://javascript.info/while-for)

### Exercises:
- 13_loops.js


## 2.14 The "switch" statement [link](https://javascript.info/switch)
- A `switch` statement can replace multiple `if` checks.
- It gives a more *descriptive* way to compare a value with multiple variants.
- uses `strict` equality operator so **type** matters for each case
- each case needs a `break` statement or the code will execute until the end of `switch` 
- as a result of the above we can *group* `case`'s together with last one having a `break` statement
- at the end of `switch` we can put optional `default` case that is executed if no `case` is matched

### Exercises:
- 14_switch.js


## 2.15 Functions [link](https://javascript.info/function-basics)
...

### Exercises:
- 15_functions.js


## 2.16 Function expressions [link](https://javascript.info/function-expressions)
- **function expression** allows us to create a function in the middle of an expression
- `callback function` is a function passed into another function to be *called back* later if necessary
- we can write *shorter* `anonymous` functions as `callbacks` inside the function *call* arguments, which are inaccessible outside of the function
- differences between function `declaration` and `expression`:
  - synthax (`function nameOfFunction() {}` and `let nameOfFunction = function() {}`)
  - **expression** is *creaetd* when interpreter/compiler reaches the code line it is created on
  - **declaration** is *hoisted* to the top before code execution so it can be called even before original declaration (due to internal algorithm)
  - **declaration** is visible (with `use strict`) inside its code block and not outside (example with conditional declaration)
  - **expression** can be assigned conditionally to the variable outside the block scope (in the example above), or even with `anonymous` functions passed inside a ternary operaton as `function expression` 


## 2.17 Arrow functions, the basics [link](https://javascript.info/arrow-functions-basics)
- **arrow function**`() => {}` can be written instead of **function expression** `function() {}`
- if we have `{}` for code block, a `return` is needed
- a **single** argument passed into `arrow function` does not need *parentheses* but if there are no arguments at all they are necessary

### Exercises:
- 17_arrow_functions.js





