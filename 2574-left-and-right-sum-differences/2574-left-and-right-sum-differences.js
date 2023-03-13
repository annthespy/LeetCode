/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    let result = []
    let sumOfAllElements = 0
    for (var i = 0; i < nums.length; i++) {
      sumOfAllElements+= nums[i]
    }
  let leftSum = 0
  let rightSum = sumOfAllElements
   for (var i = 0; i < nums.length; i++) {
     rightSum -= nums[i]
     result.push(Math.abs(leftSum - rightSum))
     leftSum += nums[i]
   }
  return result
};