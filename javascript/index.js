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
53. Maximum Subarray
Difficulty:Easy

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.



Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: nums = [1]
Output: 1

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23


Constraints:
1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105
*/
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function (nums) {

// };
// const a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSubArray(a));


/*
1380. Lucky Numbers in a Matrix
Difficulty:Easy

Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

Hints:
Find out and save the minimum of each row and maximum of each column in two lists.
Then scan through the whole matrix to identify the elements that satisfy the criteria.

-----------------------------------
matrix = array
return one number (是row中最小值和column中最大值)
--------------------------------------------
EG:
[
    [3,7,8],
    [9,11,13],
    [15,16,17]
]
ANS: [15] -->15是row中最小值但卻是column中最大值

Example 1:
Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
Output: [15]
Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column

Example 2:
Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
Output: [12]
Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.

Example 3:
Input: matrix = [[7,8],[1,2]]
Output: [7]


Constraints:
m == mat.length
n == mat[i].length
1 <= n, m <= 50
1 <= matrix[i][j] <= 10^5.
All elements in the matrix are distinct.
*/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// var luckyNumbers = function (matrix) {
//     // find min and max element
//     for (let i = 0; i < matrix.length; i++) {
//         let min = Math.min(...matrix[i]); // 3,9,15
//         let max = Math.max(...matrix[i]); // 8,3,17
//         // console.log(min);
//         console.log(max)
//     }

// };
// const m = [[3, 7, 8], [9, 11, 13], [15, 16, 17]];
// // [15]
// console.table(luckyNumbers(m));


// add to equal to target
function tar(array, target) {
    let result = [];

    // solution 1:for loop
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] + array[i - 1] === target) {
    //         result.push(array[i], array[i - 1]);
    //     }
    // }
    // return result;

    // if don't use for loop
    // map? reduce? forEach?

    return array.forEach(element => {
        console.log(element - 1)
    });
}
const a = [1, 2, 4, 4];
const t = 8;
// return : [4,4]
console.log(tar(a, t));