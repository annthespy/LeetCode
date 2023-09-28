/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0
    let minPrice = +Infinity
    
    // [7,1,5,3,6,4]
    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) { 
            minPrice = prices[i]
        }
        else if (prices[i] - minPrice > profit) {
            profit = prices[i] - minPrice
        }
    }
    
    return profit
};