/*
1502. Can Make Arithmetic Progression From Sequence
Difficulty: Easy

Given an array of numbers arr. A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

Return true if the array can be rearranged to form an arithmetic progression, otherwise, return false.

Hints:
Consider that any valid arithmetic progression will be in sorted order.
Sort the array, then check if the differences of all consecutive elements are equal.

-----------------------------
arr = numbers of array
陣列中的每個element，必須是要同數字的增加或遞減
EG:[3,5,1]=>[1,3,5] or [5,3,1] 每個數字都是以2或-2增加或減少，所以回傳true
若每個數字間隔不一樣，回傳false

------------------------------

Example 1:
Input: arr = [3,5,1]
Output: true
Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.

Example 2:
Input: arr = [1,2,4]
Output: false
Explanation: There is no way to reorder the elements to obtain an arithmetic progression.


Constraints:
2 <= arr.length <= 1000
-10^6 <= arr[i] <= 10^6
*/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
    // 1.sorted
    // 2.math

    // 要知道array中每個數字之間的間隔是否一樣
    if (arr.length < 1) {
        return arr;
    }
    // solution 1:
    let sortedArr = arr.sort((a, b) => a - b); // 1,3,5
    for (let diff = sortedArr[1] - sortedArr[0], i = 2; i < sortedArr.length; ++i) {
        if (sortedArr[i] - sortedArr[i - 1] !== diff) {
            return false;
        }
    }
    return true;

    // solution 2:
    // let max = Math.max(...arr);
    // let min = Math.min(...arr);
    // let diff = (max - min) / (arr.length - 1); // 2

    // return (min === max || !arr.some(n => (n - min) % diff))
};
const a = [3, 5, 1];
console.log(canMakeArithmeticProgression(a));