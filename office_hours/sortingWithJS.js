const sortingCallback = (a, b) => {
    return a - b;
}

let arr = [19, 4, 7, 8, -3, 5, 8, 2, 10, 25, -4];
arr.sort((a,b) => a - b); // Ascending order
// arr.sort(sortingCallback); // Alternate way to sort in ascending order
// arr.sort((a,b) => b - a); // Descending order
// arr.sort() // Sorts by the first digit

let nameArr = ["Adrian", "Jane", "Gregory", "Aaron", "Adria", "Jill", "Dave", "Ethel"];
nameArr.sort();
console.log(nameArr);