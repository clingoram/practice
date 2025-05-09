/**
 * Sort array by string length
 * 
 * Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
 * 
 * For example, if this array were passed as an argument:
 * ["Telescopes", "Glasses", "Eyes", "Monocles"]
 * 
 * Your function would return the following array:
 * ["Eyes", "Glasses", "Monocles", "Telescopes"]
 * 
 * All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
 * 
 * @param integer [] array
 * @return integer []
*/
 function sortByLength (array) {
    /*
    給一個字串陣列，以排序(小到大)的方式回傳陣列
    */
//    Solution 1.Runtime took 827 ms.
    return array.sort(function (a,b){
      return a.length - b.length;
    });
  };