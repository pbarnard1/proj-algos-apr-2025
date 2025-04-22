/*
643. Maximum Average Subarray I - https://leetcode.com/problems/maximum-average-subarray-i/description/

This is the solution that we built in office hour together!
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxSum; // Undefined to start in case we have arrays of negative values
    for (let i = k - 1; i < nums.length; i++) {
        let currentSum = 0;
        // console.log(`Current index for i = ${i}`);
        for (let j = i; j >= i - (k - 1); j--) {
            // console.log(`Current index for j = ${j}`);
            currentSum += nums[j];
            // console.log(`Value = ${nums[j]} at index j = ${j}`);
        }
        // console.log(`Comparing current currentSum = ${currentSum} to max currentSum = ${maxSum}`)

        if (maxSum == undefined || currentSum > maxSum) { // Save this sum as the max if we don't have a max OR the current sum is bigger than the max
            maxSum = currentSum;
        }
        // Alternate approach: maxSum = Math.max(maxSum, currentSum); // Assumes we already have a value for maxSum
    }
    let maxAverage = maxSum / k;
    return maxAverage;
};