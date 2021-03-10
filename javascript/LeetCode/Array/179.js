/*
179. Largest Number
Difficulty:Medium

Given a list of non-negative integers nums, arrange them such that they form the largest number.

Note: The result may be very large, so you need to return a string instead of an integer.

-------------------
nums=正整數
重新排列這些數目成最大數
return string
--------------------

Example 1:
Input: nums = [10,2]
Output: "210"

Example 2:
Input: nums = [3,30,34,5,9]
Output: "9534330"

Example 3:
Input: nums = [1]
Output: "1"

Example 4:
Input: nums = [10]
Output: "10"


Constraints:
1 <= nums.length <= 100
0 <= nums[i] <= 109
*/
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    if (nums < 1) {
        return nums.join("");
    }
    return nums.sort((a, b) => {
        return ("" + b + a) - ("" + a + b);
    }).join("").replace(/^0*/g, '') || '0';

};
const a = [3, 30, 34, 5, 9];
// return 9534330(string)
console.log(largestNumber(a));