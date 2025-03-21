
/*
add
remove
find
length

*/
function Linked() {
    let size = 0;
    let head = null;

    let Node = function (element) {
        this.element = element;
        this.next = null;
    }

    this.size = function () {
        console.log(`The length is ${size}`);
        return size;
    }

    this.add = function (element) {
        let node = new Node(element);

        if (head === null) {
            head = node;
            // console.log(head);
        } else {
            let currentNode = head;
            // console.log(currentNode);
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        size++;
        // console.log(node);
    }

    this.remove = function (element) {
        let currentNode = head;
        let previousNode;
        if (currentNode.element === element) {
            head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
            }
            previousNode.next = currentNode.next;
        }
        size--;
    }

    this.isEmpty = function () {
        return size === 0;
    }

    this.indexOf = function (element) {
        let currentNode = head;
        let index = -1;

        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }

    this.elementAt = function (index) {
        let currentNode = head;
        let count = 0;
        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element;
    }

    this.addAt = function (index, element) {
        let node = new Node(element);

        let currentNode = head;
        let previousNode;
        let currentIndex = 0;

        if (index > size) {
            return false;
        }

        if (index === 0) {
            node.next = currentNode;
            head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        size++;
    }

    this.removeAt = function (index) {
        let currentNode = head;
        let previousNode;
        let currentIndex = 0;

        if (currentIndex < 0 || index >= size) {
            return null;
        }

        if (index === 0) {
            head = currentIndex.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        size--;
        return currentNode.element;
    }

}


let list = new Linked();
list.add('Cat');
list.add('Dog');
list.add('Fish');

console.log(list.size());
console.log(list.elementAt(2));
console.log(list.removeAt(2));
console.log(list.indexOf('Dog'));
console.log(list.size());
