/*
We didn't have time to cover this problem, so I built this after lecture.

From Recursion To Do 5 - Binary String Expansion:

You are given a string containing chars ‘0’, ‘1’, and ‘?’. 
For every ‘?’, either ‘0’ or ‘1’ can be substituted. 
Write a recursive function to return an array of all valid strings with ‘?’ chars expanded to ‘0’ or ‘1’. 
Example: binStrExpand("1?0?") => ["1000","1001","1100","1101"]. 
If you use string functions such as slice(), use them sparingly, as they are expensive.
*/
const binaryStringExpansion = inputStr => {
    // Helper recursive function (notice two memos: the current index in the original input string, and the string we've built so far)
    const buildBinaryString = (arr, index = 0, curStr = "") => {
        if (index >= inputStr.length) {
            arr.push(curStr); // Add built string to array
            return; // Stop recursion now
        }
        if (inputStr[index] === "?") {
            // Build recursively - notice we're incrementing the index AND adding "0" or "1" to the string as we build it out
            buildBinaryString(arr, index+1, curStr + "0");
            buildBinaryString(arr, index+1, curStr + "1");
        } else {
            buildBinaryString(arr, index+1, curStr + inputStr[index]); // Add current digit from original string to new string
        }
    }

    // Create array that will populate with all the possible strings
    allBinaryStrings = [];
    buildBinaryString(allBinaryStrings); // Note that the array will fill in for us with this function call as arrays are mutable!
    return allBinaryStrings;
}

// Various test cases
console.log(binaryStringExpansion("?")); // ["0", "1"]
console.log(binaryStringExpansion("1")); // ["1"]
console.log(binaryStringExpansion("1??")); // ["100", "101", "110", "111"]
console.log(binaryStringExpansion("1?0?")); // ["1000", "1001", "1100", "1101"]