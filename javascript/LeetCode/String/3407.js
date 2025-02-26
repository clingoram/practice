/**
 * 3407. Substring Matching Pattern
 * 
 * You are given a string s and a pattern string p, where p contains exactly one '*' character.
 * The '*' in p can be replaced with any sequence of zero or more characters.
 * Return true if p can be made a substring of s, and false otherwise.
 * 
 * Hints:
 * 1. Divide the pattern in two strings and search in the string.
 * 
 * Example 1:
 * Input: s = "leetcode", p = "ee*e"
 * Output: true
 * Explanation:
 * By replacing the '*' with "tcod", the substring "eetcode" matches the pattern.
 * 
 * Example 2:
 * Input: s = "car", p = "c*v"
 * Output: false
 * Explanation:
 * There is no substring matching the pattern.
 * 
 * Example 3:
 * Input: s = "luck", p = "u*"
 * Output: true
 * Explanation:
 * The substrings "u", "uc", and "uck" match the pattern.
 * 
 * Constraints:
 * 1 <= s.length <= 50
 * 1 <= p.length <= 50 
 * s contains only lowercase English letters.
 * p contains only lowercase English letters and exactly one '*'
 * 
 * 參數為一個字串s和字串p，p內有一個"*"符號，而該符號可被替換成任一或多個字母
 * 若p的*號在替換成字母後可變成s的子字串，則回傳true
 * 否則false
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var hasMatch = function (s, p) {
  // 將字串拆開再搜尋
  let splitToArray = p.split("*");
  // 找出在s中第一次出現的splitToArray[0]index
  let sIndex = s.indexOf(splitToArray[0]);
  // 找出s中最後一次出現的splitToArray[1]index
  let sLastIndex = s.lastIndexOf(splitToArray[1]);
  // 若都有找到(不等於-1) 且 sIndex + splitToArray[0].length <= sLastIndex
  if (sIndex !== -1 && sLastIndex !== -1 && (sIndex + splitToArray[0].length) <= sLastIndex) {
    return true;
  }
  return false;
};
let s = "leetcode", p = "ee*e";
// let s = "luck", p = "u*";
// true
// let s = "car", p = "c*v";
console.log(hasMatch(s, p))