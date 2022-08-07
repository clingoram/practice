/**
 * Double Char
 * 
 * Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
 * 
 * Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/
function doubleChar(str) {
  /*
  給一字串，把字串每個字重複2次並回傳成字串
  EG.
  Hello => HHeelloo
  */
  // Solution 1.Runtime took 773 ms.
  if (str.length === 0) {
    return;
  }

  let s = '';
  let split = str.split("");
  for (let i = 0; i < str.length; i++) {
    s += str[i] + split[i];
  }
  return s;

}
