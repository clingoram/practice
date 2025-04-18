/**
 * Merge two sorted arrays into one
 * 
 * You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
 * 
 * You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
 * 
 * Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
 * 
 * Examples
 * arr1 = [1, 2, 3, 4, 5];
 * arr2 = [6, 7, 8, 9, 10];
 * mergeArrays(arr1, arr2);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * 
 * arr3 = [1, 3, 5, 7, 9];
 * arr4 = [10, 8, 6, 4, 2];
 * mergeArrays(arr3, arr4);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * 
 * arr5 = [1, 3, 5, 7, 9, 11, 12];
 * arr6 = [1, 2, 3, 4, 5, 10, 12];
 * mergeArrays(arr5, arr6);  // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
 */
function mergeArrays(arr1, arr2) {
  /**
   * Input 2 int array.
   * Output 1 int array.
   * 
   * 1.sort asc.
   * 2.remove duplicated element.
   * 3.if both 2 array are empty,return empty array.
   * 4.arr1 and arr2 may sorted on different order. 
   * 
   */

  // 1.Sorted in same order.
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  // 2.merge two array and remove duplicate elements.
  let combine = arr1.concat(arr2);
  let unique = [...new Set(combine)];
  return unique.sort((a, b) => a - b);

}
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));
// [1,2,3,4,5,7,9,10,11,12]