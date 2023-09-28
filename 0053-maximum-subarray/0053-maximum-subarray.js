/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0]
    let maxSum = -Infinity
    let runningSum = 0;

  for (let i = 0; i < nums.length; i++) {
    runningSum = Math.max(runningSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, runningSum);
  }

  return maxSum;
    
    //for (let i = 0; i < nums.length; i++) {
    //let currentSubArraySum = 0;

    //for (let j = i; j < nums.length; j++) {
    //  currentSubArraySum += nums[j];
    //  maxSum = Math.max(maxSum, currentSubArraySum);
    //}
  //}
    //return maxSum
};