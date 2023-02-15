/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = ''
    for (var i = 0; i < strs[0].length; i++) {
      for (var j = 1; j < strs.length; j++) {
        if (strs[0][i] !== strs[j][i]) {
          return strs[0].slice(0, i);
        }
      }
    }   
 return strs[0]
};