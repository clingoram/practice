/**
 * Check same case
 * 
 * Write a function that will check if two given characters are the same case.
 * 
 * If either of the characters is not a letter, return -1
 * If both characters are the same case, return 1
 * If both characters are letters, but not the same case, return 0
 * Examples
 * 'a' and 'g' returns 1
 * 'A' and 'C' returns 1
 * 'b' and 'G' returns 0
 * 'B' and 'g' returns 0
 * '0' and '?' returns -1
 * 
 * @param a 
 * @param b 
 * @returns 
 */

function sameCase(a, b) {

  /*
  給兩個參數
  若任一個參數不是字母，回傳-1
  若兩個參數同樣是大寫或小寫，回傳1
  若兩個都是字母但兩個都不是大寫或小寫，回傳0
  
  結論:
  兩者必須都是字母且同樣都是大寫或小寫
  */
  // Solution 1.Runtime took 944 ms.
  let pattern = /[a-zA-Z]/;
  if (pattern.test(a) === false || pattern.test(b) === false) {
    return -1
  }
  if (a === a.toUpperCase() && b === b.toUpperCase() || a === a.toLowerCase() && b === b.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
}