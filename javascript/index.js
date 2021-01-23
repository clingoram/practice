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


// 1450
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
    if (startTime.length < 2 || endTime.length < 2) {
        return;
    }

};
const startTime = [1, 2, 3], endTime = [3, 2, 7], queryTime = 4;
console.log(busyStudent(startTime, endTime, queryTime));
/*
Output: 1
Explanation: We have 3 students where:
The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.
*/
