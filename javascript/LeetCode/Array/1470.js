/*
1470. Shuffle the Array

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].


Use two pointers to create the new array of 2n elements. The first starting at the beginning and the other starting at (n+1)th position. Alternate between them and create the new array.

Constraints:
1 <= n <= 500
nums.length == 2n
1 <= nums[i] <= 10^3

Note:
1. nums = array with second elements(EG.X1,X2,X3,Y1,Y2,Y3)
2. return New array
3. return array form is [x1,x2,...,xn,y1,y2,...,yn]


Example 1:
Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

Example 2:
Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]

Example 3:
Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]

*/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let result = [];
    // x1,x2,x3,y1,y2,y3....，index都只有到3
    for (let i = 0; i < n; i++) {
        result.push(nums[i], nums[i + n]);
        // result.push(nums[i + n]);
    }
    return result;
};
const array = [2, 5, 1, 3, 4, 7], n = 3;
// should return: [2,3,5,4,1,7] 
console.log(`The result of shuffle is ${shuffle(array, n)}`);