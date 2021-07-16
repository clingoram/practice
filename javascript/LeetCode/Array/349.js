/**
 * 349. Intersection of Two Arrays
 * Difficulty:Easy
 *
 * Given two integer arrays nums1 and nums2, return an array of their intersection. 
 * Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 *
 *
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2,2]
 *
 * Example 2:
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [4,9]
 * Explanation: [9,4] is also accepted.
 *
 *
 * Constraints:
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 1000
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {

  if (nums1.length < 1 || nums2.length < 1) {
    return nums1;
  }

  let result = [];

  // solution 1. Runtime took 84 ms
  // nums1.sort();
  // nums2.sort();
  // for (let i = 0; i < nums1.length; i++) {
  // 	for (let j = 0; j < nums2.length; j++) {
  // 		if (nums1[i] === nums2[j]) {
  // 			result.push(nums1[i]);
  // 		}
  // 	}
  // }
  // const uni = new Set(result);
  // return [...uni];

  // solution 2.Runtime took 72 ms
  // let u = new Set(nums1);
  // return [...new Set(nums2.filter(num => u.has(num)))];

  // solution 3.Runtime took 76 ms
  let m = new Map();
  nums1.forEach(element => {
    if (!m.has(element)) {
      m.set(element, 1);
    }
  });

  return nums2.filter(n => {
    if (m.has(n)) {
      m.delete(n);
      return true;
    }
    return false;
  })
};
let nums1 = [2, 1], nums2 = [1, 2];
// [1,2]
console.log(intersection(nums1, nums2));