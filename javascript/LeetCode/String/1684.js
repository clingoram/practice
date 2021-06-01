/**
 * 1684. Count the Number of Consistent Strings
 * Difficulty:Easy
 * You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
 *
 * Return the number of consistent strings in the array words.
 *
 * --------------------------------------------------------
 * Input:string、array
 * Output:int
 * 找陣列中是否有跟input字串一樣的字母，反轉也可以，但不能有其他字母
 * ---------------------------------------------------------
 * Hints
 * A string is incorrect if it contains a character that is not allowed
 * Constraints are small enough for brute force
 * -------------------------------------------------------------------
 * Example 1:
 * Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
 * Output: 2
 * Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
 *
 * Example 2:
 * Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
 * Output: 7
 * Explanation: All strings are consistent.
 *
 * Example 3:
 * Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
 * Output: 4
 * Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
 *
 * Constraints:
 * 1 <= words.length <= 104
 * 1 <= allowed.length <= 26
 * 1 <= words[i].length <= 10
 * The characters in allowed are distinct.
 * words[i] and allowed contain only lowercase English letters.
 */
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  // 若words內的key，除了allowed外，還有其他字母，不行
  // 只能有alllowed的字母

  // edge case
  if (allowed == '') {
    return;
  }
  let pattern = /^[a-z]g/;
  words.forEach(element => {
    if (!element.match(pattern)) {
      return;
    }
  })

  // solution 1:
  // use regex to match the words 
  // let count = 0;
  // let re = new RegExp(`[^${allowed}]`);
  // for (let i = 0; i < words.length; i++) {
  // 	let element = words[i];
  // 	if (element.match(re) == null) {
  // 		count++;
  // 	}
  // }
  // return count;

  // solution 2:
  // save words into an array, then get length of the array
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    let ele = words[i];
    for (let j = 0; j < words.length; j++) {
      let chr = ele[j];

      if (!allowed.includes(chr)) {
        break;
      } else if (j === ele.length - 1) {
        arr.push(ele);
      }
    }
  }
  return arr.length;
};
let allowed = "ab";
let words = ["ad", "bd", "aaab", "baa", "badab"];
// return 2
console.log(countConsistentStrings(allowed, words));