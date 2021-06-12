/*
Find the stray number

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

input array是奇數長度的int，數字當中所有都一樣，只有一個數值不同
input array int-length
return int with one unique number
 */
function stray(numbers) {
  if (numbers.length < 1) {
    return;
  }

  // map計算出現過的次數，最少的return
  let m = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    // if (m.has(element)) {
    // 	m.set(element, m.get(element) + 1);
    // } else {
    // 	m.set(element, 1);
    // }
    m.has(element) ? m.set(element, m.get(element) + 1) : m.set(element, 1);
  }

  for (const [key, value] of m.entries()) {
    if (value <= 1) {
      return key;
    }
  }
}
let numberStray = [1, 1, 1, 1, 5];
// return 5
console.log(stray(numberStray));