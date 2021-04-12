/*
Array plus array
Difficulty:Easy

2個陣列，和在一起並加總
input int
return number
*/
function arrayPlusArray(arr1, arr2) {
  if (!arr1 || !arr2) {
    return;
  }

  // combine array:
  // let combineArray = arr1.concat(arr2);

  // clone array another version,same ar concat:
  let combineArray = [...arr1, ...arr2];

  // reduce:
  return combineArray.reduce((prev, current) => {
    return prev + current
  }, 0);

  // reduce another version
  // return combineArray.reduce((prev, current) => prev + current, 0);

  // foreach:
  // let total = 0
  // combineArray.forEach((a) => {
  // 	total += a;
  // });
  // return total;
}
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// should return 21
console.log(arrayPlusArray(a1, a2));