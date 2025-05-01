let myQueue = [];

myQueue.push(10); // Enqueuing (adding to the back of the queue)
myQueue.push(5); // Enqueuing (adding to the back of the queue)
myQueue.push(3); // Enqueuing (adding to the back of the queue)


// Dequeuing (removing from the front of the queue)
// DISCLAIMER: Using the shift method is O(N) time, which is a violation of how a queue should work.
myQueue.shift();

// Adding to the front (head) of the queue
// DISCLAIMER: Using the unshift method is O(N) time, which is a violation of how a queue should work.
myQueue.unshift(20);
console.log(myQueue);

// Removing from back of queue
myQueue.pop();

/*
Queues should work like so in terms of big O time:
- Removing from the front: O(1)
- Removing from the back: O(1)
- Adding to the back: O(1)
- Adding to the front: O(1)
*/