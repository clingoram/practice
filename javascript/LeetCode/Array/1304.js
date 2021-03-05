/*
1304. Find N Unique Integers Sum up to Zero

Given an integer n, return any array containing n unique integers such that they add up to 0.

------------
1.integer n
2. return array(內有不重複ints 而且這些ints加起來要等於0)
------------

Hints:
Return an array where the values are symmetric. (+x , -x).
If n is odd, append value 0 in your returned array.

Example 1:
Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

Example 2:
Input: n = 3
Output: [-1,0,1]

Example 3:
Input: n = 1
Output: [0]


Constraints:
1 <= n <= 1000

*/
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    // solution 1:
    // let result = [];
    // if (n % 2 != 0) {
    //     result.push(0);
    // }

    // for (let i = 1; i <= n / 2; i++) {
    //     result.push(i, -i);
    // }

    // return result;

    // solution 2:
    let result = (n % 2 == 0) ? [] : [0];
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        result.push(i, -i);
    }
    return result;
};
const n = 5;
// should return :[-7,-1,1,3,4] which sum up need to be equal to 0
// [-5,-1,1,2,3] 、 [-3,-1,2,-2,4] are ok,too
console.log(sumZero(n));