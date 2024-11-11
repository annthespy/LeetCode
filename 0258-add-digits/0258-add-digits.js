/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let count = 0
    const numToStr = num.toString()
    for (var i = 0; i < numToStr.length; i++) {
        count += Number(numToStr[i])
    }
    if (count < 10) {
        return count
    } else {
        return addDigits(count)
    }
};