/**
 * 1026
 * 判斷等比數列
Description

大家還記得國中的時候學過的等比數列嗎？

在等比數列裡面，相鄰兩項的比例相同，舉例來說：

3, 6, 12, 24, 483,6,12,24,48 就是等比數列，因為 6/36/3、12/612/6、24/1224/12、48/2448/24 的值都相等，而且都是 2，我們就稱這個等差數列的公比為 2

現在給你一個數列，請判斷是否為等比數列。


Input
輸入的第一行為一個數字 N，2 &lt;= N &lt;= 1002<=N<=100，代表數列裡總共有幾個數字

接下來第二行為數列中的數字 A_{i}A 
i
 	
 ，-10000 &lt; = A{i} &lt;= 10000−10000<=Ai<=10000，彼此用空格分隔


Output
若是輸入的數列為等比數列，請輸出 Yes，反之輸出 No
 */
function equal(a, b) {
  if (b.length !== a) {
    return;
  }
  let ans = '';
  if (isValid(b)) {
    ans = 'Yes';
  } else {
    ans = 'No';
  }
  return ans;
}
function isValid(n) {
  let d = n[1] / n[0];
  for (let i = 1; i < n.length; i++) {
    if (n[i] / n[i - 1] !== d) {
      return false;
    }
  }
  return true;
}
let a = 3;
let num = [3, 9, 27];
console.log(equal(a, num));