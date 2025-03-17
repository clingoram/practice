/**
 * 1358. Number of Substrings Containing All Three Characters
 * 
 * Given a string s consisting only of characters a, b and c.
 * Return the number of substrings containing at least one occurrence of all these characters a, b and c.
 *  
 * Hints:
 * 1.For each position we simply need to find the first occurrence of a/b/c on or after this position.
 * 2.So we can pre-compute three link-list of indices of each a, b, and c.
 * 
 * Example 1:
 * Input: s = "abcabc"
 * Output: 10
 * Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 
 * 
 * Example 2:
 * Input: s = "aaacb"
 * Output: 3
 * Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 
 * 
 * Example 3:
 * Input: s = "abc"
 * Output: 1
 * 
 * Constraints:
 * 3 <= s.length <= 5 x 10^4
 * s only consists of a, b or c characters.
 * 
 *
 * 給定一個字串參數，內只有a、b & c，回傳字串內各字母須至少出現1次的子字串組合有幾個
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  let res = 0;
  let j = 0;
  // a,b,c
  let countChar = { "a": 0, "b": 0, "c": 0 };
  for (let i = 0; i < s.length; i++) {
    countChar[s[i]]++;

    while (countChar["a"] > 0 && countChar["b"] > 0 && countChar["c"] > 0) {
      res += s.length - i;
      countChar[s[j]]--;
      j++;
    }
  }
  return res;
};
// let s = "aaacb";
// 3
let s = "abcabc";
// 10
console.log(numberOfSubstrings(s));