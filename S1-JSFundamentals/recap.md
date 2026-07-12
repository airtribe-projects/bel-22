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
