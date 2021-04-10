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



/**
1017

貪婪的小偷
Description

根據內政部警政署的這份：台灣地區住宅竊盜與防制措施之研究報告指出，在針對住宅竊盜之被害人進行電話訪談後，有以下幾項發現：

住宅遭竊時間在凌晨零時至三時比例是最高的。
三成的民眾是有重複遭竊的經驗。
警方之破案比率過低。
五成受訪者最希望警方加強巡邏。
俗話說的好：知己知彼，百戰不殆。

為了要理解小偷的心裡到底在想什麼，我們也可以先假設自己是小偷，設身處地，再去想想自己會去偷哪些地方還有偷哪些東西。

首先呢，因為時間有限，所以當然是偷價值越高的東西越好，不過這其實也要看狀況，因為每樣物品除了價值以外還有重量。舉例來說，一台 50 吋電視機可能有好幾公斤，價值可能有六七千左右。但是比起電視，小偷可能會覺得偷現金五千塊更好，因為電視除了比較難搬運以外，也要另外找管道把贓貨銷出去，其實隱藏的成本很高。

所以呢，要偷什麼東西其實是要運用一點腦力去思考的。尤其是當物品一多的時候，就需要思考更久。

為了模擬小偷的思考模式，你的指導教授原本要拜託你寫一個程式來計算，給你一個物品清單，上面有每樣物品的重量 W_{i}W 
i
 	
	與價值 P_{i}P 
i
 	
 ，還有小偷的背包能夠承受的重量 WW，問你小偷最多能偷到多少價值的東西。

但後來你的教授發現目前正在研究的這個案例比較簡單一些，遭竊的店家主要都是金飾店。

金飾店特別的點在於哪裡呢？就在於價錢通常都與重量成正本，越重的黃金價錢越高。而且那些金飾通常都不會太重，所以小偷能偷的東西會以「件數」來計算而非重量。

因此，問題就簡化成：給你一個物品清單，上面有每樣物品的價值 P_{i}P 
i
 	
 ，還有小偷最多能帶走的件數，請你幫忙求出小偷最多能偷到多少價值的東西。


Input
第一行為一個數字 C，0&lt;=C&lt;=10000<=C<=1000，代表小偷最多能夠帶走幾樣物品。

第二行為一個數字 N，1&lt;=N&lt;=10001<=N<=1000，代表一共有幾項物品

接下來 N 行每一行都包含一個數字 P_{i}，1 &lt;= P_{i} &lt;= 100000P 
i
 	
 ，1<=P 
i
 	
 <=100000，代表第 i 項物品的價值


Output
請你輸出小偷最多能偷到多少價值的東西

sample inputs:
3
5
1
3
5
7
9

sample out:
21
一共可以拿 3 樣物品，因此拿價值最高的三樣：9 + 7 + 5 = 21

------------------------------------------------------------
 第一行數字表示可以帶走的C項物品
 第二行之後，表示每項物品的價值
 要取所有物品中價值最高的C項，並把那C項價值加總

 原始題目是每行各一個數字，但在VS CODE這樣會出錯，所以我先把它改成用陣列的方式呈現
第一個數字(item)是要取得幾筆資料
第二個(陣列) products 是每項物品的價值
回傳最高價格的加總
 */
function totalValue(num, products) {
	/*
	依序找出最高價值前3名
	之後把他們加總
	*/

	// solution 1:
	// 由大到小排序
	let sorted = products.sort(function (a, b) {
		return b - a;
	});
	// return sorted[0] + sorted[1] + sorted[2];

	// solution 2:
	for (const item of sorted) {

	}

}
const item = 3; //可帶走的物品項目
const products = [5, 1, 3, 5, 7, 9];// 每項物品最高價值，取三樣最高價值的物品並加總
// console.log(totalValue(item, products));


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
 * 兩個陣列，找出唯一的element
 */
function findNotDuplicate(a1, a2) {

	if (a1.length === 0 || a2.length === 0) {
		return;
	}

}
const one = [1, 6, 8, 3];
const two = [6, 3, 5, 8, 1];
console.log(findNotDuplicate(one, two));