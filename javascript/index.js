/*
EG:
寫在程式開始執行的地方:
let functionName = 'twoSum';
let start = countTime(functionName);
放置於程式執行結束處:
let end = endTime(start);
console.log(end);
*/
/**
 * 
 * @param {string} fileName 執行function名稱
 */

//放置於程式開始執行處--開始時間
function countTime(fileName = null) {

    let start_time = new Date().getTime();
    let data = [
        fileName,
        start_time
    ]
    return data;
}
// 結束時間
// 放置於程式執行結束處，回傳結果的結束時間
function endTime(start) {
    let end_time = new Date().getTime();

    return start[0] + '執行時間:' + (end_time - start[1]) / 5000 + 'ms';
}
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
EG:[3,5,1]=>[1,3,5] or [5,3,1] 間隔都是以2或-2，所以回傳true
若不一樣，回傳false

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
    if (arr.length < 1) {
        return arr;
    }


};
const a = [3, 5, 1];
console.log(canMakeArithmeticProgression(a));