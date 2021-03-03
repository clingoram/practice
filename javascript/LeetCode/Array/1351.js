/*
1351. Count Negative Numbers in a Sorted Matrix
Difficulty: Easy

Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

計算出array中有幾個負數
return number
Use binary search for optimization or simply brute force.


Example 1:
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Example 2:
Input: grid = [[3,2],[1,0]]
Output: 0

Example 3:
Input: grid = [[1,-1],[-1,-1]]
Output: 3

Example 4:
Input: grid = [[-1]]
Output: 1


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 100
-100 <= grid[i][j] <= 100
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    // count the number to check if int < 0 
    return grid.reduce((prev, current) =>
        prev + current.filter(n => n < 0).length, 0
    )

};
const grid = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]];
// should return 8
// 計算出array中有幾個負數
console.log(countNegatives(grid));
