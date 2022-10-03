/**
 * Fake Binary
 * 
 * Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
 * Note: input will never be an empty string
 */
function fakeBin(x) {
  /*
  參數是由資料型態為字串的數字X，把該字串任何一個數字小於5的以0代替，大於等於5的以1代替
  以字串型態回傳
  */
  let array = x.split('');
  let str = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 5) {
      str += 0;
    } else {
      str += 1;
    }
  }
  return str;

  // Solution 2.
  // return x.split('').map(n => n < 5 ? 0 : 1).join('');
}