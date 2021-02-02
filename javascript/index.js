//     //放置於程式開始執行處--開始時間
//     let start_time = new Date().getTime();

//     //放置於程式執行結束處--程式進ajax撈完資料庫資料後回傳結果的結束時間
//     let end_time = new Date().getTime();

//     //計算花多久時間
//     alert((end_time - start_time) / 1000 + "sec");


// 1572. Matrix Diagonal Sum
/**
 * @param {number[][]} mat
 * @return {number}
 */
// var diagonalSum = function (mat) {
//     for (let index = 0; index <= mat.length; index++) {
//         // const element = mat[index];
//         console.log(mat[index]);
//     }
// };
// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(diagonalSum(arr));

// return the sum of the matrix diagonals. 返回正方形中對角線的總和
// sum X =>
// primary: 1 + 5 + 9 
// secondary: 3 + 5 + 7

// 1. 是二維陣列
// 2. 判斷陣列length是奇數或偶數，共有幾個二維陣列
// 3. 
//  a.第一個二維陣列:找該array中位於第0個位置和最後一個位置的值，之後其他二維陣列則取往後移一個位置的值
//  b.最後一個二維陣列:找該array中位於第0個位置和最後一個位置的值

// 二維陣列
// 判斷陣列length是奇數或偶數，共有幾個二維陣列
// ==> 找第一個和最後一個二維陣列中，第0個位置和最後一個位置的值
// 其他二維陣列則取往後移一個位置的值

/*
Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.
*/

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     appendData(value) {
//         const node = {
//             value: value,
//             next: null
//         };

//         if (this.tail) {
//             this.tail = node;
//         }

//         this.tail = node;

//         if (!this.head) {
//             this.head = node;
//         }
//     }

//     appendDataFirst(value) {
//         const node = {
//             value: value,
//             next: this.head
//         }
//         this.head = node;
//         if (!this.tail) {
//             this.tail = node;
//         }
//     }

//     appendDataLast(place, value) {
//         const ele = this.find(place);

//         if (ele) {
//             const node = {
//                 value: value,
//                 next: ele.next
//             }
//             ele.next = node;
//         }
//     }

//     find(value) {
//         if (!this.head) {
//             return false;
//         }

//         let currentNode = this.head;

//         while (currentNode) {
//             if (currentNode.next == value) {
//                 return currentNode;
//             }
//             currentNode = currentNode.next;
//         }
//         return null;
//     }

//     delete() {
//         this.head = null;
//         this.tail = null;
//     }

//     printOut() {
//         // empty array
//         const ele = [];

//         let currentNode = this.head;
//         while (currentNode) {
//             ele.push(currentNode);

//             currentNode = currentNode.next;
//         }
//         return data;
//     }
// }
// const test = new LinkedList();
// test.appendData(10);
// test.appendDataFirst(20);
// console.log(test);

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