/*
先進後出，就跟罐子一樣，最先放的，最晚拿出來
*/
class Stack_2 {
    constructor() {
        this.items = []; // empty arr
        this.count = 0; // start from 0
    }

    // add element to top of stack
    push(element) {
        this.items[this.count] = element;
        this.count++;
        console.log(`${element} added to ${this.count}`);
        return this.count - 1;
    }

    // return and remove top element of stack
    pop() {
        if (this.count == 0) {
            return undefined;
        }

        let deleteItem = this.items[this.count - 1];
        this.count--;

        console.log(`${deleteItem} is removed`);
        return deleteItem;
    }

    // check the size
    size() {
        console.log(`The size is:${this.count} `);
        return this.count;
    }

    // check top element in stack
    peek() {
        console.log(`Top element is ${this.items[this.count - 1]}`);
        return this.items[this.count - 1];
    }

    // check if the stack is empty
    isEmpty() {
        console.log(this.count == 0 ? "Stack is empty" : "Stack isn't empty");
        return this.count == 0;
    }

    // print element in stack
    print() {
        let str = '';
        for (let i = 0; i <= this.count; i++) {
            str += this.items[i] + '';
        }
        return str;
    }

    // clear stack
    clear() {
        this.items = [];
        this.count = 0;

        console.log('Stack cleared');
        return this.items;
    }
}
const stack = new Stack_2();
stack.push(100);

stack.peek();
stack.push(200);
stack.isEmpty();
stack.push(300);
stack.size();

stack.clear();

console.log(stack);