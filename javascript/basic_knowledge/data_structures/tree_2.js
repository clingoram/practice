
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
        
        height:
         minheight
         maxheight

    */
    // left node -> root -> right node
    inOrder() {
        let result = [];

        if (this.root == null) {
            return null;
        } else {
            const traverse = function (node) {

                // if node.left == true
                if (node.left) {
                    traverse(node.left);
                }

                result.push(node.data);

                // if node.right == true
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

                if (node.left) {
                    traverse(node.left);
                }

                if (node.right) {
                    traverse(node.right);
                }
                result.push(node.data);
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

    // breadth first search - looking for level by level
    levelOrder() {
        let result = [];
        let queue = []; // temp array

        if (this.root != null) {
            queue.push(this.root);

            while (queue.length > 0) {
                let node = queue.shift(); //take out first element of array
                result.push(node.data);

                if (node.left != null) {
                    queue.push(node.left);
                }

                if (node.right != null) {
                    queue.push(node.right);
                }
            }
            return result;
        } else {
            return nill;
        }
    }

    // check if right and left is balanced(equal)
    // return true or false
    isBalance() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1);
    }

    findMinHeight(node = this.root) {
        if (node == null) {
            return -1;
        }
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);

        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    findMaxHeight(node = this.root) {
        if (node == null) {
            return -1;
        }

        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);

        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }
}

const bst = new BST();
bst.add(10); // root
bst.add(6);
bst.add(15);
bst.add(45);
bst.add(2);



console.log(bst.postOrder());