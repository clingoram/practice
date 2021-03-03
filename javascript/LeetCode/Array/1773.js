/*
1773. Count Items Matching a Rule
Difficulty:Easy

You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.

Iterate on each item, and check if each one matches the rule according to the statement.

--------------------
1. item = array which has [type i,color i and name i] means the type, color, and name of the ith item
2. ruleKey and ruleValue have to match above. If ruleKey == color and ruleValue == color i
3. return the number of items that match rule number 2
--------------------

Example 1:
Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
Output: 1
Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

Example 2:
Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
Output: 2
Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.


Constraints:

1 <= items.length <= 104
1 <= typei.length, colori.length, namei.length, ruleValue.length <= 10
ruleKey is equal to either "type", "color", or "name".
All strings consist only of lowercase letters.
 */
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let count = 0;

    // array i: 0 = type i;1=color i;2=name i
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        if (ruleKey == 'type' && element[0] == ruleValue) {
            count++;
        } else if (ruleKey == 'color' && element[1] == ruleValue) {
            count++;
        } else if (ruleKey == 'name' && element[2] == ruleValue) {
            count++;
        }
    }

};
const items = [["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], ruleKey = "color", ruleValue = "silver";
// 1
console.log(countMatches(items, ruleKey, ruleValue));