// debugger

/*
EG:
寫在程式開始執行的地方:
let functionName = 'twoSum';
let start = countTime(functionName);

放置於程式執行結束處:
let end = endTime(start);
console.log(end);
*/
/**
 * 放置於程式開始執行處--開始時間
 * 
 * @param {string} fileName 執行function名稱
 * */
function countTime(fileName = null) {

  let start_time = new Date().getTime();
  let data = [
    fileName,
    start_time
  ]
  return data;
}
/**
 * 結束時間
 * 放置於程式執行結束處，回傳結果的結束時間
 * 
 * @param {variable} start 開始執行程式的變數
 */
function endTime(start) {
  let end_time = new Date().getTime();

  return start[0] + '執行時間:' + (end_time - start[1]) / 5000 + 'ms';
}


/*
22. Generate Parentheses
Difficulty:Medium

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

-----------------
input n=數字
return 出()符合不同的完整排列方式

n=3
return 3個()
-------------------

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]


Constraints:
1 <= n <= 8
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n < 1) {
    return;
  }

};
const n = 3;
// should return: ["((()))","(()())","(())()","()(())","()()()"]
// console.log(generateParenthesis(n));

/**
 * 524. Longest Word in Dictionary through Deleting
 * Difficulty:Medium
 * 
 * Given a string s and a string array dictionary, return the longest string in the dictionary that can be formed by deleting some of the given string characters. 
 * If there is more than one possible result, return the longest word with the smallest lexicographical order. 
 * If there is no possible result, return the empty string.
 * 
 * Example 1:
 * Input: s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
 * Output: "apple"
 * 
 * Example 2:
 * Input: s = "abpcplea", dictionary = ["a","b","c"]
 * Output: "a"
 * 
 * Constraints:
 * 1 <= s.length <= 1000
 * 1 <= dictionary.length <= 1000
 * 1 <= dictionary[i].length <= 1000
 * s and dictionary[i] consist of lowercase English letters.
 */
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  /**
   * Input string & array.
   * Output string.
   */
  let pattern = /^[a-z]+$/;
  if (!s.match(pattern) || !s.match(pattern).join("")) {
    return;
  }

  // array.push(), array.pop()
  let splitS = s.split(''); // obj
  let splitDict = dictionary.join('').split(''); // obj

  let result = [];
  let str = '';

  for (let i = 0; i < splitDict.length; i++) {
    splitS.includes(splitDict[i])
  }
  return result;
};
// const s = "abpcplea";
// const dictionary = ["ale", "apple", "monkey", "plea"];
// no 'b','c' in dictionary
// return apple
// console.log(findLongestWord(s, dictionary));


/**
 * 43. Multiply Strings
 * Difficulty:Medium
 *
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
 * Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
 *
 * Input num1 and num2 are 非負數以字串方式呈現
 * Output num1 * num2(以字串方式呈現)
 * 不能使用內建含式或直接把Input轉成數字
 * -------------------------------------------
 * Example 1:
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 *
 * Example 2:
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 *
 * Constraints:
 * 1 <= num1.length, num2.length <= 200
 * num1 and num2 consist of digits only.
 * Both num1 and num2 do not contain any leading zero, except the number 0 itself.
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {

  let pattern = /^[0-9]+$/;

  if (!num1.match(pattern) || !num2.match(pattern) || Number(num1) === 0 || Number(num2) === 0) {
    return;
  }



};
// const num1 = "2", num2 = "3";
// "6"
// const num1 = "123", num2 = "456";
// "56088"
// console.log(multiply(num1, num2));



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

  // two pointer solution.Big O(n)
  if (nums.length < 1 || !target) {
    return;
  }

  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  let result = [];

  while (left < right) {
    if (nums[left] + nums[right] === target) {
      // return [left + 1, right + 1];
      result.push(left, right);
      left++;
      right--;
    } else if (nums[left] + nums[right] < target) {
      left++;
    } else {
      right--;
    }
  }
  return result;
};
// const target = 9;
// const nums = [2, 7, 11, 15];
//            ^          ^
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// const nums = [3, 2, 4];
// const target = 6;
// Output: [1,2]
// nums[1] + nums[2] = 6
// console.log(twoSum(nums, target));



/**
 * Check the exam
 * 
 * The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
 * The two arrays are not empty and are the same length. 
 * Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
 * 
 * If the score < 0, return 0.
 * For example:
 * checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
 * checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
 * checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
 * checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
 */
function checkExam(array1, array2) {
  /**
   * 給兩個字串陣列參數，檢查這兩個參數中的元素有哪些不一樣，再依據他們的比對結果作加減分
   * 一樣:+4分
   * 不一樣:-1
   * 空:+0
   * ---------
   * 參數長度會相等，可能會有空字串
   * 比對兩個參數元素
   */
  let sum = 0;
  if (array1.length !== array2.length) {
    return;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      sum = sum + 4;
    } else if (array1[i] !== array2[i]) {
      sum = sum - 1;
    }
    if (array1[i] === "" || array2[i] === "") {
      sum = sum;
    }
  }
  return sum < 0 ? 0 : sum;
}
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));
// 7

/**
 * 1415. The k-th Lexicographical String of All Happy Strings of Length n
 * 
 * A happy string is a string that:

consists only of letters of the set ['a', 'b', 'c'].
s[i] != s[i + 1] for all values of i from 1 to s.length - 1 (string is 1-indexed).
For example, strings "abc", "ac", "b" and "abcbabcbcb" are all happy strings and strings "aa", "baa" and "ababbc" are not happy strings.

Given two integers n and k, consider a list of all happy strings of length n sorted in lexicographical order.

Return the kth string of this list or return an empty string if there are less than k happy strings of length n.

Hint:
 Generate recursively all the happy strings of length n.
 Sort them in lexicographical order and return the kth string if it exists.

Example 1:
Input: n = 1, k = 3
Output: "c"
Explanation: The list ["a", "b", "c"] contains all happy strings of length 1. The third string is "c".

Example 2:
Input: n = 1, k = 4
Output: ""
Explanation: There are only 3 happy strings of length 1.

Example 3:
Input: n = 3, k = 9
Output: "cab"
Explanation: There are 12 different happy string of length 3 ["aba", "abc", "aca", "acb", "bab", "bac", "bca", "bcb", "cab", "cac", "cba", "cbc"]. You will find the 9th string = "cab"
 

Constraints:
1 <= n <= 10
1 <= k <= 100
 */
/**
 * Happy string: 
 *  只含有['a','b','c']、s[i] != s[i+1]
 * 
 * 參數為字串陣列長度為N，和數字K，回傳第K個happy string，若N內happy string少於K，回傳空字串
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  // 只會有a、b、c
  // 先取得a、b、c，符合數字n是第幾個字母
};
// let c = 3, k = 9;
//"cab"
// console.log(getHappyString(c, k));


/**
 * 2099. Find Subsequence of Length K With the Largest Sum
 * 
 * You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum.
 * Return any such subsequence as an integer array of length k.
 * 
 * A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
 * 
 * Hints:
 * 1.From a greedy perspective, what k elements should you pick?
 * 2.Could you sort the array while maintaining the index?
 * 
 * Example 1:
 * Input: nums = [2,1,3,3], k = 2
 * Output: [3,3]
 * Explanation:
 * The subsequence has the largest sum of 3 + 3 = 6.
 * 
 * Example 2:
 * Input: nums = [-1,-2,3,4], k = 3
 * Output: [-1,3,4]
 * Explanation: 
 * The subsequence has the largest sum of -1 + 3 + 4 = 6.
 * 
 * Example 3:
 * Input: nums = [3,4,3,3], k = 2
 * Output: [3,4]
 * Explanation:
 * The subsequence has the largest sum of 3 + 4 = 7. 
 * Another possible subsequence is [4, 3].
 *  
 * 
 * Constraints:
 * 1 <= nums.length <= 1000
 * -105 <= nums[i] <= 105
 * 1 <= k <= nums.length
 *  
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
  // 參數為一個數值陣列nums和數值k，找出符合長度k的最大合subsequence
  // subsequence = 在不改變元素位置的情況下，移除或保留元素
  let temp = [];
  let j = 0;
  let obj = {};
  for(let i = 0;i < nums.length;i++){
    obj[i] = nums[i];
  }

  while(temp.length !== k){
    let max = Math.max(...nums);
    const index = nums.indexOf(max);
    if (index > -1) { 
      nums.splice(index, 1);
      temp.push(max);
    }
  }
  console.log(temp)
  // console.log(nums)
  for(const [key,value] of Object.entries(obj)){
    console.log(key)
  }
};
// let nums = [-1,-2,3,4], k = 3;
// [-1,3,4]
// let nums = [3,4,3,3], k = 2;
// [4,3]
// let nums = [2,1,3,3], k = 2;
// 「3,3]
// console.log(maxSubsequence(nums,k))

/**
 * 821. Shortest Distance to a Character
 * 
 * Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from 
 * index i to the closest occurrence of character c in s.
 * The distance between two indices i and j is abs(i - j), where abs is the absolute value function.
 * 
 * Example 1:
 * Input: s = "loveleetcode", c = "e"
 * Output: [3,2,1,0,1,0,0,1,2,2,1,0]
 * Explanation: The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
 * The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
 * The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
 * For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
 * The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.
 * 
 * Example 2:
 * Input: s = "aaab", c = "b"
 * Output: [3,2,1,0]
 *  
 * Constraints:
 * 1 <= s.length <= 104
 * s[i] and c are lowercase English letters.
 * It is guaranteed that c occurs at least once in s.
 * 
 * 參數為字串s和s內的字元c，回傳長度為s且將abs(非c的index - 相鄰c的index)結果依序放入結果陣列內
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    
};
let s = "loveleetcode", c = "e";
// [3,2,1,0,1,0,0,1,2,2,1,0]
// console.log(shortestToChar(s,c));

