
/**
 * 28. Implement strStr()
 * Difficulty:Easy(459延伸題)
 *
 * Implement strStr().
 *
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 * Clarification:
 * What should we return when needle is an empty string? This is a great question to ask during an interview.
 * For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
 *
 * ---------------------------------------------------
 * Input: haystack and needle are string
 * Output:在haystack中第一個出現的needle index值
 * 若haystack沒有needle，return -1;
 * 或needle是空的，return 0
 * ------------------------------------------------------
 * Example 1:
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 *
 * Example 2:
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 *
 * Example 3:
 * Input: haystack = "", needle = ""
 * Output: 0
 *
 * Constraints:
 * 0 <= haystack.length, needle.length <= 5 * 104
 * haystack and needle consist of only lower-case English characters.
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  /**
  * haystack中:
  * 有needle，return haystack index
  * 沒有，return -1
  * $haystack或$needle是空，retunr 0
  * 
  * $haystack、$needle 都是英文小寫
  */

  if (needle === "") {
    return 0;
  }
  for (let i = 0; i < haystack.length; i++) {

    // Return part of string:
    // for JS: string.substr(start,end)
    // for PHP: substr(string,start,end)
    let slice = haystack.substr(i, needle.length);
    if (slice === needle) {
      return i;
    }
  }
  return -1;

};
let h = "hello";
let nee = "ll";
// 2
console.log(strStr(h, nee));