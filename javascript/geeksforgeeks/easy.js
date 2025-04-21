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
// let n = 11;
// true
// console.log(primeTest(n));


/**
 * Check Power
 * 
 * Given two positive numbers x and y, check if y is a power of x or not.
 * 兩個正數x,y，檢查y是否是x的平方
 * 
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
var checkPower = function (x,y) {
  /**
   * Time complexity: O(Logxy)
   * Auxiliary space: O(1)
   */
  // if(x === 1){
  //   return y === 1;
  // }
  // let pow = 1;
  // while(pow < y){
  //   pow *= x;
  // }
  // return pow === y;


  // solution 2.
  /**
   * Time complexity: O(1)
   * Auxiliary space: O(1)
   */
  let res = Math.log(x) / Math.log(y);
  return res === Math.floor(res);
}
let x = 10, y = 1;
// True
console.log(checkPower(x,y));

/**
 * Distance between Two Points
 * 
 * You are given two coordinates (x1, y1) and (x2, y2) of a two-dimensional graph. Find the distance between them.
 * 
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns {number}
 */
var distance = function (x1,y1,x2,y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
let x1 = 3,y1 = 4,x2 = 7, y2 = 7;
// 5
console.log(distance(x1,y1,x2,y2));

/**
 * Valid Triangle
 * 
 * Given three sides, check whether triangle is valid or not.
 * 
 * 給3個數字，檢查他們是否能組成三角形
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {string} Valid or Invalid
 */
var validTriangle = function(a,b,c) {
  // 三角形任兩邊和 > 剩下的一邊

  /**
   * Time Complexity: O(1)
   * Auxiliary Space: O(1)
   */
  let res = "Invalid";
  if((a + b) > c || (b + c) > a || (c + a) > b){
    res = "Valid";
  }
  return res;
}
let a = 7, b = 10, c = 5;
// Valid
console.log(validTriangle(a,b,c));

/**
 * Factorial of a Number
 * 
 * Given the number n (n >=0), find its factorial. 
 * Factorial of n is defined as 1 x 2 x … x n. 
 * For n = 0, factorial is 1. 
 * We are going to discuss iterative and recursive programs in this post.
 * 
 * @param {number} n
 * @returns {number}
 */
var factorial = function (n) {
  /**
   * Time Complexity: O(n)
   * Auxiliary Space: O(1)
   */
  let res = 1;
  for (let i = 2; i <= n; i++){
    res *= i;
  }
  return res;
}
// let n = 5;
// 120
// console.log(factorial(n));

/**
 * Square Root
 * 
 * Given a positive integer n, find its square root. If n is not a perfect square, then return floor of √n.
 * 
 * @param {number} n
 * @returns {number}
 */
var squareRoot = function (n) {
  /**
   * Time Complexity – O(logn)
   * Auxiliary Space – O(1)
   */
  return Math.floor(Math.sqrt(n));
} 
// let n = 11;
// 3
// console.log(squareRoot(n));

/**
 * Largest in an Array
 * 
 * Given an array arr. The task is to find the largest element in the given array. 
 *
 * @param {number[]} arr
 * @returns {number}
 */
var findMax = function(arr) {
  // Solution 1.
  // O(n) Time and O(1) Space
  // return Math.max(...arr);

  // Solution 2.
  // O(n) Time and O(1) Space
  let tempMax = arr[0];
  for(let i = 0;i < arr.length;i++) {
    if(arr[i] > tempMax){
      tempMax = arr[i];
    }
  }
  return tempMax;
}
let n = [12,6,23,9];
// 23
console.log(findMax(n));

/**
 * Second Largest in an array
 * 
 * Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.
 * Note: If the second largest element does not exist, return -1.
 * 
 * 找出陣列中第二大的元素並回傳，若沒有則回傳-1
 * 
 * @param {number[]} arr
 * @returns {number}
 */
var secLargest = function (arr){
  // desc
  arr.sort((a,b) => b - a);
  let ans = -1;
  for(let i = 0;i < arr.length;i++) {
    if(arr[i] > arr[i + 1] && i === 1){
      ans = arr[i];
    }
  }
  return ans;
}
// let arr = [12, 35, 1, 10, 34, 1];
// 34
let arr = [10,10,10];
// -1
console.log(secLargest(arr));