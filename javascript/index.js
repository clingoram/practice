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

	// array.push(), array.pop()
	let splitS = s.split(''); // obj
	let splitDict = dictionary.join('').split(''); // obj

	let result = [];
	let str = '';

	for (let i = 0; i < splitDict.length; i++) {
		splitS.includes(splitDict[i])
	}
	return result;
};
const s = "abpcplea", dictionary = ["ale", "apple", "monkey", "plea"];
// no 'b','c' in dictionary
// return apple
console.log(findLongestWord(s, dictionary));


/**
 * 43. Multiply Strings
 * Difficulty:Medium
 *
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
 * Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
 *
 * Input num1 and num2 are 非負數以字串方式呈現
 * Output num1 * num2(以字串方式呈現)
 * 不能使用內建含式或直接把Input轉成數字
 * -------------------------------------------
 * Example 1:
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 *
 * Example 2:
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 *
 * Constraints:
 * 1 <= num1.length, num2.length <= 200
 * num1 and num2 consist of digits only.
 * Both num1 and num2 do not contain any leading zero, except the number 0 itself.
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {

	let pattern = /^[0-9]+$/;

	if (!num1.match(pattern) || !num2.match(pattern) || Number(num1) === 0 || Number(num2) === 0) {
		return;
	}



};
// const num1 = "2", num2 = "3";
// "6"
const num1 = "123", num2 = "456";
// "56088"
// console.log(multiply(num1, num2));
