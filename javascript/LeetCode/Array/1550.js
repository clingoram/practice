/**
 * 1550. Three Consecutive Odds
 * Difficulty:Easy
 *
 * Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
 *
 * input:陣列
 * output:bool
 * 給一個陣列，看裡面的elements是否有連續3個奇數
 * 是回傳true
 * 不是回傳false
 * ------------------------------------
 * Hints:
 * Check every three consecutive numbers in the array for parity.
 * ------------------------------------------------------------
 * Example 1:
 * Input: arr = [2,6,4,1]
 * Output: false
 * Explanation: There are no three consecutive odds.
 *
 * Example 2:
 * Input: arr = [1,2,34,3,4,5,7,23,12]
 * Output: true
 * Explanation: [5,7,23] are three consecutive odds.
 *
 * Constraints:
 * 1 <= arr.length <= 1000
 * 1 <= arr[i] <= 1000
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  if (arr.length <= 0) {
    return;
  }
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] % 2 == 1 && arr[i + 1] % 2 == 1 && arr[i] % 2 == 1) {
      return true;
    }
  }
  return false;
};
const arr = [1, 2, 34, 3, 4, 5, 7, 23, 12];
// true
console.log(threeConsecutiveOdds(arr));