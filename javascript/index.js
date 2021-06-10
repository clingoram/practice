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
// console.log(stray(numberStray));

/**
 * 1025 水仙花數
 *
Description

水仙花數（Narcissistic number）又被稱為自戀數或者是阿姆斯壯數，太數學的定義我們就不講了，詳情可以查維基百科。

比較白話的定義為：「一個 n 位數的數字，每一個數字的 n 次方加總等於自身」

例如說 153 是三位數，而 1^3 + 5^3 + 3^3 = 1531 
3
 +5 
3
 +3 
3
 =153，所以它就是一個水仙花數

而 1634 是四位數，而 1^4 + 6^4 + 3^4 + 4^4 = 16341 
4
 +6 
4
 +3 
4
 +4 
4
 =1634，所以它也是一個水仙花數

而數字 0~9 也都是水仙花數，因為一位數 n 的 1 次方一定會等於自己

現在給你一個範圍 n 到 m，請你求出這範圍之中的水仙花數有哪些


Input
輸入為兩個用空白分割的正整數 N 與 M，1 &lt;= N &lt;= M &lt;= 10^61<=N<=M<=10 
6
 

Output
請由小到大輸出從 N 到 M（包含 N 與 M）有哪些水仙花數，每個數字以空行分隔


Sample Input 1 

5 200

Sample Output 1

5
6
7
8
9
153


 * 要如何判斷該數是幾位數
 * 如何取出各個數字
 */
function digitCount(a1) {
	if (a1 === 0) {
		return 1;
	}
	let result = 0;
	while (a1 != 0) {
		al = Math.floor(a1 / 10);
		result++;
	}
	return result;
}
let one = 10;
// console.log(digitCount(one));


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

	let result = {};
	[...string].forEach(element => {
		result[element] ? result[element]++ : result[element] = 1;
	});
	// 假設不知道第一個重複出現的是哪個字母，如何回傳該字母 => 要能維持跟原字串一樣的順序且找第一個出現次數>=2

	// obj to array 
	// Object.keys(result).map((key) => [key, result[key]]);
	// for (const key in result) {
	// key = alphabet
	// console.log(key);

	// 	// if (result[key] >= 2) {
	// 	// 	return key;
	// 	// }
	// 	// Object.hasOwnProperty.call(result, key)
	// 	// if (result.hasOwnProperty(key)) {
	// 	// 	const element = result[key];
	// 	// 	console.log(element)
	// 	// }
	// }

	// console.log(result);

	for (const [key, value] of Object.entries(result)) {
		// console.log(key, value)

	}
	// const map = new Map(Object.entries(result));
	// return map;
	// return Object.entries(result);


}
// let letter = 'DBCABAA';
// should return: 'B' as string
// D:1,	B:2,	C:1,	A:3
let letter = 'DADBCEFB'; // D

// console.log(findLetter(letter));


/**
 * Expressions Matter
 *
 * Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
 * In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
 *
 *
 * With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:
 * 1 * (2 + 3) = 5
 * 1 * 2 * 3 = 6
 * 1 + 2 * 3 = 7
 * (1 + 2) * 3 = 9
 * So the maximum value that you can obtain is 9.
 *
 * Input:
 * 正整數a、b、c
 * 數字範圍:1-10之間
 * 可以使用同個運算符號>1次
 * a、b、c一定得依照順序
 *
 * return:
 * int
 *
 * --------------------------
 * 給3個正整數，可以使用運算符: +、*、()做運算，且可以使用同個符號>1次(也代表有些符號可以不使用)
 * 運用不同的組合方式做運算，且運算時，abc一定得依照順序
 * 回傳運算過後最大數
 */
function expressionMatter(a, b, c) {
	return a * (b + c);
}
const v1 = 1;
const v2 = 2;
const v3 = 3;
// should return:9
// console.log(expressionMatter(v1, v2, v3));

/**
 * 1027 信用卡驗證
 * 
 * 相信應該不少人知道身分證字號有一個公式可以做簡單的驗證，驗證某一組身分證字號是否有問題。
 * 
 * 相同的，信用卡號其實也有類似的機制，可以判斷一個卡號是否「合法（Valid）」，但是合法不代表這就是一張真的能夠使用的信用卡，只代表這卡號沒有問題而已。
 * 
 * 信用卡的驗證機制很簡單，首先卡號基本上都是 16 碼，只有美國運通是 15 碼。為了節省大家的麻煩，這一題的測試資料卡號皆為 16 碼。
 * 
 * 從左邊算起來的第一個數字為發卡行，Master Card 是 5 開頭，Visa 是 4，JCB 則是 3
 * 
 * 而前 15 位數經過加權後加總，會得出一個數字，先把這數字除以 10 取餘數，如果結果是 0，那檢查碼就是 0，否則就是用 10 減去之後的結果
 * 
 * 權重的部分你可以很簡單這樣記：左邊數起奇數位是 2，偶數位是 1
 * 
 * 若是在計算的過程中某一位數加權後的結果比 10 大，那請減去 9
 * 
 * 舉例來說，5412-3456-7890-1232這個卡號的第一位是 5，代表這是 MasterCard 的卡
 * 
 * 而奇數位加總為：5*2 + 1*2 + 3*2 + 5*2 + 7*2 + 9*2 + 1*2 + 3*2，原本應該是：10 + 2 + 6 + 10 + 14 + 18 + 2 + 6
 * 
 * 但前面有說過「如果比 10 大，請減去 9」，所以就是 1(10-9) + 2 + 6 + 1(10-9) + 5(14-9) + 9(18-9) + 2 + 6 = 32
 * 
 * 偶數位加總為：4 + 2 + 4 + 6 + 8 + 0 + 2 = 26，乘以 1 之後還是 26
 * 
 * 把 32 跟 26 相加，得到 58，58 % 10 = 8，因此檢查碼就是 10-8 = 2
 * 
 * 而卡號的第 16 碼也是 2，因此這個卡號是沒有問題的。
 * 
 * 現在給你一些信用卡卡號，你可以幫忙判斷是否合法嗎？
 * ----------------------------------------
 * 
 * Input
 * 輸入為一個信用卡卡號，皆為 16 碼，每 4 碼以 - 做為分隔
 * 
 * Output
 * 若是信用卡不合法，請輸出 INVALID
 * 否之則輸出信用卡的發卡行，只會有 VISA 與MASTER_CARD 這兩種結果
 */
function validCreditcard(num) {
	let card = removeDash(num);
	let sum = evenDigitsCount(card) - oddDigitsCount(card);
}
function removeDash(str) {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== '-') {
			result += str[i];
		}
	}
	return result;
}
function evenDigitsCount() {

}
function oddDigitsCount() {

}
let card = ['5412 - 3456 - 7890 - 1232'];
// console.log(validCreditcard(card));



