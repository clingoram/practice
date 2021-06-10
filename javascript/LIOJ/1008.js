/**
* 1008 幾個水桶
*
* 要拿水桶去裝水，但要求要每一次取水都能帶最少的水桶去，而且「每一個水桶一定都要裝滿」
* 水桶容量都是2的倍數(2的N次方)，以下是水桶容量:
* 1,2,4,6,8,16,32,64,128
* 
* target 要裝m個單位的水，要帶幾個水桶才行?
* EG.m=20，要帶2個水桶(容量16的水桶+容量4的水桶)
*/
function bucketWater(n) {
  // 找最接近n的倍數
  let count = 0;

  // solution 1:
  // let arr = [];
  // for (let i = 1; i <= 2 ** 31; i *= 2) {
  //   arr.push(i);
  // }
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   if (arr[i] <= n) {
  //     n -= arr[i];
  //     count++;
  //   }
  // }
  // return count;

  // solution 2: 轉換成2進位
  // 一直除於2也能變成2進位
  let hex = n.toString(2);
  for (let i = 0; i < hex.length; i++) {
    if (hex[i] == '1') {
      count++;
    }
  }
  return count;
}
const m = 20;
// 2(16+4)
console.log(bucketWater(m));
