/* The Love Letter Mystery challenge from HackerRank: 
https://www.hackerrank.com/challenges/the-love-letter-mystery/problem?isFullScreen=true

This is what we built in office hour - so it's NOT complete yet!  Try to finish this on your own before looking at what I did!
*/
function theLoveLetterMystery(s) {
    let codedArr = [];
    // Map each letter to a number
    for (let k = 0; k < s.length; k++) {
        codedArr.push(s[k].charCodeAt(0) - 96); // Convert letter to number
    }
    // console.log(s);
    // Loop to grab left and right letters using the two-pointer technique (not complete yet!)
    for (let k = 0; k < s.length / 2; k++) {
        let rightPtr = s.length - 1 - k;
        // console.log(`Left pointer index = ${k}`);
        // console.log(`Right pointer index = ${rightPtr}`);
    }
    // Figure out what to return here!
}