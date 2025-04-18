/**
 * 1528. Shuffle String
 * Difficulty:Easy
 * 
 * Given a string s and an integer array indices of the same length.
 * 
 * The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
 * 
 * Return the shuffled string.
 * 
 * Hints:
 * You can create an auxiliary string t of length n.
 * Assign t[indexes[i]] to s[i] for each i from 0 to n-1.
 * -------------------------------
 * Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
 * Output: "leetcode"
 * Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
 * 
 * Example 2:
 * Input: s = "abc", indices = [0,1,2]
 * Output: "abc"
 * Explanation: After shuffling, each character remains in its position.
 * 
 * Example 3:
 * Input: s = "aiohn", indices = [3,1,4,2,0]
 * Output: "nihao"
 * 
 * Example 4:
 * Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
 * Output: "arigatou"
 * 
 * Example 5:
 * Input: s = "art", indices = [1,0,2]
 * Output: "rat"
 * 
 * Constraints:
 * s.length == indices.length == n
 * 1 <= n <= 100
 * s contains only lower-case English letters.
 * 0 <= indices[i] < n
 * All values of indices are unique (i.e. indices is a permutation of the integers from 0 to n - 1).
 */
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  /**
   * edge case
   * 1. only lowercase English letters in s.
   * 2. all values of indices are unique.
   *  */
  const pattern = /^[a-z]+$/;
  if (!s || !s.match(pattern) || !indices.join("").match(/^[0-9]/)) {
    return;
  }

  let array = [];
  for (let i = 0; i < s.length; i++) {
    array[indices[i]] = s[i];
  }
  return array.join("");
};
const s = "aaiougrt";
const indices = [4, 0, 2, 6, 7, 3, 1, 5];
// "arigatou"
console.log(restoreString(s, indices));