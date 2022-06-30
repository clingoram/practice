/**
 * 1160. Find Words That Can Be Formed by Characters
 * Difficulty:Easy
 *
 * You are given an array of strings words and a string chars.
 * A string is good if it can be formed by characters from chars (each character can only be used once).Return the sum of lengths of all good strings in words.
 *
 * -------------------------------------------------------
 * Input:一個words的陣列，和chars的字母字串。
 * 陣列內含有很多個英文小寫字串
 * 試著拆解chars內的字母，看它是否能組合成陣列中的string elements的單字
 * 若能組合成，把該element長度相加
 *
 * Output: Int(elements相加後)
 * ------------------------------------------------------
 *
 * Hints:
 * Solve the problem for each string in words independently.
 * Now try to think in frequency of letters.
 *
 * Count how many times each character occurs in string chars.
 * To form a string using characters from chars, the frequency of each character in chars must be greater than or equal the frequency of that character in the string to be formed.
 * -------------------------------------------------------
 *
 * Example 1:
 * Input: words = ["cat","bt","hat","tree"], chars = "atach"
 * Output: 6
 * Explanation:
 * The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
 *
 * Example 2:
 * Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
 * Output: 10
 * Explanation:
 * The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 *
 * Notes:
 * 1 <= words.length <= 1000
 * 1 <= words[i].length, chars.length <= 100
 * All strings contain lowercase English letters only.
 */
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  if (words.length <= 1 || chars === '') {
    return;
  }
  let count = 0;
  for (let key of words) {
    let map = char(chars);
    // console.log(map.entries());
    if (wordCheck(key, map)) {
      count += key.length;
    }
  }
  return count;
};
var char = function (char) {
  let map = new Map();
  for (let i = 0; i < char.length; i++) {
    // map.has(char[i]) ? map.set(char[i], map.get(char[i]) + 1) : map.set(char[i], 0);
    // !map[char[i]] ? map[char[i]] = 0 : map[char[i]]++;

    if (!map[char[i]]) {
      map[char[i]] = 0;
    }
    map[char[i]]++;
  }
  return map;
}

var wordCheck = function (words, map) {
  for (let i = 0; i < words.length; i++) {
    if (!map[words[i]] || map[words[i]] == 0) {
      return false;
    }
    map[words[i]]--;
  }
  return true;
}
const words = ["cat", "bt", "hat", "tree"], chars = "atach";
// 6
console.log(countCharacters(words, chars));