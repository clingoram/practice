/*
Richest Customer Wealth

You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

Constraints:

m == accounts.length
n == accounts[i].length
1 <= m, n <= 50
1 <= accounts[i][j] <= 100

-----------------------------------
accounts 是二維陣列，加總每個陣列，取最大的
return 最大值
--------------------------------

Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.

Example 2:

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation:
1st customer has wealth = 6
2nd customer has wealth = 10
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.
Example 3:

Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17
*/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {

    if (accounts.length === 0) {
        return;
    }

    // solution 1:
    const temp = accounts.map((account) =>
        account.reduce((previous, current) => previous + current)
    );
    // console.log(temp.sort((a, b) => b - a)[0]);
    return temp.sort((a, b) => b - a)[0];

    // solution 2:
    // let sum = 0;
    // for (let i = 0; i < accounts.length; i++) {
    // 	let temp = 0;
    // 	for (let j = 0; j < accounts[i].length; j++) {
    // 		temp += accounts[i][j];
    // 	}
    // 	sum = Math.max(sum, temp);
    // }
    // return sum;

    // solution 3:
    // let max = 0;
    // let min = 0;
    // for (let i = 0; i < accounts.length; i++) {
    // 	for (let j = 0; j < accounts[i].length; j++) {
    // 		max += accounts[i][j];
    // 	}
    // 	if (max > min) {
    // 		min = max;
    // 		max = 0;
    // 	} else {
    // 		max = 0;
    // 	}
    // }
    // return min;
};

// 加總accounts各個array
// 總數最大的array= richest
let accounts = [[2, 8, 7], [7, 1, 3], [1, 9, 5]];

maximumWealth(accounts);