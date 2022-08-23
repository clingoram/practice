'use strict';

/**
 * CamelCase
 * 
 * There is a sequence of words in CamelCase as a string of letters, s , having the following properties:
 * 
 * It is a concatenation of one or more words consisting of English letters.
 * All letters in the first word are lowercase.
 * For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
 * Given s, determine the number of words in s.
 * 
 * Example
 * s = oneTwoThree 
 * There are  words in the string: 'one', 'Two', 'Three'.
 * 
 * Function Description
 * Complete the camelcase function in the editor below.
 * 
 * camelcase has the following parameter(s):
 * string s: the string to analyze
 * Returns:
 * int: the number of words in s
 * 
 * Input Format
 * A single line containing string .
 * 
 * 
 * Sample Input:
 * saveChangesInTheEditor
 * Sample Output:
 * 5
 * Explanation
 * String  contains five words:
 * save
 * Changes
 * In
 * The
 * Editor
 */
const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'camelcase' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function camelcase(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) {
      count++;
    }
  }
  return count + 1;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = camelcase(s);

  ws.write(result + '\n');

  ws.end();
}
