// function addTwoNumbers(x, y) {
//     return x + y;
// }

// const addTwoNumbersArrow = (x, y) => {
//     return x + y;
// }
// // Demoing how to call a function two ways
// let z = addTwoNumbers(5, 7);
// console.log(z);
// console.log(z*5);
// let num1 = 10, num2 = 15;
// console.log(addTwoNumbersArrow(num1, num2));

// let currentTemperature = 20;

// if (currentTemperature < 30) {
//     console.log("It's too cold!");
// } 
// if (currentTemperature < 90) {
//     console.log("It's not hot!");
// } else {
//     console.log("It's too hot!");
// }

// // Demo === vs. == to compare values and data types
// let x1 = "10";
// let x2 = 10;

// console.log(x1 == x2);
// console.log(x1 === x2);

// for (let k = 10; k > 0; k--) {
//     console.log(k);
// }
// console.log("Liftoff!")

// Find the biggest value x such that 1 + 2 + .... + x <= target
const minXForTarget = target => {
    let x = 0;
    let sum = 0;
    while (sum <= target) {
        x++;
        sum += x;
        // console.log(`Sum is ${sum} after adding ${x}`);
    }
    x--;
    return x;
}

// Consider do-while loops as well!

// console.log(minXForTarget(100));
console.log(minXForTarget(90)); // 12
console.log(minXForTarget(91)); // 13
console.log(minXForTarget(92)); // 13

let numArr = [10, -5, 3, 7, -4, 12]; // Array
let emptyArr = []; // Empty array
// Arrays can have arrays or any other data (like objects!)
let twoDArr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(twoDArr[0]);
console.log(twoDArr[0][2]);

// Input: an array of values, output: return the maximum value
function maxValInArr(inputArr) {
    if (inputArr.length == 0) { // Edge case
        return false;
    }
    let maxVal = inputArr[0]; // Start off at index 0
    for (let k = 1; k < inputArr.length; k++) {
        if (inputArr[k] > maxVal) { // New maximum found
            maxVal = inputArr[k];
        }
    }
    return maxVal;
}


console.log(maxValInArr(numArr));
console.log(maxValInArr([5,5]));
console.log(maxValInArr([22]));
console.log(maxValInArr([])); // Edge case - empty array

let name = "Adrian";
let emptyStr = '';

/* Write a function that takes in a string and a specific character as inputs and returns how many times
the specified character occurs in the string.

Examples:
str = "hello", char = "l", return 2
str = "Adrian", char = "a", return 1 - this is case sensitive!
*/

const countChars = (inputStr, char) => {
    let frequency = 0;
    for (let k = 0; k < inputStr.length; k++) {
        if (inputStr.charAt(k) === char) { // Alternately do inputStr[k]
            frequency++;
        }
    }
    return frequency;
}

console.log("Counting characters:");
console.log(countChars("hello", "l"));
console.log(countChars("Adrian", "a"));
console.log(countChars("", "a"));
console.log(countChars("aaaaaaaaaaaa", "a"));
console.log(countChars("projects", "a"));

/* Objects */
let restaurantMenu = {
    "hotDog": 5.99,
    "hotSoup": 3.99,
    "pizzaSlice": 3.49,
    "discountDays": ["Monday", "Tuesday", "Wednesday", "Thursday"],
    "discount": 0.50, 
}

console.log(restaurantMenu["hotDog"]);
console.log(restaurantMenu["discountDays"]);
console.log(restaurantMenu["discountDays"][2]);

// Thursday's lecture: processing and looping through data from an API
// How to do OOP in Thursday's lecture