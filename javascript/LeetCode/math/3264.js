/**
 * 3264. Final Array State After K Multiplication Operations I

    You are given an integer array nums, an integer k, and an integer multiplier.
    You need to perform k operations on nums. In each operation:
      Find the minimum value x in nums. If there are multiple occurrences of the minimum value, select the one that appears first.
      Replace the selected minimum value x with x * multiplier.
    Return an integer array denoting the final state of nums after performing all k operations.

    Hints:
    1. Maintain sorted pairs (nums[index], index) in a priority queue.
    2. Simulate the operation k times.

    Example 1:
    Input: nums = [2,1,3,5,6], k = 5, multiplier = 2
    Output: [8,4,6,5,6]
    Explanation:
      Operation	Result
      After operation 1	[2, 2, 3, 5, 6]
      After operation 2	[4, 2, 3, 5, 6]
      After operation 3	[4, 4, 3, 5, 6]
      After operation 4	[4, 4, 6, 5, 6]
      After operation 5	[8, 4, 6, 5, 6]
    
    Example 2:
    Input: nums = [1,2], k = 3, multiplier = 4
    Output: [16,8]
    Explanation:
      Operation	Result
      After operation 1	[4, 2]
      After operation 2	[4, 8]
      After operation 3	[16, 8]
    

    Constraints:
    1 <= nums.length <= 100
    1 <= nums[i] <= 100
    1 <= k <= 10
    1 <= multiplier <= 5

    3個參數:int array nums.int k & int multiplier
    需在nums上操作K次，每次找出nums中最小值X，若有重複多個最小值出現，則取第一個出現的
    將X汰換成 X * multiplier
    回傳在操作K次上述步驟後的num

 * @param {number[]} num
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (num, k, multiplier) {
  let op = 0;
  while (op < k) {
    let tempMin = num[0];
    let j = 0;
    for (let i = 0; i < num.length; i++) {
      if (num[i] < tempMin) {
        tempMin = num[i];
        j = i;
      }
    }
    op++;
    num[j] *= multiplier;
  }
  return num;
};
let num = [2, 1, 3, 5, 6], k = 5, multiplier = 2;
// [8,4,6,5,6]
console.log(getFinalState(num, k, multiplier));