/**
 * 1002. Find Common Characters
 * Difficulty:Easy
 *
 * Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.
 *
 * ---------------------------------------------------
 * Input string array
 * Output: string array
 * 
 * 給一字串陣列，找出該陣列中每一個字串中都有個字母(重複出現的字母)
 * return the answer in any order
 * ----------------------------------------------------
 * Example 1:
 * Input: words = ["bella","label","roller"]
 * Output: ["e","l","l"]
 *
 * Example 2:
 * Input: words = ["cool","lock","cook"]
 * Output: ["c","o"]
 *
 * Constraints:
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 100
 * words[i] consists of lowercase English letters.
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let pattern = /^[a-z]+$/;
  if (!words.join("").match(pattern) || words.length <= 0) {
    return;
  }

  let result = [];
  let firstString = [...words[0]]; // ["c","o","o","l"]

  // solution 1
  for (const letter of firstString) {
    if (words.every(element => element.includes(letter))) {
      result.push(letter);
      words = words.map(currentValue => currentValue.replace(letter, ''));
    }
  }

  // solution 2
  // for (let i = 0; i < firstString.length; i++) {
  // 	// every() 方法會測試陣列中的所有元素是否都通過了由給定之函式所實作的測試。 true/false
  // 	// includes() 方法會判斷陣列是否包含特定的元素，並以此來回傳 true 或 false。
  // 	if (words.every(element => element.includes(firstString[i]))) {
  // 		result.push(firstString[i]);
  // 		// map() 方法會建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。
  // 		words = words.map(currentValue => currentValue.replace(firstString[i], ''));
  // 	}
  // }
  return result;
};
const words = ["cool", "lock", "cook"];
// ["c","o"]
console.log(commonChars(words));