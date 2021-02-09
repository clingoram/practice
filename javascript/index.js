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

// 442. Find All Duplicates in an Array
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var findDuplicates = function (nums) {

// };
// const input = [4, 3, 2, 7, 8, 2, 3, 1];
// console.log(findDuplicates(input));
// /*
// Output:
// [2,3]

// need: O(n) runtime
// */


// 442. Find All Duplicates in an Array
/*
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

1. 出現次數>=2
2. return 重複值(array)
3. 執行時間 O(n)

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let map = new Map(); // obj with key and value
    let result = [];
    // console.log(map);
    // for (const number of nums) {
    //     console.log(number); // 4, 3, 2, 7, 8, 2, 3, 1

    // }
    nums.forEach(a => {
        console.log(a); // 4, 3, 2, 7, 8, 2, 3, 1

    })

};
const arr = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(arr));