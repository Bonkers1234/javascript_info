## 5.1 Methods of primitives [link](https://javascript.info/primitives-methods) 
- when we try to access/use a method on a `primitive` value 3 steps are performed:
  - special object is created called `object wrapper`, that knows the value provided and allows to use certain methods
  - the method is run and new value is returned
  - `special object` is destroyed leaving original value intact
- there are 5 **types** of `wrappers`:
  - `String`, `Number`, `Boolean`, `Symbol`, `BigInt`

### Exercises:
- 1_methods_of_primitives.js


