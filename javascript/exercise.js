// array 加總
/**
 * @param {number[]} arr
 * @return {number}
 */
function sumArray(arr) {
    if (arr.length < 2) {
        // array.join => array to string 
        // Number => atring to number
        return Number(arr.join());
    }

    // solution 1:
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;

    // solution 2:
    // return arr.reduce((a, b) => a + b, 0);
}
const arr = [4];
console.log(sumArray(arr));

/* 

2021-02-09
練習JS array所有methods

Goal:
    1. return an array with sort(from minest to greatest)  => ans: [1,3,5,5,6,9,12,14,98]  ->bubble sort
    2. return int (to sum array element) => ans:153 -> array methods:reduce
    3. return the greatest Int of the array => ans:98 -> Math.max.apply()
    4. return the duplicate int of the array => ans:5
    5. return an array with sort(from greatest to minest)  => ans: [98,14,12,9,6,5,5,3,1] 
    6. return the minest int og the array => ans:1 -> Math.min.apply() or sort()
*/

function TestArray(array) {

    // goal 1:
    // let swap = true;
    // for (let i = 0; i < array.length; i++) {
    //     swap = false;
    //     for (let j = 0; j < array.length - 1 - i; j++) {
    //         swap = true;
    //         if (array[j] > array[j + 1]) {
    //             [array[j], array[j + 1]] = [array[j + 1], array[j]];
    //         }
    //     }
    // }
    // return array;

    // goal 2:
    // return array.reduce((sum, current) => sum + current);

    // goal 3:
    // A.
    // return Math.max.apply(null, array);
    // B.
    // let n = array.length - 1;
    // return array[n];

    // goal 4:
    // Solution 1:
    // Will return all duplicates numbers from an array
    let result = [];
    let slice_arr = array.slice().sort();
    // 最後一個是最大數，所以減一
    for (let i = 0; i < slice_arr.length - 1; i++) {
        // console.log(slice_arr[i]); // 1 12 14 3 5 5 6 9 
        if (slice_arr[i] == slice_arr[i - 1]) {
            result.push(slice_arr[i]);
        }
    }
    return result;
    // Solution 2:
    // Will only return 1 duplicate number from an array
    // let result = [];

    // 會添加一個或多個元素至陣列的開頭，並且回傳陣列的新長度。 var arr = [1, 2]; arr.unshift(0); => [0,1,2];
    //  array.unshift(0);
    //  for (let i = 0; i < array.length; i++) {
    //      const element = Math.abs(array[i]);
    //      if (array[element] < 0) {
    //          result.push(element);
    //      }
    //      array[element] *= -1;
    //  }
    //  return result;

    // goal 6:
    // A.
    // return Math.min.apply(null,array);
    // B.
    // let result = array.sort((a, b) => a - b);
    // return result[0];
}
const myArray = [6, 3, 12, 5, 5, 14, 1, 9, 98];
console.log(TestArray(myArray))


// 取不重複值的array
// return array
// remove duplicates from an array in place
function noDuplicate(array) {

    /* 
    Solution 1:
    Set
    Set is a new data object introduced in ES6. Because Set only lets you store unique values. 
    When you pass in an array, it will remove any duplicate values.
    */
    // const uniqueSet = new Set(array);
    // return [...uniqueSet];

    /* 
    Solution 2:
    1.indexOf:回傳所在位置的 index，如果找不到會回傳 -1
    2.filter:filter() 會回傳一個陣列，只會回傳條件是 true 的物件，適合用在搜尋符合條件的資料。
    */
    // return array.filter((item, index) => array.indexOf(item) == index);

    /**
     * Solution 3:
     * reduce
     * Array.prototype.reduce(accumulator, currentValue, currentIndex, array [, initialValue])
        reduce() 可以與前一個回傳的值再次作運算。
        參數包含以下：
        accumulator:前一個回傳的值，從 initialValue 開始．若沒有 initialValue 就是從陣列的 index 0 開始
        currentValue :現在的值
        currentIndex:現在的參數位置-Optional
        array :全部陣列 -Optional
        initialValue:初始值- Optional
     */
    return array.reduce((item, index) => item.includes(index) ? item : [...item, index], []);

}
const arr = ['apple', 'orange', 'grape', 'apple', 'pineapple'];
console.log(`The result is ${noDuplicate(arr)}`);


/*
 找出array中大於target的值
 若大於target，重組，回傳成新陣列
 若"都"沒有大於target，return null
*/
function test(array, target) {
    let result = [];

    if (array.length <= 1 && array > target) {
        return array;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] > target) {
            result.push(array[i]);
        }
    }
    return result;
}
const a = [1, 6, 48, 6, 35, 79, 86, 5, 23];
const t = 30;
// should return 48,35,79,86
console.log(`The result is ${test(a, t)}`);

/*
es5的class
*/
// constructor:
// function es5Class(name) {
//     this.name = name;
// }

// // 從es5Class那連結function
// es5Class.prototype.getName = function () {
//     return this.name;
// }

/* 
ES6的class(語法糖)
實際上的 JavaScript 本身並沒有 class 可以使用
*/

class es5Class {
    // constructor = function es5Class(name)
    constructor(name) {
        this.name = name;
    }
    // function
    getName() {
        return this.name;
    }
}
let test = new es5Class('Joe');
test.getName();
console.log(test);

// find largest and smallest number of array
function find(array) {
    if (array.length < 1) {
        return array;
    }
    // let result = [];
    // let max = Math.max.apply(null, array);
    // let min = Math.min.apply(null, array);

    // es6 to find largest and smallest int
    let max = Math.max(...array);
    let min = Math.min(...array);
    // console.log(min);

}
const nums = [12, 4, 65, 7, 2, 4, 12];
console.log(`The result is ${find(nums)}`);

// find all pairs of an integer array whose sum is equal to a given number?
function find(array, target) {
    let result = [];
    if (array.length < 2 && target == null) {
        return array;
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                result.push(array[j], array[i]);
            }
        }
    }

    return result;
}
const nums = [12, 4, 65, 7, 2, 4];
// should return 65,2
const t = 67;
console.log(`The result is ${find(nums, t)}`);

// 條件式3種:
// 以下結果都一樣
let money = 10;
let p;
// 1.三元
// const p = (money > 15) ? 'Expensive' : 'Cheap';

// 2.if else
// if (money > 15) {
//     p = 'Expensive';
// } else {
//     p = 'Cheap';
// }

// 3.switch
switch (money) {
    case 10:
        p = 'Cheap';
        break;
    case 15:
        p = 'Expensive';
        break;
    default:
        break;
}
console.log(p);