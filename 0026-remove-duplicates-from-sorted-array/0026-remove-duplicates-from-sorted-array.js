/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 0
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i+1]) {
        continue
      }
       nums[count] = nums[i];
      count++;
    }
  return count 
};