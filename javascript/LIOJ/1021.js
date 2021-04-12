/* 1021 印金字塔

一共會有N層
第I層會有2N-1個星星(奇數)
星星會置中
需要N-I個空白
*/
function printPy(n) {
  if (n === null) {
    return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(printLayer(i, n));
  }
}
function printLayer(i, n) {
  let print = repeat(' ', n - i) + repeat('*', 2 * i - 1);
  return print;
}
function repeat(str, n) {
  let s = '';
  for (let i = 1; i <= n; i++) {
    s += str;
  }
  return s;
}
const as = 10;
console.log(printPy(as));