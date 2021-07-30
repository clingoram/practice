/*
1. Two Sum
Difficulty:Easy

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:
2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    /*
    solution 1:
    Brute Force暴力解法.時間複雜度 O(N^2) -- Bad
     */
    if (nums.length < 2) {
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == target && i != j) {
                return [i, j];
            }
        }
    }

    /**
     * solution 2:
     * Hash Table - use map.時間複雜度 O(N) -- Better than solution 1.
     */
    // let map = new Map();
    // if (array.length < 2 && target == null) {
    //     return array;
    // }

    // for (let i = 0; i < array.length; i++) {
    //     if (map.has(target - array[i])) {
    //         return [map.get(target - array[i]), i];
    //     } else {
    //         map.set(array[i], i);
    //     }
    // }
    // return [];
};
const nums = [3, 2, 4];
const target = 6;
// Output: [1,2]
// nums[1] + nums[2] = 6
console.log(twoSum(nums, target));