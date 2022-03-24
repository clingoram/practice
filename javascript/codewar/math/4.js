/**
 * Is it even?
 * 
 * In this Kata we are passing a number (n) into a function.
 * Your code will determine if the number passed is even (or not).
 * 
 * The function needs to return either a true or false.
 * Numbers may be positive or negative, integers or floats.
 * 
 * Floats with decimal part non equal to zero are considered UNeven for this kata.
 */
function testEven(n) {
  /*
  N = 正數或負數或有小數點的數字，若該數是奇數，回傳false，反之回傳true
  */
  // solution 1.
  let abs = Math.abs(n);
  if (abs % 2 === 0) {
    return true;
  }
  return false;

  // solution 2.
  // return n % 2 === 0;
}