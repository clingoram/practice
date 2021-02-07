/*
EG:
寫在程式開始執行的地方:
let functionName = 'twoSum';
let start = countTime(functionName);
放置於程式執行結束處:
let end = endTime(start);
console.log(end);
*/
/**
 * 
 * @param {string} fileName 執行function名稱
 */

//放置於程式開始執行處--開始時間
function countTime(fileName = null) {

    let start_time = new Date().getTime();
    let data = [
        fileName,
        start_time
    ]
    return data;
}
// 結束時間
// 放置於程式執行結束處，回傳結果的結束時間
function endTime(start) {
    let end_time = new Date().getTime();

    return start[0] + '執行時間:' + (end_time - start[1]) / 5000 + 'ms';
}


// 1572. Matrix Diagonal Sum
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    // let functionName = 'diagonalSum';
    // let start = countTime(functionName);

    let result = 0;
    let j = mat[0].length - 1; // 二維陣列中的第一個陣列-1 => [1,2,3]

    for (let i = 0; i < mat.length; i++, j--) {
        // console.log(`i: ${i}`); // 0,1,2 => i++
        // console.log(`j: ${j}`); // 2,1,0 => j--

        if (i !== j) {
            console.log(`ij: ${mat[i][j]}`); //3,7
            result += mat[i][j];
        }
        console.log(`ii:${mat[i][i]}`) // 1,5,9
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