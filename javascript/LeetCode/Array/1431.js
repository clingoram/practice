/*
Kids With the Greatest Number of Candies

Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

--------------------------------------------------
EG.
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: 
Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 

---------------------------------------------------
array(candies)，個別加上extraCandies的值=最大值(true)，小則(false)
candies 的element和extraCandies 值相加，必須是candies中最大數(true)，小則回false

2+3=5 =>true
3+3=6 =>true
5+3=8 =>true
1+3=4 =>false

*/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    // solution 1:
    // find the max value in the array,can use be use: Math.max(...,candies) which have same result
    const max = Math.max.apply(null, candies);
    // to plus extraCnadies into the array
    const result = candies.map((number => number + extraCandies >= max));

    return result;

    // solution 2:
    // let max = Math.max(...candies);
    // return candies.map((x) => (x + extraCandies >= max) ? true : false);
};
const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));