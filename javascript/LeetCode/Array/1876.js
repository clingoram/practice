/**
 * 1876. Substrings of Size Three with Distinct Characters
 * 
 * A string is good if there are no repeated characters.
 * Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
 * Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
 * A substring is a contiguous sequence of characters in a string.
 * 
 * Hints:
 * 1.Try using a set to find out the number of distinct characters in a substring.
 * 
 * Example 1:
 * Input: s = "xyzzaz"
 * Output: 1
 * Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
 * The only good substring of length 3 is "xyz".
 * 
 * Example 2:
 * Input: s = "aababcabc"
 * Output: 4
 * Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
 * The good substrings are "abc", "bca", "cab", and "abc".
 * 
 * Constraints:
 * 1 <= s.length <= 100
 * s​​​​​​ consists of lowercase English letters.
 * 
 * 參數為一個英文小寫字串，子字串需以3個字母為一單位，回傳有幾個子字串符合good string定義
 * good string: 字串內沒有重複出現的字母
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  // use set to store unique value.
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    // 使用substring將字串以3長度為一單位做切割，之後轉陣列過濾重複出現的字母
    let substring = s.substring(i, i + 3).split("").filter((value, index, array) => array.indexOf(value) === index);
    if (substring.length === 3) {
      set.add(substring);
    }
  }
  return set.size;
};
const str = "aababcabc";
// 4
// There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
// The good substrings are "abc", "bca", "cab", and "abc".
console.log(countGoodSubstrings(str));