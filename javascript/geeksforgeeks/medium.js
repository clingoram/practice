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
// let n = 637;
// true
// console.log(dividibleBy13(n));

/**
 * All Factor (Or Divisors)
 * 
 * Given a natural number n, print all distinct divisors of it.
 * 
 * Examples:
 * Input: n = 10       
 * Output: 1 2 5 10
 * Explanation: 1, 2, 5 and 10 are the factors of 10. 
 * 
 * Input: n = 100
 * Output: 1 2 4 5 10 20 25 50 100
 * Explanation: 1, 2, 4, 5, 10, 20, 25, 50 and 100 are factors of 100.
 * 
 * Input: n = 125
 * Output: 1 5 25 125
 * 
 * 找出n能整除的數
 * 
 * @param {number} n 
 * @returns {number[]}
 */
var factor = function(n) {
  /**
   * Time Complexity : O(n) 
   * Auxiliary Space : O(1)
   */
  let res = [];
  for(let i = 1;i <= n;i++) {
    if(n % i === 0){
      res.push(i);
    }
  }
  return res;
}
// let n = 10;
// [1,2,5,10]
// console.log(factor(n));

/**
 * Prime Factorization
 * 
 * Given an integer n, write a program to find and print all the prime factors of n. 
 * A prime factor is a prime number that divides n exactly (without leaving a remainder).
 * 
 * Examples:
 * Input: n = 36
 * Output: 2 2 3 3
 * Explanation: For n = 36, dividing by 2 twice and 3 twice gives the prime factors 2, 2, 3, 3.
 * 
 * Input: n=97
 * Output: 97 
 * Explanation: Since 97 is a prime number, it is its own prime factor.
 * 
 * Input: n = 50
 * Output: 2 5 5
 * Explanation: Dividing 50 by 2 once and 5 twice gives the prime factors 2, 5, 5.
 * 
 * 找出能整除n 的質數
 * 
 * 質數：在大於1的自然數中，除了和該數自身外，無法被其他自然數整除的數。反之則稱為合數（除了1和自己外，還能被其他數字整除）
 * 
 * @param {number} n 
 * @returns {number[]}
 */
var primeFactorization = function (n) {
  let res = [];
  while(n % 2 === 0){
    res.push(2);
    n = Math.floor(n / 2);
  }
  for(let i = 3;i <= Math.sqrt(n);i+=2) {
    while (n % i === 0){
      res.push(i);
      n = Math.floor(n / i);
    }
  
    if (n > 2){
      console.log(n + "");
    }
  }
  return res;
}
// let n = 36;
// [2,2,3,3]
// 36 / 2 ＝ 12; 12 / 2 = 6
// 36 / 3 ＝ 12; 12 / 3 = 4
// console.log(primeFactorization(n)); 

/**
 * Largest Prime factor
 * 
 * Given a positive integer n ( 1 <= n <= 1015). Find the largest prime factor of a number. 
 * 
 * Input: 6
 * Output: 3
 * Explanation Prime factor are 2 and 3. Largest of them is 3.
 * 
 * Input: 15
 * Output: 5
 * Explanation: Prime factors are 3 and 5. The largest of them is 5.
 * 
 * Input: 28
 * Output: 7
 * Explanation: Prime factors are 2 and 7. The largest of them is 7.
 * 
 * 
 * @param {number} n 
 * @returns {number}
 */
var largestPrimeFactor = function(n) {
  let maxPrime = -1;
  while(n % 2 === 0){
    maxPrime = 2;
    n/=2;
  }
  for(let i = 3;i *i < n;i+=2){
    while(n % i === 0){
      maxPrime = i;
      n /= i;
    }
  }
  if(n > 2){
    maxPrime = n;
  }
  return maxPrime;

}
// let n = 28;
// console.log(largestPrimeFactor(n));

/**
 * Modular Exponentiation
 * 
 * Modular Exponentiation is the process of computing: xy (mod  p). where x, y, and p are integers. 
 * It efficiently calculates the remainder when xy is divided by p or (xy) % p, even for very large y.
 * 
 * Examples : 
 * Input:  x = 2, y = 3, p = 5
 * Output: 3
 * Explanation: 2^3 % 5 = 8 % 5 = 3.
 * 
 * Input:  x = 2, y = 5, p = 13
 * Output: 6
 * Explanation: 2^5 % 13 = 32 % 13 = 6.
 * 
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} p 
 * @returns {number}
 */
var modularExpo = function(x,y,p) {
  return Math.pow(x,y) % p;
}
// let x = 2, y = 3, p = 5;
// console.log(modularExpo(x,y,p));

/**
 * nth Catalan Number
 * 
 * Catalan numbers occur in many interesting counting problems like the following.
 * Count the number of expressions containing n pairs of parentheses that are correctly matched.
 * Count the number of possible Binary Search Trees with n keys (See this)
 * Count the number of full binary trees (A rooted binary tree is full if every vertex has either two children or no children) with n+1 leaves.
 * Given a number n, return the number of ways you can draw n chords in a circle with 2 x n points such that no 2 chords intersect.
 * 
 */
var catalanN = function(n) {
  if(n <= 1){
    return 1;
  }
  let res = 0;
  for(let i = 0;i < n;i++) {
    res += catalanN(i) * catalanN(n - i - 1);
  }
  return res;
}
// let n = 6;
// 132
// console.log(catalanN(n));

/**
 * Binomial Coefficient
 * 
 * Given an integer values n and k, the task is to find the value of Binomial Coefficient C(n, k).
 * 
 * A binomial coefficient C(n, k) can be defined as the coefficient of x^k in the expansion of (1 + x)^n.
 * A binomial coefficient C(n, k) also gives the number of ways, disregarding order, that k objects can be chosen from among n objects more formally, 
 * the number of k-element subsets (or k-combinations) of a n-element set.
 * 
 * Examples
 * Input: n = 4, k = 2
 * Output: 6
 * Explanation: The value of 4C2 is (4 × 3) / (2 × 1) = 6.
 * 
 * Input: n = 5, k = 2
 * Output: 10
 * Explanation: The value of 5C2 is (5 × 4) / (2 × 1) = 10.
 * 
 * Input: n = 6, k = 3
 * Output: 20
 * Explanation: The value of 6C3 is (6 × 5 × 4) / (3 × 2 × 1) = 20.
 * 
 * @param {number} n 
 * @param {number} k 
 * @returns {number}
 */
var binomialCo = function(n,k) {
  if(k > n){
    return 0;
  }
  if(k === n || k === 0){
    return 1;
  }
  return binomialCo(n - 1,k - 1) + binomialCo(n - 1,k);
}
// let n = 4, k = 2;
// console.log(binomialCo(n,k));