/**
 * Disemvowel Trolls
 * 
 * Trolls are attacking your comment section!
 * 
 * A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
 * 
 * Your task is to write a function that takes a string and return a new string with all vowels removed.
 * 
 * For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
 * 
 * Note: for this kata y isn't considered a vowel.
 */
function disemvowel(str) {
  /*
  input str = 字串
  移除該字串中的母音
  aeiouAEIOU
  */
  // Solution 1.Runtime took 883 ms.
  // 使用正規表達式把句子中的母音移除
  return str.replace(/[aeiouAEIOU]/g, "");
}