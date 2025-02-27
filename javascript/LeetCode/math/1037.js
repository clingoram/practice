/**
 * 1037. Valid Boomerang
 * 
 * Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.
 * A boomerang is a set of three points that are all distinct and not in a straight line.
 * 
 * Hints:
 * 1.3 points form a boomerang if and only if the triangle formed from them has non-zero area.
 *  
 * Example 1:
 * Input: points = [[1,1],[2,3],[3,2]]
 * Output: true
 * 
 * Example 2:
 * Input: points = [[1,1],[2,2],[3,3]]
 * Output: false
 *  
 * 
 * Constraints:
 * points.length == 3
 * points[i].length == 2
 * 0 <= xi, yi <= 100
 * 
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  // (1 - 2) * (1 - 2) != (1 - 3) * (1 - 2)
  return (points[0][0] - points[1][0]) * (points[0][1] - points[2][1]) != (points[0][0] - points[2][0]) * (points[0][1] - points[1][1]);
};
let points = [[1, 1], [2, 2], [3, 3]];
// false
console.log(isBoomerang(points));