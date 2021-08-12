/**
 * 506. Relative Ranks
 * Difficulty:Easy
 *
 * You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.
 * The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:
 *
 * The 1st place athlete's rank is "Gold Medal".
 * The 2nd place athlete's rank is "Silver Medal".
 * The 3rd place athlete's rank is "Bronze Medal".
 * For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
 * Return an array answer of size n where answer[i] is the rank of the ith athlete.
 *
 * rank 1 = "Gold Medal"; 2 = "Silver Medal";3 = "Bronze Medal"; 4 = "4";5 = "5"
 * value最大的 = rank 1，由下遞減
 * Output: array
 * ---------------------------------------------
 * Example 1:
 * Input: score = [5,4,3,2,1]
 * Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
 * Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].
 *
 * Example 2:
 * Input: score = [10,3,8,9,4]
 * Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
 * Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].
 *
 * Constraints:
 * n == score.length
 * 1 <= n <= 104
 * 0 <= score[i] <= 106
 * All the values in score are unique.
 */
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {

  // With edge case.Runtime took 132 ms.
  // Without edge case.Runtime took 124 ms.

  // edge case
  // values are unique
  if (score.length <= 0) {
    return;
  }
  let m = new Map();
  for (let i = 0; i < score.length; i++) {
    m.has(score[i]) ? m.set(score[i], m.get(score[i]) + 1) : m.set(score[i], 1);
  }
  for (const [key, value] of m.entries()) {
    if (value >= 2) {
      return;
    }
  }

  // rank 1 = "Gold Medal"; 2 = "Silver Medal";3 = "Bronze Medal"; 4 = "4";5 = "5"
  // value最大的 = rank 1，由下遞減

  // copy array.方法1:
  // let ranks = score.slice(0).sort((a, b) => b - a);
  // copy array.方法2(效能較佳):
  let ranks = [...score].sort((a, b) => b - a);

  let array = [];
  for (let i = 0; i < score.length; i++) {
    if (score[i] === ranks[0]) {
      array.push("Gold Medal");
    } else if (score[i] === ranks[1]) {
      array.push("Silver Medal");
    } else if (score[i] === ranks[2]) {
      array.push("Bronze Medal");
    } else {
      array.push((ranks.indexOf(score[i]) + 1).toString());
    }
  }
  return array;
};
const score = [10, 3, 8, 9, 4];
// ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
console.log(findRelativeRanks(score));