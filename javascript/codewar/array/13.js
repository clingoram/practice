/**
 * Sort and Star
 * 
 * You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
 * 
 * The returned value must be a string, and have "***" between each of its letters.
 * You should not remove or add elements from/to the array.
 */
function twoSort(s) {
  /**
   * 給一個字串陣列，回傳該陣列在經過排序後的第一個元素，並把該元素字串每一個字母以"***"做區隔
   */
  // let sort = s.sort();
  // let array = sort[0].split("");
  // let star = "***"
  // let str = "";
  // for (let i = 0; i < array.length; i++) {
  //   str += array[i] + star;
  // };
  // return str.substring(0, str.length - 3);

  // Solution 2.
  return s.sort()[0].split('').join('***');
}