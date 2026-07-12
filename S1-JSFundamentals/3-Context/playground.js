// Stack Frame
// function first() {
//   second();
// }

// function second() {
//   console.log("Hello");
// }

// first();



// Execution Context 
let name = "Rahul";

function greet() {
  let message = "Hello";
  console.log(message);
}

greet();


// GEC (Global Execution Context)
// FEC (Function Execution Context)

/* Creation of Context
2 Phases for creation of Context
P1 --> Creation Phase
    Prepare everything before execution
P2 --> Execution Phase


*/



/* Mental Map

```text
Program Starts
    ↓
Global Execution Context Created
    ↓
Creation Phase Happens
    ↓
Execution Phase Happens
    ↓
Function Called
    ↓
New Function Execution Context Created
    ↓
Creation Phase
    ↓
Execution Phase
```
*/

/* Heap
* substanaitlly larger that stack
* keep reference types
* Keep function declarations
*/
