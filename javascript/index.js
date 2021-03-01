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
 105. Construct Binary Tree from Preorder and Inorder Traversal
 Difficulty:Medium

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.


Example 1:
        3
    /       \
    9       20
 /     \    /  \
null  null  15  7

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

Example 2:
Input: preorder = [-1], inorder = [-1]
Output: [-1]


Constraints:

1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder and inorder consist of unique values.
Each value of inorder also appears in preorder.
preorder is guaranteed to be the preorder traversal of the tree.
inorder is guaranteed to be the inorder traversal of the tree.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// var buildTree = function (preorder, inorder) {

// };

// const preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7];
// // should return [3,9,20,null,null,15,7]
// console.log(`The result is ${buildTree(preorder, inorder)}`);

// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }
// class Linked {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     append(data) {
//         this.head = new Node(data, this.head);
//         this.size++;
//     }

//     remove(data) {
//         if (!this.head) {
//             return;
//         }
//     }

//     find(data) {

//     }
// }
// let list = new Linked();
// list.append(20);
// list.append(12);
// list.append(5);
// console.log(list);

// find largest and smallest number of array
function find(array) {
    if (array.length < 1) {
        return array;
    }
    let result = [];

}
const nums = [12, 4, 65, 7, 2, 4, 12];
console.log(`The result is ${find(nums)}`);