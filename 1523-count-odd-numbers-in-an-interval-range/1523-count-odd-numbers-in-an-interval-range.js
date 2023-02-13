/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  var counter = 0
  
  const isOdd = (num) => {
    return num%2 === 1
  }
  
  while (low <= high) {
    isOdd(low) && counter++
    low++
  }
  
  return counter
};