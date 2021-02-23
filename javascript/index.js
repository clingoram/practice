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
922. Sort Array By Parity II

Difficulty:Easy

Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.

1.array A都是正整數，其中一半是奇數，剩下則是偶數
2.sort array，array的i是奇數，偶數
3.return array

Example 1:
Input: [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.


Note:
2 <= A.length <= 20000
A.length % 2 == 0
0 <= A[i] <= 1000

*/
// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
// var sortArrayByParityII = function (A) {
//     if (A.length <= 1) {
//         return A;
//     }

// };
// const array = [4, 2, 5, 7];
// // should return [4,5,2,7]
// console.log(`The result is ${sortArrayByParityII(array)}`);
