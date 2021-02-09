/*
217. Contains Duplicate

 Given an array of integers, find if the array contains any duplicates.
 Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

 return:
 true if value appears >= 2
 else return false

 --------------------------------------------
Example 2:
Input: [1,2,3,4]
Output: false

Example 3:
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true

*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {

    let splice = nums.slice().sort();

    for (let i = 0; i < splice.length; i++) {
        // i = index
        // console.log(splice[i]);
        if (splice[i] == splice[i - 1]) {
            return true;
        }
    }
    return false;
};

const input = [1, 2, 3, 1];
console.log(containsDuplicate(input));
// should return true