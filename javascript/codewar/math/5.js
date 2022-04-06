/**
 * Recursion #1 - Factorial
 * 
 * In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,
 * 
 * 5! = 5 * 4 * 3 * 2 * 1 = 120.
 * 
 * The value of 0! is 1.
 * 
 * #Your task
 * You have to create the function factorial that receives n and returns n!. You have to use recursion.
 * 
 * @param n integer 正數
 * 
 * @returns integer
 */
const factorial = n => {

  /**
   * 給一個正數，回傳該正數之前的數值相乘結果
   * 
   * EG.6 => 6 * 5 * 4 * 3 * 2 * 1 = 720
   * 
   */
  // Solution 1.Runtime took 668 ms.
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};