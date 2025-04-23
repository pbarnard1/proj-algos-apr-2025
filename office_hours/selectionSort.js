const selectionSort = arr => {
    // Array will be sorted in ascending order IN PLACE

    /* THIS IS NOT FINISHED YET!  We will wrap it up in Wednesday's office hour! */
    
    // Find the smallest value in the array, and move it to the beginning, swapping values appropriately
    let minVal = arr[0];
    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i];
            minIndex = i;
        }
    }
    // Swap the value at the "beginning" with the smallest value found - so we've selected the smallest value, and we'll move it
    let tmpVal = arr[0];
    arr[0] = minVal;
    arr[minIndex] = tmpVal;
}

let arr1 = [];
let arr2 = [1];
let arr3 = [10, 1];
let arr4 = [3, 5];
let arr5 = [19, 4, 7, 8, -3, 5, 8, 2, 10, 10, -4];
// selectionSort(arr1);
// console.log(arr1);
// selectionSort(arr2);
// console.log(arr2);
// selectionSort(arr3);
// console.log(arr3);
// selectionSort(arr4);
// console.log(arr4);
selectionSort(arr5);
console.log(arr5);