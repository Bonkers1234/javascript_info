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




