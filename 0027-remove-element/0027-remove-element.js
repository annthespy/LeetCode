/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let startIndex = 0
  
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[startIndex] = nums[i];
      startIndex++;
    }
    console.log(nums)
  }
  
  return startIndex
};