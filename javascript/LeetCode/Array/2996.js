/**
 * 2996. Smallest Missing Integer Greater Than Sequential Prefix Sum
 * 
 * You are given a 0-indexed array of integers nums.
 * A prefix nums[0..i] is sequential if, for all 1 <= j <= i, nums[j] = nums[j - 1] + 1. In particular, the prefix consisting only of nums[0] is sequential.
 * Return the smallest integer x missing from nums such that x is greater than or equal to the sum of the longest sequential prefix.
 * 
 * Hints:
 * 1.To find the longest sequential prefix, iterate from left to right. 
 * For a fixed i, if nums[i] != nums[i - 1] + 1 then the longest sequential prefix ends at i - 1.
 * 
 * Example 1:
 * Input: nums = [1,2,3,2,5]
 * Output: 6
 * Explanation: The longest sequential prefix of nums is [1,2,3] with a sum of 6. 6 is not in the array, 
 * therefore 6 is the smallest missing integer greater than or equal to the sum of the longest sequential prefix.
 * 
 * Example 2:
 * Input: nums = [3,4,5,1,12,14,13]
 * Output: 15
 * Explanation: The longest sequential prefix of nums is [3,4,5] with a sum of 12. 
 * 12, 13, and 14 belong to the array while 15 does not. 
 * Therefore 15 is the smallest missing integer greater than or equal to the sum of the longest sequential prefix.
 *  
 * 
 * Constraints:
 * 1 <= nums.length <= 50
 * 1 <= nums[i] <= 50
 * 
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
    // 參數為一個數值陣列，找出連續子陣列中的總和是否有在nums中，,若沒有那該總和是否>=連續前綴（start at index 0)
    // A prefix is a contiguous subArray starting at index 0
    let countSum = nums[0];
    for(let i = 1 ;i < nums.length;i++) {
      if(nums[i - 1] + 1 === nums[i]){
        countSum+=nums[i];
      }else{
        break;
      }
    }
    while(nums.includes(countSum)){
      countSum++;
    }
    return countSum;
  };
  let nums = [1, 2, 3, 2, 5];
  // 6
  console.log(missingInteger(nums));