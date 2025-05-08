const mergeSort = (arr, start, end) => {
    start = start || 0;
    if (end === undefined || end === null) {
        end = arr.length - 1;
    }
    // Base case: the parition has one or fewer items
    if (end - start <= 0) {
        return;
    }
    let mid = Math.floor((start + end) / 2); // Midpoint index where we'll split the (sub)array
    // console.log(`looking at left partition from indexes ${start} through ${mid}`)
    // Partition the array (split it in two)
    mergeSort(arr,start,mid); // Sort the left half
    // console.log(`After sorting from indexes ${start} through ${mid}:`);
    // console.log(arr);
    mergeSort(arr,mid+1,end); // Sort the right half
    // Now we must merge these two *sorted* partitions
    let leftIndex = start;
    let rightIndex = mid + 1;
    let mergedItems = [];
    while (leftIndex <= mid && rightIndex <= end) {
        if (arr[leftIndex] <= arr[rightIndex]) {
            mergedItems.push(arr[leftIndex]);
            leftIndex++;
        } else {
            mergedItems.push(arr[rightIndex]);
            rightIndex++;
        }
    }
    // If we run out of values from one partition, use the other one to fill in the remaining values (if there are any left)
    if (leftIndex > mid && rightIndex <= end) { // Out of values in the left half with values left in the right half
        while (rightIndex <= end) {
            mergedItems.push(arr[rightIndex]);
            rightIndex++;
        }
    } else if (rightIndex > end && leftIndex <= mid) { // Out of values in right half with values left in the left half
        while (leftIndex <= mid) {
            mergedItems.push(arr[leftIndex]);
            leftIndex++;
        }
    }
    // Now saved the merged items into the original array
    for (let k = 0; k < mergedItems.length; k++) {
        arr[start+k] = mergedItems[k];
    }
}

// Some test cases
let arr1 = [3, 1, 4, 1, 2, 7, 4, 10, -3];
mergeSort(arr1);
console.log(arr1);
let arr2 = [];
mergeSort(arr2);
console.log(arr2);
let arr3 = [5];
mergeSort(arr3);
console.log(arr3);
let arr4 = [-3,5];
mergeSort(arr4);
console.log(arr4);
let arr5 = [5, 1];
mergeSort(arr5);
console.log(arr5);
let arr6 = [3, 0, 2];
mergeSort(arr6);
console.log(arr6);