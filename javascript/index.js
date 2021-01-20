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


// 989. Add to Array-Form of Integer
// /**
//  * @param {number[]} A
//  * @param {number} K
//  * @return {number[]}
//  */
// var addToArrayForm = function (A, K) {
//     if (K <= 0) {
//         return A;
//     }
//     const element = A.join('');
//     const change = parseInt(element, 10) + parseInt(K, 10);
//     const result = Array.from(String(change), Number);
//     // console.log(result);
//     return result;
// };

// const A = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3];
// const K = 516;
// // should return :[1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]
// console.log(addToArrayForm(A, K));
// // 1200+34 =1234 => [1,2,3,4]


// 1512. Number of Good Pairs
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    if (nums.length < 2) {
        return;
    }


};
const nums = [1, 2, 3, 1, 1, 3];
console.log(numIdenticalPairs(nums));
/*
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

nums[i] == nums[j] and i < j.
array key i == array key j and key i < key j

key 0 + key 3 => 1 = 1
*/