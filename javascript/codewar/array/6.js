/**
 * Convert number to reversed array of digits
 * 
 * Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
 * 
 * Example:
 * 348597 => [7,9,5,8,4,3]
 * 0 => [0]
 */
function digitize(n) {
  /*
  input n為非負數的數字，把該數字各別分開並反序後，以陣列方式呈現
  EG.64 => [4,6]
  
  1.數字轉成字串型態 int.toString()
  2.切割成陣列 step1.split()
  3.反轉 array.reverse()
  4.把陣列中的字串轉成數字 map(Number)
  */
  // Runtime took 829 ms.
  return n.toString().split("").reverse().map(Number);
}