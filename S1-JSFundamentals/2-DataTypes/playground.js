// const arr = new Array(3);

// arr[0] = "Jay";
// arr[1] = 1;
// arr[2] = false;

// arr[400]=100
// console.log(arr);

// const obj = {
//     key: 100, 
//     key2: 200
// };


// console.log(obj, obj.key, obj["key2"])

// const arr = [1, 2];

// const clonedArr = arr;
// const spreadArr = [...arr];

// clonedArr[1] = 5;
// spreadArr[1] = 6

// console.log(arr, clonedArr, spreadArr);

// const obj = {
//     key = 100, 
//     key2 = 200
// }

// cloneObj = obj;
// spreadObj = {...obj}

// cloneObj.key = 2;
// console.log(obj);


// Nested Arrays

// const arr = [1, [2, 3, 4], 5];

// const spreadArr = [...arr]

// spreadArr[1][2] = 10;

// console.log(arr, spreadArr);


// Function declaration
// function greetMe(name) {
//     return `hello ${name}`;
// }

// console.log(greetMe("Jay"));


// HoF

function cookFood(order) {
    console.log("Cooking your:" , order);
}

function serveDrinks(drinksOrder) {
    console.log("Serving drinks:" , drinksOrder);
}

// Higher Order Function
function Restaurant(cookFood, serverDrinks, orderType, order) {
    if (orderType == "Food") {
        cookFood(order);
    } else if (orderType == "Drinks") {
        serveDrinks(order);
    }
}


Restaurant(cookFood, serveDrinks, 'Food', "Pizza");
Restaurant(cookFood, serveDrinks, 'Drinks', "Coke");

// Array Functions

const arr = [1,2,3,4,5,6];

// for (let i=0; i< arr.length; i++ ) {
//     console.log(arr[i]);
// }

function forEach(element, index, entireArray) {
    console.log(element, index, entireArray);
}


function printOddNnumbers(n) {
    if ( n%2 == 1) console.log(n);
}



// arr.forEach(forEach);

arr.forEach(printOddNnumbers);


// arr.forEach((e, i) => console.log(e, i));


// Map

function square(n) {
    return n * n;
}

const numberSquared = arr.map(square);

console.log(numberSquared)

// Filter

function evenNumber(n) {
    if (n%2 == 0) return n
}

const evenNubmersFromArr = arr.filter(evenNumber);

console.log(evenNubmersFromArr)


const squaredEvenNumbers = arr.filter(evenNumber).map(square);

console.log(squaredEvenNumbers);

// reduce

1, 2, 3, 4, 5, 6

function sum(accumulator, current) {
    return accumulator + current;
}

const total = arr.reduce(sum, 0);

console.log(total);