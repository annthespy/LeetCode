/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var decodeMessage = function(key, message) {
  let cypher = {}
  let pointer = 0
    for (var i = 0; i < key.length; i++) {
      if (key[i] === ' ') {
      }
      if (!cypher[key[i]] && key[i] !== ' ') {
        cypher[key[i]] = alphabet[pointer]
        pointer++
      }
    }
  let result = ''
  for (var i = 0; i < message.length; i++) {
    if (message[i] === ' ') {
      result = result + ' '
    } else {
      result = result + cypher[message[i]]
    }
  }
  return result
};