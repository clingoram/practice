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
functions:
add value
remove value
find value
show values
*/
class mySet {
    constructor() {
        // collection will hold the set as array
        this.collection = [];
    }


    // add the element to the set
    addValue(element) {
        // if the element does't exist
        if (!this.hasData(element)) {
            // add the element to the set and return true
            collection.push(element);
            return true;
        }
        return false;
    }

    // check for the existence of an element and return true or false
    hasData(element) {
        if (collection.indexOf(element) !== -1) {
            return true;
        } else {
            return false;
        }
        // return (collection.indexOf(element) !== -1);
    }

    // remove an element from a set
    removeValue(element) {
        if (this.hasData(element)) {
            let index = collection.indexOf(element);
            // remove 1 element from index
            // 從index的位置開始，刪除 1 個元素
            collection.splice(index, 1);
            return true;
        }
        return false;
    }

    // return all the values in the set
    returnValue() {
        return collection;
    }

    // return the size of the collection
    size() {
        return collection.length;
    }

    // return the union of 2 sets
    // which means combine 2 sets
    combineSets(otherSet) {
        let unionSet = new Set();
        let firstSet = this.values();
        let secondSet = otherSet.values();

        firstSet.forEach(element => {
            unionSet.addValue(element);
        });

        secondSet.forEach(element => {
            unionSet.addValue(element);
        });

        return unionSet;
    }

    // return the intersection of 2 sets as a new set
    intersection(otherSet) {
        let intersevtionSet = new Set();
        let firstSet = this.values();

        firstSet.forEach(function (e) {
            if (otherSet.hasData(e)) {
                intersevtionSet.addValue(e);
            }
        });
        return intersevtionSet;
    }

    // return the difference of 2 sets as a new set
    difference(otherSet) {
        let differenceSet = new Set();
        let firstSet = this.values();

        firstSet.forEach(function (e) {
            if (!otherSet.hasData(e)) {
                differenceSet.addValue(e);
            }
        });

        return differenceSet;
    }

    // test if the set is a subset of a fifferent set
    subSet(otherSet) {
        let firstSet = this.values();
        return firstSet.every(function (value) {
            return otherSet.hasData(value);
        })
    }
}

const setData = new mySet();
const setData2 = new mySet();
setData.addValue("a");
setData2.addValue("b");

console.log(setData.subSet(setData2));
