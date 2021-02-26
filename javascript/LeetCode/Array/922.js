/*
922. Sort Array By Parity II

Difficulty:Easy

Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.

1.array A都是正整數，其中一半是奇數odd，剩下則是偶數even(%2 ===0)
2.sort array，array的i是奇數也是偶數
3.return array


2 <= nums.length <= 2 * 104
nums.length is even.
Half of the integers in nums are even.
0 <= nums[i] <= 100

Example 1:
Input: [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

Example 2:
Input: nums = [2,3]
Output: [2,3]

*/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    if (A.length <= 1) {
        return A;
    }
    let result = [];

    // Solution1:
    // let odd = 1;
    // let even = 0;
    // for (let i = 0; i < A.length; i++) {
    //     if (A[i] % 2 == 0) {
    //         result[even] = A[i];
    //         even += 2;
    //     } else {
    //         result[odd] = A[i];
    //         odd += 2;
    //     }
    // }
    // return result;

    // Solution 2:
    let even = A.filter((i) => i % 2 === 0);
    let odd = A.filter((i) => i % 2 !== 0);

    for (let index = 0; index < A.length / 2; index++) {
        result.push(even[index], odd[index]);
    }
    return result;

};
const array = [4, 2, 5, 7];
// should return [4,5,2,7]
console.log(`The result is ${sortArrayByParityII(array)}`);