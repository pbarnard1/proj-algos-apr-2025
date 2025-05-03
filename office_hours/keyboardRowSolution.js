/*
Keyboard Row
https://leetcode.com/problems/keyboard-row/description/

This is Adrian's solution!  Please try to come up with your own approach before examining this one!
*/

var findWords = function(words) {
    // Use sets for fast lookups for characters (you can also use hash maps as well)
    const keySetArr = [
        new Set("qwertyuiop"),
        new Set("asdfghjkl"),
        new Set("zxcvbnm")
    ]
    const allWordsInOneRowArr = [];
    for (let currentWord of words) {
        const lowerCaseCurrentWord = currentWord.toLowerCase();
        // Pick out row based on first letter
        let firstLetter = lowerCaseCurrentWord[0];
        let row;
        for (let k = 0; k < keySetArr.length; k++) {
            if (keySetArr[k].has(firstLetter)) {
                row = k;
                break;
            }
        }
        // Now go through remaining letters in word and see if they're in the same row
        let isInSameRow = true;
        for (let k = 1; k < lowerCaseCurrentWord.length; k++) {
            if (!keySetArr[row].has(lowerCaseCurrentWord[k])) { // Letters in different rows
                isInSameRow = false;
                break;
            }
        }
        if (isInSameRow) { // If the word is entirely in the same row
            allWordsInOneRowArr.push(currentWord);
        }
    }
    return allWordsInOneRowArr;
};