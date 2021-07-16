/**
 * 136.Single Number
 * Difficulty:Easy
 *
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 *
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 *
 * --------------------------------------------
 * reutn unique int
 * ---------------------------------------------
 * Example 1:
 * Input: nums = [2,2,1]
 * Output: 1
 *
 * Example 2:
 * Input: nums = [4,1,2,1,2]
 * Output: 4
 *
 * Example 3:
 * Input: nums = [1]
 * Output: 1
 *
 * Constraints:
 * 1 <= nums.length <= 3 * 104
 * -3 * 104 <= nums[i] <= 3 * 104
 * Each element in the array appears twice except for one element which appears only once.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {

  let pattern = /^[0-9]+$/;
  if (!nums.join('').match(pattern)) {
    return;
  }
  if (nums.length <= 1) {
    return nums.join('');
  }

  // solution 1
  let m = new Map();
  nums.forEach(element => {
    m.has(element) ? m.set(element, m.get(element) + 1) : m.set(element, 1);
  });

  for (const [key, value] of m.entries()) {
    if (value <= 1) {
      return key;
    }
  }

};
const nums = [4, 1, 2, 1, 2];
// 4
console.log(singleNumber(nums));