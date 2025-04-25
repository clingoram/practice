/**
 * 3 Divisors
 * 
 * Given a number n, print all numbers in the range from 1 to n having exactly 3 divisors. 
 * @param {number} n
 * @returns {number[]}
 */
var threeDivisor = function(n) {
    let ans = [];
    // 計算n整除的有幾個
    function countDivisors(n){
      let count = 0;
      for(let i = 1;i <= n;i++){
        if(n % i === 0){
          count++;
        }
      }
      return count;
    }
   
    for(let i = 1;i <= n;i++) {
      // count = 3的
      if(countDivisors(i) === 3){
        ans.push(i);
      }
    }
    return ans;
}
// let n = 16;
// Output: 4 9
// Explanation: 4 and 9 have exactly three divisors.
// console.log(threeDivisor(n));

/**
 * Divisible by 4
 * 
 * Given a number, the task is to check if a number is divisible by 4 or not. 
 * The input number may be large and it may not be possible to store even if we use long long int.
 * 
 * 是否能被4整除
 * 
 * @param {number} n
 * @returns {boolean}
 */
var divisibleByFour = function(n) {
    /**
     * Time Complexity – O(1)
     * Auxiliary Space – O(1)
     */
    return n % 4 === 0;
}
// let n = 1124;
// true
// console.log(divisibleByFour(n));

/**
 * Divisibility by 11
 * 
 * Given a number, the task is to check if the number is divisible by 11 or not. 
 * The input number may be large and it may not be possible to store it even if we use long long int.
 * 
 * @param {number} n
 * @returns {boolean}
 */
var dividibleBy11 = function(n) {
  /**
   * Time Complexity: O(1)
   * Auxiliary Space: O(1)
   */
    return n % 11 === 0;
}
// let n = 76945;
// true
// console.log(dividibleBy11(n));

/**
 * Divisibility by 13
 * 
 * Given a large number, the task is to check if the number is divisible by 13 or not.
 * 
 * @param {number} n
 * @returns {boolean}
 */
var dividibleBy13 = function(n) {
  /**
   * Time Complexity: O(1)
   * Auxiliary Space: O(1)
   */
    return n % 13 === 0;
}
let n = 637;
// true
console.log(dividibleBy13(n));