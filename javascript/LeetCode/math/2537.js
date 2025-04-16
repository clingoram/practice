/**
 * 2537. Count the Number of Good Subarrays
 * 
 * Given an integer array nums and an integer k, return the number of good subarrays of nums.
 * A subarray arr is good if there are at least k pairs of indices (i, j) such that i < j and arr[i] == arr[j].
 * A subarray is a contiguous non-empty sequence of elements within an array.
 * 
 * Hints:
 * 1.For a fixed index l, try to find the minimum value of index r, such that the subarray is not good
 * 2.When a number is added to a subarray, it increases the number of pairs by its previous appearances.
 * 3.When a number is removed from the subarray, it decreases the number of pairs by its remaining appearances.
 * 4.Maintain 2-pointers l and r such that we can keep in account the number of equal pairs.
 *  
 * Example 1:
 * Input: nums = [1,1,1,1,1], k = 10
 * Output: 1
 * Explanation: The only good subarray is the array nums itself.
 * 
 * Example 2:
 * Input: nums = [3,1,4,3,2,2,4], k = 2
 * Output: 4
 * Explanation: There are 4 different good subarrays:
 * - [3,1,4,3,2,2] that has 2 pairs.
 * - [3,1,4,3,2,2,4] that has 3 pairs.
 * - [1,4,3,2,2,4] that has 2 pairs.
 * - [4,3,2,2,4] that has 2 pairs. 
 * 
 * Constraints:
 * 1 <= nums.length <= 105
 * 1 <= nums[i], k <= 109
 * 
 * 參數為一個數值陣列nums和數值k，回傳有幾個good subarray
 * good: 至少有k對索引(i,j), i < j & arr[i] === arr[j]
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
    // good pairs: i < j & arr[i] === arr[j]
    // 2 pointers.
    let count = {};
    let goodPairs = 0;
    let ans = 0;
    let j = 0;
    for(let i = 0;i < nums.length;i++) {
      goodPairs += count[nums[i]] || 0;
      // hash map to count occurence.
      count[nums[i]] = (count[nums[i]] || 0) + 1;

      while (goodPairs >= k) {
        goodPairs -= --count[nums[j]];
        j++;
      }
      ans += j;
    }
    return ans;

};
let nums = [3,1,4,3,2,2,4], k = 2;
/**
 * 4
 * There are 4 different good subarrays:
- [3,1,4,3,2,2] that has 2 pairs. [3,3] [2,2]
- [3,1,4,3,2,2,4] that has 3 pairs. [3,3][4,4],[2,2]
- [1,4,3,2,2,4] that has 2 pairs. [2,2],[4,4]
- [4,3,2,2,4] that has 2 pairs. [2,2],[4,4]
*/
console.log(countGood(nums,k))