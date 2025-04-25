/*
Space: O(1)
Time: O(N^2)
*/

const insertionSort = arr => {
    // We will sort the array IN PLACE; do NOT return anything!
    // Outer loop for moving the item at index (i+1)
    for (let i = 0; i < arr.length; i++) {
        // let indexVal = arr[i];
        let j = i + 1
        let iterator = i
        let minVal = arr[j]
        // Inner loop backwards to swap values as needed
        while (j > 0) {
            if (arr.length == j) {
                break;
            }
            if (arr[j] < arr[iterator]) {
                minVal = arr[j]
                arr[j] = arr[iterator]
                arr[iterator] = minVal
                j--
                iterator--
            } else {
                break
            }

        }
        // console.log(`The array after i = ${i}`);
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