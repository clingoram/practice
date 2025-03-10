
/*
105. Construct Binary Tree from Preorder and Inorder Traversal
Difficulty:Medium

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

-------------
1.tree
2.traversal:inorder、preorder

-------------

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
var buildTree = function (preorder, inorder) {
    if (!preorder || !inorder) {
        return null;
    }
    let j = i = 0;

    var build = function (stop) {
        if (inorder[i] != stop) {
            let rootNode = new TreeNode(preorder[j++]);
            rootNode.left = build(rootNode.val);
            i++;
            rootNode.right = build(stop);

            return rootNode;
        }
        return null;
    }

    return build();
};

const preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7];
// should return [3,9,20,null,null,15,7]
console.log(`The result is ${buildTree(preorder, inorder)}`);