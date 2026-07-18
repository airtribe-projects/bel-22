function outer() {
  let counter = 0;
  let innerCounter = 100; 
  
  function inner() {
    counter++;
    console.log(counter);
    
    function inner2() {
        innerCounter++;
        console.log(innerCounter);
    }
    return inner2;
  }

  return inner;
}


const fn = outer(); // return Inner

const i2 = fn(); // return inner2
i2();
i2();
i2();

const i22 = fn();
i22();
i22();
i22();

// fn();
