/* Reverse string challenge from LeetCode: https://leetcode.com/problems/reverse-string/description/ */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // Reverse the string, stopping at the halfway point so we don't undo the reversals
    for (let k = 0; k < s.length / 2; k++) {
        // Swap characters at indexes "k" and "s.length - (k + 1)"
        let x = s[k];
        s[k] = s[s.length - (k + 1)];
        s[s.length - (k + 1)] = x;
        // console.log(`After ${k+1} reversal(s):`);
        // console.log(s);
    }
};