const age = 20
// age = 200

let marks = 100
marks = 20


var name = "Jay"
name = "Chakra"


const test = {
    hello: "world"
}

// Log, warn , error
console.log(age, marks, name, test);
console.warn("Warning");
console.error("Error");
// console.warn, console.error


const users = [
  { name: "Jay", age: 20 },
  { name: "Sam", age: 25 }
];


console.log(users);

console.table(users);


// Profile
const start = Date.now();

for (let i = 0; i < 1000000; i++) {}

console.log(Date.now() - start);



console.time("Loop");

for (let i = 0; i < 1000000; i++) {}

console.timeEnd("Loop");