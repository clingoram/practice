/**
 * 3396. Minimum Number of Operations to Make Elements in Array Distinct
 * 
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    // 一次操作需移除陣列前3個元素，如果陣列中元素少於 3 個，則移除所有剩餘元素
    let hash = [];
    for(let i = nums.length - 1;i >= 0;i--) {
      if(hash.includes(nums[i])){
        return Math.floor(i / 3 + 1);
      }
      hash[i] = nums[i];
    }
    return 0;
};
let nums = [1,2,3,4,2,3,3,5,7];
// 2
console.log(minimumOperations(nums));