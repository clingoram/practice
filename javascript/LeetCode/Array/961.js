/**
 * 961. N-Repeated Element in Size 2N Array
 * Difficulty:Easy
 *
 * In a array nums of size 2 * n, there are n + 1 unique elements, and exactly one of these elements is repeated n times.
 *
 * Return the element repeated n times.
 *
 * Example 1:
 * Input: nums[1,2,3,3]
 * Output: 3
 *
 * Example 2:
 * Input: nums[2,1,2,5,3,2]
 * Output: 2
 *
 * Example 3:
 * Input: nums[5,1,5,2,5,3,5,4]
 * Output: 5
 *
 * Note:
 * 4 <= nums.length <= 10000
 * 0 <= nums[i] < 10000
 * nums.length is even
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {

  if (nums.length % 2 !== 0) {
    return;
  }
  let m = new Map();
  for (let i = 0; i < nums.length; i++) {
    m.has(nums[i]) ? m.set(nums[i], m.get(nums[i]) + 1) : m.set(nums[i], 1);
  }
  for (const [key, value] of m.entries()) {
    if (value >= 2) {
      return key;
    }
  }
};
const nums = [1, 2, 3, 3];
// 3
console.log(repeatedNTimes(nums));