/*
1460. Make Two Arrays Equal by Reversing Sub-arrays
Difficulty: Easy

Given two integer arrays of equal length target and arr.

In one step, you can select any non-empty sub-array of arr and reverse it. You are allowed to make any number of steps.

Return True if you can make arr equal to target, or False otherwise.

Hints:
Each element of target should have a corresponding element in arr, and if it doesn't have a corresponding element, return false.
To solve it easiely you can sort the two arrays and check if they are equal.

----------------------------------
1.target and arr are array
2.return true if they are equal to each other,else return false 

----------------------------------

Example 1:
Input: target = [1,2,3,4], arr = [2,4,1,3]
Output: true
Explanation: You can follow the next steps to convert arr to target:
1- Reverse sub-array [2,4,1], arr becomes [1,4,2,3]
2- Reverse sub-array [4,2], arr becomes [1,2,4,3]
3- Reverse sub-array [4,3], arr becomes [1,2,3,4]
There are multiple ways to convert arr to target, this is not the only way to do so.

Example 2:
Input: target = [7], arr = [7]
Output: true
Explanation: arr is equal to target without any reverses.

Example 3:
Input: target = [1,12], arr = [12,1]
Output: true

Example 4:
Input: target = [3,7,9], arr = [3,7,11]
Output: false
Explanation: arr doesn't have value 9 and it can never be converted to target.

Example 5:
Input: target = [1,1,1,1,1], arr = [1,1,1,1,1]
Output: true

Constraints:
target.length == arr.length
1 <= target.length <= 1000
1 <= target[i] <= 1000
1 <= arr[i] <= 1000
*/
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
    if (target.length !== arr.length) {
        return null;
    }
    // sorted if two arrays are equal
    // Each element of target should have a corresponding element in arr
    let sortArr = arr.sort((a, b) => a - b);
    let sortTar = target.sort((a, b) => a - b);

    return (sortArr.join('') === sortTar.join('')) ? true : false;
};
const t = [1, 2, 3, 4];
const a = [2, 4, 1, 3];
// should return true
console.log(`The result is ${canBeEqual(t, a)}`);