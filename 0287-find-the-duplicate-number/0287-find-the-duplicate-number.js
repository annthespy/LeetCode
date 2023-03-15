/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let map = new Map()
    let result
    for (var i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            result = nums[i]
        }
        map.set(nums[i], nums[i])
    }
    return result
};