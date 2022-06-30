/**
 * 1636. Sort Array by Increasing Frequency
 * Difficulty:Easy
 *
 * Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.
 *
 * Return the sorted array.
 *
 * --------------------------------------
 * Input:int array
 * output:sort int array
 *
 * 有2種方式:
 * 1.依照陣列中elements出現的頻率來做比較，
 * 比較順序:
 * 首先是最少出現的，之後再以出現頻率做遞增排序。
 * 2.若elements出現的頻率次數一樣，則比較elements大小，首先還是以最少出現的作為開頭，之後則以遞減方式呈現
 *
 * ----------------------------------------------
 * Hints:
 * Count the frequency of each value.
 * Use a custom comparator to compare values by their frequency. If two values have the same frequency, compare their values.
 * ---------------------------------
 * Example 1:
 * Input: nums = [1,1,2,2,2,3]
 * Output: [3,1,1,2,2,2]
 * Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
 *
 * Example 2:
 * Input: nums = [2,3,1,3,2]
 * Output: [1,3,3,2,2]
 * Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.
 *
 * Example 3:
 * Input: nums = [-1,1,-6,4,5,-6,1,4,1]
 * Output: [5,-1,4,4,-6,-6,1,1,1]
 *
 * Constraints:
 * 1 <= nums.length <= 100
 * -100 <= nums[i] <= 100
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {

  if (nums.length === 0) {
    return;
  }

  let m = new Map();
  for (let i = 0; i < nums.length; i++) {
    // if (m.get(nums[i])) {
    // 	m.set(nums[i], m.get(nums[i]) + 1)
    // } else {
    // 	m.set(nums[i], 1);
    // }

    // or 
    m.get(nums[i]) ? m.set(nums[i], m.get(nums[i]) + 1) : m.set(nums[i], 1);
  }
  return nums.sort((a, b) => m.get(a) - m.get(b) || b - a);
};
const nums = [1, 1, 2, 2, 2, 3];
console.log(frequencySort(nums));