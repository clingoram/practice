/*
1002 - 數字比大小

輸入一共有許多行，每一行都包含兩個正整數 a, b
請輸出這兩個之中比較大的那個數字
若是碰到 a=b=0 代表輸入結束

Input
用空格隔開的兩正整數 a 與 b

Output
針對每一筆測試資料，請輸出比較大的那個數字，若是兩個一樣大則輸出任意一個數字皆可

若是碰到 a=b=0 代表輸入結束，請勿做任何處理
 */
function compareNum(n) {
  let toSplit = n.toString().split(" ");
  // console.log(toSplit);

  // let ans = '';
  for (let i = 0; i < toSplit.length; i++) {
    let int = parseInt(toSplit[i], 10);
    // console.log(int);
    if (int > parseInt(toSplit[i + 1], 10)) {
      return int;
    } else {
      return parseInt(toSplit[i + 1], 10);
    }
  }
  // return ans;
}
const a = '2 3'; // obj
// 1
// 3
console.log(compareNum(a));


