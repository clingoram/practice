/*
1295. Find Numbers with Even Number of Digits
Difficulty:Easy

Given an array nums of integers, return how many of them contain an even number of digits.

Note:
1.array of int
2.array中，element是奇位數的有幾個
3.return int

How to compute the number of digits of a number ?
Divide the number by 10 again and again to get the number of digits.
 
Constraints:
1 <= nums.length <= 500
1 <= nums[i] <= 10^5

Example 1:
Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.

Example 2:
Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let count = 0;
    nums.forEach(element => {
        // toString()將指定的陣列和元素轉成字串，然後在把這陣列「打包」成一個字符串回傳回來。
        if (element.toString().length % 2 == 0) {
            count++;
        }
    });
    return count;
};
const array = [12, 345, 2, 6, 7896]; // return 2
console.log(`The result of findNumbers is ${findNumbers(array)}`);
