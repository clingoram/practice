/**
 * Sum of Digits / Digital Root
 * 
 * Digital root is the recursive sum of all the digits in a number.
 * 
 * Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
 * 
 * Examples
 * 16  -->  1 + 6 = 7
 * 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
 * 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
 * 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
 */
function digital_root(n) {
  /**
   * Input int.
   * Output int.
   * 
   * 給一個數字，把該數字每位數做加總直到數字是單位數為止
   * EG.
   * 36 => 3+6 = 9
   * 1256 => 1+2+5+6 = 14 => 1+4 = 5
   */

  // Solution 1.Runtime took 717 ms.
  while (n > 9) {
    let sum = 0;
    while (n) {
      let floor = n % 10;
      n = parseInt(n / 10);
      sum = floor + sum;
    }
    n = sum;
  }
  return n;

  // Solution 2.Runtime took 784 ms.
  // return (n - 1) % 9 + 1;
}
let num = 456;
// 6 
console.log(digital_root(num));