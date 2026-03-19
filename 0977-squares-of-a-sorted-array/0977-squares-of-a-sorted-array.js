/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // let result = []
    // for (var i = 0; i < nums.length; i++) {
    //     let product = nums[i] * nums[i]
    //     result.push(product)
    // }
    // return result.sort((a, b) => a - b)
    const result = new Array(nums.length)
    //two pointers
    let left = 0, right = nums.length - 1
    // [-4, -1, 0, 3, 10]
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[i] = nums[left] * nums[left];
            left++;
        } else {
            result[i] = nums[right] * nums[right];
            right--;
        }
    }
    return result
};