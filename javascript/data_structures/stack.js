/*
Stack:
先進後出

------------------
function:
push(add item)
pop(remove item)
peek
length
*/

// let letters = []; // this is stack
// let word = 'JavaScript';
// let reverseWord = "";

// // put letters of word into stack
// for (let i = 0; i < word.length; i++) {
//     letters.push(word[i]);
// }

// // pop out of the stack in reverse order
// for (let i = 0; i < word.length; i++) {
//     reverseWord += letters.pop();
// }

// if (reverseWord === word) {
//     console.log(word + 'is');
// } else {
//     console.log(word + 'not');
// }

class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};
    }

    // add a value at the end of the stack
    pushData(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // remove and return the value at the end of the stack
    popData() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];

        return result;
    }

    size() {
        return this.count;
    }

    // return the value at the end of the stack
    // not remove,just return the value at the end of the stack
    peek() {
        return this.storage[this.count - 1];
    }
}
const r = new Stack();
r.pushData(10);
r.pushData(50);
r.pushData(100);

console.log(r.peek()); // 100(return the value at the end of the stack)
console.log(r.popData()); // 100(remove and return the value which at the end of the stack)
console.log(r.peek()); // 50(after remove 100 at line 71,the value:50 is at the end of the stack)
console.log(r.size()); // 2(it was 3,cause removed 100.The size is 2 now)