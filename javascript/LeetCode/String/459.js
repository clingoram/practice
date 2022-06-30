/**
 * 459. Repeated Substring Pattern
 * Difficulty:Easy
 *
 * Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
 *
 * -----------------------------------------------------------
 * Input string s
 * 檢查該字串內的字母，拆開後，是否有一樣的字母相連且重複>=2
 * ------------------------------------------------------------
 * Example 1:
 * Input: s = "abab"
 * Output: true
 * Explanation: It is the substring "ab" twice.
 *
 * Example 2:
 * Input: s = "aba"
 * Output: false
 *
 * Example 3:
 * Input: s = "abcabcabcabc"
 * Output: true
 * Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 *
 * Constraints:
 * 1 <= s.length <= 104
 * s consists of lowercase English letters.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const pattern = /^[a-z]/;
  if (s.length < 1 || !s.match(pattern)) {
    return false;
  }
  // solution 1
  // return s.repeat(2).slice(1, -1).includes(s);

  // solution 2
  let slice;
  let mutiple;
  // Math.floor(x)回傳不大於 x 的最大整數值。
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    // slice()把陣列切開(start,end前面一個);並返回一個新陣列，如果用負數則返回最後一個
    slice = s.slice(0, i);
    // console.log(slice);
    mutiple = Math.floor(s.length / slice.length); // 4 2
    // console.log(mutiple);

    // console.log(slice.repeat(mutiple)); // aaaa abab
    if (slice.repeat(mutiple) === s) {
      return true;
    }
  }
  return false;
};
const s = "abab";
// true => ab ab
console.log(repeatedSubstringPattern(s));