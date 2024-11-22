/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // Base cases
    if (x === 1) return 1; // Any number to the power of 1 is itself
    if (n === 0) return 1; // Any number to the power of 0 is 1

    // Handle negative powers
    if (n < 0) {
        return 1 / myPow(x, -n); // Take the reciprocal for negative powers
    }

    // Recursive case
    if (n % 2 === 0) {
        return myPow(x * x, n / 2); // Even power: x^n = (x^2)^(n/2)
    } else {
        return x * myPow(x, n - 1); // Odd power: x^n = x * x^(n-1)
    }

};