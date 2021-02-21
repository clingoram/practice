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

/*
922. Sort Array By Parity II

Difficulty:Easy

Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.

1.array A都是正整數，其中一半是奇數，剩下則是偶數
2.sort array，array的i是奇數，偶數
3.return array

Example 1:
Input: [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.


Note:
2 <= A.length <= 20000
A.length % 2 == 0
0 <= A[i] <= 1000

*/
// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
// var sortArrayByParityII = function (A) {
//     if (A.length <= 1) {
//         return A;
//     }

// };
// const array = [4, 2, 5, 7];
// // should return [4,5,2,7]
// console.log(`The result is ${sortArrayByParityII(array)}`);


// 找出array中大於target的值，並重組，回傳成新陣列
// function test(array, target) {
//     let result = [];
//     let slice_array = array.slice().sort();
//     console.log(slice_array);
// }
// const a = [1, 6, 48, 6, 35, 79, 86];
// const t = 30;
// console.log(test(a, t));


/*
1475. Final Prices With a Special Discount in a Shop
Difficulty:Easy

Given the array prices where prices[i] is the price of the ith item in a shop. There is a special discount for items in the shop, if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.

Return an array where the ith element is the final price you will pay for the ith item of the shop considering the special discount.

1.prices = array
2.return array



Example 1:
Input: prices = [8,4,6,2,3]
Output: [4,2,4,2,3]
Explanation:
For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.
For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.
For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.
For items 3 and 4 you will not receive any discount at all.

Example 2:
Input: prices = [1,2,3,4,5]
Output: [1,2,3,4,5]
Explanation: In this case, for all items, you will not receive any discount at all.

Example 3:
Input: prices = [10,1,1,6]
Output: [9,0,1,6]


Constraints:
1 <= prices.length <= 500
1 <= prices[i] <= 10^3
*/

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    if (prices.length <= 1) {
        return prices;
    }

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                prices[i] = prices[i] - prices[j];
                break;
            }
        }
    }
    return prices;
};
const a = [8, 4, 6, 2, 3];
// return [4,2,4,2,3]
console.log(`The result is ${finalPrices(a)}`);