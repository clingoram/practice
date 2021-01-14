/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {

    const temp = accounts.map((account) =>
        account.reduce((previous, current) => previous + current)
    );
    console.log(temp.sort((a, b) => b - a)[0]);
    return temp.sort((a, b) => b - a)[0];

};

// 加總accounts各個array
// 總數最大的array= richest
let accounts = [[2, 8, 7], [7, 1, 3], [1, 9, 5]];

maximumWealth(accounts);

// let empty = new Array();
// for (let i = 0; i <= 10; i++) {
//     empty.push(i);
// }
// console.log(empty);