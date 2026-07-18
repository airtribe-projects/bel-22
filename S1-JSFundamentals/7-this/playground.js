// function greet(city, country) {
//   console.log(
//     `Hi, I am ${this.name} from ${city}, ${country}`
//   );
// }

// const person = {
//   name: "Jay"
// };

// Attaches the function to the object and immediately calls the function
// greet.call(person,  "Bangalore", "India");

// greet("Bangalore", "India")
/* Mental picture
person.temp = greet;
person.temp("Bangalore", "India");
delete person.temp;
*/


// Apply: Almost identicaly to call, it takes function parameter in array

// greet.apply(person,  ["Bangalore", "India"]);

// Bind: Attaches the function to object but doesn't invoke the function


// const boundFn = greet.bind(person);

// boundFn("Bangalore", "India");


// // Why bind is important

// const person2 = {
//   name: "Jay",
//   greet() {
//     console.log(this.name);
//   }
// };

// setTimeout(person2.greet, 1000);    // Undefined
// setTimeout(person2.greet.bind(person2), 1000);


const obj = {
  name: "Jay"
};

const arrow = () => {
  console.log(this.name);
};

arrow.call(obj);
