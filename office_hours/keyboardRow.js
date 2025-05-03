/*
Keyboard Row
https://leetcode.com/problems/keyboard-row/description/

This code is INCOMPLETE!  This is the code we've built in office hour.
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    correctWords = []
    for (let i = 0; i < words.length; i++ ){
        let word = words[i].toLowerCase()
        // let wordIsTrue = false
            let row = 0
        for(let j = 0; j < word.length; i++){
            if("qwertyuiop".contains(word[j])){
                if(row === 0 || row === 1){
                    row = 1
                } else {
                    row = 0
                    break
                }
            }
            if("asdfghjkl".contains(word[j])){
                if(row === 0 || row === 2){
                    row = 2
                } else {
                    break
                }
            }
            if("zxcvbnm".contains(word[j])){
                if(row === 0 || row === 3){
                    row = 3
                } else {
                    break
                }
            if(j === words.length - 1 && row !== 0){
                correctWords.push(words[i])
            }
            }
        }
    }
    
};