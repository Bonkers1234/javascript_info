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
- **order** of Object properties: first **integer** string values from lowest to highest, then **named** properties by the creation order, we can *cheat* by changing integers to non-integers by adding `+` to change order

### Exercises:
- 1_objects.js





