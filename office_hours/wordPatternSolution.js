/* Word Pattern challenge: https://leetcode.com/problems/word-pattern/

This is Adrian's solution!  There are two variants - the first with a very subtle issue if a word is 'constructor', 
and the second that gets around the issue.

Two test cases you can try: 
pattern = "aaaa" and s = "red blue green yellow" -> should return false
pattern = "abcd" and s = "red red red red" -> should return false
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let allWords = s.split(" "); // Create array with the words (can alternately use a loop to accomplish same goal)
    if (pattern.length != allWords.length) { // Not enough words or not enough letters in pattern, so we can't match them
        return false;
    }
    let patternWordMap = {}; // Key = letter in "pattern", value = word in the string "s"
    // Now go through each letter in pattern and map them to the corresponding word in "s"
    for (let k = 0; k < pattern.length; k++) { // or k < allWords.length
        const curLtr = pattern[k];
        if (!(curLtr in patternWordMap)) { // New letter, so map corresponding word in "s" to letter
            patternWordMap[curLtr] = allWords[k]; 
        } else if (patternWordMap[curLtr] !== allWords[k]) { // No match, such as the letter "a" mapped to the words "blue" AND "green"
            return false;
        }
    }
    // IMPORTANT: Now we must map each word to each letter (the other way around) and check, e.g. if we have the pattern "abcd" but the string is "red red red red", we should get false
    let wordPatternMap = {}; // Key = word in the string "s", value = letter in "pattern"
    // Now go through each word in string and map them to the corresponding letter in pattern
    for (let k = 0; k < allWords.length; k++) { // or k < pattern.length
        const curWord = allWords[k];
        /* NOTE: we can't use the keyword "in" for checking to see if a key is in a property in case the key as a 
        string happens to match a keyword like "constructor".  So we either use the hasOwnProperty method, OR we can
        use JavaScript Maps to create the key-value pairs.  (This is because every object in JavaScript has a property called
        "constructor", which caused problems, as it returns a reference to the constructor function in said object.  See:
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
        
        To illustrate the issue: consider pattern = "abba" and s = "dog constructor constructor dog".  
        Now try "curWord in wordPatternMap" and see what happens!
        */
        // New word, so map corresponding letter in pattern to the current word
        if (!wordPatternMap.hasOwnProperty(curWord)) { 
            wordPatternMap[curWord] = pattern[k]; 
        } else if (wordPatternMap[curWord] !== pattern[k]) { // No match, such as the word "red" mapped to the letters "a" AND "b"
            return false;
        }
    }
    // If we make it here, then the pattern is truly one-to-one and meets the requirements
    return true;
};

/* Slightly different approach, but uses the JavaScript Map() class to hold key-value pairs;
the logic is otherwise exactly the same as the method above*/
var wordPattern = function(pattern, s) {
    let allWords = s.split(" "); 
    if (pattern.length != allWords.length) {
        return false;
    }
    let patternWordMap = new Map();
    for (let k = 0; k < pattern.length; k++) {
        const curLtr = pattern[k];
        if (!patternWordMap.has(curLtr)) { 
            patternWordMap.set(curLtr, allWords[k]); 
        } else if (patternWordMap.get(curLtr) !== allWords[k]) { 
            return false;
        }
    }
    let wordPatternMap = new Map();
    for (let k = 0; k < allWords.length; k++) {
        const curWord = allWords[k];
        if (!wordPatternMap.has(curWord)) {
            wordPatternMap.set(curWord, pattern[k]); 
        } else if (wordPatternMap.get(curWord) !== pattern[k]) {
            return false;
        }
    }
    return true;
};