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
n=數字
return 出符合該數字前後一致的符號

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
// var generateParenthesis = function (n) {
//     if (n.length === 0) {
//         return null;
//     }

// };
// const n = 3;
// // should return: ["((()))","(()())","(())()","()(())","()()()"]
// console.log(generateParenthesis(n));

/*
數字1(n)表示後面有幾個字串
數字2(m)表示接下來有 m 個用空行分隔的數字
EG:
'2 yo man 3 4 2 1'
n:2後面有 yo man的2個字串
m:3後面有4 2 1 表示要把第4個字、第2個字、第1個字依序合起來
*/
// function com(str) {

// }
// const str = '2 yo man 3 4 2 1';
// // aoy
// console.log(com(str));


/*
1008 幾個水桶

要拿水桶去裝水，但要求要每一次取水都能帶最少的水桶去，而且「每一個水桶一定都要裝滿」
水桶容量都是2的倍數(2的N次方)，以下是水桶容量:
1,2,4,6,8,16,32,64,128

target 要裝m個單位的水，要帶幾個水桶才行?
EG.m=20，要帶2個水桶(容量16的水桶+容量4的水桶)
*/
function bucketWater(n) {
	let count = 0;
	// let maxWater = Math.pow(2, 31); // 2的31次方
	// console.log(maxWater);

	// n = 2的倍數相加
	// 如何知道是否是2的倍數? %2 === 0
	for (let i = 1; i <= n; i++) {
		if (i % 2 === 0) {

		}

	}
	return count;
}
const m = 20;
// 2(16+4)
console.log(bucketWater(m));

/*
1002 - 數字比大小

輸入一共有許多行，每一行都包含兩個正整數 a, b
請輸出這兩個之中比較大的那個數字
若是碰到 a=b=0 代表輸入結束

Input
用空格隔開的兩正整數 a 與 b

Output
針對每一筆測試資料，請輸出比較大的那個數字，若是兩個一樣大則輸出任意一個數字皆可

若是碰到 a=b=0 代表輸入結束，請勿做任何處理
 */
function compareNum(n) {
	let toSplit = n.toString().split(" ");
	console.log(toSplit);

	// let ans = '';
	for (let i = 0; i < toSplit.length; i++) {
		let int = parseInt(toSplit[i], 10);
		console.log(int);

	}
	// return ans;
}
const a = '1 1 2 3 0 0'; // obj
// 1
// 3
// console.log(compareNum(a));




/*
Remove First and Last Character Part Two
Difficulty:Easy

input array(str用逗號隔開)

若input長度是<3，return null
否則回傳移除前後各一字母的字串,逗號也得移除，以空格取代
return string
*/
function array(arr) {
	// 判斷arr是否是null或長度小於4
	let split = arr.toString().split("").join('');
	// console.log(split);

	if (arr === '' || split.length <= 4 || arr === null) {
		return null;
	}

	return split.slice(2, -2).replace(/,\s+/g, "");
}
let a1 = ['a db 4 3b 2 5'];
// console.log(array(a1));
// return: db 4 3b 2 5

/*
Find the stray number

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

input array是奇數長度的int，數字當中所有都一樣，只有一個數值不同
input array int-length
return int with one unique number
 */
function stray(numbers) {
	if (numbers.length < 1) {
		return;
	}

	// solution 1:
	// for (let i = 0; i < numbers.length; i++) {
	// 	if (numbers[i] === numbers[i + 1]) {
	// 		// use splice to remove element
	// 		numbers.splice(numbers, 1)
	// 	}
	// }
	// return parseInt(numbers, 10);

	// map計算出現過的次數，最少的return
	let m = new Map();
	for (let i = 0; i < numbers.length; i++) {
		const element = numbers[i];
		if (m.has(element)) {
			m.set(element, m.get(element) + 1);
		} else {
			m.set(element, 1);
		}
	}

	// return m;

}
let numberStray = [1, 1, 1, 1, 5];
// return 5
console.log(stray(numberStray));

