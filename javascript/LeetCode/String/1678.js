/*
1678. Goal Parser Interpretation

Difficulty:Easy

You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

1.把字串中的()改成o
2.(al)改成al
3.組合並回傳字串

Constraints:
1 <= command.length <= 100
command consists of "G", "()", and/or "(al)" in some order.

Example 1:
Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".

Example 2:
Input: command = "G()()()()(al)"
Output: "Gooooal"

Example 3:
Input: command = "(al)G(al)()()G"
Output: "alGalooG"
*/

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    // 把字串分別切割開來
    // 個別表示意思 () => o;(al)=>al
    // 重組
    return command.split("()").join("o").split("(al)").join("al");
};
const command = "G()(al)";
console.log(`The result of interpret is ${interpret(command)}`);