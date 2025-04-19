/* The Love Letter Mystery challenge from HackerRank: https://www.hackerrank.com/challenges/the-love-letter-mystery/problem?isFullScreen=true

This is Adrian's solution code!  There are other approaches, and I outline at least one other idea you can try along the way.
*/

function theLoveLetterMystery(s) {
    let letterMap = new Map();
    let allLetters = "abcdefghijklmnopqrstuvwxyz";
    // Save letters and their indexes into a map for fast lookup for indexes
    // NOTE: we could use the indexOf method for strings, but that's technically
    // O(n) runtime, and grabbing from (hash) maps is on average only O(1) time.
    // ALTERNATE approach: you can use the charCodeAt method for strings to get
    // the UTF-16 code value for a character.  For example, "a" is code 97, "b"
    // is code 98, etc., and all the lower-case letters are together.
    for (let k = 0; k < allLetters.length; k++) {
        letterMap.set(allLetters[k], k);
    }
    let totalChanges = 0;
    for (let k = 0; k < s.length / 2; k++) { // Note the "/ 2" to stop halfway
        // Here are the TWO POINTERS - at indexes k and s.length - 1 - k.
        let firstLetter = s[k], secondLetter = s[s.length - 1 - k];
        // Check to see which letter at each end is farther along in the alphabet
        // The number of changes needed depends on which letter is farther along, so
        // calculate the absolute difference between the letters: for example,
        // "s" vs. "u" would be an absolute difference of 2, and this is calculated
        // by grabbing the indexes at those characters
        totalChanges += Math.abs(letterMap.get(firstLetter) - letterMap.get(secondLetter));
    }
    return totalChanges;
}