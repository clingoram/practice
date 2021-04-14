/**
LIOJ 1035
簡易排序
Description

排序是學習演算法的時候第一個會學到的東西，有許多種排序方法，例如說泡沫排序、選擇排序、插入排序等等

這些演算法其實對初學者來說都不算太容易，需要一點時間學習

那為什麼這一題會叫做「簡易排序」呢？因為你只要留意一下輸入的範圍並且思考一下，應該就能得到一個比較簡單的排序方法！

那就祝你順利囉！


Input
第一行為一個數字 N，1&lt;=N&lt;=2000001<=N<=200000，代表有幾個數字需要排序

接下來 N 行每行都是一個正整數

Output
請輸出數列由小到大排序後的結果，每一個數字請用空行分開

----------------------------------
原始題目是2行，每行各有數字，但在VS CODE這樣會出錯，所以我把input資料都改成用陣列的方式呈現
第一個數字是共有幾筆資料
第二個之後是全部需要排序的資料
回傳排序過的數字
 */
function sortNum(n) {

  let ans = '';
  // 把共有幾筆資料分隔出來
  let allData = parseInt(n[0].toString().split(" "), 10);

  n.shift(); // remove the first element

  if (allData !== n.length) {
    return;
  }
  let sortValue = n.sort().join(" ");
  for (let i = 0; i < sortValue.length; i++) {
    ans += sortValue[i];
  }
  return ans;


  // const uniqueSet = new Set(a);

  // console.log(uniqueSet)
  // return [...uniqueSet].sort().join(" ");
}
const number = [5, 1, 7, 4, 9, 5];
// 1 4 5 7 9
console.log(sortNum(number));