// Linked list
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        // 預設剛開始head,size都是空、0
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
    // 
    insertLast(data) {
        let node = new Node(data);
        let current;

        // if empty,make head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    // insert at index
    inserAt(data, index) {
        // if index is out of range
        if (index > 0 && index > this.size) {
            return;
        }

        // if first index
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        // set current to first
        const node = new Node(data);
        let current, previous;

        current = this.head;
        let count = 0;
        while (count < index) {
            previous = current; // node before index
            count++;
            current = current.next; // node after index
        }

        node.next = current;

        previous.next = node;

        this.size++;
    }

    // get an index
    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }

    // remove at index
    removeAt(index) {
        if (index > 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        // remove first
        if (index == 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }

    // clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    printData() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

}
const a1 = new LinkedList();
a1.insertFirst(100);
a1.insertFirst(150);
a1.insertFirst(200);
a1.insertLast(300);
a1.inserAt(250, 3);
// a1.getAt(3);

// a1.removeAt(2);
a1.clearList()
a1.printData();

// console.log(a1);