/*
Remove All Adjacent Duplicates in String challenge from LeetCode:
https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/

This is Adrian's solution!!  I recommend you build your own solution first!
*/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let letterStack = []; // Will hold each letter in the string, one at a time
    for (let k = 0; k < s.length; k++) {
        console.log("Examining the letter "+s[k]+" at index "+k);
        // If the stack is empty OR the top (most recent) letter in the stack is NOT the same
        // as the current character, then add it to the stack
        if (letterStack.length == 0 || letterStack[letterStack.length - 1] != s[k]) {
            console.log("Adding "+s[k]+" to the stack");
            letterStack.push(s[k]);
        } else { // Remove this letter from the stack, as we have a duplicate (e.g. the two "b" letters
        //  in "abbc")
            console.log("Duplicate letter found - removing "+letterStack[letterStack.length-1]);
            letterStack.pop();
        }
        console.log("Current stack:");
        console.log(letterStack);
    }
    // The stack at this point will hold only letters that couldn't be matched up, so now let's
    // form the new string, one letter at a time; this is the proper way when using a stack, as we 
    // can only push and pop
    let newStr = "";
    while (letterStack.length > 0) {
        let removedLtr = letterStack.pop();
        newStr = removedLtr + newStr;
    }
    // Another way to form the string, but it doesn't clear the stack
    // let newStr = "";
    // for (let ltr of letterStack) {
    //     newStr += ltr;
    // }
    return newStr;
    // return letterStack.join(""); // Alternate approach
};