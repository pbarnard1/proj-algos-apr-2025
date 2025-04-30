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
        // If the stack is empty OR the top (most recent) letter in the stack is NOT the same
        // as the current character, then add it to the stack
        if (letterStack.length == 0 || letterStack[letterStack.length - 1] != s[k]) {
            letterStack.push(s[k]);
        } else { // Remove this letter from the stack, as we have a duplicate (e.g. the two "b" letters
        //  in "abbc")
            letterStack.pop();
        }
    }
    // The stack at this point will hold only letters that couldn't be matched up, so now let's
    // form the new string, one letter at a time
    let newStr = "";
    for (let ltr of letterStack) {
        newStr += ltr;
    }
    return newStr;
    // return letterStack.join(""); // Alternate approach
};