/*
20. Valid Parentheses
Difficulty:Easy

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Hints:
1.An interesting property about a valid parenthesis expression is that a sub-expression of a valid expression should also be a valid expression. (Not every sub-expression) e.g.
{ { } [ ] [ [ [ ] ] ] } is VALID expression
          [ [ [ ] ] ]    is VALID sub-expression
  { } [ ]                is VALID sub-expression
Can we exploit this recursive structure somehow?

2.What if whenever we encounter a matching pair of parenthesis in the expression, we simply remove it from the expression? This would keep on shortening the expression. e.g.
{ { ( { } ) } }
      |_|

{ { (      ) } }
    |______|

{ {          } }
  |__________|

{                }
|________________|

VALID EXPRESSION!

3.The stack data structure can come in handy here in representing this recursive structure of the problem. We can't really process this from the inside out because we don't have an idea about the overall structure. But, the stack can help us process this recursively i.e. from outside to inwards.

---------------------------------
輸入符號，內容可包含: (、)、{、}、[、]
必須要相同類型且一對(前後一致)
---------------------------------

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([)]"
Output: false

Example 5:
Input: s = "{[]}"
Output: true


Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let result = [];
    // 設obj
    let parentheses = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    // solution 1:
    // if (s.length % 2 !== 0 || s.length === 0) {
    //     return false;
    // }
    // for (let i = 0; i < s.length; i++) {
    //     if ((s.charAt(i) === '(' || s.charAt(i) === '{' || s.charAt(i) === '[') && (i !== s.length - 1)) {
    //         result.push(s.charAt(i));
    //     } else if (parentheses[s.charAt(i)] !== result.pop()) {
    //         return false;
    //     }
    // }
    // return true;

    // solution 2:
    // for (let i = 0; i < s.length; i++) {
    //     let bracket = s[i];
    //     if (parentheses[bracket]) {
    //         result.push(parentheses[bracket]);
    //     } else if (bracket !== result.pop()) {
    //         return false;
    //     }
    // }
    // // add ! to return the value into boolean
    // return !result.length;

    // solution 3:
    for (let i = 0; i < s.length; i++) {
        const element = s.charAt(i); // return specified index
        switch (element) {
            case '(':
                result.push(')');
                break;
            case '{':
                result.push('}');
                break;
            case '[':
                result.push(']');
                break;
            default:
                if (element !== result.pop()) {
                    return false;
                }
        }
    }
    return result.length === 0;
};
const s = "(]";
// return false
console.log(isValid(s));