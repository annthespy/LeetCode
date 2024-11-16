/**
 * @param {number} n
 * @return {boolean}
 */
 // input - n number
 // output bool
 
var isPowerOfTwo = function(n) {
    if (n===1) return true
    if (n===0) return false
    // else n/2 Math.floor !== n/2 return false
    const newNum = n/2
    if (Math.floor(newNum) !== newNum) {
        return false
    } else {
      return isPowerOfTwo(newNum)
    }
};