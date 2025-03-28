/**
 * 2210. Count Hills and Valleys in an Array
 * 
 * 參數為一個數值陣列，找出在該鎮列元素中，左右是否有比目前元素大，若目前元素>左且目前元素>右，則為hill，
    反之，目前元素<左且目前元素<右，則為valley
    計算共有幾個hill&valley
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    // if current element > left element & current element > right element is hill.
    // if current element < left element & current element < right element is valley.
    
    let right = 0;
    let left = nums[0];
    // start from index 1.
    for(let i = 1;i < nums.length - 1;i++) {
        let current = nums[i];
        let next = nums[i + 1];
        if((left < current && current > next) || (left > current && current < next)) {
        right++;
        left = nums[i];
        }
    }
    return right;
};
let nums = [2,4,1,1,6,5];
// 3
console.log(countHillValley(nums));