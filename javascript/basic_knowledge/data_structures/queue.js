
/*
Queue

*/
// class Queue {
//     constructor() {
//         this.coll = [];
//     }

//     print() {
//         console.log(coll);
//     }

//     enqueue(ele) {
//         colln.push(ele);
//     }

//     deque() {
//         return coll.shift();
//     }

//     front() {
//         return coll[0];
//     }

//     size() {
//         return coll.length;
//     }

//     isEmpty() {
//         return (coll.length === 0);
//     }
// }

function Queue() {
    // collect all the items of queue
    let collectionlist = [];

    // print out
    this.print = function () {
        console.log(collectionlist);
    }
    // add(push) the first item in queue
    this.enqueue = function (ele) {
        collectionlist.push(ele);
    }
    // take out first item of an queue
    this.dequeue = function () {
        return collectionlist.shift();
    }
    // return the 1 item of queue
    this.front = function () {
        return collectionlist[0];
    }

    this.size = function () {
        return collectionlist.length;
    }
    // check if empty
    this.isEmpty = function () {
        return (collectionlist.length === 0);
    }
}
let q = new Queue();
q.enqueue('a');
q.enqueue('asd');
q.print()
console.log(q.dequeue());