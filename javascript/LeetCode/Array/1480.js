/*
Given an array nums.We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

---------------------------------------------
Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6
-------------------------------------
array
後面index加前面的

----------------------------------------
Example 1:

Input: nums = [1, 2, 3, 4]
Output: [1, 3, 6, 10]
Explanation: Running sum is obtained as follows: [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4].

Example 2:

Input: nums = [1, 1, 1, 1, 1]
Output: [1, 2, 3, 4, 5]
Explanation: Running sum is obtained as follows: [1, 1 + 1, 1 + 1 + 1, 1 + 1 + 1 + 1, 1 + 1 + 1 + 1 + 1].

Example 3:

Input: nums = [3, 1, 2, 10, 1]
Output: [3, 4, 6, 16, 17]


*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;

    // solution 2-reduce
    //  nums.reduce((prev, current, index, array) => array[index] += prev);
    //  return nums;
};
let nums = [3, 1, 2, 10, 1];
runningSum(nums);