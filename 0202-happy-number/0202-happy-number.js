/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
        let count = 0
            let str = n.toString()
            for (var i = 0; i < str.length; i++) {
                let product = Number(str[i]) * Number(str[i])
                count += product
            }
            console.log(count)
            if (count === 1 || count === 7) return true 
            else if (count >= 10) {
              return isHappy(count)
            } else { return false }
};