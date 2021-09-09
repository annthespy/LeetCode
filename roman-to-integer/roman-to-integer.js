/**
 * @param {string} s
 * @return {number}
 */
var numerals = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

var romanToInt = function(s) {
    let result = 0
    let index = 0
    while (index < s.length) {
        if (numerals[s[index]] < numerals[s[index+1]]) {
            result += (numerals[s[index+1]] - numerals[s[index]])
            index += 2
            
        } else {
            result += numerals[s[index]]
            index ++
        }
    }
    return result
};