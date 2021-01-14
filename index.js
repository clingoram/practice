/**
 * @param {number[][]} accounts
 * @return {number}
 */
// var maximumWealth = function (accounts) {

//     const temp = accounts.map((account) =>
//         account.reduce((previous, current) => previous + current)
//     );
//     console.log(temp.sort((a, b) => b - a)[0]);
//     return temp.sort((a, b) => b - a)[0];

// };

// // 加總accounts各個array
// // 總數最大的array= richest
// let accounts = [[2, 8, 7], [7, 1, 3], [1, 9, 5]];

// maximumWealth(accounts);


function num(n) {
    //放置於程式開始執行處--開始時間
    let start_time = new Date().getTime();

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 1; j++) {
            console.log(j);
        }
    }
    //放置於程式執行結束處--程式進ajax撈完資料庫資料後回傳結果的結束時間
    let end_time = new Date().getTime();

    //計算花多久時間
    alert((end_time - start_time) / 1000 + "sec");
}
num(10);