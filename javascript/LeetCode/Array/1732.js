/*
 1732. Find the Highest Altitude

There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

n == gain.length
1 <= n <= 100
-100 <= gain[i] <= 100


array and length = n
Return the highest altitude of a point.

-----------------------------------------
Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.


Input: gain = [-4,-3,-2,-1,4,3,2]
Output: 0
Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

Let's note that the altitude of an element is the sum of gains of all the elements behind it
Getting the altitudes can be done by getting the prefix sum array of the given array


 */
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    // solution 1:
    // let array = gain[0];
    // for (let i = 0; i < gain.length - 1; i++) {
    //     gain.push(array[i] + gain[i + 1]);
    // }
    // array.unshift(0);

    // return Math.max.apply(0, array);

    // solution 1:
    let max = 0;
    gain.reduce((sum, value) => {
        max = (sum + value >= max) ? sum + value : max;
        // console.log(sum); // 0,-5,-4,1,1
        // console.log(value); // -5,1,5,0,-7
        return sum + value;
    }, 0)
    return max;

    // solution 3:
    // let max = 0;
    // let res = 0;
    // for (let i = 0; i < gain.length; i++) {
    //     res = res + gain[i];
    //     max = Math.max(max, res);
    // }
    // return max;
};
/*
Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.


Input: gain = [-4,-3,-2,-1,4,3,2]
Output: 0
Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

Let's note that the altitude of an element is the sum of gains of all the elements behind it
Getting the altitudes can be done by getting the prefix sum array of the given array
*/
const arr = [-5, 1, 5, 0, -7];
console.log(largestAltitude(arr));
