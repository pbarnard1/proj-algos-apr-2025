/*
643. Maximum Average Subarray I - https://leetcode.com/problems/maximum-average-subarray-i/description/

This is Adrian's solution that uses the sliding window technique!
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let curSum = 0;
    let leftInd = 0; // Left end of sliding window
    // Start by constructing the sliding window of length k
    for (let i = 0; i < k; i++) {
        curSum += nums[i];
    }
    let maxAvg = curSum / k; // Save maximum average, starting with first set of values (remember average is the sum of a set of values divided by the number of items in the set)
    // We start at index k so that we can begin sliding the window rightward
    for (let rightInd = k; rightInd < nums.length; rightInd++) {
        curSum -= nums[leftInd]; // Remove leftmost value from window
        leftInd++; // So we can move the left end of window for next iteration
        curSum += nums[rightInd]; // Add rightmost value to window
        maxAvg = Math.max(maxAvg, curSum / k); // Save max average as we go
    }
    return maxAvg;
};