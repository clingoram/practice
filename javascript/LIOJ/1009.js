/* 
1009
字串反轉
Input
輸入會是一個字串 S，字串的長度是 L（1&lt;=L&lt;=1001<=L<=100）

Output
請你輸出字串 S 倒過來的結果

// pseudo code: 把拿到的字串反過來，hello->hello
*/
function solveOne(n) {
    // solution 1:
    // return n.split("").reverse().join("");

    // how to use for loop to reverse the string?
    // solution 2:
    let str = '';
    for (let i = n.length - 1; i >= 0; i--) {
        str += n[i];
    }
    return str;
}
const n = 'hello';
console.log(solveOne(n));