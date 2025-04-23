/* 
Space: O(1)
Time: O(N^2)
*/
const bubbleSort = arr => {
    // Sort the array IN PLACE in ascending order
    for (let i = 1; i < arr.length; i++) { // Start at one to ensure we don't pass the end of the array
        // Sliding window
        for (let j = 0; j <= arr.length - i; j++) {
            let tmpVal;
            // If item on left is bigger than item on right in window, then swap
            if (arr[j] > arr[j+1]) {
                tmpVal = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmpVal;
            }
        }
        // console.log(`After i = ${i}:`)
        // console.log(arr);
    }
}
// Various test cases
let arr1 = [];
let arr2 = [1];
let arr3 = [10, 1];
let arr4 = [3, 5];
let arr5 = [19, 4, 7, 8, -3, 5, 8, 2, 10, 10, -4];
bubbleSort(arr1);
console.log(arr1);
bubbleSort(arr2);
console.log(arr2);
bubbleSort(arr3);
console.log(arr3);
bubbleSort(arr4);
console.log(arr4);
bubbleSort(arr5);
console.log(arr5);