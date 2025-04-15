/**
 * 3512. Minimum Operations to Make Array Sum Divisible by K
 * 
 * 參數為數值陣列nums和數值k，從nums中任選一個index i，並把它替換成nums[i - 1]
 * 回傳陣列總和能夠被k整除的最少操作次數
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  let sum = nums.reduce((a,b) => a + b,0);
  let opCount = 0;
  while(sum % k !== 0) {
    sum-=1;
    opCount++;
  }
  return opCount;

  // solution 2.
  // let sum = nums.reduce((a,b) => a + b,0);
  // return sum % k;
};
let nums = [3,9,7], k = 5;
// 4
console.log(minOperations(nums,k));