/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let pattern = /[a-z0-9]/g;
  let result = s.toLowerCase().match(pattern)
  if (!result) return true
  let newStr = result.join('')
  let reversed = ''
  for (var i = newStr.length-1; i >= 0; i--) {
    reversed += newStr[i]
  }
  return newStr === reversed
};
