/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
 let uniqueNums = new Map()
  for (var i = 0; i < nums.length; i++) {
    if (!uniqueNums[nums[i]] && nums[i] > 0) {
      uniqueNums.set(nums[i], nums[i])
    }
  }
    let result = 1
  while (uniqueNums.has(result)) {
    result++
  }
  return result
};