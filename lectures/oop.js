class User {
    constructor(firstName) {
        this.firstName = firstName;
        this.currentBalance = 0;
    }

    deposit(newAmount) {
        this.currentBalance += newAmount;
        return this; // For chaining
    }
    
    withdraw(newAmount) {
        if (this.currentBalance >= newAmount) {
            this.currentBalance -= newAmount;
        }
        return this; // For chaining
    }
}

let adrian = new User("Adrian"); // Create an instance of the User class
// console.log(adrian.firstName);
// console.log(adrian.currentBalance);

let jennifer = new User("Jennifer");

// adrian.currentBalance = 100;

adrian.deposit(500);
console.log(adrian.currentBalance);
jennifer.deposit(1000).withdraw(300); // chaining methods
console.log(jennifer.currentBalance);
