### Q1. Which of the following best describes JavaScript?
A. A statically typed, compiled, class-based language
B. A lightweight interpreted (or JIT compiled), prototype-based, dynamic language
C. A markup language used to structure web pages
D. A strongly typed, ahead-of-time compiled systems language


### Q2. Who created JavaScript and in what year?
A. Tim Berners-Lee in 1991
B. James Gosling in 1995
C. Brendan Eich in 1995 at Netscape
D. Guido van Rossum in 1991


### Q3. What is the main difference between a compiled language and an interpreted language?
Compiled languages run line-by-line at runtime; interpreted languages translate the entire program first
Compiled languages translate the entire program before execution; interpreted languages translate line-by-line at runtime
Compiled languages are always slower than interpreted languages
There is no difference; the terms mean the same thing


### Q4. What does JIT (Just-In-Time) compilation do?
It compiles the entire program before execution starts
It only interprets code and never compiles
It identifies frequently executed (hot) code and compiles it to machine code at runtime for faster reuse
It translates machine code back to source code



### Q5. What does it mean that JavaScript has "first-class functions"?
Functions are the most important part of the language and must always be used
Functions can be stored in variables, passed as arguments, returned from other functions, and stored in objects/arrays
Functions can only be declared at the top level of a file
Functions cannot be reassigned once defined


### Q6. Which of the following is NOT a first-class citizen in JavaScript?
Functions
Objects
Arrays
Statements (like `if`)


### Q7. What sits at the top of the prototype chain in JavaScript (just before `null`)?
`Array.prototype`
`Function.prototype`
`Object.prototype`
`window`


### Q8. In prototype-based inheritance, how do objects inherit in JavaScript?
From classes defined as blueprints
Directly from other objects via a `[[Prototype]]` link
From interfaces only
They do not inherit at all


### Q9. Which statement about garbage collection in JavaScript is correct?
Developers must manually call `free()` to release memory
JavaScript has no memory management at all
The runtime automatically manages memory and the garbage collector frees unused objects
Garbage collection guarantees that memory leaks can never occur


### Q10. Which of the following can still happen in JavaScript despite garbage collection?
Double-free errors
Manual deallocation bugs
Logical memory leaks (e.g., growing caches that are never cleared)
Dangling pointers


### Q11. What does it mean that JavaScript is a "dynamic" language?
Variable types and object structures can change at runtime
Code must be compiled before execution
Types must be declared explicitly for every variable
Functions cannot be modified after declaration


### Q12. Which keyword declares a variable that CANNOT be reassigned?
`var`
`let`
`const`
`static`


### Q13. What will happen with the following code?

```js
const age = 20;
age = 200;
```
`age` becomes 200
It throws a TypeError because `const` cannot be reassigned
It silently does nothing
It logs `undefined`


### Q14. Which console method is used to display tabular data in a structured format?
`console.log()`
`console.warn()`
`console.table()`
`console.error()`


### Q15. What is the purpose of `console.time()` and `console.timeEnd()`?
To set the system clock
To measure the execution time of a code block
To delay execution by a given time
To schedule a function to run later



### Q16. Which of the following values is NOT falsy in JavaScript?
0
"" (empty string)
"false" (the string "false")
NaN

**Answer: C**


### Q17. What does the strict equality operator `===` do?
Compares values after converting them to the same type
Compares values and types without any type conversion
Assigns a value to a variable
Checks only reference equality for primitives


### Q21. Every execution context in JavaScript runs in which two phases?
Parsing Phase and Compilation Phase
Creation Phase and Execution Phase
Allocation Phase and Cleanup Phase
Hoisting Phase and Garbage Collection Phase


### Q22. Which statement about where variables live in memory is most accurate?
Primitives always live in stack frames and objects always live in the heap, with no exceptions
Primitives are commonly stored in stack frames and objects in the heap, but variables captured by a closure are preserved in the lexical environment (heap) so they outlive the stack frame
All variables, primitive or object, are always stored in the heap
All variables, primitive or object, are always stored in the stack


### Q23. What is the output of the following code, based on how the Call Stack works?
```js
function first() {
  second();
  console.log("first");
}

function second() {
  console.log("second");
}

first();
```
`first` then `second`
`second` then `first`
Only `first`
Only `second`


### Q24. What is the output of the following code?
```js
console.log(x);
var x = 10;
```
`10`
`undefined`
`ReferenceError`
`null`



### Q25. What is the output of the following code?
```js
greet();

function greet() {
  console.log("Hello");
}
```
`ReferenceError`
`undefined`
`Hello`
`TypeError`


### Q26. What is the output of the following code?
```js
{
  let y = 20;
}
console.log(y);
```
`20`
`undefined`
`ReferenceError`
`null`


### Q27. What is the output of the following code?
```js
console.log(a);
let a = 5;
```
`undefined`
`5`
`ReferenceError` due to the Temporal Dead Zone
`null`

### Q29. When JavaScript looks up a variable, in what order does it search the scope chain?
Global scope → outer scope → current scope
Current scope → parent scope → outer parent scope → global scope
Only the current scope; it never searches outside
It searches the call stack frames from top to bottom


