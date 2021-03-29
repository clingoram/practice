/*
LIOJ 1010 - 靈魂伴侶

a是用空格分隔的正整數
如果分隔後，兩個數字相等
return Yes;else return false;
*/
function soulMate(n) {
    // string.toString() 將指定的陣列或元素轉成字串
    // 不會改變原陣列
    // 一個表示指定的數組及其元素的字符串。
    let s = n.toString().split(" ");
    let ans = '';
    if (s[0] === s[1]) {
        ans = 'Yes';
    } else {
        ans = 'No';
    }
    return ans;
}
const a = '30 30';
// return false
console.log(soulMate(a));