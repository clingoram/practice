// 1572. Matrix Diagonal Sum
/**
 * @param {number[][]} mat
 * @return {number}
 */
// var diagonalSum = function (mat) {
//     for (let index = 0; index <= mat.length; index++) {
//         // const element = mat[index];
//         console.log(mat[index]);
//     }
// };
// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(diagonalSum(arr));

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

var twoSum = function (nums, target) {
    let map = new Map;
    for (var i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
    }
};

const nums = [3, 2, 4];
const target = 6;
// console.log(twoSum(nums, target));

var kidsWithCandies = function (candies, extraCandies) {
    // find the max value in the array,can use be use: Math.max(...,candies) which have same result
    const max = Math.max.apply(null, candies);
    // to plus extraCnadies into the array
    const result = candies.map((number => number + extraCandies >= max));

    return result;

};
const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
// console.log(kidsWithCandies(candies, extraCandies));

class Speed {
    constructor() {
        this.time = 0;
        this.runProgramName = '';
    }

    start(ProgramName) {
        this.time = new Date().getTime();
        this.runProgramName = ProgramName;

        return this.time;
        // console.log(this.runProgramName);
    }

    end(times, name) {
        let time = this.start(name);
        // let end_time = new Date().getTime();

        // console.log(time)
        console.log(`${name} 執行時間: ${Math.floor((new Date() - time) / times)} ms.`);
        // console.log(`${name} ${(end_time - time) / 1000} sec `);
    }

}

function testCase(functionName, times) {

    const Max = 1e7;
    let result = [];
    let number = 3000;

    console.log(functionName);
    while (number--) {
        result[number] = Math.floor(Math.random() * Max);
    }

    for (var i = 0; i < times; i++) {
        functionName(result);
    }
    return;
}

function ExecuteProgram(keys) {
    console.log('run');
    for (let i = 0; i < keys.length; i++) {
        let speedTest = new Speed();
        speedTest.start(keys[i]);

        testCase([keys[i]], 5);

        speedTest.end(5, keys);
    }
}
const key = ['twoSum', 'kidsWithCandies'];
ExecuteProgram(key);