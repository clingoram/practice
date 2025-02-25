/**
 * 1524. Number of Sub-arrays With Odd Sum
 * 
 * Given an array of integers arr, return the number of subarrays with an odd sum.
Since the answer can be very large, return it modulo 109 + 7.

Hints:
1.Can we use the accumulative sum to keep track of all the odd-sum sub-arrays ?
2.if the current accu sum is odd, we care only about previous even accu sums and vice versa.

Example 1:
Input: arr = [1,3,5]
Output: 4
Explanation: All subarrays are [[1],[1,3],[1,3,5],[3],[3,5],[5]]
All sub-arrays sum are [1,4,9,3,8,5].
Odd sums are [1,9,3,5] so the answer is 4.

Example 2:
Input: arr = [2,4,6]
Output: 0
Explanation: All subarrays are [[2],[2,4],[2,4,6],[4],[4,6],[6]]
All sub-arrays sum are [2,6,12,4,10,6].
All sub-arrays have even sum and the answer is 0.

Example 3:
Input: arr = [1,2,3,4,5,6,7]
Output: 16
 
Constraints:
1 <= arr.length <= 105
1 <= arr[i] <= 100

 * 回傳子陣列元素加總後為奇數的有幾個
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  const mod = 1e9 + 7;
  let count = 0;
  let currentSum = 0;
  let oddCount = 0;
  let evenCount = 1;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum % 2 === 0) {
      count = (count + oddCount) % mod;
      evenCount++;
    } else {
      count = (count + evenCount) % mod;
      oddCount++;
    }
    count = count % mod;
  }
  return count;

};
const arr = [1, 3, 5];
// 4
// ll subarrays are [[1],[1,3],[1,3,5],[3],[3,5],[5]]
// All sub-arrays sum are [1,4,9,3,8,5].
// Odd sums are [1,9,3,5] so the answer is 4.
console.log(numOfSubarrays(arr));