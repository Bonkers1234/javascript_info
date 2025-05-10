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


