/**
 * 
 * Capitalization and Mutability
 * 
 * Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.
 * 
 * Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).
 * 
 * Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
 */
function capitalizeWord(word) {
  /**
   * 給一個字串，把該字串變成字首大寫的文字
   * 
   * Input a string with lengths from 1 to 10 characters.
   * Output a string with Capitalize.
   */
  return word[0].toUpperCase() + word.slice(1);
}