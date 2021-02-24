/*
1299. Replace Elements with Greatest Element on Right Side
Difficulty:Easy

Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

Hints:
Loop through the array starting from the end.
Keep the maximum value seen so far.

1.arr = array
2.陣列中，左右元素相比，左比右小，則把右值替換到左邊的位置上，放置順序:最大、第二大。重複比較左右值，若左一直比右小，則右值重複放在左邊位置
3.最後一元素放負一
4.return array
5.return array長度 = 原本的array長度



Example 1:
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation:
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.

Example 2:
Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0.

Constraints:
1 <= arr.length <= 104
1 <= arr[i] <= 105
*/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    if (arr.length < 1) {
        return arr;
    }
    /* 
    Solution 1:
     1.find the max value
     2.loop the array
     3.push and return the array
     */
    // let result = [];
    // let maxValue = Math.max(...arr);

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === maxValue) {
    //         const restValue = arr.slice(i + 1);
    //         maxValue = Math.max(...restValue);
    //     }
    //     result[i] = maxValue;
    // }
    // result[arr.length - 1] = -1;
    // return result;

    // Solution 2:
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        let rightValue = arr[i];
        // use ... to copy that array and use slice to cut the array
        // find the max value from the array
        let max = Math.max(...arr.slice(i));
        // if the right value is smaller than the max,push the array
        if (rightValue <= max) {
            result.push(max);
        }
    }
    // the latest element of the array need to be -1
    result.push(-1);

    return result;
};
const arr = [17, 18, 5, 4, 6, 1];
// should return [18,6,6,6,1,-1]
console.log(`The result is ${replaceElements(arr)}`);