### Comparison Operator

| Operator | Meaning           |
| -------- | ----------------- |
| `>`      | Greater than      |
| `<`      | Less than         |
| `>=`     | Greater or equal  |
| `<=`     | Less or equal     |
| `==`     | Equals            | 
| `!=`     | Not Equals            | 
| `===`    | Strict equality   |
| `!==`    | Strict not inequality |


let a = 5

let b = '5'


 console.log(a==b)

### Truthy and Falsy
JavaScript conditionals do NOT require actual booleans.


#### Common Falsy Values
| Value       | Falsy? |
| ----------- | ------ |
| false     | Yes    |
| 0         | Yes    |
| ""        | Yes    |
| null      | Yes    |
| undefined | Yes    |
| NaN       | Yes    |

Everything else is usually truthy.


### Ternary Operator

Short conditional syntax.

```
age = 20;

let result = age >= 18 ? "Adult" : "Minor";
```

Meaning:

condition ? trueValue : falseValue


### Switch Case
Used for many exact matches.

```
let color = "red";

switch (color) {
  case "red":
    console.log("Stop");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Unknown");
}
```

