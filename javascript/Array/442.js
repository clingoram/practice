/*
442. Find All Duplicates in an Array

-- Difficulty:Medium

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

1. 出現次數>=2
2. return 重複值(array)
3. 執行時間 O(n)

但以下方式執行時間似乎不是O(n)

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let obj_map = new Map(); // obj with key and value
    let result = [];

    // solution 1:
    // for (const number of nums) {
    //     // console.log(number); // 4, 3, 2, 7, 8, 2, 3, 1
    //     if (!obj_map.has(number)) {
    //         obj_map.set(number, 1);
    //     } else {
    //         result.push(number);
    //     }
    // }

    // solution 2:
    nums.forEach(a => {
        // console.log(a); // 4, 3, 2, 7, 8, 2, 3, 1

        // returns a boolean indicating whether an element with the specified key exists or not.
        if (!obj_map.has(a)) {
            obj_map.set(a, 1); // set secified key(which key named is 'a') and a value(which value is '1') to a Map(which variable name is obj_map)

        } else {
            result.push(a);
        }
    })

    return result;

};
const arr = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(arr));