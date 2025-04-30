/*
Remove All Adjacent Duplicates in String challenge from LeetCode:
https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/
*/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let letterStack = [];
    let newString = ""
    let j = 0

     for(let i = 0; i < s.length; i++){
        if (s[i] !== s[i+1]){
            if(s[i-1] != undefined) {
                let previousLetter = s[i-1]
            }
            newString += s[i]
            newString += s[i+1]
            s[i+2]
            letterStack.push(newString)
            newString = ""
        }
     }
     return letterStack.pop()
};