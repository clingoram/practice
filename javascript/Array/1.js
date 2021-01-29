/*
Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Constraints:

2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

arry任意indices兩個加起來要=target值
return array index

-------------------------------------------------
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

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map;
    for (var i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
    }
};

const nums = [3, 2, 4];
const target = 6;
console.log(twoSum(nums, target));


// --------------------------------------------
// use for loop
// update at 2021-01-25
var twoSum_for = function (nums, target) {
    if (nums.length < 2) {
        return;
    }
    for (let index = 0; index < nums.length; index++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[index] + nums[j] == target && index != j) {
                return [index, j];
            }
        }
    }
};
const number_array = [2, 7, 11, 15];
const target_number = 9;
console.log(twoSum_for(number_array, target_number));