//     //放置於程式開始執行處--開始時間
//     let start_time = new Date().getTime();

//     //放置於程式執行結束處--程式進ajax撈完資料庫資料後回傳結果的結束時間
//     let end_time = new Date().getTime();

//     //計算花多久時間
//     alert((end_time - start_time) / 1000 + "sec");




/*
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
    appendDataLast(afterValue, value) {
        // find the data exist or not
        const exist = this.findData(afterValue);

        if (exist) {
            const newNode = {
                value: value,
                next: exist.next
            };
            exist.next = newNode;
        }
    }

    // find this data exist or not
    findData(value) {
        // no data at head
        if (!this.head) {
            return;
        }
        let currentNode = this.head;
        // console.log(currentNode);
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    removeData() {
        this.head = null;
        this.tail = null;
    }

    printOut() {
        const data = [];

        let currentNode = this.head;
        while (currentNode) {
            data.push(currentNode);
            currentNode = currentNode.next;
        }

        return data;
    }

}
// 新增、首位新增、末位新增、找、刪除、printout
const test = new MyTest_LinkedList();
test.appendData(20);
test.appendDataFirst(60);
console.log(test.printOut());
*/


// 1572. Matrix Diagonal Sum
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    for (let index = 0; index <= mat.length; index++) {
        const element = mat[index];
        console.log(element);

    }
};
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(diagonalSum(arr));

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