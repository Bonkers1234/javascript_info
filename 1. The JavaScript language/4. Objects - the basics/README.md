## 4.1 Objects [link](https://javascript.info/object)
`let user = new Object()` , Object **constructor**

`let user = {}` , Object literal synthax

Object features:
- can **access** data using `.` notation: `user.name`
- can also **set** new data with `.` notation: `user.isAdmin = true`
- **delete** property with `delete user.age`
- *multiword* properties **must** be encapsulated in `""` because of whitespace, `user["likes birds"]` / `user = { "likes birds": true }`
- we can use ***computed properties*** with `[]` like this:

  ```javascript
  let fruit = 'apple';
  let bag = {
    [fruit + 'Computers']: 5 // bag.appleComputers = 5
  };
  ```
- Property value shorthand `{ name, age }` will use **variable** name as property name for the value
- Property existence test, `in` operator `"key" in object` to check if it exists
- The `for..in` loop:
```javascript
for (let key in user) {
  alert( key );  // name, age, isAdmin
  alert( user[key] ); // John, 30, true
}
```
- **order** of Object properties: first **integer** string values from lowest to highest, then **named** properties by the creation order, 
we can *cheat* by changing integers to non-integers by adding `+` to change order

### Exercises:
- 1_objects.js


## 4.2 Object references and copying [link](https://javascript.info/object-copy)
- Objects are copied `by reference`, whereas Primitives `as a whole value`
- A variable assigned to an object stores not the object itself, but its `address in memory` – in other words `a reference` to it.
- When an object variable is copied, the reference is copied, but the object itself is not duplicated.
- Two objects are equal **only** if they are the same object, two independent objects are not equal

Cloning objects:
- `Object.assign(dest, ...sources)`, `dest` = target object, `...sources` = list of source objects
  - only performs `shallow copy` on primitive, non-nested values (assumes **ALL** properties are **PRIMITIVES**)
  - example synthax `Object.assign(user, permissions1, permissions2)`
  - if the copied property already exists, it gets **overwritten**
  - can be used for **simple object cloning** like this `let clone = Object.assign({}, user)`
  - **spread synthax** is shorthand way of doing the same `let newUser = { ...user }`

Nested Cloning:
- used when Objects have other Object references as their properties (`deep copy`)
- `structuredClone(object)` clones the object with all nested properties (`let clone = structuredClone(user)`)
  - **can** copy most data types, such as objects, arrays, primitves, circular reference to itself
  - **can't** copy function refences, this can be circumvented by writing custom code or using `lodash` library with `_.cloneDeep(obj)`


## 4.3 Garbage collection [link](https://javascript.info/garbage-collection)
...


## 4.4 Object methods, "this" [link](https://javascript.info/object-methods)
- A function that is a property of an object is called its `method`.
- Method shorthand:
  ```javascript
  // these objects do the same

  user = {
    sayHi: function() {
      alert("Hello");
    }
  };

  // method shorthand looks better, right?
  user = {
    sayHi() { // same as "sayHi: function(){...}"
      alert("Hello");
    }
  };
  ```
- To access the object, a method can use the `this` keyword, the value of this is the object “before dot”, the one used to call the method.
  - `this` **IS NOT BOUND**, it is evaluated during the run-time, depending on the context allowing it to be used in **any** function even if it is not a method of an object:

  ```javascript
  let user = { name: "John" };
  let admin = { name: "Admin" };

  function sayHi() {
    alert( this.name );
  }

  // use the same function in two objects
  user.f = sayHi;
  admin.f = sayHi;
  user.f(); // John  (this == user)
  admin.f(); // Admin  (this == admin)

  admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)
  ```
  - if called without an Object `this` is `undefined` in **STRICT** mode, otherwise `this` will be global `window` object

- Arrow functions have no `this`, if we reference `this` from such function, it's taken from the outer 'normal' function:
  ```javascript
  let user = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
    }
  };

  user.sayHi(); // Ilya
  ```

### Exercises:
- 4_object_methods_this.js


## 4.5 Constructor, operator "new" [link](https://javascript.info/constructor-new)
- Constructor functions:
  - allow us to create and initialize new, reusable objects from predefined blueprint
  - starts with **Capital** letter
  - prefixed with `new` operator, that does the following:
    - A new empty object is created and assigned to `this`
    - The function body executes. Usually it modifies `this`, adds new properties to it
    - value of `this` is returned
    ```javascript
    function User(name) {
      // this = {};  (implicitly)

      // add properties to this
      this.name = name;
      this.isAdmin = false;

      // return this;  (implicitly)
    }
    ```

-  Constructor mode test: new.target:
    - *Advanced stuff*, we can use `new.target` inside a function to check if it was called with or without `new`
    - can be used in libraries to check if function was called with `new` or not, and if so call itself with `new`, this adds flexibility so we dont have to use `new`

- Return from constructors:
  - Usually, constructors do not have a `return` statement. Their task is to write all necessary stuff into `this`, and it automatically becomes the result
  - if there is a `return`:
    - If `return` is called with an object, then the object is returned instead of `this`
    - If `return` is called with a primitive/empty, it’s ignored and `this` is returned

- Methods in constructor:
  - we can also add functions/methods to `this` inside a Constructor function just as any other properties (like 'sayHi')

### Exercises:
- 5_constructor_operator_new.js


## 4.6 Optional chaining '?.' [link](https://javascript.info/optional-chaining)
- The “non-existing property” problem:
  - when traversing down the `.` object property notation we might sometimes encounter (in complex objects) a problem of a property not existing,   either because it was not created or can be optional
    ```javascript
    // document.querySelector('.elem') is null if there's no element
    let html = document.querySelector('.elem').innerHTML; // error if it's null
    ```
  - Trying to access it will result in an error and because of this a `?.` operator was created (previously we used **ternary** or `&&` operators)

- Optional chaining:
  - `?.` stops the evaluation if the value before `?.` is `undefined` or `null` and returns `undefined`
    ```javascript
    let html = document.querySelector('.elem')?.innerHTML; // will be undefined, if there's no element
    let user = null;
    alert( user?.address ); // undefined
    alert( user?.address.street ); // undefined
    ```
  - `?.` applies **ONLY** to the value **BEFORE IT**, not any further
  - **DO NOT OVERUSE IT**, apply only to optional values that are **OK** not to exist

- Short-circuiting:
  - As it was said before, the `?.` immediately stops (“short-circuits”) the evaluation if the left part doesn’t exist
    ```javascript
    let user = null;
    let x = 0;

    user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

    alert(x); // 0, value not incremented
    ```

- Other variants: `?.()`, `?.[]`:
  - `?.()` can be used to check if a function/method exists and **ONLY THEN** execute it:
    ```javascript
    let userAdmin = {
      admin() {
        alert("I am admin");
      }
    };

    let userGuest = {};
    userAdmin.admin?.(); // I am admin
    userGuest.admin?.(); // nothing happens (no such method)
    ```
  - `?.[]` works if we want to access property with `[]` notation instead of `.`:
    ```javascript
    let key = "firstName";

    let user1 = {
      firstName: "John"
    };

    let user2 = null;
    alert( user1?.[key] ); // John
    alert( user2?.[key] ); // undefined
    ```
  - `?.` works also with `delete`:
    ```javascript
    delete user?.name; // delete user.name if user exists
    ```


## 4.7 Symbol type [link](https://javascript.info/symbol)
- only 2 primitive types can serve as an **object property keys**:
  - `string` and `symbol`
  - anything else is **CONVERTED** to `string`

Symbol:
- represents primitive unique identifier with optional `description/symbol name` and is created with `Symbol('id')`
- 2 symbols with same description are **NOT** the same, each is unique
- they **DO NOT** auto convert to `strings` with functions like `alert()` and throw error as safeguard, use either `.toString()` or `symbol.description`

“Hidden” properties: 
- `symbol` is a *hidden* property of an Object that:
  - no other part of the code can **accidentally** access or overwrite
  - by adding it we wont mess up third-party code predefined behaviour in regards to the Object
  - both parties can have their own symbols with same `description` for specific purposes without `id` collisions
- for `{...}` we need to place `symbol` variable inside square brackets `[id]: 123` as we need **value** from the variable and not string
- `for...in` loop **skips** `symbols`, just like `Object.keys(user)` ignores them to prevent **unexpected** access
- `Object.assign()` copies both `string` and `symbol` properties by design, since we want **ALL** properties
- also `Object.getOwnPropertySymbols(obj)` will get us **ALL** object symbols, while `Reflect.ownKeys(obj)` returns **ALL** properties

Global symbols:
- there exists `global symbol registry` where we can create and read **globally** accessible symbols from different parts of our application
  - to **READ** or **CREATE** a symbol, if absent use `Symbol.for(key)`:
    ```javascript
    // read from the global registry
    let id = Symbol.for("id"); // if the symbol did not exist, it is created

    // read it again (maybe from another part of the code)
    let idAgain = Symbol.for("id");

    // the same symbol
    alert( id === idAgain ); // true
    ```
  - for looking up `symbol` 'description' using `symbol` variable (only works for global symbols) use `Symbol.keyFor(symbVar)` // returns 'name'
    - returns `undefined` for non-global symbols
  - remember **ALL** symbols have `.description` property

System symbols:
- there are many system symbols that javascript uses internally to fine-tune various aspects of Objects, some of which are:
  - Symbol.toPrimitive
  - Symbol.iterator
  - Symbol.hasInstance
  - and more...


## 4.8 Object to primitive conversion [link](https://javascript.info/object-toprimitive)
- when we use Object with math operators or in functions like `alert()` they are **AUTO-CONVERTED** to primitives and only then the operation is carried out, which result **CANT** be an Object

Conversion rules:
- no conversion to `boolean`, Objects exist by default
- there exists **ONLY** `numeric` and `string` conversion:
  - numeric happens when we `subtract` or apply mathematical functions to Objects (`Date` Objects can be subtracted)
  - string usually happens when we output an Object with `alert(obj)` and in similar context
- we **CAN** implement conversions by ourselves

Hints:
- javascript decides which conversion to run based on 3 types of `hints`:
  - `string`, for an object-to-string conversion when we expect a string (`alert(obj)`, or object as another object key `anotherObj[obj] = 123`)
  - `number`, for an object-to-number conversion, like when we’re doing maths (`number(obj)`/`+obj`, maths except binary`+` and comparisons `>`)
    - most math functions also include this conversion
  - `default`, occurs in rare cases when operator is *not sure* what type to expect
    - binary `+` can work for string concatenation and number addition, so it will use `default` hint to convert it
    - also with `==` Object can be compared to string/number/symbol and conversion is unclear so `default` is used
- **REMEMBER** all built-in objects except for one case (`Date`) implement `default` conversion same as `number`

Object methods javascript tries to find and call for conversion:
- `Symbol.toPrimitive`, built-in symbol, created like this:
  ```javascript
  obj[Symbol.toPrimitive] = function(hint) {
    // here goes the code to convert this object to a primitive
    // it must return a primitive value
    // hint = one of "string", "number", "default"
  };
  let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };
  ```
  - If the method `Symbol.toPrimitive` exists, it’s used for all hints, and no more methods are needed.
- `toString/valueOf`, If there’s no `Symbol.toPrimitive` then JavaScript tries to find methods `toString` and `valueOf`:
  - for `string` hint, call `toString`, if it doesnt exist or returns Object instead of primitive call `valueOf`
  - for other hints(`number/default`), call `valueOf` and if it doesnt exist or returns an Object call `toString`
- this methods **MUST** return primitive value, if Object is returned it is **IGNORED**
- By default, a plain object has following `toString` and `valueOf` methods that return the following:
  ```javascript
  let user = {name: "John"};
  alert(user); // `toString` is called: [object Object]
  alert(user.valueOf() === user); // returns the object ITSELF so its true
  ```

Implementation of `toString` and `valueOf` insted of `Symbol.toPrimitive`:
  ```javascript
  let user = {
    name: "John",
    money: 1000,
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  };

  alert(user); // toString -> {name: "John"}
  alert(+user); // valueOf -> 1000
  alert(user + 500); // valueOf -> 1500
  ```
  - for single 'catch-all' place to handle conversion we can implememnt only `toString`:
  ```javascript
    let user = {
      name: "John",
      toString() {
        return this.name;
      }
    };

    alert(user); // toString -> John
    alert(user + 500); // toString -> John500
  ```

Further conversions may apply if `toString` by default returns `"2"` from an Object when called with `Obj` * 2, for example



