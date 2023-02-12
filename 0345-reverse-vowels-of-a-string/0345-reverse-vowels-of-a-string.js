/**
 * @param {string} s
 * @return {string}
 */
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

var reverseVowels = function(s) {
  const storage = []
  for (var i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      storage.push(s[i])
    }
  }
  let result = ''
  for (var i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      result += storage[storage.length-1]
      storage.pop()
    } else {
      result += s[i]
    }
  }
  return result
};