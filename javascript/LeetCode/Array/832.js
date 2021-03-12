/*
832. Flipping an Image
Difficulty:Easy

Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0].

-----------------------------------
把array反轉後，再把反轉過的值，變成1->0;0->1
-----------------------------------

Example 1:
Input: image = [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

Example 2:
Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]


Constraints:
n == image.length
n == image[i].length
1 <= n <= 20
images[i][j] is either 0 or 1.
*/

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
    if (A.length === null) {
        return null;
    }
    // 每個陣列要個別反轉
    // 1->0; 0->1 replace

    // solution 1:
    let reverse = A.map(x => {
        return x.reverse();
    })
    for (let i = 0; i < reverse.length; i++) {
        for (let j = 0; j < reverse[i].length; j++) {
            if (reverse[i][j] === 1) {
                reverse[i][j] = 0;
            } else {
                reverse[i][j] = 1
            }
        }
    }
    return reverse;

    // solution 2:
    // return A.map(x => {
    //     return x.reverse().map(a => a ^ 1);
    // })

};
const i = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];
// at first: [[0,1,1],[1,0,1],[0,0,0]]
// then output: [[1,0,0],[0,1,0],[1,1,1]]
console.log(flipAndInvertImage(i));