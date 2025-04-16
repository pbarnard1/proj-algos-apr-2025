function addTwoNumbers(x, y) {
    return x + y;
}

const addTwoNumbersArrow = (x, y) => {
    return x + y;
}
// Demoing how to call a function two ways
let z = addTwoNumbers(5, 7);
console.log(z);
console.log(z*5);
let num1 = 10, num2 = 15;
console.log(addTwoNumbersArrow(num1, num2));

let currentTemperature = 20;

if (currentTemperature < 30) {
    console.log("It's too cold!");
} 
if (currentTemperature < 90) {
    console.log("It's not hot!");
} else {
    console.log("It's too hot!");
}

// Demo === vs. == to compare values and data types
let x1 = "10";
let x2 = 10;

console.log(x1 == x2);
console.log(x1 === x2);

for (let k = 10; k > 0; k--) {
    console.log(k);
}
console.log("Liftoff!")

// Plan for Wednesday's lecture:
// While loops
// Arrays and strings and possibly objects and algos with them