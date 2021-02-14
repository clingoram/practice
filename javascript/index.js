/*
EG:
寫在程式開始執行的地方:
let functionName = 'twoSum';
let start = countTime(functionName);
放置於程式執行結束處:
let end = endTime(start);
console.log(end);
*/
/**
 * 
 * @param {string} fileName 執行function名稱
 */

//放置於程式開始執行處--開始時間
function countTime(fileName = null) {

    let start_time = new Date().getTime();
    let data = [
        fileName,
        start_time
    ]
    return data;
}
// 結束時間
// 放置於程式執行結束處，回傳結果的結束時間
function endTime(start) {
    let end_time = new Date().getTime();

    return start[0] + '執行時間:' + (end_time - start[1]) / 5000 + 'ms';
}

/*
922. Sort Array By Parity II

Difficulty:Easy

Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.

1.array A都是正整數，其中一半是奇數，剩下則是偶數
2.sort array，array的i是奇數，偶數
3.return array

Example 1:
Input: [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.


Note:
2 <= A.length <= 20000
A.length % 2 == 0
0 <= A[i] <= 1000

*/
// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
// var sortArrayByParityII = function (A) {
//     if (A.length <= 1) {
//         return A;
//     }

// };
// const array = [4, 2, 5, 7];
// // should return [4,5,2,7]
// console.log(`The result is ${sortArrayByParityII(array)}`);


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