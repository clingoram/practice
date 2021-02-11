/*
1748. Sum of Unique Elements
Difficulty:Easy

You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.

Note:
1.nums = int array
2.array內有重複出現的elements
3.把array中，只出現過一次的element加總
4.return int

Example 1:
Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.

Example 2:
Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.

Example 3:
Input: nums = [1,2,3,4,5]
Output: 15
Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    if (nums.length < 2) {
        // 陣列轉int
        return parseInt(nums, 10);
    }
    let map = new Map();
    // 要記錄element分別出現過幾次
    nums.forEach((item) => {
        // 有該key
        if (map.has(item)) {
            // 建置該筆資料(key,value) =>次數+1
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    })
    return [...map].reduce((prev, currentValue) => currentValue[1] === 1 ? prev + currentValue[0] : prev, 0);
};
const arr = [1, 2, 3, 2];
console.log(`The sumOfUnique result is ${sumOfUnique(arr)}.`);