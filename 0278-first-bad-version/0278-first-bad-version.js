/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1
        let right = n
        while (left < right) {
            // check the middle version
            let mid = Math.floor((left + right) / 2)
            // if it's bad → first bad might be this one or to the left
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                // if it's good → first bad must be to the right
                left = mid + 1;
            }
        }
        if (left === right) {
            return left
        }        
    };
};