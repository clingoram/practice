/*
Remove First and Last Character
Difficulty:Easy

給一個字串，移除字串前後一個字母
input string
return string
 */
function removeChar(str) {

  if (str.length <= 1) {
    return;
  }

  // solution 1:
  // return str.substring(1, str.length - 1);

  // solution 2:
  //  argument -1 is the same as 'str.length -1'
  return str.slice(1, -1);

};
const string = 'apple';
console.log(removeChar(string));