/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    
    let sum
    let smallerNum
    if (a > b) {
        sum = a
        smallerNum = b
    } else {
        sum = b
        smallerNum = a
    }
    
    if (smallerNum > 0) {
        for (var i = smallerNum; i > 0; i--) {
        sum++
    }
    }
        if (smallerNum < 0) {
        for (var i = smallerNum; i < 0; i++) {
        sum--
    }
    }

    return sum
    
}