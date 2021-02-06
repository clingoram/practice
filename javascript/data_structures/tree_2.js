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
}

const bst = new BST();
bst.add(10); // root
bst.add(30);
bst.add(15);
bst.remove(15);
console.log(bst);