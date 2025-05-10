// debugger
import {ExecutionTimer} from './time.js';

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
// function countTime(fileName = null) {

//   let start_time = performance.now();
//     let end_time = performance.now();
//     return end_time - start_time;
// }
/**
 * 結束時間
 * 放置於程式執行結束處，回傳結果的結束時間
 * 
 * @param {variable} start 開始執行程式的變數
 */
// function endTime(start) {
//   let end_time = new Date().getTime();

//   return start[0] + '執行時間:' + (end_time - start[1]) / 5000 + 'ms';
// }


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
// const n = 3;
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
 * 2186. Minimum Number of Steps to Make Two Strings Anagram II
 * 
 * 兩個字串參數s & t，在一次操作中，可以加上任一字母至s或t中。
 * 回傳讓s和t變成anagrams的最少步驟數
 * 
 * anagrams:長度一樣、字母一樣但排序可以不一樣
 * 
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  // 檢查是否是anagrams可用：sort、count
  let countOP = 0;
  let mapS = new Map();
  let mapT = new Map();
  // 參數s 字母出現次數
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    mapS.has(element) ? mapS.set(element, mapS.get(element) + 1) : mapS.set(element, 1);
  }
  // 參數t 字母出現次數
  for (let i = 0; i < t.length; i++) {
    const element = t[i];
    mapT.has(element) ? mapT.set(element, mapT.get(element) + 1) : mapT.set(element, 1);
  }

  // 字母出現幾次就得是幾次
  // t有但s沒有的字母有幾個 (a,s) 2
  // s有但t沒有的字母有幾個 (l,e,e,d,e) 5
  for(let [key,value] of mapS){
    if(!mapT.has(key)){
      countOP+= value;
    }

  }
  for(let [key,value] of mapT){
    if(!mapS.has(key)){
      countOP+= value;
    }
  }
  return countOP;

  // solution 2.
  // use obj
  // let countOP = 0;
  // let freq = {};
  // for (const element of s) {
  //   freq[element] =  freq[element] || 0) + 1;
  // }
  // for(const element of t) {
  //   if(!freq[element]){
  //     continue;
  //   }
  //   --freq[element];
  //   ++countOP;
  // }
  // return s.length + t.length - countOP * 2;
};
// let s = "leetcode", t = "coats";
/**
 * 7
 * - In 2 steps, we can append the letters in "as" onto s = "leetcode", forming s = "leetcodeas".
 * - In 5 steps, we can append the letters in "leede" onto t = "coats", forming t = "coatsleede".
 * "leetcodeas" and "coatsleede" are now anagrams of each other.
 * We used a total of 2 + 5 = 7 steps.
 * It can be shown that there is no way to make them anagrams of each other with less than 7 steps.
 */
// let s = "cotxazilut",t = "nahrrmcchxwrieqqdwdpneitkxgnt";
// 27
// console.log(minSteps(s,t));



class Point {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }
}

// Returns true if two rectangles (l1, r1) and (l2, r2) overlap
/**
 * Overlapping Rectangles
 * 
 * Given two rectangles, find if the given two rectangles overlap or not.
 * Note that a rectangle can be represented by two coordinates, top left and bottom right. So mainly we are given following four coordinates. 
 *  l1: Top Left coordinate of first rectangle. 
 *  r1: Bottom Right coordinate of first rectangle. 
 *  l2: Top Left coordinate of second rectangle. 
 *  r2: Bottom Right coordinate of second rectangle.
 * 
 * @param {number} l1
 * @returns {boolean}
 */
var doOverlap = function(l1, r1, l2, r2) {
  
}

// const l1 = new Point(0, 10);
// const r1 = new Point(10, 0);
// const l2 = new Point(5, 5);
// const r2 = new Point(15, 0);

// if (doOverlap(l1, r1, l2, r2)) {
//   console.log("Rectangles Overlap");
// } else {
//   console.log("Rectangles Don't Overlap");
// }



/**
 * Largest three in an array
 * 
 * Given an array arr[], the task is to find the top three largest distinct integers present in the array.
 * Note: If there are less than three distinct elements in the array, then return the available distinct numbers in descending order.
 * 
 * @param {number[]} arr
 * @returns {number[]}
 */
var largestThree = function(arr) {

}
// let arr = [10, 4, 3, 50, 23, 90];
// [90, 50, 23]
// console.log(largestThree(arr));

/**
 * Add Two Fraction
 * 
 * Given two integer arrays a[] and b[] containing two integers each representing the numerator and denominator of a fraction respectively. 
 * The task is to find the sum of the two fractions and return the numerator and denominator of the result.
 * 
 * 參數為數字陣列 a & b，長度各為2，分別代表分數的分子和分母。找出兩個分數的總和並傳回結果的分子和分母。
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
*/
var twoFraction = function(a,b) {

}
// let a = [1, 2] , b = [3, 2];
/**
 * [2, 1] 
 * Explanation: 1/2 + 3/2 = 2/1
 */
// console.log(twoFraction(a,b));


/**
 * K-th Digit in a^b
 * 
 * Given three numbers a, b and k, find k-th digit in ab from right side
 * 
 * @param {number} a
 * @param {number} b
 * @param {number} k
 * @returns {number}
 */
var kthDigit = function(a,b,k){

}
// let a = 3, b = 3, k = 1;
// Output : 7
// Explanation: 3^3 = 27 for k = 1. First digit is 7 in 27
// console.log(kthDigit(a,b,k));

/**
 * Fraction to Recurring Decimal
 * 
 * Given two integers a and b(b != 0), the task is to return the fraction a/b in string format. 
 * If the fractional part is repeating, enclose the repeating part in parentheses.
 * 
 * Examples: 
 * Input: a = 1, b = 2
 * Output: “0.5”
 * Explanation: 1/2 = 0.5 with no repeating part.
 * 
 * 
 * Input: a = 50, b = 22
 * Output: “2.(27)”
 * Explanation: 50/22 = 2.27272727… Since fractional part (27) is repeating, it is enclosed in parentheses.
 * 
 * @param {number} a
 * @param {number} b
 * @returns {string}
 * */
var fractionRecurringDecimal = function (a,b) {
  // 回傳a,b的分數，若小數點皆是重複數字，則加上括號 => .(XXX)
}
// let a = 1,b = 2;
// "0.5"
// console.log(fractionRecurringDecimal(a,b));

/**
 * Recurring Sequence in a Fraction
 * 
 * Given a fraction, find a recurring sequence of digits if it exists, otherwise, print “No recurring sequence”.
 * 
 * Examples:
 * Input  : Numerator = 8, Denominator = 3
 * Output : Recurring sequence is 6 
 * Explanation : 8/3 = 2.66666666…….  
 * 
 * Input : Numerator = 50, Denominator = 22
 * Output : Recurring sequence is 27
 * Explanation : 50/22 = 2.272727272….. 
 * 
 * Input : Numerator = 11, Denominator = 2
 * Output : No recurring sequence
 * Explanation : 11/2 = 5.5
 * 
 * @param {number} n
 * @param {number} d
 * @returns {string}
 */
var RecurringSequenceFraction = function (n,d) {
  

}
// let n = 8,d = 3
// Recurring sequence is 6 
// console.log(RecurringSequenceFraction(n,d));


/**
 * Compute nPr
 * 
 * Given two numbers, n and r, the task is to compute nPr, which represents the number of ways to arrange r elements from a set of n elements. 
 * It is calculated using the formula n!/(n−r)!, where “!” denotes the factorial operation.
 * nPr = n! / (n – r)! 
 */
var ComputenPr = function(n,r) {
  function fact(){
    let res = 1;
    for(let i = 2;i <= n;i++) {
      res *= i;
    }
    return res;
  }
  return fact(n) / fact(n - r);

}
// let n = 5,r = 2
// Output: 20
// Explanation: 5P2 = 5! / (5 – 2)!  = 20
// console.log(ComputenPr(n,r));


/**
 * 1769. Minimum Number of Operations to Move All Balls to Each Box
 * 
 * You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.
 * 
 * In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. 
 * Note that after doing so, there may be more than one ball in some boxes.
 * 
 * Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.
 * Each answer[i] is calculated considering the initial state of the boxes.
 * 
 * HInts:
 * 1.If you want to move a ball from box i to box j, you'll need abs(i-j) moves.
 * 2.To move all balls to some box, you can move them one by one.
 * 3.For each box i, iterate on each ball in a box j, and add abs(i-j) to answers[i].
 * 
 * Example 1:
 * Input: boxes = "110"
 * Output: [1,1,3]
 * Explanation: The answer for each box is as follows:
 * 1) First box: you will have to move one ball from the second box to the first box in one operation.
 * 2) Second box: you will have to move one ball from the first box to the second box in one operation.
 * 3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.
 * 
 * Example 2: 
 * Input: boxes = "001011"
 * Output: [11,8,5,4,3,4]
 *  
 * 
 * Constraints:
 * n == boxes.length
 * 1 <= n <= 2000
 * boxes[i] is either '0' or '1'.
 * 
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
  let result = [];
  for(let i = 0;i < boxes.length;i++) {
    if(boxes.charAt(i) === "1"){
      for(let j = 0;j < boxes.length;j++) {
        result[j] = Math.abs(parseInt(j - i));
      }
    }
  }
  return result;
};
// let boxes = "110";
// [1,1,3]
// console.log(minOperations(boxes));

/**
 * Next Permutation
 * 
 * Given an array arr[] of size n, the task is to print the lexicographically next greater permutation of the given array. 
 * If there does not exist any greater permutation, then find the lexicographically smallest permutation of the given array.
 * Let us understand the problem better by writing all permutations of [1, 2, 4] in lexicographical order: 
 * [1, 2, 4], [1, 4, 2], [2, 1, 4], [2, 4, 1], [4, 1, 2] and [4, 2, 1]. If we give any of the above (except the last) as input, 
 * we need to find the next one in sequence. If we give last as input, we need to return the first one.
 * 
 * Examples:
 * Input: arr = [2, 4, 1, 7, 5, 0]
 * Output: [2, 4, 5, 0, 1, 7]
 * Explanation: The next permutation of the given array is 2 4 5 0 1 7
 * 
 * Input: arr = {3, 2, 1]
 * Output: [1, 2, 3]
 * Explanation: As arr[] is the last permutation. So, the next permutation is the lowest one.
 * 
 * Input: arr = [1, 3, 5, 4, 2]
 * Output: [1, 4, 2, 3, 5]
 * Explanation: The next permutation of the given array is found by rearranging the elements in the next lexicographical order.
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */
var nextPermutation = function(arr) {

}
// let arr = [2, 4, 1, 7, 5, 0];
// console.log(nextPermutation(arr));