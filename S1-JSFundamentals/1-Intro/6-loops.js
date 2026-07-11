/*
### Loop Types
- For loop
- While loop
- for of loop
- nested loops
- Infinite Loop 


#### For Loop
```
let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

#### While loop
Runs while condition remains true

```
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
*/

/* For of loop
Cleaner way to write for loop

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}

* No manual indexing needed


*/

/* break Keyword: Used to stop the iteration of loop early 

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}
*/


/* continue: Used to skip the current iteration

```
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }

  console.log(i);
}
  ```

*/