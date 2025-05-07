/**
 * 3392. Count Subarrays of Length Three With a Condition
 * 
 * 參數為一個數字陣列，回傳長度為3的subarray且第一個和最後一個元素的和的倍數為中間元素的subarray有幾個，若沒有回傳0
 * [1,4,1] => 1 + 1 = 2; 2的倍數為4
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    let count = 0;
    for(let i = 1;i < nums.length - 1;i++){
      if((nums[i - 1] + nums[i+1]) * 2 === nums[i]){
        count++;
      }
    }
    return count;
};
let nums = [1,2,1,4,1];
// 1
// [1,4,1]
console.log(countSubarrays(nums));