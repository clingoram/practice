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

function go(nums) {
    if (nums.length < 1) {
        return nums.join("");
    }

    return nums.sort((a, b) => {
        return ("" + b + a) - ("" + a + b);
    }).join("").replace(/^0*/g, '') || '0';
}
const a = [5, 2, 98, 3, 16, 76];
// 98 76 5 3  2 16
console.log(go(a));