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


/**
 * 9*9
 */
function got() {
	// start from 9 to 2
	// eg.9*9=81 ~ 2*9=18
	for (let i = 2; i <= 10; i++) {
		// console.log(i)
		for (let j = 1; j < 10; j++) {
			console.log(`${i} * ${j} = ${j * i}`);
		}

	}
}
// got();

/*
要拿水桶去裝水，但要求要每一次取水都能帶最少的水桶去，而且「每一個水桶一定都要裝滿」
水桶容量都是2的倍數(2的N次方)，以下是水桶容量:
1,2,4,6,8,16,32,64,128

target 要裝m個單位的水，要帶幾個水桶才行?
EG.m=20，要帶2個水桶(容量16的水桶+容量4的水桶)
*/
function bucketWater(n) {
	let result = [];
	let count = 0;
	let maxWater = Math.pow(2, 31); // 2的31次方
	console.log(maxWater);
	let num = 2;

	for (let i = 0; i < 31; i++) {

	}
	return count;
}
const m = 20;
// 2(16+4)
// console.log(bucketWater(m));

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


/**
LIOJ 1035
簡易排序
Description

排序是學習演算法的時候第一個會學到的東西，有許多種排序方法，例如說泡沫排序、選擇排序、插入排序等等

這些演算法其實對初學者來說都不算太容易，需要一點時間學習

那為什麼這一題會叫做「簡易排序」呢？因為你只要留意一下輸入的範圍並且思考一下，應該就能得到一個比較簡單的排序方法！

那就祝你順利囉！


Input
第一行為一個數字 N，1&lt;=N&lt;=2000001<=N<=200000，代表有幾個數字需要排序

接下來 N 行每行都是一個正整數

Output
請輸出數列由小到大排序後的結果，每一個數字請用空行分開

----------------------------------
原始題目是2行，每行各有數字，但在VS CODE這樣會出錯，所以我把input資料都改成用陣列的方式呈現
第一個數字是共有幾筆資料
第二個之後是全部需要排序的資料
回傳排序過的數字
 */
function sortNum(n) {
	// console.log(typeof n);

	// 把共有幾筆資料分隔出來
	let allData = parseInt(n[0].toString().split(" "), 10);
	// console.log(allData);

	// let a = n[1].split(" ");
	// console.log(a);
	for (let i = 1; i < n.length; i++) {
		const element = n[i];
		console.log(element)
	}
	// const uniqueSet = new Set(a);

	// console.log(uniqueSet)
	// return [...uniqueSet].sort().join(" ");
}
const number = [5, 1, 7, 4, 9, 5];
// 1 4 5 7 9
// console.log(sortNum(number));





/*
Training JS #14: Methods of Number object--toString() and toLocaleString()

Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

the color code should starting with "#". and then use 2 characters per color.

for example:
colorOf(255,0,0) should return "#ff0000"
colorOf(0,111,0) should return "#006f00"
colorOf(1, 2 ,3) should return "#010203"
That's all of your work. My work is print your color code on your screen.

-----------------------------
rgb = 三原色
value range從0-255
用toString(16) 16進制把數字轉換成字串，並把他們合在一起
回傳前面帶有#的字串

*/
function colorOf(r, g, b) {

	// number convert to array and join
	console.log(typeof r);

}
const r = 255;
const g = 0;
const b = 0;
// console.log(colorOf(r, g, b));


/*
Remove First and Last Character Part Two
Difficulty:Easy

input array(str用逗號隔開)

若input長度是<3，return null
否則回傳移除前後各一字母的字串,逗號也得移除，以空格取代
return string
*/
function array(arr) {
	// console.log(arr.length);
	// 判斷arr是否是null或長度小於4
	let split = arr.toString().split("").join('').replace(/,/g, " ");
	// console.log(split);

	if (arr === '' || split.length <= 4 || arr === null) {
		return null;
	}

	return split.slice(split[0], -2);
}
let a1 = ['efb,22,c'];
// console.log(array(a1));

/**
 * 兩個陣列，找出不重複的element(差集)
 */
function findNotDuplicate(a1, a2) {

	if (a1.length === 0 || a2.length === 0) {
		return;
	}
	// map?
	// new Set?
	// filter
	// 先sort?

	// return a2.filter((x) => {
	// 	return a1.indexOf(x) === -1;
	// })
}
const one = [1, 6, 8, 3];
const two = [6, 3, 5, 8, 1];
// 5
// console.log(findNotDuplicate(one, two));

