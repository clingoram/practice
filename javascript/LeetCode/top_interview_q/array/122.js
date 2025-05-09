/**
 * 122.Best Time to Buy and Sell Stock II
 * Difficulty:Easy
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 *
 * Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
 * Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
 *
 * ------------------------------------------------------
 * Input array
 * Output int
 * 
 * array key = 天數;value = prices
 * 找出買賣股票最大獲利值
 * ----------------------------------------------------------------------
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 7
 * Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
 * Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
 *
 * Example 2:
 * Input: prices = [1,2,3,4,5]
 * Output: 4
 * Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
 * Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
 *
 * Example 3:
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e., max profit = 0.
 *
 * Constraints:
 * 1 <= prices.length <= 3 * 104
 * 0 <= prices[i] <= 104
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

  if (prices.length < 1) {
    return;
  }

  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] >= prices[i - 1]) {
      sum += prices[i] - prices[i - 1];
    }
  }
  return sum;

};
const prices = [1, 2, 3, 4, 5];
// 4
console.log(maxProfit(prices));