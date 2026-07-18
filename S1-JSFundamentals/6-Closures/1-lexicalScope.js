function outer() {
  let name = "Rahul";

  function inner() {
    console.log(name);
  }

  inner();
}

outer();
