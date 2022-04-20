/**
 * Sum of two lowest positive integers
 * 
 * Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
 *
 *For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
 *
 *[10, 343445353, 3453445, 3453545353453] should return 3453455.
 */
function sumTwoSmallestNumbers(numbers) {
  /*
  給一個正數陣列，回傳該陣列中最小以及第二小的數字加總
  
  方法:
  1.asc sort array
  */
  //  Solution 1.Runtime took 894 ms.
  const sorted = numbers.sort((a, b) => a - b);
  return sorted[0] + sorted[1];
}