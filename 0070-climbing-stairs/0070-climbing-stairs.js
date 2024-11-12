/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
        if(n === 1 || n === 2){
        return n;
    }
    let first = 1, second = 2, result = 0;
    for (let i = 3; i <= n; i++) {
        result = first + second;
        first = second;
        second = result;
    }
    return result;
};