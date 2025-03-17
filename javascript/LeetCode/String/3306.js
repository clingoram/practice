/**
 * 3306. Count of Substrings Containing Every Vowel and K Consonants II 
 * 
 * You are given a string word and a non-negative integer k.
 * Return the total number of substrings of word that contain every vowel ('a', 'e', 'i', 'o', and 'u') at least once and exactly k consonants.
 * 
 * Hints:
 * 1.We can use sliding window and binary search.
 * 2.For each index r, find the maximum l such that both conditions are satisfied using binary search. 
 * 
 * Example 1:
 * Input: word = "aeioqq", k = 1
 * Output: 0
 * Explanation:
 * There is no substring with every vowel.
 * 
 * Example 2:
 * Input: word = "aeiou", k = 0
 * Output: 1
 * Explanation:
 * The only substring with every vowel and zero consonants is word[0..4], which is "aeiou".
 * 
 * Example 3:
 * Input: word = "ieaouqqieaouqq", k = 1
 * Output: 3
 * Explanation:
 * The substrings with every vowel and one consonant are:
 * word[0..5], which is "ieaouq".
 * word[6..11], which is "qieaou".
 * word[7..12], which is "ieaouq".
 *  
 * 
 * Constraints:
 * 5 <= word.length <= 2 * 105
 * word consists only of lowercase English letters.
 * 0 <= k <= word.length - 5
 * 
 * 
 * 給定一個字串參數word和一個正數k，找出在word內有出現全部母音(aeiou)的子字串有幾個且有k個子音
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {
  // 須出現全部的母音(5個)以及子音出現k次
  return hasAtLeastK(word, k) - hasAtLeastK(word, k + 1);

  /**
   * 
   * @param {string} c 
   * @return {boolean}
   */
  function isVowels(c) {
    return c === "a" || c === "e" || c === "i" || c === "o" || c === "u";
  }

  /**
   * @param {string} str 
   * @param {int} k 
   */
  function hasAtLeastK(str, k) {
    let consonants = 0;
    let answer = 0;
    let j = 0;
    let hashmap = {};
    for (let i = 0; i < str.length; i++) {
      if (isVowels(str[i])) {
        // 計算母音出現次數
        hashmap[str[i]] = (hashmap[str[i]] || 0) + 1;
      } else {
        consonants++;
      }
      // 母音hashmap長度 = 5且子音出現次數>=k
      while (Object.keys(hashmap).length === 5 && consonants >= k) {
        answer += str.length - i;

        if (isVowels(str[j])) {
          hashmap[str[j]] = (hashmap[str[j]] || 0) - 1;
          if (hashmap[str[j]] === 0) {
            delete hashmap[str[j]];
          }
        } else {
          consonants--;
        }
        j++;
      }
    }
    return answer;
  }

};
let word = "ieaouqqieaouqq", k = 1;
// 3
console.log(countOfSubstrings(word, k));