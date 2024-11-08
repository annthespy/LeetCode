/**
 * @param {string} s
 * @return {number}
 */

var convertObj = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
}
var romanToInt = function(s) {
    let count = 0
    for (var i = 0; i < s.length; i++) {
        if (convertObj[s[i]] >= convertObj[s[i+1]] || i+1 === s.length) {
            count += convertObj[s[i]]
        } else {
            const num = convertObj[s[i+1]] - convertObj[s[i]]
            count += num
            i++
        }
    }
    return count
};