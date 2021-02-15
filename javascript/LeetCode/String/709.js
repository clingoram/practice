/*
709. To Lower Case
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

Example 1:
Input: "Hello"
Output: "hello"

Example 2:
Input: "here"
Output: "here"

Example 3:
Input: "LOVELY"
Output: "lovely"
*/

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        // 方法返回 0 到 65535 之间的整数，表示给定索引处的 UTF-16 代码单元
        // String.prototype.charCodeAt() can convert string characters to ASCII numbers.
        let ascii = str.charCodeAt(i);
        // 65～90號為26個大寫英文字母，97～122號為26個小寫英文字母
        if (ascii >= 65 && ascii < 97) {
            // 90+32=122->小寫
            ascii += 32;
        }
        // use String.fromCharCode(10) that convert numbers to equal ASCII character. 
        // This function can accept multiple numbers and join all the characters then return the string. 
        result += String.fromCharCode(ascii);
    }
    return result;
};
const str = "Hello";
console.log(toLowerCase(str));