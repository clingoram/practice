/**
 * 2176. Count Equal and Divisible Pairs in an Array
 * 
 * 計算出陣列兩個相等的element，在相乘後能被K整除的有幾個，nums[index]其中一個可重複
 * nums至少必須要有2個重複element
 * 
 * nums的index i和j的element必須相等。nums[0] == nums[6] => 3 === 3;且i*j後的值必須要能被k整除
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let count = 0;
    for(let i = 0;i < nums.length;i++) {
     for(let j = i+1;j < nums.length;j++) {
       // element i === elelemt j and (index i * index j) % k === 0
       if(nums[i] === nums[j] && (i * j) % k === 0){
         count++;
       }
     }
    }
    return count;
};
let nums = [3,1,2,2,2,1,3], k = 2;
/**
* 4
* There are 4 pairs that meet all the requirements:
- nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
- nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
- nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
- nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.
*/
console.log(countPairs(nums,k))