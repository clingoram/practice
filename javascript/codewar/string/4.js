/**
 * Find the duplicate alphabet
 * 找字
 * 
 * 給一字串，該字串有重複出現的字母，要找出該字串"第一個"重複出現次數>1的字母並回傳
 * 
 * EG:
 * DBCABA 
 * result: B
 * 
 * Input string
 * return string or null
 */
function findLetter(string) {
  // edge case:
  // if empty string,return null;
  // if string length < 1,return null
  if (string.length === 0) {
    return;
  }
  // 假設不知道第一個重複出現的是哪個字母，如何回傳該字母 => 要能維持跟原字串一樣的順序且找第一個出現次數>=2

  // solution 1
  // let result = {};
  // [...string].forEach(element => {
  // 	result[element] ? result[element]++ : result[element] = 1;
  // });
  // for (const [key, value] of Object.entries(result)) {
  // 	if (value >= 2) {
  // 		return key;
  // 	}
  // }

  // solution 2
  let m = new Map();
  // way 1
  [...string].forEach(element => {
    m.has(element) ? m.set(element, m.get(element) + 1) : m.set(element, 1);
  })
  // way 2
  // for (let i = 0; i < string.length; i++) {
  // 	m.has(string[i]) ? m.set(string[i], m.get(string[i]) + 1) : m.set(string[i], 1);
  // }

  for (const [key, value] of m.entries()) {
    if (value >= 2) {
      return key;
    }
  }
  return;
}
let letter = 'DBCABAA';
// should return: 'B' as string
// D:1,	B:2,	C:1,	A:3
// let letter = 'DADBCEFB'; // D
console.log(findLetter(letter));

