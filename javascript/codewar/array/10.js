/**
 * Testing 1-2-3
 * 
 * Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
 * 
 * Write a function which takes a list of strings and returns each line prepended by the correct number.
 * 
 * The numbering starts at 1. The format is n: string. Notice the colon and space in between.
 * 
 * Examples: (Input --> Output)
 * [] --> []
 * ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
 * 
 * @param array 
 * @returns 
 */
var number = function (array) {
  /*
  給一個字串陣列，把該陣列每個元素前面加上數字(數字從1開始)直到沒元素為止
  格式:
  ["數字: 元素"]
  */
  // Solution 1.Runtime took 818 ms.
  if (array.length === 0) {
    return [];
  }
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(`${i + 1}: ${array[i]}`);
  }
  return result;
}