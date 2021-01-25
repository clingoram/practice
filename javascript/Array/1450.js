/*

1450. Number of Students Doing Homework at a Given Time

Given two integer arrays startTime and endTime and given an integer queryTime.

The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].

Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.


Constraints:

startTime.length == endTime.length
1 <= startTime.length <= 100
1 <= startTime[i] <= endTime[i] <= 1000
1 <= queryTime <= 1000

-----------------------------------
Note:
starttime.length == endtime.length
starttime + endtime = querytime

-----------------------------------------------
Example 1:
Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
Output: 1
Explanation: We have 3 students where:
The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.

Example 2:
Input: startTime = [4], endTime = [4], queryTime = 4
Output: 1
Explanation: The only student was doing their homework at the queryTime.

Example 3:
Input: startTime = [4], endTime = [4], queryTime = 5
Output: 0

Example 4:
Input: startTime = [1,1,1,1], endTime = [1,3,2,4], queryTime = 7
Output: 0

Example 5:
Input: startTime = [9,8,7,6,5,4,3,2,1], endTime = [10,10,10,10,10,10,10,10,10], queryTime = 5
Output: 5

*/

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
    let count = 0;
    if (startTime.length != endTime.length) {
        return;
    }

    for (let i = 0; i < startTime.length; i++) {
        // console.log(endTime[i]);
        let start = startTime[i];
        let end = endTime[i];

        if (start <= queryTime && end >= queryTime) {
            count++;
        }
    }
    return count;

};
const startTime = [1, 2, 3], endTime = [3, 2, 7], queryTime = 4;
console.log(busyStudent(startTime, endTime, queryTime));


// -------------------------------------------------------------------------
// use reduce()
var busyStudent_reduce = function (startTime, endTime, queryTime) {
    if (startTime.length != endTime.length) {
        return;
    }

    // current = starttime
    let result = startTime.reduce((total, current, index) =>
        current <= queryTime && endTime[index] >= queryTime ? total + 1 : total, 0
    );

    return result;
};
const start = [1, 2, 3], end = [3, 2, 7], target = 4;
console.log(busyStudent_reduce(start, end, target));