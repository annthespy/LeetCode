/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let storage = {}

    for (var i = 0; i < nums.length; i++) {
        if (storage[nums[i]] !== undefined) {
            if (Math.abs(i - storage[nums[i]]) <= k) return true
        }
        storage[nums[i]] = i
    }
    return false
};