/**
 * 1403. Minimum Subsequence in Non-Increasing Order
 * 
 * Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non included elements in such subsequence. 
 * If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements. A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array. 
 * 
 * Note that the solution with the given constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order.
 *  
 * Hints:
 * 1.Sort elements and take each element from the largest until accomplish the conditions.
 * 
 * Example 1:
 * Input: nums = [4,3,10,9,8]
 * Output: [10,9] 
 * Explanation: The subsequences [10,9] and [10,8] are minimal such that the sum of their elements is strictly greater than the sum of elements not included. However, the subsequence [10,9] has the maximum total sum of its elements. 
 * 
 * Example 2:
 * Input: nums = [4,4,7,6,7]
 * Output: [7,7,6] 
 * Explanation: The subsequence [7,7] has the sum of its elements equal to 14 which is not strictly greater than the sum of elements not included (14 = 4 + 4 + 6). Therefore, the subsequence [7,6,7] is the minimal satisfying the conditions. Note the subsequence has to be returned in non-increasing order.  
 *  
 * 
 * Constraints:
 * 1 <= nums.length <= 500
 * 1 <= nums[i] <= 100
 * 
 * 參數為一個數值陣列，找出子陣列元素內總和 > 其他沒在子陣列內的總和的陣列
 * 若有數種答案，回傳長度最短的子陣列，若還是有數種答案，傳回所有元素總和最大的子序列。
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
  // 由大至小排序
  nums.sort((a,b) => b - a);
  // 先取得nums總和
  let total = nums.reduce((a, b) => a + b,0);
  let sum = 0;
  let ans = [];
  for(let i = 0;i < nums.length;i++) {
    sum += nums[i];
    // total值 減去 nums[i]元素
    total -= nums[i];
    // 將nums[i] 塞進陣列ans內
    ans[i] = nums[i];
      
    if(sum > total){
      break;
    }
  }
  return ans;
      
};
// let nums = [4,3,10,9,8];
// [10,9]
let nums = [4,4,7,6,7];
// [7,7,6]
console.log(minSubsequence(nums))