/**
 * 217.Contains Duplicate
 * Difficulty:Easy
 *
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 *
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 *
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 *
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 *
 * Constraints:
 * 1 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {

  if (nums.length <= 1) {
    return;
  }
  // 若陣列中有重複出現次數>1的，回傳true

  let m = new Map();
  for (let i = 0; i < nums.length; i++) {
    m.has(nums[i]) ? m.set(nums[i], m.get(nums[i]) + 1) : m.set(nums[i], 1);
  }
  // console.log(m);

  for (const [key, value] of m.entries()) {
    // console.log(value);
    if (value >= 2) {
      return true;
    }
  }
  return false;
};
const nums = [2, 14, 18, 22, 22];
// true
console.log(containsDuplicate(nums));