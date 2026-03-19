/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result = []
    for (var i = 0; i < nums.length; i++) {
        let product = nums[i] * nums[i]
        result.push(product)
    }
    return result.sort((a, b) => a - b)
};