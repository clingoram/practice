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

// 1588
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {

    return arr.forEach(element => {
        console.log(element);
    });
};
const arr = [1, 4, 2, 5, 3];
console.log(sumOddLengthSubarrays(arr));
/*
Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd-length subarrays of arr.

---------------------------
arr = 正整數的array
可被2整除者是偶數，不可被2整除者是奇數

計算:
加總奇數的陣列
return sum of int


Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1 *
[4] = 4
[2] = 2
[5] = 5 *
[3] = 3 *
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
*/