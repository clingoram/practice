class LinkedList {
    constructor() {
        this.head = null; // first element of the list
        this.tail = null; // last element of the list
    }

    // Methods
    // insert data to linkedlist
    append(value) {
        const newNode = {
            value: value,
            next: null
        };

        // if has tail
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;

        // cause this is append data to linkedlist
        // have to check head value exist or not
        if (!this.head) {
            this.head = newNode;
        }
    }

    // insert 第一個位置
    prepend(value) {
        const newNode = {
            value: value,
            next: this.head
        };

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
    }

    // insert最後
    insertAfter(value, afterValue) {
        const existingNode = this.find(afterValue);

        if (existingNode) {
            const newNode = {
                value: value,
                next: existingNode.next
            };

            existingNode.next = newNode;
        }
    }

    find(value) {
        if (!this.head) {
            return;
        }

        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        // didn't find anything
        return null;
    }

    delete(value) {
        if (!this.head) {
            return;
        }

        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let currentNode = this.head;

        while (currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            }
        }

        if (this.tail.value === value) {
            this.tail = currentNode;
        }
    }

    toArray() {
        const elements = [];

        // now = head as begining
        let currentNode = this.head;
        while (currentNode) {
            elements.push(currentNode);
            currentNode = currentNode.next;
        }

        return elements;
    }
}

const list = new LinkedList();
list.append(1);
list.append('Saturday');
list.append('JavaScript');
list.append('PHP');
list.append(30);
list.prepend('one');
// list.delete(30);
list.insertAfter('single', 1);

// console.log(list.find('PHP'));
console.log(list.toArray());
