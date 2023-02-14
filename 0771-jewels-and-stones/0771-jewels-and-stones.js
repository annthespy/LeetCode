/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let obj = {}
    for (var i = 0; i < jewels.length; i++) {
      obj[jewels[i]] = jewels[i]
    }
  console.log(obj)
  let count = 0
  for (var i = 0; i < stones.length; i++) {
    if (obj[stones[i]]) {
      count++
    }
  }
  return count
};