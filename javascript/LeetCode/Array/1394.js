/*
1394. Find Lucky Integer in an Array
Difficulty: Easy

Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.

Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1.

Note:
1.int array
2.return 
 a.the longest int
 b.no lucky int return -1

Count the frequency of each integer in the array.
Get all lucky numbers and return the largest of them.

Constraints:
1 <= arr.length <= 500
1 <= arr[i] <= 500

Example 1:
Input: arr = [2,2,3,4]
Output: 2
Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

Example 2:
Input: arr = [1,2,2,3,3,3]
Output: 3
Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

Example 3:
Input: arr = [2,2,2,3,3]
Output: -1
Explanation: There are no lucky numbers in the array.

Example 4:
Input: arr = [5]
Output: -1

Example 5:
Input: arr = [7,7,7,7,7,7,7]
Output: 7
*/
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    if (arr.length <= 1) {
        return -1;
    }
    let m = new Map();

    // solution 1:
    for (let i = 0; i < arr.length; i++) {
        if (!m.has(arr[i])) {
            m.set(arr[i], 0);
        }
        m.set(arr[i], m.get(arr[i]) + 1);
    }
    let max = -1;
    for (let j of m.entries()) {
        if (j[0] === j[1]) {
            max = Math.max(max, j[0]);
        }
    }
    return max;


    // solution 2
    // for (let i = 0; i < arr.length; i++) {
    //     m.has(arr[i]) ? m.set(arr[i], m.get(arr[i]) + 1) : m.set(arr[i], 1);
    // }
    // return Math.max(...arr.filter(e => m.get(e) === e), -1);

};
const arr = [2, 2, 3, 4];
// return 2
console.log(`The result is ${findLucky(arr)}`);