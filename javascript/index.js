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
 * 放置於程式開始執行處--開始時間
 * 
 * @param {string} fileName 執行function名稱
 * */
function countTime(fileName = null) {

	let start_time = new Date().getTime();
	let data = [
		fileName,
		start_time
	]
	return data;
}
/**
 * 結束時間
 * 放置於程式執行結束處，回傳結果的結束時間
 * 
 * @param {variable} start 開始執行程式的變數
 */
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
elements中是要連續且有最大正值的elements
return 最大總和
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
var maxSubArray = function (nums) {
	if (nums.length < 1) {
		return null;
	}

	let max = Math.max(...nums);
	console.log(max);
};
const a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// [4,-1,2,1] has the largest sum = 6 => -1+4+2+1
// return: 6
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
	if (n < 1) {
		return;
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
	console.log(stringNumber);

}
const str = '2 yo man 3 4 2 1';
// aoy
// console.log(com(str));

/**
 * 524. Longest Word in Dictionary through Deleting
 * Difficulty:Medium
 * 
 * Given a string s and a string array dictionary, return the longest string in the dictionary that can be formed by deleting some of the given string characters. 
 * If there is more than one possible result, return the longest word with the smallest lexicographical order. 
 * If there is no possible result, return the empty string.
 * 
 * 
 * 
 * Example 1:
 * Input: s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
 * Output: "apple"
 * 
 * Example 2:
 * Input: s = "abpcplea", dictionary = ["a","b","c"]
 * Output: "a"
 * 
 * Constraints:
 * 1 <= s.length <= 1000
 * 1 <= dictionary.length <= 1000
 * 1 <= dictionary[i].length <= 1000
 * s and dictionary[i] consist of lowercase English letters.
 */
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
	let pattern = /^[a-z]+$/;
	if (!s.match(pattern) || !s.match(pattern).join("")) {
		return;
	}

	// split string s
	// array.push(), array.pop()
	let splitS = s.split(''); // obj
	let splitDict = dictionary.join('').split(''); // obj

	let result = [];

	for (let i = 0; i < splitDict.length; i++) {
		// console.log(splitDict[i]);
		// console.log(splitS[i]);

		if (splitDict[i] === splitS[i]) {
			result.push(splitDict[i]);
		}
	}
	console.log(result);
	// return result;
};
const s = "abpcplea", dictionary = ["ale", "apple", "monkey", "plea"];
// no 'b','c' in dictionary
// apple
// console.log(findLongestWord(s, dictionary));
