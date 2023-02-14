/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

//const getBinary = (num, str) => {
//    if (num === 1) {
//      str = '1' + str
//      return str
//    } else {
//      const remainder = num%2
//      str = `${remainder}` + str
//      num = Math.floor(num/2)
//      return getBinary(num, str)
//    } 
//}

var addBinary = function(a, b) {
 // const num1 = parseInt(a, 2)
 // const num2 = parseInt(b, 2)
 // const sum = num1 + num2
  let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
  return sum.toString(2)
};