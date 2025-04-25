// Insertion sort solution by Adrian
const insertionSort = arr => {
    // This functions sorts the array IN PLACE without returning anything!
    for (let i = 0; i < arr.length - 1; i++) { // Loop to move the item at index (i+1)
        let j = i + 1;
        while (j > 0) { // Loop to move the current value at index (i+1) backwards as often as needed
            if (arr[j-1] > arr[j]) { // Swap backwards if the value behind is bigger than the value we're moving back
                let tmpVal = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = tmpVal;
                j--; // Decrement index here
            } else { // Value behind one we're moving is smaller, so we're done swapping
                break;
            }
        }
        // console.log(`Array after moving the item at index ${i+1} towards the front:`);
        // console.log(arr);
    }
}

let arr1 = [];
let arr2 = [1];
let arr3 = [10, 1];
let arr4 = [3, 5];
let arr5 = [19, 4, 7, 8, -3, 5, 8, 2, 10, 25, -4];
let arr6 = [36, 19, 5, 40, 47, 32, 43, 1];
insertionSort(arr1);
console.log(arr1);
insertionSort(arr2);
console.log(arr2);
insertionSort(arr3);
console.log(arr3);
insertionSort(arr4);
console.log(arr4);
insertionSort(arr5);
console.log(arr5);
insertionSort(arr6);
console.log(arr6);