
/**
 * 1704. Determine if String Halves Are Alike
 *
 *
 * You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
 * Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters
 * Return true if a and b are alike. Otherwise, return false.
 *
 * 1.把string s分成兩部分(a,b)
 * 2.檢查a和b是否有母音且兩者相等於
 * 3.return true;else return false
 * Example 1:

Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
Example 2:

Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.
Example 3:

Input: s = "MerryChristmas"
Output: false
Example 4:

Input: s = "AbCdEfGh"
Output: true


Constraints:

2 <= s.length <= 1000
s.length is even.
s consists of uppercase and lowercase letters.
 */

/**
* @param {string} s
* @return {boolean}
*/
var halvesAreAlike = function (s) {
    let targetVowel = [...'aeiouAEIOU'];

    let half = s.length / 2;
    let firstHalf = s.slice(0, half);
    let secondHalf = s.slice(half);
    let a = 0;
    let b = 0;

    for (let i = 0; i < firstHalf.length; i++) {
        let first = firstHalf[i];
        let second = secondHalf[i];

        if (targetVowel.includes(first)) {
            a++;
        }
        if (targetVowel.includes(second)) {
            b++;
        }
    }
    return a == b;
};

const s = "AbCdEfGh";
console.log(halvesAreAlike(s));