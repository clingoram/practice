/**
 * 1365. How Many Numbers Are Smaller Than the Current Number
 * Difficulty:Easy
 *
 * Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
 *
 * Return the answer in an array.
 *
 * --------------------------------------
 * Input array(int)
 * Output array
 *
 * input給一個陣列，依據他的element位置，比較其他elements是否有比他自己小的，並算出有幾個elements比他還小
 * 若有比他自己小，回傳有幾個比他小，若沒有，則回傳0
 * 並把那些回傳的elements用成陣列
 * ---------------------------------------
 * Hints
 * Brute force for each array element.
 * In order to improve the time complexity, we can sort the array and get the answer for each array element.
 * --------------------------------------------
 *
 * Example 1:
 * Input: nums = [8,1,2,2,3]
 * Output: [4,0,1,1,3]
 * Explanation:
 * For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
 * For nums[1]=1 does not exist any smaller number than it.
 * For nums[2]=2 there exist one smaller number than it (1).
 * For nums[3]=2 there exist one smaller number than it (1).
 * For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
 *
 * Example 2:
 * Input: nums = [6,5,4,8]
 * Output: [2,1,0,3]
 * Explanation:
 * 6的所在index 0，index 1(5),index 2(4)，共有2個比6還小(5、4)，所以回傳2
 * 5的所在index 1，index 2(4)，共有1個比5還小(4)，所以回傳1
 * 4的所在index 2，是該陣列中最小的，所以回傳0
 * 8的所在index 3，index 0(6),index 1(5),index 2(4)，共有3個比8還小(6、5、4)，所以回傳3
 *
 * Example 3:
 * Input: nums = [7,7,7,7]
 * Output: [0,0,0,0]
 *
 *
 * Constraints:
 * 2 <= nums.length <= 500
 * 0 <= nums[i] <= 100
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    if (nums.length < 2) {
        return;
    }

    // solution 1
    return nums.map((num) => {
        let count = 0;

        nums.forEach((k) => {
            if (k < num) {
                count++;
            }
        });
        return count;
    })

    // let result = [];
    // solution 2
    // for (let i = 0; i < nums.length; i++) {
    // 	let count = 0;
    // 	for (let j = 0; j < nums.length; j++) {
    // 		if (nums[i] == nums[j]) {
    // 			continue;
    // 		}
    // 		if (nums[i] > nums[j]) {
    // 			count++;
    // 		}
    // 	}
    // 	result[i] = count;
    // }

    // solution 3
    // nums.forEach((x, index) => {
    // 	// x= element; index = index
    // 	let count = 0;
    // 	for (let i = 0; i < nums.length; i++) {
    // 		if (x == nums[i]) {
    // 			continue;
    // 		}
    // 		if (x > nums[i]) {
    // 			count++;
    // 		}
    // 	}
    // 	result[index] = count;
    // });
    // return result;
};

const array = [8, 1, 2, 2, 3];
//             0  1  2  3  4
console.log(smallerNumbersThanCurrent(array));