/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = []
    for (var i = 0; i < nums.length; i++) {
            let j = i + 1
            while (j < nums.length) {
                if (nums[i] + nums[j] === target) {
                    result.push(i)
                    result.push(j)
                    break
                }
                j++
            }
        }
    return result
}