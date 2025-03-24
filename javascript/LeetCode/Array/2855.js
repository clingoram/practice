/**
 * 2855. Minimum Right Shifts to Sort the Array
 * 
 * You are given a 0-indexed array nums of length n containing distinct positive integers. 
 * Return the minimum number of right shifts required to sort nums and -1 if this is not possible.
 * A right shift is defined as shifting the element at index i to index (i + 1) % n, for all indices.
 * 
 * Hints:
 * 1.Find the pivot point around which the array is rotated.
 * 2.Will the answer exist if there is more than one point where nums[i] < nums[i-1]? 
 * 
 * Example 1:
 * Input: nums = [3,4,5,1,2]
 * Output: 2
 * Explanation: 
 * After the first right shift, nums = [2,3,4,5,1].
 * After the second right shift, nums = [1,2,3,4,5].
 * Now nums is sorted; therefore the answer is 2.
 * 
 * Example 2:
 * Input: nums = [1,3,5]
 * Output: 0
 * Explanation: nums is already sorted therefore, the answer is 0.
 * 
 * Example 3:
 * Input: nums = [2,1,4]
 * Output: -1
 * Explanation: It's impossible to sort the array using right shifts.
 *  
 * 
 * Constraints:
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 * nums contains distinct integers.
 * 
 * 參數為一個數值陣列，回傳將陣列最右邊元素往左移，讓nums變成遞增排序的最小操作次數為何，若不行則回傳-1
 * （i + 1) % nums.length;
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function(nums) {
    let op = 0;
    let pivot = 0;
    for(let i = 1;i < nums.length;i++){
      if(nums[i] < nums[i-1]){
        pivot = i;
        op++;
      }
    }
    if(op > 1){
      return -1;
    }
    if(pivot === 0){
      return 0;
    }
    return (nums[nums.length - 1] > nums[0]) ? -1 : nums.length - pivot;
  };
  let arr = [3,4,5,1,2];
  // 2
  console.log(minimumRightShifts(arr));