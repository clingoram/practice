/*
1051. Height Checker
Difficulty:Easy

Students are asked to stand in non-decreasing order of heights for an annual photo.

Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.

Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.

Hint:
Build the correct order of heights by sorting another array, then compare the two arrays.


Example 1:
Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation:
Current array : [1,1,4,2,1,3]
Target array  : [1,1,1,2,3,4]
On index 2 (0-based) we have 4 vs 1 so we have to move this student.
On index 4 (0-based) we have 1 vs 3 so we have to move this student.
On index 5 (0-based) we have 3 vs 4 so we have to move this student.

Example 2:
Input: heights = [5,1,2,3,4]
Output: 5

Example 3:
Input: heights = [1,2,3,4,5]
Output: 0


Constraints:

1 <= heights.length <= 100
1 <= heights[i] <= 100
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    // sort 並把排序過後的陣列跟原本的陣列做比較，return 出有幾個index有變動

    if (heights.length < 1) {
        return heights;
    }

    // solution 1:
    // let count = 0;
    // copy array
    // let originArray = [...heights];
    // heights.sort((a, b) => a - b);

    // for (let i = 0; i < originArray.length; i++) {
    //     if (heights[i] !== originArray[i]) {
    //         count++;
    //     }
    // }
    // return count;


    // solution 2:
    // let originArray = [...heights];
    // heights.sort(function (a, b) {
    //     return a - b;
    // });

    // return heights.reduce((total, current, index) =>
    //     (originArray[index] !== heights[index]) ? total + 1 : total, 0);


    // solution 3:
    let count = 0;
    let orininArray = [...heights].sort((a, b) => a - b);
    heights.map((val, index) => (orininArray[index] !== heights[index]) ? count += 1 : null);
    return count;

};
const h = [1, 1, 4, 2, 1, 3];
// should return 3
// sort:[1,1,1,2,3,4]
console.log(heightChecker(h));