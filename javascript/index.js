// 1572. Matrix Diagonal Sum
/**
 * @param {number[][]} mat
 * @return {number}
 */
// var diagonalSum = function (mat) {
//     for (let index = 0; index <= mat.length; index++) {
//         // const element = mat[index];
//         console.log(mat[index]);
//     }
// };
// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(diagonalSum(arr));

// return the sum of the matrix diagonals. 返回正方形中對角線的總和
// sum X =>
// primary: 1 + 5 + 9 
// secondary: 3 + 5 + 7

// 1. 是二維陣列
// 2. 判斷陣列length是奇數或偶數，共有幾個二維陣列
// 3. 
//  a.第一個二維陣列:找該array中位於第0個位置和最後一個位置的值，之後其他二維陣列則取往後移一個位置的值
//  b.最後一個二維陣列:找該array中位於第0個位置和最後一個位置的值

// 二維陣列
// 判斷陣列length是奇數或偶數，共有幾個二維陣列
// ==> 找第一個和最後一個二維陣列中，第0個位置和最後一個位置的值
// 其他二維陣列則取往後移一個位置的值

/*
Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.
*/


// binary search tree
class Node {
    constructor(data, left = null, right = null) {
        this.data = data; // store data
        this.left = left; // left node
        this.right = right; // right node
    }
}
class BST {
    constructor() {
        this.root = null;
    }

    // add data
    add(data) {
        const node = this.root;

        // check if node is empty
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const SearchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left != null) {
                        return SearchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right != null) {
                        return SearchTree(node.right);
                    }
                } else {
                    return null;
                }
            }
            return SearchTree(node);
        }
    }

    // bst都是左邊節點比右邊的節點小
    findMin() {
        let currentNode = this.root;

        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.data;
    }

    // bst都是右邊節點比左邊的節點大
    findMax() {
        let currentNode = this.root;
        while (currentNode.right !== null) {
            currentNode = currentNode.right;
        }
        return currentNode.data;
    }

    find(data) {
        let currentNode = this.root;
        while (currentNode !== data) {
            // left < right
            if (data < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
            if (currentNode === null) {
                return null;
            }
        }
        return currentNode;
    }

    // return true or false
    isset(data) {
        let currentNode = this.node;
        while (currentNode) {
            if (data === currentNode.data) {
                return true;
            }

            // left < right
            if (data < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    remove(data) {
        const removeNode = function (node, data) {
            if (node === null) {
                return null;
            }

            if (data == node.data) {
                // node has no children
                if (node.left == null && node.right == null) {
                    return null;
                }
                // node has no left child
                if (node.left == null) {
                    return node.right;
                }
                // node has no right child
                if (node.right == null) {
                    return node.left;
                }

                // node has 2 children
                let tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }

                node.data = tempNode.data;
                node.left = removeNode(node.right, tempNode.data);
                return node;

            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }

    /*
    traversal:
        inorder
        postorder
        preorder
        
        height

    */
    // left node -> root -> right node
    inOrder() {
        let result = [];

        if (this.root == null) {
            return null;
        } else {
            const traverse = function (node) {
                result.push(node.data);

                if (node.left) {
                    traverse(node.left);
                }

                if (node.right) {
                    traverse(node.right);
                }

            }
            traverse(this.root);
            return result;
        }
    }

    // root -> left node -> right node
    postOrder() {
        let result = [];

        if (this.root == null) {
            return null;
        } else {
            const traverse = function (node) {
                result.push(node.data);

                if (node.left) {
                    traverse(node.left);
                }

                if (node.right) {
                    traverse(node.right);
                }
            }

            traverse(this.root);
            return result;
        }
    }

    // root -> left node -> right node
    preOrder() {
        let result = [];
        if (this.root == null) {
            return null;
        } else {
            const traverse = function (node) {
                result.push(node.data);

                if (node.left) {
                    traverse(node.left);
                }

                if (node.right) {
                    traverse(node.right);
                }
            }
            traverse(this.root);
            return result;
        }
    }
}

const bst = new BST();
bst.add(10); // root
bst.add(30);
bst.add(15);

console.log(bst.postOrder());