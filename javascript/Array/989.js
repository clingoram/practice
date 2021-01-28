/*
989. Add to Array-Form of Integer
For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  For example, if X = 1231, then the array form is [1,2,3,1].

Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.

---------------------------
Note：

1 <= A.length <= 10000
0 <= A[i] <= 9
0 <= K <= 10000
If A.length > 1, then A[0] != 0

----------------------------
1200+34 =1234 => [1,2,3,4]

-----------------------------

Example 1:

Input: A = [1,2,0,0], K = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234
Example 2:

Input: A = [2,7,4], K = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455
Example 3:

Input: A = [2,1,5], K = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021
Example 4:

Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
Output: [1,0,0,0,0,0,0,0,0,0,0]
Explanation: 9999999999 + 1 = 10000000000
 
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {

    // const element = A.join('');
    // const change = parseInt(element, 10) + parseInt(K, 10);
    // const result = Array.from(String(change), Number);
    // // console.log(result);
    // return result;
    let i = A.length - 1;
    let carry = 0;
    const temp = [];

    while (i >= 0 || K > 0) {
        let k_current = K % 10; // 餘數 516/10=51.6，取6
        // console.log(k_current);
        let a_current = i < 0 ? 0 : A[i];
        // console.log(a_current);
        let sum = k_current + a_current + carry;
        let d = sum % 10;
        // console.log(sum);
        temp.push(d);

        carry = sum > 9 ? 1 : 0;
        K = Math.floor(K / 10);
        i--;
    }
    if (carry == 1) {
        temp.push(carry);
    }

    return temp.reverse();

};

const A = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3];
const K = 516;
// should return: [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 5, 7, 9];
// but return : [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 0, 0]
// 後面3個不同
// 063+516=579

console.log(addToArrayForm(A, K));

