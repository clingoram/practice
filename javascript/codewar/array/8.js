/**
 * Odd-heavy Array
 * 
 * An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.
 * 
 * eg.
 * Array [11,4,9,2,8] is odd-heavy 
 * because:- its odd elements [11,9] are greater than all the even elements [4,2,8]
 * 
 * Array [11,4,9,2,3,10] is not odd-heavy
 * because:- one of it's even element 10 from [4,2,10] is greater than two of its odd elements [9,3] from [ 11,9,3]
 * write a function called isOddHeavy or is_odd_heavy that accepts an integer array and returns true if the array is odd-heavy else return false.
 * 
 * @param n 
 * @returns 
 */
function isOddHeavy(n) {
  /*
  給一個數字(可能會有負數)陣列，找出該陣列index中所有的奇數odd elements是否大於該陣列中index所有的偶數 even elements
  回傳true(odd array > even array) / false(even array > odd array)
  
  全部檢查，若其中一個奇數沒有大於偶數 = false
  */
  const odd = [];
  const even = [];
  for (let i = 0; i < n.length; i++) {
    if (i % 2 === 0) {
      even.push(n[i]);
    } else {
      odd.push(n[i]);
    }
  }
  return JSON.stringify(odd) > JSON.stringify(even);
}