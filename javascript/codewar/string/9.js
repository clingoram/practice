/**
 * altERnaTIng cAsE <=> ALTerNAtiNG CaSe
 * 
 * Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
 * 
 * "hello world".toAlternatingCase() === "HELLO WORLD"
 * "HELLO WORLD".toAlternatingCase() === "hello world"
 * "hello WORLD".toAlternatingCase() === "HELLO world"
 * "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
 * "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
 * "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
 * "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
 * As usual, your function/method should be pure, i.e. it should not mutate the original string.
 */
String.prototype.toAlternatingCase = function () {
  /*
  參數字串this 小寫變大寫；大寫變小寫
  */
  // Solution 1.
  let str = '';
  for (let i = 0; i < this.length; i++) {
    // 大寫
    if (this[i].charCodeAt() >= 65 && this[i].charCodeAt() <= 90) {
      str += this[i].toLowerCase();
    } else if (this[i].charCodeAt() >= 97 && this[i].charCodeAt() <= 122) {
      // 小寫
      str += this[i].toUpperCase();
    } else {
      str += this[i];
    }
  }
  return str;

  // Solution 2.
  // return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('');
}