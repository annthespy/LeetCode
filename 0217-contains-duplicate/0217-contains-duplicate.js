/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let result = false
    const storage = {}
    for (var i = 0; i < nums.length; i++) {
      if (!storage[nums[i]]) {
        storage[nums[i]] = 1
      }
      else {
        result = true
        break
      }
    }
  return result
};