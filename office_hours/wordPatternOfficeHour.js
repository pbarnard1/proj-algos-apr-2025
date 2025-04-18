/* Word Pattern challenge: https://leetcode.com/problems/word-pattern/

This is what we built in office hour - note that it's INCOMPLETE!
*/

var wordPattern = function(pattern, s) {
    let test = {};
    for (let k = 0; k < pattern.length; k++) {
        for (let key in test) {
            if (k === 0) {
                test[pattern[k]] = s[k];
            }
            let currentIndex = 1;
            let currentLetter;
            while (currentLetter != " ") {
                currentLetter = s[currentIndex];
                test[pattern[k]] = test[pattern[k]] + currentLetter;
                currentIndex++;
            }
            if (pattern[k] != key) {
                test[pattern[k]] = "";
            }
        }
    }
    for (let k = 0; k < s.length; k++) {
        
        for (let [key, value] of Object.entries(test)) {
            if (test[key]) {
                test[key]
            }
        }

    }
};