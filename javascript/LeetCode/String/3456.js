/**
 * 3456. Find Special Substring of Length K
 * 
 * You are given a string s and an integer k.
 * Determine if there exists a substring of length exactly k in s that satisfies the following conditions:
 *    The substring consists of only one distinct character (e.g., "aaa" or "bbb").
 *    If there is a character immediately before the substring, it must be different from the character in the substring.
 *    If there is a character immediately after the substring, it must also be different from the character in the substring.
 * Return true if such a substring exists. Otherwise, return false.
 * 
 * Hint:
 * 1.Return true if there is a sequence of consecutive characters of length k 
 * 
 * Example 1:
 * Input: s = "aaabaaa", k = 3
 * Output: true
 * Explanation:
 * The substring s[4..6] == "aaa" satisfies the conditions.
 * It has a length of 3.
 * All characters are the same.
 * The character before "aaa" is 'b', which is different from 'a'.
 * There is no character after "aaa".
 * 
 * Example 2:
 * Input: s = "abc", k = 2
 * Output: false
 * Explanation:
 * There is no substring of length 2 that consists of one distinct character and satisfies the conditions.
 * 
 *  
 * Constraints:
 * 1 <= k <= s.length <= 100
 * s consists of lowercase English letters only.
 * 
 * 給一個字串s和數值k，檢查子字串是否符合下列條件:
 * 1.字串s中只能有重複的字母且重複的字母長度 = k
 * 2.重複的字母前面必須要有一個字母是不同於條件一
 * 3.重複的字母後也必須要有一個字母是不同於條件一
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function (s, k) {
  // 計算s內是否有連續同一字母出現次數 = k
  let countConsecutive = 1;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] == s[i + 1]) {
      countConsecutive++;
    } else {
      if (countConsecutive === k) {
        return true;
      }
      countConsecutive = 1;
    }
  }
  return k === countConsecutive;
};
// let s = "aaabaaa", k = 3;
// true
// let s = "abc", k = 2;
// false
let s = "h", k = 1;
// true
console.log(hasSpecialSubstring(s, k))