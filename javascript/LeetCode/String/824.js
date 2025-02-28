/**
 * 824. Goat Latin
 * 
 * You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.
 * We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:
 *  If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
 *     For example, the word "apple" becomes "applema".
 *  If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
 *    For example, the word "goat" becomes "oatgma".
 *  Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
 *    For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.
 * Return the final sentence representing the conversion from sentence to Goat Latin.
 * 
 * Example 1:
 * Input: sentence = "I speak Goat Latin"
 * Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
 * 
 * Example 2:
 * Input: sentence = "The quick brown fox jumped over the lazy dog"
 * Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
 *  
 * 
 * Constraints:
 * 1 <= sentence.length <= 150
 * sentence consists of English letters and spaces.
 * sentence has no leading or trailing spaces.
 * All the words in sentence are separated by a single space.
 * 
 * Goat Latin條件:
 *  若參數開頭為母音 ('a','e','i','o','u')，須在參數最後面加上"ma"
 *  若參數開頭為子音(非母音)，將參數第一個字母移到最後面並在結尾加上"ma"
 *  依據參數index做遞增，要在每個文字後面加上"a"，index 1 = 1a;index 2 = 2a;index 3 = 3a 以此類推
 * 回傳轉成Goat Latin的字串
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const split = sentence.split(" ");
  const vowels = 'aeiouAEIOU';
  for (let i = 0; i < split.length; i++) {
    let word = split[i];
    if (!vowels.includes(word[0])) {
      word = word.slice(1) + word[0];
    }
    word += "ma";
    for (let j = -1; j < i; j++) {
      word += "a";
    }
    split[i] = word;
  }
  return split.join(" ");
};
let sentence = "I speak Goat Latin";
// "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
console.log(toGoatLatin(sentence));