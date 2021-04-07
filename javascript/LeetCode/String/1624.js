/*
1624. Largest Substring Between Two Equal Characters
Difficulty:Easy

Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

A substring is a contiguous sequence of characters within a string.

Try saving the first and last position of each character
Try finding every pair of indexes with equal characters

Note:
1. string s
2. return 有幾個字母，若字串中最前面和最後面的字母相同，retrun中間共有幾個字母數，否則-1


Example 1:
Input: s = "aa"
Output: 0
Explanation: The optimal substring here is an empty substring between the two 'a's.

Example 2:
Input: s = "abca"
Output: 2
Explanation: The optimal substring here is "bc".

Example 3:
Input: s = "cbzxy"
Output: -1
Explanation: There are no characters that appear twice in s.

Example 4:
Input: s = "cabbac"
Output: 4
Explanation: The optimal substring here is "abba". Other non-optimal substrings include "bb" and "".


Constraints:
1 <= s.length <= 300
s contains only lowercase English letters.
*/
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
	if (s.length <= 1) {
		return s;
	}
	let count = 0;
	// string 分割
	// 最前和最後字母是否一致
	// 若一致，計算中間共幾個字母，否則回傳-1

	// 只適用於第一個和最後一個字母相同範例:
	// const lastCharacter = s[s.length - 1];
	// if (s[0] === lastCharacter) {
	//     return s.split("").length - 2;
	// }
	// return -1;

	for (let i = 0; i < s.length; i++) {
		// 回傳給定元素於陣列中最後一個被找到之索引，若不存在於陣列中則回傳 -1。搜尋的方向為由陣列尾部向後（即向前）尋找，啟始於 fromIndex。
		let str = s.lastIndexOf(s[i]);
		// console.log(str);
		if (i !== str) {
			count = Math.max(count, str - i);
		}
	}
	return count - 1;
};
const a = "scayofdzca";
// return 6
console.log(maxLengthBetweenEqualCharacters(a));