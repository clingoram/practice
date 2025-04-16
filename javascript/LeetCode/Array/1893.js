/**
 * 1893. Check if All the Integers in a Range Are Covered
 * 
 * 確認[left,right]中一連串的整數數字是否涵蓋在給予的ranges中
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    // 回傳True如果於ranges [left, right] 中的每個整數都至少涵蓋於 ranges 的其中一個區間中；反之，回傳False
    for(let i = left;i <= right;i++) {
      let ans = false;
  
      for(let j = 0;j < ranges.length;j++) {
        let start = ranges[j][0];
        let end = ranges[j][1];
  
        if(start <= i && end >= i){
          ans = true;
          break;
        }
      }
      if (!ans) {
        return false;
     }
    }
    return true;
  };
  // let ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5;
  // true
  let ranges = [[1,1]],left = 1,right = 50;
  // false
  console.log(isCovered(ranges,left,right));