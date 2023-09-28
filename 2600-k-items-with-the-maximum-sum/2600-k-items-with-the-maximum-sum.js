/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */   //                               3        7          4       8
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    // compare k to numOnes
    let result
    let count
    
    if (k <= numOnes) {
        return k
    }
    // if k is <= numOnes
    // return k
    if (k > numOnes) {
        count = k - numOnes // 7
        result = numOnes // 6
        if (count <= numZeros) {
            return result
        } else {
            count = count - numZeros
            if (numNegOnes > 0) {
              return result - count
            }
            else {
              return result 
            }
        }
    }
    // if k is more 
    // reassign k to k - numOnes - 3 and result to numOnes
    // compare k to numZeros
    // if k is <= numZeros - return result
    // if k is > numZeroes
    // return result - numNegOnes
};