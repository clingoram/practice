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
1295. Find Numbers with Even Number of Digits

Given an array nums of integers, return how many of them contain an even number of digits.

Note:
1.array of int
2.return array中，element是奇位數的有幾個
3.return int

How to compute the number of digits of a number ?
Divide the number by 10 again and again to get the number of digits.
 
Constraints:
1 <= nums.length <= 500
1 <= nums[i] <= 10^5

Example 1:
Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.

Example 2:
Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {

};
const array = [12, 345, 2, 6, 7896]; // return 2
console.log(`The result of findNumbers is ${findNumbers(array)}`);
