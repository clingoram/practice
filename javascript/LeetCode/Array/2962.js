/**
 * 2962. Count Subarrays Where Max Element Appears at Least K Times
 * 
 * You are given an integer array nums and a positive integer k.
 * Return the number of subarrays where the maximum element of nums appears at least k times in that subarray.
 * A subarray is a contiguous sequence of elements within an array.
 * 
 *  
 * Example 1:
 * Input: nums = [1,3,2,3,3], k = 2
 * Output: 6
 * Explanation: The subarrays that contain the element 3 at least 2 times are: [1,3,2,3], [1,3,2,3,3], [3,2,3], [3,2,3,3], [2,3,3] and [3,3].
 * 
 * Example 2:
 * Input: nums = [1,4,2,1], k = 3
 * Output: 0
 * Explanation: No subarray contains the element 4 at least 3 times.
 *  
 * 
 * Constraints:
 * 1 <= nums.length <= 105
 * 1 <= nums[i] <= 106
 * 1 <= k <= 105
 * 
 * 參數為一個數值陣列nums和正數k，找出nums中最大元素且在子陣列會出現次數＝k的子陣列有幾個
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  // 2 pointers.
  let max = Math.max(...nums);
  let r = 0;
  let l = 0;
  let answer = 0;
  while(r < nums.length){
    if(nums[r] === max){
      k -= 1;
    }else{
      k -= 0;
    }
    r++;

    while(k === 0){
      if(nums[l] === max){
        k += 1
      }else{
        k += 0;
      }
      l++;
    }
    answer +=l;
  }
  return answer;
};
let nums = [1,3,2,3,3], k = 2;
// 6
console.log(countSubarrays(nums,k));