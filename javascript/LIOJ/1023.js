/*
LIOJ 1023

印出聖誕樹
Description

請你按照題目給予的數字 N，輸出 N 層的聖誕樹，範例如下：

N=1

*
N=2

 *
***
 |
N=3

  *
 ***
*****
  |
  |
N=4

   *
  ***
 *****
*******
   |
   |
   |

Input
一個正整數 N，1 &lt;= N &lt;= 301<=N<=30

Output
請輸出 N 層聖誕樹的圖形


Sample Input:3
Output: 
  *
 ***
*****
  |
  |



---
*/
function printChristmasTree(nym) {
  if (nym === 0) {
    return;
  }
  for (let i = 1; i <= nym; i++) {
    console.log(printStars(i, nym));
  }
  for (let i = 1; i <= nym; i++) {
    console.log(printNode(nym))
  }
}
function printStars(i, n) {
  return repeat(' ', n - i) + repeat('*', 2 * i - 1);
}
function printNode(n) {
  return repeat(' ', n - 1) + '|';
}
function repeat(string, n) {
  let str = '';
  for (let i = 1; i <= n; i++) {
    str += string;
  }
  return str;
}
let tree = 3;
console.log(printChristmasTree(tree));