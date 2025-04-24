const selectionSort = arr => {
    // Array will be sorted in ascending order IN PLACE without returning anything

    // Outer loop for moving the (i+1)th smallest item to the beginning
    for (let i = 0; i < arr.length - 1; i++) {
        let minVal = arr[i];
        let minIndex = i;
        // Inner loop: find the smallest value in the array, and move it to the beginning, swapping values appropriately
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < minVal) {
                minVal = arr[j];
                minIndex = j;
            }
        }
        // Swap the value at the "beginning" with the smallest value found - so we've selected the smallest value, and we'll move it
        let tmpVal = arr[i];
        arr[i] = minVal;
        arr[minIndex] = tmpVal;
        // console.log(`Moving the smallest remaining item to index ${i}`);
        // console.log(arr);
    }
}

let arr1 = [];
let arr2 = [1];
let arr3 = [10, 1];
let arr4 = [3, 5];
let arr5 = [19, 4, 7, 8, -3, 5, 8, 2, 10, 25, -4];
selectionSort(arr1);
console.log(arr1);
selectionSort(arr2);
console.log(arr2);
selectionSort(arr3);
console.log(arr3);
selectionSort(arr4);
console.log(arr4);
selectionSort(arr5);
console.log(arr5);