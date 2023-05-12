/**
 * Find the capitals
 * 
 * Write a function that takes a single string (word) as argument. 
 * The function must return an ordered list containing the indexes of all capital letters in the string.
 * 
 * Example
 * Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
 * 
 * @param {*} word 
 */
var capitals = function (word) {
  /**
   * 給一個字串參數，以陣列型態回傳該參數每個大寫字母所在位置
   */
  let array = [];
  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
      array.push(i);
    }
  }
  return array;
};
console.log(capitals('CodEWaRs'));
// [0, 3, 4, 6]