/**
 * Sum of Digits
 * 
 * Given a number n, find the sum of its digits.
 * 參數為數字n，依據位數加總
 * 
 * @param {number} n
 * @returns {number}
 */
var sumDigit = function(n) {
    /**
     * Time Complexity: O(log10n)
     * Auxiliary Space: O(1)
     */
    let sum = 0;
    while(n !== 0){
      let lastDigit = n % 10;
      sum += lastDigit;
      n = Math.floor(n / 10);
    }
    return sum;
}
// let n = 687;
// 21 （6+8+7）
// console.log(sumDigit(n));

/**
 * Reverse Digits
 * 
 * Given an Integer n, find the reverse of its digits.
 * 
 * @param {number} n
 * @returns {number}
 */
var reverseDigit = function (n) {
    return parseInt(n.toString().split("").reverse().join(""));
}
// let n = 122;
// 221
// console.log(reverseDigit(n));

/**
 * Prime Testing
 * 
 * Given a positive integer, check if the number is prime or not. 
 * A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself. 
 * Examples of the first few prime numbers are {2, 3, 5, …}
 * 
 * 給一個數字參數n，判斷該參數是否為質數(除了1和它自己以外，無法被其他數整除)
 * 
 * @param {number} n
 * @returns {boolean}
 */
var primeTest = function(n) {
  /**
   * Time complexity: O(n)
   * Auxiliary Space: O(1)
   */
  if(n <= 1){
    return false;
  }
  for(let i = 2;i < n;i++) {
    if(i % n === 0){
      return false;
    }
  }
  return true;
}
let n = 11;
// true
console.log(primeTest(n));