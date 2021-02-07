// 1572. Matrix Diagonal Sum
// return the sum of the matrix diagonals. 返回正方形中對角線的總和
// sum X =>
// primary: 1 + 5 + 9 
// secondary: 3 + 5 + 7

// 1. 是二維陣列
// 2. 判斷陣列length是奇數或偶數，共有幾個二維陣列
// 3. 
//  a.第一個二維陣列:找該array中位於第0個位置和最後一個位置的值，之後其他二維陣列則取往後移一個位置的值
//  b.最後一個二維陣列:找該array中位於第0個位置和最後一個位置的值

// 二維陣列
// 判斷陣列length是奇數或偶數，共有幾個二維陣列
// ==> 找第一個和最後一個二維陣列中，第0個位置和最後一個位置的值
// 其他二維陣列則取往後移一個位置的值

/*
Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.
*/

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    // let functionName = 'diagonalSum';
    // let start = countTime(functionName);

    let result = 0;
    let j = mat[0].length - 1;
    for (let i = 0; i < mat.length; i++, j--) {
        if (i !== j) {
            result += mat[i][j];
        }
        result += mat[i][i];

        // let end = endTime(start);
        // console.log(end);
    }
    return result;
};
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(diagonalSum(arr));