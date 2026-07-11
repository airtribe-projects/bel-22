### What is JS
JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, garbage-collected, dynamic language, supporting multiple paradigms such as imperative, functional, and object-oriented.


### Key Terms
- Interpreted / JIT Compiled
- First Class Function
- Language of the web
- Protoype based
- Dynamic Language 
- Garbage Collected


### Interpreted Language 
- Instruction passed to programs line by line
- Easier for scripting and rapid development


```
const sum = 0;
for (let i = 0; i < 1000000; i++) {
  sum += i; ==> Machine code
}
```


### "First Class" Function
This is one of the fundamental and most important idea in JS
* First class which are treated like normal values
- It can be stored in a variable
- It can be passed as an argument to a function
- It can be returned from a function
- It can be stored inside Object / Array


var x = 5;

add(a, b);
return 
add(5, 2);


let x = (5>4) conitional

if (5>5) return 5; // Statement

let x = (a, b) => a + b;

What else are first clsss
- Errors 
- Objects
- Arrays

Operator + / - / > / <


### Language of the web
* Enbaled: 
- Buttons reaction
- animations
- Live chats
- form validation 
- dynamic updates
- games
- video streamin apps

Brenden Eich (within 2 weeks days in netscape)


### Prototype Based
- It  Challenges the class based system at all. 
- Throws away the class based system
- Inherit from object itself
- Can create object without inheriting from other object (Object.prototype)

Object.prototype: 
- toString()
- hasOwnProperty()
- valueOf


```
let x = {};

x.toString();
x.valueOf()
```

```
let animal = {
  eats: true
};

let dog = {
  bark: true
};

Object.setPrototypeOf(dog, animal);
```

```
null
  ↑
Object.prototype
  ↑
animal
  ↑
dog
```

### Dynamic Language
* A lnguage takes decision durng runtime
- Variable can change datatype (Dynamically typed)
- Objects can shapre shift
- function can also be modified
- Dynamically typed

### Garbage Collected (Memory)



