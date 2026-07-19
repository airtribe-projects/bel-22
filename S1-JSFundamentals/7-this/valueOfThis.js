const name = "Jay";
const student = {
    name: "Rahul",
    greet() {
        console.log(name);
        console.log(this.name);
    }
}

student.greet();

// const greet = student.greet;
// console.log(this);
// greet()

/* What does this refer to? 
this is dynamic in nature and it depends on who calls the function
the object whoever calls the function
this is NOT lexical in nature
*/


// Value of this varies on runtime level

// Browser (not strict)
// toplevel: Window
// Function: Window

// Strict Mode
// toplevel: Window
// Function: undefined


// NodeJS (not strict)
// topLevel: {}
// Function: Global Object

// Strict
// topLevel: {}
// Function: undefined


// 'use strict'
// console.log(this)
// function greet() {
//   console.log(this);
// }

// greet();

// 'use strict'
// const userAccount = {
//   balance: 5000,
//   withdraw(amount) {
//     console.log(this.balance);
//     this.balance -= amount; 
//     console.log("Remaining balance: ", this.balance);
//   }
// };

// const wtd = userAccount.withdraw
// userAccount.withdraw(500)
// wtd(500);


const user = {
  name: "Jay",
  
  greet() { console.log(this.name); },
  

  greetDelayed() {
    const self = this; // Lexical scope
    setTimeout(function ()  {
        console.log(this.name); // Dynamic
        console.log(self.name); // Lexical (static) Scope
    }, 2000)
  }
};

user.greet(); // Prints: "Jay"

user.greetDelayed();

// 2015: Arrow function were introduced 

const user = {
  name: "Jay",
  
  greet() { console.log(this.name); },
  
  greetDelayed() {
    // Arrow function removed the dependency on the dynamic model
    // Do not have their own this
    // Instead, they adopt `this` value of the environment where they were phyiscally typed
    setTimeout(() => {
        console.log(this.name); // Dynamic
    }, 2000)
  }
};

// user.greet(); // Prints: "Jay"

// user.greetDelayed();









