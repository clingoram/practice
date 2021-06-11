// debugger
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

------------------------
nums = int array
至少要有一個負數，return 最大總和
-----------------------

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
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//     if (nums.length < 1) {
//         return null;
//     }

//     let max = Math.max(...nums);
//     console.log(max);
// };
// const a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// // [4,-1,2,1] has the largest sum = 6.
// // return: 6
// console.log(maxSubArray(a));


/*
22. Generate Parentheses
Difficulty:Medium

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

-----------------
input n=數字
return 出()符合不同的完整排列方式

n=3
return 3個()
-------------------

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]


Constraints:
1 <= n <= 8
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	if (n.length === 0) {
		return null;
	}

};
const n = 3;
// should return: ["((()))","(()())","(())()","()(())","()()()"]
// console.log(generateParenthesis(n));

/**
* 數字1(n)表示後面有幾個字串
* 數字2(m)表示接下來有 m 個用空行分隔的數字
* EG:
* '2 yo man 3 4 2 1'
* n:2後面有 yo man的2個字串
* m:3後面有4 2 1 表示要把第4個字、第2個字、第1個字依序合起來
*/
function com(str) {
	let stringNumber = str[0]; // 有幾個字串

}
const str = '2 yo man 3 4 2 1';
// aoy
// console.log(com(str));

/**
 * 找字
 * 
 * 給一字串，該字串有重複出現的字母，找出一個且重複出現次數>1的字母並回傳
 * 
 * EG:
 * DBCABA 
 * result: B
 * 
 * Input string
 * return string or null
 */
function findLetter(string) {
	// edge case:
	// if empty string,return null;
	// if string length < 1,return null
	if (string.length === 0) {
		return;
	}
	// 假設不知道第一個重複出現的是哪個字母，如何回傳該字母 => 要能維持跟原字串一樣的順序且找第一個出現次數>=2

	// let result = {};
	// [...string].forEach(element => {
	// 	result[element] ? result[element]++ : result[element] = 1;
	// });

	// for (const [key, value] of Object.entries(result)) {
	// 	console.log(key, value)
	// }

	// const map = new Map(Object.entries(result));
	// return map;
	// return Object.entries(result);

	let m = new Map();
	// way 1
	[...string].forEach(element => {
		m.has(element) ? m.set(element, m.get(element) + 1) : m.set(element, 1);
	})
	// way 2
	// for (let i = 0; i < string.length; i++) {
	// 	m.has(string[i]) ? m.set(string[i], m.get(string[i]) + 1) : m.set(string[i], 1);
	// }

	for (const [key, value] of m.entries()) {

	}

}
// let letter = 'DBCABAA';
// should return: 'B' as string
// D:1,	B:2,	C:1,	A:3
let letter = 'DADBCEFB'; // D
console.log(findLetter(letter));
