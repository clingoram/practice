// BST
class Node {
    constructor(value) {
        this.right = null;
        this.left = null;
        this.value = value;
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value);
        this.count = 1; // 0 at first,then it can track how many nodes in this tree.
    }

    size() {
        return this.count;
    }

    insert(value) {
        this.count++;

        let newNode = new Node(value);

        const searchTree = node => {
            // if value < node.value,go left
            if (value < node.value) {
                // if no left child,append new node
                if (!node.left) {
                    node.left = newNode;
                } else {
                    // if left have child,look left again
                    searchTree(node.left);
                }
            } else if (value > node.value) {
                // if value > node.value,go right
                if (!node.right) {
                    // if no right child,append new node
                    node.right = newNode;
                } else {
                    // if right have child,look right again
                    searchTree(node.right);
                }
            }
        }
        searchTree(this.root);
    }

    min() {
        let currentNode = this.root;

        // continue traversing left until no more children
        while (currentNode.left) {
            currentNode = currentNode.left
        }

        return currentNode.value;
    }

    max() {
        let currentNode = this.root;

        // continue traversing right until no more children
        while (currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode.value;
    }

    contains() {
        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode.value) {
                return true;
            }

            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    // depth first search

    // in order
    inOrder() {
        let result = [];

        const traverse = node => {
            if (node.left) traverse(node.left);

            result.push(node.value);

            if (node.right) traverse(node.right);
        }
        return result;
    }
    // pre order
    // root,left,right
    preOrder() {
        let result = [];

        const traverse = node => {
            result.push(node.value);

            if (node.left) traverse(node.left);

            if (node.right) traverse(node.right);


        }
        return result;
    }
    // post order
    // left,right,root
    postOrder() {
        let result = [];

        const traverse = node => {
            if (node.left) traverse(node.left);


            if (node.right) traverse(node.right);

            result.push(node.value);
        }
        return result;
    }


    // bfs
    bfs() {
        let result = [];
        let queue = [];

        queue.push(this.root);

        while (queue.length) {
            let currentNode = queue.shift();

            result.push(currentNode);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return result;
    }
}
const bst = new BST(15);
bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

bst.size();

console.log(bst.preOrder());