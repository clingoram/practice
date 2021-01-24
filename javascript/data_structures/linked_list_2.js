class LinkedList {
    constructor() {
        this.head = null; // first element of the list
        this.tail = null; // last element of the list
    }

    // Methods
    // it's empty array at the begining,
    // and insert data to linkedlist at first(head)
    append(value) {
        // obj
        const newNode = {
            value: value,
            next: null
        };

        // 有head 值，就把value加到tail
        if (this.tail) {
            console.log('tail:');
            // console.log(this.tail);
            this.tail.next = newNode;
        }
        this.tail = newNode;
        // console.log(this.tail);


        // cause this is append data to linkedlist
        // have to check head value exist or not

        // head沒有值，就把value加到head上
        if (!this.head) {
            console.log('No head!!');
            this.head = newNode;
        }
    }

    // insert 第一個位置
    insertFirst(value) {
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

const findList = new LinkedList();

findList.append('JavaScript');
findList.append(20);

console.log(findList);
// console.log(findList.toArray());
