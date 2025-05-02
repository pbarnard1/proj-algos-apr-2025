const countdown = startingVal => {
    for (let k = startingVal; k > 0; k--) {
        console.log(k);
    }
    console.log("Liftoff!")
}

// countdown(5);

const recursiveCountdown = startingVal => {
    if (startingVal <= 0) { // Base case: stopping point for our recursion
        console.log("Liftoff!");
    } else {
        console.log(startingVal);
        recursiveCountdown(startingVal-1); // Recursive step (forward progress)
    }
}

// recursiveCountdown(5);

// Factorial: 5! = 5 * 4 * 3 * 2 * 1 = 120, 7! = 7 * 6 * 5 * 4 * 3 * 2 * 1
// (By definition, 0! = 1.  Also, 1! = 1, 2! = 2 * 1 = 2, etc.)

// 5! = 5 * 4 * 3 * 2 * 1 = 5 * 4!
// 4! = 4 * 3 * 2 * 1 = 4 * 3!
// 3! = 3 * 2 * 1


const recursiveFactorial = n => {
    if (n <= 1) { // Base case
        return 1;
    } else {
        return n * recursiveFactorial(n-1);
    }
}

// for (let k = 0; k <= 10; k++) {
//     console.log(`${k}! equals:`);
//     console.log(recursiveFactorial(k));
// }

// Sum all the items in a nested array
let nestedArr = [5,10,[1,3],[[3,4,2],[[[1,3]]],[[2]],[]],[[]],3];

const addNestedArrayValues = arr => {
    // console.log("Examining: ");
    // console.log(arr);
    let sum = 0;
    for (let k = 0; k < arr.length; k++) {
        if (Array.isArray(arr[k])) { // Check and see if we have an array to deal with at this moment
            sum += addNestedArrayValues(arr[k]);
        } else { // It's a number
            sum += arr[k];
        }
    }
    return sum;
}
// console.log(addNestedArrayValues(nestedArr)); // 37

/* Another way to check if something is an array (be careful with objects, however!)
let x = [];
let y = {};
console.log(x instanceof Array); // true
console.log(y instanceof Array); // false
*/

/* Yet another way to check (be careful if you have other data types)
let x = [];
let y = {};
console.log(typeof x); // "object"
console.log(typeof y); // "object"
*/

const fibonacci = n => {
    if (n <= 1) { // Base case (stopping point for recursion)
        return n;
    } else { // Recursion needed
        return fibonacci(n-2) + fibonacci(n-1);
    }
}

// This is VERY SLOW!!
// for (let k = 0; k <= 45; k++) {
//     console.time("fibonacci");
//     console.log(`${k}th term is `+fibonacci(k));
//     console.timeEnd("fibonacci");
// }

const fibonacciWithMemo = (n, savedFibonacciTerms = {}) => {
    // console.log(savedFibonacciTerms);
    if (n <= 1) { // Base case (stopping point for recursion)
        savedFibonacciTerms[`${n}`] = n; // Save the 0th/1st term into the memo
        return n;
    } // Recursion needed
    if (!savedFibonacciTerms.hasOwnProperty(n-1)) {
        savedFibonacciTerms[`${n-1}`] = fibonacciWithMemo(n-1, savedFibonacciTerms); // Notice we're passing the memo here!
    }
    if (!savedFibonacciTerms.hasOwnProperty(n-2)) {
        savedFibonacciTerms[`${n-2}`] = fibonacciWithMemo(n-2, savedFibonacciTerms);
    }
    savedFibonacciTerms[`${n}`] =  savedFibonacciTerms[`${n-2}`] + savedFibonacciTerms[`${n-1}`];
    return savedFibonacciTerms[`${n}`];
}

// Test - notice how fast this is and we can calculate big terms quickly!
for (let k = 0; k <= 100; k++) {
    console.time("fibonacci");
    console.log(`${k}th term is `+fibonacciWithMemo(k));
    console.timeEnd("fibonacci");
}