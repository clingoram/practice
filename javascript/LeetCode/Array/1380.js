/*
1380. Lucky Numbers in a Matrix
Difficulty:Easy

Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

Hints:
Find out and save the minimum of each row and maximum of each column in two lists.
Then scan through the whole matrix to identify the elements that satisfy the criteria.

-----------------------------------
matrix = array
return one number (是row中最小值和column中最大值)
--------------------------------------------
EG:
[
    [3,7,8],
    [9,11,13],
    [15,16,17]
]
ANS: [15] -->15是row中最小值但卻是column中最大值

Example 1:
Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
Output: [15]
Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column

Example 2:
Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
Output: [12]
Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.

Example 3:
Input: matrix = [[7,8],[1,2]]
Output: [7]


Constraints:
m == mat.length
n == mat[i].length
1 <= n, m <= 50
1 <= matrix[i][j] <= 10^5.
All elements in the matrix are distinct.
*/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    // find min and max element
    if (!matrix || matrix.length === 0) {
        return null;
    }
    // solution 1:
    // let min = matrix.map((x) => Math.min(...x)); // 3,9,15
    // let max = matrix[0].map((_, i) =>
    //     Math.max(...matrix.map((x) => x[i])));// 15,16,17
    // return min.filter((x) => max.includes(x));

    // solution 2:
    const map = new Map();
    for (const row of matrix) {
        map.set(Math.min(...row), 1);
    }
    for (let i = 0; i < matrix[0].length; i++) {
        let max = 0;
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][i] > max) {
                max = matrix[j][i];
            }
        }

        if (map.get(max)) {
            return [max];
        }
    }
    return [];
};
const m = [[3, 7, 8], [9, 11, 13], [15, 16, 17]];
// [15]
console.table(luckyNumbers(m));