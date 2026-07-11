// Conditionals ==> Decision making system


let age = 18;

if (age >= 18) {
  console.log("Adult");
}

age = 15;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}


let score = 82;

if (score >= 90) {
  console.log("A");
} else if (score >= 75) {
  console.log("B");
} else {
  console.log("C");
}


// Truthy and Falsy

if ("hello") {
  console.log("Runs");
}


if ("0") {
  console.log("0 is truthy");
}


if ("false") {
  console.log("false is truthy");
}