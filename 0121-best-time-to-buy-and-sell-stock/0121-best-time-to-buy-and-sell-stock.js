/**
 * @param {number[]} prices
 * @return {number}
 */

// [7,1,5,3,6,4]

//var maxProfit = function(prices) {
//    let result = 0
//    for (var i = 0; i < prices.length; i++) {
//        let j = i+1
//        while (j < prices.length) {
//            const profit = prices[j] - prices[i]
//            if (profit > result) result = profit
//            // result = Math.max(result, profit)
//            j++
//        }
//    }
//    return result
//}

const maxProfit = (prices) => {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};