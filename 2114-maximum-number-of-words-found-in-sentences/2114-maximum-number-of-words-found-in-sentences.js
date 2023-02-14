/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
  let length = 0
    for (var i = 0; i < sentences.length; i++) {
      let arr = sentences[i].split(' ')
      if (arr.length > length) {
        length = arr.length
      }
    }
  return length
};