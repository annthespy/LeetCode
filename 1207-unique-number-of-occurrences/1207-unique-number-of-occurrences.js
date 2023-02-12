/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const storage = {}
  let result = true
  for (var i = 0; i < arr.length; i++) {
    let item = arr[i]
    storage[item] ? storage[item] += 1 : storage[item] = 1
  }
  let occurences = Object.values(storage).sort()
  for (var i = 0; i < occurences.length; i++) {
    if (occurences[i] === occurences[i+1]) {
    result = false
    break
    }
  }
  return result
};