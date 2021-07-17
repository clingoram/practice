/**
 * 283. Move Zeroes
 * Difficulty:Easy
 *
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 *
 * --------------------------------------
 * Input: int array
 * Output: int array which places '0' in last
 * 把陣列中的0，移到最後面，其他element，則往前
 * ---------------------------------------
 * Hints:
 *  In-place means we should not be allocating any space for extra array. But we are allowed to modify the existing array. However, as a first step, try coming up with a solution that makes use of additional space. For this problem as well, first apply the idea discussed using an additional array and the in-place solution will pop up eventually.
 *
 *  A two-pointer approach could be helpful here. The idea would be to have one pointer for iterating the array and another pointer that just works on the non-zero elements of the array.
 * ------------------------------------------------
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 *
 * Constraints:
 * 1 <= nums.length <= 104
 * -2^31 <= nums[i] <= 2^31 - 1
 *
 * Follow up: Could you minimize the total number of operations done?
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // Runtime took 76 ms.
  if (nums.length <= 1) {
    return nums;
  }
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count] = nums[i];
      nums[i] = (count === i) ? nums[i] : 0;
      count++;
    }
  }
  return nums;
};
const nums = [0, 1, 0, 3, 12];
// [1,3,12,0,0]
console.log(moveZeroes(nums));