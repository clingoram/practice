/**
 * 26.Remove Duplicates from Sorted Array
 * Difficulty: Easy
 *
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
 *
 * Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
 *
 * Return k after placing the final result in the first k slots of nums.
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 *
 * ----------------------------------------------------------------------
 * Input array
 * Output int
 * 計算總共有幾個不重複的elements
 * 
 * array length === input array length,長度不足的以"_"做代替
 * 把重複出現的element 改成只出現1次
 * output order:小->大
 * ---------------------------------------------------------------------
 * Example 1
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 *
 * Example 2
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 * Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 *
 * Constraints:
 * 0 <= nums.length <= 3 * 104
 * -100 <= nums[i] <= 100
 * nums is sorted in non-decreasing order.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 0) {
    return;
  }

  // solution 1
  // const unique = new Set(nums);
  // return [...unique];

  // solution 2
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[index] !== nums[i]) {
      nums[++index] = nums[i];
    }
  }
  return index + 1;

};
const nums = [1, 1, 2];
// 2 => [1,2,_]
console.log(removeDuplicates(nums));