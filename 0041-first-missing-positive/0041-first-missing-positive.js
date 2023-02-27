/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let counter = 1
  let positives = nums.sort((a,b) => a - b).filter(num => num > 0)
  for (var i = 0; i < positives.length; i++) {
    if (positives[i] === counter) {
      if (positives[i] === positives[i+1]) { continue }
      else counter++
    }
    else break
  }
 return counter
};