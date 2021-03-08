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
1389. Create Target Array in the Given Order
Difficulty:Easy

Given two arrays of integers nums and index. Your task is to create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array.

It is guaranteed that the insertion operations will be valid.

Hints:
Simulate the process and fill corresponding numbers in the designated spots.

------------------------------------
1.index & nums = integer array

rules:
初始化是空陣列
從左到右讀取兩個target array(index i and nums i)
並insert index of index i and nums i 直到沒有element可讀取

return array

eg:
nums i (0) index i (0) => [0];
nums i (1) index i (1) => [0,1]
nums i (2) index i (2) => [0,1,2];
nums i (3) index i (2) => [0,1,3,2]
nums i (4) index i (1) => [0,4,1,3,2]

--> 
以nums的index為主，比較兩個array
同樣的兩個值，則組合成新陣列，不同的，則看是否已有該值，若沒有，新增沒有的值(不加重複出現過的值)
------------------------------------

Example 1:
Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]

Example 2:
Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
Output: [0,1,2,3,4]
Explanation:
nums       index     target
1            0        [1]
2            1        [1,2]
3            2        [1,2,3]
4            3        [1,2,3,4]
0            0        [0,1,2,3,4]

Example 3:
Input: nums = [1], index = [0]
Output: [1]


Constraints:
1 <= nums.length, index.length <= 100
nums.length == index.length
0 <= nums[i] <= 100
0 <= index[i] <= i
*/

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
    let result = [];
    if (nums.length !== index.length) {
        return null;
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < index.length; j++) {
            const element = index[j];
            console.log(element)

        }
    }

};
const n = [1, 2, 3, 4, 0];
const i = [0, 1, 2, 3, 0];
// should return [0,1,2,3,4]
console.log(`The result is ${createTargetArray(n, i)}`)