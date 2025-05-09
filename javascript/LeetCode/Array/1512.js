/*
Number of Good Pairs

Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100

-------------------------------------------------
nums[i] == nums[j] and i < j.
array key i == array key j and key i < key j

-------------------------------------
Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0
 
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {

    let result = 0;

    if (nums.length < 2) {
        return;
    }

    for (let i = 0; i <= nums.length; i++) {
        result += nums.filter((number, index) =>
            nums[i] == number && i < index
        ).length;
    }
    return result;

};
const nums = [1, 2, 3, 1, 1, 3];
console.log(numIdenticalPairs(nums));