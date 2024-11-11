/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var numToStr = x.toString()
    if (numToStr < 0) return false
    else if (numToStr.length === 1) return true
    // else if (numToStr.length === 2) {
    //    if (Number(numToStr[0]) === Number(numToStr[1])) return true
    //    else return false
    // }
    else {
    let k = numToStr.length - 1
    for (var i = 0; i < numToStr.length; i++) {
        if (Number(numToStr[i]) === Number(numToStr[k])) {
            if (i === k) {
                return true
            } else {
                k--
                if (k === i) return true
            }
        }
        else return false
    }
    }


};