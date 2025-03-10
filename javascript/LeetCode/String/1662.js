/*
1662. Check If Two String Arrays are Equivalent
Difficulty:Easy

Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

1. word1 and word2 = array
2. if word1 == word2 return true ,else return false


Concatenate all strings in the first array into a single string in the given order, the same for the second array.
Both arrays represent the same string if and only if the generated strings are the same.

Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.

Example 2:
Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false

Example 3:
Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true


Constraints:
1 <= word1.length, word2.length <= 103
1 <= word1[i].length, word2[i].length <= 103
1 <= sum(word1[i].length), sum(word2[i].length) <= 103
word1[i] and word2[i] consist of lowercase letters.

*/
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    if (!word1 || !word2) {
        return;
    }
    if (word1.join("") == word2.join("")) {
        return true;
    }
    return false;

};
const w1 = ["a", "cb"];
const w2 = ["ab", "c"];
// return false
console.log(`The result is ${arrayStringsAreEqual(w1, w2)}`);