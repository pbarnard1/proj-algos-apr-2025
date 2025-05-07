function binarySearch(arr, val) {
    // Return the index where val is found, or -1 if it can't be found
    let left = 0, right = arr.length - 1;
    // Perform the binary search itself with this loop
    while (left <= right) {
        let mid = Math.floor((left + right)/2);
        console.log(`The left and right boundaries (indexes) are ${left} and ${right}`);
        console.log(`The midpoint (index) is ${mid}`)
        if (val < arr[mid]) { // Value we want is less than that at the midpoint - look to the left
            console.log(`Moving left as the value ${val} is less than the value ${arr[mid]} at the midpoint index ${mid}`);
            right = mid - 1;
        } else if (val > arr[mid]) { // Value we want is greater than that at the midpoint - look to the right
            console.log(`Moving right as the value ${val} is greater than the value ${arr[mid]} at the midpoint index ${mid}`);
            left = mid + 1;
        } else { // We found it!  So stop searching!
            console.log(`We found it at index ${mid}`);
            return mid;
        }
    }
    return -1;
}

// console.log(binarySearch([1, 3, 4, 8, 10, 15, 18], 10)) // return 4
// console.log(binarySearch([1, 3, 4, 8, 10, 15, 18], 1)) // return 0
// console.log(binarySearch([1, 3, 4, 8, 10, 15, 18], 18)) // return 6
// console.log(binarySearch([1, 3, 4, 8, 10, 15], 8)) // return 3
console.log(binarySearch([1, 3, 4, 8, 10, 15], 5)) // return -1
// console.log(binarySearch([], 10)) // return -1
// console.log(binarySearch([10], 10)) // return 0
// console.log(binarySearch([1], 10)) // return -1

