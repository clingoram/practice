/**
 * @param {number[][]} accounts
 * @return {number}
 */
// var maximumWealth = function (accounts) {

//     const temp = accounts.map((account) =>
//         account.reduce((previous, current) => previous + current)
//     );
//     console.log(temp.sort((a, b) => b - a)[0]);
//     return temp.sort((a, b) => b - a)[0];

// };

// // 加總accounts各個array
// // 總數最大的array= richest
// let accounts = [[2, 8, 7], [7, 1, 3], [1, 9, 5]];

// maximumWealth(accounts);


// function num(n) {
//     //放置於程式開始執行處--開始時間
//     let start_time = new Date().getTime();

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < 1; j++) {
//             console.log(j);
//         }
//     }
//     //放置於程式執行結束處--程式進ajax撈完資料庫資料後回傳結果的結束時間
//     let end_time = new Date().getTime();

//     //計算花多久時間
//     alert((end_time - start_time) / 1000 + "sec");
// }
// num(10);

// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
// var sortArrayByParity = function (A) {
//     if (A.length < 2) {
//         return A;
//     }

//     let temp = [];
//     A.forEach(element => {
//         element % 2 == 0 ? temp.unshift(element) : temp.push(element);
//     });
//     return temp;
// };

// $a = [3, 1, 2, 4];
// sortArrayByParity($a);
// console.log($a);

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var runningSum = function (nums) {

//     for (let i = 1; i < nums.length; i++) {
//         nums[i] += nums[i - 1];
//     }
//     return nums;
// };
// let nums = [1, 2, 3, 4];
// console.log(runningSum(nums));

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var arrayPairSum = function (nums) {

//     let result = 0;
//     let numsSort = nums.sort((a, b) => a - b); // sorting from min to big
//     for (let i = 0; i < nums.length; i += 2) {
//         result += Math.min(numsSort[i], numsSort[i + 1]); // += =>> ++
//     }
//     return result;

// };
// let nums = [1, 4, 3, 2];
// // Output: 4
// // Explanation: All possible pairings (ignoring the ordering of elements) are:
// // 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// // 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// // 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// // So the maximum possible sum is 4.
// // 兩個一組，兩組比對，取最小的值互加
// console.log(arrayPairSum(nums));

// /**
//  * @param {number[]} candies
//  * @param {number} extraCandies
//  * @return {boolean[]}
//  */
// var kidsWithCandies = function (candies, extraCandies) {
//     // find the max value in the array,can use be use: Math.max(...,candies) which have same result
//     const max = Math.max.apply(null, candies);
//     // to plus extraCnadies into the array
//     const result = candies.map((number => number + extraCandies >= max));

//     return result;

// };
// const candies = [2, 3, 5, 1, 3]
// const extraCandies = 3;
// console.log(kidsWithCandies(candies, extraCandies));

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
    if (K <= 0) {
        return A;
    }
    const element = A.join('');
    const change = parseInt(element, 10) + parseInt(K, 10);
    const result = Array.from(String(change), Number);
    // console.log(result);
    return result;
};

const A = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3];
const K = 516;
// [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]
console.log(addToArrayForm(A, K));
// 1200+34 =1234 => [1,2,3,4]