/**
 * Sum of Digits
 * 
 * Given a number n, find the sum of its digits.
 * 參數為數字n，依據位數加總
 * 
 * @param {number} n
 * @returns {number}
 */
var sumDigit = function(n) {
    /**
     * Time Complexity: O(log10n)
     * Auxiliary Space: O(1)
     */
    let sum = 0;
    while(n !== 0){
      let lastDigit = n % 10;
      sum += lastDigit;
      n = Math.floor(n / 10);
    }
    return sum;
}
// let n = 687;
// 21 （6+8+7）
// console.log(sumDigit(n));

/**
 * Reverse Digits
 * 
 * Given an Integer n, find the reverse of its digits.
 * 
 * @param {number} n
 * @returns {number}
 */
var reverseDigit = function (n) {
    return parseInt(n.toString().split("").reverse().join(""));
}
// let n = 122;
// 221
// console.log(reverseDigit(n));

/**
 * Prime Testing
 * 
 * Given a positive integer, check if the number is prime or not. 
 * A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself. 
 * Examples of the first few prime numbers are {2, 3, 5, …}
 * 
 * 給一個數字參數n，判斷該參數是否為質數(除了1和它自己以外，無法被其他數整除)
 * 
 * @param {number} n
 * @returns {boolean}
 */
var primeTest = function(n) {
  /**
   * Time complexity: O(n)
   * Auxiliary Space: O(1)
   */
  if(n <= 1){
    return false;
  }
  for(let i = 2;i < n;i++) {
    if(i % n === 0){
      return false;
    }
  }
  return true;
}
// let n = 11;
// true
// console.log(primeTest(n));


/**
 * Check Power
 * 
 * Given two positive numbers x and y, check if y is a power of x or not.
 * 兩個正數x,y，檢查y是否是x的平方
 * 
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
var checkPower = function (x,y) {
  /**
   * Time complexity: O(Logxy)
   * Auxiliary space: O(1)
   */
  // if(x === 1){
  //   return y === 1;
  // }
  // let pow = 1;
  // while(pow < y){
  //   pow *= x;
  // }
  // return pow === y;


  // solution 2.
  /**
   * Time complexity: O(1)
   * Auxiliary space: O(1)
   */
  let res = Math.log(x) / Math.log(y);
  return res === Math.floor(res);
}
// let x = 10, y = 1;
// True
// console.log(checkPower(x,y));

/**
 * Distance between Two Points
 * 
 * You are given two coordinates (x1, y1) and (x2, y2) of a two-dimensional graph. Find the distance between them.
 * 
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns {number}
 */
var distance = function (x1,y1,x2,y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
// let x1 = 3,y1 = 4,x2 = 7, y2 = 7;
// 5
// console.log(distance(x1,y1,x2,y2));

/**
 * Valid Triangle
 * 
 * Given three sides, check whether triangle is valid or not.
 * 
 * 給3個數字，檢查他們是否能組成三角形
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {string} Valid or Invalid
 */
var validTriangle = function(a,b,c) {
  // 三角形任兩邊和 > 剩下的一邊

  /**
   * Time Complexity: O(1)
   * Auxiliary Space: O(1)
   */
  let res = "Invalid";
  if((a + b) > c || (b + c) > a || (c + a) > b){
    res = "Valid";
  }
  return res;
}
let a = 7, b = 10, c = 5;
// Valid
console.log(validTriangle(a,b,c));

/**
 * Factorial of a Number
 * 
 * Given the number n (n >=0), find its factorial. 
 * Factorial of n is defined as 1 x 2 x … x n. 
 * For n = 0, factorial is 1. 
 * We are going to discuss iterative and recursive programs in this post.
 * 
 * @param {number} n
 * @returns {number}
 */
var factorial = function (n) {
  /**
   * Time Complexity: O(n)
   * Auxiliary Space: O(1)
   */
  let res = 1;
  for (let i = 2; i <= n; i++){
    res *= i;
  }
  return res;
}
// let n = 5;
// 120
// console.log(factorial(n));

/**
 * Square Root
 * 
 * Given a positive integer n, find its square root. If n is not a perfect square, then return floor of √n.
 * 
 * @param {number} n
 * @returns {number}
 */
var squareRoot = function (n) {
  /**
   * Time Complexity – O(logn)
   * Auxiliary Space – O(1)
   */
  return Math.floor(Math.sqrt(n));
} 
// let n = 11;
// 3
// console.log(squareRoot(n));

/**
 * Largest in an Array
 * 
 * Given an array arr. The task is to find the largest element in the given array. 
 *
 * @param {number[]} arr
 * @returns {number}
 */
var findMax = function(arr) {
  // Solution 1.
  // O(n) Time and O(1) Space
  // return Math.max(...arr);

  // Solution 2.
  // O(n) Time and O(1) Space
  let tempMax = arr[0];
  for(let i = 0;i < arr.length;i++) {
    if(arr[i] > tempMax){
      tempMax = arr[i];
    }
  }
  return tempMax;
}
// let n = [12,6,23,9];
// 23
// console.log(findMax(n));

/**
 * Second Largest in an array
 * 
 * Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.
 * Note: If the second largest element does not exist, return -1.
 * 
 * 找出陣列中第二大的元素並回傳，若沒有則回傳-1
 * 
 * @param {number[]} arr
 * @returns {number}
 */
var secLargest = function (arr){
  // desc
  arr.sort((a,b) => b - a);
  let ans = -1;
  for(let i = 0;i < arr.length;i++) {
    if(arr[i] > arr[i + 1] && i === 1){
      ans = arr[i];
    }
  }
  return ans;
}
// let arr = [12, 35, 1, 10, 34, 1];
// 34
// let arr = [10,10,10];
// -1
// console.log(secLargest(arr));

/**
 * Sum of Squares of Naturals
 * 
 * Given a positive integer n, we have to find the sum of squares of first n natural numbers. 
 * @param {number} n
 * @returns {number}
 */
var sumSquaresOfNaturals = function (n) {
  // O(n) Time and O(1) Space
  let sum = 0;
  for(let i = 1;i <= n;i++) {
    sum += (i * i);
  }
  return sum;
}
// let n = 2;
// 5
// console.log(sumSquaresOfNaturals(n));

/**
 * Pair Cube Count
 * 
 * Given n, count all ‘a’ and ‘b’ that satisfy the condition a^3 + b^3 = n. Where (a, b) and (b, a) are considered two different pairs
 * 
 * 計算出符合 a^3 = n ＆ b^3 = n 且能成一對但不同值的a,b有幾個
 * @param {number} n
 * @returns {number}
 */
var pairCount = function(n){
  // O(n^2) time and O(1) space
  let count = 0;
  for(let a = 1;a <= n;a++){
    for(let b = 0;b <= n;b++) {
      if(a ** 3 + b ** 3 === n){
        count++;
      }
    }
  }
  return count;
}
// let n = 9;
// 2
// 1^3 + 2^3 = 9 and 2^3 + 1^3 = 9
// console.log(pairCount(n));

/**
 * GCD or HCF
 * 
 * Given two numbers a and b, the task is to find the GCD of the two numbers.
 * Note: The GCD (Greatest Common Divisor) or HCF (Highest Common Factor) of two numbers is the largest number that divides both of them. 
 * 
 * 參數為a,b兩個數字，找出這兩個數字共同的gcd
 * GCD: 最大且能被整除的
 * 
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
var gcd = function (a,b) {
  let gcdOfa = [];
  let gcdOfb = [];
  for(let i = 0;i <= a;i++){
    if(a % i === 0){
      gcdOfa.push(i);
    }
  }
  for(let i = 0;i <= b;i++) {
    if(b % i === 0){
      gcdOfb.push(i);
    }
  }
  const gcdSetA = new Set(gcdOfa);
  const gcdSetB = new Set(gcdOfb);
  const same = gcdSetA.intersection(gcdSetB);
  return Math.max(...same);
}
// let a = 98;
// let b = 56;
/**
 * 14
*/
// console.log(gcd(a,b));

/**
 * LCM of Two Numbers
 * 
 * LCM of two numbers is the smallest number which can be divided by both numbers. 
 * 
 * LCM:
 * The Least Common Multiple (LCM) of two numbers is the smallest number that is evenly divisible by both of them.
 * 
 * 能夠被a&b整除的最小數
 * 
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
var lcm = function(a,b) {
  /**
   * Time Complexity: O(min(a,b))
   * Auxiliary Space: O(1)
   */
  let max = Math.max(a,b);
  let min = Math.min(a,b);
  let ans = 0;
  for(let i = max;i <= a * b;i+=max) {
    if(i % min === 0){
      ans = i;
    }
  }
  return ans;

}
// let a = 5, b = 11;
// 55
// console.log(lcm(a,b));

/**
 * Missing Number
 * 
 * Given an array arr[] of size n-1 with distinct integers in the range of [1, n]. 
 * This array represents a permutation of the integers from 1 to n with one element missing. Find the missing element in the array.
 * 
 * @param {number[]} arr
 * @returns {number}
 */
var missingN = function(arr){
  let ans = 0;
  let min = Math.min(...arr);
  for(let i = min;i < arr.length;i++){
    if(!arr.includes(i)){
      ans = i;
    }
  }
  return ans;
}
// let arr = [8, 2, 4, 5, 3, 7, 1];
// 6
// console.log(missingN(arr));

/**
 * Perfect Number
 * 
 * A number is a perfect number if is equal to the sum of its proper divisors, that is, the sum of its positive divisors excluding the number itself. 
 * The task is to find whether a given positive integer n is perfect or not.
 * 
 * @param {number} n
 * @returns {boolean}
 */
var perfectN = function(n) {
  // O(n) Time and O(1) Space
  let sum = 0;
  for(let i = 0;i < n;i++) {
    if(n % i === 0){
      sum+=i;
    }
  }
  return sum % n === 0;
}
// let n = 15;
/**
 * Output: false
Divisors of 15 are 1, 3 and 5. Sum of divisors is 9 which is not equal to 15.
 */
// console.log(perfectN(n));

/**
 * Fizz Buzz
 * 
 * Given an integer n, for every positive integer i <= n, the task is to print,
 * “FizzBuzz” if i is divisible by 3 and 5,
 * “Fizz” if i is divisible by 3,
 * “Buzz” if i is divisible by 5
 * “i” as a string, if none of the conditions are true.
 * 
 * @param {number} n
 * @returns {string[]}
 */
var fizzBuzz = function(n){
  /**
   * Time Complexity: O(n) 從 1 -n
   * Auxiliary Space: O(n), for storing the result
   */
  let res = [];
  for(let i = 1;i <= n;i++) {
    if(i % 3 === 0 && i % 5 === 0){
      // i能被3和5整除，"FizzBuzz"
      res.push("FizzBuzz");
    }else if(i % 3 === 0){
      // 能被3整除，"Fizz"
      res.push("Fizz");
    }else if(i % 5 === 0){
      // 能被5整除，"Buzz"
      res.push("Buzz");
    }else{
      // i以字串呈現
      res.push(i.toString());
    }
  }
  return res;
}
// let n = 10;
// [“1”, “2”, “Fizz”, “4”, “Buzz”, “Fizz”, “7”, “8”, “Fizz”, “Buzz”]
// console.log(fizzBuzz(n));

/**
 * Day of the Week
 * 
 * Given a date (day, month, year), the task is to determine the day of the week on which that date falls. 
 * The function should be able to compute the day for any date in the past or future. 
 * The function should return values from 0 to 6 where 0 means Sunday, 1 Monday and so on.
 * 
 * 回傳星期幾
 * 
 * @param {number} date
 * @param {number} month
 * @param {number} year
 * @returns {number}
 */
var dayOfWeek = function(date,month,year){
  /**
   * Formula:
   * dayOfWeek = (d + monthCode + yearCode) % 7
   */
  // 不包含leap年，若包含則是[6,2,3,6,1,4,6,2,5,0,3,5]
  let monthCode = [0,3,3,6,1,4,6,2,5,0,3,5];
  year -= (month < 3) ? 1 : 0;
  // leap year (year / 4 - year / 100 + year / 400)
  return Math.round((year / 4 - year / 100 + year / 400 + monthCode[month - 1] + date) % 7); 

}
// let d = 30, m = 8, y = 2010;
// 1
// 30th August 2010 was a Monday.
// console.log(dayOfWeek(d,m,y));


/**
 * First Repeating
 * 
 * Given an array of integers arr[], The task is to find the index of first repeating element in it 
 * i.e. the element that occurs more than once and whose index of the first occurrence is the smallest. 
 * 
 * 找出element出現次數>1且index是最小的值
 * 
 * @param {number[]} arr
 * @returns {number}
 */
var firstRepeat = function(arr){
  // obj計算element出現次數
  let obj = {};
  let temp = [];
  for(let i = 0;i < arr.length;i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }
  for(const [key,value] of Object.entries(obj)){
    if(value >= 2){
      // 將出現次數大於2的key塞進temp陣列內
      temp.push(parseInt(key));
    }
  }
  for(let i = 0;i < arr.length;i++) {
    // 找出第一個符合條件的index
    let index = temp.findIndex((element) => element === arr[i]);
    if(temp.includes(arr[i]) && index !== -1){
      return arr[i];
    }
  }
}
// let arr = [10, 5, 3, 4, 3, 5, 6];
// 5
// let arr = [6, 10, 5, 4, 9, 120, 4, 6, 10];
// 6
// console.log(firstRepeat(arr));

/**
 * Missing and Repeating
 * 
 * Given an unsorted array of size n. Array elements are in the range of 1 to n. 
 * One number from set {1, 2, …n} is missing and one number occurs twice in the array. The task is to find these two numbers.
 * 
 * 參數為一個未排序的數字陣列。從中找出沒出現的數字和出現2次的數字
 * range: 1 - n;
 * 
 * 
 * @param {number[]} arr
 * @returns {number[]} 
*/
var missingAndRepeat = function (arr) {
  let obj = {};
  let missing = 0;
  let repeat = 0;
  for(let i = 0;i < arr.length;i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;

    // missing number.
    if(!arr.includes(i)){
      missing = i;
    }
  }
  for(const [key,value] of Object.entries(obj)){
    if(value >= 2){
      repeat = parseInt(key);
    }
  }

  return [repeat,missing];
}
// let arr = [3, 1, 3];
// [3,2]
// console.log(missingAndRepeat(arr));

/**
 * Nth Fibonacci Number
 * 
 * Given a positive integer n, the task is to find the nth Fibonacci number.
 * The Fibonacci sequence is a sequence where the next term is the sum of the previous two terms.
 * The first two terms of the Fibonacci sequence are 0 followed by 1. The Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21
 * 
 * @param {number} n
 * @returns {number}
 */
var fib = function(n) {
  if(n <= 1){
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}
// let n = 2;
// 1
// console.log(fib(n));

/**
 * Decimal to Binary
 * 
 * Given a decimal number n, the task is to convert the given decimal number into an equivalent binary number.
 * 
 * @param {number} n
 * @returns {string}
 */
var decTobin = function(n) {
  // let res = [];
  // while(n !== 0){
  //   let bit = n % 2;
  //   res.push(String(bit));
  //   n = Math.floor(n / 2);
  // }
  // res.reverse();
  // return res.join("");

  // 
  return n.toString(2);
}
// let n = 12
//"1100";
// console.log(decTobin(n));

/**
 * N-th term of 1, 3, 6, 10, 15, 21…
 * 
 * Given a number n, find the n-th term in the series 1, 3, 6, 10, 15, 21…
 * 
 * @param {number} n
 * @returns {number}
 */
var nth = function(n){
  // O(n) time and O(1) space
  let ans = 0;
  for(let i = 0; i<= n;i++) {
    ans+=i;
  }
  return ans;

  // O(1) time and O(1) space
  // return parseInt(n * (n + 1) / 2);
}
// let n = 3;
// 6
// console.log(nth(n));


/**
 * Armstrong Number
 * 
 * Given a number x, determine whether the given number is Armstrong’s number or not. 
 * A positive integer of n digits is called an Armstrong number of order n (order is the number of digits) if
 * abcd… = pow(a,n) + pow(b,n) + pow(c,n) + pow(d,n) + ….
 * 
 * Here a, b, c and d are digits of input number abcd…..
 * 
 * @param {number} n
 * @returns {boolean}
 */
var armstrongNumber = function(n) {
  let len = n.toString().split("");
  let sum = 0;
  for(let i = 0;i < len.length;i++){
    sum += Math.pow(len[i],3);
  }
  return sum === n;
}
// let n = 153;
// Yes(true)
// 153 is an Armstrong number, 1*1*1 + 5*5*5 + 3*3*3 = 153
// console.log(armstrongNumber(n));

/**
 * Palindrome Number
 * 
 * Given an integer n, find whether the number is Palindrome or not. 
 * A number is a Palindrome if it remains the same when its digits are reversed.
 * 
 * 檢查反轉後是否一樣
 * 
 * @param {number} n
 * @returns {boolean}
 */
var palindromeNumber = function(n) {
  // let arr = [];
  // let toStr = n.toString().split("");
  // for(let i = toStr.length - 1;i >= 0;i--){
  //   arr.push(parseInt(toStr[i]));
  // }
  // return parseInt(arr.join("")) === n;

  // 可能有負數、小數點
  let toStr = Math.abs(n).toString();
  for(let i = 0;i < toStr.length / 2;i++) {
    if(toStr[i] !== toStr[toStr.length- i - 1]){
      return false;
    }
  }
  return true;
}
// let n = 12321;
// Yes (12321)
// 12321 is a Palindrome number because after reversing its digits, the number becomes 12321 which is the same as the original number.
// console.log(palindromeNumber(n));

/**
 * Digit Root
 * 
 * The digital root of a positive integer is found by summing the digits of the integer. 
 * If the resulting value is a single digit then that digit is the digital root. 
 * If the resulting value contains two or more digits, those digits are summed and the process is repeated. 
 * This is continued as long as necessary to obtain a single digit.
 * 
 * Given a number, the task is to find its digital root. 
 * The input number may be large and it may not be possible to store even if we use long long int.
 * 
 * @param {string} num
 * @returns {number}
 */
var digitRoot = function(num) {
  let recursive = num.toString().split('').reduce((sum, s) => {
    return sum += Number(s);
  }, 0);
  return recursive < 10 ? recursive : digitRoot(recursive);
}
let num = "1234";
// Output : 1
// Explanation : The sum of 1+2+3+4 = 10, digSum(x) == 10,Hence ans will be 1+0 = 1;
console.log(digitRoot(num));