/**
 * Vowel remover
 * 
 * Create a function called shortcut to remove all the lowercase vowels in a given string.
 * 
 * Examples
 * shortcut("codewars") // --> cdwrs
 * shortcut("goodbye")  // --> gdby
 * Don't worry about uppercase vowels.
 * 
 * Related Tags:FUNDAMENTALS STRINGS PARSING ALGORITHMS
 * 
 * 找尋字串中是否有包含小寫的母音，若有，把小寫母音刪除
 * input: string with lowercase vowels.
 * return: string without lowercase vowels.
 * 
 * @param {string} string 
 */
function shortcut(string) {
  // 列出母音有哪些
  // 把字串拆開逐一跟targetVewels對照
  // 把字串中的母音移除，再重新組合

  // solution 1:
  // 自己想很久!!
  let targetVowel = {
    'a': 'a',
    'e': 'e',
    'i': 'i',
    'o': 'o',
    'u': 'u'
  };
  let ans = [];

  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    if (!targetVowel[element]) {
      ans.push(element);
    }
  }
  return ans.join('');

  // solution 2:
  // return string.replace(/[aeiou]/g, '');

  // solution 3:
  // return string.split("").filter((x) => {
  // return ['a', 'e', 'i', 'o', 'u'].indexOf(x) === -1;
  // }).join("");
}
let string = 'complain';
// return: cmpln
console.log(shortcut(string));