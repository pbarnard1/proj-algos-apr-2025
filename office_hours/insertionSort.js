const insertionSort = arr => {
    // We will sort the array IN PLACE; do NOT return anything!

    // This is UNFINISHED; we will finish in Thursday's office hour

    // Outer loop for ???
    for (let i = 0; i < arr.length; i++) {
        // let indexVal = arr[i];
        let j = i+1
        let minVal = arr[j]
        // console.log("**************************************");
        // console.log(`Looking at index i = ${i}`);
        // Inner loop backwards
        // if(minVal < indexVal){
        // for (let j = i + 1; j >= 0; j--) {
            while(j > 0){
                if(arr[j] < arr[i]){
                    minVal = arr[j]
                    arr[j] = arr[i]
                    arr[i] = minVal
                    j--
                } else{
                    break
                }

            }
            // console.log(`Looking at index j = ${j}`);
            // let minVal = arr[j];
            // if (arr[i] < arr[j]) {
            //     arr[j] = indexVal;
            //     arr[i] = minVal;
            // }
        // }
        // }
        console.log(`The array after i = ${i}`);
        console.log(arr);
    }

}

let arr1 = [];
let arr2 = [1];
let arr3 = [10, 1];
let arr4 = [3, 5];
let arr5 = [19, 4, 7, 8, -3, 5, 8, 2, 10, 25, -4];
let arr6 = [36, 19, 5, 40, 47, 32, 43, 1];
// insertionSort(arr1);
// console.log(arr1);
// insertionSort(arr2);
// console.log(arr2);
// insertionSort(arr3);
// console.log(arr3);
// insertionSort(arr4);
// console.log(arr4);
insertionSort(arr5);
console.log(arr5);
// insertionSort(arr6);
// console.log(arr6);