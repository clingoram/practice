/*
EG:
寫在程式開始執行的地方:
let functionName = 'twoSum';
let start = countTime(functionName);
放置於程式執行結束處:
let end = endTime(start);
console.log(end);
*/
/**
 * 
 * @param {string} fileName 執行function名稱
 */

//放置於程式開始執行處--開始時間
function countTime(fileName = null) {

    let start_time = new Date().getTime();
    let data = [
        fileName,
        start_time
    ]
    return data;
}
// 結束時間
// 放置於程式執行結束處，回傳結果的結束時間
function endTime(start) {
    let end_time = new Date().getTime();

    return start[0] + '執行時間:' + (end_time - start[1]) / 5000 + 'ms';
}

/*
add
remove
find
length

*/
// function Linked() {
//     let size = 0;
//     let head = null;

//     let Node = function (element) {
//         this.element = element;
//         this.next = null;
//     }

//     this.size = function () {
//         console.log(`The length is ${size}`);
//         return size;
//     }

//     this.add = function (element) {
//         let node = new Node(element);

//         if (head === null) {
//             head = node;
//             // console.log(head);
//         } else {
//             let currentNode = head;
//             // console.log(currentNode);
//             while (currentNode.next) {
//                 currentNode = currentNode.next;
//             }
//             currentNode.next = node;
//         }
//         size++;
//         console.log(node);
//     }

//     this.remove = function (element) {
//         let currentNode = head;
//         if (currentNode.element === element) {
//             head = currentNode.next;
//         }
//     }
// }


// let list = new Linked();
// list.add(5);
// console.log(list);
