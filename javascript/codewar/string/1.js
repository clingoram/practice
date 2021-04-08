
/*
codewar - 
Count characters in your string

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

Related Tags:
FUNDAMENTALS STRINGS ASCII CHARACTER ENCODINGSFORMATS

-----------------------------------------------------
給一個字串 EG:aba
去計算每個字母出現的次數
回傳obj格式 => {a:2,b:1}
若字串是空白的，回傳:{}
 */
function countString(string) {
  if (string.length === 0) {
    return {};
  }

  // 把字串拆開
  // 計算每個字母出現的次數
  // use Map
  let splitAlphabets = string.split("");
  let result = {};

  // solution 1: not done 
  return splitAlphabets.reduce((prev, current) => {
    // A solution:
    // prev[current] = (prev[current] || 0) + 1;
    // return prev;

    // B solution:
    prev[current] ? prev[current]++ : (prev[current] = 1);
    return prev;
  }, {});

  // solution 2:
  // splitAlphabets.forEach(element => {
  // result[element] ? result[element]++ : result[element] = 1;
  // });
  // return result;


  // solution 3:
  // let counts;
  // for (let i = 0; i < string.length; i++) {
  // 	// Get this character
  // 	// Not all engines support [] on strings
  // 	let chr = string.charAt(i);

  // 	// Get the count for it, if we have one; we'll get `undefined` if we
  // 	// don't know this character yet
  // 	counts = result[chr];

  // 	// If we have one, store that count plus one; if not, store one
  // 	// We can rely on `count` being falsey if we haven't seen it before,
  // 	// because we never store falsey numbers in the `counts` object.
  // 	result[chr] = counts ? counts + 1 : 1;
  // }
  // return result;

}
const str = 'aba';
console.log(countString(str));