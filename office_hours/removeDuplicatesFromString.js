/*
Remove All Adjacent Duplicates in String challenge from LeetCode:
https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/

This is what we came up with together in office hour!
*/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    // It works, but it's slow! (O(N^2))
    for(let i = 0; i < s.length; i++){
        if (s[i] === s[i+1]){
            // console.log("current s:", s)
            // console.log("i=", i, "deleting:", s[i], s[i+1])
            if (i==0) {
                 s = s.substring(i+2)
                // console.log("s is now:", s)
            }
            else if (i===s.length-2) {
                s = s.substring(0, i)
                // console.log("s is now:", s)
            }
            else {
                let s1 = s.substring (0, i)
                // console.log("s is now:", s)
                s= s1+s.substring(i+2)
                // console.log("s is now:", s)
            }
            i=-1
        }
     }
     return s
};