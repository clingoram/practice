/*
1108. Defanging an IP Address

Difficulty:Easy

Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

1.把IP address中的"."替換成[.]


Example 1:
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Example 2:
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
 
Constraints:
The given address is a valid IPv4 address.
*/
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {

    // solution 1:
    // return address.replaceAll(".", "[.]");

    // solution 2:
    return address.split('.').join('[.]');
};
const address = "1.1.1.1";
// return Output: "1[.]1[.]1[.]1"
console.log(`The result is ${defangIPaddr(address)}`);