// //放置於程式開始執行處--開始時間
// let start_time = new Date().getTime();

// //放置於程式執行結束處--程式進ajax撈完資料庫資料後回傳結果的結束時間
// let end_time = new Date().getTime();

// //計算花多久時間
// alert((end_time - start_time) / 1000 + "sec");

// let sorting = require("./index.js");

class Speed {
    constructor() {
        this.time = 0;
        this.runProgramName = '';
    }

    start(ProgramName) {
        this.time = new Date();
        this.runProgramName = ProgramName;

        // console.log(this.runProgramName);
    }

    end(times, name) {
        let time = this.start(name);
        console.log(`${name} 執行時間: ${Math.floor((new Date() - time) / times)} ms.`);
    }

}

// function test(func, times) {

//     const Max = 1e7;
//     let result = [];
//     let number = 3000;

//     while (number--) {
//         result[number] = Math.floor(Math.random() * Max);
//     }

//     for (var i = 0; i < times; i++) {
//         func(result);
//     }
//     return;
// }

function ExecuteProgram(keys) {
    console.log('run');
    for (let i = 0; i < keys.length; i++) {
        let speedTest = new Speed();
        speedTest.start(keys[i]);
        speedTest.test(sorting[keys[i]], 5);
        speedTest.end(5, keys);
    }
}
const key = ['BST'];
ExecuteProgram(key);
