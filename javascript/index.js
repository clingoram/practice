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
 * 524. Longest Word in Dictionary through Deleting
 * Difficulty:Medium
 * 
 * Given a string s and a string array dictionary, return the longest string in the dictionary that can be formed by deleting some of the given string characters. 
 * If there is more than one possible result, return the longest word with the smallest lexicographical order. 
 * If there is no possible result, return the empty string.
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
	/**
	 * Input string & array.
	 * Output string.
	 */
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
const s = "abpcplea";
const dictionary = ["ale", "apple", "monkey", "plea"];
// no 'b','c' in dictionary
// return apple
// console.log(findLongestWord(s, dictionary));


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



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

	// two pointer solution.Big O(n)
	if (nums.length < 1 || !target) {
		return;
	}

	nums.sort((a, b) => a - b);

	let left = 0;
	let right = nums.length - 1;
	let result = [];

	while (left < right) {
		if (nums[left] + nums[right] === target) {
			// return [left + 1, right + 1];
			result.push(left, right);
			left++;
			right--;
		} else if (nums[left] + nums[right] < target) {
			left++;
		} else {
			right--;
		}
	}
	return result;
};
// const target = 9;
// const nums = [2, 7, 11, 15];
//            ^          ^
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

const nums = [3, 2, 4];
const target = 6;
// Output: [1,2]
// nums[1] + nums[2] = 6
// console.log(twoSum(nums, target));



/**
 * Check the exam
 * 
 * The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
 * The two arrays are not empty and are the same length. 
 * Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
 * 
 * If the score < 0, return 0.
 * For example:
 * checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
 * checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
 * checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
 * checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
 */
function checkExam(array1, array2) {
	/**
	 * 給兩個字串陣列參數，檢查這兩個參數中的元素有哪些不一樣，再依據他們的比對結果作加減分
	 * 一樣:+4分
	 * 不一樣:-1
	 * 空:+0
	 * ---------
	 * 參數長度會相等，可能會有空字串
	 * 比對兩個參數元素
	 */
	let sum = 0;
	if (array1.length !== array2.length) {
		return;
	}
	for (let i = 0; i < array1.length; i++) {
		if (array1[i] === array2[i]) {
			sum = sum + 4;
		} else if (array1[i] !== array2[i]) {
			sum = sum - 1;
		}
		if (array1[i] === "" || array2[i] === "") {
			sum = sum;
		}
	}
	return sum < 0 ? 0 : sum;
}
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));
// 7

/**
 * 2677. Chunk Array
 * 
 * Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. 
 * The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
 * You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
 * Please solve it without using lodash's _.chunk function.
 * 
 * Example 1:
 * Input: arr = [1,2,3,4,5], size = 1
 * Output: [[1],[2],[3],[4],[5]]
 * Explanation: The arr has been split into subarrays each with 1 element.
 * 
 * Example 2:
 * Input: arr = [1,9,6,3,2], size = 3
 * Output: [[1,9,6],[3,2]]
 * Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.
 * 
 * Example 3:
 * Input: arr = [8,5,3,2,6], size = 6
 * Output: [[8,5,3,2,6]]
 * Explanation: Size is greater than arr.length thus all elements are in the first subarray.
 * 
 * Example 4:
 * Input: arr = [], size = 1
 * Output: []
 * Explanation: There are no elements to be chunked so an empty array is returned.
 *  
 * 
 * Constraints:
 * arr is a valid JSON array
 * 2 <= JSON.stringify(arr).length <= 105
 * 1 <= size <= arr.length + 1
 */
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
	/**
	 * 給兩個參數，分別是數字陣列arr和數值size
	 * 
	 */
};

