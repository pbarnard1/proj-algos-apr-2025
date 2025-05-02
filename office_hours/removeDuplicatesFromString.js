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
        if (s[i] === s[i+1]){
            console.log("current s:", s)
            console.log("i=", i, "deleting:", s[i], s[i+1])
            if (i==0) {
                 s = s.substring(i+2)
                console.log("s is now:", s)
            }
            else if (i=s.length-2) {
                s = s.substring(0, i)
                console.log("s is now:", s)
            }
            else {
                s = s.substring (0, i)
                console.log("s is now:", s)
                s= s+s.substring(i+2)
                console.log("s is now:", s)
            }
            // s = s.substring(s[i+1], "")
            // console.log("s is now:", s)
            // s = s.replace(s[i], "")
            // console.log("s:", s)
            i=-1
            // s[i] += ""

            // if(s[i-1] != undefined) {
            //     let previousLetter = s[i-1]
            // }
        //     newString += s[i]
        //     newString += s[i+1]
        //     s[i+2]
        //     letterStack.push(newString)
        //     newString = ""
        }
     }
     return s
};