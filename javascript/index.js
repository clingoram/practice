// function num(n) {
//     //放置於程式開始執行處--開始時間
//     let start_time = new Date().getTime();

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < 1; j++) {
//             console.log(j);
//         }
//     }
//     //放置於程式執行結束處--程式進ajax撈完資料庫資料後回傳結果的結束時間
//     let end_time = new Date().getTime();

//     //計算花多久時間
//     alert((end_time - start_time) / 1000 + "sec");
// }
// num(10);


// 989. Add to Array-Form of Integer
// /**
//  * @param {number[]} A
//  * @param {number} K
//  * @return {number[]}
//  */
// var addToArrayForm = function (A, K) {
//     if (K <= 0) {
//         return A;
//     }
//     const element = A.join('');
//     const change = parseInt(element, 10) + parseInt(K, 10);
//     const result = Array.from(String(change), Number);
//     // console.log(result);
//     return result;
// };

// const A = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3];
// const K = 516;
// // should return :[1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]
// console.log(addToArrayForm(A, K));
// // 1200+34 =1234 => [1,2,3,4]

class MyTest_LinkedList {
    // default
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // 新增資料
    appendData(value) {
        const newNode = {
            value: value,
            next: null
        }

        if (this.tail) {
            this.tail = newNode;
        }
        this.tail = newNode;

        if (!this.head) {
            this.head = newNode;
        }
    }

    // 在head新增資料
    appendDataFirst(value) {
        const newNode = {
            value: value,
            next: this.head
        }

        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    }

    // 在tail位置新增資料
    appendDataLast(value, after) {
        const exist = this.find(after);

        if (!exist) {

        }
    }

    // find data exist or not
    find(value) {

    }

}
// 新增、首位新增、末位新增、找、刪除、print
const test = new MyTest_LinkedList();
test.appendData(20);
test.appendDataFirst(60);
console.log(test);

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {

};
const n = 5, start = 0;
console.log(xorOperation(n, start));
// Output: 8
// Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
// Where "^" corresponds to bitwise XOR operator.