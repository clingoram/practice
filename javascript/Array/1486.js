/*
1486. XOR Operation in an Array

Given an integer n and an integer start.

Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.

Return the bitwise XOR of all elements of nums.

------------------
array[i] = start +2*i
n == array.length
return int
------------------

Constraints:

1 <= n <= 1000
0 <= start <= 1000
n == nums.length

---------------------

Example 1:

Input: n = 5, start = 0
Output: 8
Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
Where "^" corresponds to bitwise XOR operator.
Example 2:

Input: n = 4, start = 3
Output: 8
Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.
Example 3:

Input: n = 1, start = 7
Output: 7
Example 4:

Input: n = 10, start = 5
Output: 2
 
 */

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    let nums = [];
    // start +2*index = nums(array)
    for (let index = 0; index < n; index++) {
        // console.log(index);
        nums[index] = start + 2 * index;
    }
    // return Math.max.apply(null, nums);
    return nums.reduce((prev, current) => prev ^ current, 0);

};
const n = 4, start = 3;
console.log(xorOperation(n, start));
