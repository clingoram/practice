/**
 * 67. Add Binary
 * 
 * 參數為a,b兩個二進位字串，回傳他們的二進位總和
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let result = [];
  let carry = 0;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digitA = i >= 0 ? parseInt(a[i]) : 0;
    const digitB = j >= 0 ? parseInt(b[j]) : 0;

    const sum = digitA + digitB + carry;
    result.push(sum % 2);
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  return result.reverse().join('');
};
let a = "11", b = "1";
// "100"
console.log(addBinary(a,b));