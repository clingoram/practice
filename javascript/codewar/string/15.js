/**
 * Your order, please
 * 
 * Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
 * 
 * Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 * 
 * If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
 * 
 * Examples
 * "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
 * "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
 * ""  -->  ""
 */

function order(words) {
  /*
  input string with number.
  依據該字串內每個單字所屬的數字做asc排序並回傳正確順序
  */
  let convertToArray = words.split(' ');
  let numberPattern = /\d+/g;
  let result = "";
  const counts = {};

  for (let i = 0; i < convertToArray.length; i++) {
    let number = convertToArray[i].match(numberPattern);
    counts[number] = counts[i] ? convertToArray[i] : convertToArray[i];
  }

  for (key in counts) {
    if (counts.hasOwnProperty(key)) {
      result += " " + counts[key];
    }
  }
  return result.trim();

  // let convertToArray = words.split(' ');
  // let numberPattern = /\d+/g;
  // let result = [];
  // console.log(words.split(' '));

  // for (let i = 0; i < convertToArray.length; i++) {
  // 	let number = convertToArray[i].match(numberPattern);
  // convertToArray[i].stroke = convertToArray[i][number];
  // console.log(number);
  // let strPattern = convertToArray[i].replace(/[0-9]/g, '');
  // console.log(strPattern);
  // console.log(result[number]);
  // }

  // let newObjects = convertToArray.map(obj => {
  // 	return {
  // 		number: obj.number,
  // 		value: obj.convertToArray
  // 	}
  // })
  // console.log(newObjects);
}
let str = "4of Fo1r pe6ople g3ood th5e the2";
// "Fo1r the2 g3ood 4of th5e pe6ople"
// console.log(order(str));