// Create an array that will serve as our stack
let myStack = [];

myStack.push("Adrian");
myStack.push("Jane");
myStack.push("Diane");

let secondStack = [];
secondStack.push(myStack.pop());

console.log("Original stack:");
console.log(myStack);
console.log("New stack:");
console.log(secondStack);

// Peeking at the "topmost" (rightmost) item in the stack
console.log(myStack[myStack.length - 1]);

// Not shown in office hour: checking if the stack is empty
console.log(myStack.length === 0);