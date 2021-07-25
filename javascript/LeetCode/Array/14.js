/**
 * 14. Longest Common Prefix
 * Difficulty:Easy
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * -------------------------------------------
 * Input: string array
 * Output: if has prefix,return the prefix;else return the empty string ""
 * 找出陣列中重複出現的"字首"
 * --------------------------------------------
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 * Constraints:
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lower-case English letters.
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

  let pattern = /^[a-z]+$/;
  if (!strs.join("").match(pattern)) {
    return;
  }
  if (strs.length === 0) {
    return "";
  }

  // 在陣列所有element都有，而且是陣列開頭中重複出現的字母

  // solution 1
  let result = '';
  // for (let i = 0; i < strs[0].length; i++) {
  // 	for (let j = 0; j < strs.length - 1; j++) {
  // 		if (strs[j][i] !== strs[j + 1][i]) {
  // 			return result;
  // 		}
  // 	}
  // 	// 要取第一個
  // 	result += strs[0][i];
  // }
  // return result;


  // solution 2
  for (let i = 0; i < strs[0].length; i++) {
    for (let s of strs) {
      // 取各element前面3個字母:f f f,l l l,o o i
      // console.log(s[i]);

      //  取各element前0個字母:f f f
      // console.log(s[0][i]);
      if (s[i] !== strs[0][i]) {
        return s.slice(0, i);
      }
    }
  }
  return strs[0];
};
let strs = ["flower", "flow", "flight"];
// fl
console.log(longestCommonPrefix(strs));