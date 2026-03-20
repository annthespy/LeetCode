/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = []
    // [-1, 0, 1, 2, -1, -4]
    nums.sort((a,b) => a -b) // [-4, -1, -1, 0, 1, 2]
    for (var i = 0; i < nums.length; i++) {
        let currentNumberToCheck = nums[i] // -4
        if (nums[i-1] === currentNumberToCheck) {
            continue
        }
        let sumToFind = -currentNumberToCheck
        // two pointers
        let leftIndex = i + 1
        let rightIndex = nums.length-1
        while (leftIndex < rightIndex) {
            let twoSum = nums[leftIndex] + nums[rightIndex]
            if (twoSum > sumToFind) {
                // move right left
                rightIndex--
            } else if (twoSum < sumToFind) {
                // move left right
                leftIndex++
            } else if (twoSum === sumToFind) {
                result.push([currentNumberToCheck, nums[leftIndex], nums[rightIndex]])
                leftIndex++
                rightIndex--
                // skip duplicates for left
                while (leftIndex < rightIndex && nums[leftIndex] === nums[leftIndex - 1]) {
                    leftIndex++
                }
                // skip duplicates for right
                while (leftIndex < rightIndex && nums[rightIndex] === nums[rightIndex + 1]) {
                    rightIndex--
                }
            }
        }
    }
    return result
};