/**
 * Sum of differences in array
 * 
 * Your task is to sum the differences between consecutive pairs in the array in descending order.
 * 
 * For example:
 * sumOfDifferences([2, 1, 10])
 * Returns 9
 * Descending order: [10, 2, 1]
 * 
 * Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
 * 
 * If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).
 */
function sumOfDifferences(arr) {
  /**
   * Input int array.
   * Output int.
   * 
   * 若陣列為空或只有1個element，回傳0
   */
  // Solution 1.Runtime took 617 ms.
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;

}
// let array = [1, 2, 10]; // 10 ,2, 1
// 9
let array = [-3, -2, -1];
console.log(sumOfDifferences(array));