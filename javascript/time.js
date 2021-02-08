// //放置於程式開始執行處--開始時間
// let start_time = new Date().getTime();

// //放置於程式執行結束處--程式進ajax撈完資料庫資料後回傳結果的結束時間
// let end_time = new Date().getTime();

// //計算花多久時間
// alert((end_time - start_time) / 1000 + "sec");

// let sorting = require("./index.js");

// class Speed {
//     constructor() {
//         this.time = 0;
//         this.runProgramName = '';
//     }

//     start(ProgramName) {
//         this.time = new Date().getTime();
//         this.runProgramName = ProgramName;

//         return this.time;
//         // console.log(this.runProgramName);
//     }

//     end(times, name) {
//         let time = this.start(name);
//         // let end_time = new Date().getTime();

//         // console.log(time)
//         console.log(`${name} 執行時間: ${Math.floor((new Date() - time) / times)} ms.`);
//         // console.log(`${name} ${(end_time - time) / 1000} sec `);
//     }

// }

// 測試
// function testCase(functionName, times) {

//     const Max = 1e7;
//     let result = [];
//     let number = 3000;

//     console.log(functionName);
//     while (number--) {
//         result[number] = Math.floor(Math.random() * Max);
//     }

//     for (var i = 0; i < times; i++) {
//         functionName(result);
//     }
//     return;
// }

//測試執行時間
// function ExecuteProgram(keys) {

//     for (let i = 0; i < keys.length; i++) {
//         let speedTest = new Speed();
//         speedTest.start(keys[i]);

//         // testCase([keys[i]], 5);

//         speedTest.end(5, keys);
//     }

// }
// const key = ['twoSum', 'kidsWithCandies'];
// ExecuteProgram(key);



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
 * @param {*} fileName 執行function名稱
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

    return start[0] + '執行時間:' + (end_time - start[1]) / 1000 + 'sec';
}