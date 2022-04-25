/**
 * Simple string characters
 * 
 * In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.
 * 
 * Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
 * --the order is: uppercase letters, lowercase, numbers and special characters.
 */
function solve(s) {
  /*
  給一個字串，內含特殊符號、大小寫英文字母和數字
  以陣列型態回傳該字串大寫有幾個、小寫有幾個、數字有幾個、特殊符號有幾個
  */
  // Solution 1.Runtime took 637 ms.
  let result = [];
  let upperCase = s.length - s.replace(/[A-Z]/g, '').length;
  let lowerCase = s.length - s.replace(/[a-z]/g, '').length;
  let number = s.length - s.replace(/[0-9]/g, '').length;
  let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/gi;
  let allFoundCharacters = s.match(specialChars).length;

  return result.concat(upperCase, lowerCase, number, allFoundCharacters);
}