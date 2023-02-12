/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
const checker = (prefix, word) => {
  return word.slice(0, prefix.length) === prefix
}

var isPrefixOfWord = function(sentence, searchWord) {
  let arr = sentence.split(' ')
  console.log(arr)
  let result = -1
  for (var i = 0; i < arr.length; i++) {
    if (checker(searchWord, arr[i])) {
      result = i + 1
      break
    }
  }
  return result
};