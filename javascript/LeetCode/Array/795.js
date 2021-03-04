/*
795. Number of Subarrays with Bounded Maximum
Difficulty:Medium

We are given an array A of positive integers, and two positive integers L and R (L <= R).

Return the number of (contiguous, non-empty) subarrays such that the value of the maximum array element in that subarray is at least L and at most R.

----------------
A= 正整數array
L、R=正整數，L<=R
把a分割成符合L和R的陣列，並回傳最大element
----------------
Example :
Input:
A = [2, 1, 4, 3]
L = 2
R = 3
Output: 3
Explanation: There are three subarrays that meet the requirements: [2], [2, 1], [3].

Note:

L, R  and A[i] will be an integer in the range [0, 10^9].
The length of A will be in the range of [1, 50000].

*/
/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var numSubarrayBoundedMax = function (A, L, R) {
    let count = 0;
    if (A.length < 2 || L === 0 || R === 0) {
        return;
    }
    for (let i = 0; i < A.length; i++) {
        // 當一個數值太大或太小，已超出可顯示範圍的時候，就會以Infinity表示，正無限大為Infinity，負無限大為-Infinity。
        let maxValue = -Infinity;

        for (let j = i; j < A.length; j++) {
            const element = A[j];
            maxValue = Math.max(maxValue, element);
            // console.log(maxValue);
            if (maxValue > R) {
                break;
            }

            if (maxValue < L) {
                continue;
            }
            count++;
        }
    }
    return count;
};
const A = [2, 1, 4, 3];
const L = 2;
const R = 3;
// sholud return 3
console.log(numSubarrayBoundedMax(A, L, R));