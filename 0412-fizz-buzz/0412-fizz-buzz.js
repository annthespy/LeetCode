/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var result = []
    for (var i = 1; i <= n; i++) {
        if (divisible(i, 3) && divisible(i, 5)) {
            result.push("FizzBuzz")
        } else if (divisible(i, 3)) {
            result.push("Fizz")
        } else if (divisible(i, 5)) {
            result.push("Buzz")
        } else {
            result.push("" + i)
        }
    }
    //multiples of three it should output “Fizz”
    //multiples of five output “Buzz”
    //For numbers which are multiples of both three and five output “FizzBuzz”
    //else number
    return result
};
    
    var divisible = function(num, div) {
        if (num / div === Math.floor(num / div)) {
            return true
        } 
        else {
            return false
        }
    }